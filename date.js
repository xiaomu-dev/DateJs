/**
 * 日期格式化
 * @param { string } value - 时间戳, new Date(), 字符串
 * @param { string } format - 格式
 * @returns
 */
export function formatDate(value, format = 'YYYY-MM-DD') {
	if (!value) return '';
	const REGEX_FORMAT = new RegExp('([^]]+)|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS', 'gi');

	// ios 和 mac 系统中，带横杆的字符串日期是格式不了的，这里做一下判断处理
	if (typeof value === 'string' && new Date(value).toString() === 'Invalid Date') {
		value = value.replace(/-/g, '/');
	}
	const date = new Date(value);
	const year = date.getFullYear();
	const month = date.getMonth();
	const days = date.getDate();
	const day = date.getDay();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const milliseconds = date.getMilliseconds();
	const matches = {
		YY: String(year).slice(-2),
		yy: String(year).slice(-2),
		YYYY: year,
		yyyy: year,
		M: month + 1,
		MM: `${month + 1}`.padStart(2, '0'),
		D: String(days),
		DD: `${days}`.padStart(2, '0'),
		H: String(hours),
		HH: `${hours}`.padStart(2, '0'),
		h: `${hours % 12 || 12}`.padStart(1, '0'),
		hh: `${hours % 12 || 12}`.padStart(2, '0'),
		m: String(minutes),
		mm: `${minutes}`.padStart(2, '0'),
		s: String(seconds),
		ss: `${seconds}`.padStart(2, '0'),
		SSS: `${milliseconds}`.padStart(3, '0'),
		d: day,
	};

	const res = format.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match]);
	return res;
}

/**
 * 获取日期
 * @param { string } type - 获取的数据类型
 * @param { boolean } param - 部分数据默认返回 number , 为 true 时返回 string
 * @param { string } param - 可传格式化类型, type 为 'time','date','full' 时使用
 * @returns
 */
export function DateJs(type, param = null) {
	switch (type) {
		case 'year': // 获取年份
			return param ? new Date().getFullYear().toString() : new Date().getFullYear();
		case 'month': // 获取月份
			return param ? (new Date().getMonth() + 1).toString() : new Date().getMonth() + 1;
		case 'day': // 获取日期
			return param ? new Date().getDate().toString() : new Date().getDate();
		case 'hour': // 获取小时
			return param ? new Date().getHours().toString() : new Date().getHours();
		case 'min': // 获取分钟
			return param ? new Date().getMinutes().toString() : new Date().getMinutes();
		case 'sec': // 获取秒数
			return param ? new Date().getSeconds().toString() : new Date().getSeconds();
		case 'ms': // 获取毫秒数
			return param ? new Date().getMilliseconds().toString() : new Date().getMilliseconds();
		case 'timestamp': // 获取时间戳
			return param ? new Date().getTime().toString() : new Date().getTime();
		case 'time': // 获取时间
			return formatDate(new Date(), param ? param : 'hh:mm:ss');
		case 'date': // 获取日期
			return formatDate(new Date(), param ? param : 'YYYY-MM-DD');
		case 'full': // 获取日期
			return formatDate(new Date(), param ? param : 'YYYY-MM-DD');
		default: // 获取完整日期时间
			return formatDate(new Date(), 'YYYY-MM-DD hh:mm:ss');
	}
}
