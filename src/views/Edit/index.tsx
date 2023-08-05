import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftOutline } from 'antd-mobile-icons'
import '@/styles/edit.less'
import EditList from '@/components/EditList'
import { useUpload } from '@/hooks/useUpload'
import { userStore } from '@/store/userStore'
import { Dialog, Toast } from 'antd-mobile'

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
const BackImg = (props: { backImage: string }) => {
  const { backImage } = props

  const { fileInputRef, handleButtonClick, handleFileChange } = useUpload()

  return (
    <div className="bg-img">
      <img src={backImage} alt="背景图片" />
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
const Avatar = (props: { avatar: string }) => {
  const { avatar } = props

  const { fileInputRef, handleButtonClick, handleFileChange } = useUpload()

  return (
    <div className="avatar">
      <img src={avatar} alt="" />
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
const FuncBtns = (props: { logout: Function; userid: number | string }) => {
  const { logout, userid } = props

  const navigate = useNavigate()

  const changeAccount = () => {
    Dialog.confirm({
      content: '是否切换账号?',
      onConfirm: () => {
        logout({ userid })
          .then(() => {
            setTimeout(() => {
              navigate('/login')
            }, 300)
          })
          .catch(() =>
            Toast.show({
              icon: 'fail',
              content: '切换失败！'
            })
          )
      }
    })
  }
  const logoutAccount = () => {
    Dialog.confirm({
      content: '是否退出登录?',
      onConfirm: () => {
        logout({ userid })
          .then(() => {
            Toast.show({
              icon: 'success',
              content: '退出登录成功！'
            })
            setTimeout(() => {
              navigate('/login')
            }, 300)
          })
          .catch(() =>
            Toast.show({
              icon: 'fail',
              content: '退出登录失败！'
            })
          )
      }
    })
  }

  return (
    <div className="func-btns">
      <button className="change" onClick={changeAccount}>
        切换账号
      </button>
      <button className="louout" onClick={logoutAccount}>
        退出登录
      </button>
    </div>
  )
}

const Edit: FC = () => {
  const { user, logout } = userStore()
  const { avatar, backgroundImage, userid } = user

  return (
    <div className="edit">
      {/* 顶部返回按钮 */}
      <BackIcon></BackIcon>

      {/* 背景图片 */}
      <BackImg backImage={backgroundImage}></BackImg>

      {/* 头像 */}
      <Avatar avatar={avatar}></Avatar>

      {/* 主体部分 */}
      <div className="main">
        {/* 编辑列表 */}
        <EditList></EditList>

        {/* 操作按钮 */}
        <FuncBtns logout={logout} userid={userid}></FuncBtns>
      </div>
    </div>
  )
}

export default Edit
