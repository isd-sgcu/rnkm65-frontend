import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_BASE_URL } from 'config/env'

import { getAccessToken } from './auth'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

apiClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const accessToken = await getAccessToken()
    if (!accessToken) {
      // TODO: Handle error
      return config
    }
    return {
      ...config,
      headers: { ...config.headers, Authorization: accessToken },
    }
  },
  // TODO: Handle other error
  (err: AxiosError) => Promise.reject(err)
)

apiClient.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => {
    // TODO: Handle other error

    // Handle if token is not yet expired but invalid
    if (err.response && err.response.status === 401) {
      localStorage.clear()
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)

const httpGet = <T = any>(
  url: string,
  config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<T>> => apiClient.get(url, config)

const httpPost = <T = any, U = any>(
  url: string,
  body: T,
  config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<U>> => apiClient.post(url, body, config)

const httpPut = <T = any, U = any>(
  url: string,
  body: T,
  config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<U>> => apiClient.put(url, body, config)

const httpDelete = <T = any>(
  url: string,
  config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<T>> => apiClient.delete(url, config)

export { apiClient, httpDelete, httpGet, httpPost, httpPut }
