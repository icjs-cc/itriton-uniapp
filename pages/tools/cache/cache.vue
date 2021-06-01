<template>
	<view class="c-demo">
		<view class="c-demo-wrap mt-20">
			<view class="c-demo-title">演示定时缓存</view>
			<view class="c-demo-area">
				<view class="c-demo-result-line mt-0" @click="setCache()">
					设置定时缓存（this.$c.setCache）
				</view>
				<view class="c-demo-result-line" @click="getCache()">
					获取定时缓存（this.$c.getCache）
				</view>
				<view class="c-demo-result-line" @click="removeCache()">
					移除定时缓存（this.$c.removeCache）
				</view>
				<view class="c-demo-result-line" @click="clearCache()">
					清除定时缓存（this.$c.clearCache）
				</view>
			</view>
		</view>
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
		methods: {
			setCache(){
				this.$c.setCache("cache", "定时缓存10秒", 10)
				this.$showToast("设置定时缓存成功")
			},
			getCache(){
				const cache = this.$c.getCache("cache")
				this.$showToast(`定时缓存：${cache}`)
			},
			removeCache(){
				this.$c.removeCache("cache")
				this.$showToast(`移除定时缓存成功`)
			},
			clearCache(){
				this.$c.clearCache()
				this.$showToast(`清除所有定时缓存成功`)
			}
		}
	}
</script>

<style>

</style>
