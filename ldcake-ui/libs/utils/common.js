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