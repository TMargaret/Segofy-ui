import type { ApiUrls } from '@/types/ApiUrls'
import type { AppSettings } from '@/types/AppSettings'
import type { AxiosResponse } from 'axios'
import axios from 'axios'

export function configHttp() {
  const loadSettingsFile = async (): Promise<AxiosResponse<AppSettings>> => {
    return await axios.get<AppSettings>(import.meta.env.BASE_URL + 'settings.json')
  }

  const loadConfig = async (settings: AppSettings): Promise<AxiosResponse<ApiUrls>> => {
    return await axios.get<ApiUrls>(settings.URL, {
      headers: { Authorization: 'Basic ' },
    })
  }

  return { loadSettingsFile, loadConfig }
}
