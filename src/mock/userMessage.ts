import Mock from "mockjs";
import { MockMethod } from "vite-plugin-mock";
import { judgeSystemUser } from "src/database/sqls/userSql";
import { ILoginMessage } from "src/constraint/sqlsCommon";
import { getPageMessage } from "src/database/sqls/pageSql";
import { pages } from "src/database/tables/pageTable";
/* 
    @Description：用户相关的接口
*/

export const userApis: Array<MockMethod> = [
  // 获取当前用户系统的全局样式配置
  {
    method: "post",
    url: "/user/style",
    response: () => {
      return {
        content: {
          mainColor: "pink",
          menuTriggerIconColor: "pink",
          menuTitleColor: "pink",
          menuMainColor: "pink",
        },
        message: "mock",
        status: 200,
      };
    },
  },
  // 登录接口
  {
    url: "/auth/login",
    method: "post",
    response: (data: { body: ILoginMessage }) => {
      if (judgeSystemUser(data.body)) {
        const token = Mock.Random.paragraph(20, 30);
        return {
          content: { token },
          message: "登录成功",
          status: true,
        };
      } else {
        return {
          content: null,
          message: "账号密码错误",
          status: false,
        };
      }
    },
  },
  // 获取用户页面权限的接口
  {
    url: "/Authorization/GetCurrentUserPageRoute",
    method: "get",
    response: () => {
      // 后续需要根据token来动态获取用户的菜单项pages
      const content = getPageMessage(pages);
      return {
        content: content,
        message: "mock",
        status: 200,
      };
    },
  },
];
