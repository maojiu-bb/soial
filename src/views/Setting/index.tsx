import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/setting.less'
import { NavBar } from 'antd-mobile'

type Item = { id: number; text: string; key: string }
const item: Item[] = [
  { id: 1, text: '更换密码', key: 'settingPassword' },
  { id: 2, text: '更换邮箱', key: 'settingEmail' },
  { id: 3, text: '注销账号', key: 'cancelAccount' }
]

const Setting: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="setting">
      <NavBar
        style={{
          backgroundColor: '#e1c0ff',
          position: 'fixed',
          width: '100%',
          height: '50px',
          top: '0px',
          color: '#fff'
        }}
        onBack={() => navigate(-1)}
      >
        设置
      </NavBar>
      <div className="main">
        {item.map((item) => {
          return (
            <div
              className="item"
              key={item.id}
              onClick={() => navigate(`/${item.key}`)}
            >
              {item.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Setting
