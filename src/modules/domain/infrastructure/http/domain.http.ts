import { useCoreStore } from '@/modules/core/infrastructure/store/core.store'
import type { PaginatedDomain } from '@/types/PaginatedDomain'
import type { AxiosResponse } from 'axios'
import axios from 'axios'

class InternalDomainHttp {
  async loadDomains(): Promise<AxiosResponse<PaginatedDomain>> {
    const coreStore = useCoreStore()
    return axios.get<PaginatedDomain>(`${coreStore.apiUrls?.apiUrl}/domains`)
  }
}

export const DomainHttp = new InternalDomainHttp()
