/* 
  @Description：当前页面有哪些按钮的权限
*/
import { computed } from "vue";
import { useMenuStore } from "src/store/index";
import router from "src/router/index";
export default function () {
  const MenuStore = useMenuStore();
  /* 
    匹配页面权限里面的按钮字段获取当前用户有该页面哪些按钮的权限
*/
  const btnArray = computed(() => {
    return MenuStore.menuData.find(
      (element) => element.name === router.currentRoute.value.name
    ).btnArray;
  });
  return {
    btnArray,
  };
}
