<template>
	<view class="t-sbutton"
				:class="[!isInit?(isMore?`animation-fold-${positon}`:`animation-unfold-${positon}`):'']"
	      :style="computedStyle">
		<view class="t-sbutton-icon t-sbutton-icon-more t-sbutton__more"
					:style="{color: fontColor}" v-if="isMore" @click="more"></view>
		<view class="t-sbutton__content" :style="{backgroundColor: bgColor||defaultColor,width: isMore?'0rpx':'100rpx'}" v-else="!isMore">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "t-sbutton",
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			fontColor: {
				type: String,
				default: '#FFF'
			},
			top: {
				type: String,
				default: '50%'
			},
			positon: {
				type: String,
				default: 'right'
			}
		},
		data() {
			return {
				defaultColor: '',
				isMore: true,
				offset: -80,
				timer: null,
				timerInit: null,
				isInit: true
			};
		},
		created() {
			this.defaultColor = this.$it.color.primary
		},
		destroyed() {
			clearTimeout(this.timerInit)
			clearTimeout(this.timer)
		},
		computed:{
			computedStyle(){
				return [
					`top: ${this.top}`, 
					`background-color: ${this.bgColor||this.defaultColor}`,
					`${this.positon}: ${this.offset}rpx`,
					`transform: rotate(${this.positon==='right'?'0deg':'180deg'})`
				].join(';')
			}
		},
		methods:{
			more() {
				this.isMore = false
				this.isInit = false
				this.timer = setTimeout(()=>{
					this.isMore = true
				},5000)
			}
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: "t-sbutton-icon";
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALIAAsAAAAABqAAAAJ5AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBFIEXATYCJAMMCwgABCAFhGEHOBvTBcguMRUZ6fQkkDYTIZjWnPn8Dxy4PVEEX3tx++4urVUdl4yvVSU0j9AogtEIhVDd4tBdV/Uv52qPwIi9B0dEipJ203I66R65fydfo7KnHvNh2jyho6UToOY3C7DhPcbGWcr6Dhf//73TN/63b02cFyjHtZcu6iQcUGB7AkVWJAl5w9gFL/A5gUajhmR2do6uoKyw1wXimecIKBdSisKq9UJtw9EiHtSoTy/SJ7yMvh+/bEaZpCazt+7ebduw9tXlp8pwGSBpAjxdg4xloBDXjaVTOcF4OY2mfHdzrSKkpbJVRaQyDLXOHx5JELXszmYwj8qJrwVPlZmnoeapn8qgFgVzwCqb6ybOomFm89PPcjm8+YblrIxvUT3bmJujJTellupnjePGkVcafD3rO3K8g1TtholXtwD77u+5BajOnufWAcgL6UUgeBC9Hyz9LtcK+LLeK0pV5w0v10sw9S9TDxwphtZ256KpPJUVyYZOH0jArkZU7Finr+m2ntuqhDo9GU7sMM7sFC7sItRosgG16mxBoyWbp5t0ieVEacCiZwCh1Wuc2Dc4s29xYT9DjV7/UKvVf2h0HKUrm8zGXXXTkGCyUXbRs3Ss3CJX29Ew7LwgpxkKwzWh5IZM6mVwfGSsUt2lmMz0LWnLmWBWqIyOcAe8yBSGGhOjfbJ4xGVOFkZHVdObRiwdQdU2gwiM2JDUhTwWLaaCXlb1XGQYfu4CcTSFBNM8pKB8gxgpbzo0bsRYN941xUOGHuG2VItjAmMKUgzNQ2gHYjaErKShpHmRj1jYCHdCIbFg1BmnhppGtrVEf3YCGtn35kiRo6i/p9ixm3o8J2wbAAAAAA==') format('woff2');
	}

	.t-sbutton-icon {
		font-family: "t-sbutton-icon" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.t-sbutton-icon-more:before {
		content: "\e635";
	}
	
	.t-sbutton {
		position: fixed;
		width: 130rpx;
		height: 100rpx;
		z-index: 10;
		border-radius: 50rpx 0 0 50rpx;
		animation-duration: 1s;
		animation-fill-mode: forwards;

		&__more {
			position: absolute;
			line-height: 100rpx;
			left: 8rpx;
			top: 0;
			font-size: 40rpx;
		}

		&__content {
			position: absolute;
			left: 0;
			top: 0;
			height: 100rpx;
			border-radius: 50rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 0 20rpx 0rpx rgba(0, 0, 0, 0.1);
			transition: transform 0.4s;
			transform: translateX(0) rotate(0deg);
			color: #FFFFFF;
		}
	}
	
	.animation-unfold-left{
		animation-name: unfoldLeft;
	}
	
	.animation-fold-left{
		animation-name: foldLeft;
	}
	
	@keyframes unfoldLeft{
		from{
			left: -80rpx;
		}
		to {
			left: 0rpx;
		}
	}
	
	@keyframes foldLeft{
		from{
			left: 0rpx;
		}
		to {
			left: -80rpx;
		}
	}
	
	.animation-unfold-right{
		animation-name: unfoldRight;
	}
	
	.animation-fold-right{
		animation-name: foldRight;
	}
	
	@keyframes unfoldRight{
		from{
			right: -80rpx;
		}
		to {
			right: 0rpx;
		}
	}
	
	@keyframes foldRight{
		from{
			right: 0rpx;
		}
		to {
			right: -80rpx;
		}
	}
</style>
