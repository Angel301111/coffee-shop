<template>
  <swiper
    :breakpoints="{
      768: { slidesPerView: 3 },
      1020: { slidesPerView: 4 }
    }"
    :modules="modules"
    :slides-per-view="2"
    :space-between="50"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <router-link :to="`/user/product/${item.id}`" class="px-3 swiper-link">
        <div class="card-img-top mb-2">
          <img
            style="height: 150px; object-fit: cover;"
            class="img-fluid"
            :src="item.imageUrl"
            :alt="item.title"
          />
        </div>
        <div class="card-body mb-4">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h5>{{ item.title }}</h5>
            <p class="m-0">NT$ {{ item.price }}</p>
          </div>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  props: ['products'],
  data() {
    return {
      modules: [Pagination, Autoplay]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
