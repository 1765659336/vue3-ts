import { createApp } from "vue";
import "@/assets/style/global.less";
import "@/assets/style/reset.css";
import App from "./App.vue";
import route from "./router/index";
import {createPinia} from 'pinia';
const pinia = createPinia();

createApp(App).use(route).use(pinia).mount("#app");
