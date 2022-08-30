import { ILoginMessage } from "src/constraint/sqlsCommon";
import { IUserItem } from "src/constraint/tablesCommon";
import { users } from "../tables/userTable";
// 根据账号密码判断是否是系统的用户
export const judgeSystemUser = function (
  data: ILoginMessage
): undefined | IUserItem {
  return users.find(
    (element: IUserItem) =>
      element.userName === data.userName && element.passWord === data.passWord
  );
};
