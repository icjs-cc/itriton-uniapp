<template>
	<view id="fabutton" class="c-fabutton"
		:style="[{left:`${fbuttonLeft}px`},{top:`${fbuttonTop}px`},{background:`${background}`},{width: `${width}rpx`},{height: `${height}rpx`},{zIndex: `${zIndex}`}]"
		@touchstart="touchstart"
		@touchmove.stop.prevent="touchmove" @touchend="touchend" @click.stop.prevent="click"
		:class="{transition: isDock && !isMove }">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "c-fabutton",
		props: {
			// 是否停靠
			isDock: {
				type: Boolean,
				default: true
			},
			// 是否存在tabbar
			isExistTabBar: {
				type: Boolean,
				default: false
			},
			// 背景颜色
			background: {
				type: String,
				default: ''
			},
			// 宽
			width: {
				type: Number,
				default: 80
			},
			zIndex: {
				type: Number,
				default: 0,
			},
			// 高
			height: {
				type: Number,
				default: 80
			},
			// 左边距离
			left: Number,
			// 顶部距离
			top: Number,
		},
		data() {
			return {
				fbuttonTop: 0,
				fbuttonLeft: 0,
				fbuttonWidth: 0,
				fbuttonHeight: 0,
				offsetWidth: 0,
				offsetHeight: 0,
				windowWidth: 0,
				windowHeight: 0,
				isMove: true,
				edge: 10,
			}
		},
		mounted() {
			const sys = uni.getSystemInfoSync();

			this.windowWidth = sys.windowWidth;
			this.windowHeight = sys.windowHeight;

			// #ifdef APP-PLUS
			this.existTabBar && (this.windowHeight -= 50);
			// #endif
			if (sys.windowTop) {
				this.windowHeight += sys.windowTop;
			}
			const query = uni.createSelectorQuery().in(this);
			query.select('#fabutton').boundingClientRect(data => {
				this.fbuttonWidth = data.width;
				this.fbuttonHeight = data.height;
				this.offsetWidth = data.width / 2;
				this.offsetHeight = data.height / 2;
				if(this.left) this.fbuttonLeft = this.left
				else this.fbuttonLeft = this.windowWidth - this.fbuttonWidth - this.edge;
				if(this.top) this.fbuttonTop = this.top
				else this.fbuttonTop = this.windowHeight - this.fbuttonHeight - this.edge;
			}).exec();
		},
		methods: {
			click() {
				this.$emit('click');
			},
			touchstart(e) {
				this.$emit('touchstart');
			},
			touchmove(e) {
				// 单指触摸
				if (e.touches.length !== 1) {
					return false;
				}

				this.isMove = true;
				this.fbuttonLeft = e.touches[0].clientX - this.offsetWidth;
				let clientY = e.touches[0].clientY - this.offsetHeight;
				// #ifdef H5
				clientY += this.fbuttonHeight;
				// #endif
				let edgeBottom = this.windowHeight - this.fbuttonHeight - this.edge;

				// 上下触及边界
				if (clientY < this.edge) {
					this.fbuttonTop = this.edge;
				} else if (clientY > edgeBottom) {
					this.fbuttonTop = edgeBottom;
				} else {
					this.fbuttonTop = clientY
				}
			},
			touchend(e) {
				if (this.isDock) {
					let edgeRigth = this.windowWidth - this.fbuttonWidth - this.edge;
					if (this.fbuttonLeft < this.windowWidth / 2 - this.offsetWidth) {
						this.fbuttonLeft = this.edge;
					} else {
						this.fbuttonLeft = edgeRigth;
					}
				}
				this.isMove = false;
				this.$emit('touchend');
			},
		}
	}
</script>

<style lang="scss">
	.c-fabutton {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		position: fixed;
		background-color: $c-type-primary;

		&.transition {
			transition: left .3s ease, top .3s ease;
		}
	}
</style>
