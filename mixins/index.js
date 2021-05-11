import * as config from '../utils/config.js'
import * as common from '../utils/common.js'

export default {
	data() {
		return {
			...config
		}
	},
	methods: {
		...common,
	}
}
