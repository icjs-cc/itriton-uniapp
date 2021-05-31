<template>
	<view class="index">
		<view class="flex">
			<view class="flex flex-direction justify-center">
				<view class="flex align-center">
					<image class="index-logo" src="/static/logo.png" mode=""></image>
					<view class="index-title text-bold">Ldcake UI</view>
				</view>
				<view class="text-df text-grey mt-10">基于uni-app的轻量、可靠UI组件库</view>
			</view>
		</view>
		<view class="index__content">
			<view class="text-gray text-df mb-20">基础组件</view>
			<navigator class="index__content-cell" :url="`${item.url}?title=${item.name}`"
					v-for="(item,index) in baseList" :key="index">
				<text>{{item.name}}</text>
				<text class="index__content-arrow"></text>
			</navigator>
			<view class="text-gray text-df mb-20">工具库</view>
			<navigator class="index__content-cell" :url="`${item.url}?title=${item.name}`"
					v-for="(item,index) in toolList" :key="`tool_${index}`">
				<text>{{item.name}}</text>
				<text class="index__content-arrow"></text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseList: [
					{
						name: '日期选择器（date-picker）',
						url: '/pages/components/date-picker/date-picker'
					},
					{
						name: '加载中（spin）',
						url: '/pages/components/spin/spin'
					},
					{
						name: '悬浮按钮（fabutton）',
						url: '/pages/components/fabutton/fabutton'
					},
					{
						name: '右上角引导（mp-tips）',
						url: '/pages/components/mp-tips/mp-tips'
					},
					{
						name: '获取验证码（captcha）',
						url: '/pages/components/captcha/captcha'
					},
					{
						name: '空白栏（blank-bar）',
						url: '/pages/components/blank-bar/blank-bar'
					},
					{
						name: '信号（signal）',
						url: '/pages/components/signal/signal'
					},
				],
				toolList: [
					{
						name: '数据缓存（storage）',
						url: '/pages/tools/storage/storage'
					},
					{
						name: '定时缓存（cache）',
						url: '/pages/tools/cache/cache'
					},
					{
						name: '剪贴板（clipboard）',
						url: '/pages/tools/copy/copy'
					},
				]
			}
		}
	}
</script>

<style lang="scss">
	.index {
		padding: 80rpx 50rpx;

		&-logo {
			height: 80rpx;
			width: 80rpx;
		}

		&-title {
			font-size: 60rpx;
			margin-left: 20rpx;
		}

		&__content {
			margin-top: 60rpx;
			
			&-cell {
				position: relative;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 0 0 20rpx;
				padding: 0 30rpx;
				color: #323233;
				font-weight: 600;
				font-size: 28rpx;
				line-height: 80rpx;
				background: #f7f8fa;
				border-radius: 99rpx;
				-webkit-transition: background 0.3s;
				transition: background 0.3s;
			}
			
			&-arrow{
				right: 30rpx;
				width:18rpx;
				height: 18rpx;
				border-right: 1rpx solid #999;
				border-bottom: 1rpx solid #999;
				-webkit-transform: rotate(-45deg);
			}
		}
	}
</style>
