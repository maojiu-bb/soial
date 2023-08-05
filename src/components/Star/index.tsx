import { FC, useEffect } from 'react'
import Post from '../Global/Post'
import { postStore } from '@/store/postStore'
import { userStore } from '@/store/userStore'
import { Toast } from 'antd-mobile'

const Star: FC = () => {
  const { starList, hide, report, getStarList } = postStore()
  const { user } = userStore()

  useEffect(() => {
    getStarList(user.userid)
      .then(() => {})
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '获取数据失败！'
        })
      )
  }, [])

  return (
    <div className="star">
      <Post
        postList={starList}
        hide={hide}
        report={report}
        userid={user.userid}
      ></Post>

      <div style={{ textAlign: 'center', marginTop: '25px', color: '#aaa' }}>
        没有更多了...
      </div>
    </div>
  )
}

export default Star
