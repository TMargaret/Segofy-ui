import type { ApiUrls } from '@/types/ApiUrls'
import { configHttp } from '../../infrastructure/http/config.http'
import type { AppSettings } from '@/types/AppSettings'
import { AxiosError } from 'axios'

export function useConfigFile() {
  const initConfig = async (): Promise<ApiUrls | string> => {
    const useConfigHttp = configHttp()
    // Try to fetch a settings.json for config files form CCS
    try {
      const applicationEnv: AppSettings = (await useConfigHttp.loadSettingsFile()).data

      if (applicationEnv) {
        if (applicationEnv.URL === 'localhost') {
          return {
            apiUrl: 'https://segofy.com/api',
          }
        } else {
          const initSettingsResponse = (await useConfigHttp.loadConfig(applicationEnv)).data

          return {
            apiUrl: initSettingsResponse.apiUrl,
          }
        }
      }
      return ''
    } catch (error: AxiosError | any) {
      if (error && error instanceof AxiosError && error.message) {
        return error.message
      } else {
        return error
      }
    }
  }

  return {
    initConfig,
  }
}
