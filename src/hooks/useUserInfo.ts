/* 
  @Description：用户信息本地和store存储
*/
import { useUserInfoStore } from "src/store/index";

export default function () {
  const UserInfoStore = useUserInfoStore();

  const changeToken = function (token: string) {
    UserInfoStore.changeToken(token);
  };

  const changeUserId = function (userId: number) {
    UserInfoStore.changeUserId(userId);
  };

  return {
    changeToken,
    changeUserId,
  };
}
