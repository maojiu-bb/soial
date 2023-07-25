import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftOutline } from 'antd-mobile-icons'
import '@/styles/edit.less'
import EditList from '@/components/EditList'
import { useUpload } from '@/hooks/useUpload'

// 返回按钮
const BackIcon: FC = () => {
  const navigate = useNavigate()
  return (
    <div className="back-icon" onClick={() => navigate('/user')}>
      <LeftOutline fontSize={16} />
    </div>
  )
}

// 背景图片
const BackImg: FC = () => {
  const { fileInputRef, handleButtonClick, handleFileChange } = useUpload()

  return (
    <div className="bg-img">
      <img
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Q_Eb78_1wfJlsHQJDkiRSAHaE7?w=240&h=190&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
      />
      <div className="change" onClick={handleButtonClick}>
        更换图片
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  )
}

// 头像
const Avatar: FC = () => {
  const { fileInputRef, handleButtonClick, handleFileChange } = useUpload()

  return (
    <div className="avatar">
      <img
        src="https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
      />
      <div className="title" onClick={handleButtonClick}>
        点击更换头像
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  )
}

// 操作按钮
const FuncBtns: FC = () => {
  return (
    <div className="func-btns">
      <button className="change">切换账号</button>
      <button className="louout">退出登录</button>
    </div>
  )
}

const Edit: FC = () => {
  return (
    <div className="edit">
      {/* 顶部返回按钮 */}
      <BackIcon></BackIcon>

      {/* 背景图片 */}
      <BackImg></BackImg>

      {/* 头像 */}
      <Avatar></Avatar>

      {/* 主体部分 */}
      <div className="main">
        {/* 编辑列表 */}
        <EditList></EditList>

        {/* 操作按钮 */}
        <FuncBtns></FuncBtns>
      </div>
    </div>
  )
}

export default Edit
