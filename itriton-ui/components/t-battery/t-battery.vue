<template>
	<view class="t-battery">
		<view :style="computedContentStyle">
			<view class="t-battery__padding">
				<view class="t-battery__value" :style="computedValueStyle"></view>
			</view>
		</view>
		<view class="t-battery__head" :style="computedHeadStyle"></view>
	</view>
</template>

<script>
export default {
	name: 't-battery',
	props: {
		height: {
			type: Number,
			default: 30
		},
		borderRadius: {
			type: Number,
			default: 2
		},
		themeColor: {
			type: String,
			default: ''
		},
		value: {
			type: Number,
			default: 0
		}
	},
	computed: {
		computedContentStyle() {
			return [
				`height:${this.height}rpx`,
				`width:${this.height * 2}rpx`,
				`border-radius:${this.borderRadius}rpx`,
				`border: ${this.height / 8}rpx solid ${this.themeColor || this.$it.color.primary}`
			].join(';');
		},
		computedHeadStyle() {
			return [
				`height: ${this.height / 2 - this.height / 16}rpx`,
				`width: ${this.height / 6}rpx`,
				`border-radius: 0 ${this.borderRadius}rpx ${this.borderRadius}rpx 0`,
				`background-color: ${this.themeColor || this.$it.color.primary}`
			].join(';');
		},
		computedValueStyle() {
			return [`width: ${this.value > 100 ? 100 : this.value}%`, `border-radius: ${this.borderRadius}rpx`, `background-color: ${this.themeColor || this.$it.color.primary}`].join(
				';'
			);
		}
	}
};
</script>

<style lang="scss">
.t-battery {
	display: flex;
	align-items: center;

	&__padding {
		padding: 2rpx;
		height: 100%;
		width: 100%;
	}

	&__value {
		height: 100%;
	}
}
</style>
