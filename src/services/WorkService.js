import { postRequest } from '../util/ajax'
import { message } from 'antd'
import { history } from '../util/history'
import { apiUrl } from '../constant'

export const getWorks = (json, callback) => {
  const url = `${apiUrl}/getWorks`
  postRequest(url, json, callback)
}

export const getAwork = (json, callback) => {
  const url = `${apiUrl}/getWorks`
  postRequest(url, json, callback)
}

export const getMypost = (json, callback) => {
  const url = `${apiUrl}/getPostedWorks`
  postRequest(url, json, callback)
}

export const getWorkDetail = (json, callback) => {
  const url = `${apiUrl}/getWorkDetail`
  postRequest(url, json, callback)
}

export const PostWork = (json, callback) => {
  const url = `${apiUrl}/postWork`
  postRequest(url, json, callback)
}

export const ApplyWork = (json, callback) => {
  const url = `${apiUrl}/Apply`
  postRequest(url, json, callback)
}
