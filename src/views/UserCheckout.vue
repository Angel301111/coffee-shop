<template>
    <LoadingOverlay :active="isLoading" :loader="'dots'"></LoadingOverlay>
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="payOrder">
        <h2 class="my-4">訂購明細</h2>
        <table class="table">
          <thead>
          <th>品名</th>
          <th>數量</th>
          <th class="text-end">單價</th>
          </thead>
          <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}</td>
            <td class="text-end">{{ item.final_total }}</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ order.total }}</td>
          </tr>
          </tfoot>
        </table>
        <h2 class="my-4">訂購人資料</h2>
        <table class="table">
          <tbody>
          <tr>
            <th>姓名</th>
            <td class="">{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th width="100">Email</th>
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
          <button class="btn btn-danger my-3">確認付款</button>
        </div>
      </form>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.isLoading = false
        console.log(res.data)
        this.order = res.data.order
      })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http.post(url).then((res) => {
        this.isLoading = false
        console.log(res.data)
        if (res.data.success) {
          this.$httpMessageState(res, '感謝您的支持！付款')
          this.getOrder()
          this.$router.push('/user/orderdone')
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    console.log(this.orderId)
    this.getOrder()
  }
}
</script>
