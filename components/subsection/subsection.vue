<template>
	<view class="c-subsection flex justify-around mt-20">
		<view class="flex-sub flex justify-center align-center text-df"
			  :class="[index===value?'bg-white':'']"
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