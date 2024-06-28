<template>
  <div class="container">
    <div class="row flex-row-reverse">
      <div class="col-lg-5 d-flex justify-content-center align-items-center">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h1 class="text-dark my-4">結帳完成 ヽ(*´∀`)ﾉﾟ</h1>
          <p class="text-center mb-1">感謝您的購買！</p>
          <p class="text-center mb-1">我們堅持最新鮮的咖啡豆送到顧客手上</p>
          <p class="text-center mb-4">請耐心等候我們的出貨通知♥</p>
          <button
            type="button"
            class="btn btn-lg btn-outline-dark mb-4"
            @click.prevent="() => $router.push('/user/productlist')"
          >
            繼續購物
          </button>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="mb-4 bg done-background"></div>
      </div>
    </div>
  </div>
</template>
