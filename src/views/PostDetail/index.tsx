import { FC, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  MoreOutline,
  EyeOutline,
  HeartOutline,
  MessageOutline,
  StarOutline
} from 'antd-mobile-icons'
import '@/styles/postDetail.less'
import { ActionSheet, ImageViewer, NavBar, Toast } from 'antd-mobile'
import type { Action } from 'antd-mobile/es/components/action-sheet'
import '@/styles/postDetail.less'
import Comment from '@/components/Global/Comment/index'
import { postStore } from '@/store/postStore'
import { userStore } from '@/store/userStore'

const PostDetail: FC = () => {
  const {
    getPostDetail,
    postDetail,
    addView,
    addLike,
    addStar,
    cancelLike,
    cancelStar,
    report
  } = postStore()
  const { user } = userStore()

  const navigate = useNavigate()
  const location = useLocation()

  const [visible, setVisible] = useState<boolean>(false)
  const [visibleViewer, setvisibleViewer] = useState<boolean>(false)

  const [isLike, setIsLike] = useState<boolean>(true)
  const [isStar, setIsStar] = useState<boolean>(true)

  const homeActions: Action[] = [
    { text: '发起聊天', key: 'chat' },
    { text: isLike ? '喜欢' : '取消喜欢', key: isLike ? 'like' : 'unlike' },
    { text: isStar ? '收藏' : '取消收藏', key: isStar ? 'star' : 'unstar' },
    { text: '举报', key: 'report' }
  ]

  const onAction = ({ key, text }: Action) => {
    console.log(key, text)
    if (key === 'like') {
      addLike({ postid: postDetail.postid, userid: user.userid })
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '添加喜欢成功！'
          })
          setVisible(false)
          setIsLike(false)
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '添加喜欢失败！'
          })
        )
    }
    if (key === 'unlike') {
      cancelLike({ postid: postDetail.postid, userid: user.userid })
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '取消成功！'
          })
          setVisible(false)
          setIsLike(true)
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '取消失败！'
          })
        )
    }
    if (key === 'star') {
      addStar({ postid: postDetail.postid, userid: user.userid })
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '添加收藏成功！'
          })
          setVisible(false)
          setIsStar(false)
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '添加收藏失败！'
          })
        )
    }
    if (key === 'unstar') {
      cancelStar({ postid: postDetail.postid, userid: user.userid })
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '取消成功！'
          })
          setVisible(false)
          setIsStar(true)
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '取消失败！'
          })
        )
    }
    if (key === 'report') {
      report({ postid: postDetail.postid })
        .then(() => {
          Toast.show({
            icon: 'success',
            content: '举报成功！'
          })
          setVisible(false)
        })
        .catch(() =>
          Toast.show({
            icon: 'fail',
            content: '举报失败！'
          })
        )
    }
  }

  const postid = location.search.split('=')[1]

  useEffect(() => {
    getPostDetail(postid)
      .then(() => {
        addView({ postid: postid })
          .then(() => {})
          .catch(() =>
            Toast.show({
              icon: 'fail',
              content: '增加失败！'
            })
          )
      })
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '获取数据失败！'
        })
      )
  }, [])

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
      {postDetail && (
        <div className="post">
          <div className="top-info">
            <img src={postDetail.avatar} alt="" />
            <div className="info">
              <h3>{postDetail.username}</h3>
              <span>{postDetail.date}</span>
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
            {postDetail.content && (
              <div className="text">{postDetail.content}</div>
            )}
            <div className="images">
              {postDetail.images.length > 0 &&
                postDetail.images.map((img) => {
                  let imgClassName = 'img1'
                  if (postDetail.images.length === 1) {
                    imgClassName = 'img1'
                  } else if (postDetail.images.length === 2) {
                    imgClassName = 'img2'
                  } else {
                    imgClassName = 'img3'
                  }
                  return (
                    <>
                      <img
                        key={img.imgid}
                        src={img.imgUrl}
                        className={imgClassName}
                      />
                      <ImageViewer
                        image={img.imgUrl}
                        visible={visibleViewer}
                        onClose={() => {
                          setvisibleViewer(false)
                        }}
                      />
                    </>
                  )
                })}
            </div>
          </div>
          <div className="bottom-info">
            <div className="info">
              <span>
                <EyeOutline style={{ marginRight: 5, fontSize: 15 }} />
                {/* {item.views} */}
                {postDetail.view}
              </span>
              <span>
                <HeartOutline style={{ fontSize: 18 }} />
                &nbsp;{postDetail.like}
                <StarOutline style={{ fontSize: 18, marginLeft: 15 }} />
                &nbsp;{postDetail.star}
                <MessageOutline style={{ fontSize: 18, marginLeft: 15 }} />
                &nbsp;{postDetail.comment}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="comment">
        <Comment id={location.search.slice(3)}></Comment>
      </div>
    </div>
  )
}

export default PostDetail
