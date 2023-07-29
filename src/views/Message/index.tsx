import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import TabBar from '@/components/Global/TabBar'
import '@/styles/message.less'
import { NavBar, Popover, Toast } from 'antd-mobile'
import {
  AddCircleOutline,
  SearchOutline,
  RightOutline,
  FileWrongOutline,
  MessageOutline
} from 'antd-mobile-icons'
import { Action } from 'antd-mobile/es/components/popover'

const actions: Action[] = [
  { key: 'chat', icon: <MessageOutline />, text: '创建群聊' },
  { key: 'clear', icon: <FileWrongOutline />, text: '清空列表' }
]

// 顶部头像滚动栏
const AvatarGroup: FC = () => {
  return (
    <div className="avatar-group">
      <img
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
      />
      <img
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
      />
      <img
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
      />
      <img
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
      />
      <img
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
      />
      <img
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
        alt=""
      />
    </div>
  )
}

// 聊天列表
const ChatList: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="chat-list">
      <div className="chat-list-item" onClick={() => navigate('/chat')}>
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
      <div className="chat-list-item">
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
      <div className="chat-list-item">
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
      <div className="chat-list-item">
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
      <div className="chat-list-item">
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
      <div className="chat-list-item">
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
      <div className="chat-list-item">
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
      <div className="chat-list-item">
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
      <div className="chat-list-item">
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

      <div className="chat-list-item">
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
      <div className="chat-list-item">
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
      <div className="chat-list-item">
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

// navbar
const Nav: FC = () => {
  return (
    <>
      <NavBar
        backArrow={
          <Popover.Menu
            actions={actions}
            placement="bottom-start"
            onAction={(node) => Toast.show(`选择了 ${node.text}`)}
            trigger="click"
          >
            <AddCircleOutline fontSize={18} style={{ marginLeft: 10 }} />
          </Popover.Menu>
        }
        right={<SearchOutline fontSize={18} style={{ marginRight: 30 }} />}
        style={{
          backgroundColor: '#e1c0ff',
          position: 'fixed',
          width: '100%',
          height: '50px',
          top: '0px'
        }}
      ></NavBar>
    </>
  )
}

const Message: FC = () => {
  return (
    <div className="message">
      {/* nabbar */}
      <Nav></Nav>

      {/* 头像滚动栏 */}
      <AvatarGroup></AvatarGroup>

      {/* 聊天列表 */}
      <ChatList></ChatList>

      {/* 没有更多了 */}
      <div className="nomore">没有更多了</div>

      {/* TabBar */}
      <TabBar></TabBar>
    </div>
  )
}

export default Message
