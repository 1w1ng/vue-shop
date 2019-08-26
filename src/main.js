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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
