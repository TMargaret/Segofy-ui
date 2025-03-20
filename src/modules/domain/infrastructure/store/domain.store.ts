import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { PaginatedDomain } from '@/types/PaginatedDomain'

export const useDomainStore = defineStore('domain-store', () => {
  const isLoadingDomains = ref(false)
  const isErrorLoadingDomains = ref(false)
  const domains = ref<PaginatedDomain>()

  return {
    isLoadingDomains,
    isErrorLoadingDomains,
    domains,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDomainStore, import.meta.hot))
}
