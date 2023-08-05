import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, NavBar, Toast } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { userStore } from '@/store/userStore'

const EditName: FC = () => {
  const { user, getUserInfo, updateUsername } = userStore()
  const { userid, username } = user

  const navigate = useNavigate()

  const [value, setValue] = useState(username)

  const changeValue = (value: string) => {
    setValue(value)
  }

  const saveChange = () => {
    updateUsername({ userid, newUsername: value })
      .then(() => {
        Toast.show({
          icon: 'success',
          content: '修改成功！'
        })
        getUserInfo(userid)
      })
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '修改失败！'
        })
      )
  }

  return (
    <div className="editName" style={{ backgroundColor: 'fff' }}>
      {/* 导航栏 */}
      <NavBar
        backArrow={<LeftOutline fontSize={18} color="#fff" />}
        onBack={() => navigate('/edit')}
        style={{ backgroundColor: '#e1c0ff', borderBottom: '1px solid #ccc' }}
      >
        <span style={{ fontSize: 16, color: '#fff' }}>修改名字</span>
      </NavBar>

      <div
        style={{
          width: 340,
          height: 300,
          marginLeft: 25,
          marginTop: 40
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#efefef',
            height: 50,
            borderRadius: 15
          }}
        >
          <span style={{ fontSize: 16, marginTop: 13 }}>名字：</span>
          <Input
            placeholder="请输入名字"
            clearable
            style={{ width: 200 }}
            value={value}
            onChange={changeValue}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <button
            style={{
              border: 0,
              backgroundColor: '#e1c0ff',
              color: '#fff',
              width: 130,
              height: 40,
              fontSize: 15,
              borderRadius: 10
            }}
            onClick={saveChange}
          >
            确认修改
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditName
