<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="updatePage(pages.current_page-1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page"
        :class="{ 'active': page === pages.current_page }">
          <a class="page-link" href="#" @click.prevent="updatePage(page)">
            {{ page }}
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next"
          @click.prevent="updatePage(pages.current_page+1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
<script>
// :pages=" 分頁資訊 "
// @emitPages="更新頁面事件"
export default {
  props: ['pages'], // 從api取回來的分頁資訊
  methods: {
    updatePage (page) {
      this.$emit('emit-pages', page) // ('執行事件的名稱',帶入的頁碼)
    }
  }
}
</script>
