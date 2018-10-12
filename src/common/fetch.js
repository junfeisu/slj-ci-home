import axios from 'axios'

let token = window.localStorage.getItem('token')

export function updateToken (newToken) {
  if (newToken && newToken !== token) {
    token = newToken
    window.localStorage.setItem('token', newToken)
  }
}

const fetch = ({url, method = 'GET', data = {}, params = {}, headers = {}}) => {
  let userId = window.localStorage.getItem('userId')

  if (userId) {
    headers['man-cookie'] = 'userId=' + userId
    headers['Authorization'] = token
  }
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.request({
        url,
        method,
        data,
        params,
        headers
      })

      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

export default fetch
