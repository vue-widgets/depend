# vue-widgets-depend

依赖触发，并重新渲染

## 安装

```
npm install --save vue-widgets-depend
```

## 使用

```js
import VWDepend from 'vue-widgets-depend';

Vue.use(VWDepend);

// xx.vue
<template>
   <vw-depend :depend1="propA" ... />
</template>

```

## 场景

触发属性依赖计算，一般配合计算props属性
