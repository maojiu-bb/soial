import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, NavBar, Toast } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { userStore } from '@/store/userStore'

const EditDescription: FC = () => {
  const { user, updateIntroduction, getUserInfo } = userStore()
  const { userid, introduction } = user

  const navigate = useNavigate()

  const [value, setValue] = useState(introduction)

  const changeValue = (value: any) => {
    setValue(value)
  }

  const saveChange = () => {
    updateIntroduction({ userid, introduction: value })
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
    <div className="editDescription" style={{ backgroundColor: '#fff' }}>
      {/* 导航栏 */}
      <NavBar
        backArrow={<LeftOutline fontSize={18} color="#fff" />}
        onBack={() => navigate('/edit')}
        style={{ backgroundColor: '#e1c0ff', borderBottom: '1px solid #ccc' }}
      >
        <span style={{ fontSize: 16, color: '#fff' }}>修改简介</span>
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
          <span style={{ fontSize: 16, marginTop: 13 }}>简介：</span>
          <Input
            placeholder="请输入简介"
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

export default EditDescription
