import PageNotFound from '@/modules/core/presentation/views/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Domains from '@/modules/domain/presentation/views/DomainsIndex.vue'

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
