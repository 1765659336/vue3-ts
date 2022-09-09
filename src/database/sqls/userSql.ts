import { ILoginMessage } from "src/constraint/sqlsCommon";
import { IStyleVariableStore } from "src/constraint/storeCommon";
import { IUserItem } from "src/constraint/tablesCommon";
import { changeSystemStyle, systemStyleTable } from "../tables/systemStyleTable";
import { userLoginToken, users } from "../tables/userTable";

// 根据账号密码判断是否是系统的用户
export const judgeSystemUser = function (
  data: ILoginMessage
): undefined | IUserItem {
  return users.find(
    (element: IUserItem) =>
      element.userName === data.userName && element.passWord === data.passWord
  );
};

// 查询用户的系统样式
export const getSystemStyleByUserId = function (userId: number) {
  return systemStyleTable.find((element) => element.userId === userId);
};

// 修改用户的系统样式
export const changeSystemStyleByUserId = function (
  userId: number,
  styleData: IStyleVariableStore
) {
  changeSystemStyle(userId, styleData);
};

// 用户登录成功之后存入token
export const loginUserToken = function (user: ILoginMessage, token: string) {
  return userLoginToken(user, token);
};
