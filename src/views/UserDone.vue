<template>
        <header class="px-4 py-5 d-flex align-items-center justify-content-center mb-5 bg done-background">
    </header>
  <div class="container p-5">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-dark mb-5">結帳完成 ヽ(*´∀`)ﾉﾟ</h1>
      <p class="text-center mb-5">感謝您的購買！<br><br>
        我們堅持最新鮮的咖啡豆送到顧客手上<br>
        請耐心等候我們的出貨通知♥
      </p>
      <button type="button" class="btn btn-lg btn-outline-dark"
      @click.prevent="() => $router.push('/user/productlist')">
        繼續購物
      </button>
    </div>
  </div>
</template>
