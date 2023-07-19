import { FC } from 'react'
import { TabBar } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  SearchOutline,
  UserOutline,
  AddSquareOutline
} from 'antd-mobile-icons'

const Bottom: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/home',
      icon: <AppOutline />
    },
    {
      key: '/search',
      icon: <SearchOutline />
    },
    {
      key: '/add',
      icon: (
        <AddSquareOutline
          fontSize={32}
          style={{ transform: 'translateY(-6px)' }}
        />
      )
    },
    {
      key: '/message',
      icon: <MessageOutline />
    },
    {
      key: '/user',
      icon: <UserOutline />
    }
  ]

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} />
      ))}
    </TabBar>
  )
}

export default () => {
  return (
    <div
      style={{
        flex: 0,
        borderTop: 'solid 1px var(--adm-color-border)'
      }}
    >
      <Bottom />
    </div>
  )
}
