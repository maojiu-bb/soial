import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  MoreOutline,
  EyeOutline,
  HeartOutline,
  MessageOutline,
  StarOutline
} from 'antd-mobile-icons'
import '@/styles/post.less'
import { ActionSheet } from 'antd-mobile'
import type { Action } from 'antd-mobile/es/components/action-sheet'

// 模拟数据
const mockData = [
  {
    id: 1,
    name: '猫九',
    date: '07-20 23:52',
    avatar:
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    text: '在午夜时分相遇，寻找真实的自己',
    images: [],
    views: 99,
    like: 99,
    star: 99,
    commits: 99
  },
  {
    id: 2,
    name: '猫九',
    date: '07-20 23:52',
    avatar:
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    text: '',
    images: [
      {
        id: 1,
        url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7'
      }
    ],
    views: 99,
    like: 99,
    star: 99,
    commits: 99
  },
  {
    id: 3,
    name: '猫九',
    date: '07-20 23:52',
    avatar:
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    text: '在午夜时分相遇，寻找真实的自己',
    images: [
      {
        id: 1,
        url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7'
      },
      {
        id: 2,
        url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7'
      }
    ],
    views: 99,
    like: 99,
    star: 99,
    commits: 99
  },
  {
    id: 4,
    name: '猫九',
    date: '07-20 23:52',
    avatar:
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    text: '',
    images: [
      {
        id: 1,
        url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7'
      },
      {
        id: 2,
        url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7'
      },
      {
        id: 3,
        url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7'
      }
    ],
    views: 99,
    like: 99,
    star: 99,
    commits: 99
  }
]

const actions: Action[] = [
  { text: '修改', key: 'edit' },
  { text: '删除', key: 'delete' }
]

const homeActions: Action[] = [
  { text: '发起聊天', key: 'chat' },
  { text: '隐藏', key: 'hide' },
  { text: '举报', key: 'report' }
]

const Post: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [data, setData] = useState(
    mockData.map((item) => ({ ...item, visible: false, showPost: true }))
  )
  const handelClick = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, visible: true } : item
      )
    )
  }
  const onClose = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, visible: false } : item
      )
    )
  }

  const onAction = ({ key, text }: Action, id: number) => {
    if (key === 'hide') {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, showPost: false } : item
        )
      )
      onClose(id)
    }

    console.log(key, text)
  }

  return (
    <>
      {data.map((item) => {
        return (
          <div
            className="post"
            key={item.id}
            style={item.showPost ? { display: 'block' } : { display: 'none' }}
          >
            <div className="top-info">
              <img src={item.avatar} alt="" />
              <div className="info">
                <h3>{item.name}</h3>
                <span>{item.date}</span>
              </div>
              <div className="rigth-icon" onClick={() => handelClick(item.id)}>
                <MoreOutline fontSize={28} />
              </div>
              <ActionSheet
                extra="请选择你要进行的操作"
                cancelText="取消"
                visible={item.visible}
                actions={location.pathname === '/home' ? homeActions : actions}
                onClose={() => onClose(item.id)}
                onAction={(value) => onAction(value, item.id)}
              />
            </div>
            <div
              className="detail"
              onClick={() => navigate(`/postDetail?id=${item.id}`)}
            >
              {item.text && <div className="text">{item.text}</div>}
              <div className="images">
                {item.images.length > 0 &&
                  item.images.map((img) => {
                    let imgClassName = 'img1'
                    if (item.images.length === 1) {
                      imgClassName = 'img1'
                    } else if (item.images.length === 2) {
                      imgClassName = 'img2'
                    } else {
                      imgClassName = 'img3'
                    }

                    return (
                      <img
                        key={img.id}
                        src={img.url}
                        className={imgClassName}
                      />
                    )
                  })}
              </div>
            </div>
            <div className="bottom-info">
              <div className="info">
                <span>
                  <EyeOutline style={{ marginRight: 5, fontSize: 15 }} />
                  {item.views}
                </span>
                <span>
                  <HeartOutline style={{ fontSize: 18 }} />
                  &nbsp;{item.like}
                  <StarOutline style={{ fontSize: 18, marginLeft: 15 }} />
                  &nbsp;{item.star}
                  <MessageOutline style={{ fontSize: 18, marginLeft: 15 }} />
                  &nbsp;{item.commits}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Post
