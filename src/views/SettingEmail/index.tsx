import { NavBar, Form, Input } from 'antd-mobile'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/settingEmail.less'

const SettingEmail: FC = () => {
  const navigate = useNavigate()

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
        <Form layout="horizontal">
          <Form.Item label="旧邮箱" name="oldEmail">
            <Input placeholder="请输入旧邮箱" clearable type="email" />
          </Form.Item>
          <Form.Item label="新邮箱" name="newEmail">
            <Input placeholder="请输入新邮箱" clearable type="email" />
          </Form.Item>
          <div className="btn">
            <button className="btn">确认更改</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SettingEmail
