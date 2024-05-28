<template>
    <LoadingOverlay :active="isLoading" :loader="'dots'"></LoadingOverlay>
    <div class="container vh-100">
      <h2 class="fontSizeM fontSize-md-L text-center mb-3">─ 收藏清單 ─</h2>
      <div v-if="favorite == null || favorite.length == 0">
        <div class="d-flex flex-column align-items-center">
          <p class="fontSizeM text-center mb-5">
            目前沒有收藏任何商品唷<br />快點去逛逛吧
          </p>
          <router-link to="/user/productlist" role="button" class="btn btn-dark">
            繼續購物
          </router-link>
        </div>
      </div>
      <div v-else class="row" >
        <div class="col-lg-4 g-4"
        v-for="item in favorite" :key="item.id">
        <div class="card border-0 shadow">
                        <img :src="item.imageUrl" class="card-img-top img-fluid object-fit-cover" :alt="item.title" style="height: 30vh;">
                        <div class="card-body">
                          <h5 class="card-title">{{ item.title }}</h5>
                          <div class="d-flex">
                          <span class="card-text align-self-center">NT${{ item.price }}</span>
                          <button type="button" class="btn btn-light ms-auto"
                          @click="removeFavorite(item)"><i class="bi bi-heart-fill"></i></button>
                        <button type="button" class="btn btn-light ms-2"
                        @click="addCart(item.id)"><i class="bi bi-cart3"></i></button>
                        </div>
                        </div>
                        <div class="card-footer border-0">
                            <button type="button" class="btn btn-secondary w-100"
                            @click="getProduct(item.id)">
                        查看更多
                    </button></div>
                </div>
            </div>
        </div>
      </div>
  </template>

<script>

export default {
  data () {
    return {
      favorite: '',
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favorite'))
      this.isLoading = false
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      const cart = {
        data: {
          product_id: id,
          qty: 1
        }
      }
      this.$http.post(url, cart)
        .then((res) => {
          this.isLoading = false
          this.$httpMessageState(res, '加入購物車')
        })
    },
    removeFavorite (item) {
      this.isLoading = true
      const temp = this.favorite
        .map((favorite) => favorite.id)
        .indexOf(item.id)
      this.favorite.splice(temp, 1)
      this.favorite = JSON.stringify(this.favorite)
      localStorage.setItem('favorite', this.favorite)
      this.emitter.emit('push-message', {
        style: 'dander',
        title: '已移除收藏'
      })
      this.emitter.emit('update-favorite')
      this.getFavorite()
    }
  },
  mounted () {
    this.isLoading = true
    setTimeout(() => {
      this.getFavorite()
    }, 1000)
  }
}
</script>
