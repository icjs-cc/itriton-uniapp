<template>
	<view class="t-demo">
		<view class="t-demo-wrap mt-20">
			<view class="t-demo-title">演示定时缓存</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line mt-0" @click="setCache()">
					设置定时缓存（this.$t.setCache）
				</view>
				<view class="t-demo-result-line" @click="getCache()">
					获取定时缓存（this.$t.getCache）
				</view>
				<view class="t-demo-result-line" @click="removeCache()">
					移除定时缓存（this.$t.removeCache）
				</view>
				<view class="t-demo-result-line" @click="clearCache()">
					清除定时缓存（this.$t.clearCache）
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
				this.$t.setCache("cache", "定时缓存10秒", 10)
				this.$showToast("设置定时缓存成功")
			},
			getCache(){
				const cache = this.$t.getCache("cache")
				this.$showToast(`定时缓存：${cache}`)
			},
			removeCache(){
				this.$t.removeCache("cache")
				this.$showToast(`移除定时缓存成功`)
			},
			clearCache(){
				this.$t.clearCache()
				this.$showToast(`清除所有定时缓存成功`)
			}
		}
	}
</script>

<style>

</style>
