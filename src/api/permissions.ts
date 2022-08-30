import { IAddRole } from "src/constraint/mockCommon";
import { IRoleTableItem } from "src/constraint/tablesCommon";
import request from "src/request";

export function GetCurrentUserPageRoute() {
  return request.get("/Authorization/GetCurrentUserPageRoute");
}

export function login(data: any) {
  return request.post("/auth/login", data);
}

export function style() {
  return request.post("/user/style");
}

export function GetAllUserPageRoute() {
  return request.get("/Authorization/GetAllUserPageRoute");
}

// 查询角色
export function getRoles() {
  return request.get("/search/Roles");
}

// 删除角色
export function deleteRole(roleId: number) {
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
