<template>
	<view class="t-demo">
		<view class="t-demo-wrap t-mt-20">
			<view class="t-demo-title">演示定时缓存</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line t-demo-result-line-max mt-0" @click="setCache()">
					设置定时缓存（this.$it.setCache）
				</view>
				<view class="t-demo-result-line t-demo-result-line-max" @click="getCache()">
					获取定时缓存（this.$it.getCache）
				</view>
				<view class="t-demo-result-line t-demo-result-line-max" @click="removeCache()">
					移除定时缓存（this.$it.removeCache）
				</view>
				<view class="t-demo-result-line t-demo-result-line-max" @click="clearCache()">
					清除定时缓存（this.$it.clearCache）
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
				this.$it.setCache("cache", "定时缓存10秒", 10)
				this.$showToast("设置定时缓存成功")
			},
			getCache(){
				const cache = this.$it.getCache("cache")
				this.$showToast(`定时缓存：${cache}`)
			},
			removeCache(){
				this.$it.removeCache("cache")
				this.$showToast(`移除定时缓存成功`)
			},
			clearCache(){
				this.$it.clearCache()
				this.$showToast(`清除所有定时缓存成功`)
			}
		}
	}
</script>

<style>

</style>
