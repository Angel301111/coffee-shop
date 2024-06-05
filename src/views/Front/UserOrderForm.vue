<template>
    <div class="container">
    <div class="row justify-content-center vh-100">
    <Form class="col-md-6" v-slot="{ errors }"
          @submit="createOrder">
          <h1 class="h3 my-4 text-center">填寫訂購資訊</h1>
      <div class="">
        <label for="email" class="form-label">Email</label>
        <Field id="email" name="email" type="email" class="form-control"
                 :class="{ 'is-invalid': errors['email'] }"
                 placeholder="請輸入 Email" rules="email|required"
                 v-model="form.user.email"></Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <Field id="name" name="姓名" type="text" class="form-control"
                 :class="{ 'is-invalid': errors['姓名'] }"
                 placeholder="請輸入姓名" rules="required"
                 v-model="form.user.name"></Field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <Field id="tel" name="電話" type="tel" class="form-control"
                 :class="{ 'is-invalid': errors['電話'] }"
                 placeholder="請輸入電話" rules="required"
                 v-model="form.user.tel"></Field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <Field id="address" name="地址" type="text" class="form-control"
                 :class="{ 'is-invalid': errors['地址'] }"
                 placeholder="請輸入地址" rules="required"
                 v-model="form.user.address"></Field>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">備註</label>
        <textarea name="備註" id="message" class="form-control"
                  v-model="form.message"></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </Form>
  </div>
    </div>
</template>
<script>
export default {
  data () {
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
  methods: {
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
  }
}
</script>
