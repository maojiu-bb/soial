import { FC } from 'react'
import Post from '../Global/Post'

const My: FC = () => {
  return (
    <div className="my">
      <Post></Post>
      <div style={{ textAlign: 'center', marginTop: '25px', color: '#aaa' }}>
        没有更多了...
      </div>
    </div>
  )
}

export default My
