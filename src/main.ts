import { createApp } from "vue";
import "@/assets/style/global.less";
import "@/assets/style/reset.css";
import App from "./App.vue";
import route from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(route).use(pinia).use(ElementPlus).mount("#app");

