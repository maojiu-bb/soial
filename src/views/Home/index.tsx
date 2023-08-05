import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TabBar from '@/components/Global/TabBar'
import {
  Dialog,
  InfiniteScroll,
  NavBar,
  Popup,
  PullToRefresh,
  Switch,
  Toast
} from 'antd-mobile'
import {
  UnorderedListOutline,
  ClockCircleOutline,
  RightOutline,
  SetOutline,
  SendOutline
} from 'antd-mobile-icons'
import Post from '@/components/Global/Post'
import { homeStyle } from '@/styles/home'
import { userStore } from '@/store/userStore'
import { postStore } from '@/store/postStore'

type Popup = {
  visible: boolean
  setVisible: (flag: boolean) => void
}

const PopupLeft = ({ visible, setVisible }: Popup) => {
  const logout = userStore((state) => state.logout)
  const user = userStore((state) => state.user)

  const navigate = useNavigate()

  const handleLogout = () =>
    Dialog.confirm({
      content: '是否退出登录?',
      onConfirm: () => {
        logout({ userid: user.userid })
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

  useEffect(() => {}, [user])

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setVisible(false)
      }}
      position="left"
      bodyStyle={homeStyle.popupBody}
    >
      <div>
        <img style={homeStyle.popupImage} src={user.avatar} alt="" />
        <h2 style={homeStyle.popupTitle}>{user.username}</h2>
        <div style={homeStyle.popupDesc}>{user.introduction}</div>
      </div>
      <div>
        <div style={homeStyle.popupCell}>
          <ClockCircleOutline fontSize={20} style={{ marginTop: '15px' }} />
          夜间模式
          <Switch
            defaultChecked
            style={{
              '--checked-color': '#e1c0ff',
              '--height': '20px',
              '--width': '40px'
            }}
          />
        </div>
        <div style={homeStyle.popupCell} onClick={() => navigate('/setting')}>
          <SetOutline fontSize={20} style={{ marginTop: '15px' }} />
          系统设置
          <RightOutline fontSize={16} style={{ marginTop: '16px' }} />
        </div>
        <div style={homeStyle.popupCell} onClick={handleLogout}>
          <SendOutline fontSize={20} style={{ marginTop: '15px' }} />
          退出登录
          <RightOutline fontSize={16} style={{ marginTop: '16px' }} />
        </div>
      </div>
    </Popup>
  )
}

const Home: FC = () => {
  const { user } = userStore()
  const { getPostList, hide, report } = postStore()

  const [list, setList] = useState<any[]>([])

  const [page, setPage] = useState<number>(1)

  const [visible, setVisible] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const doRefresh = async () => {
    setPage((page) => page + 1)
    try {
      const res = await getPostList({ page: page, userid: user.userid })
      setList((list) => {
        return [...res.data.list, ...list]
      })
    } catch (error) {
      Toast.show({
        icon: 'fail',
        content: '刷新失败！'
      })
    }
  }
  const loadMore = async () => {
    setPage((page) => page + 1)
    try {
      const res = await getPostList({ page: page, userid: user.userid })
      if (res.data.list.length < 10) {
        setHasMore(false)
      }
      setList((list) => {
        return [...list, ...res.data.list]
      })
    } catch (error) {
      Toast.show({
        icon: 'fail',
        content: '加载失败！'
      })
    }
  }

  useEffect(() => {
    getPostList({ page: page, userid: user.userid })
      .then((res) => {
        setList(() => {
          return [...res.data.list]
        })
      })
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '获取数据失败！'
        })
      )
  }, [])

  return (
    <div>
      {/* navbar */}
      <NavBar
        backArrow={
          <UnorderedListOutline color="#fff" onClick={() => setVisible(true)} />
        }
        style={homeStyle.nav}
      >
        Soial
      </NavBar>

      <div style={homeStyle.main}>
        {/* 下拉刷新 */}
        <PullToRefresh onRefresh={doRefresh} completeDelay={1000}>
          {/* post列表 */}
          <Post
            postList={list}
            hide={hide}
            userid={user.userid}
            report={report}
          ></Post>
        </PullToRefresh>
        {/* 加载更多 */}
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />

        {/* 左侧弹出层 */}
        <PopupLeft visible={visible} setVisible={setVisible}></PopupLeft>
      </div>

      {/* TabBar */}
      <TabBar></TabBar>
    </div>
  )
}

export default Home
