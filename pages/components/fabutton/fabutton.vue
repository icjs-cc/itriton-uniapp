<template>
	<view class="c-demo">
		<view class="c-demo-wrap">
			<view class="c-demo-title">演示效果</view>
			<view class="c-demo-area">
				<view class="c-demo-result-line">fabutton是否停靠：{{ isDock }}</view>
			</view>
		</view>
		<view class="c-item-title mt-20">是否停靠</view>
		<subsection :list="list" v-model="current" @change="handleChange"></subsection>
		<c-fabutton :is-dock="isDock">
			<view class="flex align-center text-xxl mb-5 text-white">+</view>
		</c-fabutton>
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
		onLoad(options) {
			uni.setNavigationBarTitle({
			    title: options.title
			});
		},
		methods:{
			handleChange(val) {
				this.isDock = !val
			},
		}
	}
</script>

<style lang="scss">
	
</style>
