import { reactive, Ref } from "vue";

export default function useBrush(
  canvasRef: Ref<HTMLElement>,
  width: string,
  height: string
) {
  let isDrawing = false;
  const ctx = canvasRef.value.getContext("2d");
  let cacheData: Array<any> = [];
  canvasRef.value.addEventListener("mousedown", (e) => {
    isDrawing = true;
    // 给canvas绘制定位
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.moveTo(e.pageX, e.pageY);
  });
  canvasRef.value.addEventListener("mousemove", (e) => {
    if (isDrawing) {
      // 绘制路径
      ctx.lineTo(e.pageX, e.pageY);
      // 粘上颜色
      ctx.stroke();
    }
  });
  canvasRef.value.addEventListener("mouseup", (e) => {
    isDrawing = false;
    cacheData.push(ctx.getImageData(0, 0, width, height));
    console.log(cacheData);
  });

  // 清空
  const clear = function () {
    ctx.clearRect(0, 0, width, height);
  };

  // 下载
  const downLoad = function () {
    canvasRef.value.toBlob((blob) => {
      const a = document.createElement("a");
      document.body.append(a);
      a.download = `签名.png`;
      a.href = URL.createObjectURL(blob);
      a.click();
      a.remove();
    });
  };

  // 回退
  const fallback = function () {
    ctx.putImageData(cacheData.pop(), 0, 0);
  };

  return {
    clear,
    downLoad,
    fallback,
  };
}
