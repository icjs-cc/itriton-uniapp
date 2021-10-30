<template>
	<view class="t-blank-bar-wrap" :style="computedStyle">
		<view class="t-blank-bar__cell" :class="safeAreaInsetBottom?'safe-area-inset-bottom':''"
			:style="computedStyle">
			<view class="t-blank-bar__cell--slot">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 't-blank-bar',
		props: {
			height: {
				type: Number,
				default: 130
			},
			isFixed: {
				type: Boolean,
				default: false
			},
			isBottom: {
				type: Boolean,
				default: false
			},
			safeAreaInsetBottom: {
				type: Boolean,
				default: false
			},
			background: {
				type: String,
				default: 'rgba(0,0,0,0)'
			},
			padding: {
				type: Number,
				default: 30
			}
		},
		computed: {
			computedStyle() {
				let safeAreaInsetBottomHeight = 0
				let bottom = 0
				if(this.safeAreaInsetBottom){
					const res = uni.getSystemInfoSync()
					// #ifdef MP
					safeAreaInsetBottomHeight = res.screenHeight - res.safeArea.bottom + this.$it.rpx2px(bottom)
					// #endif
					// #ifndef MP
						safeAreaInsetBottomHeight = res.safeAreaInsets.bottom + this.$it.rpx2px(bottom)
					// #endif
				}else{
					safeAreaInsetBottomHeight = this.$it.rpx2px(bottom)
				}
				let style = [
					`--height: ${this.$it.rpx2px(this.height)+safeAreaInsetBottomHeight}px`,
					`--position: ${this.isFixed?'fixed':'relative'}`,
					`--background: ${this.background}`,
					`--padding: 0 ${this.$it.rpx2px(this.padding)}px`
				]
				if(this.isBottom) style.push(`--bottom: ${this.$it.rpx2px(bottom)}px`)
				return style.join(';')
			}
		}
	}
</script>

<style lang="scss">
	.t-blank-bar {
		&-wrap {
			width: 100%;
			height: var(--height);
		}

		&__cell {
			position: var(--position);
			display: flex;
			align-items: center;
			flex-shrink: 0;
			bottom: var(--bottom);
			height: var(--height);
			padding: var(--padding);
			background-color: var(--background);
			width: 100%;
			z-index: 2;
			
			&--slot{
				width: 100%;
			}
		}
	}
</style>
