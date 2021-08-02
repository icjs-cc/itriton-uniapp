import color from './libs/config/color.js'
import common from './libs/utils/common.js'
import clipboard from './libs/utils/clipboard.js'
import cache from './libs/utils/cache.js'
import storage from './libs/utils/storage.js'
const $it = {
	color,
	...common,
	...clipboard,
	...storage,
	...cache,
}

// $it挂载到uni对象上
uni.$it = $it

const install = Vue => {
	Vue.prototype.$it = $it
}

export default {
	install
}