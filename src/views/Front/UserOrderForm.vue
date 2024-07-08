<template>
  <header class="p-5 text-center bg cart-header-background">
    <h1 class="display-1 fw-bold text-light">Imformation</h1>
  </header>
  <div class="container">
    <div class="row justify-content-center vh-100">
      <FormForm class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <h2 class="text-center my-4 h3">─ 結帳流程 ─</h2>
        <div class="progress mb-4" style="height: 30px">
          <div
            class="progress-bar bg-secondary"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            填寫訂購資訊
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
            <span class="text-danger">*</span>
          </label>
          <FieldField
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></FieldField>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">
            收件人姓名
            <span class="text-danger">*</span>
          </label>
          <FieldField
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></FieldField>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">
            收件人電話
            <span class="text-danger">*</span>
          </label>
          <FieldField
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required"
            v-model="form.user.tel"
          ></FieldField>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">
            收件人地址
            <span class="text-danger">*</span>
          </label>
          <FieldField
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></FieldField>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">備註</label>
          <textarea
            name="備註"
            id="message"
            class="form-control"
            v-model="form.message"
          ></textarea>
        </div>
        <p class="text-danger fs-7 fw-bold">
          <i class="bi bi-exclamation-circle-fill"></i>
          小提醒：* 為必填
        </p>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </FormForm>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
      isLoading: false,
      status: {
        loadingItem: ''
      },
      cart: {},
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  inject: ['emitter'],
  methods: {
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.isLoading = true
      const order = this.form
      this.$http
        .post(url, { data: order })
        .then((res) => {
          this.isLoading = false
          this.$httpMessageState(res, '訂單送出')
          this.$router.push(`/user/checkout/${res.data.orderId}`)
        })
        .catch((err) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `訂單送出失敗, ${err.message}`
          })
        })
    }
  }
}
</script>
