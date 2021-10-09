<template>
	<view class="index">
		<view class="flex">
			<view class="flex flex-direction justify-center">
				<view class="flex align-center">
					<image class="index-logo" src="/static/logo.png" mode=""></image>
					<view>
						<view class="index-title text-bold">iTriton组件库</view>
						<view class="text-df text-grey mt-10 ml-20">基于uni-app生态开发的组件库</view>
					</view>
				</view>
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
			<view v-for="(item,index) in toolList" :key="item.url">
				<navigator class="index__content-cell" :url="`${item.url}?title=${item.name}`">
					<text>{{item.name}}</text>
					<text class="index__content-arrow"></text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	.index {
		padding: 80rpx 50rpx;

		&-logo {
			height: 100rpx;
			width: 100rpx;
		}

		&-title {
			font-size: 48rpx;
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
