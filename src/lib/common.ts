/**
 * 通过出生日期获取当前年龄
 * @param strBirthday：指的是出生日期，格式为"1990-01-01",字符串类型
 */
export const getCurrentAgeByBirthDate = function (strBirthday: string) {
	// 将出生日期的字符串通过"-"分割成数组
	const strBirthdayArr = strBirthday.split('-');
	// 拿到出生日期的年
	const birthYear = Number(strBirthdayArr[0]);
	// 拿到出生日期的月
	const birthMonth = Number(strBirthdayArr[1]);
	// 拿到出生日期的日
	const birthDay = Number(strBirthdayArr[2]);
	// 新增一个时间对象
	const d = new Date();
	// 拿到当前时间的年
	const nowYear = d.getFullYear();
	// 拿到当前时间的月
	const nowMonth = d.getMonth() + 1;
	// 拿到当前时间的日
	const nowDay = d.getDate();
	// 如果出生日期的年等于当前时间的年
	if (nowYear === birthYear) return 0; // 返回周岁年龄 0,并终止函数执行
	// 如果如果出生日期的年不等于于当前时间的年,则拿到年之差
	const ageDiff = nowYear - birthYear; // 年之差
	// 如果年之差是个负数,则表示用户输入的出生日期错误,晚于今天,返回 -1,并终止函数执行
	if (ageDiff < 0) return -1; // 返回错误 -1,并终止函数执行
	// 如果年之差是个正整数,但出生日期的月与当前时间的月不相等
	if (nowMonth !== birthMonth) {
		// 拿到出生日期的日与当前时间的月之差
		const monthDiff = nowMonth - birthMonth; // 月之差
		// 如果月之差是个负数,则年之差 - 1后得到周岁年龄,否则直接得到周岁年龄
		return monthDiff < 0 ? ageDiff - 1 : ageDiff; // 返回周岁年龄,并终止函数执行
	}
	// 如果出生日期的月与当前时间的月相等,则拿到出生日期的日与当前时间的日之差
	const dayDiff = nowDay - birthDay;
	// 如果日之差是个负数,则年之差 - 1得到周岁年龄,否则直接得到周岁年龄
	return dayDiff < 0 ? ageDiff - 1 : ageDiff; // 返回周岁年龄,并终止函数执行
};

// 截取时间字符串的年月日
export function returnYearMD(
	timeStr: string,
	beginLength = 0,
	endLength = 3,
	SplicingOperator = '-'
) {
	const timeDate = new Date(timeStr);
	let year = timeDate.getFullYear();
	let month = timeDate.getMonth() + 1;
	let date = timeDate.getDate();
	let arr = [year, month, date];
	return arr.slice(beginLength, endLength).join(SplicingOperator);
}

// 传入开始时间与结束时间字符串YYYY-MM-DD格式计算中间记录了多久
export function throughTimeLength(
	beginTime: string,
	endTime: string,
	beginLength = 0,
	endLength = 2
) {
	const beginTimeDate = new Date(beginTime);
	const endTimeDate = new Date(endTime);
	let beginYear = beginTimeDate.getFullYear();
	let beginMonth = beginTimeDate.getMonth() + 1;
	let beginDate = beginTimeDate.getDate();
	let beginHours = beginTimeDate.getHours();
	let beginMinutes = beginTimeDate.getMinutes();
	let beginSeconds = beginTimeDate.getSeconds();
	let endYear = endTimeDate.getFullYear();
	let endMonth = endTimeDate.getMonth() + 1;
	let endDate = endTimeDate.getDate();
	let endHours = endTimeDate.getHours();
	let endMinutes = endTimeDate.getMinutes();
	let endSeconds = endTimeDate.getSeconds();
	if (endSeconds < beginSeconds) {
		endSeconds = endSeconds + 60;
		endMinutes--;
	}
	if (endMinutes < beginMinutes) {
		endMinutes = endMinutes + 60;
		endHours--;
	}
	if (endHours < beginHours) {
		endHours = endHours + 24;
		endDate--;
	}
	if (endDate < beginDate) {
		if ([1, 3, 5, 7, 8, 10, 12].includes(endMonth)) {
			endDate = endDate + 31;
		} else if ([4, 6, 9, 11].includes(endMonth)) {
			endDate = endDate + 30;
		} else {
			if ((endYear % 100 != 0 && endYear % 4 == 0) || endYear % 400 == 0) {
				endDate = endDate + 29;
			} else {
				endDate = endDate + 28;
			}
		}
		endMonth--;
	}
	if (endMonth < beginMonth) {
		endMonth = endMonth + 12;
		endYear--;
	}
	if (endYear < beginMonth) {
		throw new Error('计算时间段的结束时间不能小于开始时间');
	}

	const resultArr = [
		`${endYear - beginYear}年`,
		`${endMonth - beginMonth}个月`,
		`${endDate - beginDate}天`,
		`${endHours - beginHours}时`,
		`${endMinutes - beginMinutes}分`,
		`${endSeconds - beginSeconds}秒`
	];
	return resultArr.slice(beginLength, endLength).join('');
}