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
    component: "Index35",
    mateId: 15,
    name: "Index35",
    parentPageId: 5,
    path: "/Index35",
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
];
