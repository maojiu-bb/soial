import {
  AddSearchHistory,
  ClearHistory,
  DeleteOneHistory,
  GetSearchHistory
} from '@/api/request'
import { HistoryStore } from '@/types/history'
import { timestampToTime } from '@/utils/timestampToTime'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const historyStore = create<HistoryStore>()(
  persist(
    (set) => ({
      searchHistory: [],

      // 增加历史
      addHistory: async (data) => {
        try {
          const { data: res } = await AddSearchHistory(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 获取历史
      getHistory: async (query) => {
        try {
          const { data: res } = await GetSearchHistory(query)
          if (res.code === 200) {
            const updateList = res.data.list.map((item: any) => {
              return Object.assign(item, { date: timestampToTime(item.date) })
            })
            set({ searchHistory: updateList })
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 删除历史
      deleteHistory: async (data) => {
        try {
          const { data: res } = await DeleteOneHistory(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 清空历史
      clearHistory: async (data) => {
        try {
          const { data: res } = await ClearHistory(data)
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
    {
      name: 'soial-historyStore'
    }
  )
)
