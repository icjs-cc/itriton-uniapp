<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示效果</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line">
					<t-vcode :second="second" v-model="isStart" @send="handleSend"></t-vcode>
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
		onLoad({
			title
		}) {
			this.setNavigationBarTitle(title)
		},
		methods: {
			handleSend(val) {
				this.isStart = val
			}
		}
	}
</script>

<style lang="scss">

</style>
