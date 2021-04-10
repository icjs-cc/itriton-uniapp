// 主题相关颜色,info|success|warning|primary|default|error,此颜色已在uview.scss中定义,但是为js中也能使用,故也定义一份
import color from './libs/config/color.js'
import common from './libs/utils/common.js'
import cache from './libs/utils/cache.js'
import storage from './libs/utils/storage.js'

const $c = {
	color,
	common,
	storage,
	cache,
}

const install = Vue => {
	Vue.prototype.$c = $c
}

export default {
	install
}