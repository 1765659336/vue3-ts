import { onMounted, onUnmounted, Prop } from "vue";

export default function (
  echart: any,
  Echarts: any,
  props: { width: string; height: string; option: object }
) {
  onMounted(() => {
    let chart = echart.init(Echarts.value, "dark");
    //把配置和数据放这里
    chart.setOption(props.option);
    window.onresize = function () {
      // 自适应大小
      chart.resize();
    };
    onUnmounted(() => {
      echart.dispose;
    });

    return {};
  });
}
