import * as VueRouter from "vue-router";
const Home = () => import('src/view/home/index.vue');
const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
});

export default router;
