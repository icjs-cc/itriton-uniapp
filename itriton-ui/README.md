# iTriton组件库

[![star](https://gitee.com/ibaleine-open-source/itriton-uniapp/badge/star.svg?theme=dark)](https://gitee.com/ibaleine-open-source/ibaleine-weapp/stargazers)
[![fork](https://gitee.com/ibaleine-open-source/itriton-uniapp/badge/fork.svg?theme=dark)](https://gitee.com/ibaleine-open-source/ibaleine-weapp/members)

[![ibaleine-weapp](https://img.shields.io/static/v1?label=Github&message=itriton-uniapp&color=orange)](https://github.com/icjs-cc/itriton-uniapp.git)

## 介绍

[@itriton/uniapp](http://itriton.icjs.ink/)，是基于[uni-app](https://uniapp.dcloud.io/)生态开发的组件库

## 特性

- 众多的常用组件，让您专注逻辑，事半功倍
- 按需引入，精简打包体积

## 安装

```bash
# npm方式安装
npm i @itriton/uniapp
```

## 快速上手

1. `main.js`引入iTriton库
```js
// main.js
import itriton from '@itriton/uniapp';
Vue.use(itriton);
```

2. `App.vue`引入基础样式(注意style标签需声明scss属性支持)
```css
/* App.vue */
<style lang="scss">
@import "@itriton/uniapp/index.scss";
</style>
```

3. `uni.scss`引入全局scss变量文件
```css
/* uni.scss */
@import "@itriton/uniapp/theme.scss";
```

4. `pages.json`配置easycom规则(按需引入)

```js
// pages.json
{
	"easycom": {
		// npm安装的方式不需要前面的"@/"，下载安装的方式需要"@/"
		// npm安装方式
		"^t-(.*)": "@itriton/uniapp/components/t-$1/t-$1.vue"
		// 下载安装方式
		// "^t-(.*)": "@/@itriton/uniapp/components/t-$1/t-$1.vue"
	},
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}
```

## 使用方法
配置easycom规则后，自动按需引入，无需`import`组件，直接引用即可。

```html
<template>
  <t-date-picker></t-date-picker>
</template>
```

## 版权信息
@itriton/uniapp遵循[MIT](https://en.wikipedia.org/wiki/MIT_License)开源协议，意味着您无需支付任何费用，也无需授权，即可将@itriton/uniapp应用到您的产品中。

