import { AxiosResponse } from 'axios'

export type TgetPost = {
  userid: string | number
  page: number
}

export type TgetDetail = string | number

export type TaddView = {
  postid: string | number
}

export type TaddLike = {
  postid: string | number
  userid: string | number
}

export type TaddStar = TaddLike

export type TcancelLike = TaddStar

export type TcancelStar = TaddStar

export type Treport = TaddView

export type Thide = TaddLike

export type Tadd = {
  userid: string | number
  username: string
  avatar: string
  content?: string
  images?: { imgid: number; imgUrl: string }[]
}

export type Tedit = {
  postid: string | number
  content: string
  images: { imgid: number; imgUrl: string }[]
}

export type Tdelete = string | number

export type Tsearch = string

export type TownList = string | number

export type TlikeList = string | number

export type TstarList = string | number

export type Post = {
  postid: string | number
  userid: string | number
  username: string
  date: string
  avatar: string
  content: string
  images: { imgid: number | string; imgUrl: string }[]
  view: number
  like: number
  star: number
  comment: number
  searched: number
  isReport: number
}

export type PostStore = {
  postList: Post[]
  postDetail: Post
  hotList: Post[]
  searchList: Post[]
  ownList: Post[]
  likeList: Post[]
  starList: Post[]
  getPostList: (query: TgetPost) => Promise<AxiosResponse<any, any>>
  getPostDetail: (query: TgetDetail) => Promise<AxiosResponse<any, any>>
  addView: (data: TaddView) => Promise<AxiosResponse<any, any>>
  addLike: (data: TaddLike) => Promise<AxiosResponse<any, any>>
  addStar: (data: TaddStar) => Promise<AxiosResponse<any, any>>
  cancelLike: (data: TcancelLike) => Promise<AxiosResponse<any, any>>
  cancelStar: (data: TcancelStar) => Promise<AxiosResponse<any, any>>
  report: (data: Treport) => Promise<AxiosResponse<any, any>>
  hide: (data: Thide) => Promise<AxiosResponse<any, any>>
  addPost: (data: Tadd) => Promise<AxiosResponse<any, any>>
  editPost: (data: Tedit) => Promise<AxiosResponse<any, any>>
  deletePost: (query: Tdelete) => Promise<AxiosResponse<any, any>>
  getHotSearch: () => Promise<AxiosResponse<any, any>>
  search: (query: Tsearch) => Promise<AxiosResponse<any, any>>
  getOwnList: (query: TownList) => Promise<AxiosResponse<any, any>>
  getLikeList: (query: TlikeList) => Promise<AxiosResponse<any, any>>
  getStarList: (query: TstarList) => Promise<AxiosResponse<any, any>>
}

export type PostProps = {
  postList: Post[]
  userid: string | number
  report: (data: Treport) => Promise<AxiosResponse<any, any>>
  hide: (data: Thide) => Promise<AxiosResponse<any, any>>
}
