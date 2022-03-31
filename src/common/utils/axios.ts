import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_BASE_URL } from 'config/env'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
})

const httpGet = <T = any>(
  url: string,
  config: AxiosRequestConfig<any>
): Promise<AxiosResponse<T>> => apiClient.get(url, config)

const httpPost = <T = any, U = any>(
  url: string,
  body: T,
  config: AxiosRequestConfig<any>
): Promise<AxiosResponse<U>> => apiClient.post(url, body, config)

const httpPut = <T = any, U = any>(
  url: string,
  body: T,
  config: AxiosRequestConfig<any>
): Promise<AxiosResponse<U>> => apiClient.put(url, body, config)

const httpDelete = <T = any>(
  url: string,
  config: AxiosRequestConfig<any>
): Promise<AxiosResponse<T>> => apiClient.delete(url, config)

export { apiClient, httpDelete, httpGet, httpPost, httpPut }
