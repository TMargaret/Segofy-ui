export interface Snackbar {
  show: boolean
  subject?: string
  message?: string
  type?: 'success' | 'error'
}
