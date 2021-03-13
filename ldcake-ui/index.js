// 主题相关颜色,info|success|warning|primary|default|error,此颜色已在uview.scss中定义,但是为js中也能使用,故也定义一份
import isEmpty from './libs/utils/isEmpty.js'
import color from './libs/config/color.js'

const $ldc = {
	isEmpty,
	color,
}

const install = Vue => {
	Vue.prototype.$ldc = $ldc
}

export default {
	install
}