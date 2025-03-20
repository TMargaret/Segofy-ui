import { createRouter, createWebHistory } from 'vue-router'
import Domains from '@/views/DomainsIndex.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/domain',
    },
    {
      path: '/domain',
      name: 'domains',
      component: Domains,
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound,
    },
  ],
})

export default router
