import ajax from './ajax';

// 1.定义基础路径
const BASE_URL = 'http://demo.itlike.com/web/xlmc';

export const getHomeData = () => ajax(BASE_URL + '/api/homeApi');
// 分类的数据
export const getCategories = () => ajax(BASE_URL + '/api/homeApi/categories');
export const getCategoriesDetail = preParams => ajax(BASE_URL + '/api/homeApi/categoriesdetail' + preParams);

// 2.用户中心接口

// 2.1 获取短信验证码(GET)
export const getPhoneCode = phone => ajax(BASE_URL + '/api/send_code', { phone });
// 2.2 手机验证码登录(POST)
export const phoneCodeLogin = (phone, code) => ajax(BASE_URL + '/api/login_code', { phone, code }, 'POST');
