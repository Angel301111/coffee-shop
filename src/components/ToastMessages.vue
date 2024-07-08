<template>
  <div
    class="toast-container position-absolute pe-3 top-0 end-0"
    style="z-index: 1050"
  >
    <ToastToast v-for="(msg, key) in messages" :key="'msg' + key" :msg="msg" />
  </div>
</template>

<script>
import ToastToast from '@/components/ToastToast.vue'
export default {
  components: { ToastToast },
  data() {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (messageData) => {
      const { style, title, content } = messageData
      this.messages.push({ style, title, content })
    })
  }
}
</script>
