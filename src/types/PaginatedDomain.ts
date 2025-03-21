import type { Domain } from './Domain'
import type { Pagination } from './Pagination'

export type PaginatedDomain = {
  content: Domain[]
} & Pagination
