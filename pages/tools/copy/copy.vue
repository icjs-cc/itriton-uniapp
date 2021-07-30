<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示效果</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line">
					<view @click="setClipboardData">复制内容（this.$t.setClipboardData）</view>
				</view>
				<view class="t-demo-result-line">
					<view @click="getClipboardData">获取内容（this.$t.getClipboardData）</view>
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
		methods:{
			setClipboardData(){
				this.$t.setClipboardData("复制内容")
			},
			getClipboardData(){
				this.$t.getClipboardData().then(res=>{
					this.$showToast(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>

