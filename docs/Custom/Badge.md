## 基本使用

::: warning 注意
使用dot插槽时,modelValue值将不生效
:::

::: details 点我查看代码
```vue
<template>
  <CustomBadge :modelValue="100"
    ><CustomTag>数字超过99变为99+</CustomTag></CustomBadge
  >
  <br />
  <br />
  <CustomBadge modelValue="热卖"><CustomTag>中文</CustomTag></CustomBadge>
  <br />
  <br />
  <CustomBadge modelValue="hot" fontSize="20px"
    ><CustomTag>自定义字体大小</CustomTag></CustomBadge
  >
  <br />
  <br />
  <CustomBadge modelValue="敬请期待"
    ><CustomTag>超过3个字会显示...</CustomTag></CustomBadge
  >
  <br />
  <br />
  <CustomBadge
    modelValue="very hot"
    :initStyle="{
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(64, 158, 255)',
    }"
    ><CustomTag>自定义字体颜色和背景色</CustomTag></CustomBadge
  >
  <br>
  <br>
  <CustomBadge>
    <template #dot>
      <div>dot插槽</div>
    </template>
    <div class="div">默认插槽</div>
  </CustomBadge>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.div {
  width: 100px;
  height: 30px;
  border: 1px solid #000;
}
</style>

```
:::

<CustomBadgeTest></CustomBadgeTest>

## props属性
| 参数       | 参数说明                                | 数据类型 | 可选值                              | 默认值                                                         |
| ---------- | --------------------------------------- | -------- | ----------------------------------- | -------------------------------------------------------------- |
| modelValue | 任意值，当值为number且大于99时，显示99+ | any      | any                                 | ""空字符串                                                     |
| fontSize   | 字体大小                                | String   | 单位（px）                          | 12px                                                           |
| initStyle  | 自定义样式                              | Object   | color:String,backgroundColor:String | {color:rgb(255, 255, 255)",backgroundColor: "rgb(234, 12, 12)" |

## slot插槽

| 插槽名 | 说明                           |
| ------ | ------------------------------ |
| -      | 默认插槽，徽章添加到的目标节点 |
| dot    | dot徽章节点                    |

