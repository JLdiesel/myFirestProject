import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: () => import('views/home/Home.vue'),
  children: {
    path: '/multidata'
  }
}, {
  path: '/cart',
  component: () => import('views/cart/Cart.vue')
}, {
  path: '/category',
  component: () => import('views/category/Category.vue')
}, {
  path: '/profile',
  component: () => import('views/profile/Profile.vue')
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
