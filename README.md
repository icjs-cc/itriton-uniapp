<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">绿豆糕组件库（ldcake-ui）</h3>
<h3 align="center">基于UNI-APP快速开发的组件库</h3>


## 说明

[绿豆糕组件库（ldcake-ui）](http://ldcake.icjs.ink/)，是基于[uni-app](https://uniapp.dcloud.io/)的UI组件库

## 特性

- 众多的常用组件，让您专注逻辑，事半功倍
- 按需引入，精简打包体积

## 安装

```bash
# npm方式安装
npm i ldcake-ui
```

## 快速上手

1. `main.js`引入ldcake库
```js
// main.js
import ldcake from 'ldcake-ui';
Vue.use(ldcake);
```

2. `App.vue`引入基础样式(注意style标签需声明scss属性支持)
```css
/* App.vue */
<style lang="scss">
@import "ldcake-ui/index.scss";
</style>
```

3. `uni.scss`引入全局scss变量文件
```css
/* uni.scss */
@import "ldcake-ui/theme.scss";
```

4. `pages.json`配置easycom规则(按需引入)

```js
// pages.json
{
	"easycom": {
		// npm安装的方式不需要前面的"@/"，下载安装的方式需要"@/"
		// npm安装方式
		"^c-(.*)": "ldcake-ui/components/c-$1/c-$1.vue"
		// 下载安装方式
		// "^c-(.*)": "@/ldcake-ui/components/c-$1/c-$1.vue"
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
	<c-date-picker></c-date-picker>
</template>
```

## 版权信息
绿豆糕组件库（ldcake-ui）遵循[MIT](https://en.wikipedia.org/wiki/MIT_License)开源协议，意味着您无需支付任何费用，也无需授权，即可将绿豆糕组件库（ldcake-ui）应用到您的产品中。
