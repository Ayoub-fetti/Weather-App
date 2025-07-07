import { createRouter, createWebHistory } from 'vue-router'
import CardView from '../views/WeatherCard.vue'
import SearchtView from '../views/SearchBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/card',
      name: 'card',
      component: CardView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchtView,
    },
  ],
})

export default router
