import { createApp } from "vue";
import "@/assets/style/global.less";
import "@/assets/style/reset.css";
import App from "./App.vue";
import route from "./router/index";

createApp(App).use(route).mount("#app");
