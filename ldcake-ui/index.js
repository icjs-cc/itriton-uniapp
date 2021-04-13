import color from './libs/config/color.js'
import common from './libs/utils/common.js'
import cache from './libs/utils/cache.js'
import storage from './libs/utils/storage.js'
const $c = {
	color,
	...common,
	...storage,
	...cache,
}

// $c挂载到uni对象上
uni.$c = $c

const install = Vue => {
	Vue.prototype.$c = $c
}

export default {
	install
}