import { pagePermissions, systemPermissions } from "./permissions";
export default [
  ...pagePermissions,
  ...systemPermissions,
  // 获取用户简历详情的接口
  {
    type: "get",
    url: "/Resume/GetResumeById",
    response: () => {
      return {
        content: {
          addTime: "2022-08-11 17:04:12",
          addUser: "系统管理",
          age: 30,
          applyPosition: null,
          cityId: 110100,
          countyId: 110101,
          currentResidence: "string",
          dateOfBirth: "1992-01-11 00:00:00",
          education: 1,
          email: "string",
          expectRemuneration: null,
          familyStatus: "string",
          graduatedFrom: "string",
          honor: null,
          id: 2,
          intentionAddress: null,
          intentionDegree: null,
          maritalStatus: 1,
          name: "老王",
          nativePlaceStr: "北京-北京市-东城区",
          nowRemuneration: null,
          picture: "string",
          politicsStatus: "string",
          provinceId: 110000,
          rests: "string",
          resumeAccessories: [
            { name: "123", path: "123", icon: "123" },
            { name: "123", path: "123", icon: "123" },
          ],
          resumeChannel: "string",
          resumeJobExperiences: [
            {
              beginDate: "2022-08-10 00:00:00",
              dimissionReasons: "123",
              endDate: "2022-08-10 00:00:00",
              id: 1,
              jobContent: "123",
              jobUnit: "123",
              postSalary: null,
              serveAsDuty: "123",
            },
          ],
          resumeLearnExperiences: [
            {
              beginDate: "2022-08-12 00:00:00",
              education: 1,
              endDate: "2022-08-12 00:00:00",
              id: 1,
              school: "string",
              specialty: "string",
            },
          ],
          resumeShareList: [
            { isRead: null, toUser: "string", toUserName: null },
          ],
          selfEvaluation: null,
          sex: 1,
          specialty: "string",
          status: 5,
          telePhone: "string",
        },
        message: "mock",
        status: 200,
      };
    },
  },
];
