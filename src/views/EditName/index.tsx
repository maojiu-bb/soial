import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, NavBar } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'

const EditName: FC = () => {
  const navigate = useNavigate()

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
          <Input placeholder="请输入名字" clearable style={{ width: 200 }} />
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
          >
            确认修改
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditName
