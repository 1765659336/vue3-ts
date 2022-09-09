import { IAddRole } from "src/constraint/mockCommon";
import { IRoleTableItem } from "src/constraint/tablesCommon";
import { getPageMessage } from "src/database/sqls/pageSql";
import {
  getRoleMessage,
  queryRoleById,
  deleteRoleById,
  addRole,
  editRole,
} from "src/database/sqls/roleSql";
import { pages } from "src/database/tables/pageTable";
import { roles } from "src/database/tables/roleTable";
import { MockMethod } from "vite-plugin-mock";
// const { pages, roles } = tables;
/* 
    系统信息接口
*/
export const pageApis: Array<MockMethod> = [
  // 获取所有页面接口
  {
    url: "/Authorization/GetAllUserPageRoute",
    method: "get",
    response: () => {
      const content = getPageMessage(pages);
      return {
        content: content,
        message: "mock",
        status: 200,
      };
    },
  },
];

export const roleApis: Array<MockMethod> = [
  // 获取所有的角色
  {
    method: "get",
    url: "/search/Roles",
    response: () => {
      let content = getRoleMessage(roles);
      return {
        content: content,
        message: "mock",
        status: 200,
      };
    },
  },
  // 删除角色
  {
    method: "delete",
    url: "/search/Roles",
    // 请求url参数默认为string
    response: (data: { query: { id: string } }) => {
      if (queryRoleById(Number(data.query.id))) {
        const deleteData = deleteRoleById(Number(data.query.id));
        return {
          content: deleteData,
          message: `${deleteData ? "删除成功" : "删除失败"}`,
          status: 200,
        };
      } else {
        return {
          content: null,
          message: `未查询到角色`,
          status: 404,
        };
      }
    },
  },
  // 新增角色
  {
    method: "post",
    url: "/search/Roles",
    response: (data: { body: IAddRole }) => {
      addRole(data.body);
      return {
        content: null,
        message: `未查询到角色`,
        status: 404,
      };
    },
  },
  // 编辑角色
  {
    method: "put",
    url: "/search/Roles",
    response: (data: { body: IRoleTableItem }) => {
      editRole(data.body);
      return {
        content: null,
        message: `未查询到角色`,
        status: 404,
      };
    },
  },
];
