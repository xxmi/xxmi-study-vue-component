// 导入组件
import xxmiHello from './xxmi-hello.vue';

// 为组件提供 install 安装方法，供按需映入
xxmiHello.install = function (Vue) {
  Vue.component(xxmiHello.name, xxmiHello);
};

// 导出默认组件
export default xxmiHello;