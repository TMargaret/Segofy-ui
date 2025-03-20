import type { Pageable } from './pageable'
import type { Sort } from './Sort'

export interface Pagination {
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: Pageable
  size: number
  sort: Sort
  totalElements: number
  totalPages: number
}
