<template>
	<view class="ldc-demo">
		<view class="ldc-demo-wrap">
			<view class="ldc-demo-title">演示效果</view>
			<view class="ldc-demo-area">
				<view class="ldc-demo-result-line" @click="isShow=true">date-picker值：{{ result }}</view>
			</view>
		</view>
		<ldc-date-picker :default-value="result" v-model="isShow" :is-mask-close="false" @confirm="confirm"></ldc-date-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: [],
				isShow: false,
			}
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
