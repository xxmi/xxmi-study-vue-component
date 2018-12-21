import Vue from 'vue';
import App from './App.vue';

import XxmiHello from '../packages/xxmi-hello';

Vue.use(XxmiHello);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
