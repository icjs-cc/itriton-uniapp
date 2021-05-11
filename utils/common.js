const config = require('./config')

export const $showToast = (title, _callback) => {
	uni.showToast({
		title,
		icon: 'none',
		mask: true,
		duration: 2000,
		success: () => {
			if (isFunction(_callback)) {
				_callback()
			}
		}
	})
}

export const $hideToast = () => {
	uni.hideToast()
}

export const $showModal = ({
	title = '提示',
	content = '',
	showCancel = true,
	cancelText = '取消',
	cancelColor = '#000000',
	confirmText = '确定',
	confirmColor = config['main_color']
}, _callback) => {
	uni.showModal({
		title,
		content,
		showCancel,
		cancelText,
		cancelColor,
		confirmText,
		confirmColor,
		success: (res) => {
			if (isFunction(_callback)) {
				_callback(res)
			}
		}
	})
}

export const $showLoading = (title) => {
	uni.showLoading({
		title: title ? title : '加载中...',
		mask: true
	})
}

export const $hideLoading = () => {
	uni.hideLoading()
}

const isFunction = (obj) => {
	return typeof obj === 'function'
}
