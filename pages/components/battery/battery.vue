<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示效果</view>
			<view class="t-demo-area flex justify-center">
				<t-battery :theme-color="themeColor" :value="value"></t-battery>
			</view>
		</view>
		<view class="t-item-title mt-20">改变电量</view>
		<subsection :list="list" v-model="current" @change="handleChange"></subsection>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				list: [
					{
						name: '增加电量'
					},
					{
						name: '减少电量'
					}
				],
				current: 0,
				value: 0,
				themeColor: 'red'
			}
		},
		onLoad({title}) {
			this.setNavigationBarTitle(title)
		},
		methods:{
			handleChange(val) {
				if(val===0){
					this.value += 10
					if(this.value>30){
						this.themeColor = 'orange'
					}
					if(this.value>80){
						this.themeColor = 'green'
					}
					if(this.value>100){
						this.value = 100
					}
				}
				if(val===1){
					this.value -= 10
					if(this.value<80){
						this.themeColor = 'orange'
					}
					if(this.value<30){
						this.themeColor = 'red'
					}
					if(this.value<0){
						this.value = 0
					}
				}
			},
		}
	}
</script>

<style>

</style>
