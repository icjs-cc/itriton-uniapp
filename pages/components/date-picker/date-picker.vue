<template>
	<view class="t-demo">
		<view class="t-demo-wrap">
			<view class="t-demo-title">演示效果</view>
			<view class="t-demo-area">
				<view class="t-demo-result-line" @click="isShow=true">date-picker值：{{ result[0]||'' }} {{ result[1]||'' }}</view>
			</view>
		</view>
		<t-date-picker :default-value="result" v-model="isShow" :is-mask-close="true" @confirm="confirm"></t-date-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: ['2021-01-01', '2021-02-01'],
				isShow: false,
			}
		},
		onLoad({title}) {
			this.setNavigationBarTitle(title)
		},
		methods: {
			confirm(e){
				this.result = e;
				this.isShow = false;
			}
		}
	}
</script>

<style>

</style>
