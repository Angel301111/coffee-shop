<template>
  <div class="row align-items-center login-background bg">
    <div class="container">
    <form class="row justify-content-center p-0"
    @submit.prevent="signIn">
      <div class="col-md-6 p-5 rounded-5 bg-light">
        <h1 class="h3 mb-3 font-weight-normal">管理員登入</h1>
          <div class="mb-2">
            <label for="inputEmail" class="sr-only">Email address</label>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                required
                autofocus
                v-model="user.username"
                />
        </div>
        <div class="mb-2">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
            />
        </div>
        <div class="text-end mt-4">
        <button class="btn btn-lg btn-coffee btn-block" type="submit">登入</button>
    </div>
</div>
</form>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const url = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(url, this.user)
        .then(res => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `hexToken=${token} ; expires=${new Date(expired)}`
            this.$router.push('/dashboard/Products')
          }
        })
    }
  }
}
</script>
