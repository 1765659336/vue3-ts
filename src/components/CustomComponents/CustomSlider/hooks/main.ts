import { onMounted, Ref, ref } from "vue";

export default function (
  emits: any,
  knob: Ref<HTMLDivElement>,
  left: Ref<HTMLDivElement>,
  container: Ref<HTMLDivElement>,
  props: any
) {
  // 当前鼠标位置
  let mouseX = ref(0);
  let mouseY = ref(0);
  // 滑块距离左侧的距离
  let leftWidth = ref(0);
  // 鼠标移动事件
  const mouseMoveHandler = function (e: MouseEvent) {
    // 鼠标移动的距离
    const dx = e.clientX - mouseX.value;
    const dy = e.clientY - mouseY.value;
    const containerWidth = container.value.offsetWidth;
    let newLeftWidth = ((leftWidth.value + dx) * 100) / containerWidth;
    // 限制范围在 0 - 100的整数
    newLeftWidth = Math.round(Math.max(newLeftWidth, 0));
    newLeftWidth = Math.round(Math.min(newLeftWidth, 100));
    left.value.style.width = `${newLeftWidth}%`;
    emits("update:sliderValue", newLeftWidth);
  };

  // 当松开鼠标时触发
  const mouseUpHandler = function () {
    // 移除事件
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  // 处理 mousedown 事件
  const mouseDownHandler = function (e: MouseEvent) {
    // 获取当前鼠标位置
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
    leftWidth.value = left.value.getBoundingClientRect().width;
    // 在 `document` 上添加事件
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  onMounted(() => {
    knob.value.addEventListener("mousedown", mouseDownHandler);
    // 读取传递进来的默认值，设置滑块的位置
    left.value.style.width = `${props.sliderValue}%`;
  });

  return {
    knob,
    left,
    mouseDownHandler,
  };
}
