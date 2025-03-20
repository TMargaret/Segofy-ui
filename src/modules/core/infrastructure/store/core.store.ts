import type { ApiUrls } from '@/types/ApiUrls'
import type { Snackbar } from '@/types/Snackbar'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useCoreStore = defineStore('core-store', () => {
  const apiUrls = ref<ApiUrls | null>(null)
  const snackbar = ref<Snackbar>({ show: false })
  const globalLoader = ref<boolean>(true)

  const setApiUrls = (urls: ApiUrls) => {
    apiUrls.value = urls
  }

  const handleShowSnackbar = (snackbarInfo: Snackbar) => {
    snackbar.value = snackbarInfo
  }

  const handleCloseSnackbar = () => {
    snackbar.value.show = false
  }
  const resetCoreStore = () => {
    snackbar.value.show = false
    globalLoader.value = false
  }

  const setGlobalLoader = (loading = false) => {
    globalLoader.value = loading
  }

  return {
    apiUrls,
    setApiUrls,
    handleShowSnackbar,
    handleCloseSnackbar,
    resetCoreStore,
    globalLoader,
    setGlobalLoader,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCoreStore, import.meta.hot))
}
