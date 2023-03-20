import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/counter',
      name: 'Counter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Counter.vue')
    },
    // {
    //   path: '/notfound',
    //   name: 'NotFound',
    //   component: () => import('../pages/NotFound.vue')
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../pages/NotFound.vue')
    },
  ]
})

export default router
