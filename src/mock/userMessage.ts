import Mock from "mockjs";
import { MockMethod } from "vite-plugin-mock";
import {
  changeSystemStyleByUserId,
  getSystemStyleByUserId,
  judgeSystemUser,
  loginUserToken,
} from "src/database/sqls/userSql";
import { ILoginMessage } from "src/constraint/sqlsCommon";
import { getPageMessage } from "src/database/sqls/pageSql";
import { pages } from "src/database/tables/pageTable";
import { IStyleVariableStore } from "src/constraint/storeCommon";
/* 
    @Description：用户相关的接口
*/

export const userApis: Array<MockMethod> = [
  // 获取当前用户系统的全局样式配置
  {
    method: "get",
    url: "/user/SystemStyle",
    response: (data: { query: { userId: number } }) => {
      const findUserSystemStyle = getSystemStyleByUserId(
        Number(data.query.userId)
      );
      if (findUserSystemStyle) {
        return {
          content: findUserSystemStyle,
          message: "用户系统样式查询成功",
          status: true,
        };
      } else {
        return {
          content: findUserSystemStyle,
          message: "用户系统样式查询失败",
          status: false,
        };
      }
    },
  },
  // 登录接口
  {
    url: "/auth/Login",
    method: "post",
    response: (data: { body: ILoginMessage }) => {
      const findUser = judgeSystemUser(data.body);
      if (findUser) {
        const token = Mock.Random.paragraph(20, 30);
        return {
          content: loginUserToken(data.body, token),
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
  // 修改用户系统样式接口
  {
    method: "post",
    url: "/user/SystemStyle",
    response: (data: {
      query: { userId: number };
      body: IStyleVariableStore;
    }) => {
      changeSystemStyleByUserId(Number(data.query.userId), data.body);
      return {
        content: {},
        message: "mock",
        status: 200,
      };
    },
  },
];
