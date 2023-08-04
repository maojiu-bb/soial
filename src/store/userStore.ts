import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserStore } from '@/types/user'
import {
  CancelAccount,
  ForgetPassword,
  GetUserInfo,
  LoginEmail,
  LoginUsername,
  Logout,
  Register,
  UpdateAvatar,
  UpdateEmail,
  UpdatePassword,
  UpdateBackImage,
  UpdateUsername,
  UpdateGender,
  UpdateIntroduction,
  UpdateAddress,
  UpdateBirthday
} from '@/api/request'
import { removeToken, setToken } from '@/utils/token'

export const userStore = create<UserStore>()(
  persist(
    (set) => ({
      // 用户信息
      user: {
        userid: '',
        username: '',
        password: '',
        email: '',
        avatar: '',
        sex: '',
        introduction: '',
        address: '',
        birthday: '',
        backgroundImage: ''
      },

      // 注册
      register: async (data) => {
        try {
          const { data: res } = await Register(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 用户名登录
      loginUsername: async (data) => {
        try {
          const { data: res } = await LoginUsername(data)
          if (res.code === 200) {
            setToken(res.data.token)
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 邮箱登录
      loginEmail: async (data) => {
        try {
          const { data: res } = await LoginEmail(data)
          if (res.code === 200) {
            setToken(res.data.token)
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 忘记密码
      forgetPassword: async (data) => {
        try {
          const { data: res } = await ForgetPassword(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 退出登录
      logout: async (data) => {
        try {
          const { data: res } = await Logout(data)
          if (res.code === 200) {
            removeToken()
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 注销账号
      cancelAccount: async (data) => {
        try {
          const { data: res } = await CancelAccount(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 获取用户信息
      getUserInfo: async (query) => {
        try {
          const { data: res } = await GetUserInfo(query)
          if (res.code === 200) {
            const { user } = res.data
            set({
              user: {
                userid: user.userid,
                username: user.username,
                password: user.password,
                email: user.email,
                avatar: user.avatar,
                sex: user.sex,
                introduction: user.introduction,
                address: user.address,
                birthday: user.birthday,
                backgroundImage: user.backgroundImage
              }
            })
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 更换密码
      updatePassword: async (data) => {
        try {
          const { data: res } = await UpdatePassword(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 更换邮箱
      updateEmail: async (data) => {
        try {
          const { data: res } = await UpdateEmail(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 更换头像
      updateAvatar: async (data) => {
        try {
          const { data: res } = await UpdateAvatar(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 更换背景
      updateBackImage: async (data) => {
        try {
          const { data: res } = await UpdateBackImage(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 更换用户名
      updateUsername: async (data) => {
        try {
          const { data: res } = await UpdateUsername(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 更换性别
      updateGender: async (data) => {
        try {
          const { data: res } = await UpdateGender(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 更换简介
      updateIntroduction: async (data) => {
        try {
          const { data: res } = await UpdateIntroduction(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 更换地址
      updateAddress: async (data) => {
        try {
          const { data: res } = await UpdateAddress(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 更换生日
      updateBirthday: async (data) => {
        try {
          const { data: res } = await UpdateBirthday(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      }
    }),
    { name: 'soail-userStore' }
  )
)
