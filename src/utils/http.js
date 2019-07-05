import axios from 'axios';

const http = axios.create();
// http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://m.toutiao.com/' : 'https://m.toutiao.com/';

http.interceptors.response.use(response => {
  let res = response.data;
  if (res.code === 0) {
    return res;
  } else {
    console.log(res.msg);
    return Promise.reject();
  }
});

export default http;