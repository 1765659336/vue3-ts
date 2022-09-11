/* 
  @Description:消息订阅与发布模式全局事件总线
*/
export default function () {
  interface IMessageQueue {
    [k: string]: Array<Function>;
  }
  class Bus {
    // 消息队列
    messageQueue: IMessageQueue = {};
    $on(name: string, fn: Function) {
      /* 判断标识是否存在，存在就操作对应标识已经存在的函数数组，否则就新建一个空数组 */
      this.messageQueue[name] = this.messageQueue[name] || [];
      this.messageQueue[name].push(fn);
    }
    $emit(name: keyof typeof this.messageQueue, ...args: Array<any>) {
      if (this.messageQueue[name]) {
        /* 循环对应标识的函数数组，并将所有的参数传递给数组中每一项函数执行 */
        this.messageQueue[name].forEach((cb) => cb(...args));
      }
    }
    $off(name: keyof typeof this.messageQueue) {
      if (name) {
        // 删除消息队列中对应的标识属性
        delete this.messageQueue[name];
      } else {
        /* 如果直接调用$bus.$off()不传入name，此时name为undefined，消息队列清空 */
        this.messageQueue = {};
      }
    }
  }
  return {
    Bus,
  };
}
