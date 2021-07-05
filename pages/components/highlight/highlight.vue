<template>
	<view class="c-demo">
		<view class="c-demo-wrap">
			<view class="c-demo-title">演示效果</view>
			<view class="c-demo-area">
				<view class="c-demo-result-line">
					<c-highlight value="这是关键字高亮组件,我要高亮关键字" keyword="关键字" color="red"></c-highlight>
				</view>
			</view>
		</view>
		<c-mp-tips @close="close"></c-mp-tips>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad({title}) {
			this.setNavigationBarTitle(title)
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">

</style>
