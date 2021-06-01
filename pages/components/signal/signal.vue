<template>
	<view>
		<view class="c-demo">
			<view class="c-demo-wrap">
				<view class="c-demo-title">演示效果</view>
				<view class="c-demo-area">
					<c-signal :active-index="3"></c-signal>
				</view>
			</view>
		</view>
	</view>
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
