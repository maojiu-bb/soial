import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/register.less'
import { Form, Input } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'

const Register: FC = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className="register">
      {/* 顶部背景 */}
      <div className="top">
        <div className="title">Soial</div>
      </div>

      {/* main */}
      <div className="main">
        {/* title */}
        <h3>注册</h3>
        {/* 登录 */}
        <div className="register-password">
          <Form layout="vertical">
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '用户名不能为空!' }]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
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
            <Form.Item
              label="确认密码"
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
                placeholder="请再次输入密码"
                type={visible ? 'text' : 'password'}
              />
            </Form.Item>
          </Form>
        </div>

        {/* 底部提示 */}
        <div className="bottom">
          <span onClick={() => navigate('/login')}>已有账号</span>
        </div>

        {/* 注册按钮 */}
        <div className="register-button">
          <button>注册</button>
        </div>
      </div>
    </div>
  )
}

export default Register
