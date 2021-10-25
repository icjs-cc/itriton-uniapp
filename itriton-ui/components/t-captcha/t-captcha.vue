<template>
	<view class="t-captcha" v-if="isShow">
		<view class="t-captcha-wrap">
			<view class="t-captcha__content">
				<view class="t-captcha__content-image" :style="_computedSizeStyle"></view>
				<image class="t-captcha__content-jigsaw" :src="jigsaw" mode="heightFix" :style="{ height: `${height}px`, left: `${this.x}px` }"></image>
				<view class="t-captcha__content-status">
					<view class="t-captcha__content-status--success" v-if="isSuccess" :style="{ backgroundColor: successColor }">{{ successText }}</view>
					<view class="t-captcha__content-status--error" v-if="isError" :style="{ backgroundColor: errorColor }">{{ errorText }}</view>
				</view>
				<t-spin ref="captchaSpin" isFix :themeColor="themeColor"></t-spin>
			</view>
			<view class="t-captcha__footer" :style="_computedFooterStyle" @touchend="handleTouchend" @mouseup.native="handleTouchend">
				<view class="t-captcha__footer-bg" :style="{ width: `${width}px` }">{{ placeholder }}</view>
				<movable-area class="t-captcha__footer-movable-area" :style="{ width: `${width}px` }" :animation="true">
					<movable-view :x="x" direction="horizontal" class="t-captcha__footer-icon" @change="changeMovableArea" :style="{ backgroundColor: _computedThemeColor }"></movable-view>
				</movable-area>
			</view>
		</view>
		<view class="t-captcha__extra" :style="{ width: `${width + 20}px` }" v-if="!isHideFooter">
			<slot name="footer"></slot>
			<view class="t-captcha__extra-content" v-if="!$slots.footer">
				<view class="t-captcha__extra-left">
					<image class="t-captcha__extra-icon" :src="iconDel" @click="hide()"></image>
					<image class="t-captcha__extra-icon" :src="iconRefresh" @click="reset(true)"></image>
					<image class="t-captcha__extra-icon" :src="iconInfo" @click="info()"></image>
				</view>
				<view class="t-captcha__extra-right">{{ copyright }}</view>
			</view>
		</view>
	</view>
</template>

<script>
import tSpin from '../t-spin/t-spin.vue';
export default {
	name: 't-captcha',
	components: { tSpin },
	props: {
		// 主题色
		themeColor: {
			type: String,
			default: ''
		},
		// 图片宽度
		width: {
			type: Number,
			default: 270
		},
		// 图片高度
		height: {
			type: Number,
			default: 144
		},
		// 拼图
		jigsaw: {
			type: String,
			default: ''
		},
		// 背景图片
		backgroundImage: {
			type: String,
			default: ''
		},
		// 成功颜色
		successColor: {
			type: String,
			default: '#00aa00'
		},
		// 成功文案
		successText: {
			type: String,
			default: '通过验证'
		},
		// 失败颜色
		errorColor: {
			type: String,
			default: '#de715b'
		},
		// 失败文案
		errorText: {
			type: String,
			default: '请正确拼合图像'
		},
		// 滑动提示内容
		placeholder: {
			type: String,
			default: '拖动滑块完成拼图'
		},
		// 版权声明
		copyright: {
			type: String,
			default: '由itriton提供技术支持'
		},
		// 隐藏底部
		isHideFooter: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			x: 1,
			timeoutStatus: null,
			isShow: false,
			isSuccess: false,
			isError: false,
			iconDel: require('./icon/del.png'),
			iconRefresh: require('./icon/refresh.png'),
			iconInfo: require('./icon/info.png')
		};
	},
	destroyed() {
		if (this.timeoutStatus) clearTimeout(this.timeoutStatus);
	},
	computed: {
		_computedSizeStyle() {
			let _style = [];
			_style.push(`height: ${this.height}px`);
			_style.push(`width: ${this.width}px`);
			_style.push(`background-image: url(${this.backgroundImage})`);
			return _style.join(';');
		},
		_computedFooterStyle() {
			let _style = [];
			_style.push(`height: 50px`);
			_style.push(`width: ${this.width}px`);
			return _style.join(';');
		},
		_computedThemeColor() {
			return this.themeColor || this.$it.color.primary;
		}
	},
	methods: {
		show() {
			this.isShow = true;
		},
		hide() {
			this.isShow = false;
		},
		success() {
			this.isSuccess = true;
			this.isError = false;
		},
		error() {
			this.isSuccess = false;
			this.isError = true;
		},
		showLoading() {
			this.$nextTick(() => {
				this.$refs.captchaSpin.show();
			});
		},
		hideLoading() {
			this.$nextTick(() => {
				this.$refs.captchaSpin.hide();
			});
		},
		changeMovableArea(e) {
			this.x = e.detail.x;
		},
		reset(immediately) {
			if (immediately) {
				this.showLoading();
				this.$emit('reset');
			} else {
				this.timeoutStatus = setTimeout(() => {
					this.isSuccess = false;
					this.isError = false;
					if (this.x > 1) {
						this.$nextTick(() => {
							this.x = 1;
						});
					}
					this.showLoading();
					this.$emit('reset');
				}, 1000);
			}
		},
		info() {
			this.$emit('info');
		},
		handleTouchend() {
			this.$emit('end', { x: this.x });
		}
	}
};
</script>

<style lang="scss">
$t-captcha-padding: 10px;
$t-captcha-footer-height: 32px;
$t-captcha-footer-radius: 20px;

.t-captcha {
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
	animation: show 1s 1;

	&-wrap {
		padding: $t-captcha-padding;
		background-color: #ffffff;
	}

	&__content {
		border-radius: 2px;
		position: relative;

		&-image {
			position: fixed;
		}

		&-jigsaw {
			position: relative;
		}

		&-status {
			position: relative;
			display: block;
			width: 100%;
			height: 30px;
			margin-top: -30px;
			font-size: 15px;
			color: #ffffff;

			&--success {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				animation: show 1s 1;
			}

			&--error {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				animation: show 1s 1;
			}
		}
	}

	&__footer {
		position: relative;
		display: flex;
		align-items: center;
		padding-top: $t-captcha-padding;
		height: $t-captcha-footer-height + 2;

		&-bg {
			position: absolute;
			background-color: #dfe1e2;
			color: #88949d;
			display: flex;
			justify-content: center;
			align-items: center;
			height: $t-captcha-footer-height + 2;
			border-radius: $t-captcha-footer-radius;
			font-size: 15px;
		}

		&-movable-area {
			height: $t-captcha-footer-height + 2;
		}

		&-icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: $t-captcha-footer-height + 2;
			height: $t-captcha-footer-height + 2;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 50%;
			background-image: url(./icon/captcha.png);
		}
	}

	&__extra {
		border-top: 1rpx solid #eeeeee;
		background-color: #ffffff;
		padding: $t-captcha-padding;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&-content {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		&-left {
			display: flex;
			align-items: center;
		}

		&-right {
			display: flex;
			align-items: center;
			color: #cacaca;
			font-size: 12px;
		}

		&-icon {
			height: 20px;
			width: 20px;
			margin-right: 10px;
		}
	}
}

image {
	vertical-align: middle;
}

@keyframes show {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
