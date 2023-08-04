import { NavBar, Form, Input, Toast } from 'antd-mobile'
import { FC, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/settingEmail.less'
import { emailRule } from '@/utils/validatorRules'
import { FormInstance } from 'antd-mobile/es/components/form'
import { userStore } from '@/store/userStore'

const SettingEmail: FC = () => {
  const user = userStore((state) => state.user)
  const updateEmail = userStore((state) => state.updateEmail)
  const getUserInfo = userStore((state) => state.getUserInfo)

  const navigate = useNavigate()

  const formRef = useRef<FormInstance | null>(null)

  const onFinish = () => {
    formRef.current
      ?.validateFields()
      .then((values: any) => {
        updateEmail({ ...values, userid: user.userid })
          .then(() => {
            Toast.show({
              icon: 'success',
              content: '更换邮箱成功！'
            })
            formRef.current?.resetFields()
            getUserInfo(user.userid)
          })
          .catch(() =>
            Toast.show({
              icon: 'fail',
              content: '更换邮箱失败！'
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
    <div className="setting-email">
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
        更换邮箱
      </NavBar>

      <div className="main">
        <Form layout="horizontal" ref={formRef} onFinish={onFinish}>
          <Form.Item label="旧邮箱" name="oldEmail" rules={[emailRule]}>
            <Input placeholder="请输入旧邮箱" clearable type="email" />
          </Form.Item>
          <Form.Item
            label="新邮箱"
            name="newEmail"
            rules={[
              {
                ...emailRule,
                validator: (_, value) => {
                  if (
                    value &&
                    value === formRef.current?.getFieldValue('oldEmail')
                  ) {
                    return Promise.reject(new Error('新邮箱不能与旧邮箱一致!'))
                  }
                  return Promise.resolve()
                }
              }
            ]}
          >
            <Input placeholder="请输入新邮箱" clearable type="email" />
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

export default SettingEmail
