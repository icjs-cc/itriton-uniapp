<template>
	<view class="t-barrage" :style="computedStyle">
		<view :animation="index===0?animationData:''" v-for="(item,index) in barrageList" :key="index">
			<slot name="scope" :item="item" v-if="index<row"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "t-barrage",
		props: {
			// 消息数据
			list: {
				type: Array,
				default: []
			},
			// 持续时间
			duration: {
				type: Number,
				default: 3000
			},
			// 距离顶部
			top: {
				type: String,
				default: '350rpx'
			},
			// 距离左边
			left: {
				type: String,
				default: '10rpx'
			},
			// 动画半径
			radius: {
				type: Number,
				default: 30
			},
			// 显示行数
			row: {
				type: Number,
				default: 1
			},
		},
		data() {
			return {
				animationData: {},
				interval: null,
				timeout: null,
				current: 0,
				barrageList: []
			}
		},
		mounted() {
			this.animationInterval();
		},
		destroyed() {
			if (this.interval) clearInterval(this.interval)
			if (this.timeout) clearTimeout(this.timeout)
		},
		computed:{
			computedStyle(){
				return [`top: ${this.top}`,`left: ${this.left}`].join(';')
			}
		},
		watch:{
			list: {
				handler(val){
					this.barrageList = val
				},
				immediate: true
			}
		},
		methods: {
			animationInterval() {
				this._animation()
				this.interval = setInterval(()=>{
					this.handleList()
					this._animation()
				},6000)
			},
			_animation(){
				this.animationData = uni.createAnimation({
						duration: this.duration/2,
						timingFunction: 'ease'
					})
					.top(this.top - this.radius)
					.opacity(0.8)
					.step()
					.export()
				
				this.timeout = setTimeout(() => {
					this.animationData = uni.createAnimation({
							duration: this.duration,
							timingFunction: 'ease'
						})
						.top(this.top - this.radius * 2)
						.opacity(0)
						.step()
						.export()
				}, 3000)
			},
			handleList(){
				if(this.barrageList.length){
					const fistData = this.barrageList[0]
					this.barrageList.splice(0, 1)
					this.barrageList.push(fistData)
				}
			},
		}
	}
</script>

<style lang="scss">
	.t-barrage {
		position: fixed;
		z-index: 99999;
	}
</style>
