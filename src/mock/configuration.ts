/* 
    @Description：用户关于该系统的全局配置
*/

// 用户系统全局样式配置
export const userSystemStyle = [
  // 获取当前用户系统的全局样式配置
  {
    type: "post",
    url: "/user/style",
    response: () => {
      return {
        content: { mainColor: "pink" },
        message: "mock",
        status: 200,
      };
    },
  },
];
