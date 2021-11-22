<template>
	<view>
		<view class="t-demo">
			<view class="t-demo-wrap t-mt-30">
				<view class="t-demo-title">演示效果</view>
				<view class="t-demo-area">
					<view class="t-demo-result-line" @click="show">
						连续点我进入开发者模式
					</view>
				</view>
			</view>
		</view>
		<t-developer ref="developer" :defaultValue="defaultValue" :total='5' :list="list" @confirm="confirm"></t-developer>
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
				defaultValue: ''
			}
		},
		onLoad({title}) {
			this.defaultValue = this.$it.getStorage('baseUrl')
			this.setNavigationBarTitle(title)
		},
		methods: {
			show(){
				this.$refs.developer.open()
			},
			confirm(val){
				this.defaultValue = val
				this.$it.setStorage('baseUrl', val)
			}
		}
	}
</script>

<style>

</style>
