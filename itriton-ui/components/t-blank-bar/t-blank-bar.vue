<template>
	<view>
		<view class="t-blank-bar-wrap" :style="computedStyle">
			<view class="t-blank-bar__cell" :class="safeAreaInsetBottom?'safe-area-inset-bottom':''"
				:style="computedStyle">
				<view class="t-blank-bar__cell--slot">
					<slot></slot>
				</view>
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
		},
		computed: {
			computedStyle() {
				let safeAreaInsetBottomHeight = 0
				let bottom = 0
				if(this.safeAreaInsetBottom){
					const res = uni.getSystemInfoSync()
					// #ifdef MP
					safeAreaInsetBottomHeight = res.screenHeight - res.safeArea.bottom + this.$t.rpx2px(bottom)
					// #endif
					// #ifndef MP
						safeAreaInsetBottomHeight = res.safeAreaInsets.bottom + this.$t.rpx2px(bottom)
					// #endif
				}else{
					safeAreaInsetBottomHeight = this.$t.rpx2px(bottom)
				}
				let style = [
					`--height: ${this.$t.rpx2px(this.height)+safeAreaInsetBottomHeight}px`,
					`--position: ${this.isFixed?'fixed':'relative'}`,
					`--background: ${this.background}`
				]
				if(this.isBottom) style.push(`--bottom: ${this.$t.rpx2px(bottom)}px`)
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
			background-color: var(--background);
			width: 100%;
			padding-left: 30rpx;
			padding-right: 30rpx;
			z-index: 2;
			
			&--slot{
				width: 100%;
			}
		}
	}
	
	/* start--iPhoneX底部安全区定义--start */
	.safe-area-inset-bottom {
	  padding-bottom: 0;  
	  padding-bottom: constant(safe-area-inset-bottom);  
	  padding-bottom: env(safe-area-inset-bottom);  
	} 
	/* end-iPhoneX底部安全区定义--end */
</style>
