import { Ref } from "vue";

export default function useBrush(canvasRef: Ref) {
  let isDrawing = false;
  const ctx = canvasRef.getContext("2d");
  canvasRef.addEventListener("mousedown", (e) => {
    isDrawing = true;
    // 给canvas绘制定位
    ctx.moveTo(e.pageX, e.pageY);
  });
  canvasRef.addEventListener("mousemove", (e) => {
    if (isDrawing) {
      // 绘制路径
      ctx.lineTo(e.pageX, e.pageY);
      // 粘上颜色
      ctx.stroke();
    }
  });
  canvasRef.addEventListener("mouseup", (e) => {
    isDrawing = false;
  });
}
