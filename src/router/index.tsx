import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home/index'))
const User = lazy(() => import('@/views/User/index'))

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
  }
]

export default routes
