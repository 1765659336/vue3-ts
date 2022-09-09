import { IAddRole } from "src/constraint/mockCommon";
import { IStyleVariableStore } from "src/constraint/storeCommon";
import { IRoleTableItem } from "src/constraint/tablesCommon";
import request from "src/request";

export function GetCurrentUserPageRoute() {
  return request.get("/Authorization/GetCurrentUserPageRoute");
}

export function Login(data: any) {
  return request.post("/auth/Login", data);
}

// 获取当前用户系统样式接口
export function getSystemStyle(userId: number) {
  return request.get("/user/SystemStyle?userId=" + userId);
}

// 修改当前用户系统样式接口
export function postSystemStyle(userId: number, styleData: IStyleVariableStore) {
  return request.post("/user/SystemStyle?userId=" + userId, styleData);
}

export function GetAllUserPageRoute() {
  return request.get("/Authorization/GetAllUserPageRoute");
}

// 查询角色
export function GetRoles() {
  return request.get("/search/Roles");
}

// 删除角色
export function DeleteRole(roleId: number) {
  return request.delete("/search/Roles?id=" + roleId);
}

// 新增角色
export function postRole(data: IAddRole) {
  return request.post("/search/Roles", data);
}

// 编辑角色
export function putRole(data: IRoleTableItem) {
  return request.put("/search/Roles", data);
}
