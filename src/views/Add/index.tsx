import { FC, useState } from 'react'
import TabBar from '@/components/Global/TabBar'
import '@/styles/add.less'
import {
  ImageUploadItem,
  ImageUploader,
  NavBar,
  TextArea,
  Toast
} from 'antd-mobile'

// 限制上传大小
const LimitSize: FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([])

  function beforeUpload(file: File) {
    if (file.size > 1024 * 1024) {
      Toast.show('请选择小于 1M 的图片')
      return null
    }
    return file
  }

  return (
    <ImageUploader
      // columns={3}
      style={{ '--cell-size': '108px', marginTop: 30 }}
      value={fileList}
      onChange={setFileList}
      upload={''}
      beforeUpload={beforeUpload}
    />
  )
}

const Add: FC = () => {
  return (
    <div className="add">
      <NavBar
        backArrow={''}
        style={{
          backgroundColor: '#e1c0ff',
          position: 'fixed',
          width: '100%',
          height: '50px',
          top: '0px',
          color: '#fff'
        }}
      >
        Add
      </NavBar>

      {/* 主要区域 */}
      <div className="main">
        {/* 文本域 */}
        <TextArea placeholder="请输入内容" autoSize={{ minRows: 3 }} />
        {/* 图片上传 */}
        <LimitSize></LimitSize>

        {/* 按钮区域 */}
        <div className="button-group">
          <button>立刻发表</button>
          <button>清空内容</button>
        </div>
      </div>

      {/* TabBar */}
      <TabBar></TabBar>
    </div>
  )
}

export default Add
