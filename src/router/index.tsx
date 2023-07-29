import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home/index'))
const User = lazy(() => import('@/views/User/index'))
const Search = lazy(() => import('@/views/Search/index'))
const Add = lazy(() => import('@/views/Add/index'))
const Message = lazy(() => import('@/views/Message/index'))
const Edit = lazy(() => import('@/views/Edit/index'))
const EditName = lazy(() => import('@/views/EditName/index'))
const EditDescription = lazy(() => import('@/views/EditDescription/index'))
const Setting = lazy(() => import('@/views/Setting/index'))
const PostDetail = lazy(() => import('@/views/PostDetail/index'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'}></Navigate>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/user',
    element: <User></User>
  },
  {
    path: '/search',
    element: <Search></Search>
  },
  {
    path: '/add',
    element: <Add></Add>
  },
  {
    path: '/message',
    element: <Message></Message>
  },
  {
    path: '/edit',
    element: <Edit></Edit>
  },
  {
    path: '/editName',
    element: <EditName></EditName>
  },
  {
    path: '/editDescription',
    element: <EditDescription></EditDescription>
  },
  {
    path: '/setting',
    element: <Setting></Setting>
  },
  {
    path: '/postDetail',
    element: <PostDetail></PostDetail>
  }
]

export default routes
