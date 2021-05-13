<template>
	<view class="c-demo">
		<view class="c-demo-wrap">
			<view class="c-demo-title">演示效果</view>
			<view class="c-demo-area">
				<view class="c-demo-result-line">
					<!-- #ifdef MP-WEIXIN -->
					恭喜你啦！看到我了～
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					很抱歉哦，仅支持微信小程序查看哦～
					<!-- #endif -->
				</view>
			</view>
		</view>
		<c-mp-tips @close="close"></c-mp-tips>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
			    title: options.title
			});
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
