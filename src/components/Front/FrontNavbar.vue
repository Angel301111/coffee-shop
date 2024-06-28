<template>
  <nav class="navbar navbar-expand-lg bg-light sticky-top bg-opacity-75 backdrop-blur">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupported"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand text-dark" to="/">
        <i class="bi bi-cup-hot-fill pe-2"></i>
        Coffee shop
      </router-link>
      <div
        class="collapse navbar-collapse order-1 order-lg-0"
        id="navbarSupported"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/user/aboutus"
            >
              關於我們
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/user/productlist"
            >
              全部產品
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link" aria-current="page" to="/user/qa">
              常見問題
            </router-link>
          </li>
        </ul>
      </div>
      <div class="navbar">
        <ul class="navbar-nav flex-row">
          <li class="nav-item me-2 me-lg-0 d-flex align-items-center">
            <router-link class="nav-link d-flex align-items-center" aria-current="page" to="/user/cart">
              <i class="bi bi-cart3"></i>
              <span v-if="cart.carts.length" class="cartCircle d-block"></span>
            </router-link>
          </li>
          <li class="nav-item d-flex align-items-center">
            <router-link
              class="nav-link d-flex align-items-center"
              aria-current="page"
              to="/user/favorite"
            >
              <i class="bi bi-heart"></i>
              <span v-if="favoriteNum" class="favoriteCircle d-block"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      favoriteNum: 0,
      cart: {
        carts: ''
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false
          this.cart = res.data.data
        })
        .catch((err) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `載入失敗, ${err.message}`
          })
        })
    },
    getFavoriteNum() {
      if (localStorage.getItem('favorite')) {
        this.favoriteNum = JSON.parse(localStorage.getItem('favorite'))
        this.favoriteNum = this.favoriteNum.length
      }
    }
  },
  mounted() {
    this.getCart()
    this.getFavoriteNum()
    this.emitter.on('update-cart', () => {
      this.getCart()
    })
    this.emitter.on('update-favorite', () => {
      this.getFavoriteNum()
    })
  }
}
</script>
