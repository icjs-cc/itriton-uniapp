<template>
	<view>
		<t-blank-bar background="#f0f0f0" :is-fixed="true">
			<view class="t-pl-5 t-pr-5 t-text-df">
				这是固定的空白栏
			</view>
		</t-blank-bar>
		<view class="t-demo">
			<view class="t-demo-wrap mt-30">
				<view class="t-demo-title">演示效果</view>
				<view class="t-demo-area">
					<view class="t-demo-result-line">
						用于提交栏、搜索栏等固定位置，适配安全区域
					</view>
				</view>
			</view>
		</view>
		<t-blank-bar background="#f0f0f0" :is-fixed="true" :is-bottom="true" safeAreaInsetBottom>
			<view class="pl-5 pr-5">
				<button :style="[{background: main_color, color: '#FFF'}]" class="t-button" type="default">提交</button>
			</view>
		</t-blank-bar>
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
	.t-button{
		height: 80rpx;
		font-size: 32rpx;
		border-radius: 80rpx;
	}
</style>

