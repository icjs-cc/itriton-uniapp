<template>
	<view class="t-subsection t-flex t-justify-around t-mt-20">
		<view class="t-flex-sub t-flex t-justify-center t-align-center t-text-df"
			  :class="[index===value?'t-bg-white':'']"
			  v-for="(item,index) in list" :key="index"
			  @click="toggle(index)">{{item.name}}</view>
	</view>
</template>

<script>
	export default {
		name:"subsection",
		props:{
			list: Array,
			value: {
				type: Number,
				default: 0
			}
		},
		methods:{
			toggle(val){
				this.$emit("input", val)
				this.$emit("change", val)
			}
		}
	}
</script>