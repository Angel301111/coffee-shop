<template>
  <FrontNavbar />
  <ToastMessages />
  <section class="aos-section">
    <header
      class="home-background bg px-4 py-5 d-flex align-items-center justify-content-center mb-5"
      data-aos="zoom-out"
      data-aos-duration="3000"
    >
      <div class="text-center text-white">
        <h1 class="fw-bold">您今天喝咖啡了嗎</h1>
        <p class="m-0">從農場到您手中，傳遞每一顆咖啡豆的故事</p>
        <p>與我們一起品味咖啡，感受生活的每一個美好瞬間</p>
        <router-link to="/user/productlist" class="btn btn-outline-light">
          shop now
        </router-link>
      </div>
    </header>
  </section>
  <section
    class="container py-5 text-center"
    data-aos="zoom-in"
    data-aos-duration="2000"
    data-aos-offset="100"
  >
    <p class="fs-5 fw-bold">體驗極致咖啡享受，探索世界奧秘風味</p>
    <p>從精選世界各地的頂級咖啡豆，到專業烘焙和嚴格品控</p>
    <p>我們的每一杯咖啡都充滿了對品質的承諾和對咖啡文化的熱愛</p>
  </section>
  <section class="py-5 rounded shadow my-4 coupon-background bg">
        <div class="text-center text-light rounded shadow-lg mx-auto" style="background-color: hwb(0 13% 86% / 0.55);">
          <div class="p-3">
          <h3 class="h5">
            歡慶開幕!! 輸入折扣碼「
            <span>coffee88</span>
            」全品項限時優惠 8 折
          </h3>
          <router-link to="/user/productlist" class="btn btn-outline-light ">
            馬上購買
          </router-link>
        </div>
    </div>
  </section>

  <section class="container py-5 aos-section">
    <div class="row flex-row-reverse mb-4">
      <div class="col-md-6 d-flex align-items-center">
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          <h2>發現世界各地的咖啡寶藏</h2>
          <hr />
          <p class="lh-lg text-secondary">
            從南美的哥倫比亞到非洲的埃塞俄比亞，我們的咖啡產品來自全球各個知名的咖啡產區。透過仔細挑選和嚴格品質管控，我們將最優質的咖啡豆帶到您的桌上，讓您能夠品嚐到每個產地的獨特風味和文化。
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/images/home1.jpg"
          class="img-fluid rounded"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="200"
          alt="info"
        />
      </div>
    </div>
    <div class="row flex-row mb-4">
      <div class="col-md-6 d-flex align-items-center">
        <div
          data-aos="fade-up-left"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          <h2>每一口都是匠心綻放的味蕾旅程</h2>
          <hr />
          <p class="lh-lg text-secondary">
            我們的咖啡豆經過熟練的烘焙師精心烘焙，以確保每一顆豆子都能散發出最豐富的風味和香氣。無論您喜歡淺焙、中焙還是深焙，我們都能滿足您的口味，讓您感受到每一口咖啡帶來的獨特魅力。
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/images/home2.jpg"
          class="img-fluid rounded"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-offset="200"
          alt="info"
        />
      </div>
    </div>
    <div class="row flex-row-reverse">
      <div class="col-md-6 d-flex align-items-center">
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          <h2>一杯咖啡，萬種風情</h2>
          <hr />
          <p class="lh-lg text-secondary">
            從柔和的果香到濃郁的巧克力味，我們的咖啡產品擁有多樣的風味特點，能夠滿足不同類型咖啡愛好者的口味需求。無論您是喜歡單品咖啡還是愛好特調拿鐵，我們都有適合您的咖啡產品，讓您享受到一杯咖啡帶來的美好享受。
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/images/home3.jpg"
          class="img-fluid rounded"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="200"
          alt="info"
        />
      </div>
    </div>
  </section>
  <section class="py-4">
    <div class="container">
      <h2 class="text-center pb-5">
        <i class="bi bi-cup-fill pe-2"></i>
        喚醒感官 專業品味
      </h2>
      <div
        class="row"
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        <div class="col-md-4 position-relative mb-md-0 mb-3">
          <RouterLink
            :to="{ path: '/user/productlist', query: { data: '精品咖啡豆' } }"
          >
            <div
              class="text-white px-2 py-4 align-middle letter-space position-absolute top-0 ms-3"
            >
              <span class="h3">濃郁風味</span>
              <span class="align-text-bottom">—</span>
              咖啡豆系列
            </div>
            <img
              class="img-fluid"
              src="@/assets/images/home-card1.jpg"
              alt="濃郁風味"
            />
          </RouterLink>
        </div>
        <div class="col-md-4 position-relative mb-md-0 mb-3" data-aos="fade-up">
          <RouterLink
            :to="{ path: '/user/productlist', query: { data: '咖啡杯' } }"
          >
            <div
              class="text-white px-2 py-4 align-middle letter-space position-absolute top-0 ms-3"
            >
              <span class="h3">經典設計</span>
              <span class="align-text-bottom">—</span>
              咖啡杯系列
            </div>
            <img
              class="img-fluid"
              src="@/assets/images/home-card2.jpg"
              alt="經典設計"
            />
          </RouterLink>
        </div>
        <div class="col-md-4 position-relative mb-md-0 mb-3">
          <RouterLink
            :to="{ path: '/user/productlist', query: { data: '咖啡用具' } }"
          >
            <div
              class="text-white px-2 py-4 align-middle letter-space position-absolute top-0 ms-3"
            >
              <span class="h3">精工打造</span>
              <span class="align-text-bottom">—</span>
              咖啡用具系列
            </div>
            <img
              class="img-fluid"
              src="@/assets/images/home-card3.jpg"
              alt="精工打造"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5 rounded shadow bg-sub my-5 paper-background bg">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-5 text-dark">
          <h2 class="mb-3">
            <p class="m-0">
              <i class="bi bi-cup-fill pe-1"></i>
              歡迎訂閱電子報
            </p>
            <p>與您分享我們的最新消息！</p>
          </h2>
          <Form v-slot="{ errors }" class="d-center flex-column">
            <Field
              class="form-control"
              id="userEmail"
              placeholder="example@mail.com"
              name="信箱"
              rules="email|required"
              :class="{ 'is-invalid': errors['信箱'] }"
            ></Field>
            <error-message name="信箱" class="invalid-feedback"></error-message>
            <button
              class="btn btn-dark text-white mt-3 px-md-4"
              type="submit"
              id="subscribeBtn"
              @click="subscribe()"
            >
              免費訂閱
            </button>
          </Form>
        </div>
      </div>
    </div>
  </section>
  <section class="container pb-5">
    <h2 class="text-center">
      <i class="bi bi-cup-fill pe-2"></i>
      我們的精選
    </h2>
    <ProductSwiper :products="products"></ProductSwiper>
  </section>
  <FooterView />
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import FrontNavbar from '@/components/Front/FrontNavbar.vue'
import FooterView from '@/components/Front/FooterView.vue'
import ProductSwiper from '@/components/Front/ProductSwiper.vue'

export default {
  data() {
    return {
      products: []
    }
  },
  components: {
    FrontNavbar,
    FooterView,
    ProductSwiper,
    ToastMessages
  },
  provide() {
    return {
      emitter
    }
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.products = res.data.products
      }).catch((err) => {
        emitter.emit('push-message', {
          style: 'danger',
          title: `載入失敗, ${err.message}`
        })
      })
    },
    subscribe() {
      emitter.emit('push-message', {
        style: 'success',
        title: '成功訂閱'
      })
    }
  },
  created() {
    this.getProducts()
  }
}
</script>
