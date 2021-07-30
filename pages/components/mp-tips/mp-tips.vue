<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示效果</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line">
					<!-- #ifdef MP-WEIXIN -->
					恭喜你啦！看到我了～
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					很抱歉哦，仅支持微信小程序查看哦～
					<!-- #endif -->
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
			close(){
				console.log("close")
			}
		}
	}
</script>

<style lang="scss">

</style>
