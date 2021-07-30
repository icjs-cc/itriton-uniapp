<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示效果</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line">
					<t-highlight value="这是关键字高亮组件,我要高亮关键字" keyword="关键字" color="red"></t-highlight>
				</view>
			</view>
		</view>
		<t-mp-tips @close="close"></t-mp-tips>
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
