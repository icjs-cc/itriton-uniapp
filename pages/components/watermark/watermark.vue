<template>
	<c-watermark :watermark="['LDCake-UI', '绿豆糕组件版本所有', '2021-06-01']" :font-size="13">
		<view class="c-demo">
			<view class="c-demo-wrap">
				<view class="c-demo-title">演示效果</view>
				<view class="c-demo-area">
					页面背景水印效果
				</view>
			</view>
		</view>
	</c-watermark>
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
