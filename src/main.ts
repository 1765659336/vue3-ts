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

// 全局导入所有的icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const pinia: Pinia = createPinia();

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(route).use(pinia).use(ElementPlus).mount("#app");
