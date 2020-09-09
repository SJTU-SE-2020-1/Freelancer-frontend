import { postRequest } from '../util/ajax'
import { message } from 'antd'
import { history } from '../util/history'
import { apiUrl } from '../constant'

export const login = (data) => {
  const url = `${apiUrl}/login`
  // debugger
  const callback = (data) => {
    // debugger
    if (data.status >= 0 && data.status != 500) {
      console.log('will: callback -> data.data', data.data)
      let user = data.data
      localStorage.setItem('user', JSON.stringify(user))

      history.push('/')
      window.location = '/'
      message.success(data.msg)
    } else {
      if (data.msg) {
        message.error(data.msg)
      } else {
        message.error('网络连接出现问题了')
      }
    }
  }
  postRequest(url, data, callback)
}

export const getuserInfo = (json, callback) => {
  // debugger
  console.log('will: getuserInfo -> json', json)
  const url = `${apiUrl}/getUserInfo`
  postRequest(url, json, callback)
}

export const logout = () => {
  const url = `${apiUrl}/logout`

  const callback = (data) => {
    if (data.status == 0) {
      localStorage.removeItem('user')
      history.push('/unlogin')
      window.location = '/unlogin'
      message.success(data.msg)
    } else {
      message.error(data.msg)
    }
  }
  postRequest(url, {}, callback)
}

export const checkSession = (callback) => {
  const url = `${apiUrl}/checkSession`
  postRequest(url, {}, callback)
}

export const register = (data) => {
  const url = `${apiUrl}/register`
  // debugger
  const callback = (data) => {
    debugger
    if (data.status) {
      message.error('注册失败，账号已存在或网络异常！')
    } else {
      history.push('/login')
      window.location = '/login'
      message.success('注册成功')
    }
  }
  postRequest(url, data, callback)
}

export const upLoadAvatar = (data) => {
  const url = `${apiUrl}/uploadAvatar`

  const callback = (flag) => {
    if (flag) {
      message.success('上传成功！')
      let u = localStorage.getItem('user')
      let user = JSON.parse(u)
      user.avatar = data.avatar
      debugger
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      message.error('上传失败！')
    }
  }
  postRequest(url, data, callback)
}
export const upLoadInfo = (data) => {
  const url = `${apiUrl}/changeInfo`

  const callback = (info) => {
    if (info != null) {
      message.success('编辑成功！')
      let u = localStorage.getItem('user')
      let user = JSON.parse(u)
      user.name = data.name
      user.phone = data.phone
      user.e_mail = data.e_mail
      debugger
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      message.error('上传失败！')
    }
  }
  postRequest(url, data, callback)
}
export const getUsers = (page, callback) => {
  const url = `${apiUrl}/getUsers`
  postRequest(url, page, callback)
}
export const changeType = (json, callback) => {
  const url = `${apiUrl}/changeUserType`
  postRequest(url, json, callback)
}

export const changeStatus = (json, callback) => {
  const url = `${apiUrl}/changeUserStatus`
  postRequest(url, json, callback)
}

export const changeInfo = (json, callback) => {
  const url = `${apiUrl}/changeInfo`
  postRequest(url, json, callback)
}

export const getPostman = (json, callback) => {
  const url = `${apiUrl}/getPostman`
  postRequest(url, json, callback)
}
