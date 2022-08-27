const Home = () => import("src/view/Home/index.vue");
const CheckResume = () => import("src/view/CheckResume/index.vue");
const Upload = () => import("src/view/Upload/index.vue");
const NoPermission = () => import("src/view/401/index.vue");
const NontFound = () => import("src/view/404/index.vue");
const ServerError = () => import("src/view/500/index.vue");
const Login = () => import("src/view/Login/index.vue");
const index11 = () => import("src/view/Test/index11.vue");
const index12 = () => import("src/view/Test/index12.vue");
const index13 = () => import("src/view/Test/index13.vue");
const index14 = () => import("src/view/Test/index14.vue");
const index21 = () => import("src/view/Test/index21.vue");
const index22 = () => import("src/view/Test/index22.vue");
const index23 = () => import("src/view/Test/index23.vue");
const index24 = () => import("src/view/Test/index24.vue");
const index31 = () => import("src/view/Test/index31.vue");
const index32 = () => import("src/view/Test/index32.vue");
const index33 = () => import("src/view/Test/index33.vue");
const index34 = () => import("src/view/Test/index34.vue");
// 本地全页面路径
export const basicRoutes = [
  {
    path: "/",
    redirect: "/home",
  },
  { path: "/401", component: NoPermission },
  { path: "/404", component: NontFound },
  { path: "/500", component: ServerError },
  { path: "/login", component: Login },
];

export const permissionsPages = {
  path: "/home",
  component: Home,
  children: [
    { path: "/checkResume", component: CheckResume },
    { path: "/upload", component: Upload },
    {
      path: "/index11",
      component: index11,
    },
    {
      path: "/index12",
      component: index12,
    },
    {
      path: "/index13",
      component: index13,
    },
    {
      path: "/index14",
      component: index14,
    },
    {
      path: "/index21",
      component: index21,
    },
    {
      path: "/index22",
      component: index22,
    },
    {
      path: "/index23",
      component: index23,
    },
    {
      path: "/index24",
      component: index24,
    },
    {
      path: "/index31",
      component: index31,
    },
    {
      path: "/index32",
      component: index32,
    },
    {
      path: "/index33",
      component: index33,
    },
    {
      path: "/index34",
      component: index34,
    },
  ],
};

export const routes = [...basicRoutes, permissionsPages];

// 远程可配置页面
export const components = [
  {
    index11,
    index12,
    index13,
    index14,
    index21,
    index22,
    index23,
    index24,
    index31,
    index32,
    index33,
    index34,
    CheckResume,
    Upload,
  },
];
