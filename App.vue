<script>
	export default {
		onLaunch() {
			const baseUrl = this.$it.getStorage('baseUrl')
			if(this.$it.isEmpty(baseUrl)){
				this.$it.setStorage('baseUrl', 'http://192.168.1.1')
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "styles/style.css";
	@import "styles/demo.scss";
</style>
