import { FC } from 'react'
import TabBar from '@/components/TabBar'
import '@/styles/user.less'
import Fire from '@/assets/image/fire.png'
import Man from '@/assets/image/man.png'
import Woman from '@/assets/image/woman.png'

const User: FC = () => {
  return (
    <div className="user">
      {/* 背景图片 */}
      <div className="bg-img">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Q_Eb78_1wfJlsHQJDkiRSAHaE7?w=240&h=190&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
      </div>

      {/* 头像 */}
      <div className="avatar">
        <img
          src="https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h2>猫九</h2>
          <span>SoialID: 6666</span>
        </div>
      </div>

      {/* 主体部分 */}
      <div className="main">
        {/* 数据栏与状态 */}
        <div className="top">
          <div className="data">
            <span>喜欢 99</span>
            <span>关注 99</span>
            <span>粉丝 99</span>
            <span>朋友 99</span>
          </div>
          <div className="text">
            <img src={Fire} alt="" />
            <span>在午夜时分相遇，寻找真实的自己</span>
          </div>
          <div className="detail">
            <span>
              男 <img src={Man} alt="" />
            </span>
            <span>江西·赣州</span>
          </div>
        </div>
      </div>

      {/* TabBar */}
      <TabBar></TabBar>
    </div>
  )
}

export default User
