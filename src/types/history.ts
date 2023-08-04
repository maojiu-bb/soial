import { AxiosResponse } from 'axios'

export type Taddhistory = {
  userid: string | number
  keyword: string
}

export type Tgethistory = string | number

export type TdeleteHistory = {
  userid: string | number
  historyid: string | number
}

export type TclearHistory = string | number

export type History = {
  userid: string | number
  historyid: string | number
  keyword: string
  createTime: string
}

export type HistoryStore = {
  searchHistory: History[]
  addHistory: (data: Taddhistory) => Promise<AxiosResponse<any, any>>
  getHistory: (query: Tgethistory) => Promise<AxiosResponse<any, any>>
  deleteHistory: (query: TdeleteHistory) => Promise<AxiosResponse<any, any>>
  clearHistory: (query: TclearHistory) => Promise<AxiosResponse<any, any>>
}
