// axios 简单封装

import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

// 创建 axios 实列
const request = axios.create({
  // 获取基本路径
  baseURL: import.meta.env.VITE_BASE_URL,
  // 设置超时时间
  timeout: 5000,
  // 设置超时提示
  timeoutErrorMessage: '请求超时，请稍后重试！',
  withCredentials: true
})

// 请求拦截器
request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (res: AxiosResponse) => {
    return res
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

export default request
