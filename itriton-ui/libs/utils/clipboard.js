import {
	isEmpty,
	replaceSymbol
} from "./common.js"
/**
 * 获取系统剪贴板内容
 * @returns {Promise<string>} 剪贴板内容
 */
export const getClipboardData = () => {
	return new Promise((success, fail) => {
		// #ifndef H5
		uni.getClipboardData({
			success: ({
				data
			}) => success(data),
			fail
		})
		// #endif

		// #ifdef H5
		try {
			navigator.clipboard.readText().then(success).catch(fail)
		} catch (error) {
			fail(error)
		}
		// #endif
	})
}

/**
 * 设置系统剪贴板的内容
 * @param {string} data 需要设置的内容
 * @returns {Promise<string>} 设置的内容
 */
export const setClipboardData = (data, lang) => {
	return new Promise((success, fail) => {
		// #ifndef H5
		const res = uni.getSystemInfoSync();
		uni.setClipboardData({
			data,
			success,
			fail
		})
		// #endif

		// #ifdef H5
		try {
			const textarea = document.createElement('textarea')
			textarea.value = data
			textarea.readOnly = true
			document.body.appendChild(textarea)
			textarea.select()
			textarea.setSelectionRange(0, data.length)
			document.execCommand('copy')
			const res = uni.getSystemInfoSync()
			let language = replaceSymbol(lang||res.language, ['-', '_'])
			let title = 'Content copied'
			const titleMap = {
				'zhCN': '内容已复制',
				'zhUS': '內容已復制',
				'zhTW': '內容已復制',
				'zhHK': '內容已復制',
				'zhMO': '內容已復制',
				'zhSG': '內容已復制'
			}
			try {
				title = titleMap[language]
				if (isEmpty(title)) {
					title = 'Content copied'
				}
			} catch (e) {
				title = 'Content copied'
			}
			uni.showToast({
				title: title,
				icon: 'none',
				duration: 2000
			});
			textarea.remove()
			success(data)
		} catch (error) {
			fail(error)
		}
		// #endif
	})
}

export default {
	getClipboardData,
	setClipboardData
}
