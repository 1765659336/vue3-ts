const Home = () => import("src/views/Home/index.vue");
const CheckResume = () => import("src/views/CheckResume/index.vue");
const Upload = () => import("src/views/Upload/index.vue");
const NoPermission = () => import("src/views/401/index.vue");
// 没有找到404
const NontFound = () => import("src/views/404/index.vue");
// 服务器错误500
const ServerError = () => import("src/views/500/index.vue");
const Login = () => import("src/views/Login/index.vue");
const ModalTest = () => import("src/views/ModalTest/index.vue");
const Index12 = () => import("src/views/Test/index12.vue");
const Index13 = () => import("src/views/Test/index13.vue");
const Index14 = () => import("src/views/Test/index14.vue");
const StyleConfig = () => import("src/views/Configuration/StyleConfig/index.vue");
const Index22 = () => import("src/views/Test/index22.vue");
const Index23 = () => import("src/views/Test/index23.vue");
const Index24 = () => import("src/views/Test/index24.vue");
const Index31 = () => import("src/views/Test/index31.vue");
const Index32 = () => import("src/views/Test/index32.vue");
const Index33 = () => import("src/views/Test/index33.vue");
const Index34 = () => import("src/views/Test/index34.vue");
const Index35 = () => import("src/views/Test/index35.vue");
const Index = () => import("src/views/Index/index.vue");
const RoleManagement = () =>
  import("src/views/Configuration/RoleManagement/index.vue");
// 基础路由
export const routes = [
  {
    path: "/",
    redirect: "/index",
    component: Index,
    children: [],
  },
  {
    path: "/index",
    component: Index,
    children: [],
  },
  { path: "/401", component: NoPermission, children: [] },
  { path: "/404", component: NontFound, children: [] },
  { path: "/500", component: ServerError, children: [] },
  { path: "/login", component: Login, children: [] },
];

// 除基础页面之外的系统页面
export const permissionsPages: Array<{ path: string }> = [
  { path: "/index" },
  { path: "/home" },
  { path: "/checkResume" },
  { path: "/upload" },
  { path: "/ModalTest" },
  { path: "/index12" },
  {
    path: "/index13",
  },
  {
    path: "/index14",
  },
  {
    path: "/StyleConfig",
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
  { path: "/Index35" },
];

// 远程可配置页面
export const components: {
  [k: string]: () => Promise<typeof import("*.vue")>;
} = {
  ModalTest,
  Index12,
  Index13,
  Index14,
  StyleConfig,
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
  Index35,
};
