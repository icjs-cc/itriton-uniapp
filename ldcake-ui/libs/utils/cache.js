const {
	setStorage,
	getStorage,
	removeStorage,
	clearStorage
} = require('./storage.js')
const config = require('../config/index')

let dtime = '_deadtime'

/**
 * k: key
 * v: value
 * t: time (second)
 */
export const setCache = (k, v, t) => {
	const key = getCacheKey(k)
	setStorage(key, v)
	var seconds = parseInt(t)
	if (seconds > 0) {
		var timestamp = Date.parse(new Date())
		timestamp = timestamp / 1000 + seconds
		setStorage(`${key}${dtime}`.toUpperCase(), `${timestamp}`)
	} else {
		removeStorage(`${key}${dtime}`.toUpperCase())
	}
}

/**
 * k: key
 * def: 可选参数，表示无缓存数据时返回值（支持字符串、json、数组、boolean等）
 */
export const getCache = (k, def) => {
	const key = getCacheKey(k)
	var deadtime = parseInt(getStorage(`${key}${dtime}`.toUpperCase()))
	if (deadtime) {
		if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
			if (def) {
				return def;
			} else {
				return
			}
		}
	}
	var res = getStorage(key);
	if (res) {
		return res
	} else {
		return def
	}
}

/**
 * 移除cache
 */
export const removeCache = (k) => {
	const key = getCacheKey(k)
	removeStorage(key)
	removeStorage(`${key}dtime`.toUpperCase())
}

// 清除cache
export const clearCache = () => {
	clearStorage()
}

const getCacheKey = (k) => {
	return `${k}`.toUpperCase()
}
