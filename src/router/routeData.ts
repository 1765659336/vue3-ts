const Home = () => import("src/view/Home/index.vue");
const CheckResume = () => import("src/view/CheckResume/index.vue");
const Upload = () => import("src/view/Upload/index.vue");
const NoPermission = () => import("src/view/401/index.vue");
const NontFound = () => import("src/view/404/index.vue");
const ServerError = () => import("src/view/500/index.vue");
const Login = () => import("src/view/Login/index.vue");
const Index11 = () => import("src/view/Test/index11.vue");
const Index12 = () => import("src/view/Test/index12.vue");
const Index13 = () => import("src/view/Test/index13.vue");
const Index14 = () => import("src/view/Test/index14.vue");
const Index21 = () => import("src/view/Test/index21.vue");
const Index22 = () => import("src/view/Test/index22.vue");
const Index23 = () => import("src/view/Test/index23.vue");
const Index24 = () => import("src/view/Test/index24.vue");
const Index31 = () => import("src/view/Test/index31.vue");
const Index32 = () => import("src/view/Test/index32.vue");
const Index33 = () => import("src/view/Test/index33.vue");
const Index34 = () => import("src/view/Test/index34.vue");
const Index = () => import("src/view/Index/index.vue");
// 基础路由
export const routes = [
  {
    path: "/",
    redirect: "/index",
    component: Index,
  },
  {
    path: "/index",
    component: Index,
  },
  { path: "/401", component: NoPermission },
  { path: "/404", component: NontFound },
  { path: "/500", component: ServerError },
  { path: "/login", component: Login },
];

// 除基础页面之外的系统页面
export const permissionsPages = [
  {path: '/index'},
  { path: "/home" },
  { path: "/checkResume" },
  { path: "/upload" },
  { path: "/index11" },
  { path: "/index12" },
  {
    path: "/index13",
  },
  {
    path: "/index14",
  },
  {
    path: "/index21",
  },
  {
    path: "/index22",
  },
  {
    path: "/index23",
  },
  {
    path: "/index24",
  },
  {
    path: "/index31",
  },
  {
    path: "/index32",
  },
  {
    path: "/index33",
  },
  {
    path: "/index34",
  },
];

// 远程可配置页面
export const components = {
  Index11,
  Index12,
  Index13,
  Index14,
  Index21,
  Index22,
  Index23,
  Index24,
  Index31,
  Index32,
  Index33,
  Index34,
  CheckResume,
  Upload,
  Home,
  Index
};
