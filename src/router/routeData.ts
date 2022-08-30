const Home = () => import("src/views/Home/index.vue");
const CheckResume = () => import("src/views/CheckResume/index.vue");
const Upload = () => import("src/views/Upload/index.vue");
const NoPermission = () => import("src/views/401/index.vue");
const NontFound = () => import("src/views/404/index.vue");
const ServerError = () => import("src/views/500/index.vue");
const Login = () => import("src/views/Login/index.vue");
const Index11 = () => import("src/views/Test/index11.vue");
const Index12 = () => import("src/views/Test/index12.vue");
const Index13 = () => import("src/views/Test/index13.vue");
const Index14 = () => import("src/views/Test/index14.vue");
const Index21 = () => import("src/views/Test/index21.vue");
const Index22 = () => import("src/views/Test/index22.vue");
const Index23 = () => import("src/views/Test/index23.vue");
const Index24 = () => import("src/views/Test/index24.vue");
const Index31 = () => import("src/views/Test/index31.vue");
const Index32 = () => import("src/views/Test/index32.vue");
const Index33 = () => import("src/views/Test/index33.vue");
const Index34 = () => import("src/views/Test/index34.vue");
const Index = () => import("src/views/Index/index.vue");
const RoleManagement = () =>
  import("src/views/AccessConfiguration/RoleManagement/index.vue");
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
  { path: "/index" },
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
  {
    path: "/RoleManagement",
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
  Index,
  RoleManagement,
};
