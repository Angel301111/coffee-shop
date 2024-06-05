import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Front/HomeView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Back/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Back/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Back/ProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Back/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Back/CouponsView.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/Front/UserBoard.vue'),
    children: [
      {
        path: 'aboutus',
        component: () => import('../views/Front/UserAboutUs.vue')
      },
      {
        path: 'productlist',
        component: () => import('../views/Front/UserProductList.vue')
      },
      {
        path: 'qa',
        component: () => import('../views/Front/UserQ&A.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Front/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/Front/UserProduct.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/Front/UserFavorite.vue')
      },
      {
        path: 'orderform',
        component: () => import('../views/Front/UserOrderForm.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/Front/UserCheckout.vue')
      },
      {
        path: 'orderdone',
        component: () => import('../views/Front/UserDone.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // 404
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
