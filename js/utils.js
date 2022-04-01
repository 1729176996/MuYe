/**
 * @param {Object} any_date   可以传入任意类型的日期，可以是字符串，可以是时间戳，也可以是Date对象
 * @param {Object} formatStr  想转换出的格式,比如'YYYY年MM月DD日'把时间格式化后得到的就是'2020年06月08日'
 * 格式中字母代表的意义：
 *    YYYY/yyyy/YY/yy 表示年份
 *    MM/M 月份,2个M表示个位数的月份前要加上0，比如08
 *    W/w 星期
 *    dd/DD/d/D 日期,2个d/D表示个位数的日期前要加上0，比如08
 *    hh/HH/h/H 小时,2个h/H表示个位数的小时前要加上0，比如08
 *    mm/m 分钟,2个m表示个位数的分钟前要加上0，比如08
 *    ss/SS/s/S 秒,2个s/S表示个位数的秒前要加上0，比如08
 */
function dateFormat(any_date,formatStr){
    if(!any_date){
      return '';
    }
    if((any_date+'').indexOf('-')>=0&&(any_date+'').indexOf('+')<0){
      any_date = any_date.replace(/\-/g, '/');
    }
    var the_date = new Date(any_date);
    var Week = ['日','一','二','三','四','五','六'];  
    //年
    var yyyy = the_date.getFullYear();
    var yy = (the_date.getYear() % 100)>9?(the_date.getYear() % 100).toString():('0' + (the_date.getYear() % 100));
    formatStr=formatStr.replace(/yyyy|YYYY/,yyyy);
    formatStr=formatStr.replace(/yy|YY/,yy);   
    //月
    var m = the_date.getMonth() + 1;
    var mm = m<10?('0'+m):m;
    formatStr=formatStr.replace(/MM/,mm);
    formatStr=formatStr.replace(/M/g,m); 
    //日
    var d = the_date.getDate();
    var dd = d<10?('0'+d):d;
    formatStr=formatStr.replace(/dd|DD/,dd);
    formatStr=formatStr.replace(/d|D/g,d);
    //星期X(0-6,0代表星期天)
    var w = Week[the_date.getDay()];
    formatStr=formatStr.replace(/w|W/g,w);
    //时
    var h = the_date.getHours();
    var hh = h<10?('0'+h):h;
    formatStr=formatStr.replace(/hh|HH/,hh);
    formatStr=formatStr.replace(/h|H/g,h);
    //分
    var _m = the_date.getMinutes();
    var _mm = _m<10?('0'+_m):_m;
    formatStr=formatStr.replace(/mm/,_mm);
    formatStr=formatStr.replace(/m/g,_m);  
    //秒
    var s = the_date.getSeconds();
    var ss = s<10?('0'+s):s;
    formatStr=formatStr.replace(/ss|SS/,ss);
    formatStr=formatStr.replace(/s|S/g,s);
    return formatStr;
}
//获取当前url中的值
function getUrlParams(name) { // 不传name返回所有值，否则返回对应值
	var url = window.location.search;
	if (url.indexOf('?') == 1) { return false; }
	url = url.substr(1);
	url = url.split('&');
	var name = name || '';
	var nameres;
	// 获取全部参数及其值
	for(var i=0;i<url.length;i++) {
		var info = url[i].split('=');
		var obj = {};
		obj[info[0]] = decodeURI(info[1]);
		url[i] = obj;
	}
	// 如果传入一个参数名称，就匹配其值
	if (name) {
		for(var i=0;i<url.length;i++) {
			for (const key in url[i]) {
				if (key == name) {
					nameres = url[i][key];
				}
			}
		}
	} else {
		nameres = url;
	}
	// 返回结果
	return nameres;
}