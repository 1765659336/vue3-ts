export default {
  beforeMount(el: any, binding: any) {
    el.$instance = document.createElement("div");
    // 获取当前节点身上的属性获取提示语
    const text = el.getAttribute("loading-text") || "";
    // 生成loading内部结构
    el.$instance.innerHTML = createLoadingInn(text);
    binding.value && toggleLoading(el, binding);
  },
  updated(el: any, binding: any) {
    binding.oldValue !== binding.value && toggleLoading(el, binding);
  },
  unmounted(el: any, binding: any) {
    el.$domInserted &&
      toggleLoading(el, { value: false, modifiers: binding.modifiers });
    el.$instance && (el.$instance = null);
  },
};

// 生成loading内部结构
function createLoadingInn(text = "") {
  // 创建CSS
  const loadingInnCSS = `
      .custom-loading-circular {
        height: 50px;
        width: 50px;
        animation: loading-rotate 2s linear infinite;
      }
      .custom-loading-circular-path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90, 150;
        stroke-dashoffset: 0;
        stroke-width: 2px;
        stroke: #409eff;
        stroke-linecap: round;
      }
      .custom-loading-text {
        font-size: 13px;
        color: #409eff;
        margin-top: 6px;
      }
      @keyframes loading-rotate {
        100% {
          transform: rotate(360deg);
        }
      }
    `;
  // 创建DOM
  const loadingInnHTML = `
    <svg class="custom-loading-circular" viewBox="25 25 50 50">
      <circle class="custom-loading-circular-path" cx="50" cy="50" r="20" fill="none"/>
    </svg>
    <div>${
      text ? '<span class="custom-loading-text">' + text + "</span>" : ""
    }</div>
    `;
  // 创建style节点获取head节点，把CSS直接加到style标签上，把style标签添加到head中成为子节点
  const styleNode = document.createElement("style");
  let headNode = document.querySelector("head");
  styleNode.setAttribute("type", "text/css");
  styleNode.innerHTML = loadingInnCSS;
  headNode
    ? headNode.appendChild(styleNode)
    : console.error("Failed to obtain the head node");
  return loadingInnHTML;
}

// 获取元素的相关CSS
function getStyle(el: any, attr) {
  return el.currentStyle
    ? el.currentStyle[attr]
    : window.getComputedStyle(el, false)[attr];
}

// 控制loading的显示与隐藏
function toggleLoading(el, binding) {
  if (binding.value) {
    insertDom(el, el.$instance, binding);
  } else {
    el.$instance.parentNode &&
      el.$instance.parentNode.removeChild(el.$instance);
  }
}

// 插入loading Dom
function insertDom(el, instance, binding) {
  // 给添加loading样式
  const styles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    "z-index": 1000,
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "column",
  };
  Object.keys(styles).forEach((property) => {
    instance.style[property] = styles[property];
  });
  // 给父级添加relative
  if (!["fixed", "absolute", "relative"].includes(getStyle(el, "position"))) {
    el.style.position = "relative";
  }
  // 修改父元素的背景色
  el.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  // 插入dom
  el.appendChild(instance);
  // 表明dom已插入
  el.domInserted = true;
}
