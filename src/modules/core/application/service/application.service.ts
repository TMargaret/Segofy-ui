import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { useCoreStore } from '../../infrastructure/store/core.store'
import type { ApiUrls } from '@/types/ApiUrls'
import router from '@/router'
import App from '@/App.vue'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'

export function useApplicationService() {
  const initApplication = async (apiUrls: ApiUrls) => {
    // Init pinia store and set Urls
    const piniaStore = createPinia()

    // Create Vue App
    const app = createApp(App)
    app.use(piniaStore)

    // Set init Data to Store
    const coreStore = useCoreStore()
    coreStore.setApiUrls(apiUrls)

    //Init AG grid module
    ModuleRegistry.registerModules([AllCommunityModule])

    // Init router
    app.use(router)

    // Finally mount the App
    app.mount('#app')
  }

  return { initApplication }
}
