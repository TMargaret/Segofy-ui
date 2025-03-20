import type { Domain } from './domain'
import type { Pagination } from './pagination'

export type PaginatedDomain = {
  content: Domain[]
} & Pagination
