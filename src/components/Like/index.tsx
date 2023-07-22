import { FC } from 'react'
import Post from '../Global/Post'

const Like: FC = () => {
  return (
    <div className="like">
      <Post></Post>

      <div style={{ textAlign: 'center', marginTop: '25px', color: '#aaa' }}>
        没有更多了...
      </div>
    </div>
  )
}

export default Like
