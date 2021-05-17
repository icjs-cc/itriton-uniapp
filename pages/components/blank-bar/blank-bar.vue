<template>
	<view>
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
		<c-blank-bar background="#dddddd" :is-fixed="true" :is-bottom="true" safeAreaInsetBottom>
			<button type="default">xxx</button>
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
		onLoad(options) {
			uni.setNavigationBarTitle({
			    title: options.title
			});
		},
		methods:{
			handleSend(val) {
				this.isStart = val
			},
		}
	}
</script>

<style lang="scss">
	
</style>

