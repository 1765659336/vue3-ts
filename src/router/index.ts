import * as VueRouter from "vue-router";
import { components, routes, permissionsPages } from "src/router/routeData";
import { GetCurrentUserPageRoute } from "src/api/permissions";
import { useMenuStore, useUserInfoStore } from "src/store";
import { AxiosResponse } from "axios";
import { IPageSqlItem } from "src/constraint/sqlsCommon";
import { RouteRecordRaw } from "vue-router";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const getChildren = function (res: AxiosResponse) {
  const result: Array<RouteRecordRaw> = [];
  res.data.content.forEach((item: IPageSqlItem) => {
    if (item.component) {
      result.push({
        path: item.path,
        component: components[item.component],
        name: item.name,
        meta: item.mate,
      });
    }
  });
  return result;
};

router.beforeEach((to: any, _from: any, next: any) => {
  const UserInfoStore = useUserInfoStore();
  const menuStore = useMenuStore();
  // 基础路径
  if (routes.map((item) => item.path).includes(to.path)) {
    if (to.path === "/index") {
      if (!UserInfoStore.token) {
        next("/login");
      } else {
        GetCurrentUserPageRoute().then((res) => {
          if (res.data.status === 200) {
            menuStore.changeState(res.data.content);
          }
        });
      }
    }
    next();
  } else {
    // 判断用户是否登录
    if (UserInfoStore.token) {
      if (permissionsPages.find((item) => item.path === to.path)) {
        // 保持实时性，每次跳转路由都需要判断，当管理员修改了该用户权限时，尽管用户没有退出，也没有了之前获取的页面权限的权限了
        GetCurrentUserPageRoute().then((res) => {
          if (res.data.status === 200) {
            menuStore.changeState(res.data.content);
            if (routes.length === router.getRoutes().length) {
              router.addRoute({
                path: "/index",
                component: components["Index"],
                name: "Index",
                meta: { title: "index", icon: "" },
                children: getChildren(res),
              });
              next({ ...to, replace: true });
            } else {
              /*
              使用find方法代替every方法，every方法识别数组中值为对象时，遍历的次数不对，巨坑的api
              */
              if (
                res.data.content.find(
                  (item: IPageSqlItem) => item.path === to.path
                )
              ) {
                next();
              } else {
                next("/401");
                // 没有权限前往401页面
              }
            }
          } else {
            // 接口报错前往500页面
            next("/500");
          }
        });
      } else {
        // 不属于系统页面前往404页面
        next("/404");
      }
    } else {
      // 用户没有登录前往login页面
      next("/login");
    }
  }
});

router.afterEach((to) => {
  document.title = (to.meta.title as string) || "Vue3-TS-Ui";
});

export default router;
