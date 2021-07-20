<template>
	<view class="developer">
		<view :class="{'developerMask': isShow}" @click="close" @touchmove.stop.prevent="returnHandle">
			<view class="developer__content" :class="{'developerShow':isShow}" @touchmove.stop.prevent="returnHandle" @tap.stop="returnHandle">
				<view class="developer__content-title">开发者模式</view>
				<view class="developer__content-padding">
					<radio-group @change="radioChange">
						<label class="developer__content-cell" v-for="(item,index) in list" :key="index" @touchmove.stop.prevent="returnHandle">
							<radio :color="themeColor||defaultColor" :value="item.value" :checked="item.checked" />
							<text>{{item.label}}</text>
						</label>
					</radio-group>
					<input class="developer__content-custom" placeholder-style="font-size:26rpx"
					 placeholder="请输入自定义服务器地址(注意使用英文标点符号)" type="text" v-model="customValue" v-if="isCustom"/>
				</view>
				<view class="developer__footer" @touchmove.stop.prevent="returnHandle" @tap.stop="returnHandle">
					<view class="developer__footer-cancel" @click="reset">重置</view>
					<view class="developer__footer-confirm" :style="[{backgroundColor: themeColor||defaultColor}]" @click="confirm">确认</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"c-developer",
		props:{
			// 点击次数达到目标值，触发隐藏操作
			total: {
				type: Number,
				default: 10
			},
			// 有效时间(单位秒)
			effectiveTime: {
				type: Number,
				default: 5
			},
			// 主题色
			themeColor: {
				type: String,
				default: ''
			},
			/**
			 * 
			 [{
						value: 'http://192.168.1.1',
						label: '正式服务器'
					}, {
						value: 'http://192.168.1.2',
						label: '测试服务器'
					}, {
						value: 'http://192.168.1.3',
						label: '自定义服务器(非开发人员禁用)',
						custom: true // 是否自定义
				}]
			 */
			list: {
				type: Array,
				default: ()=> {
					return []
				}
			},
			// 默认值
			defaultValue: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				developerList: [],
				clickNum: 0,
				isShow: false,
				defaultColor: '',
				customValue: '',
				isCustom:false,
			}
		},
		mounted() {
			this.developerList = this.list
			this.defaultColor = this.$c.color.primary;
			this.reset()
		},
		methods:{
			returnHandle() {},
			radioChange(e){
				const value = e.detail.value
				const index = this.getIndexByName(value)
				this.handleStatus(index)
			},
			// 处理当前环境状态
			handleStatus(index){
				if(!this.developerList.length){
					return
				}
				if(this.developerList[index].custom){
					this.isCustom = true
				}else{
					this.isCustom = false
				}
				this.developerList.forEach((item, lIndex)=>{
					this.$set(this.developerList[lIndex], 'checked' , false)
				})
				this.customValue = this.developerList[index].value
				this.$set(this.developerList[index], 'checked' , true)
			},
			getIndexByName(name){
				let existIndex = -1
				let customIndex = -1
				this.developerList.forEach((item, index)=>{
					if(item.value === name){
						existIndex = index
					}
					if(item.custom){
						customIndex = index
					}
				})
				if(existIndex===-1){
					if(customIndex!==-1){
						this.$set(this.developerList[customIndex], 'value' , this.defaultValue)
					}
					existIndex = customIndex===-1?0:customIndex
				}
				return existIndex
			},
			open(){
				if(!this.developerList.length){
					console.warn("暂未设置开发者模式数据")
					return
				}
				this.clickNum++
				let countNum = this.total
				if (this.clickNum > (countNum - countNum / 2) && this.clickNum < countNum) {
					uni.showToast({
						title: '只需' + (countNum - this.clickNum) + '步操作即可进入开发者模式',
						icon: "none",
						duration: 800
					});
				}
				if (this.clickNum >= countNum) {
					this.clickNum = 0
					this.reset()
					uni.showToast({
						title: '您现在处于开发者模式',
						icon: "none",
						duration: 3000,
						complete:() =>{
							this.isShow = true
						}
					})
				}
				setTimeout(() => {
					this.clickNum = 0
				}, this.effectiveTime*1000)
			},
			close(){
				this.isShow = false
			},
			reset(){
				this.isCustom = false
				const index = this.getIndexByName(this.defaultValue)
				this.handleStatus(index)
			},
			confirm(){
				if(this.$c.isEmpty(this.customValue)&&this.isCustom){
					uni.showToast({
						title: '请填写自定义数据',
						icon: "none",
						duration: 3000
					})
					return
				}
				this.close()
				this.$emit('confirm', this.customValue)
			}
		}
	}
</script>

<style lang="scss">
.developer{
	&__content{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #FFF;
		transition: all 0.3s ease;
		transform: translateY(100%);
		z-index: 998;
		padding-bottom: constant(safe-area-inset-bottom);///兼容 IOS<11.2/
		padding-bottom: env(safe-area-inset-bottom);///兼容 IOS>11.2/
		
		&-title{
			padding: 24rpx;
			font-size: 36rpx;
			text-align: center;
			border-bottom: 1rpx solid #EEE;
		}
		
		&-cell{
			display: flex;
			align-items: center;
			margin-bottom: 16rpx;
			font-size: 30rpx;
			&:last-child{
				margin-bottom: 0;
			}
		}
		
		&-custom{
			border: 1rpx solid #EEE;
			height: 70rpx;
			line-height: 70rpx;
			margin-top: 20rpx;
			padding: 0 10rpx;
			border-radius: 10rpx;
			font-size: 26rpx;
		}
		
		&-padding{
			padding: 30rpx 40rpx;
		}
	}
	
	&__footer {
		display: flex;
		height: 90rpx;
		font-size: 36rpx;
		line-height: 90rpx;
		
		view {
			display: block;
			flex: 1;
			text-align: center;
		}
		
		&-cancel {
			color: #282828;
			background: #EDEDED;
		}
		
		&-confirm {
			color: #fff;
		}
	}
	
	radio{
		transform: scale(.8);
	}
}

.developerMask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
	}
	
	.developerShow {
		transform: translateY(0);
	}
</style>
