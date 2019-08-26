import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

// 1.引入 FastClick
import FastClick from 'fastclick';
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}

// 2.引入全局的样式
import './style/common.less';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
