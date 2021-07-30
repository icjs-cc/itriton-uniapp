<template>
	<view class="t-watermark">
		<view class="t-watermark__bg">
			<canvas canvas-id="watermark" class="t-watermark__bg-canvas"></canvas>
		</view>
		<view class="t-watermark__content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "t-watermark",
		props:{
			watermark: {
				type: Array,
				default: []
			},
			rotate: {
				type: Number,
				default: 45
			},
			color: {
				type: String,
				default: 'rgba(165,165,165,.2)'
			},
			fontSize: {
				type: Number,
				default: 16
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.createWatemark();
			})
		},
		methods:{
			createWatemark() {
				let ctx = uni.createCanvasContext('watermark', this);
				let maxLength = 4;
				const watermark = this.watermark;
				const color = this.color
				watermark.forEach(item=>{
					if(item.length>maxLength) maxLength = item.length
				})
				ctx.rotate((this.rotate * Math.PI) / 185);
				ctx.setFontSize(this.fontSize);
				ctx.setFillStyle('#000');
				for (let j = 1; j < 10; j++) {
					ctx.beginPath();
					ctx.setFillStyle(color);
					watermark.forEach((item,index)=>{
						ctx.fillText(item, 0, 100 * j + (18 * index));
					})
					for (let i = 1; i < 10; i++) {
						ctx.beginPath();
						ctx.setFillStyle(color);
						watermark.forEach((item,index)=>{
							ctx.fillText(item, (maxLength * 20 * i), 100 * j + (18 * index));
						})
					}
				}
				for (let j = 0; j < 10; j++) {
					ctx.beginPath();
					ctx.setFillStyle(color);
					watermark.forEach((item,index)=>{
						ctx.fillText(item, 0, -100 * j + (18 * index));
					})
					for (let i = 1; i < 10; i++) {
						ctx.beginPath();
						ctx.setFillStyle(color);
						watermark.forEach((item,index)=>{
							ctx.fillText(item, (maxLength * 20 * i), -100 * j + (18 * index));
						})
					}
				}
				ctx.draw();
			}
		}
	}
</script>

<style lang="scss">
	.t-watermark {
		&__bg {
			position: fixed;
			z-index: 1;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;

			&-canvas {
				width: 100%;
				height: 100%;
			}
		}

		&__content {
			width: 100%;
			height: 100%;
			position: fixed;
			z-index: 1;
			overflow-y: scroll;
		}
	}
</style>
