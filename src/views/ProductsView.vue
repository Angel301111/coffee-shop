<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="text-end">
    <button class=".btn btn btn-primary" type="butten"
    @click.prevent="openModal(true)">增加一個產品</button>
  </div>
    <table class="table mt-4">
  <thead>
    <tr>
      <th width="200">分類</th>
      <th width="400">名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">啟用</th>
      <th width="120">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.id">
      <td>{{ item.category }}</td>
      <td>{{ item.title }}</td>
      <td class="text-right">
        {{ $filters.currency(item.origin_price) }}
      </td>
      <td class="text-right">
        {{ $filters.currency(item.price) }}
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-muted" v-else>未啟用</span>

      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm"
          @click.prevent="openModal(false,item)">編輯</button>
          <button class="btn btn-outline-danger btn-sm"
          @click.prevent="openDelProductModal(item)">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<PaginationPageVue :pages="pagination"
    @emit-pages="getProducts"></PaginationPageVue>
<ProductModalVue ref="productModal"
:product="tempProduct"
@update-product="updateProduct"></ProductModalVue>
<DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
</template>

<script>
import ProductModalVue from '@/components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import PaginationPageVue from '@/components/PaginationPage.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {}, // modal的內容
      isNew: false,
      isLoading: false,
      currentPage: 1
    }
  },
  components: {
    ProductModalVue,
    DelModal,
    PaginationPageVue
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) { // 使用複數形式s 因為列表為多數產品資訊 // 帶入分頁功能加上page預設參數
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          // console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.currentPage = res.data.pagination.current_page
        })
    },
    openModal (isNew, item) { // (是不是新的？,如果是編輯的話 將編輯的品項加進來)
      if (isNew) {
        this.tempProduct = {} // 每次打開為空白選單
      } else {
        this.tempProduct = { ...item } // 以展開的形式取出item
      }
      this.isNew = isNew // 將這個狀態儲存在data 以便日後判斷
      this.$refs.productModal.showModal() // 彈跳出 Modal框框
    },
    updateProduct (item) { // 更新產品 新增or編輯
      this.tempProduct = item // modal來的資料先存起來
      // 新增狀態
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
        this.$http.post(url, { data: this.tempProduct })
          .then(res => {
            this.$refs.productModal.hideModal()
            this.getProducts()
            this.$httpMessageState(res, '新增產品')
          })
      // 更新狀態
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        this.$http.put(url, { data: this.tempProduct })
          .then(res => {
            this.$refs.productModal.hideModal()
            this.getProducts(this.currentPage)
            this.$httpMessageState(res, '更新產品')
          })
      }
    },
    // 開啟delModal
    openDelProductModal (item) {
      this.tempProduct = { ...item }// 複製item的資料存進tempProduct
      this.$refs.delModal.showModal()
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}` // 利用openDelProductModal (item)取得的item得到id
      this.$http.delete(url).then((res) => {
        // console.log(res.data)
        this.$refs.delModal.hideModal()
        this.getProducts(this.currentPage)
        this.$httpMessageState(res, '刪除產品')
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
