import { FC, useEffect } from 'react'
import Post from '../Global/Post'
import { postStore } from '@/store/postStore'
import { userStore } from '@/store/userStore'
import { Toast } from 'antd-mobile'

const My: FC = () => {
  const { ownList, hide, report, getOwnList } = postStore()
  const { user } = userStore()

  useEffect(() => {
    getOwnList(user.userid)
      .then(() => {})
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '获取数据失败！'
        })
      )
  }, [])

  return (
    <div className="my">
      <Post
        postList={ownList}
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

export default My
