import Post from '@/components/Global/Post'
import { postStore } from '@/store/postStore'
import { userStore } from '@/store/userStore'
import { NavBar, Toast } from 'antd-mobile'
import { FC, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const SearchResult: FC = () => {
  const navigate = useNavigate()
  const {
    state: { keyword }
  } = useLocation()

  const { search, searchList, hide, report } = postStore()
  const { user } = userStore()

  useEffect(() => {
    search(keyword)
      .then(() => {})
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '发生错误！'
        })
      )
  }, [])

  return (
    <div className="search-result">
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
        搜索结果
      </NavBar>

      {/* post */}
      <div className="main" style={{ padding: 10, paddingTop: 70 }}>
        <Post
          postList={searchList}
          hide={hide}
          report={report}
          userid={user.userid}
        ></Post>

        <div
          style={{
            textAlign: 'center',
            marginTop: 30,
            marginBottom: 30,
            color: '#888'
          }}
        >
          没有更多了
        </div>
      </div>
    </div>
  )
}

export default SearchResult
