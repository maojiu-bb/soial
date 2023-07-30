import { Form, Input, NavBar } from 'antd-mobile'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/recoverPaswword.less'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'

const RecoverPassword: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <div className="recover-password">
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
        找回密码
      </NavBar>

      {/* main */}
      <div className="main">
        <h3>重改密码</h3>
        <div className="form">
          <Form layout="vertical">
            <Form.Item
              label="邮箱"
              name="email"
              rules={[{ required: true, message: '邮箱不能为空!' }]}
            >
              <Input placeholder="请输入用户邮箱" type="email" />
            </Form.Item>
            <Form.Item
              label="新密码"
              name="password"
              rules={[{ required: true, message: '密码不能为空!' }]}
              extra={
                <div>
                  {!visible ? (
                    <EyeInvisibleOutline onClick={() => setVisible(true)} />
                  ) : (
                    <EyeOutline onClick={() => setVisible(false)} />
                  )}
                </div>
              }
            >
              <Input
                placeholder="请输入新密码"
                type={visible ? 'text' : 'password'}
              />
            </Form.Item>
            <Form.Item
              label="确认新密码"
              name="password"
              rules={[{ required: true, message: '密码不能为空!' }]}
              extra={
                <div>
                  {!visible ? (
                    <EyeInvisibleOutline onClick={() => setVisible(true)} />
                  ) : (
                    <EyeOutline onClick={() => setVisible(false)} />
                  )}
                </div>
              }
            >
              <Input
                placeholder="请再次输入新密码"
                type={visible ? 'text' : 'password'}
              />
            </Form.Item>
          </Form>
        </div>
        {/* 确认按钮 */}
        <div className="confirm">
          <button>确认</button>
        </div>
      </div>
    </div>
  )
}

export default RecoverPassword
