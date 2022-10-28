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
const StyleConfig = () =>
  import("src/views/Configuration/StyleConfig/index.vue");
const Index22 = () => import("src/views/Test/index22.vue");
const Index23 = () => import("src/views/Test/index23.vue");
const Index24 = () => import("src/views/Test/index24.vue");
const Index31 = () => import("src/views/Test/index31.vue");
const Index32 = () => import("src/views/Test/index32.vue");
const Index33 = () => import("src/views/Test/index33.vue");
const Index34 = () => import("src/views/Test/index34.vue");

const Index = () => import("src/views/Index/index.vue");
// 角色管理
const RoleManagement = () =>
  import("src/views/Configuration/RoleManagement/index.vue");
// 签名组件测试页面
const CustomSignatureTest = () =>
  import("src/views/ComponentsTest/CustomSignatureTest/index.vue");
// 滑块组件测试页面
const CustomSlider = () =>
  import("src/views/ComponentsTest/CustomSlider/index.vue");
// 自定义指令v-copy测试页面
const InstructionsCopy = () =>
  import("src/views/InstructionsTest/InstructionsCopy/index.vue");
// 自定义指令v-realImg测试页面
const InstructionsRealImg = () =>
  import("src/views/InstructionsTest/InstructionsRealImg/index.vue");
// 自定义指令v-loading测试页面
const InstructionsLoading = () =>
  import("src/views/InstructionsTest/InstructionsLoading/index.vue");
// Echart测试页面
const CustomEcharts = () =>
  import("src/views/ComponentsTest/CustomEcharts/index.vue");
// 自定义按钮测试页面
const CustomButton = () =>
  import("src/views/ComponentsTest/CustomButton/index.vue");
// 自定义评分组件测试页面
const CustomRate = () =>
  import("src/views/ComponentsTest/CustomRate/index.vue");
// 自定义穿梭框测试页面
const CustomTransfer = () =>
  import("src/views/ComponentsTest/CustomTransfer/index.vue");
// 自定义复选框组件测试页面
const CustomCheckbox = () =>
  import("src/views/ComponentsTest/CustomCheckbox/index.vue");
// 自定义开关组件测试页面
const CustomSwitch = () =>
  import("src/views/ComponentsTest/CustomSwitch/index.vue");
// 自定义标签组件测试页面
const CustomTag = () => import("src/views/ComponentsTest/CustomTag/index.vue");
// 自定义时间轴组件测试页面
const CustomTimeline = () =>
  import("src/views/ComponentsTest/CustomTimeLine/index.vue");
// 自定义布容器组件测试页面
const CustomContainer = () =>
  import("src/views/ComponentsTest/CustomCantainer/index.vue");
// 自定义文字链接组件测试页面
const CustomLink = () =>
  import("src/views/ComponentsTest/CustomLink/index.vue");
// 自定义徽章组件测试页面
const CustomBadge = () =>
  import("src/views/ComponentsTest/CustomBadge/index.vue");
// 自定义固钉组件测试页面
const CustomAffix = () =>
  import("src/views/ComponentsTest/CustomAffix/index.vue");
// 自定义折叠面板测试页面
const CustomCollapse = () =>
  import("src/views/ComponentsTest/CustomCollapse/index.vue");
// 自定义回到顶部组件测试页面
const CustomBackTop = () =>
  import("src/views/ComponentsTest/CustomBackTop/index.vue");
// 自定义气泡卡片组件测试页面
const CustomPopover = () =>
  import("src/views/ComponentsTest/CustomPopover/index.vue");
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
  { path: "/home" },
  { path: "/checkResume" },
  { path: "/upload" },
  { path: "/ModalTest" },
  { path: "/index12" },
  { path: "/index13" },
  { path: "/index14" },
  { path: "/StyleConfig" },
  { path: "/index22" },
  { path: "/index23" },
  { path: "/index24" },
  { path: "/index31" },
  { path: "/index32" },
  { path: "/index33" },
  { path: "/index34" },
  { path: "/RoleManagement" },
  { path: "/Index35" },
  { path: "/CustomSignatureTest" },
  { path: "/CustomSlider" },
  { path: "/InstructionsCopy" },
  { path: "/InstructionsRealImg" },
  { path: "/InstructionsLoading" },
  { path: "/CustomEcharts" },
  { path: "/CustomButton" },
  { path: "/CustomRate" },
  { path: "/CustomTransfer" },
  { path: "/CustomCheckbox" },
  { path: "/CustomSwitch" },
  { path: "/CustomTag" },
  { path: "/CustomTimeline" },
  { path: "/CustomContainer" },
  { path: "/CustomLink" },
  { path: "/CustomBadge" },
  { path: "/CustomAffix" },
  { path: "/CustomCollapse" },
  { path: "/CustomBackTop" },
  { path: "/CustomPopover" },
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
  CustomSlider,
  CustomSignatureTest,
  InstructionsCopy,
  InstructionsRealImg,
  InstructionsLoading,
  CustomEcharts,
  CustomButton,
  CustomRate,
  CustomTransfer,
  CustomCheckbox,
  CustomSwitch,
  CustomTag,
  CustomTimeline,
  CustomContainer,
  CustomLink,
  CustomBadge,
  CustomAffix,
  CustomCollapse,
  CustomBackTop,
  CustomPopover,
};
