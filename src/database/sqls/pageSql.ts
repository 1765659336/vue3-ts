import { IPageSqlItem, PageSql } from "src/constraint/sqlsCommon";
import { IButtonTableItem, IMateTableItem } from "src/constraint/tablesCommon";
import { buttons } from "../tables/buttonTable";
import { mates } from "../tables/mateTable";

// 获取指定的页面集合中的mate路由元信息，button权限按钮信息
export const getPageMessage = function (pages: PageSql): PageSql {
  return pages.map((page: IPageSqlItem) => {
    page.btnArray = [];
    mates.forEach((mate: IMateTableItem) => {
      if (page.mateId === mate.mateId) {
        page.mate = mate;
      }
    });
    buttons.forEach((button: IButtonTableItem) => {
      if (page.pageId === button.pageId) {
        page.btnArray.push(button);
      }
    });
    return page;
  });
};
