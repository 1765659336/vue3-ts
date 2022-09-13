import { PiniaPluginContext } from "pinia";

interface INeedKeep {
  userInfo?: Array<"token" | "userId">;
  menu?: Array<"menuData">;
  styleVariable?: Array<
    "mainColor" | "menuTriggerIconColor" | "menuTitleColor" | "menuMainColor"
  >;
  modalManage?: Array<"ModalManage">;
  [k: string]:
    | Array<"ModalManage">
    | Array<
        | "mainColor"
        | "menuTriggerIconColor"
        | "menuTitleColor"
        | "menuMainColor"
      >
    | Array<"menuData">
    | Array<"token" | "userId">
    | undefined;
}

type Options = {
  key: string;
  needKeep?: INeedKeep;
};

const piniaPlugin = (options: Options) => {
  const { key, needKeep = {} } = options;
  return (context: PiniaPluginContext) => {
    const { store } = context;
    if (needKeep[store.$id] && needKeep[store.$id]?.length) {
      store.$subscribe(() => {
        /* 
          双引号称为空值合并运算符，它是 ES2020 的一个新特性，
          它的作用是当一个表达式是 null 或者 undefined 时为变量设置一个默认值。
        */
        needKeep[store.$id]?.forEach((element) => {
          sessionStorage.setItem(
            `${key ?? "pinia"}-${store.$id}-${element}`,
            store.$state[element]
          );
        });
      });
    }
    // const { store } = context;
    // const data = sessionStorage.getItem(`${key ?? "pinia"}-${store.$id}`);
    // if (Object.keys(needKeep).length === 0) {
    //   store.$subscribe(() => {
    //     sessionStorage.setItem(
    //       `${key ?? "pinia"}-${store.$id}`,
    //       toRaw(store.$state)
    //     );
    //   });
    // } else {
    //   needKeep.includes(store.$id) &&
    //     store.$subscribe(() => {
    //       sessionStorage.setItem(
    //         `${key ?? "pinia"}-${store.$id}`,
    //         toRaw(store.$state)
    //       );
    //     });
    // }
    // return {
    //   ...data,
    // };
  };
};

export default piniaPlugin;
