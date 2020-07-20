import { postRequest } from '../util/ajax'
import { message } from 'antd'
import { history } from '../util/history'
import { apiUrl } from '../constant'

export const getWorks = (json, callback) => {
  const url = `${apiUrl}/getWorks`
  postRequest(url, json, callback)
}
