import { header_json, header_urlencoded } from '@/utils/requestHeader'
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

// 更换密码
export const UpdatePassword = <T>(data: T) =>
  request({
    url: '/user/updatePassword',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 更换邮箱
export const UpdateEmail = <T>(data: T) =>
  request({
    url: 'user/updateEmail',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 更换头像
export const UpdateAvatar = <T>(data: T) =>
  request({
    url: 'user/updateAvatar',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 更换背景
export const UpdateBackImage = <T>(data: T) =>
  request({
    url: 'user/updateBackImage',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 更换用户名
export const UpdateUsername = <T>(data: T) =>
  request({
    url: 'user/updateUsername',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 更换性别
export const UpdateGender = <T>(data: T) =>
  request({
    url: 'user/updateGender',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 更换简介
export const UpdateIntroduction = <T>(data: T) =>
  request({
    url: 'user/updateIntroduction',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 更换地址
export const UpdateAddress = <T>(data: T) =>
  request({
    url: 'user/updateAddress',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 更换生日
export const UpdateBirthday = <T>(data: T) =>
  request({
    url: 'user/updateBirthday',
    method: 'POST',
    headers: header_urlencoded(),
    data
  })

// 获取分页列表
export const GetPostList = <
  T extends { page: number; userid: string | number }
>(
  query: T
) =>
  request({
    url: `/post/list?page=${query.page}&userid=${query.userid}`,
    method: 'GET'
  })

// 获取文章详情
export const GetPostDetail = <T>(query: T) =>
  request({ url: `/post/detail?postid=${query}`, method: 'GET' })

// 增加浏览
export const AddView = <T>(data: T) =>
  request({
    url: '/post/updateView',
    method: 'PUT',
    headers: header_json(),
    data
  })

// 喜欢
export const AddLike = <T>(data: T) =>
  request({
    url: '/post/updateLike',
    method: 'PUT',
    headers: header_json(),
    data
  })

// 收藏
export const AddStar = <T>(data: T) =>
  request({
    url: '/post/updateStar',
    method: 'PUT',
    headers: header_json(),
    data
  })

// 取消喜欢
export const CancelLike = <T>(data: T) =>
  request({
    url: '/post/cancelLike',
    method: 'PUT',
    headers: header_json(),
    data
  })

// 取消收藏
export const CancelStar = <T>(data: T) =>
  request({
    url: '/post/cancelStar',
    method: 'PUT',
    headers: header_json(),
    data
  })

// 举报
export const Report = <T>(data: T) =>
  request({
    url: '/post/report',
    method: 'PUT',
    headers: header_json(),
    data
  })

// 隐藏
export const Hide = <T>(data: T) =>
  request({
    url: '/post/hide',
    method: 'PUT',
    headers: header_json(),
    data
  })

// 发布帖子
export const AddPost = <T>(data: T) =>
  request({
    url: '/post/add',
    method: 'POST',
    headers: header_json(),
    data
  })

// 修改帖子
export const EditPost = <T>(data: T) =>
  request({
    url: '/post/edit',
    method: 'PUT',
    headers: header_json(),
    data
  })

// 删除帖子
export const DeletePost = <T>(query: T) =>
  request({
    url: `/post/delete?postid=${query}`,
    method: 'DELETE'
  })

// 获取热门搜索
export const GetHotSearch = () => request({ url: '/post/hot', method: 'GET' })

// 模糊查询
export const Search = <T>(query: T) =>
  request({ url: `/post/search?keyword=${query}`, method: 'GET' })

// 获取我的帖子列表
export const GetOwnList = <T>(query: T) =>
  request({ url: `/post/own?userid=${query}`, method: 'GET' })

// 获取喜欢帖子列表
export const GetLikeList = <T>(query: T) =>
  request({ url: `/post/like?userid=${query}`, method: 'GET' })

// 获取收藏列表
export const GetStarList = <T>(query: T) =>
  request({ url: `/post/star?userid=${query}`, method: 'GET' })

// 添加搜索历史
export const AddSearchHistory = <T>(data: T) =>
  request({
    url: '/history/create',
    method: 'POST',
    headers: header_json(),
    data
  })

// 获取搜索历史
export const GetSearchHistory = <T>(query: T) =>
  request({ url: `/history/allHistory?userid=${query}`, method: 'GET' })

// 删除一条历史
export const DeleteOneHistory = <
  T extends { userid: string | number; historyid: string | number }
>(
  query: T
) =>
  request({
    url: `/history/deleteOne?userid=${query.userid}&historyid=${query.historyid}`,
    method: 'DELETE'
  })

// 清空历史
export const ClearHistory = <T>(query: T) =>
  request({ url: `/history/deleteAll?userid=${query}`, method: 'DELETE' })
