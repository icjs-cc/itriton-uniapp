export default {
	data() {
		return {
			baseList: [
				{
					name: '日期选择器（date-picker）',
					url: '/pages/components/date-picker/date-picker'
				},
				{
					name: '加载中（spin）',
					url: '/pages/components/spin/spin'
				},
				{
					name: '悬浮按钮（fabutton）',
					url: '/pages/components/fabutton/fabutton'
				},
				{
					name: '右上角引导（mp-tips）',
					url: '/pages/components/mp-tips/mp-tips'
				},
				{
					name: '获取验证码（captcha）',
					url: '/pages/components/captcha/captcha'
				},
				{
					name: '空白栏（blank-bar）',
					url: '/pages/components/blank-bar/blank-bar'
				},
				{
					name: '信号（signal）',
					url: '/pages/components/signal/signal'
				},
				{
					name: '水印（watermark）',
					url: '/pages/components/watermark/watermark'
				},
				{
					name: '关键字高亮（highlight）',
					url: '/pages/components/highlight/highlight'
				},
				{
					name: '开发者模式（developer）',
					url: '/pages/components/developer/developer'
				},
			],
			toolList: [
				{
					name: '数据缓存（storage）',
					url: '/pages/tools/storage/storage'
				},
				{
					name: '定时缓存（cache）',
					url: '/pages/tools/cache/cache'
				},
				{
					name: '剪贴板（clipboard）',
					url: '/pages/tools/copy/copy'
				},
			]
		}
	},
	methods: {
		setNavigationBarTitle(title) {
			if(title) uni.setNavigationBarTitle({title})
			else {
				const pages = getCurrentPages()
				const page = pages[pages.length-1].$page.path
				if(!page) uni.setNavigationBarTitle({title: this.project_cn})
				else{
					const baseIndex = this.objectIndexInArray(this.baseList, {url: page}, 'url')
					const toolIndex = this.objectIndexInArray(this.toolList, {url: page}, 'url')
					if(baseIndex>-1){
						uni.setNavigationBarTitle({title: this.baseList[baseIndex].name})
					}else if(toolIndex>-1){
						uni.setNavigationBarTitle({title: this.toolList[toolIndex].name})
					}
				}
			}
		},
		objectIndexInArray(array, item, param){
			var index = -1
			for (var i in array) {
				if (array[i][param] === item[param]) {
					index = i
					break
				}
			}
			return index
		}
	}
}
