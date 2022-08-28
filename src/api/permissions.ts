import request from "src/request";

export function GetCurrentUserPageRoute() {
  return request.get("/Authorization/GetCurrentUserPageRoute");
}

export function login(data: any) {
  return request.post("/auth/login", data);
}