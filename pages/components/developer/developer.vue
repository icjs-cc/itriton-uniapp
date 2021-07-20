<template>
	<view>
		<view class="c-demo">
			<view class="c-demo-wrap mt-30">
				<view class="c-demo-title">演示效果</view>
				<view class="c-demo-area">
					<view class="c-demo-result-line" @click="show">
						连续点我进入开发者模式
					</view>
				</view>
			</view>
		</view>
		<c-developer ref="developer" :defaultValue="defaultValue" :total='5' :list="list" @confirm="confirm"></c-developer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						value: 'http://192.168.1.1',
						label: '正式服务器'
					}, {
						value: 'http://192.168.1.2',
						label: '测试服务器'
					}, {
						value: 'http://192.168.1.3',
						label: '自定义服务器(非开发人员禁用)',
						custom: true
				}],
				defaultValue: 'http://192.168.1.2'
			}
		},
		onLoad({title}) {
			this.setNavigationBarTitle(title)
		},
		methods: {
			show(){
				this.$refs.developer.open()
			},
			confirm(val){
				this.defaultValue = val
			}
		}
	}
</script>

<style>

</style>
