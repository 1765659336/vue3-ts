import { PageSql } from "src/constraint/sqlsCommon";
import { onMounted, reactive } from "vue";

export default function (menu: PageSql) {
  const menuTree = reactive<
    Array<{
      title: string;
      pageId: number;
      // 暂时只考虑到二级菜单
      children: Array<{
        title: string;
        path: string;
        pageId: number;
        children?: Array<{ title: string; path: string }>;
      }>;
    }>
  >([]);
  onMounted(() => {
    menu.forEach((item) => {
      if (item.level === 1) {
        menuTree.push({
          title: item.mate.title,
          pageId: item.pageId,
          children: [],
        });
      }
    });
    menu.forEach((item) => {
      if (item.level === 2) {
        menuTree.forEach((menuItem) => {
          if (menuItem.pageId === item.parentPageId) {
            menuItem.children.push({
              title: item.mate.title,
              path: item.path,
              pageId: item.pageId,
            });
          }
        });
      }
    });
  });
  return {
    menuTree,
  };
}
