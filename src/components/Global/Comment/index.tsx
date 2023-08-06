// import { userStore } from '@/store/userStore'
import { useEffect, useRef } from 'react'
import Valine from 'valine'

const ValineComponent = ({ id }: any) => {
  // const { user } = userStore()
  // const { username, email, avatar } = user

  const valineInstanceRef = useRef(null)

  useEffect(() => {
    if (!valineInstanceRef.current) {
      valineInstanceRef.current = new Valine({
        el: '#vcomments',
        appId: 'wSyGYNTld3nTpBbJdsJIaA9K-gzGzoHsz',
        appKey: 'rePLcTqQ7sbE3UPTXdh93nhc',
        path: `comment-${id}`, // 设置路径来区分不同 ID 对应的评论区
        placeholder: '输入评论',
        avatar: 'wavatar'
      })
    }
    // console.log(valineInstanceRef.current)
  }, [])

  return <div id="vcomments" />
}

export default ValineComponent
