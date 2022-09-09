import { IStyleVariableStore } from "./../../constraint/storeCommon";
import { ISystemStyleItem, SystemStyle } from "src/constraint/tablesCommon";
/* 
    @styleId: 样式id
*/
export let systemStyleTable: SystemStyle = [
  {
    styleId: 1,
    userId: 1,
    mainColor: "#04660F",
    menuTriggerIconColor: "#CC00FF",
    menuTitleColor: "#0AEFC9",
    menuMainColor: "#536AED",
  },
  {
    styleId: 2,
    userId: 2,
    mainColor: "#04660F",
    menuTriggerIconColor: "#04660F",
    menuTitleColor: "#04660F",
    menuMainColor: "#04660F",
  },
];

// 修改用户的样式
export const changeSystemStyle = function (
  userId: number,
  styleData: IStyleVariableStore
) {
  systemStyleTable = systemStyleTable.map((element: ISystemStyleItem) => {
    if (element.userId === userId) {
      for (const key in styleData) {
        if (Object.prototype.hasOwnProperty.call(styleData, key)) {
          element[key] = styleData[key];
        }
      }
    }
    return element;
  });
};
