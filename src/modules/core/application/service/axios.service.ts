import axios from 'axios'
import { useCoreStore } from '../../infrastructure/store/core.store'

export function useAxiosService() {
  const coreStore = useCoreStore()

  const createInterceptor = () => {
    // axios.interceptors.request.use(
    //   async (config) => {
    //     await useKeycloak().refreshToken(keycloak)
    //     config.headers.Authorization = useKeycloak().token(keycloak)
    //     config.withCredentials = true
    //     return config
    //   },
    //   (error) => Promise.reject(error)
    // )

    axios.interceptors.response.use(
      (response) => {
        if (['post', 'put', 'delete'].includes(response.config.method || '')) {
          coreStore.handleShowSnackbar({
            show: true,
            message: 'global.snackbar.successMessage',
            subject: 'global.snackbar.successSubject',
            type: 'success',
          })

          setTimeout(() => coreStore.handleShowSnackbar({ show: false }), 5000)
        }

        return response
      },
      (error) => {
        if (['post', 'put', 'delete'].includes(error.config.method || '')) {
          coreStore.handleShowSnackbar({
            show: true,
            message: error.response.data
              ? `global.snackbar.${error.response.data}`
              : 'global.snackbar.errorMessage',
            subject: `global.snackbar.error`,
            type: 'error',
          })
        }

        setTimeout(() => coreStore.handleShowSnackbar({ show: false }), 5000)

        return Promise.reject(error)
      },
    )
  }

  return { createInterceptor }
}
