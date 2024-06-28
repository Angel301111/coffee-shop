<template>
  <div class="sticky-footer">
    <FrontNavbar />
    <div class="container-fluid position-relative mb-auto">
      <ToastMessages />
      <router-view />
    </div>
    <FooterView />
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import FrontNavbar from '@/components/Front/FrontNavbar.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import FooterView from '@/components/Front/FooterView.vue'

export default {
  components: {
    FrontNavbar,
    ToastMessages,
    FooterView
  },
  provide() {
    return {
      emitter
    }
  }
}
</script>
