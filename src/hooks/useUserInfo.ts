import { useUserInfoStore } from "src/store/index";

export default function () {
  const UserInfoStore = useUserInfoStore();

  const changeToken = function (token: string) {
    UserInfoStore.changeToken(token);
    /* 
        pinia页面刷新数据重置，在session中存一份，在store中默认先去读session中的数据
        session当应用关闭时清空，下次点开访问系统需要重新登录
    */
    sessionStorage.setItem("token", token);
  };

  const changeUserId = function (userId: number) {
    UserInfoStore.changeUserId(userId);
    /* 
        pinia页面刷新数据重置，在session中存一份，在store中默认先去读session中的数据
        session当应用关闭时清空，下次点开访问系统需要重新登录
    */
    sessionStorage.setItem("userId", userId + "");
  };

  return {
    changeToken,
    changeUserId
  };
}
