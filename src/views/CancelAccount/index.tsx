import { Form, Input, NavBar, Toast } from 'antd-mobile'
import { FC, useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import '@/styles/cancelAccount.less'
import { FormInstance } from 'antd-mobile/es/components/form'
import { userStore } from '@/store/userStore'
import { passwordRule } from '@/utils/validatorRules'

const CancelAccount: FC = () => {
  const user = userStore((state) => state.user)
  const cancelAccount = userStore((state) => state.cancelAccount)

  const navigate = useNavigate()
  const [visible, setVisible] = useState<boolean>(false)

  const formInstance = useRef<FormInstance | null>(null)

  const onFinish = () => {
    formInstance.current
      ?.validateFields()
      .then((value) =>
        cancelAccount({ userid: user.userid, password: value.password })
          .then(() => {
            Toast.show({
              icon: 'success',
              content: '注销成功！'
            })
            setTimeout(() => {
              navigate('/login')
            }, 300)
          })
          .catch(() =>
            Toast.show({
              icon: 'fail',
              content: '注销失败！'
            })
          )
      )
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '验证失败！'
        })
      )
  }

  useEffect(() => {}, [user])

  return (
    <div className="cancel-account">
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
        注销账号
      </NavBar>

      {/* main */}
      <div className="main">
        {/* 提醒 */}
        <div className="tip">
          注意: <br />
          注销账号后，用户的所有数据将清除，同时账号也被清除
          <p>请考虑好再操作</p>
        </div>

        {/* 密码确认 */}
        <div className="confirm">
          <Form layout="horizontal" onFinish={onFinish} ref={formInstance}>
            <Form.Item
              label="密码确认"
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
                clearable
                type={visible ? 'text' : 'password'}
              />
            </Form.Item>
            <div className="btn">
              <button onClick={onFinish}>确认注销</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CancelAccount
