<template>
  <div class="container vh-100 py-5">
    <div class="text-center">
        <h1 class="fw-bold">404 Not Found</h1>
        <p class="mt-4">Oops!迷路了嗎？</p>
        <p>我們帶你回到首頁(つ´ω`)つ</p>
      </div>
  </div>
</template>
<script>
export default {
  created () { // 自動跳轉到home
    setTimeout(() => this.$router.push({ path: '/' }), 4000)
  }
}

</script>
