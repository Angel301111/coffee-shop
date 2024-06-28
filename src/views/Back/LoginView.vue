<template>
  <div
    class="login-background bg vh-100 justify-content-center align-items-center d-flex"
  >
    <div class="container-fluid">
      <form class="row justify-content-center" @submit.prevent="signIn">
        <div class="col-md-6 p-5 rounded-5 bg-light">
          <h1 class="h3 mb-3 font-weight-normal text-center">管理員登入</h1>
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
          <div class="mt-4 d-flex justify-content-between align-items-center">
            <router-link to="/" class="login-link">
              <i class="bi bi-house-fill me-1"></i>
              回到首頁
            </router-link>
            <button class="btn btn-lg btn-coffee" type="submit">登入</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn() {
      const url = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(url, this.user).then((res) => {
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
