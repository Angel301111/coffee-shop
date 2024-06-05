<template>
    <LoadingOverlay :active="isLoading" :loader="'dots'"></LoadingOverlay>
    <header class="p-5 text-center header-background bg">
        <h1 class="display-1 fw-bold">Products</h1>
    </header>
    <div class="container py-lg-5">
        <div class="row">
            <div class="col-lg-3 gy-4">
              <div class="sticky-top">
          <div class="list-group d-md-block border-0">
            <a
              href="#"
              class="list-group-item list-group-item-action border-0 rounded-5 mb-2 list-group-item-secondary"
              :class="{ active: selectedTitle === key }"
              v-for="(value, key) in productsCategory"
              :key="key"
              @click.prevent="selectedCategory(key)"
              >{{ key === "All" ?  '全部商品' : key }} ({{ value }})</a
            >
          </div>
        </div>
            </div>
            <div class="row col-lg-9">
                <div class="col-lg-4 g-4"
                v-for="item in products" :key="item.id">
                      <router-link :to="{ path: `/user/product/${item.id}`}"
                      class="card border-0 shadow ">
                        <img :src="item.imageUrl" class="card-img-top img-fluid object-fit-cover vh-30" :alt="item.title">
                        <div class="card-body">
                          <h5 class="card-title">{{ item.title }}</h5>
                          <p class="card-text">{{ item.category }}</p>
                          <div class="d-flex">
                          <span class="card-text align-self-center">NT${{ item.price }}</span>
                          <button type="button" class="btn btn-light ms-auto"
                        @click.prevent="addToFavorite(item)">
                        <i class="bi" :class="favoriteID.includes(item.id) ? 'bi-heart-fill' : 'bi-heart'"></i>
                      </button>
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
    </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false,
      products: [],
      allProducts: [],
      productsCategory: {},
      selectedTitle: 'All',
      cart: {},
      message: '',
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      favoriteID: JSON.parse(localStorage.getItem('favoriteID')) || []
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.products = res.data.products
        this.allProducts = [...this.products]
        this.sumProductsCategory()
        if (this.$route.query.data) {
          this.selectedCategory(this.$route.query.data)
        }
      })
    },
    // 計算產品類別
    sumProductsCategory () {
      this.productsCategory = this.products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1
        acc.All = (acc.All || 0) + 1
        return acc
      }, { All: 0 })
      // console.log('productsCategory.All', this.productsCategory.All)
    },
    // 選取產品類別
    selectedCategory (category) {
      this.selectedTitle = category
      console.log('category', category)
      if (category === 'All') {
        this.products = [...this.allProducts]
      } else {
        this.products = this.allProducts.filter((product) => product.category === category)
      }
      console.log('this.products', this.products)
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
    addToFavorite (item) {
      this.isLoading = true
      if (this.favorite) {
        const isSave = this.favoriteID.indexOf(item.id)
        if (isSave < 0) {
          this.favorite.push(item)
          this.favoriteID.push(item.id)
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已新增至收藏'
          })
        } else {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '已收藏過了'
          })
        }
      } else {
        this.favorite.push(item)
        this.favoriteID.push(item.id)
        this.isLoading = false
        this.emitter.emit('push-message', {
          style: 'success',
          title: '已新增至收藏'
        })
      }

      localStorage.setItem('favorite', JSON.stringify(this.favorite))
      localStorage.setItem('favoriteID', JSON.stringify(this.favoriteID))
      this.emitter.emit('update-favorite')
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
