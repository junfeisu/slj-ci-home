import axios from 'axios'

const fetch = ({url, method = 'GET', data = {}, params = {}, headers = {}}) => {
  let userId = window.localStorage.getItem('userId')

  if (userId) {
    headers['man-cookie'] = 'userId=' + userId
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
