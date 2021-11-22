<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示效果</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line" :class="[{'spin': !isFullscreen}]">
					<view class="t-flex t-justify-center">《鸟鸣涧》</view>
					<view>
						人闲桂花落，夜静春山空。
					</view>
					<view>
						月出惊山鸟，时鸣春涧中。
					</view>
					<t-spin ref="spin" isFix :isFullscreen="isFullscreen" v-if="isShow"></t-spin>
				</view>
			</view>
		</view>
		<view class="t-item-title t-mt-20">状态切换</view>
		<subsection :list="list" v-model="current" @change="handleChange"></subsection>

		<view class="t-item-title t-mt-20">是否全屏</view>
		<subsection :list="fullscreenList" v-model="fullscreenCurrent" @change="handleFullscreen"></subsection>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: '显示'
					},
					{
						name: '隐藏'
					}
				],
				fullscreenList: [
					{
						name: '否'
					},
					{
						name: '是'
					}
				],
				current: 0,
				fullscreenCurrent: 0,
				isShow: true,
				isFullscreen: false
			};
		},
		onLoad({title}) {
			this.setNavigationBarTitle(title)
		},
		methods: {
			handleChange(val) {
				if(val===0){
					this.$refs.spin.show()
				}else{
					this.$refs.spin.hide()
				}
				// this.isShow = !val
			},
			handleFullscreen(val) {
				this.isFullscreen = val === 0 ? false : true
				setTimeout(() => {
					this.isFullscreen = false
					this.fullscreenCurrent = 0
				}, 3000)
			}
		}
	}
</script>

<style lang="scss">
	.spin {
		position: relative;
	}
</style>
