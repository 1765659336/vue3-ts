import { createApp } from "vue";
import App from "./App.vue";

// 引入全局样式文件
import "src/assets/style/global.less";

// 引入样式重置文件
import "src/assets/style/reset.css";

// 使用vue-router4
import route from "./router/index";

// 全局注册element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 使用pinia状态管理库
import { createPinia, Pinia } from "pinia";
const pinia: Pinia = createPinia();

createApp(App).use(route).use(pinia).use(ElementPlus).mount("#app");

