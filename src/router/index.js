import { createRouter, createWebHashHistory } from 'vue-router'
import PortfolioView from '../views/PortfolioView.vue'
import SnakeGame from '../views/SnakeGame.vue'
import PokedexView from '../views/PokedexView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) return savedPosition

    if (to.hash) {

      const navbar = document.querySelector('header .navbar')
      const navbarHeight = navbar?.getBoundingClientRect().height ?? 0
      
      return {
        el: to.hash,
        top: navbarHeight,
        behavior: 'smooth'
      }

    }
    return { top: 0 }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: PortfolioView
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
