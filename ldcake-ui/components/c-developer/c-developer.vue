<template>
	<view class="c-developer">
		<view :class="{'developerMask': isShow}" @click="close" @touchmove.stop.prevent="returnHandle">
			<view class="c-developer__content" :class="{'developerShow':isShow}" @touchmove.stop.prevent="returnHandle"
				@tap.stop="returnHandle">
				<view class="c-developer__content-title">{{title}}</view>
				<view class="c-developer__content-padding">
					<radio-group @change="radioChange">
						<label class="c-developer__content-cell" v-for="(item,index) in developerList" :key="index"
							@touchmove.stop.prevent="returnHandle">
							<radio class="c-developer__content-radio" :color="themeColor||defaultColor"
								:value="item.value" :checked="item.checked" />
							<text>{{item.label}}</text>
						</label>
					</radio-group>
					<input class="c-developer__content-custom" placeholder-style="font-size:26rpx"
						placeholder="请输入自定义服务器地址(注意使用英文标点符号)" type="text" v-model="customValue" v-if="isCustom" />
				</view>
				<view class="c-developer__footer" @touchmove.stop.prevent="returnHandle" @tap.stop="returnHandle">
					<view class="c-developer__footer-view c-developer__footer-cancel" @click="reset">{{footer.reset}}</view>
					<view class="c-developer__footer-view c-developer__footer-confirm" :style="[{backgroundColor: themeColor||defaultColor}]"
						@click="confirm">{{footer.confirm}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		isEmpty,
		$showToast
	} from "../../libs/utils/common.js"
	export default {
		name: "c-developer",
		props: {
			// 点击次数达到目标值，触发隐藏操作
			total: {
				type: Number,
				default: 10
			},
			// 有效时间(单位秒)
			effectiveTime: {
				type: Number,
				default: 5
			},
			// 主题色
			themeColor: {
				type: String,
				default: ''
			},
			/**
			 * 
			 [{
						value: 'http://192.168.1.1',
						label: '正式服务器'
					}, {
						value: 'http://192.168.1.2',
						label: '测试服务器'
					}, {
						value: 'http://192.168.1.3',
						label: '自定义服务器(非开发人员禁用)',
						custom: true // 是否自定义
				}]
			 */
			list: {
				type: Array,
				default: () => {
					return []
				}
			},
			// 默认值
			defaultValue: {
				type: String,
				default: ''
			},
			lang: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				developerList: [],
				clickNum: 0,
				isShow: false,
				defaultColor: '',
				customValue: '',
				isCustom: false,
				language: '',
				title: '',
				footer: {},
				titleMap: {
					'zhCN': '开发者模式',
					'zhUS': '開發者模式',
					'zhTW': '開發者模式',
					'zhHK': '開發者模式',
					'zhMO': '開發者模式',
					'zhSG': '開發者模式'
				},
				footerMap: {
					'zhCN': {
						reset: '重置',
						confirm: '确认'
					},
					'zhUS': {
						reset: '重置',
						confirm: '確定'
					},
					'zhTW': {
						reset: '重置',
						confirm: '確定'
					},
					'zhHK': {
						reset: '重置',
						confirm: '確定'
					},
					'zhMO': {
						reset: '重置',
						confirm: '確定'
					},
					'zhSG': {
						reset: '重置',
						confirm: '確定'
					},
				},
				warningMap: {
					'zhCN': '暂未设置开发者模式数据',
					'zhUS': '暫未設置開發者模式數據',
					'zhTW': '暫未設置開發者模式數據',
					'zhHK': '暫未設置開發者模式數據',
					'zhMO': '暫未設置開發者模式數據',
					'zhSG': '暫未設置開發者模式數據'
				},
				countDownTitleMap: {
					'zhCN': '只需${num}步操作即可进入开发者模式',
					'zhUS': '只需${num}步操作即可進入開發者模式',
					'zhTW': '只需${num}步操作即可進入開發者模式',
					'zhHK': '只需${num}步操作即可進入開發者模式',
					'zhMO': '只需${num}步操作即可進入開發者模式',
					'zhSG': '只需${num}步操作即可進入開發者模式'
				},
				developerTitleMap: {
					'zhCN': '您现在处于开发者模式',
					'zhUS': '您現在處於開發者模式',
					'zhTW': '您現在處於開發者模式',
					'zhHK': '您現在處於開發者模式',
					'zhMO': '您現在處於開發者模式',
					'zhSG': '您現在處於開發者模式'
				},
				verificationTitleMap: {
					'zhCN': '请填写自定义数据',
					'zhUS': '請填寫自定義數據',
					'zhTW': '請填寫自定義數據',
					'zhHK': '請填寫自定義數據',
					'zhMO': '請填寫自定義數據',
					'zhSG': '請填寫自定義數據'
				}
			}
		},
		mounted() {
			this.language = this.formatLanguage(uni.getSystemInfoSync().language)
			this.developerList = this.list
			this.defaultColor = this.$c.color.primary
			this.handleStaticValue()
			this.reset()
		},
		methods: {
			returnHandle() {},
			handleStaticValue(){
				let title = ''
				let footer = {}
				try {
					title = this.titleMap[this.formatLanguage(this.lang)||this.language]
					footer = this.footerMap[this.formatLanguage(this.lang)||this.language]
					if (isEmpty(title)) {
						title = 'Developer Mode'
						footer = {
							reset: 'Reset',
							confirm: 'Confirm'
						}
					}
				} catch (e) {
					title = 'Developer Mode'
					footer = {
						reset: 'Reset',
						confirm: 'Confirm'
					}
				}
				this.title = title
				this.footer = footer
			},
			formatLanguage(val){
				return val.replace('-','').replace('_','')
			},
			radioChange(e) {
				const value = e.detail.value
				const index = this.getIndexByName(value)
				this.handleStatus(index)
			},
			// 处理当前环境状态
			handleStatus(index) {
				if (!this.developerList.length) {
					return
				}
				if (this.developerList[index].custom) {
					this.isCustom = true
				} else {
					this.isCustom = false
				}
				this.developerList.forEach((item, lIndex) => {
					this.$set(this.developerList[lIndex], 'checked', false)
				})
				this.customValue = this.developerList[index].value
				this.$set(this.developerList[index], 'checked', true)
			},
			getIndexByName(name) {
				let existIndex = -1
				let customIndex = -1
				this.developerList.forEach((item, index) => {
					if (item.value === name) {
						existIndex = index
					}
					if (item.custom) {
						customIndex = index
					}
				})
				if (existIndex === -1) {
					if (customIndex !== -1) {
						this.$set(this.developerList[customIndex], 'value', this.defaultValue)
					}
					existIndex = customIndex === -1 ? 0 : customIndex
				}
				return existIndex
			},
			open() {
				if (!this.developerList.length) {
					let warn = ''
					try {
						warn = this.warningMap[this.formatLanguage(this.lang)||this.language]
						if (isEmpty(warn)) {
							warn = 'Developer mode data is not set yet'
						}
					} catch (e) {
						warn = 'Developer mode data is not set yet'
					}
					console.warn(warn)
					return
				}
				this.clickNum++
				let countNum = this.total
				if (this.clickNum > (countNum - countNum / 2) && this.clickNum < countNum) {
					let title = ''
					try {
						title = this.countDownTitleMap[this.formatLanguage(this.lang)||this.language]
						if (isEmpty(title)) {
							title = 'You can enter the developer mode in ${num} step'
						}
					} catch (e) {
						title = 'You can enter the developer mode in ${num} step'
					}
					$showToast({
						title: title.replace('${num}', (countNum - this.clickNum)),
						mask: false,
						duration: 800
					});
				}
				if (this.clickNum >= countNum) {
					this.clickNum = 0
					this.reset()
					let developerTitle = ''
					try {
						developerTitle = this.developerTitleMap[this.formatLanguage(this.lang)||this.language]
						if (isEmpty(developerTitle)) {
							developerTitle = 'You are in developer mode now'
						}
					} catch (e) {
						developerTitle = 'You are in developer mode now'
					}
					$showToast({title:developerTitle}).then(()=>{
						this.isShow = true
					})
				}
				setTimeout(() => {
					this.clickNum = 0
				}, this.effectiveTime * 1000)
			},
			close() {
				this.isShow = false
			},
			reset() {
				this.isCustom = false
				const index = this.getIndexByName(this.defaultValue)
				this.handleStatus(index)
			},
			confirm() {
				if (this.$c.isEmpty(this.customValue) && this.isCustom) {
					let verificationTitle = ''
					try {
						verificationTitle = this.verificationTitleMap[this.formatLanguage(this.lang)||this.language]
						if (isEmpty(verificationTitle)) {
							verificationTitle = 'Please fill in custom data'
						}
					} catch (e) {
						verificationTitle = 'Please fill in custom data'
					}
					$showToast({title:verificationTitle})
					return
				}
				this.close()
				this.$emit('confirm', this.customValue)
			}
		}
	}
</script>

<style lang="scss">
	.c-developer {
		&__content {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			background-color: #FFF;
			transition: all 0.3s ease;
			transform: translateY(100%);
			z-index: 998;
			padding-bottom: constant(safe-area-inset-bottom); ///兼容 IOS<11.2/
			padding-bottom: env(safe-area-inset-bottom); ///兼容 IOS>11.2/

			&-title {
				padding: 24rpx;
				font-size: 36rpx;
				text-align: center;
				border-bottom: 1rpx solid #EEE;
			}

			&-cell {
				display: flex;
				align-items: center;
				margin-bottom: 16rpx;
				font-size: 30rpx;

				&:last-child {
					margin-bottom: 0;
				}
			}

			&-radio {
				transform: scale(.8);
			}

			&-custom {
				border: 1rpx solid #EEE;
				height: 70rpx;
				line-height: 70rpx;
				margin-top: 20rpx;
				padding: 0 10rpx;
				border-radius: 10rpx;
				font-size: 26rpx;
			}

			&-padding {
				padding: 30rpx 40rpx;
			}
		}

		&__footer {
			display: flex;
			height: 90rpx;
			font-size: 36rpx;
			line-height: 90rpx;

			&-view {
				display: block;
				flex: 1;
				text-align: center;
			}

			&-cancel {
				color: #282828;
				background: #EDEDED;
			}

			&-confirm {
				color: #fff;
			}
		}
	}

	.developerMask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
	}

	.developerShow {
		transform: translateY(0);
	}
</style>
