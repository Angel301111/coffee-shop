<template>
    <LoadingOverlay :active="isLoading" :loader="'dots'"></LoadingOverlay>
    <div class="container">
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
        <router-link class="card border-0 shadow"
         :to="{ path: `/user/product/${item.id}`}">
                        <img :src="item.imageUrl" class="card-img-top img-fluid object-fit-cover" :alt="item.title" style="height: 30vh;">
                        <div class="card-body">
                          <h5 class="card-title">{{ item.title }}</h5>
                          <div class="d-flex">
                          <span class="card-text align-self-center">NT${{ item.price }}</span>
                          <button type="button" class="btn btn-light ms-auto"
                          @click.prevent="removeFavorite(item)"><i class="bi bi-heart-fill"></i></button>
                        <button type="button" class="btn btn-light ms-2"
                        @click.prevent="addCart(item.id)"><i class="bi bi-cart3"></i></button>
                        </div>
                        </div>
                        <div class="card-footer border-0">
                            <button type="button" class="btn btn-secondary w-100">
                        查看更多
                    </button></div>
                </router-link>
            </div>
        </div>
      </div>
  </template>

<script>

export default {
  data () {
    return {
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      favoriteID: JSON.parse(localStorage.getItem('favoriteID')) || [],
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favorite'))
      this.favoriteID = JSON.parse(localStorage.getItem('favoriteID'))
      this.isLoading = false
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
          this.emitter.emit('update-cart')
          this.$httpMessageState(res, '加入購物車')
        })
    },
    removeFavorite (item) {
      this.isLoading = true
      const temp = this.favoriteID.indexOf(item.id)
      this.favorite.splice(temp, 1)
      this.favoriteID.splice(temp, 1)
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
      localStorage.setItem('favoriteID', JSON.stringify(this.favoriteID))
      this.isLoading = false
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
    this.getFavorite()
  }
}
</script>
