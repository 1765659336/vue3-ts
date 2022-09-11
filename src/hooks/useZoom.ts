/* 
  @Description：缩放
*/
export default function (
  drag: HTMLElement,
  scale: HTMLElement,
  box: HTMLElement
) {
  scale.onmousedown = function (e: MouseEvent) {
    //阻止冒泡 避免缩放触发移动事件
    e.stopPropagation();
    // 取消事件的默认动作
    e.preventDefault();
    // 定义position
    var position = {
      w: drag.offsetWidth, // 被缩放元素的offsetWidth
      h: drag.offsetHeight, // 被缩放元素的offsetHeight
      x: e.clientX, // 当前窗口鼠标指针的水平坐标
      y: e.clientY, // 当前窗口鼠标指针的垂直坐标
    };
    drag.onmousemove = function (ev: MouseEvent) {
      ev.preventDefault();
      // 设置最大缩放为30*30 Math.max取最大值
      var w = Math.max(30, ev.clientX - position.x + position.w);
      var h = Math.max(30, ev.clientY - position.y + position.h);

      // 设置最大的宽高
      w =
        w >= box.offsetWidth - drag.offsetLeft
          ? box.offsetWidth - drag.offsetLeft
          : w;
      h =
        h >= box.offsetHeight - drag.offsetTop
          ? box.offsetHeight - drag.offsetTop
          : h;
      drag.style.width = w + "px";
      drag.style.height = h + "px";
    };
    // 鼠标离开和抬起取消缩放
    drag.onmouseup = function () {
      drag.onmousemove = null;
      drag.onmouseup = null;
    };
    drag.onmouseleave = function () {
      drag.onmousemove = null;
      drag.onmouseup = null;
    };
  };
}
