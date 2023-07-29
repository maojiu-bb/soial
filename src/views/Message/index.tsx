import { FC, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import TabBar from '@/components/Global/TabBar'
import '@/styles/message.less'
import { Dialog, Input, InputRef, NavBar, Popover, Toast } from 'antd-mobile'
import {
  AddCircleOutline,
  SearchOutline,
  RightOutline,
  FileWrongOutline,
  MessageOutline,
  TeamOutline
} from 'antd-mobile-icons'
import { Action } from 'antd-mobile/es/components/popover'

const actions: Action[] = [
  { key: 'friends', icon: <TeamOutline />, text: '我的朋友' },
  { key: 'chat-group', icon: <MessageOutline />, text: '我的群聊' },
  { key: 'create-group', icon: <MessageOutline />, text: '创建群聊' },
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
  const inputRef = useRef<InputRef>(null)
  const navigate = useNavigate()

  const handleAction = (node: Action) => {
    if (node.key === 'create-group') {
      Dialog.alert({
        title: '群聊名称',
        content: (
          <div style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Input placeholder="请输入名称" clearable ref={inputRef} />
          </div>
        ),
        confirmText: '确定',
        onConfirm: () => {
          const groupName = inputRef.current?.nativeElement?.value
          console.log(groupName)
        }
      })
    }
    if (node.key === 'friends') {
      navigate('/friends')
    }
    if (node.key === 'chat-group') {
      navigate('/chatGroup')
    }
    if (node.key === 'clear') {
      Dialog.confirm({
        content: '是否确认清空?',
        onConfirm: () => {
          Toast.show({
            icon: 'fail',
            content: '清空失败',
            position: 'center'
          })
        }
      })
    }
  }

  return (
    <>
      <NavBar
        backArrow={
          <Popover.Menu
            actions={actions}
            placement="bottom-start"
            onAction={(node) => handleAction(node)}
            trigger="click"
          >
            <AddCircleOutline fontSize={18} style={{ marginLeft: 10 }} />
          </Popover.Menu>
        }
        right={
          <SearchOutline
            fontSize={18}
            style={{ marginRight: 30 }}
            onClick={() => navigate('/friends')}
          />
        }
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
