import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ServicesView from '../views/ServicesView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ProductView from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/tienda',
      name: 'store',
      component: StoreView
    },

    {
      path: '/proyectos',
      name: 'projects',
      component: ProjectsView
    },

    {
      path: '/servicios',
      name: 'services',
      component: ServicesView
    },

    {
      path: '/carrito',
      name: 'cart',
      component: CartView
    },

    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },

    {
      path: '/producto/:id',
      name: 'product',
      component: ProductView
    }
  ]
})

export default router