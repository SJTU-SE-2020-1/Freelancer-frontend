import { postRequest } from '../util/ajax'
import { message } from 'antd'
import { history } from '../util/history'
import { apiUrl } from '../constant'

export const getSkillbyCategory = (json, callback) => {
  const url = `${apiUrl}/getSkillsByCategory`
  postRequest(url, json, callback)
}
