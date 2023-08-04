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

export type TupdatePassword = {
  userid: string | number
  oldPassword: string
  newPassword: string
}

export type TupdateEmail = {
  userid: string | number
  oldEmail: string
  newEmail: string
}

export type TupdateAvatar = {
  userid: string | number
  avatar: string
}

export type TupdateBackImage = {
  userid: string | number
  backgroundImage: string
}

export type TupdateUsername = {
  userid: string | number
  newUsername: string
}

export type TupdateGender = {
  userid: string | number
  sex: string
}

export type TupdateIntroduction = {
  userid: string | number
  introduction: string
}

export type TupdateAddress = {
  userid: string | number
  address: string
}

export type TupdateBirthday = {
  userid: string | number
  birthday: string
}

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
  updatePassword: (data: TupdatePassword) => Promise<AxiosResponse<any, any>>
  updateEmail: (data: TupdateEmail) => Promise<AxiosResponse<any, any>>
  updateAvatar: (data: TupdateAvatar) => Promise<AxiosResponse<any, any>>
  updateBackImage: (data: TupdateBackImage) => Promise<AxiosResponse<any, any>>
  updateUsername: (data: TupdateUsername) => Promise<AxiosResponse<any, any>>
  updateGender: (data: TupdateGender) => Promise<AxiosResponse<any, any>>
  updateIntroduction: (
    data: TupdateIntroduction
  ) => Promise<AxiosResponse<any, any>>
  updateAddress: (data: TupdateAddress) => Promise<AxiosResponse<any, any>>
  updateBirthday: (data: TupdateBirthday) => Promise<AxiosResponse<any, any>>
}
