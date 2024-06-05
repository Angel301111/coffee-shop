<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>購買日期</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="key">
          <tr v-if="orders.length"
              :class="{'text-secondary': !item.is_paid}">
            <td>{{ $filters.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                       v-model="item.is_paid"
                       @change.prevent="updatePaid(item)">
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm"
                        @click.prevent="openModal(false, item)">檢視</button>
                <button class="btn btn-outline-danger btn-sm"
                        @click.prevent="openDelOrderModal(item)"
                >刪除</button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <OrderModal :order="tempOrder"
                ref="orderModal" @update-paid="updatePaid"></OrderModal>
    <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
    <PaginationPageVue :pages="pagination" @emit-pages="getOrders"></PaginationPageVue>
  </template>

<script>
import DelModal from '@/components/Back/DelModal.vue'
import OrderModal from '@/components/Back/orderModal2.vue'
import PaginationPageVue from '@/components/Back/PaginationPage.vue'
export default {
  data () {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1
    }
  },
  components: {
    PaginationPageVue,
    DelModal,
    OrderModal
  },
  inject: ['emitter'],
  methods: {
    getOrders (page = 1) {
      this.currentPage = page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http.get(url)
        .then((res) => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          this.currentPage = res.data.pagination.current_page
          this.isLoading = false
          console.log(res)
        })
    },
    openModal (isNew, item) {
      this.tempOrder = { ...item }
      this.isNew = false
      this.$refs.orderModal.showModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      this.$refs.delModal.showModal()
    },
    updatePaid (item) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(url, { data: paid }).then((res) => {
        this.isLoading = false
        this.getOrders(this.currentPage)
        this.$httpMessageState(res, '更新付款狀態')
      })
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(url).then((res) => {
        console.log(res)
        this.$refs.delModal.hideModal()
        this.getOrders(this.currentPage)
        this.$httpMessageState(res, '刪除訂單')
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
