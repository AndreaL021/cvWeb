import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SnakeGame from '../views/SnakeGame.vue'
import PokedexView from '../views/PokedexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/snake',
      name: 'snake',
      component: SnakeGame
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: PokedexView
    }
  ]
})

export default router
