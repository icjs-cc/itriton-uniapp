<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示效果</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line">
					组件效果看右侧
				</view>
			</view>
		</view>
		<t-sbutton>
			<view class="flex align-center justify-center text-white text-xxl mb-10" @click="handleAdd">
				<text>+</text>
			</view>
		</t-sbutton>
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
			handleAdd(){
				this.$it.$showToast({title: '您点击了我'})
			}
		}
	}
</script>

<style lang="scss">

</style>
