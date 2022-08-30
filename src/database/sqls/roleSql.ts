import { IAddRole } from "src/constraint/mockCommon";
import { IRoleTableItem } from "./../../constraint/tablesCommon.d";
import { getPageMessage } from "./pageSql";
import {
  IPageRoleRelationItem,
  IPageTableItem,
  RoleTable,
} from "src/constraint/tablesCommon";
import { createRole, deleteRole, roles, updateRole } from "../tables/roleTable";
import { pageRoleRelations } from "../tables/pageRoleRelationTable";
import { pages } from "../tables/pageTable";
import { cloneDeep } from "lodash";

// 查询所有的角色
export const getRoleMessage = function (roles: RoleTable): RoleTable {
  // 查询操作需要拼一些字段返回给前端引用数据类型需要先深拷贝一下做处理
  let cloneRoles = cloneDeep(roles);
  return cloneRoles.map((role: IRoleTableItem) => {
    role.pageArr = [];
    pageRoleRelations.forEach((pageRoleRelation: IPageRoleRelationItem) => {
      if (role.roleId === pageRoleRelation.roleId) {
        pages.forEach((page: IPageTableItem) => {
          if (page.pageId === pageRoleRelation.pageId) {
            (role.pageArr as IPageTableItem[]).push(page);
          }
        });
      }
    });
    role.pageArr = getPageMessage(role.pageArr);
    return role;
  });
};

// 查询角色
export const queryRoleById = function (roleId: number) {
  let findData = null;
  roles.forEach((element) => {
    if (element.roleId === roleId) {
      findData = element;
    }
  });
  return findData !== null ? findData : false;
};

// 删除角色
export const deleteRoleById = function (roleId: number) {
  const data = queryRoleById(roleId);
  if (queryRoleById(roleId)) {
    deleteRole(roleId);
    return data;
  } else {
    return false;
  }
};

// 新增角色
export const addRole = function (data: IAddRole) {
  createRole(data);
};

// 编辑角色
export const editRole = function (data: IRoleTableItem) {
  updateRole(data);
};