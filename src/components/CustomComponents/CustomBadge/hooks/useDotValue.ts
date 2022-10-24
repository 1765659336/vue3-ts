import { computed, Ref, ref } from "vue";

export default function (props: any, emits: any) {
  // title提示内容
  const modelTitleValue = ref();
  // 适配当前字数的宽度
  const dotNumber: Ref<number> = ref(1);

  const modelValue = computed({
    get: () => {
      if (typeof props.modelValue === "number") {
        if (props.modelValue > 99) {
          dotNumber.value = 3;
          return "99+";
        } else {
          dotNumber.value = String(props.modelValue).length;
          return props.modelValue;
        }
      } else if (typeof props.modelValue === "string") {
        // 如果总体字符长度超过3个，则显示title（中文算一个，字母算半个）
        let strLength = 0;
        for (let i = 0; i < props.modelValue.length; i++) {
          if (props.modelValue.charCodeAt(i) > 255) {
            strLength++;
          } else {
            strLength += 0.5;
          }
        }
        if (strLength > 2) {
          modelTitleValue.value = props.modelValue;
          dotNumber.value = 3;
        } else {
          // 当值未传或者为""时，最小长度不能为0
          dotNumber.value = props.modelValue.length
            ? props.modelValue.length
            : 1;
        }
      }
      return props.modelValue;
    },
    set: () => {
      return emits("update:modelValue");
    },
  });

  return {
    dotNumber,
    modelTitleValue,
    modelValue,
  };
}
