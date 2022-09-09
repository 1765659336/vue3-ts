import { ILoginMessage } from "src/constraint/sqlsCommon";
import { UserTable } from "src/constraint/tablesCommon";
/* 
    @userId: 用户id
    @userName: 账号名 唯一
    @passWord: 密码
    @token: 临时生成的token
*/
export let users: UserTable = [
  { userId: 1, userName: "admin", passWord: "123456", token: "" },
  { userId: 2, userName: "a1", passWord: "123456", token: "" },
  { userId: 3, userName: "a2", passWord: "123456", token: "" },
];

// 存入用户token
export const userLoginToken = function (user:ILoginMessage, token:string) {
  let changeUser;
  users = users.map((element) => {
    if (element.userName === user.userName) {
      element.token = token;
      changeUser = element;
    }
    return element;
  });
  return changeUser;
};
