import axios from 'axios';

export default function ajax(url = '', params = {}, type = 'GET') {
  // 1.变量
  let promise;

  // 2.返回一个promise对象
  return new Promise((resolve, reject) => {
    // 2.1 判断请求类型
    if (type.toUpperCase() === 'GET') {
      // 2.2 拼接字符串
      let paramsStr = '';
      // 2.3 遍历
      Object.keys(params).forEach(key => {
        paramsStr += key + '=' + params[key] + '&';
      });
      // 2.4 过滤最后的"&"
      if (paramsStr) {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
      }
      // 2.5 拼接完整路径
      url += '?' + paramsStr;
      // 2.6 发起GET请求
      promise = axios.get(url);
    } else if (type.toUpperCase() === 'POST') {
      // 2.7 发起post请求
      promise = axios.post(url, params);
    }
    // 2.8 处理结果并返回
    promise
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
