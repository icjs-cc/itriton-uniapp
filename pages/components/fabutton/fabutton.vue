<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示效果</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line">fabutton是否停靠：{{ isDock }}</view>
			</view>
		</view>
		<view class="t-item-title mt-20">是否停靠</view>
		<subsection :list="list" v-model="current" @change="handleChange"></subsection>
		<t-fabutton :is-dock="isDock">
			<view class="flex align-center text-xxl mb-5 text-white">+</view>
		</t-fabutton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: '是'
					},
					{
						name: '否'
					}
				],
				current: 0,
				isDock: true
			}
		},
		onLoad({title}) {
			this.setNavigationBarTitle(title)
		},
		methods:{
			handleChange(val) {
				this.isDock = !val
			}
		}
	}
</script>

<style lang="scss">
	
</style>
