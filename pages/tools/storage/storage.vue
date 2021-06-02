<template>
	<view class="c-demo">
		<view class="c-demo-wrap">
			<view class="c-demo-title">演示缓存</view>
			<view class="c-demo-area">
				<view class="c-demo-result-line mt-0" @click="setStorage()">
					设置缓存（this.$c.setStorage）
				</view>
				<view class="c-demo-result-line" @click="getStorage()">
					获取缓存（this.$c.getStorage）
				</view>
				<view class="c-demo-result-line" @click="removeStorage()">
					移除缓存（this.$c.removeStorage）
				</view>
				<view class="c-demo-result-line" @click="clearStorage()">
					清除缓存（this.$c.clearStorage）
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
				this.$c.setStorage("storage", "缓存")
				this.$showToast("设置缓存成功")
			},
			getStorage(){
				const storage = this.$c.getStorage("storage")
				this.$showToast(`缓存数据：${storage}`)
			},
			removeStorage(){
				this.$c.removeStorage("storage")
				this.$showToast(`移除缓存成功`)
			},
			clearStorage(){
				this.$c.clearStorage()
				this.$showToast(`清除所有缓存成功`)
			}
		}
	}
</script>

<style>

</style>
