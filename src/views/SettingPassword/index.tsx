import { NavBar, Form, Input } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/settingPassword.less'

const SettingPassword: FC = () => {
  const navigate = useNavigate()
  const [visibleOld, setVisibleOld] = useState(false)
  const [visibleNew, setVisibleNew] = useState(false)

  return (
    <div className="setting-password">
      {/* navbar */}
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
        更换密码
      </NavBar>

      <div className="main">
        <Form layout="horizontal">
          <Form.Item
            label="旧密码"
            name="oldPassword"
            extra={
              <div>
                {!visibleOld ? (
                  <EyeInvisibleOutline onClick={() => setVisibleOld(true)} />
                ) : (
                  <EyeOutline onClick={() => setVisibleOld(false)} />
                )}
              </div>
            }
          >
            <Input
              placeholder="请输入原密码"
              clearable
              type={visibleOld ? 'text' : 'password'}
            />
          </Form.Item>
          <Form.Item
            label="新密码"
            name="newPassword"
            extra={
              <div>
                {!visibleNew ? (
                  <EyeInvisibleOutline onClick={() => setVisibleNew(true)} />
                ) : (
                  <EyeOutline onClick={() => setVisibleNew(false)} />
                )}
              </div>
            }
          >
            <Input
              placeholder="请输入新密码"
              clearable
              type={visibleNew ? 'text' : 'password'}
            />
          </Form.Item>
          <div className="btn">
            <button className="btn">确认更改</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SettingPassword
