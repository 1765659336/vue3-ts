## 基本使用

::: warning 警告
top和bottom同时传入，top的优先级比bottom高，同理left比right高
:::

::: details 点我查看代码
```vue
<template>
    <div class="container">
        <CustomAffix :top="100">
            <div>固定顶部100px</div>
        </CustomAffix>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.container {
  height: 600px;
  overflow: auto;
}
</style>
```
:::

<CustomAffixTest></CustomAffixTest>


## props属性
| 参数   | 参数说明        | 数据类型 | 可选值        | 默认值 |
| ------ | --------------- | -------- | ------------- | ------ |
| top  | 固定在top多少距离            | Number   | 单位（px） | -   |
| left | 固定在left多少距离            | Number   | 单位（px） | -   |

## slot插槽

| 插槽名 | 说明                 |
| ------ | -------------------- |
| -      | 默认插槽，固定的节点 |

