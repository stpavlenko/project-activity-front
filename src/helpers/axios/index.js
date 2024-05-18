import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://tradebitalx.com/api'
})

export default instance
