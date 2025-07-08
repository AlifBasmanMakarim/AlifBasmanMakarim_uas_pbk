import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import AdminMenu from '../views/AdminMenu.vue'
import DrinkMenu from '../views/DrinkList.vue'
import OrderHistory from '../views/OrderHistory.vue'
import About from '../views/About.vue' // <-- Tambahan

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin },
  { path: '/admin/menu', component: AdminMenu },
  { path: '/drinks', component: DrinkMenu },
  { path: '/orders', component: OrderHistory },
  { path: '/about', component: About } // <-- Tambahan
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
