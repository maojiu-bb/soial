import { InputRef, NavBar, SearchBar, Toast } from 'antd-mobile'
import { LeftOutline, RightOutline } from 'antd-mobile-icons'
import { FC, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/friends.less'

// 聊天列表
const FriendList: FC = () => {
  return (
    <div className="friend-list">
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>

      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
      <div className="friend-list-item">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
          alt=""
        />
        <div className="info">
          <h3>猫九</h3>
          <p>内容neirong</p>
        </div>
        <div className="right-icon">
          <RightOutline fontSize={16} style={{ marginTop: 15 }} />
        </div>
      </div>
    </div>
  )
}

const Friends: FC = () => {
  const navigate = useNavigate()
  const searchRef = useRef<InputRef>(null)

  useEffect(() => {
    searchRef.current?.focus()
  }, [])

  return (
    <div className="friends">
      {/* navbar */}
      <NavBar
        backArrow={<LeftOutline fontSize={18} />}
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
        <span style={{ fontSize: 16 }}>我的朋友</span>
      </NavBar>

      {/* searchbar */}
      <SearchBar
        ref={searchRef}
        placeholder="请输入内容"
        showCancelButton
        style={{
          '--border-radius': '100px',
          '--background': '#f5f5f5',
          '--height': '34px',
          '--padding-left': '12px',
          width: '88%',
          margin: '0 auto',
          padding: '8px 0',
          paddingTop: 60
        }}
        onSearch={(val: string) => {
          Toast.show(`你搜索了：${val}`)
        }}
        onFocus={() => {
          console.log('获得焦点')
        }}
        onBlur={() => {
          console.log('失去焦点')
        }}
        onCancel={() => {
          console.log('取消搜索')
        }}
      />
      {/* friend list */}
      <div className="friend-list">
        <FriendList></FriendList>
        {/* 没有更多了 */}
        <div className="nomore">没有更多了</div>
      </div>
    </div>
  )
}

export default Friends
