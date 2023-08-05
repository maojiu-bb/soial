import { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CapsuleTabs, ImageViewer, Tag } from 'antd-mobile'
import TabBar from '@/components/Global/TabBar'
import My from '@/components/My'
import Star from '@/components/Star'
import Like from '@/components/Like'
import '@/styles/user.less'
import Fire from '@/assets/image/fire.png'
import Man from '@/assets/image/man.png'
import Woman from '@/assets/image/woman.png'
import { userStore } from '@/store/userStore'

// 背景图片
const BackImg = (props: { image: string }) => {
  const { image } = props
  return (
    <div className="bg-img">
      <img src={image} alt="" />
    </div>
  )
}

// 头像
const Avatar = (props: {
  avatar: string
  userid: string | number
  username: string
}) => {
  const { avatar, userid, username } = props

  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className="avatar">
      <img
        src={avatar}
        alt=""
        onClick={() => {
          setVisible(true)
        }}
      />
      <ImageViewer
        image={avatar}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
      <div className="info">
        <h2>{username}</h2>
        <span>SoialID: {userid}</span>
      </div>
    </div>
  )
}

// 顶部数据状态
const TopData = (props: {
  sex: string
  address: string
  introduction: string
}) => {
  const { sex, introduction, address } = props

  const navigate = useNavigate()
  const dataList = [
    { title: '喜欢', key: 'like', count: 99 },
    { title: '关注', key: 'concern', count: 99 },
    { title: '粉丝', key: 'fan', count: 99 },
    { title: '朋友', key: 'friend', count: 99 }
  ]

  const handleClick = (key: string) => {
    if (key === 'concern') {
      navigate('/concerns')
    }
    if (key === 'fan') {
      navigate('/fans')
    }
    if (key === 'friend') {
      navigate('/friends')
    }
  }

  return (
    <div className="top">
      <div className="data">
        {dataList.map((item) => {
          return (
            <span key={item.key} onClick={() => handleClick(item.key)}>
              {item.title} &nbsp; {item.count}
            </span>
          )
        })}
      </div>
      <div className="text">
        <img src={Fire} alt="" />
        {introduction ? <span>{introduction}</span> : <span>无</span>}
      </div>
      <div className="detail">
        {sex === '男' && (
          <span>
            男 <img src={Man} alt="" />
          </span>
        )}
        {sex === '女' && (
          <span>
            女 <img src={Woman} alt="" />
          </span>
        )}
        {address && <span>{address}</span>}
      </div>
      <div className="edit">
        <Tag
          color="primary"
          fill="outline"
          style={{ '--border-radius': '6px', padding: '5px 10px' }}
          onClick={() => navigate('/edit')}
        >
          编辑
        </Tag>
      </div>
    </div>
  )
}

// 胶囊选项卡
const Capsule = (props: { username: string }) => {
  const { username } = props

  const [showTitle, setShowTitle] = useState(false)
  const capsuleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = capsuleRef.current
      if (titleElement) {
        const rect = titleElement.getBoundingClientRect()
        if (rect.y <= 0) {
          setShowTitle(true)
        } else {
          setShowTitle(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="capsule" ref={capsuleRef}>
      {showTitle && (
        <div
          className={`title ${showTitle ? 'show' : ''} ${
            showTitle ? 'fade-in' : 'fade-out'
          }`}
        >
          {username}
        </div>
      )}
      <CapsuleTabs>
        <CapsuleTabs.Tab title="我的" key="my">
          <My></My>
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="喜欢" key="like">
          <Like></Like>
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="收藏" key="star">
          <Star></Star>
        </CapsuleTabs.Tab>
      </CapsuleTabs>
    </div>
  )
}

const User: FC = () => {
  const { user } = userStore()
  const {
    backgroundImage,
    avatar,
    userid,
    username,
    sex,
    address,
    introduction
  } = user

  return (
    <div className="user">
      {/* 背景图片 */}
      <BackImg image={backgroundImage}></BackImg>

      {/* 头像 */}
      <Avatar avatar={avatar} userid={userid} username={username}></Avatar>

      {/* 主体部分 */}
      <div className="main">
        {/* 数据栏与状态 */}
        <TopData
          sex={sex}
          address={address}
          introduction={introduction}
        ></TopData>

        {/* 胶囊选项卡 */}
        <Capsule username={username}></Capsule>
      </div>

      {/* TabBar */}
      <TabBar></TabBar>
    </div>
  )
}

export default User
