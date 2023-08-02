import { FC, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/login.less'
import { Form, Input, Toast } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { emailRule, passwordRule, usernameRule } from '@/utils/validatorRules'
import { FormInstance } from 'antd-mobile/es/components/form'
import { userStore } from '@/store/userStore'

const Login: FC = () => {
  const loginUsername = userStore((state) => state.loginUsername)
  const loginEmail = userStore((state) => state.loginEmail)
  const getUserInfo = userStore((state) => state.getUserInfo)

  const navigate = useNavigate()
  const [visible, setVisible] = useState<boolean>(false)
  const [visiblePass, setVisiblePass] = useState<boolean>(true)

  const usernameFormRef = useRef<FormInstance | null>(null)
  const emailFormRef = useRef<FormInstance | null>(null)

  const onFinish = () => {
    if (visiblePass) {
      usernameFormRef.current
        ?.validateFields()
        .then((values: any) =>
          loginUsername(values)
            .then((res) => {
              getUserInfo(res.data.userid)
                .then(() => {
                  setTimeout(() => {
                    navigate('/home')
                  }, 300)
                })
                .catch(() =>
                  Toast.show({
                    icon: 'fail',
                    content: '获取数据失败！'
                  })
                )
            })
            .catch(() =>
              Toast.show({
                icon: 'fail',
                content: '登录失败!'
              })
            )
        )
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '请填写完整！'
          })
        )
    } else {
      emailFormRef.current
        ?.validateFields()
        .then((values: any) =>
          loginEmail(values)
            .then((res) => {
              getUserInfo(res.data.userid)
                .then(() => {
                  setTimeout(() => {
                    navigate('/home')
                  }, 300)
                })
                .catch(() =>
                  Toast.show({
                    icon: 'fail',
                    content: '获取数据失败！'
                  })
                )
            })
            .catch(() =>
              Toast.show({
                icon: 'fail',
                content: '登录失败！'
              })
            )
        )
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '请填写完整！'
          })
        )
    }
  }

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
            <Form layout="vertical" onFinish={onFinish} ref={usernameFormRef}>
              <Form.Item label="用户名" name="username" rules={[usernameRule]}>
                <Input placeholder="请输入用户名" />
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
            </Form>
          </div>
        ) : (
          <div className="login-email">
            <Form layout="vertical" onFinish={onFinish} ref={emailFormRef}>
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
          <button onClick={onFinish}>登录</button>
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
