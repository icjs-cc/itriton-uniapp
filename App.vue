<script>
	export default {
		onLaunch() {
			const baseUrl = this.$c.getStorage('baseUrl')
			if(this.$c.isEmpty(baseUrl)){
				this.$c.setStorage('baseUrl', 'http://192.168.1.1')
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "styles/style.css";
	@import "styles/demo.scss";
</style>
