<template>
	<t-watermark :watermark="['iTriton-UI', 'iTriton版本所有', '2021-06-01']" :font-size="13">
		<view class="t-demo">
			<view class="t-demo-wrap">
				<view class="t-demo-title">演示效果</view>
				<view class="t-demo-area">
					页面背景水印效果
				</view>
			</view>
		</view>
	</t-watermark>
</template>

<script>
	export default {
		onLoad({title}) {
			this.setNavigationBarTitle(title)
		},
	}
</script>

<style>

</style>
