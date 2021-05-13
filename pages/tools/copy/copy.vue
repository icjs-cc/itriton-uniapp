<template>
	<view class="c-demo">
		<view class="c-demo-wrap">
			<view class="c-demo-title">演示效果</view>
			<view class="c-demo-area">
				<view class="c-demo-result-line">
					<view @click="setClipboardData">复制内容（this.$c.setClipboardData）</view>
				</view>
				<view class="c-demo-result-line">
					<view @click="getClipboardData">获取内容（this.$c.getClipboardData）</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			uni.setNavigationBarTitle({
			    title: options.title
			});
		},
		methods:{
			setClipboardData(){
				this.$c.setClipboardData("复制内容")
			},
			getClipboardData(){
				this.$c.getClipboardData().then(res=>{
					this.$showToast(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>

