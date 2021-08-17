<template>
	<view>
		<view class="t-demo">
			<view class="t-demo-wrap">
				<view class="t-demo-title">演示效果</view>
				<view class="t-demo-area">
					<view class="t-demo-result-line">用于商品详情/活动详情页展示用户消费消息</view>
				</view>
			</view>
		</view>
		<t-barrage :list="list" :row="3">
			<template v-slot:scope="{item}">
				<view class="barrage">{{item.title}}</view>
			</template>
		</t-barrage>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				list: [
					{id: 1, image: '', title: '用户18*购买了商品'},
					{id: 2, image: '', title: '用户13*购买了商品'},
					{id: 3, image: '', title: '用户17*购买了商品'},
					{id: 3, image: '', title: '用户19*购买了商品'},
					{id: 3, image: '', title: '用户13*购买了商品'}
				]
			}
		},
		onLoad({title}) {
			this.setNavigationBarTitle(title)
		},
	}
</script>

<style>
.barrage{
	width: 330rpx;
	background-color: rgba(0,0,0,.5);
	color: #FFF;
	border-radius: 25rpx;
	margin-bottom: 10rpx;
	font-size: 24rpx;
	padding: 5rpx 10rpx;
}
</style>
