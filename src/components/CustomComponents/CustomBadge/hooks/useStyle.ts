import { Ref } from "vue";

export default function (props: any, dotNumber: Ref<number>) {
  const renderStyle = function () {
    return {
      "--custom-badge-font-size--": props.fontSize,
      "--custom-badge-font-number--": dotNumber.value,
      "--custom-badge-color--": props.initStyle.color,
      "--custom-badge-background-color--": props.initStyle.backgroundColor,
    };
  };

  return {
    renderStyle,
  };
}
