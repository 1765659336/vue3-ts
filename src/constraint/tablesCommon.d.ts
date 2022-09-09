export interface IPageTableItem {
  component: string;
  mateId: number;
  name: string;
  parentPageId: null | number;
  path: string;
  pageId: number;
  level: number;
}

export type PageTable = Array<IPageTableItem>;

export interface IMateTableItem {
  mateId: number;
  icon: string;
  title: string;
}

export type MateTable = Array<IMateTableItem>;

export interface IRoleTableItem {
  roleId: number;
  name: string;
  [k: string]: PageTable | string | number;
}

export type RoleTable = Array<IRoleTableItem>;

export interface IButtonTableItem {
  buttonId: number;
  name: string;
  pageId: number;
}

export type ButtonTable = Array<IButtonTableItem>;

export interface IPageRoleRelationItem {
  pageRoleRelationId: number;
  roleId: number;
  pageId: number;
}

export type PageRoleRelationTable = Array<IPageRoleRelationItem>;

export interface IUserItem {
  userId: number;
  userName: string;
  passWord: string;
  token: string;
}

export type UserTable = Array<IUserItem>;

export interface ISystemStyleItem {
  styleId: number;
  userId: number;
  mainColor: string;
  menuTriggerIconColor: string;
  menuTitleColor: string;
  menuMainColor: string;
  [k: string]: string | number | null;
}

export type SystemStyle = Array<ISystemStyleItem>;
