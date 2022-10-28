// 页面表

import { PageTable } from "src/constraint/tablesCommon";

/* 
  @component: 通过名称匹配前端组件
  @metaId: 前端路由元信息表id
  @name: 前端路由路径别名name
  @parentPageId: 父级菜单id
  @path: 前端路由路径
  @pageId: 主键id
  @level: ?级菜单
*/
export const pages: PageTable = [
  {
    component: "",
    mateId: 1,
    name: "",
    parentPageId: null,
    path: "",
    pageId: 1,
    level: 1,
  },
  {
    component: "Home",
    mateId: 2,
    name: "home",
    parentPageId: 1,
    path: "/home",
    pageId: 101,
    level: 2,
  },
  {
    component: "",
    mateId: 3,
    name: "",
    parentPageId: null,
    path: "",
    pageId: 2,
    level: 1,
  },
  {
    component: "ModalTest",
    mateId: 4,
    name: "ModalTest",
    parentPageId: 2,
    path: "/ModalTest",
    pageId: 201,
    level: 2,
  },
  {
    component: "Index12",
    mateId: 5,
    name: "index12",
    parentPageId: 2,
    path: "/index12",
    pageId: 202,
    level: 2,
  },
  {
    component: "Index13",
    mateId: 6,
    name: "index13",
    parentPageId: 2,
    path: "/index13",
    pageId: 203,
    level: 2,
  },
  {
    component: "",
    mateId: 7,
    name: "",
    parentPageId: null,
    path: "",
    pageId: 3,
    level: 1,
  },
  {
    component: "StyleConfig",
    mateId: 8,
    name: "StyleConfig",
    parentPageId: 3,
    path: "/StyleConfig",
    pageId: 301,
    level: 2,
  },
  {
    component: "Index22",
    mateId: 9,
    name: "index22",
    parentPageId: 3,
    path: "/index22",
    pageId: 302,
    level: 2,
  },
  {
    component: "Index23",
    mateId: 10,
    name: "index23",
    parentPageId: 3,
    path: "/index23",
    pageId: 303,
    level: 2,
  },
  {
    component: "Index24",
    mateId: 11,
    name: "index24",
    parentPageId: 3,
    path: "/index24",
    pageId: 304,
    level: 2,
  },
  {
    component: "",
    mateId: 12,
    name: "",
    parentPageId: null,
    path: "",
    pageId: 4,
    level: 1,
  },
  {
    component: "RoleManagement",
    mateId: 13,
    name: "RoleManagement",
    parentPageId: 4,
    path: "/RoleManagement",
    pageId: 401,
    level: 2,
  },
  {
    component: "",
    mateId: 14,
    name: "",
    parentPageId: null,
    path: "",
    pageId: 5,
    level: 1,
  },
  {
    component: "CustomSlider",
    mateId: 15,
    name: "CustomSlider",
    parentPageId: 5,
    path: "/CustomSlider",
    pageId: 501,
    level: 2,
  },
  {
    component: "CustomSignatureTest",
    mateId: 16,
    name: "CustomSignatureTest",
    parentPageId: 5,
    path: "/CustomSignatureTest",
    pageId: 502,
    level: 2,
  },
  {
    component: "InstructionsCopy",
    mateId: 17,
    name: "InstructionsCopy",
    parentPageId: 5,
    path: "/InstructionsCopy",
    pageId: 503,
    level: 2,
  },
  {
    component: "InstructionsRealImg",
    mateId: 18,
    name: "InstructionsRealImg",
    parentPageId: 5,
    path: "/InstructionsRealImg",
    pageId: 504,
    level: 2,
  },
  {
    component: "InstructionsLoading",
    mateId: 19,
    name: "InstructionsLoading",
    parentPageId: 5,
    path: "/InstructionsLoading",
    pageId: 505,
    level: 2,
  },
  {
    component: "CustomEcharts",
    mateId: 20,
    name: "CustomEcharts",
    parentPageId: 5,
    path: "/CustomEcharts",
    pageId: 506,
    level: 2,
  },
  {
    component: "CustomButton",
    mateId: 21,
    name: "CustomButton",
    parentPageId: 5,
    path: "/CustomButton",
    pageId: 507,
    level: 2,
  },
  {
    component: "CustomRate",
    mateId: 22,
    name: "CustomRate",
    parentPageId: 5,
    path: "/CustomRate",
    pageId: 508,
    level: 2,
  },
  {
    component: "CustomTransfer",
    mateId: 23,
    name: "CustomTransfer",
    parentPageId: 5,
    path: "/CustomTransfer",
    pageId: 509,
    level: 2,
  },
  {
    component: "CustomCheckbox",
    mateId: 24,
    name: "CustomCheckbox",
    parentPageId: 5,
    path: "/CustomCheckbox",
    pageId: 5010,
    level: 2,
  },
  {
    component: "CustomSwitch",
    mateId: 25,
    name: "CustomSwitch",
    parentPageId: 5,
    path: "/CustomSwitch",
    pageId: 5011,
    level: 2,
  },
  {
    component: "CustomTag",
    mateId: 26,
    name: "CustomTag",
    parentPageId: 5,
    path: "/CustomTag",
    pageId: 5012,
    level: 2,
  },
  {
    component: "CustomTimeline",
    mateId: 27,
    name: "CustomTimeline",
    parentPageId: 5,
    path: "/CustomTimeline",
    pageId: 5013,
    level: 2,
  },
  {
    component: "CustomContainer",
    mateId: 28,
    name: "CustomContainer",
    parentPageId: 5,
    path: "/CustomContainer",
    pageId: 5014,
    level: 2,
  },
  {
    component: "CustomLink",
    mateId: 29,
    name: "CustomLink",
    parentPageId: 5,
    path: "/CustomLink",
    pageId: 5015,
    level: 2,
  },
  {
    component: "CustomBadge",
    mateId: 30,
    name: "CustomBadge",
    parentPageId: 5,
    path: "/CustomBadge",
    pageId: 5016,
    level: 2,
  },
  {
    component: "CustomAffix",
    mateId: 31,
    name: "CustomAffix",
    parentPageId: 5,
    path: "/CustomAffix",
    pageId: 5017,
    level: 2,
  },
  {
    component: "CustomCollapse",
    mateId: 32,
    name: "CustomCollapse",
    parentPageId: 5,
    path: "/CustomCollapse",
    pageId: 5018,
    level: 2,
  },
  {
    component: "CustomBackTop",
    mateId: 33,
    name: "CustomBackTop",
    parentPageId: 5,
    path: "/CustomBackTop",
    pageId: 5019,
    level: 2,
  },
  {
    component: "CustomPopover",
    mateId: 34,
    name: "CustomPopover",
    parentPageId: 5,
    path: "/CustomPopover",
    pageId: 5020,
    level: 2,
  },
];
