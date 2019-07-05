// import axios from 'axios';

// const http = axios.create();
// // http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://m.toutiao.com/' : 'https://m.toutiao.com/';

// http.interceptors.response.use(response => {
//   let res = response.data;
//   if (res.code === 0) {
//     return res;
//   } else {
//     console.log(res.msg);
//     return Promise.reject();
//   }
// });

// export default http;
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