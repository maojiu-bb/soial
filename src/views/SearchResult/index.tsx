import Post from '@/components/Global/Post'
import { NavBar } from 'antd-mobile'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchResult: FC = () => {
  const navigate = useNavigate()

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
        <Post></Post>

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
