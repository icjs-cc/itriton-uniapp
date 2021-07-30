<template>
	<view class="t-highlight">
		<rich-text :nodes="highlight"></rich-text>
	</view>
</template>

<script>
	export default {
		name: 't-highlight',
		props: {
			keyword: {
				default: '',
				type: String
			},
			value: {
				default: '',
				type: String
			},
			color: {
				default: '',
				type: String
			}
		},
		data(){
			return {
				defaultColor: ''
			}
		},
		created() {
			this.defaultColor = this.$t.color.primary;
		},
		computed: {
			highlight() {
				let value = this.value
				if (value.indexOf(this.keyword)!==-1) {
					let reg = new RegExp(this.keyword, 'gi')
					return value.replace(reg, `<font style="color:${this.color||this.defaultColor}">${this.keyword}</font>`)
				} else {
					return value
				}
			}
		}
	}
</script>