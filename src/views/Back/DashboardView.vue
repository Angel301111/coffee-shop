<template>
  <NavbarView />
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages />
    <router-view />
  </div>
</template>

<script>
import NavbarView from '@/components/Back/BackNavbar.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    NavbarView,
    ToastMessages
  },
  provide() {
    return {
      emitter
    }
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http
      .post(api)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
      .catch((err) => {
        emitter.emit('push-message', {
          style: 'danger',
          title: `載入失敗, ${err.message}`
        })
        this.$router.push('/login')
      })
  }
}
</script>
