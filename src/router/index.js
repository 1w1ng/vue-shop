import Vue from 'vue';
import Router from 'vue-router';

// 引入一级组件
import DashBoard from './../views/dashboard/DashBoard.vue';

// 路由组件的懒加载
const Home = () => import('./../views/home/Home.vue');
const Category = () => import('./../views/category/Category.vue');
const Cart = () => import('./../views/cart/Cart.vue');

// 用户中心
const Mine = () => import('./../views/mine/Mine.vue');
const UserCenter = () => import('./../views/mine/children/UserCenter.vue');

// 引入组件相关
const Order = () => import('./../views/order/Order.vue');
const MyAddress = () => import('./../views/order/children/MyAddress.vue');
const AddAddress = () => import('./../views/order/children/children/AddAddress.vue');
const EditAddress = () => import('./../views/order/children/children/EditAddress.vue');

// 引入登录组件
const Login = () => import('./../views/login/Login.vue');

Vue.use(Router);

export default new Router({
  routes: [
    // 主面板
    { path: '/', redirect: '/dashboard' },
    // 主页
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      children: [
        { path: '/dashboard', redirect: '/dashboard/home' },
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: { keepAlive: true }
        },
        {
          path: 'category',
          name: 'category',
          component: Category,
          meta: { keepAlive: true }
        },
        { path: 'cart', name: 'cart', component: Cart },
        {
          path: 'mine',
          name: 'mine',
          component: Mine,
          children: [
            // 用户中心
            {
              path: 'usercenter',
              name: 'usercenter',
              component: UserCenter
            }
          ]
        }
      ]
    },
    // 地址栏
    {
      path: '/confirmOrder',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'myAddress',
          name: 'myAddress',
          component: MyAddress,
          children: [
            // 添加地址
            { path: 'addAddress', name: 'addAddress', component: AddAddress },
            { path: 'editAddress', name: 'editAddress', component: EditAddress }
          ]
        }
      ]
    },
    // 登录
    { path: '/login', name: 'login', component: Login }
  ]
});
