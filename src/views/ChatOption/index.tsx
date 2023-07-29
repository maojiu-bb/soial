import { Dialog, Input, InputRef, NavBar, Switch, Toast } from 'antd-mobile'
import { FC, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { RightOutline, ChatAddOutline } from 'antd-mobile-icons'
import '@/styles/chatOption.less'

const ChatOption: FC = () => {
  const navigate = useNavigate()
  const inputRef = useRef<InputRef>(null)

  const deleteRecord = () =>
    Dialog.confirm({
      content: '是否确认删除聊天内容?',
      onConfirm: () => {
        Toast.show({
          icon: 'fail',
          content: '删除失败',
          position: 'center'
        })
      }
    })
  const deleteChat = () =>
    Dialog.confirm({
      content: '是否确认删除聊天?',
      onConfirm: () => {
        Toast.show({
          icon: 'fail',
          content: '删除失败',
          position: 'center'
        })
      }
    })
  const startChatGroup = () => {
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

  return (
    <div className="chat-option">
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
        聊天设置
      </NavBar>

      {/* main */}
      <div className="main">
        {/* top */}
        <div className="top">
          <div className="top-info">
            <img
              src="https://tse1-mm.cn.bing.net/th/id/OIP-C.3wZInd0etWt1rCYy7aT9mQAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt=""
            />
            <h3>猫九</h3>
            <RightOutline
              fontSize={15}
              style={{ marginTop: 25, marginLeft: 10 }}
            />
          </div>
          <div className="top-chat" onClick={startChatGroup}>
            <ChatAddOutline
              fontSize={40}
              style={{
                marginLeft: 15,
                marginTop: 10,
                marginBottom: 10,
                width: 45
              }}
            />
            <h3>发起群聊</h3>
            <RightOutline
              fontSize={15}
              style={{ marginTop: 25, marginLeft: 10 }}
            />
          </div>
        </div>
        {/* body */}
        <div className="body">
          <div className="body-item">
            <div className="text">置顶聊天</div>
            <Switch
              defaultChecked
              style={{
                '--checked-color': '#e1c0ff',
                '--height': '20px',
                '--width': '40px'
              }}
            />
          </div>
          <div className="body-item">
            <div className="text">隐藏会话</div>
            <Switch
              defaultChecked
              style={{
                '--checked-color': '#e1c0ff',
                '--height': '20px',
                '--width': '40px'
              }}
            />
          </div>
        </div>
        <div className="record">
          <div className="record-item" onClick={deleteRecord}>
            删除聊天内容
          </div>
        </div>
        {/* bottom */}
        <div className="bottom">
          <div className="bottom-item" onClick={deleteChat}>
            删除聊天
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatOption
