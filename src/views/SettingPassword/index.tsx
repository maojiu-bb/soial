import { NavBar, Form, Input, Toast } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { FC, useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/settingPassword.less'
import { FormInstance } from 'antd-mobile/es/components/form'
import { passwordRule } from '@/utils/validatorRules'
import { userStore } from '@/store/userStore'

const SettingPassword: FC = () => {
  const user = userStore((state) => state.user)
  const updatePassword = userStore((state) => state.updatePassword)
  const getUserInfo = userStore((state) => state.getUserInfo)

  const navigate = useNavigate()
  const [visibleOld, setVisibleOld] = useState(false)
  const [visibleNew, setVisibleNew] = useState(false)

  const formRef = useRef<FormInstance | null>(null)

  const onFinish = () => {
    formRef.current
      ?.validateFields()
      .then((values: any) => {
        updatePassword({ ...values, userid: user.userid })
          .then(() => {
            Toast.show({
              icon: 'success',
              content: '更换密码成功！'
            })
            formRef.current?.resetFields()
            getUserInfo(user.userid)
          })
          .catch(() =>
            Toast.show({
              icon: 'fail',
              content: '更换密码失败！'
            })
          )
      })
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '验证失败！'
        })
      )
  }

  useEffect(() => {}, [user])

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
        <Form layout="horizontal" onFinish={onFinish} ref={formRef}>
          <Form.Item
            label="旧密码"
            name="oldPassword"
            rules={[passwordRule]}
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
            rules={[
              {
                ...passwordRule,
                validator: (_, value) => {
                  if (
                    value &&
                    value === formRef.current?.getFieldValue('oldPassword')
                  ) {
                    return Promise.reject(new Error('新密码不能与原密码一致！'))
                  }
                  return Promise.resolve()
                }
              }
            ]}
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
            <button className="btn" onClick={onFinish}>
              确认更改
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SettingPassword
