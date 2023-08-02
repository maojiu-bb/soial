import { Form, Input, NavBar, Toast } from 'antd-mobile'
import { FC, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/recoverPaswword.less'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { emailRule, passwordRule } from '@/utils/validatorRules'
import { FormInstance } from 'antd-mobile/es/components/form'
import { userStore } from '@/store/userStore'

const RecoverPassword: FC = () => {
  const forgetPassword = userStore((state) => state.forgetPassword)

  const [visible, setVisible] = useState<boolean>(false)
  const navigate = useNavigate()

  const formInstance = useRef<FormInstance | null>(null)

  const onFinish = () => {
    formInstance.current?.validateFields().then((values) =>
      forgetPassword({ email: values.email, newPassword: values.password })
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '重置成功！'
          })
          setTimeout(() => {
            navigate('/login')
          }, 1000)
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '重置失败！'
          })
        )
    )
  }

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
          <Form layout="vertical" ref={formInstance} onFinish={onFinish}>
            <Form.Item label="邮箱" name="email" rules={[emailRule]}>
              <Input placeholder="请输入用户邮箱" type="email" />
            </Form.Item>
            <Form.Item
              label="新密码"
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
                placeholder="请输入新密码"
                type={visible ? 'text' : 'password'}
              />
            </Form.Item>
            <Form.Item
              label="确认新密码"
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
                placeholder="请再次输入新密码"
                type={visible ? 'text' : 'password'}
              />
            </Form.Item>
          </Form>
        </div>
        {/* 确认按钮 */}
        <div className="confirm">
          <button onClick={onFinish}>确认</button>
        </div>
      </div>
    </div>
  )
}

export default RecoverPassword
