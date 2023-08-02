// 与 token 相关

export const setToken = (token: string) => {
  localStorage.setItem('SOIAL_TOKEN', token)
}

export const getToken = () => {
  return localStorage.getItem('SOIAL_TOKEN')
}

export const removeToken = () => {
  localStorage.removeItem('SOIAL_TOKEN')
}
