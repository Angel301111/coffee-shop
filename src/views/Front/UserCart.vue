<template>
    <LoadingOverlay :active="isLoading" :loader="'dots'"></LoadingOverlay>
    <div class="container">
    <div class="row mt-4 justify-content-center">
        <div class="col-lg-8">
        <template v-if="Array.isArray(cart.carts) && cart.carts[0]">
        <table class="table align-middle">
            <thead>
            <tr class="text-center">
                <th>圖片</th>
                <th width="200">品名</th>
                <th width="150">數量</th>
                <th>單價</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in cart.carts" :key="item.id" class="text-center">
                <td width="150" height="100">
                <div class="bg h-100 w-100"
                    :style="{backgroundImage: `url(${item.product.imageUrl})`}"></div>
            </td>
                <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                </div>
                </td>
                <td>
                <div class="input-group input-group-sm">
                    <input type="number" class="form-control"
                    min="1"
                    :disabled="status.loadingItem === item.id"
                    @change.prevent="updateCart(item)"
                    v-model.number="item.qty">
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
                </div>
                </td>
                <td class="">
                <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                {{ $filters.currency(item.final_total) }}
                </td>
                <td class="text-end">
                <button type="button" class="btn btn-outline-danger btn-sm"
                        :disabled="status.loadingItem === item.id"
                        @click.prevent="removeCartItem(item)">
                        <i class="bi bi-trash-fill"></i>
                </button>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
            <td class="text-start">
                <button class="btn btn-outline-danger btn-sm" type="button" @click="removeAll">
                全部刪除
            </button>
            </td>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
            </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click.prevent="addCouponCode">
                使用優惠碼
            </button>
            </div>
        </div>
        <div class="py-5 d-flex justify-content-center">
          <router-link to="/user/productlist" class="btn btn-outline-dark me-2">繼續購物</router-link>
          <router-link to="/user/orderform" class="btn btn-dark ms-2">填寫訂購資訊</router-link>
        </div>
        </template>
        <template v-else>
            <p class="fs-3 text-center my-5">目前購物車是空的喔 Σ(っ°Д°;)っ</p>
            <div class="d-flex justify-content-center">
            <router-link to="/user/productlist" class="btn btn-dark">馬上來杯咖啡吧！</router-link>
            </div>
        </template>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      isLoading: false,
      status: { // 商品正在加入中圖示
        loadingItem: '' // 對應選取項目的id
      },
      cart: {},
      coupon_code: ''
    }
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        console.log('Cart', res.data.data)
        this.cart = res.data.data
        this.isLoading = false
      })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.status.loadingItem = item.id
      const cart = {
        data: {
          product_id: item.product_id,
          qty: item.qty
        }
      }
      this.$http.put(url, cart)
        .then((res) => {
          this.status.loadingItem = ''
          this.$httpMessageState(res, '更新購物車')
          this.getCart()
        })
    },
    removeCartItem (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.status.loadingItem = item.id
      this.$http.delete(url)
        .then((res) => {
          this.status.loadingItem = ''
          this.$httpMessageState(res, '刪除')
          console.log(res.data)
          this.emitter.emit('update-cart')
          this.getCart()
        })
    },
    removeAll () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url).then((res) => {
        this.$httpMessageState(res, '全部刪除')
        console.log(res.data)
        this.emitter.emit('update-cart')
        this.getCart()
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        data: {
          code: this.coupon_code
        }
      }
      this.$http.post(url, coupon).then((res) => {
        console.log(res.data)
        this.$httpMessageState(res, '優惠卷使用')
        this.getCart()
      })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res.data)
          this.$httpMessageState(res, '訂單送出')
          this.$router.push(`/user/checkout/${res.data.orderId}`)
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
