import { IAddRole } from "src/constraint/mockCommon";
import { IRoleTableItem, RoleTable } from "src/constraint/tablesCommon";
/* 
  roleId: 角色id
  name: 角色名称
*/
// 角色表
export let roles: RoleTable = [
  {
    roleId: 1,
    name: "管理员",
  },
  {
    roleId: 2,
    name: "普通用户",
  },
];

// 单个删除
export const deleteRole = function (roleId: number) {
  roles = roles.filter((element) => element.roleId !== roleId);
};

// 单个新增
export const createRole = function (data: IAddRole) {
  let maxId = 0;
  roles.forEach((element) => {
    if (element.roleId >= maxId) maxId = element.roleId;
  });
  roles.unshift({ ...data, roleId: maxId });
};

// 单个编辑
export const updateRole = function (data: IRoleTableItem) {
  roles = roles.map((element) => {
    if (element.roleId === data.roleId) element = data;
    return element;
  });
};
