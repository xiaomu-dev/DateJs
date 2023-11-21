> 引入js文件即可使用

## DateJS()

```js
DateJs(); // 默认获取 YYYY-MM-DD hh:mm:ss 
```

```js
// 返回数字类型
DateJs('year'); // 年
DateJs('month'); // 月
DateJs('day'); // 日
DateJs('hour'); // 时
DateJs('min'); // 分
DateJs('sec'); // 秒数
DateJs('ms'); // 毫秒
DateJs('timestamp'); // 时间戳
```

```js
// 返回字符串类型 自行toString() 或者加个参数
DateJs('year', true); // 年
DateJs('month', true); // 月
DateJs('day', true); // 日
DateJs('hour', true); // 时
DateJs('min', true); // 分
DateJs('sec', true); // 秒
DateJs('ms', true); // 毫秒
DateJs('timestamp', true); // 时间戳
```

```js
// 默认获取
DateJs('time'); // 时间  hh:mm:ss
DateJs('date'); // 日期  YYYY-MM-DD
DateJs('full'); // 完整  YYYY-MM-DD hh:mm:ss
```

```js
// 加个参数自定义格式
DateJs('time', 'hh:mm:ss'); // 时间 
DateJs('date', 'YYYY-MM-DD'); // 日期 
DateJs('full', 'YYYY-MM-DD hh:mm:ss'); // 完整 
```

## formatDate()

```js
// 返回格式化后的数据
// val    => 时间戳, 字符串, new Date()
// farmat => 格式化: YYYY-MM-DD hh:mm:ss
formatDate(val, format);
```