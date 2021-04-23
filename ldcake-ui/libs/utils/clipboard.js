export const setClipboardData = (content) => {
	// #ifdef H5
	try{
		let textarea = document.createElement("textarea")
		textarea.value = content
		textarea.readOnly = "readOnly"
		document.body.appendChild(textarea)
		textarea.select() // 选择对象
		textarea.setSelectionRange(0, content.length) //核心
		let result = document.execCommand("Copy") // 执行浏览器复制命令
		textarea.remove()
		uni.showToast({
			title: '内容已复制',
			icon: 'none',
			duration: 2000
		});
		return result
	}catch(e){
		return null
	}
	// #endif
	// #ifndef H5
	uni.setClipboardData({
		data: content
	});
	// #endif
}

export default {
	setClipboardData
}