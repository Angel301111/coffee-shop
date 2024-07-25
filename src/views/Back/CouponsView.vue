<template>
  <div>
    <LoadingOverlay :active="isLoading" />
    <div class="text-end mt-4">
      <button
        type="button"
        class="btn btn-primary"
        @click="openCouponModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <div class="table-responsive">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>優惠碼</th>
            <th class="text-nowrap">折扣百分比</th>
            <th>到期日</th>
            <th class="text-nowrap">是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupons" :key="'item' + key">
            <td class="text-nowrap">{{ item.title }}</td>
            <td class="text-nowrap">{{ item.code }}</td>
            <td class="text-nowrap">{{ item.percent }}%</td>
            <td class="text-nowrap">{{ $filters.date(item.due_date) }}</td>
            <td class="text-nowrap">
              <span v-if="item.is_enabled === 1" class="text-success">
                啟用
              </span>
              <span v-else class="text-muted">未啟用</span>
            </td>
            <td class="text-nowrap">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openCouponModal(false, item)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelCouponModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <CouponModal
      :coupon="tempCoupon"
      ref="couponModal"
      @update-coupon="updateCoupon"
    />
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
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
  inject: ['emitter'],
  data() {
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
    openCouponModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
          is_enabled: 0
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      this.$refs.couponModal.showModal()
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    getCoupons() {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http
        .get(url)
        .then((res) => {
          this.coupons = res.data.coupons
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `載入失敗, ${err.message}`
          })
        })
    },
    updateCoupon(item) {
      this.tempCoupon = item
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.isLoading = true
        this.$http
          .post(url, { data: this.tempCoupon })
          .then((res) => {
            this.isLoading = false
            this.$refs.couponModal.hideModal()
            this.getCoupons()
            this.$httpMessageState(res, '新增優惠券')
          })
          .catch((err) => {
            this.isLoading = false
            this.$refs.couponModal.hideModal()
            this.emitter.emit('push-message', {
              style: 'danger',
              title: `新增優惠券失敗, ${err.message}`
            })
          })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.isLoading = true
        this.$http
          .put(url, { data: this.tempCoupon })
          .then((res) => {
            this.isLoading = false
            this.$refs.couponModal.hideModal()
            this.getCoupons()
            this.$httpMessageState(res, '更新優惠券')
          })
          .catch((err) => {
            this.isLoading = false
            this.$refs.couponModal.hideModal()
            this.emitter.emit('push-message', {
              style: 'danger',
              title: `更新優惠券失敗, ${err.message}`
            })
          })
      }
    },
    delCoupon() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http
        .delete(url)
        .then((res) => {
          this.isLoading = false
          this.$refs.delModal.hideModal()
          this.getCoupons()
          this.$httpMessageState(res, '刪除優惠券')
        })
        .catch((err) => {
          this.$refs.delModal.hideModal()
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `刪除優惠券失敗, ${err.message}`
          })
        })
    }
  },
  created() {
    this.getCoupons()
  }
}
</script>
