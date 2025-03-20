import { createApp } from 'vue'
import './assets/main.css'
import { useApplicationService } from './modules/core/application/service/application.service'
import { useConfigFile } from './modules/core/application/service/config.service'
import ErrorApp from '@/modules/core/presentation/views/ErrorApp.vue'

useConfigFile()
  .initConfig()
  .then((response) => {
    if (!response || typeof response === 'string') {
      mountErrorApp('Cannot start Application ::: ' + response)
    } else {
      useApplicationService().initApplication(response)
    }
  })

function mountErrorApp(reason: string) {
  const app = createApp(ErrorApp)

  app.provide<string>('reason', reason)
  app.mount('#app')
}
