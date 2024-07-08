<template>
  <LoadingOverlay :active="isLoading" :loader="'dots'" />
  <header class="p-5 text-center bg cart-header-background">
    <h1 class="display-1 fw-bold text-light">Favorite</h1>
  </header>
  <div class="container mb-4">
    <div v-if="favorite == null || favorite.length == 0">
      <div class="d-flex flex-column align-items-center">
        <p>目前沒有收藏任何商品唷 ( ºωº )</p>
        <p>快點去逛逛吧！</p>
        <router-link to="/user/productlist" role="button" class="btn btn-dark">
          繼續購物
        </router-link>
      </div>
    </div>
    <div v-else class="row">
      <div
        class="col-md-6 col-lg-4 g-4"
        v-for="item in favorite"
        :key="item.id"
      >
        <router-link
          class="card border-0 shadow card-hover"
          :to="{ path: `/user/product/${item.id}` }"
        >
          <img
            :src="item.imageUrl"
            class="card-img-top img-fluid object-fit-cover"
            :alt="item.title"
            style="height: 30vh"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <div class="d-flex">
              <span class="card-text align-self-center">
                NT${{ item.price }}
              </span>
              <button
                type="button"
                class="btn btn-light ms-auto"
                @click="removeFavorite(item)"
              >
                <i class="bi bi-heart-fill"></i>
              </button>
              <button
                type="button"
                class="btn btn-light ms-2"
                @click="addCart(item.id)"
              >
                <i class="bi bi-cart3"></i>
              </button>
            </div>
          </div>
          <div class="card-footer border-0">
            <button type="button" class="btn btn-secondary w-100">
              查看更多
            </button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorite: [],
      favoriteID: [],
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getFavorite() {
      this.isLoading = true
      this.favorite = JSON.parse(localStorage.getItem('favorite'))
      this.favoriteID = JSON.parse(localStorage.getItem('favoriteID'))
      this.isLoading = false
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      const cart = {
        data: {
          product_id: id,
          qty: 1
        }
      }
      this.$http
        .post(url, cart)
        .then((res) => {
          this.isLoading = false
          this.emitter.emit('update-cart')
          this.$httpMessageState(
            res,
            `${res.data.data.product.title}加入購物車`
          )
        })
        .catch((err) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `加入購物車失敗, ${err.message}`
          })
        })
    },
    removeFavorite(item) {
      this.isLoading = true
      const temp = this.favoriteID.indexOf(item.id)
      this.favorite.splice(temp, 1)
      this.favoriteID.splice(temp, 1)
      this.isLoading = false
      this.emitter.emit('push-message', {
        style: 'danger',
        title: `已將${item.title}移除收藏`
      })
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
      localStorage.setItem('favoriteID', JSON.stringify(this.favoriteID))
      this.emitter.emit('update-favorite')
      this.getFavorite()
    }
  },
  mounted() {
    this.getFavorite()
  }
}
</script>
