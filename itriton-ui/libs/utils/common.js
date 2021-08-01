// rpx转px
export const rpx2px = (upx) =>{
  return upx / 750 * uni.getSystemInfoSync().windowWidth
}

// px转rpx
export const px2rpx = (px) => {
  return (px * 750) / uni.getSystemInfoSync().windowWidth
}

// 判断数据是否为空
export const isEmpty = (val) => {
	return !(!!val ? typeof val === 'object' ? Array.isArray(val) ? !!val.length : !!Object.keys(val).length : true : false);
}

// 替换符号
export const replaceSymbol = (value, symbolList) => {
	let result = value
	symbolList.forEach(item=>{
		result = result.replace(item, '')
	})
	return result
}

// 显示提示框
export const $showToast = (
	{
		title, 
		icon='none',
		mask=true,
		duration=2000,
	}) => {
	return new Promise((resolve, reject) => {
		uni.showToast({
			title,
			icon,
			mask,
			duration,
			success: (res) => {
				resolve(res)
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}

//隐藏提示框
export const $hideToast = () => {
	uni.hideToast()
}

export default {
	rpx2px,
	px2rpx,
	isEmpty,
	replaceSymbol,
	$showToast,
	$hideToast,
}