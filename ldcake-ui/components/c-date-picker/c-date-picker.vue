<template>
	<view class="c-datetime-picker">
		<view :class="{'datetimePickerMask':showPicker}" @click="maskClose" @touchmove.stop.prevent="returnHandle">
			<view class="c-datetime-picker__content" :class="{'datetimePickerShow':showPicker}">
				<view class="c-datetime-picker__header" @touchmove.stop.prevent="returnHandle" @tap.stop="returnHandle">
					<input class="c-datetime-picker__header-input" type="text" disabled :placeholder="startPlaceholder" :value="startDate" 
						   :style="{color:dateType=='startDate'?(themeColor||defaultColor):'#282828','border-color':dateType=='startDate'?(themeColor||defaultColor):'transparent'}"
						   @tap="changeDateType('startDate')">
					<view class="c-datetime-picker__header-center">
						{{rangeSeparator}}
					</view>
					<input class="c-datetime-picker__header-input" type="text" disabled :placeholder="endPlaceholder" 
						   :style="{color:dateType=='endDate'?(themeColor||defaultColor):'#282828','border-color':dateType=='endDate'?(themeColor||defaultColor):'transparent'}"
						   :value="endDate" @tap="changeDateType('endDate')">
				</view>
				<picker-view indicator-class="c-datetime-picker__view-indicator" class="c-datetime-picker__view" :value="pickerValue" @change="pickerChangeValue">
					<template>
						<picker-view-column>
							<view class="c-datetime-picker__view-item" v-for="(item,index) in yearArr" :key="index">{{item}}</view>
						</picker-view-column>
						<picker-view-column v-if="fields!='year'">
							<view class="c-datetime-picker__view-item" v-for="(item,index) in monthArr" :key="index">{{item}}</view>
						</picker-view-column>
						<picker-view-column v-if="fields=='day'">
							<view class="c-datetime-picker__view-item" v-for="(item,index) in dayArr" :key="index">{{item}}</view>
						</picker-view-column>
					</template>
				</picker-view>
				<view class="c-datetime-picker__footer" @touchmove.stop.prevent="returnHandle" @tap.stop="returnHandle">
					<view class="c-datetime-picker__footer-view c-datetime-picker__footer-cancel" @click="reset">重置</view>
					<view class="c-datetime-picker__footer-view c-datetime-picker__footer-confirm" :style="[{backgroundColor: themeColor||defaultColor}]" @click="confirm">确认</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @property {String} fields 颗粒度：day、month、year 
	 * @property {String} start 允许选中的最小值 
	 * @property {String} end 允许选中的最大值
	 * @property {Array} value 默认展示的值
	 * @property {Boolean} isShow 是否显示
	 * @property {String} themeColor 主题色
	 * @property {Boolean} isMaskClose 是否允许通过点击遮罩关闭Picker
	 * @event {Function()} confirm 确认选择
	 * @example  <c-date-picker :is-show="true"></c-date-picker>
	 */
	export default {
		name: 'c-date-picker',
		props: {
			// 颗粒度，可选值：day、month、year 
			fields: {
				type: String,
				default: 'day'
			},
			// 允许选中的最小值
			start: {
				type: String,
				default: '1900-01-01'
			},
			// 范围选择时开始日期的占位内容
			startPlaceholder: {
				type: String,
				default: '开始时间'
			},
			// 允许选中的最大值
			end: {
				type: String,
				default: '2200-12-01'
			},
			// 范围选择时结束日期的占位内容
			endPlaceholder: {
				type: String,
				default: '结束时间'
			},
			// 选择范围时的分隔符
			rangeSeparator: {
				type: String,
				default: '至'
			},
			// 布尔值变量，用于控制选择器的弹出与收起
			value: {
				type: Boolean,
				default: false
			},
			// 是否显示
			defaultValue: {
				type: Array,
				default () {
					return [0, 0]
				}
			},
			// 主题色
			themeColor: {
				type: String,
				default: ''
			},
			// 是否允许通过点击遮罩
			isMaskClose: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				defaultColor: '',
				showPicker: this.value,
				dayArr: [],
				pickerValue: this.fields === 'year' ? [0] : this.fields === 'month' ? [0, 0] : [0, 0, 0],
				dateType: "startDate",
				startDate: '',
				endDate: '',
			};
		},
		watch: {
			defaultValue(value) {
				this.defaultValue = value;
				this.init();
			},
			value(value) {
				this.showPicker = value;
			}
		},
		computed: {
			yearArr() {
				let arr = [],
					start = parseInt(this.start.slice(0, 4)),
					end = parseInt(this.end.slice(0, 4));
				for (let i = 0; i <= end - start; i++) {
					arr.push(start + i)
				}
				return arr;
			},
			monthArr() {
				let arr = [];
				for (let i = 1; i <= 12; i++) {
					let v = i;
					if (v < 10) v = "0" + v;
					if (this.start.length > 4 && this.end.length > 4 && (this.start.slice(0, 4) == this.end.slice(0, 4))) {
						if (parseInt(v) >= this.start.slice(5, 7) && parseInt(v) <= this.end.slice(5, 7)) {
							arr.push(v.toString())
						}
					} else {
						arr.push(v.toString())
					}
				}
				return arr;
			}
		},
		created() {
			this.defaultColor = this.$c.color.primary;
			this.init();
		},
		methods: {
			returnHandle() {},
			init() {
				let pickerValue = "";
				if ((this.fields == 'year' && this.start.length != 4) || (this.fields == 'month' && this.start.length != 7) || (
						this.fields == 'day' && this.start.length != 10)) {
					console.error("最小值格式与粒度格式不符");
					return;
				} else if ((this.fields == 'year' && this.end.length != 4) || (this.fields == 'month' && this.end.length != 7) || (
						this.fields == 'day' && this.end.length != 10)) {
					console.error("最大值格式与粒度格式不符");
					return;
				}
				let start = this.fields == 'year' ? this.start.slice(0, 4) : this.fields == 'month' ? this.start.slice(0, 7) : this
					.start,
					end = this.fields == 'year' ? this.end.slice(0, 4) : this.fields == 'month' ? this.end.slice(0, 7) : this.end;
				if (!start || !end) {
					console.error("时间不能为空");
					return;
				} else if (start > end) {
					console.error("结束时间必须大等于开始时间");
					return;
				}
				if (this.defaultValue[0]) {
					if ((this.fields == 'year' && this.defaultValue[0].length != 4) || (this.fields == 'month' && this.defaultValue[0].length != 7) ||
						(this.fields == 'day' && this.defaultValue[0].length != 10)) {
						console.error("默认值格式与粒度格式不符");
						return;
					}
					this.startDate = this.defaultValue[0];
					if (this.defaultValue[1]) {
						if ((this.fields == 'year' && this.defaultValue[1].length != 4) || (this.fields == 'month' && this.defaultValue[1].length != 7) ||
							(this.fields == 'day' && this.defaultValue[1].length != 10)) {
							console.error("默认值格式与粒度格式不符");
							return;
						}
						this.endDate = this.defaultValue[1];
						this.dateType = "endDate";
						if (this.fields == 'day') this.dayArr = this.getMonthDay(this.defaultValue[1].slice(0, 4), this.defaultValue[1].slice(5, 7));
						pickerValue = this.getIndex(this.defaultValue[1]);
					} else {
						this.dateType = "startDate";
						if (this.fields == 'day') this.dayArr = this.getMonthDay(this.defaultValue[0].slice(0, 4), this.defaultValue[0].slice(5, 7));
						pickerValue = this.getIndex(this.defaultValue[0]);
					}
				} else {
					this.startDate = start;
					pickerValue = this.getIndex(start);
					if (this.fields == 'day') this.dayArr = this.getMonthDay(start.slice(0, 4), start.slice(5, 7));
				}
				if (pickerValue) setTimeout(() => {
					this.pickerValue = pickerValue
				}, 20)
			},
			maskClose(){
				if(this.isMaskClose){
					this.$emit('input', false);
				}
			},
			confirm() {
				if (this.endDate < this.startDate) {
					uni.showToast({
						title: "开始时间不能大于结束时间",
						icon: "none",
						mask: true
					})
					return;
				}
				if (this.endDate == '' || this.startDate == '') {
					uni.showToast({
						title: "开始结束时间区间不能为空",
						icon: "none",
						mask: true
					})
					return;
				}
				this.$emit("confirm", [this.startDate, this.endDate]);
			},
			reset() {
				this.init();
			},
			changeDateType(dateType) {
				this.dateType = dateType;
				if (this[dateType]) {
					this.pickerValue = this.getIndex(this[dateType])
				} else {
					let dateTxt = this.fields == 'year' ? this.yearArr[this.pickerValue[0]] : this.fields == 'month' ? this.yearArr[
							this.pickerValue[0]] + '-' + this.monthArr[this.pickerValue[1]] : this.yearArr[this.pickerValue[0]] + '-' + this
						.monthArr[this.pickerValue[1]] + '-' + this.dayArr[this.pickerValue[2]];
					this[dateType] = dateTxt;
					this.pickerValue = this.fields == 'year' ? [this.pickerValue[0]] : this.fields == 'month' ? [this.pickerValue[0],
						this.pickerValue[1]] : [this.pickerValue[0], this.pickerValue[1], this.pickerValue[2]];
				}
			},
			pickerChangeValue(e) {
				let val = e.detail.value,
					dateTxt = "";
				if (this.fields == 'day' && (val[0] != this.pickerValue[0] || val[1] != this.pickerValue[1])) {
					this.dayArr = this.getMonthDay(this.yearArr[val[0]], this.monthArr[val[1]]);

					const returnMax = () => {
						if (!this.dayArr[val[2]]) {
							val[2] = (val[2] - 1);
							returnMax();
						}
					}
					returnMax();
				}
				dateTxt = this.yearArr[val[0]] + '-' + this.monthArr[val[1]] + '-' + this.dayArr[val[2]];
				this[this.dateType] = this.fields == 'year' ? dateTxt.slice(0, 4) : this.fields == 'month' ? dateTxt.slice(0, 7) :
					dateTxt;
				this.pickerValue = this.getIndex(this[this.dateType]);
			},
			getIndex(value) {
				let year = value.slice(0, 4),
					month = value.slice(5, 7),
					day = value.slice(8, 10),
					y = 0,
					m = 0,
					d = 0;
				for (let i in this.yearArr) {
					if (year == this.yearArr[i]) {
						y = i;
						break;
					}
				}
				for (let i in this.monthArr) {
					if (month == this.monthArr[i]) {
						m = i;
						break;
					}
				}
				for (let i in this.dayArr) {
					if (day == this.dayArr[i]) {
						d = i;
						break;
					}
				}
				let valueArray = [];
				switch (this.fields) {
					case 'year':
						valueArray = [Number(y)]
						break;
					case 'month':
						valueArray = [Number(y), Number(m)]
						break;
					default:
						valueArray = [Number(y), Number(m), Number(d)]
						break;
				}
				return valueArray;
			},
			withData: (num) => {
				let param = parseInt(num);
				return param < 10 ? '0' + param : '' + param;
			},
			getLoopArray(startVal, endVal, specialDay) {
				let start = startVal || 0;
				let end = endVal || 1;
				let array = [];
				if (specialDay) {
					array = specialDay;
					return array;
				}
				for (let i = start; i <= end; i++) {
					array.push(this.withData(i));
				}
				return array;
			},
			getMonthDay(year, month, specialDay) {
				let flag = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0),
					array = null;

				switch (month) {
					case '01':
					case '03':
					case '05':
					case '07':
					case '08':
					case '10':
					case '12':
						array = this.getLoopArray(1, 31, specialDay)
						break;
					case '04':
					case '06':
					case '09':
					case '11':
						array = this.getLoopArray(1, 30, specialDay)
						break;
					case '02':
						array = flag ? this.getLoopArray(1, 29, specialDay) : this.getLoopArray(1, 28, specialDay)
						break;
					default:
						array = '月份格式不正确，请重新输入！'
				}
				return array;
			}
		}
	}
</script>

<style lang="scss">
	.c-datetime-picker {
		&__content{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			transition: all 0.3s ease;
			transform: translateY(100%);
			z-index: 998;
			padding-bottom: constant(safe-area-inset-bottom);///兼容 IOS<11.2/
			padding-bottom: env(safe-area-inset-bottom);///兼容 IOS>11.2/
		}
		
		&__header{
			background: #fff;
			display: flex;
			justify-content: center;
			height: 90rpx;
			font-size: 32rpx;
			align-items: center;
			color: #282828;
			border-bottom: 1rpx solid $c-border-color;
			
			&-center {
				display: flex;
				width: 72rpx;
				height: 90rpx;
				text-align: center;
				align-items: center;
				justify-content: center;
				border-bottom: 4rpx solid transparent;
			}
			
			&-input{
				width: 250rpx;
				height: 90rpx;
				margin: 0 46rpx;
				margin-top: 4rpx;
				font-size: 32rpx;
				text-align: center;
				align-items: center;
				display: flex;
				min-height: auto;
				border-bottom: 4rpx solid transparent;
				box-sizing: border-box;
			}
		}
	
		&__view{
			position: relative;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 280rpx;
			background-color: #F2F2F2;
			
			&-indicator{
				height: 80rpx;
				z-index: 1;
				border-radius: 10rpx;
				color: #282828;
			}
			
			&-item{
				text-align: center;
				line-height: 80rpx;
				font-size: 32rpx;
				color: #282828;
				z-index: 10;
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
	
	.datetimePickerMask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
	}
	
	.datetimePickerShow {
		transform: translateY(0);
	}
</style>
