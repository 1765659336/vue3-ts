/* 
  @Description：拖拽
*/
export default function (node: HTMLElement) {
  // node.style.position = "relative";
  node.onmousedown = function (ev: MouseEvent) {
    // 浏览器兼容处理
    var e = ev || window.event;
    // 鼠标按下记录相对位置
    // 水平方向都距离 = 当前鼠标左边的距离 - 被拖拽元素距离左边的距离
    var offsetX = e.clientX - node.offsetLeft;
    // 垂直方向都距离 = 当前鼠标都上边的距离 - 被拖拽元素距离距离的距离
    var offsetY = e.clientY - node.offsetTop;
    // 鼠标移动和被拖拽的元素是相对的 这里是鼠标拖拽的物体在整个页面上移动 所以
    // move加在document上
    document.onmousemove = function (ev) {
      // 当前鼠标的事件对象
      var e = ev || window.event;
      // 定义 currentLeft  = 当前鼠标位置 - 距离左边的距离
      var currentLeft = e.clientX - offsetX;
      // 定义 currentTop = 当前鼠标上边位置 - 距离上边的距离
      var currentTop = e.clientY - offsetY;
      // 限制左出界 最左是 0
      // if (currentLeft <= 0) {
      //   currentLeft = 0;
      // }
      // 当前窗口的宽 浏览器兼容
      var windowWidth =
        document.documentElement.clientWidth || document.body.clientWidth;
      // 限制右边出界 如果大于当前窗口的宽 那么就让它等于当前窗口的宽减去当前元素的offsetWidth 也就是留在原地
      //   currentLeft = windowWidth - node.offsetWidth;
      // }
      // 设置上出界 最上边是 0
      // if (currentTop <= 0) {
      //   currentTop = 0;
      // }
      // 当前窗口的高 浏览器兼容
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // 限制下边出界 如果大于当前窗口的高 减去 本身的高 那么就让它等于 当前窗口的高减去本身的高
      // if (currentTop >= windowHeight - node.offsetHeight) {
      //   currentTop = windowHeight - node.offsetHeight;
      // }
      // 当前被拖拽元素的 left 值 等于上面计算出的 currentLeft
      node.style.left = currentLeft + "px";
      // 当前被拖拽元素的 top 值 等于上面计算出的 currentTop
      node.style.top = currentTop + "px";
    };
  };
  // 鼠标弹起取消拖拽 这里添加到 node 元素对象也可以的
  document.onmouseup = function () {
    document.onmousemove = null;
  };
}
