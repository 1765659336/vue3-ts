import * as VueRouter from "vue-router";
import {
  components,
  routes,
  basicRoutes,
  permissionsPages,
} from "src/router/routeData";
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
      if (
        permissionsPages.path === to.path ||
        permissionsPages.children.find((item) => item.path === to.path)
      ) {
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
            /* 
              使用find方法代替every方法，every方法识别数组中值为对象时，遍历的次数不对，巨坑的api
            */
            if (res.data.content.find((item) => item.path === to.path)) {
              next();
            } else {
              next("/401");
              // 没有权限前往401页面
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

router.afterEach((to, from) => {
  console.log("后置路由守卫", to, from);
  document.title = to.meta.title || "Vue3-TS-Ui";
});

export default router;
