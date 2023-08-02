import { FC, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/register.less'
import { Form, Input, Toast } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { emailRule, passwordRule, usernameRule } from '@/utils/validatorRules'
import { FormInstance } from 'antd-mobile/es/components/form'
import { userStore } from '@/store/userStore'

const Register: FC = () => {
  const register = userStore((state) => state.register)

  const navigate = useNavigate()
  const [visible, setVisible] = useState<boolean>(false)

  const formInstance = useRef<FormInstance | null>(null)

  const onFinish = () => {
    formInstance.current?.validateFields().then((values: any) =>
      register({
        username: values.username,
        password: values.password,
        email: values.email
      })
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '注册成功！'
          })
          setTimeout(() => {
            navigate('/login')
          }, 1000)
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '注册失败！'
          })
        )
    )
  }

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
          <Form layout="vertical" onFinish={onFinish} ref={formInstance}>
            <Form.Item label="用户名" name="username" rules={[usernameRule]}>
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item label="邮箱" name="email" rules={[emailRule]}>
              <Input placeholder="请输入用户邮箱" type="email" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[passwordRule]}
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
              name="repassword"
              rules={[
                {
                  ...passwordRule,
                  validator: (_, value) => {
                    if (
                      value &&
                      value !== formInstance.current?.getFieldValue('password')
                    ) {
                      return Promise.reject(new Error('两次输入的密码不一致'))
                    }
                    return Promise.resolve()
                  }
                }
              ]}
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
          <button onClick={onFinish}>注册</button>
        </div>
      </div>
    </div>
  )
}

export default Register
