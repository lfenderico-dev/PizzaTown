import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MenuPage from '@/views/MenuPage.vue'
import PizzaView from '@/views/MenuPageViews/PizzaView.vue'
import OtherView from '@/views/MenuPageViews/OtherView.vue'
import DrinksView from '@/views/MenuPageViews/DrinksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage,
      children: [
        {
          path: '/pizza',
          name: 'pizza',
          component: PizzaView,
        },
        {
          path: '/other',
          name: 'other',
          component: OtherView,
        },
        {
          path: '/drinks',
          name: 'drinks',
          component: DrinksView,
        },
      ]
    },
  ],
})

export default router
