import {
  IPageTableItem,
  IButtonTableItem,
  IRoleTableItem,
} from "src/constraint/tablesCommon";
export interface IPageSqlItem extends IPageTableItem {
  btnArray: Array<IButtonTableItem>;
  mate: IMateTableItem;
}

export type PageSql = Array<IpageSqlItem>;

export interface IRoleSqlItem extends IRoleTableItem {
  pageArr: Array<IPageTableItem> | PageSql;
}

export type RoleSql = Array<IRoleSqlItem>;


export interface ILoginMessage {
  userName: string;
  passWord: string;
}