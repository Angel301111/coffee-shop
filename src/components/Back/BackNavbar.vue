<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-dark">
        <i class="bi bi-cup-hot-fill pe-2"></i>
        Coffee Shop
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link">
            產品
          </router-link>
          <router-link to="/dashboard/orders" class="nav-link">
            訂單
          </router-link>
          <router-link to="/dashboard/coupons" class="nav-link">
            優惠券
          </router-link>
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  inject: ['emitter'],
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http
        .post(api)
        .then((res) => {
          this.$router.push('/login')
        })
        .catch((err) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `登出失敗, ${err.message}`
          })
        })
    }
  }
}
</script>
