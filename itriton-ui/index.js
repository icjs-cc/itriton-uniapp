import color from './libs/config/color.js'
import common from './libs/utils/common.js'
import clipboard from './libs/utils/clipboard.js'
import cache from './libs/utils/cache.js'
import storage from './libs/utils/storage.js'
const $t = {
	color,
	...common,
	...clipboard,
	...storage,
	...cache,
}

// $t挂载到uni对象上
uni.$t = $t

const install = Vue => {
	Vue.prototype.$t = $t
}

export default {
	install
}