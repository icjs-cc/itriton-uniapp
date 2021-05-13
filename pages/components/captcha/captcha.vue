<template>
	<view class="c-demo">
		<view class="c-demo-wrap">
			<view class="c-demo-title">演示效果</view>
			<view class="c-demo-area">
				<view class="c-demo-result-line">
					<c-captcha :second="second" v-model="isStart" @send="handleSend"></c-captcha>
				</view>
			</view>
		</view>
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

