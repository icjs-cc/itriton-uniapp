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
			<view class="text-white text-xxl" @click="handleAdd">+</view>
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
				console.log("add")
			}
		}
	}
</script>

<style lang="scss">

</style>
