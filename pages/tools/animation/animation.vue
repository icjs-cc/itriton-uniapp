<template>
	<view class="t-p-20">
		<view class="t-flex t-flex-wrap t-justify-between">
			<view
				class="t-bg-blue animation-cell"
				:class="[item.isAnimation ? item.animation : '', isReverse ? 't-animation-reverse' : '']"
				@click="animation(index)"
				v-for="(item, index) in animationList"
			>
				<view>{{ item.name }}</view>
				<view class="t-text-xxs">{{ item.animation }}</view>
			</view>
			<view class="t-item-title t-mt-20">是否反向（t-animation-reverse）</view>
		</view>
		<subsection :list="list" v-model="current" @change="handleChange"></subsection>
	</view>
</template>

<script>
export default {
	data() {
		return {
			animationList: [
				{ name: '淡出', animation: 't-animation-fade', isAnimation: false },
				{ name: '放大', animation: 't-animation-scale-up', isAnimation: false },
				{ name: '缩小', animation: 't-animation-scale-down', isAnimation: false },
				{ name: '顶部滑入', animation: 't-animation-slide-top', isAnimation: false },
				{ name: '底部滑入', animation: 't-animation-slide-bottom', isAnimation: false },
				{ name: '左边滑入', animation: 't-animation-slide-left', isAnimation: false },
				{ name: '右边滑入', animation: 't-animation-slide-right', isAnimation: false },
				{ name: '震动', animation: 't-animation-shake', isAnimation: false }
			],
			list: [
				{
					name: '正常动画'
				},
				{
					name: '反向动画'
				}
			],
			current: 0,
			isReverse: false
		};
	},
	onLoad({ title }) {
		this.setNavigationBarTitle(title);
	},
	methods: {
		animation(index) {
			this.$it.setClipboardData(this.animationList[index].animation);
			this.animationList[index].isAnimation = true;
			setTimeout(() => {
				this.animationList[index].isAnimation = false;
			}, 1000);
		},
		handleChange(e) {
			this.isReverse = !!e;
		}
	}
};
</script>

<style lang="scss">
.animation-cell {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 350rpx;
	height: 120rpx;
	margin-bottom: 10rpx;
	border-radius: 10rpx;
	font-size: 28rpx;
}
</style>
