import * as VueRouter from "vue-router";
import { components, routes, basicRoutes } from "src/router/routeData";
import { GetCurrentUserPageRoute } from "src/api/permissions";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

router.beforeEach((to: any, from: any, next: any) => {
  // 基础路径
  if (basicRoutes.map((item) => item.path).includes(to.path)) {
    next();
  } else {
    // 判断用户是否登录
    const useToken = true;
    if (useToken) {
      // 保持实时性，每次跳转路由都需要判断，当管理员修改了该用户权限时，尽管用户没有退出，也没有了之前获取的页面权限的权限了
      GetCurrentUserPageRoute().then((res) => {
        if (res.data.status === true) {
          console.log(res);
          // res.data.content.forEach((item) => {
          //   router.addRoute("Home", {
          //     path: item.path,
          //     component: components[item.component],
          //     name: item.name,
          //     meta: item.mate,
          //   });
          // });
          if (res.data.content.every((item) => item.path !== to.path)) {
            // 没有权限前往404页面
            next("/404");
          } else {
            next();
          }
        } else {
          // 接口报错前往500页面
          next("/500");
        }
      });
    } else {
      // 用户没有登录前往401页面
      next("/401");
    }
  }
});

router.afterEach((to, from) => {
  console.log("后置路由守卫", to, from);
  document.title = to.meta.title || "Vue3-TS-Ui";
});

export default router;
