<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示缓存</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line mt-0" @click="setStorage()">
					设置缓存（this.$t.setStorage）
				</view>
				<view class="t-demo-result-line" @click="getStorage()">
					获取缓存（this.$t.getStorage）
				</view>
				<view class="t-demo-result-line" @click="removeStorage()">
					移除缓存（this.$t.removeStorage）
				</view>
				<view class="t-demo-result-line" @click="clearStorage()">
					清除缓存（this.$t.clearStorage）
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
			setStorage(){
				this.$t.setStorage("storage", "缓存")
				this.$showToast("设置缓存成功")
			},
			getStorage(){
				const storage = this.$t.getStorage("storage")
				this.$showToast(`缓存数据：${storage}`)
			},
			removeStorage(){
				this.$t.removeStorage("storage")
				this.$showToast(`移除缓存成功`)
			},
			clearStorage(){
				this.$t.clearStorage()
				this.$showToast(`清除所有缓存成功`)
			}
		}
	}
</script>

<style>

</style>
