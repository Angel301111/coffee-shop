<template>
  <LoadingOverlay :active="isLoading" :loader="'dots'"></LoadingOverlay>
  <header class="p-5 text-center bg cart-header-background">
    <h1 class="display-1 fw-bold text-light">My cart</h1>
  </header>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <template v-if="Array.isArray(cart.carts) && cart.carts[0]">
          <h2 class="text-center my-4 h3">─ 結帳流程 ─</h2>
          <div class="progress mb-4" style="height: 30px;">
          <div
            class="progress-bar bg-secondary"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            確認產品
          </div>
        </div>
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr class="text-center">
                  <th>產品</th>
                  <th>名稱</th>
                  <th>數量</th>
                  <th>單價</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in cart.carts"
                  :key="item.id"
                  class="text-center"
                >
                  <td>
                    <img
                      :src="item.product.imageUrl"
                      :alt="item.product.title"
                      class="rounded product-img"
                    />
                  </td>
                  <td class="text-nowrap">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td class="text-nowrap">
                    <div>
                      <label for="buy-quantity"></label>
                      <button
                        class="btn"
                        type="button"
                        @click="updateQuantity('minus', item)"
                        :disabled="
                          item.id === status.loadingItem || item.qty === 1
                        "
                      >
                        <i
                          class="bi bi-dash-circle-fill link-secondary fs-4"
                        ></i>
                      </button>
                      <input
                        style="width: 2rem"
                        class="quantity-input"
                        type="text"
                        name="buy-quantity"
                        id="buy-quantity"
                        value="1"
                        min="1"
                        v-model.number="item.qty"
                        readonly
                      />
                      <button
                        class="btn"
                        type="button"
                        @click="updateQuantity('plus', item)"
                      >
                        <i
                          class="bi bi-plus-circle-fill link-secondary fs-4"
                        ></i>
                      </button>
                    </div>
                  </td>
                  <td class="text-nowrap">
                    <small
                      v-if="cart.final_total !== cart.total"
                      class="text-success"
                    >
                      折扣價：
                    </small>
                    {{ $filters.currency(item.final_total) }}
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      :disabled="status.loadingItem === item.id"
                      @click.prevent="removeCartItem(item)"
                    >
                      <i class="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class="text-start" colspan="3">
                    <button
                      class="btn btn-outline-danger btn-sm"
                      type="button"
                      @click.prevent="openDelAllModal()"
                    >
                      全部刪除
                    </button>
                  </td>
                  <td colspan="1" class="text-end">總計</td>
                  <td class="text-end">{{ $filters.currency(cart.total) }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td></td>
                  <td colspan="3" class="text-end text-success">折扣價</td>
                  <td class="text-end text-success">
                    {{ $filters.currency(cart.final_total) }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="input-group my-3 input-group-sm">
            <input
              type="text"
              class="form-control input-border"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary btn-border"
                type="button"
                @click.prevent="addCouponCode"
              >
                使用優惠碼
              </button>
            </div>
          </div>
          <div class="py-5 d-flex justify-content-center">
            <router-link
              to="/user/productlist"
              class="btn btn-outline-dark me-2"
            >
              繼續購物
            </router-link>
            <router-link to="/user/orderform" class="btn btn-dark ms-2">
              填寫訂購資訊
            </router-link>
          </div>
        </template>
        <template v-else>
          <p class="fs-3 text-center my-5">目前購物車是空的喔 Σ(っ°Д°;)っ</p>
          <div class="d-flex justify-content-center">
            <router-link to="/user/productlist" class="btn btn-dark">
              馬上來杯咖啡吧！
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
  <CartDelModal ref="cartdelModal" @remove-all="removeAll"></CartDelModal>
</template>

<script>
import CartDelModal from '@/components/Front/CartDelModal.vue'

export default {
  data() {
    return {
      product: {},
      isLoading: false,
      status: {
        // 商品正在加入中圖示
        loadingItem: ''
      },
      cart: {},
      coupon_code: ''
    }
  },
  components: {
    CartDelModal
  },
  inject: ['emitter'],
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false
          this.cart = res.data.data
        })
        .catch((err) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `載入失敗, ${err.message}`
          })
        })
    },
    updateQuantity(action, item) {
      this.status.loadingItem = item.id
      const matchItems = this.cart.carts.filter((order) => order.id === item.id)
      matchItems.forEach((product) => {
        if (action === 'plus') {
          product.qty += 1
          this.updateCart(item)
        } else if (product.qty > 1) {
          product.qty -= 1
          this.updateCart(item)
        }
        this.status.loadingItem = ''
      })
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        data: {
          product_id: item.product_id,
          qty: item.qty
        }
      }
      this.$http
        .put(url, cart)
        .then((res) => {
          this.isLoading = false
          this.status.loadingItem = ''
          this.$httpMessageState(res, '更新購物車')
          this.getCart()
        })
        .catch((err) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `更新購物車失敗, ${err.message}`
          })
        })
    },
    removeCartItem(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      this.$http
        .delete(url)
        .then((res) => {
          this.isLoading = false
          this.status.loadingItem = ''
          this.$httpMessageState(res, '刪除')
          this.emitter.emit('update-cart')
          this.getCart()
        })
        .catch((err) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `刪除失敗, ${err.message}`
          })
        })
    },
    openDelAllModal() {
      this.$refs.cartdelModal.showModal()
    },
    removeAll() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.isLoading = true
      this.$http
        .delete(url)
        .then((res) => {
          this.isLoading = false
          this.$refs.cartdelModal.hideModal()
          this.$httpMessageState(res, '全部刪除')
          this.emitter.emit('update-cart')
          this.getCart()
        })
        .catch((err) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `全部刪除失敗, ${err.message}`
          })
        })
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      this.isLoading = true
      const coupon = {
        data: {
          code: this.coupon_code
        }
      }
      this.$http
        .post(url, coupon)
        .then((res) => {
          this.isLoading = false
          this.$httpMessageState(res, '優惠卷使用')
          this.getCart()
        })
        .catch((err) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `優惠卷使用失敗, ${err.message}`
          })
        })
    }
  },
  created() {
    this.getCart()
  }
}
</script>
