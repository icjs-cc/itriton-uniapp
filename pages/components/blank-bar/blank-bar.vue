<template>
	<view>
		<c-blank-bar background="#f0f0f0" :is-fixed="true">
			<view class="pl-5 pr-5 text-df">
				这是固定的空白栏
			</view>
		</c-blank-bar>
		<view class="c-demo">
			<view class="c-demo-wrap mt-30">
				<view class="c-demo-title">演示效果</view>
				<view class="c-demo-area">
					<view class="c-demo-result-line">
						用于提交栏、搜索栏等固定位置，适配安全区域
					</view>
				</view>
			</view>
		</view>
		<c-blank-bar background="#f0f0f0" :is-fixed="true" :is-bottom="true" safeAreaInsetBottom>
			<view class="pl-5 pr-5">
				<button :style="[{background: main_color, color: '#FFF'}]" class="c-button" type="default">提交</button>
			</view>
		</c-blank-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				isStart: false,
				second: 20
			}
		},
		onLoad({title}) {
			this.setNavigationBarTitle(title)
		},
		methods:{
			handleSend(val) {
				this.isStart = val
			}
		}
	}
</script>

<style lang="scss">
	.c-button{
		height: 80rpx;
		font-size: 32rpx;
		border-radius: 80rpx;
	}
</style>

