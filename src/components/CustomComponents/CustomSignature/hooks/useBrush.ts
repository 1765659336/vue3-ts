import { Ref } from "vue";

export default function useBrush(
  canvasRef: Ref<HTMLCanvasElement>,
  props: any,
  emits: any,
  width: number,
  height: number
) {
  // 控制是否绘制
  let isDrawing = false;
  // 上一次是否回退过
  let lastTimeLock = false;
  const ctx: CanvasRenderingContext2D | null = canvasRef.value.getContext("2d");
  // 存放画布的状态
  let cacheData: Array<any> = [ctx?.getImageData(0, 0, width, height)];
  // 计算canvas左上角原点距离网页左上角原点左边偏移量
  let offsetLeft = canvasRef.value.getBoundingClientRect().left;
  // 计算canvas左上角原点距离网页左上角原点顶部偏移量
  let offsetTop = canvasRef.value.getBoundingClientRect().top;
  canvasRef.value.addEventListener("mousedown", (e) => {
    // 开始绘画
    isDrawing = true;
    if (ctx) {
      ctx.beginPath();
      // 设置画笔的粗细
      ctx.lineWidth = props.lineWidth;
      // 设置字体的颜色
      ctx.strokeStyle = props.strokeStyle;
      // 给canvas绘制定位
      ctx.moveTo(e.pageX - offsetLeft, e.pageY - offsetTop);
      if (lastTimeLock) {
        // 如果上一次是回退，则将开始绘画前的这种状态也保存起来，不然在回退之后再绘画再回退，会丢失这次画布的状态
        cacheData.push(ctx.getImageData(0, 0, width, height));
        lastTimeLock = false;
      }
    }
  });
  canvasRef.value.addEventListener("mousemove", (e) => {
    // 只有点击滑块开启绘画时，鼠标移动才会执行canvas绘画
    if (isDrawing && ctx) {
      // 绘制路径
      ctx.lineTo(e.pageX - offsetLeft, e.pageY - offsetTop);
      // 粘上颜色
      ctx.stroke();
    }
  });
  // 鼠标抬起
  canvasRef.value.addEventListener("mouseup", (e) => {
    // 是否绘画的值改为false
    isDrawing = false;
    if (ctx) {
      // 将这次绘画完的值存起来，为了回退用
      cacheData.push(ctx.getImageData(0, 0, width, height));
    }
  });

  // 清空
  const clear = function () {
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
      cacheData = [ctx.getImageData(0, 0, width, height)];
    }
  };

  // 下载
  const downLoad = function () {
    canvasRef.value.toBlob((blob: Blob | null) => {
      if (blob) {
        const a = document.createElement("a");
        document.body.append(a);
        a.download = props.doloadFileName;
        a.href = URL.createObjectURL(blob);
        a.click();
        a.remove();
      }
    });
  };

  // 回退
  const fallback = function () {
    // 初始化渲染的时候，画板为空，cacheData.length === 1时，不能调用putImageData方法否则报错
    if (!lastTimeLock && cacheData.length > 1) {
      // 上一次是新画的笔画，那么需要多pop一次
      cacheData.pop();
    }
    if (ctx) {
      if (cacheData.length === 1) {
        // 如果长度为1时，一直重置页面为空白页，也就是cacheData一开始给的默认值
        ctx.putImageData(cacheData[0], 0, 0);
      } else {
        // 否则回退到上一次画布的模样
        ctx.putImageData(cacheData.pop(), 0, 0);
      }
    }
    // 将上一次是否为回退的值改为true
    lastTimeLock = true;
  };

  // 保存
  const save = function () {
    // 异步
    canvasRef.value.toBlob((blob: Blob | null) => {
      emits("saveCallbackBlob", blob);
    });
    // 同步
    const base = canvasRef.value.toDataURL();
    emits("saveCallbackBase", base);
  };

  return {
    clear,
    downLoad,
    fallback,
    save,
  };
}
