import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/login.less'
import { Form, Input } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'

const Login: FC = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState<boolean>(false)
  const [visiblePass, setVisiblePass] = useState<boolean>(true)

  return (
    <div className="login">
      {/* 顶部背景 */}
      <div className="top">
        <div className="title">Soial</div>
      </div>

      {/* main */}
      <div className="main">
        {/* title */}
        <h3>登录</h3>
        {/* 登录 */}
        {visiblePass ? (
          <div className="login-password">
            <Form layout="vertical">
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '用户名不能为空!' }]}
              >
                <Input placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item
                label="密码"
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
                  placeholder="请输入密码"
                  type={visible ? 'text' : 'password'}
                />
              </Form.Item>
            </Form>
          </div>
        ) : (
          <div className="login-email">
            <Form layout="vertical">
              <Form.Item
                label="邮箱"
                name="email"
                rules={[{ required: true, message: '邮箱不能为空!' }]}
              >
                <Input placeholder="请输入用户邮箱" type="email" />
              </Form.Item>
              <Form.Item
                label="密码"
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
                  placeholder="请输入密码"
                  type={visible ? 'text' : 'password'}
                />
              </Form.Item>
            </Form>
          </div>
        )}

        {/* 底部提示 */}
        <div className="bottom">
          {visiblePass ? (
            <span onClick={() => setVisiblePass(false)}>邮箱登录</span>
          ) : (
            <span onClick={() => setVisiblePass(true)}>用户名登录</span>
          )}
          <span onClick={() => navigate('/register')}>注册账号</span>
        </div>

        {/* 登录按钮 */}
        <div className="login-button">
          <button>登录</button>
        </div>

        {/* 忘记密码 */}
        <div className="forget">
          <span onClick={() => navigate('/recoverPassword')}>忘记密码？</span>
        </div>
      </div>
    </div>
  )
}

export default Login
