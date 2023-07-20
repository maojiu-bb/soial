import { FC, useState } from 'react'
import { CapsuleTabs, ImageViewer } from 'antd-mobile'
import TabBar from '@/components/Global/TabBar'
import My from '@/components/My'
import Star from '@/components/Star'
import Like from '@/components/Like'
import '@/styles/user.less'
import Fire from '@/assets/image/fire.png'
import Man from '@/assets/image/man.png'
import Woman from '@/assets/image/woman.png'

// 背景图片
const BackImg: FC = () => {
  return (
    <div className="bg-img">
      <img
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Q_Eb78_1wfJlsHQJDkiRSAHaE7?w=240&h=190&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
      />
    </div>
  )
}

// 头像
const Avatar: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className="avatar">
      <img
        src="https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
        onClick={() => {
          setVisible(true)
        }}
      />
      <ImageViewer
        image={
          'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7'
        }
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
      <div className="info">
        <h2>猫九</h2>
        <span>SoialID: 6666</span>
      </div>
    </div>
  )
}

// 顶部数据状态
const TopData: FC = () => {
  const dataList = [
    { title: '喜欢', count: 99 },
    { title: '关注', count: 99 },
    { title: '粉丝', count: 99 },
    { title: '朋友', count: 99 }
  ]
  return (
    <div className="top">
      <div className="data">
        {dataList.map((item, index) => {
          return (
            <span key={index}>
              {item.title} &nbsp; {item.count}
            </span>
          )
        })}
      </div>
      <div className="text">
        <img src={Fire} alt="" />
        <span>在午夜时分相遇，寻找真实的自己</span>
      </div>
      <div className="detail">
        {true ? (
          <span>
            男 <img src={Man} alt="" />
          </span>
        ) : (
          <span>
            女 <img src={Woman} alt="" />
          </span>
        )}
        <span>江西·赣州</span>
      </div>
    </div>
  )
}

// 胶囊选项卡
const Capsule: FC = () => {
  return (
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
  )
}

const User: FC = () => {
  return (
    <div className="user">
      {/* 背景图片 */}
      <BackImg></BackImg>

      {/* 头像 */}
      <Avatar></Avatar>

      {/* 主体部分 */}
      <div className="main">
        {/* 数据栏与状态 */}
        <TopData></TopData>

        {/* 胶囊选项卡 */}
        <Capsule></Capsule>
      </div>

      {/* TabBar */}
      <TabBar></TabBar>
    </div>
  )
}

export default User
