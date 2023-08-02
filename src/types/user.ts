import { AxiosResponse } from 'axios'

export type Tregister = {
  username: string
  password: string
  email: string
}

export type TloginUser = {
  username: string
  password: string
}

export type TloginEmail = {
  email: string
  password: string
}

export type TforgetPassword = {
  email: string
  newPassword: string
}

export type Tlogout = {
  userid: string | number
}

export type TcancelAccount = {
  userid: string | number
  password: string
}

export type TgetUserInfo = string | number

export type User = {
  userid: string | number
  username: string
  password: string
  email: string
  avatar: string
  sex: string
  introduction: string
  address: string
  birthday: string
  backgroundImage: string
}

export type UserStore = {
  user: User
  register: (data: Tregister) => Promise<AxiosResponse<any, any>>
  loginUsername: (data: TloginUser) => Promise<AxiosResponse<any, any>>
  loginEmail: (data: TloginEmail) => Promise<AxiosResponse<any, any>>
  forgetPassword: (data: TforgetPassword) => Promise<AxiosResponse<any, any>>
  logout: (data: Tlogout) => Promise<AxiosResponse<any, any>>
  cancelAccount: (data: TcancelAccount) => Promise<AxiosResponse<any, any>>
  getUserInfo: (query: TgetUserInfo) => Promise<AxiosResponse<any, any>>
}
