<template>
  <div class="sticky-footer">
  <FrountNavbar></FrountNavbar>
    <div class="container-fluid position-relative mb-auto">
      <ToastMessages></ToastMessages>
      <router-view/>
    </div>
    <FooterView ></FooterView>
  </div>
  </template>

<script>
import emitter from '@/methods/emitter'
import FrountNavbar from '@/components/FrountNavbar.vue'
import ToastMessages from '@/components/ToastMessages.vue' // 吐司框框
import FooterView from '@/components/FooterView.vue'
export default {
  components: {
    FrountNavbar,
    ToastMessages,
    FooterView
  },
  data () {
    return {
      favoriteNum: 0,
      cart: {
        carts: ''
      }
    }
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.cart = res.data.data
        console.log('getCart:', this.cart)
      })
    },
    getFavoriteNum () {
      if (localStorage.getItem('favorite')) {
        this.favoriteNum = JSON.parse(localStorage.getItem('favorite'))
        this.favoriteNum = this.favoriteNum.length
      }
    }
  },
  mounted () {
    this.getCart()
    this.getFavoriteNum()
    emitter.on('update-cart', () => {
      this.getCart()
    })
    emitter.on('update-favorite', () => {
      this.getFavoriteNum()
    })
  }
}
</script>
