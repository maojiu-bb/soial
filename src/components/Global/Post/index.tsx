import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  MoreOutline,
  EyeOutline,
  HeartOutline,
  MessageOutline,
  StarOutline
} from 'antd-mobile-icons'
import '@/styles/post.less'
import { ActionSheet, Toast } from 'antd-mobile'
import type { Action } from 'antd-mobile/es/components/action-sheet'
import { PostProps } from '@/types/post'
import { postStore } from '@/store/postStore'

const actions: Action[] = [
  { text: '修改', key: 'edit' },
  { text: '删除', key: 'delete' }
]

const homeActions: Action[] = [
  { text: '发起聊天', key: 'chat' },
  { text: '隐藏', key: 'hide' },
  { text: '举报', key: 'report' }
]

const Post = (props: PostProps) => {
  const { postList, userid, hide, report } = props
  const { deletePost } = postStore()

  const location = useLocation()
  const navigate = useNavigate()

  const [data, setData] = useState<any[]>([])
  const handelClick = (id: number | string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.postid === id ? { ...item, visible: true } : item
      )
    )
  }
  const onClose = (id: number | string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.postid === id ? { ...item, visible: false } : item
      )
    )
  }

  const onAction = ({ key, text }: Action, id: number | string) => {
    if (key === 'hide') {
      setData((prevData) =>
        prevData.map((item) =>
          item.postid === id ? { ...item, show: false } : item
        )
      )
      hide({ postid: id, userid })
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '操作成功！'
          })
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '操作失败！'
          })
        )
      onClose(id)
    }
    if (key === 'report') {
      report({ postid: id })
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '操作成功！'
          })
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '操作失败！'
          })
        )
      onClose(id)
    }
    if (key === 'delete') {
      setData((prevData) =>
        prevData.map((item) =>
          item.postid === id ? { ...item, show: false } : item
        )
      )
      deletePost(id)
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '操作成功！'
          })
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '操作失败！'
          })
        )
      onClose(id)
    }
    console.log(key, text)
  }

  useEffect(() => {
    setData(postList.map((item) => ({ ...item, visible: false, show: true })))
  }, [postList])

  return (
    <>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div
              className="post"
              key={item.postid}
              style={item.show ? { display: 'block' } : { display: 'none' }}
            >
              <div className="top-info">
                <img src={item.avatar} alt="" />
                <div className="info">
                  <h3>{item.username}</h3>
                  <span>{item.date}</span>
                </div>
                <div
                  className="rigth-icon"
                  onClick={() => handelClick(item.postid)}
                >
                  <MoreOutline fontSize={28} />
                </div>
                <ActionSheet
                  extra="请选择你要进行的操作"
                  cancelText="取消"
                  visible={item.visible}
                  actions={
                    location.pathname === '/home' ||
                    location.pathname === '/searchResult'
                      ? homeActions
                      : actions
                  }
                  onClose={() => onClose(item.postid)}
                  onAction={(value) => onAction(value, item.postid)}
                />
              </div>
              <div
                className="detail"
                onClick={() => navigate(`/postDetail?postid=${item.postid}`)}
              >
                {item.content && <div className="text">{item.content}</div>}
                <div className="images">
                  {item.images.length > 0 &&
                    item.images.map((img: any) => {
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
                          key={img.imgid}
                          src={img.imgUrl}
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
                    {item.view}
                  </span>
                  <span>
                    <HeartOutline style={{ fontSize: 18 }} />
                    &nbsp;{item.like}
                    <StarOutline style={{ fontSize: 18, marginLeft: 15 }} />
                    &nbsp;{item.star}
                    <MessageOutline style={{ fontSize: 18, marginLeft: 15 }} />
                    &nbsp;{item.comment}
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
