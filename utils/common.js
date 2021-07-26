const config = require('./config')

export const $showToast = (title) => {
	return new Promise((resolve, reject) => {
		uni.showToast({
			title,
			icon: 'none',
			mask: true,
			duration: 2000,
			success: (res) => {
				resolve(res)
			},
			fail: (error) => {
				reject(error)
			}
		})
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
}) => {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title,
			content,
			showCancel,
			cancelText,
			cancelColor,
			confirmText,
			confirmColor,
			success: (res) => {
				resolve(res)
			},
			fail: (error) => {
				reject(error)
			}
		})
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
