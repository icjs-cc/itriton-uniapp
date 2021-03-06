import config from '../config/index'

export const getStorageInfo = () => {
	return uni.getStorageInfoSync()
}

export const setStorage = (k, v) => {
	const key = getStorageKey(k)
	uni.setStorageSync(key, v)
}

export const getStorage = (k) => {
	const key = getStorageKey(k)
	return uni.getStorageSync(key)
}

export const removeStorage = (k) => {
	const key = getStorageKey(k)
	return uni.removeStorageSync(key)
}

export const clearStorage = () => {
	return uni.clearStorageSync()
}

const getStorageKey = (k) => {
	return `${config['name']}_${k}`.toUpperCase()
}

export default {
	getStorageInfo,
	setStorage,
	getStorage,
	removeStorage,
	clearStorage
}