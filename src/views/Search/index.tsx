import { FC, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import TabBar from '@/components/Global/TabBar'
import { SearchBar, SearchBarRef, Toast } from 'antd-mobile'
import { CloseCircleOutline, DeleteOutline, FireFill } from 'antd-mobile-icons'
import '@/styles/search.less'
import { historyStore } from '@/store/historyStore'
import { userStore } from '@/store/userStore'
import { postStore } from '@/store/postStore'

// 搜索框
const SearchArea: FC = () => {
  const searchRef = useRef<SearchBarRef>(null)

  const { addHistory, getHistory } = historyStore()
  const { user } = userStore()

  const navigate = useNavigate()

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
          addHistory({ userid: user.userid, keyword: val })
            .then(() => {
              getHistory(user.userid)
              navigate('/searchResult', { state: { keyword: val } })
            })
            .catch(() =>
              Toast.show({
                icon: 'fail',
                content: '操作失败！'
              })
            )
        }}
      />
    </div>
  )
}

// 搜索历史
const SearchHistory: FC = () => {
  const navigate = useNavigate()

  const { user } = userStore()
  const { deleteHistory, clearHistory, searchHistory, getHistory } =
    historyStore()

  const deleteOne = (id: string | number) => {
    deleteHistory({ userid: user.userid, historyid: id })
      .then(() => {
        getHistory(user.userid)
      })
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '删除失败！'
        })
      )
  }
  const deleteAll = () => {
    clearHistory(user.userid)
      .then(() => {
        getHistory(user.userid)
      })
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '清空失败！'
        })
      )
  }
  const clickHistory = (keyword: string) => {
    navigate('/searchResult', { state: { keyword } })
  }

  return searchHistory.length > 0 ? (
    <div>
      <h3 className="title">
        清空历史
        <DeleteOutline onClick={deleteAll} />
      </h3>
      <div className="search-history">
        {searchHistory.map((item: any) => {
          return (
            <div className="search-history-item" key={item.historyid}>
              <span onClick={() => clickHistory(item.keyword)}>
                {item.keyword}
              </span>
              <CloseCircleOutline
                style={{ marginTop: 10, marginLeft: 5 }}
                onClick={() => deleteOne(item.historyid)}
              />
            </div>
          )
        })}
      </div>
    </div>
  ) : (
    <div className="title">暂无搜索历史</div>
  )
}

const Search: FC = () => {
  const { getHistory } = historyStore()
  const { getHotSearch, hotList } = postStore()
  const { user } = userStore()

  const navigate = useNavigate()

  const goHotDetail = (keyword: string) => {
    navigate('/searchResult', { state: { keyword } })
  }

  useEffect(() => {
    getHistory(user.userid)
      .then(() => {})
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '获取数据失败！'
        })
      )
    getHotSearch()
      .then(() => {})
      .catch(() =>
        Toast.show({
          icon: 'fail',
          content: '获取数据失败！'
        })
      )
  }, [])

  return (
    <div className="search">
      {/* 顶部搜索框 */}
      <SearchArea></SearchArea>

      {/* 搜索历史 */}
      <SearchHistory></SearchHistory>

      {/* 热门推荐 */}
      {hotList.length > 0 ? (
        <div className="search-hot">
          <h3 className="title">
            热门搜索
            <FireFill color="red" />
          </h3>
          {hotList.map((item: any, index: number) => {
            return (
              <div
                className="search-hot-item"
                key={item.postid}
                onClick={() => goHotDetail(item.content)}
              >
                <span className="rank">{index + 1}</span>
                <span className="info">{item.content}</span>
              </div>
            )
          })}
        </div>
      ) : (
        <div>暂无热门搜索</div>
      )}

      {/* TabBar */}
      <TabBar></TabBar>
    </div>
  )
}

export default Search
