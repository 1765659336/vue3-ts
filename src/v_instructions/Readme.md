## 注意事项
### 1.指令使用时，不能有多个根节点
Vue3 中开始支持Fragment，也就是说，我们可以在一个组件中保留多个根节点。
```vue
<template>
  <div>Hello</div>
  <div>World</div>
</template>
```
这会要是在一个多根组件上使用自定义指令，指令会被忽略，并且会抛出一个警告。如果只是单根组件上使用自定义指令依旧和 Vue2 一样指令会应用在最外层节点上。
### 2.v-copy存在兼容性问题
document.execCommand('Copy')存在兼容性问题，所以该指令会存在兼容性问题