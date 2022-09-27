import { createApp } from "vue";
import App from "./App.vue";
import { SetCustomMessageManageConfig } from "src/components/CustomComponents/CustomMessage/index";
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

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import piniaPlugin from "./store/storeplugin";

// 全局导入所有的element-plus icon
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// pinia持续化存储
const pinia: Pinia = createPinia();
pinia.use(
  piniaPlugin({
    key: "pinia", // 这是给缓存到本地时，加一个特殊的前缀，以免造成污染到其他缓存数据
    needKeep: {
      userInfo: ["token", "userId"],
      styleVariable: [
        "mainColor",
        "menuTriggerIconColor",
        "menuTitleColor",
        "menuMainColor",
      ],
    }, // 对于特定store进行持久化
  })
);

// 设置CustomMessage的配置信息
SetCustomMessageManageConfig(5000, false);


// 注册
app.use(route).use(pinia).use(ElementPlus).mount("#app");
