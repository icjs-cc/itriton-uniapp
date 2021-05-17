<template>
	<view class="c-spin" :class="computedClass" :style="computedStyle">
	  <view class="c-spin-main">
	    <view class="c-spin-dot" :style="[{backgroundColor: defaultColor}]"></view>
	    <view class="c-spin-text">
	      <slot></slot>
	    </view>
	  </view>
	</view>
</template>

<script>
	export default {
		name: "c-spin",
		props: {
			// 大小，可选值为 large、small、default
			size: {
				type: String,
				default: 'default'
			},
			// 是否固定，需要父级有 relative 或 absolute
			isFix: {
				type: Boolean,
				default: false
			},
			// 是否全屏
			isFullscreen: {
				type: Boolean,
				default: false
			},
			// 是否自定义
			isCustom: {
				type: Boolean,
				default: false
			},
			// 主题色
			themeColor: {
				type: String,
				default: ''
			},
			// 背景透明度
			opacity: {
				type: Number,
				default: 0.9
			},
		},
		data(){
			return {
				defaultColor: ''
			}
		},
		mounted() {
			this.defaultColor = this.themeColor||this.$c.color.primary
		},
		computed:{
			computedClass(){
				let _class = [`c-spin-${this.size}`]
				if(this.isFix) 
					_class.push('c-spin-fix')
				if(this.isCustom)
					_class.push('c-spin-show-text')
				if(this.isFullscreen)
					_class.push('c-spin-fullscreen')
				return _class
			},
			computedStyle(){
				return [{'backgroundColor': `rgba(255,255,255,${this.opacity})`}]
			}
		}
	}
</script>

<style lang="scss">
	.c-spin {
		color: $c-type-primary;
		vertical-align: middle;
		text-align: center;
		
		&-dot {
			position: relative;
			display: block;
			border-radius: 50%;
			width: 20px;
			height: 20px;
			animation: ani-spin-bounce 1s 0s ease-in-out infinite;
		}
		
		&-large &-dot {
			width: 32px;
			height: 32px;
		}
		
		&-small &-dot {
			width: 12px;
			height: 12px;
		}
		
		&-fix {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 8;
			width: 100%;
			height: 100%;
			background-color: rgba(255, 255, 255, 0.9);
		}
		
		&-fullscreen {
			z-index: 2010;
		}
		
		&-fullscreen-wrapper {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}
		
		&-fix &-main {
			position: absolute;
			top: 50%;
			left: 50%;
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		
		&-fix &-dot {
			display: inline-block;
		}
		
		&-show-text &-dot,
		&-text {
			display: none;
		}
		
		&-show-text &-text {
			display: block;
			font-size: 14px;
		}
	}

	@keyframes ani-spin-bounce {
		0% {
			transform: scale(0);
		}

		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
