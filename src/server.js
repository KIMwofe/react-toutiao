import axios from 'axios'
import qs from 'qs';
let http = {
  get: ""
}

http.get = function (api, data) {
  let params = qs.stringify(data);
  return new Promise((resolve, project) => {
    axios.get(api, params).then((res) => {
      resolve(res)
    })
  })
}

export default http;