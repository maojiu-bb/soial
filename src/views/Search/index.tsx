import { FC, useRef } from 'react'
import TabBar from '@/components/Global/TabBar'
import { SearchBar, SearchBarRef, Toast } from 'antd-mobile'
import { CloseCircleOutline, DeleteOutline, FireFill } from 'antd-mobile-icons'
import '@/styles/search.less'

// 搜索框
const SearchArea: FC = () => {
  const searchRef = useRef<SearchBarRef>(null)

  return (
    <div className="search-area">
      <SearchBar
        ref={searchRef}
        placeholder="请输入内容"
        showCancelButton
        style={{
          '--border-radius': '100px',
          '--background': '#ffffff',
          '--height': '34px',
          '--padding-left': '12px',
          width: '88%',
          margin: '0 auto',
          padding: '8px 0'
        }}
        onSearch={(val) => {
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
    </div>
  )
}

// 搜索历史
const SearchHistory: FC = () => {
  return (
    <>
      <h3 className="title">
        清空历史
        <DeleteOutline />
      </h3>
      <div className="search-history">
        <div className="search-history-item">
          <span>文字文字文字文字文字文字</span>
          <CloseCircleOutline style={{ marginTop: 10, marginLeft: 5 }} />
        </div>
        <div className="search-history-item">
          <span>文字文字文字文字文字文字</span>
          <CloseCircleOutline style={{ marginTop: 10, marginLeft: 5 }} />
        </div>
        <div className="search-history-item">
          <span>文字文字文字文</span>
          <CloseCircleOutline style={{ marginTop: 10, marginLeft: 5 }} />
        </div>
        <div className="search-history-item">
          <span>文字文字文文字文字</span>
          <CloseCircleOutline style={{ marginTop: 10, marginLeft: 5 }} />
        </div>
        <div className="search-history-item">
          <span>文字文</span>
          <CloseCircleOutline style={{ marginTop: 10, marginLeft: 5 }} />
        </div>
        <div className="search-history-item">
          <span>文字文字</span>
          <CloseCircleOutline style={{ marginTop: 10, marginLeft: 5 }} />
        </div>
      </div>
    </>
  )
}

const Search: FC = () => {
  return (
    <div className="search">
      {/* 顶部搜索框 */}
      <SearchArea></SearchArea>

      {/* 搜索历史 */}
      <SearchHistory></SearchHistory>

      {/* 热门推荐 */}
      <div className="search-hot">
        <h3 className="title">
          热门搜索
          <FireFill color="red" />
        </h3>
        <div className="search-hot-item">
          <span className="rank">1</span>
          <span className="info">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </span>
        </div>
        <div className="search-hot-item">
          <span className="rank">1</span>
          <span className="info">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </span>
        </div>
        <div className="search-hot-item">
          <span className="rank">1</span>
          <span className="info">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </span>
        </div>
        <div className="search-hot-item">
          <span className="rank">1</span>
          <span className="info">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </span>
        </div>
        <div className="search-hot-item">
          <span className="rank">1</span>
          <span className="info">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </span>
        </div>
        <div className="search-hot-item">
          <span className="rank">1</span>
          <span className="info">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </span>
        </div>
        <div className="search-hot-item">
          <span className="rank">1</span>
          <span className="info">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </span>
        </div>
        <div className="search-hot-item">
          <span className="rank">1</span>
          <span className="info">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </span>
        </div>
        <div className="search-hot-item">
          <span className="rank">1</span>
          <span className="info">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </span>
        </div>
      </div>

      {/* TabBar */}
      <TabBar></TabBar>
    </div>
  )
}

export default Search
