<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="table-responsive">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買日期</th>
          <th>Email</th>
          <th>購買款項</th>
          <th class="text-nowrap">應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="'item'+ key">
          <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
            <td>{{ $filters.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td class="text-nowrap">
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="'product'+ i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-nowrap">{{ item.total }}</td>
            <td class="text-nowrap">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  @change.prevent="updatePaid(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td class="text-nowrap">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click.prevent="openModal(false, item)"
                >
                  檢視
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click.prevent="openDelOrderModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <OrderModal
    :order="tempOrder"
    ref="orderModal"
    @update-paid="updatePaid"
  ></OrderModal>
  <DelModal
    :item="tempOrder"
    ref="delModal"
    @del-item="delOrder"
  ></DelModal>
  <PaginationPageVue
    :pages="pagination"
    @emit-pages="getOrders"
  ></PaginationPageVue>
</template>

<script>
import DelModal from '@/components/Back/DelModal.vue'
import OrderModal from '@/components/Back/OrderModal.vue'
import PaginationPageVue from '@/components/Back/PaginationPage.vue'
export default {
  data() {
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
    getOrders(page = 1) {
      this.currentPage = page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.orders = res.data.orders
        this.pagination = res.data.pagination
        this.currentPage = res.data.pagination.current_page
        this.isLoading = false
      }).catch((err) => {
        this.isLoading = false
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `載入失敗, ${err.message}`
        })
      })
    },
    openModal(isNew, item) {
      this.tempOrder = { ...item }
      this.isNew = false
      this.$refs.orderModal.showModal()
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item }
      this.$refs.delModal.showModal()
    },
    updatePaid(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      this.isLoading = true
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(url, { data: paid }).then((res) => {
        this.isLoading = false
        this.getOrders(this.currentPage)
        this.$httpMessageState(res, '更新付款狀態')
      }).catch((err) => {
        this.isLoading = false
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `更新付款狀態失敗, ${err.message}`
        })
      })
    },
    delOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(url).then((res) => {
        this.isLoading = false
        this.$refs.delModal.hideModal()
        this.getOrders(this.currentPage)
        this.$httpMessageState(res, '刪除訂單')
      }).catch((err) => {
        this.isLoading = false
        this.$refs.delModal.hideModal()
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `刪除訂單失敗, ${err.message}`
        })
      })
    }
  },
  created() {
    this.getOrders()
  }
}
</script>
