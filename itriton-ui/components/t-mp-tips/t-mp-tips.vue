<template>
	<view class="t-mp-tips" v-if="isShow">
		<!-- #ifdef MP-WEIXIN -->
		<view class="t-mp-tips__arrow" :style="{ marginRight: marginRight + 'px', marginTop: marginTop + 'px' }"></view>
		<view class="t-mp-tips__content">
			<view class="t-mp-tips__content-text">{{ text }}</view>
			<view class="t-mp-tips__content-line"></view>
			<view class="t-mp-tips__content-btn" @click="close">
				<icon type="clear" color="#FFF" :size="rpx2px(32)"/>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import { rpx2px } from '../../libs/utils/common.js'
	import { setCache, getCache } from '../../libs/utils/cache.js'
	export default {
		name:"t-mp-tips",
		props:{
			text: {
				type: String,
				default: '添加到我的小程序'
			},
			//是否开启了自定义头部
			isCustom: {
				type: Boolean,
				default: false
			},
			// 用户关闭后隐藏时间，默认7天
			expire: {
				type: Number,
				default: 7
			}
		},
		data() {
			return {
				isShow: false,
				marginRight: 66,
				marginTop: 0
			};
		},
		mounted() {
			// #ifdef MP-WEIXIN
			this.initTips();
			// #endif
			// #ifndef MP-WEIXIN
			console.warn("右上角引导组件仅支持微信小程序")
			// #endif
		},
		methods:{
			rpx2px,
			initTips(){
				const _isHide = getCache('isMptipHide');
				if(_isHide) return
				// 处理根据系统信息处理位移箭头位置
				let systemInfo = uni.getSystemInfoSync();
				let client = uni.getMenuButtonBoundingClientRect();
				if (systemInfo && client) {
					this.marginRight = systemInfo.screenWidth - client.left - 28;
					if (this.isCustom) {
						this.marginTop = client.bottom + client.top - systemInfo.statusBarHeight;
					}
				}
				this.isShow = true
			},
			close(){
				this.isShow = false
				setCache('isMptipHide', true, 60*60*24)
				this.$emit('close')
			}
		}
	}
</script>

<style lang="scss" scoped>
.t-mp-tips {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 10073;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column;
	width: 600rpx;
	
	&__arrow{
		width: 0;
		height: 0;
		margin-right: 120rpx;
		border-width: 10rpx;
		border-style: solid;
		border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
	}
	
	&__content{
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 8rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 70rpx;
		padding: 0 18rpx 0 30rpx;
		margin-right: 50rpx;
		
		&-text{
			color: #fff;
			font-size: 26rpx;
			font-weight: 400;
		}
		
		&-line{
			padding: 0 20rpx;
			height: 100%;
			position: relative;
			
			&::after{
				content: '';
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: 2rpx;
				height: 40rpx;
				background: #a6a6a6;
			}
		}
		
		&-btn{
			display: flex;
			justify-content: center;
		}
	}
}
</style>
