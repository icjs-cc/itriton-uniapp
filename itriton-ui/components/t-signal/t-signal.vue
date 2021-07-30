<template>
	<view>
		<view class="t-signal" :style='[{height: size, width: size}]'>
			<template v-for='(item,index) in signalNumber' v-key='index'>
				<view class='t-signal-cell'
				 :style="[{background: `${index%2==0?(index/2<num-activeIndex?normalColor:activeColor):'white'}`},{borderRadius: `0 100% 0 0`},{transform: `scale(${1-index*(1/(2*num-1))},${1-index*(1/(2*num-1))})`}]"></view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		name: "t-signal",
		props: {
			size: {
				type: String,
				default: '100rpx'
			},
			//背景颜色
			bgColor: {
				type: String,
				default: 'rgba(255,255,255,0)'
			},
			//总的信号数
			num: {
				type: Number,
				default: 4
			},
			// 默认信号颜色
			normalColor: {
				type: String,
				default: '#ccc'
			},
			// 信号强度
			activeIndex: {
				type: Number,
				default: 0
			},
			// 有信号时颜色
			activeColor: {
				type: String,
				default: '#000'
			}
		},
		computed: {
			signalNumber() {
				return this.num * 2 - 1
			}
		}
	}
</script>

<style lang="scss">
	.t-signal {
		position: relative;
		margin: 10rpx auto;
		padding: 0;
		list-style: none;
		overflow: hidden;
		transform: rotate(-45deg);

		&-cell {
			overflow: hidden;
			position: absolute;
			top: 0;
			right: 0;
			width: 50%;
			height: 50%;
			transform-origin: 0% 100%;
		}
	}
</style>
