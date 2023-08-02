import { header_urlencoded } from '@/utils/requestHeader'
import request from '.'

// 注册
export const Register = <T>(data: T) =>
  request({
    url: '/user/register',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 账号密码登录
export const LoginUsername = <T>(data: T) =>
  request({
    url: '/user/loginUser',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 邮箱密码登录
export const LoginEmail = <T>(data: T) =>
  request({
    url: '/user/loginEmail',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 忘记密码
export const ForgetPassword = <T>(data: T) =>
  request({
    url: '/user/forgetPassword',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 退出登录
export const Logout = <T>(data: T) =>
  request({
    url: '/user/logout',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 注销账号
export const CancelAccount = <T>(data: T) =>
  request({
    url: '/user/cancelAccount',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 获取用户信息
export const GetUserInfo = <T>(query: T) =>
  request({ url: `/user/getInfo?userid=${query}`, method: 'GET' })
