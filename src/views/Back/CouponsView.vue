<template>
    <div>
      <LoadingOverlay :active="isLoading"></LoadingOverlay>
      <div class="text-end mt-4">
        <button class="btn btn-primary" @click.prevent="openCouponModal(true)">
          建立新的優惠券
        </button>
      </div>
      <div class="table-responsive">
      <table class="table mt-4 ">
        <thead>
        <tr>
          <th>名稱</th>
          <th>優惠碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未起用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
                      @click.prevent="openCouponModal(false, item)"
              >編輯</button>
              <button class="btn btn-outline-danger btn-sm"
                      @click.prevent="openDelCouponModal(item)"
              >刪除</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
      <couponModal :coupon="tempCoupon" ref="couponModal"
      @update-coupon="updateCoupon"/>
      <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"/>
    </div>
  </template>

<script>
import CouponModal from '@/components/Back/CouponModal.vue'
import DelModal from '@/components/Back/DelModal.vue'
export default {
  components: {
    CouponModal,
    DelModal
  },
  props: {
    config: Object
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  methods: {
    openCouponModal (isNew, item) {
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      this.$refs.couponModal.showModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.delModal.showModal()
    },
    getCoupons () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http.get(url, this.tempProduct).then((res) => {
        this.coupons = res.data.coupons
        this.isLoading = false
        console.log(res)
      })
    },
    updateCoupon (tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: tempCoupon })
          .then((res) => {
            console.log(res, tempCoupon)
            this.$refs.couponModal.hideModal()
            this.getCoupons()
            this.$httpMessageState(res, '新增優惠券')
          })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon })
          .then((res) => {
            console.log(res)
            this.$refs.couponModal.hideModal()
            this.getCoupons()
            this.$httpMessageState(res, '更新優惠券')
          })
      }
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url).then((res) => {
        console.log(res, this.tempCoupon)
        this.$refs.delModal.hideModal()
        this.getCoupons()
        this.$httpMessageState(res, '刪除優惠券')
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>