import { storeToRefs } from 'pinia'
import { useDomainStore } from '@/modules/domain/infrastructure/store/domain.store'
import { DomainHttp } from '@/modules/domain/infrastructure/http/domain.http'

export function useDomainService() {
  const domainStore = useDomainStore()
  const { isLoadingDomains, domains, isErrorLoadingDomains } = storeToRefs(domainStore)

  const loadDomains = async () => {
    isLoadingDomains.value = true
    return await DomainHttp.loadDomains()
      .then((response) => {
        if (response.status < 400) {
          domains.value = response.data
        }
      })
      .catch((err) => {
        console.log('Error loading domains: ', err)
        isErrorLoadingDomains.value = true
      })
      .finally(() => {
        isErrorLoadingDomains.value = false
      })
  }
  return {
    loadDomains,
  }
}
