<template>
    <LoadingOverlay :active="isLoading" :loader="'dots'"></LoadingOverlay>
    <div class="container py-4"
     data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <nav
      style="--bs-breadcrumb-divider: '>'"
      aria-label="breadcrumb"
      class="mb-3"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/user/productlist" class="breadcrumb-link">全部商品</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link class="breadcrumb-link"
            :to="{ path: '/user/productlist', query: { data: product.category } }"
          >
            {{ product.category }}
          </router-link>
        </li>
        <li class="breadcrumb-item">{{ product.title }}</li>
      </ol>
    </nav>
      <div class="row justify-content-center g-5 flex-lg-row" >
        <div class="col-lg-8">
          <img :src="product.imageUrl" :alt="product.title" class="img-fluid mb-3">
        </div>
        <div class="col-lg-4 d-flex flex-column justify-content-center">
          <h2>{{ product.title }}</h2>
          <span class="badge rounded-pill bg-dark my-4" style="width: 75px;">{{ product.category }}</span>
          <div>{{ product.content }}</div>
          <div class="h5 my-4" v-if="product.price">NT$ {{ product.price }} 元 / {{ product.unit }}</div>
          <button type="button" class="btn btn-outline-danger"
                  @click.prevent="addCart(product.id)">
            加入購物車
          </button>
        </div>
      </div>
      <ul class="nav nav-tabs pt-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active navtab-link"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button" role="tab"
          aria-controls="home"
          aria-selected="true">商品規格</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link navtab-link"
          id="profile-tab" data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button" role="tab"
          aria-controls="profile"
          aria-selected="false">退換貨須知</button>
        </li>
      </ul>
      <div class="tab-content py-4" id="myTabContent">
        <div class="tab-pane fade show active"
        id="home" role="tabpanel"
        aria-labelledby="home-tab">
        <ul>
          <li v-for="(des, key) in description" :key="key">{{ des }}</li>
        </ul></div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <ul>
            <li class="mb-3">
              若您收到的商品有損壞、瑕疵或錯誤，請在7天內與我們聯繫，並提供購買憑證及照片。經確認符合退換貨條件後，我們將提供退貨地址及相關指示給您。
            </li>
            <li class="mb-3">
              因商品本身問題導致的退換貨，運費由我們承擔；因個人原因退換貨，運費由顧客自行承擔。在收到並確認退回商品無誤後，退款將在5-7個工作日內處理
            </li>
            <li>
              退換貨申請通過後，請在5個工作日內將商品寄出，否則視為放棄退換貨權利，感謝您的理解與支持。
            </li>
          </ul>
        </div>
      </div>
      <h3 class="fontSize-md-L mb-3">買了此商品的人也買了...</h3>
      <ProductSwiper :products="recommends"></ProductSwiper>
    </div>
  </template>

<script>
import ProductSwiper from '@/components/Front/ProductSwiper.vue'

export default {
  data () {
    return {
      product: {},
      products: [],
      allProducts: [],
      id: '',
      isLoading: false,
      description: []
    }
  },
  inject: ['emitter'],
  components: {
    ProductSwiper
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        console.log(res.data)
        this.isLoading = false
        if (res.data.success) {
          this.product = res.data.product
        }
      })
    },
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.products = res.data.products
        this.allProducts = [...this.products]
      })
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
          console.log('cart', res)
          this.isLoading = false
          this.emitter.emit('update-cart')
          this.$httpMessageState(res, '加入購物車')
        })
    }
  },
  watch: {
    product: { // 商品規格
      handler (val) {
        const descriptionArr = val.description.split(',')
        this.description = descriptionArr
      },
      deep: true
    },
    '$route.params.productId': {
      handler (newId) {
        this.id = newId
        this.getProduct()
      },
      immediate: true
    }
  },
  computed: {
    recommends () {
      const total = this.products.filter((item) => item.id !== this.product.id)
      return total
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProducts()
  }
}
</script>
