import { createVNode, render, h } from "vue";
import { ElIcon } from "element-plus";
import { InfoFilled, CloseBold } from "@element-plus/icons-vue";
import "./index.css";

type MessageType = "success" | "info" | "error" | "warn";
enum MessageEnum {
  success = "green",
  info = "#ccc",
  error = "red",
  warn = "yellow",
}

class MesageManage {
  sumMessageNumber: any;
  currentMessageNumber: number;
  second: number;
  isManualClose: boolean;
  [k: string]: any | number | boolean;
  static getInstance: () => any;

  constructor() {
    // 当前弹窗的数量
    this.currentMessageNumber = 1;
    // 当前批量创建的弹窗数量
    this.sumMessageNumber = 1;
    // 弹窗全局关闭时间的默认值
    this.second = 3000;
    // 弹窗全局是否打开可手动关闭功能的默认值
    this.isManualClose = false;
  }

  computeSumMessageNumber(number: number, reset: boolean = false) {
    if (reset) {
      // 重置数据
      this.sumMessageNumber = number;
    }
    this.sumMessageNumber = this.sumMessageNumber + number;
  }

  computeCurrentMessageNumber(number: number) {
    this.currentMessageNumber = this.currentMessageNumber + number;
  }

  getCurrentData(propertyName: string) {
    return this[propertyName] ?? null;
  }

  changeConfig(record: string, content: number | boolean) {
    console.log(123, this);
    console.log(this[record]);
    this[record] = content;
  }
}

MesageManage.getInstance = (function () {
  let instance: any;
  return function () {
    if (!instance) {
      instance = new MesageManage();
    }
    return instance;
  };
})();

/* 
  type: message的类型，给予不同的颜色
  content：message提示的内容
  second：弹窗经过xx时间自动关闭，默认3秒
  isManualClose：弹窗是否可以手动关闭
*/
function auxiliary(type: MessageType) {
  const mesageManage = MesageManage.getInstance();
  return function (
    content: string,
    second: number = mesageManage.getCurrentData("second"),
    isManualClose: boolean = mesageManage.getCurrentData("isManualClose")
  ) {
    const childNode = [
      h(
        "div",
        {
          class: "custom-message-content-container",
        },
        [
          h(ElIcon, [h(InfoFilled)]),
          h("div", [content]),
          isManualClose
            ? h(ElIcon, { onClick: createNodeChild }, [h(CloseBold)])
            : null,
        ]
      ),
    ];
    const message = h(
      "div",
      {
        style: {
          color: MessageEnum[type],
          top: `${mesageManage.getCurrentData("sumMessageNumber") * 50}px`,
        },
        class: "custom-message-container animation-size-inflation",
      },
      childNode
    );
    // 初始化组件生成vdom
    const vm = createVNode(message);
    // 创建容器，也可以用已经存在的
    const container = document.createElement("div");
    //render通过patch 变成dom
    render(vm, container);
    // 弹窗挂到任何你想去的地方,默认挂载到body身上
    document.body.appendChild(container);
    mesageManage.computeSumMessageNumber(1);
    mesageManage.computeCurrentMessageNumber(1);
    function createNodeChild() {
      /* 
        因为可以手动点击关闭，所有此时message节点会在document.body中执行,
        如果不加以判断直接进行删除操作，会报错
      */
      if (container.parentNode === document.body) {
        document.body.removeChild(container);
        /* 
          先减去1，再去判断是否是等于1
        */
        mesageManage.computeCurrentMessageNumber(-1);
        if (mesageManage.getCurrentData("currentMessageNumber") === 1) {
          mesageManage.computeSumMessageNumber(1, true);
        }
      }
    }
    function createNode() {
      let Timer: any = setTimeout(() => {
        createNodeChild();
        clearTimeout(Timer);
      }, second);
    }
    createNode();
  };
}

const CustomMessageSync = (function () {
  let func: null | Function;
  const mesageManage = MesageManage.getInstance();
  return function (
    type: MessageType,
    content: string,
    second: number = mesageManage.getCurrentData("second"),
    isManualClose: boolean = mesageManage.getCurrentData("isManualClose")
  ) {
    if (!func) {
      func = auxiliary(type);
    }
    func(content, second, isManualClose);
  };
})();

// 给默认四种模式
CustomMessageSync.info = auxiliary("info");
CustomMessageSync.error = auxiliary("error");
CustomMessageSync.warn = auxiliary("warn");
CustomMessageSync.success = auxiliary("success");

// 配置CustomMessageManageConfig的全局配置
const SetCustomMessageManageConfigSync = function (
  second?: number,
  isManualClose?: boolean
) {
  const mesageManage = MesageManage.getInstance();
  second && mesageManage.changeConfig("second", second);
  isManualClose && mesageManage.changeConfig("isManualClose", isManualClose);
};

export const CustomMessage = CustomMessageSync;
export const SetCustomMessageManageConfig = SetCustomMessageManageConfigSync;
