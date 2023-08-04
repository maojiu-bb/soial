import {
  AddLike,
  AddStar,
  AddView,
  CancelLike,
  CancelStar,
  GetPostDetail,
  GetPostList,
  Report,
  Hide,
  AddPost,
  EditPost,
  DeletePost,
  GetHotSearch,
  Search,
  GetOwnList,
  GetLikeList,
  GetStarList
} from '@/api/request'
import { PostStore } from '@/types/post'
import { timestampToTime } from '@/utils/timestampToTime'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const postStore = create<PostStore>()(
  persist(
    (set) => ({
      // 帖子列表
      postList: [],

      // 详情
      postDetail: {
        postid: '',
        userid: '',
        username: '',
        date: '',
        avatar: '',
        content: '',
        images: [],
        view: 0,
        like: 0,
        star: 0,
        comment: 0,
        searched: 0,
        isReport: 0
      },

      hotList: [],

      searchList: [],

      ownList: [],

      likeList: [],

      starList: [],

      // 获取分页列表
      getPostList: async (query) => {
        try {
          const { data: res } = await GetPostList(query)
          if (res.code === 200) {
            const updateList = res.data.list.map((item: any) => {
              return Object.assign(item, { date: timestampToTime(item.date) })
            })
            set({ postList: updateList })
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 获取详情
      getPostDetail: async (query) => {
        try {
          const { data: res } = await GetPostDetail(query)
          if (res.code === 200) {
            const { detail } = res.data
            set({
              postDetail: Object.assign(detail, {
                date: timestampToTime(detail.date)
              })
            })
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 增加浏览
      addView: async (data) => {
        try {
          const { data: res } = await AddView(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 喜欢
      addLike: async (data) => {
        try {
          const { data: res } = await AddLike(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 收藏
      addStar: async (data) => {
        try {
          const { data: res } = await AddStar(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 取消喜欢
      cancelLike: async (data) => {
        try {
          const { data: res } = await CancelLike(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 取消收藏
      cancelStar: async (data) => {
        try {
          const { data: res } = await CancelStar(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 举报
      report: async (data) => {
        try {
          const { data: res } = await Report(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 隐藏
      hide: async (data) => {
        try {
          const { data: res } = await Hide(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 发布
      addPost: async (data) => {
        try {
          const { data: res } = await AddPost(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 修改
      editPost: async (data) => {
        try {
          const { data: res } = await EditPost(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 删除
      deletePost: async (data) => {
        try {
          const { data: res } = await DeletePost(data)
          if (res.code === 200) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 热搜
      getHotSearch: async () => {
        try {
          const { data: res } = await GetHotSearch()
          if (res.code === 200) {
            const updateList = res.data.hot.map((item: any) => {
              return Object.assign(item, { date: timestampToTime(item.date) })
            })
            set({ hotList: updateList })
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 搜索结果
      search: async (data) => {
        try {
          const { data: res } = await Search(data)
          if (res.code === 200) {
            const updateList = res.data.searchList.map((item: any) => {
              return Object.assign(item, { date: timestampToTime(item.date) })
            })
            set({ searchList: updateList })
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 我的列表
      getOwnList: async (data) => {
        try {
          const { data: res } = await GetOwnList(data)
          if (res.code === 200) {
            const updateList = res.data.ownList.map((item: any) => {
              return Object.assign(item, { date: timestampToTime(item.date) })
            })
            set({ ownList: updateList })
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 喜欢列表
      getLikeList: async (data) => {
        try {
          const { data: res } = await GetLikeList(data)
          if (res.code === 200) {
            const updateList = res.data.likeList.map((item: any) => {
              return Object.assign(item, { date: timestampToTime(item.date) })
            })
            set({ likeList: updateList })
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },

      // 收藏列表
      getStarList: async (data) => {
        try {
          const { data: res } = await GetStarList(data)
          if (res.code === 200) {
            const updateList = res.data.starList.map((item: any) => {
              return Object.assign(item, { date: timestampToTime(item.date) })
            })
            set({ starList: updateList })
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
      name: 'soial-postStore'
    }
  )
)
