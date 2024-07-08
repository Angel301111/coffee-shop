<template>
  <LoadingOverlay :active="isLoading" :loader="'dots'" />
  <header class="p-5 text-center bg cart-header-background">
    <h1 class="display-1 fw-bold text-light">Order</h1>
  </header>
  <div class="row justify-content-center">
    <h2 class="text-center my-4 h3">─ 結帳流程 ─</h2>
    <form class="col-md-6" @submit.prevent="payOrder">
      <div class="progress mb-4" style="height: 30px;">
          <div
            class="progress-bar bg-secondary"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            確認訂購資訊
          </div>
        </div>
      <h3 class="mt-5">訂購明細</h3>
      <table class="table mt-3">
        <thead>
          <th class="th-layout">品名</th>
          <th class="th-layout text-end">數量</th>
          <th class="th-layout text-end">單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td class="text-end">{{ item.qty }}</td>
            <td class="text-end">{{ $filters.currency(item.final_total) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-start">總計</td>
            <td class="text-end">{{ $filters.currency(order.total) }}</td>
          </tr>
        </tfoot>
      </table>

      <h3 class="mt-5">訂購人資料</h3>
      <table class="table mt-3 mb-0">
        <tbody>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="btn btn-danger my-4" type="submit">確認付款</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.order = res.data.order
      }).catch((err) => {
        this.isLoading = false
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `載入失敗, ${err.message}`
        })
      })
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http.post(url).then((res) => {
        this.isLoading = false
        this.$httpMessageState(res, '感謝您的支持！付款')
        this.getOrder()
        this.$router.push('/user/orderdone')
      }).catch((err) => {
        this.isLoading = false
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `付款失敗, ${err.message}`
        })
      })
    }
  },
  created() {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
