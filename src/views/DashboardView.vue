<template>
  <navbar-view></navbar-view>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
</div>
</template>

<script>
import NavbarView from '../components/NavbarView.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    NavbarView,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () { // 取出token
    const token = document.cookie.replace( // 從cookie中取出token
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1') // from MDN
    // console.log(token) // 確認有取到token
    this.$http.defaults.headers.common.Authorization = token // 將token加到headers
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api)
      .then(res => {
        // console.log(res)
        // console.log(this.emitter)
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
