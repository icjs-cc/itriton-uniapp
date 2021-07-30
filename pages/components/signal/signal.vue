<template>
	<view>
		<view class="t-demo">
			<view class="t-demo-wrap">
				<view class="t-demo-title">演示效果</view>
				<view class="t-demo-area">
					<t-signal :active-index="3"></t-signal>
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
