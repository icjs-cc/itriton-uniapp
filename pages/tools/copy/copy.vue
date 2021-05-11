<template>
	<view class="c-demo">
		<view class="c-demo-wrap">
			<view class="c-demo-title">演示效果</view>
			<view class="c-demo-area">
				<view class="c-demo-result-line">
					<view @click="copy">复制内容（this.$c.setClipboardData）</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			copy(){
				this.$c.setClipboardData("复制内容")
			}
		}
	}
</script>

<style lang="scss">
	
</style>

