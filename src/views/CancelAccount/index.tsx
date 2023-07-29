import { Form, Input, NavBar } from 'antd-mobile'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import '@/styles/cancelAccount.less'

const CancelAccount: FC = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState<boolean>(false)

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
          <Form layout="horizontal">
            <Form.Item
              label="密码确认"
              name="password"
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
              <button>确认更改</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CancelAccount
