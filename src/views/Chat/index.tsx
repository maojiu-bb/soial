import { NavBar } from 'antd-mobile'
import { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MoreOutline } from 'antd-mobile-icons'
import '@/styles/chat.less'

// 聊天项

const ChatItem = ({ message, isMe }: any) => {
  const avatar = isMe
    ? 'https://tse3-mm.cn.bing.net/th/id/OIP-C.BxBNXt0A-U6q099vh6X4AAAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7'
    : 'https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7'

  return (
    <div className={`chat-item ${isMe ? 'me' : 'other'}`}>
      <img className="avatar" src={avatar} alt="头像" />
      <div className="message">{message}</div>
    </div>
  )
}

const ChatList = () => {
  // 假设使用一个数组来存储聊天消息
  const messages = [
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true },
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true },
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true },
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true },
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true },
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true },
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true },
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true },
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true },
    { content: '你好', isMe: false },
    { content: '你好，有什么可以帮助你的吗？', isMe: true }
    // 其他聊天消息...
  ]

  return (
    <div className="chat-list">
      {messages.map((message, index) => (
        <ChatItem key={index} message={message.content} isMe={message.isMe} />
      ))}
    </div>
  )
}

// 输入框
const ChatInput = () => {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 在这里处理发送消息的逻辑
    console.log(inputValue)
    setInputValue('') // 清空输入框的值
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus() // 焦点聚焦到输入框
    }
  }, [])

  return (
    <div className="chat-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit">发送</button>
      </form>
    </div>
  )
}

const Chat: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="chat">
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
        right={
          <MoreOutline
            fontSize={28}
            style={{ marginRight: 30 }}
            onClick={() => navigate('/chatOption')}
          />
        }
      >
        猫九
      </NavBar>

      {/* main */}
      <div className="main">
        {/* 聊天项 */}
        <ChatList></ChatList>

        {/* 输入框 */}
        <ChatInput></ChatInput>
      </div>
    </div>
  )
}

export default Chat
