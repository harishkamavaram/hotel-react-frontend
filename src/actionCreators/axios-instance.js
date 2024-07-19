import axios from "axios";

export default axios.create({
    withCredentials: true,
    baseURL: 'http://192.168.1.5:3001'
  })
