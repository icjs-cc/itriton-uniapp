<template>
	<view>
		<view id="fabutton" class="fabutton"
			:style="`left:${left}px;top:${top}px;background:${background}`"
		  @touchstart="touchstart"
			@touchmove.stop.prevent="touchmove" @touchend="touchend" @click.stop.prevent="click"
			:class="{transition: isDock && !isMove }">
			<slot></slot>
		</view>
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
		},
		data() {
			return {
				top: 0,
				left: 0,
				width: 0,
				height: 0,
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
				this.width = data.width;
				this.height = data.height;
				this.offsetWidth = data.width / 2;
				this.offsetHeight = data.height / 2;
				this.left = this.windowWidth - this.width - this.edge;
				this.top = this.windowHeight - this.height - this.edge;
			}).exec();
		},
		computed: {
			handleStyle() {
				const defaultColor = this.$c.color.primary;
				return [ 
					`background-color: ${this.background||defaultColor}`, 
					`left: ${this.left}px`, 
					`top: ${this.top}px`,
				].join(',')
			}
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
				this.left = e.touches[0].clientX - this.offsetWidth;
				let clientY = e.touches[0].clientY - this.offsetHeight;
				// #ifdef H5
				clientY += this.height;
				// #endif
				let edgeBottom = this.windowHeight - this.height - this.edge;

				// 上下触及边界
				if (clientY < this.edge) {
					this.top = this.edge;
				} else if (clientY > edgeBottom) {
					this.top = edgeBottom;
				} else {
					this.top = clientY
				}
			},
			touchend(e) {
				if (this.isDock) {
					let edgeRigth = this.windowWidth - this.width - this.edge;
					if (this.left < this.windowWidth / 2 - this.offsetWidth) {
						this.left = this.edge;
					} else {
						this.left = edgeRigth;
					}
				}
				this.isMove = false;
				this.$emit('touchend');
			},
		}
	}
</script>

<style lang="scss">
	.fabutton {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		position: fixed;
		background-color: $c-type-primary;
		z-index: 999999;

		&.transition {
			transition: left .3s ease, top .3s ease;
		}
	}
</style>
