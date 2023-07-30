import { FC, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  MoreOutline,
  EyeOutline,
  HeartOutline,
  MessageOutline,
  StarOutline
} from 'antd-mobile-icons'
import '@/styles/post.less'
import { ActionSheet, NavBar } from 'antd-mobile'
import type { Action } from 'antd-mobile/es/components/action-sheet'
import '@/styles/postDetail.less'
import Comment from '@/components/Global/Comment/index'

const homeActions: Action[] = [
  { text: '发起聊天', key: 'chat' },
  { text: '喜欢', key: 'like' },
  { text: '收藏', key: 'star' },
  { text: '举报', key: 'report' }
]

const PostDetail: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [visible, setVisible] = useState<boolean>(false)

  const onAction = ({ key, text }: Action) => {
    console.log(key, text)
  }

  return (
    <div className="post-detail">
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
        详情
      </NavBar>

      {/* 内容 */}
      <div className="post">
        <div className="top-info">
          <img src={''} alt="" />
          <div className="info">
            <h3>猫九</h3>
            <span>07-20 23:52</span>
          </div>
          <div className="rigth-icon" onClick={() => setVisible(true)}>
            <MoreOutline fontSize={28} />
          </div>
          <ActionSheet
            extra="请选择你要进行的操作"
            cancelText="取消"
            visible={visible}
            actions={homeActions}
            onClose={() => setVisible(false)}
            onAction={(value) => onAction(value)}
          />
        </div>
        <div className="detail">
          <div className="text"></div>
          <div className="images">
            {/* {item.images.length > 0 &&
              item.images.map((img) => {
                let imgClassName = 'img1'
                if (item.images.length === 1) {
                  imgClassName = 'img1'
                } else if (item.images.length === 2) {
                  imgClassName = 'img2'
                } else {
                  imgClassName = 'img3'
                }

                return ( */}
            <img src={''} className={''} />
            {/* ) */}
            {/* })} */}
          </div>
        </div>
        <div className="bottom-info">
          <div className="info">
            <span>
              <EyeOutline style={{ marginRight: 5, fontSize: 15 }} />
              {/* {item.views} */}
              55
            </span>
            <span>
              <HeartOutline style={{ fontSize: 18 }} />
              &nbsp;55
              <StarOutline style={{ fontSize: 18, marginLeft: 15 }} />
              &nbsp;55
              <MessageOutline style={{ fontSize: 18, marginLeft: 15 }} />
              &nbsp;55
            </span>
          </div>
        </div>
      </div>
      <div className="comment">
        <Comment id={location.search.slice(3)}></Comment>
      </div>
    </div>
  )
}

export default PostDetail
