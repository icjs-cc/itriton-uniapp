<template>
	<view class="c-demo">
		<view class="c-demo-wrap">
			<view class="c-demo-title">演示效果</view>
			<view class="c-demo-area">
				<view class="c-demo-result-line" @click="isShow=true">date-picker值：{{ result[0]||'' }} {{ result[1]||'' }}</view>
			</view>
		</view>
		<c-date-picker :default-value="result" v-model="isShow" :is-mask-close="true" @confirm="confirm"></c-date-picker>
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
		onLoad(options) {
			uni.setNavigationBarTitle({
			    title: options.title
			});
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
