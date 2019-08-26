import Vue from 'vue';

// 0. Icon图标
import { Icon } from 'vant';
Vue.use(Icon);

// 1. 底部导航
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

// 2. Loading
import { Loading } from 'vant';
Vue.use(Loading);
