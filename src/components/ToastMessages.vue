<template>
    <div class="toast-container position-absolute pe-3 top-0 start-50 translate-middle-x" style="z-index: 1050">
      <ToastToast v-for="(msg, key) in messages" :key="key"
        :msg="msg"
      />
    </div>
  </template>
<script>
import ToastToast from '@/components/ToastToast.vue'
export default {
  components: { ToastToast },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (messageData) => {
      const { style, title, content } = messageData
      this.messages.push({ style, title, content }) // 將所需內容推進列表中的messages 避免傳參考的問題影響到原物件，故指定新的物件參考位置
    })
  }
}
</script>
