window.config = {
	appTitle: 'GF9',
	productName: 'GF9',
	//url: "http://localhost:8080/gfx/"
}
//mui.ajax请求数据
function mAjax(url, params, callback) {
	//console.log(window.config.url + url);
	mui.ajax(url, {
		data: params,
		dataType: "json",
		//async:false,
		//type: 'post',
		crossDomain: true,
		success: function(data) {
			callback(data)
		},
		error: function(xhr, type, errorThrown) {
			//console.log(xhr);
			//console.log(type);
			mui.toast("请求异常");
			//			plus.nativeUI.showWaiting()
		}
	})
}
//改变主界面title
function changTitle(title) {
	return document.getElementsByClassName("mui-title")[0].innerText = title;
}
//铆点
function byId(id) {
	return document.getElementById(id);
};
//初始化
function echartsInit(eid) {
	return echarts.init(eid);
}
//进度条数值
function getProgressBarPer(snum, count) {
	var pValue = (snum / count).toFixed(2) * 100;
	return pValue;

}
window.config = {
	appTitle: "GF9MES"
}

//获取配置信息
function getConfig() {
	return window.config;
}

//获取appTitle
function getAppName() {
	return getConfig().appTitle;
}

/****************************LocalStorage操作********************************/
/**
 * 获取localStorage存储的key，前面加上MES-
 * @param  {String} key 原始key
 * @return {String}     前面加了MES-的key
 */
function getLsKey(key) {
	if(key == null) return '';
	return getAppName() + '-' + key;
}
/**
 * 根据key获取localStorage的值
 * @param  {String} key 键
 * @return {String}     值
 */
function getLsItem(key) {
	return localStorage.getItem(this.getLsKey(key));
	//return plus.storage.getItem(this.getLsKey(key));
}
/**
 * 根据key获取localStorage的值
 * @param  {String} key 键
 * @param  {String} value 值
 */
function setLsItem(key, value) {
	localStorage.setItem(this.getLsKey(key), value);
	//plus.storage.setItem(this.getLsKey(key), value);
}
/**
 * 根据key移除localStorage的值
 * @param  {String} key 键
 */
function removeLsItem(key) {
	localStorage.removeItem(this.getLsKey(key));
	//plus.storage.removeItem(this.getLsKey(key));
}

function ObjStory(id, defect, num1) //声明对象
{
	this.qxid = id;
	this.qxname = defect;
	this.qxs = num1;

}

function ObjStory2(rwdid, defectId, snum, dnum, d2mum, hmun, sfnum, bfnum) //声明对象
{
	this.rwdid = rwdid;
	this.defectId = defectId;
	this.snum = snum,
		this.dnum = dnum,
		this.d2mum = d2mum;
	this.hmun = hmun;
	this.sfnum = sfnum;
	this.bfnum = bfnum;

}

function ObjStory3(ljName, ljbm, nowdate, num, xtm) //声明对象
{
	this.ljName = ljName;
	this.ljbm = ljbm;
	this.nowdate = nowdate;
	this.num = num;
	this.xtm = xtm;

}

function ObjStory4(rwdid, defectId, snum, dnum, d2mum, hmun, sfnum, bfnum, xtm, defectItems) //声明对象
{
	this.rwdid = rwdid;
	this.defectId = defectId;
	this.snum = snum,
		this.dnum = dnum,
		this.d2mum = d2mum;
	this.hmun = hmun;
	this.sfnum = sfnum;
	this.bfnum = bfnum;
	this.xtm = xtm;
	this.defectItems = defectItems;

}

function ObjStory5(ldefect, lnum) //声明对象
{
	this.ldefect = ldefect;
	this.lnum = lnum;

}

function ObjStory6(hxtm, hnum, ptime) {
	this.hxtm = hxtm;
	this.hnum = hnum;
	this.ptime = ptime;
}

function ObjStory7(index, input3) {
	this.index = index;
	this.input3 = input3;
}
/**
 * 字符串数据保存为xml
 * @param {Object} string	数据源
 * @param {Object} amp
 * @param {Object} lt
 * @param {Object} gt
 * @param {Object} quot
 * @param {Object} apos
 * @param {Object} cr
 */
function makeSaveXml(string, amp, lt, gt, quot, apos, cr) {
	if(string == null) return "";
	string = new String(string);
	var a = {
		_$amp: "&amp;",
		_$lt: "&lt;",
		_$gt: "&gt;",
		_$quot: "&quot;",
		_$apos: "&apos;",
		_$39: "&#39;",
		_$escapedCR: "&#x000D;",
		_RE_amp: /&/g,
		_RE_lt: /</g,
		_RE_gt: />/g,
		_RE_cr: /\r/g
	};
	// alert(string);
	String._singleQuoteRegex = new RegExp("'", "g");
	String._doubleQuoteRegex = new RegExp("\"", "g");
	if(amp != false) string = string.replace(a._RE_amp, a._$amp);
	if(lt != false) string = string.replace(a._RE_lt, a._$lt);
	if(gt != false) string = string.replace(a._RE_gt, a._$gt);
	if(quot != false) string = string.replace(String._doubleQuoteRegex, a._$quot);
	if(apos != false) string = string.replace(String._singleQuoteRegex, a._$apos);
	if(cr != false) string = string.replace(a._RE_cr, a._$escapedCR);
	return string;
}
/**
 * 数组 数据转化为xml
 * @param {Object} data	数据源
 */
function toXmlForDataFilters(data) { //.fields
	var it = this;
	var arr = [],
		str = "";
	// for (var i = 0; i < fields.length; i++) {
	// str = str + fields[i];
	// }
	var xml = "'<item>";
	for(var i = 0; i < data.length; i++) {
		var obj = data[i];
		var s = "<items>";
		for(var name in obj) {
			// if (str.match(name)) {
			var text = obj[name];
			//console.log(isc.isAn.Date(text))
			// if (isc.isAn.Date(text)) {
			// s = s + "<" + name + ">" + text.toSerializeableDate() + "</" + name + ">";
			// } else {
			if(text instanceof Date) {
				//s = s + "<" + name + ">" + it.makeSaveXml(Ext.Date.format(text, "Y-m-d H:i:s")) + "</" + name + ">";
			} else {
				s = s + "<" + name + ">" + it.makeSaveXml(text) + "</" + name + ">";
			}
			// }
			// }
		}
		xml = xml + s + "</items>";
	};
	xml = xml + "</item>'";
	return(xml);
}
/**
 * 波波的接口
 * @param {Object} xml			数据源
 * @param {Object} callBack		回掉函数
 */
function saveDefectData(xml, callBack) {
	mui.ajax({
		url: "http://eqms-web.chinacloudapp.cn:10000/VAC/service/saveDefectData.groovy",
		async: false,
		type: 'post',
		data: {
			xml: xml
		},
		success: function(data) {
			var _data = eval(data);
			//console.log(_data);
			if(typeof callBack === "function") {
				callBack(_data);
			}
		}
	});
}

function GetPercent(num, total) {
	num = parseFloat(num);
	total = parseFloat(total);
	if(isNaN(num) || isNaN(total)) {
		return "-";
	}
	return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00 + "%");
}

//获取单选按钮值
function getRadioRes(className) {
	var rdsObj = document.getElementsByClassName(className);
	var checkVal = null;
	for(i = 0; i < rdsObj.length; i++) {
		if(rdsObj[i].checked) {
			checkVal = rdsObj[i].value;
		}
	}
	return checkVal;
}
//日期格式化 yyyy-xx-x xx:xx
function FormatDate(strTime) {
	var date = new Date(strTime);
	return date.getFullYear() + "-" + ((date.getMonth() < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1))) + "-" + date.getDate() + "  " + date.getHours() + ":" + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
	//return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate() + " " + date.getHours()+":"+date.getMinutes();
}
//2017-07-01
function FormatDateYMD(strtime) {
	//console.log(123456);
	var date = new Date(strtime);
	return date.getFullYear() + "-" + ((date.getMonth() < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1))) + "-" + (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
}
//自动检查更新
/*
 * 
 * t为程序版本号
 * json格式：
 * 	{
		"state": "yes",
    	"mark": "1.0.6",
    	"url": "http:\/\/192.168.3.171:9999\/middol\/H5696B796_0307145309.apk",
    	"description":"更新内容"
	}
 **/
function svn(t) {
	var xhr_svn = new plus.net.XMLHttpRequest();
	xhr_svn.onreadystatechange = function() {
		if(xhr_svn.readyState == 4) {
			if(xhr_svn.status == 200) {
				var res = JSON.parse(xhr_svn.responseText);
				// alert("res.mark"+res.mark+"t"+t);
				if(res.state == 'yes') {
					if(res.mark != t) {
						var upr;
						plus.nativeUI.confirm("有新版本发布了，是否件更新？", function(e) {
							upr = (e.index == 0) ? "Y" : "N";
							if(upr == "Y") {
								var wt = plus.nativeUI.showWaiting('下载更新中，请勿关闭');
								var url = res.url; // 下载文件地址  
								var dtask = plus.downloader.createDownload(url, {}, function(d, status) {
									if(status == 200) { // 下载成功 
										var path = d.filename;
										plus.runtime.install(path);
									} else { //下载失败 
										alert("Download failed: " + status);
									}
								});
								dtask.start();
							} else {

							}
						}, res.description, ["确认", "取消"]);
					} else {
						//console.log('最新');  
					}
				}
			} else {
				plus.nativeUI.toast("网络连接错误！");
				//console.log("网络连接错误！");
			}
		}
	}
	xhr_svn.open("GET", "http://192.168.1.2:8080/updateAndroid/update.json"); //这里的地址是上面json文件的地址  
	xhr_svn.send();
}
/**
 * 补打条码调用方法
 * @param {Object} mac_address	打印机的mac地址
 * @param {Object} data			数据源
 * @param {Object} _smtype		标志位 1代表不合格打印，2代表合格品打印
 */
function print(data, _smtype, callback) {
	plus.nativeUI.showWaiting("正在打印中。。。");

	var date3 = new Date();
	var _nowdate = date3.getFullYear() + "-" + ((date3.getMonth() < 10 ? ("0" + (date3.getMonth() + 1)) : (date3.getMonth() + 1))) + "-" + date3.getDate();
	var Socket = plus.android.importClass("java.net.Socket");
	var socket;
	var outputStream;
	var string2;
	//测试改良
	var StrictMode = plus.android.importClass("android.os.StrictMode");
	var Build = plus.android.importClass("android.os.Build");
	if(Build.VERSION.SDK_INT > 9) {
		var policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
		StrictMode.setThreadPolicy(policy);
	}

	try {

		if(_smtype == 1) {
			var _defectInfo = data.bdefectDatas;
			var _details1 = ' ';
			var _details2 = ' ';
			var _details3 = ' ';
			for(var i = 0; i < _defectInfo.length; i++) {
				if(_defectInfo[i].num > 0) {
					if(i < 3) {
						_details1 = _details1 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
					}
					if(2 < i && i < 6) {
						_details2 = _details2 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
					}
					if(5 < i && i < 9) {
						_details3 = _details3 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
					}
				}
			}
			string2 = "! 0 560 700 800 1\r\n" +
				"ENCODING GB18030\r\n" +
				"LINE 20 6 20 700 2\r\n" + /*最上方的线*/
				"LINE 110 6 110 700 2\r\n" + /*第二根水平线*/
				"LINE 165 6 165 700 2\r\n" + /*第三根水平线*/
				"LINE 220 6 220 700 2\r\n" + /*第四根水平线*/
				"LINE 275 6 275 700 2\r\n" + /*第五根水平线*/
				"LINE 360 6 360 700 2\r\n" + /*第六根水平线*/
				"LINE 540 6 540 700 2\r\n" + /*最下方的线*/
				"LINE 20 6 540 6 2\r\n" + /*最左边的线*/
				"LINE 110 230 275 230 2\r\n" + /*第一根竖线*/
				"LINE 110 335 275 335 2\r\n" +
				"LINE 110 600 360 600 2\r\n" + /*最右边的竖线*/
				"LINE 20 700 540 700 2\r\n" + /*最右边的线*/
				"PCX 10 570 !<LOGO.PCX\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 45 490 不合格零件证\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 600 " + data.ljname + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 700 零件名称\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 600 " + 'GF9' + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 700 使用地点\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 600 " + data.bygname + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 700 筛选人\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 120 230 " + data.ljbm + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 130 335 零件号\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 210 " + data.bhgsl + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 335 包装数量\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 210 " + "早班" + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 335 班次\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 280 600 " + _details1 + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 305 600 " + _details2 + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 330 600 " + _details3 + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 700 缺陷信息\r\n" +
				"SETMAG 0 0\r\n" +
				"VBARCODE 128 3 4 64 390 670 " + data.bxtm + "\r\n" +
				"SETMAG 1 1\r\nVTEXT 5 2 470 570 " + data.bxtm + "\r\n" +
				"SETMAG 0 0\r\n" +
				"FORM\r\n" +
				"PRINT\r\n";
		} else {
			string2 = "! 0 560 700 800 1\r\n" +
				"ENCODING GB18030\r\n" +
				"LINE 20 6 20 700 2\r\n" + /*最上方的线*/
				"LINE 140 6 140 700 2\r\n" + /*第二根水平线*/
				"LINE 202 6 202 700 2\r\n" + /*第三根水平线*/
				"LINE 286 6 286 700 2\r\n" + /*第四根水平线*/
				"LINE 348 6 348 700 2\r\n" + /*第五根水平线*/
				"LINE 540 6 540 700 2\r\n" + /*最下方的线*/
				"LINE 20 6 540 6 2\r\n" + /*最左边的线*/
				"LINE 140 220 348 220 2\r\n" + /*第一根竖线*/
				"LINE 140 335 348 335 2\r\n" +
				"LINE 140 600 348 600 2\r\n" + /*最右边的竖线*/
				"LINE 20 700 540 700 2\r\n" + /*最右边的线*/
				"PCX 30 590 !<LOGO.PCX\r\n" +
				"SETMAG 3 3\r\nVTEXT GBUNSG24.CPF 0 55 580 零件筛选合格证\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 165 600 " + data.ljname + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 165 700 零件名称\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 230 580 " + 'GF9' + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 230 700 筛选地点\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 580 " + data.hygname + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 700 筛选人\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 150 220 " + data.ljbm + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 165 335 零件号\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 230 200 " + data.hgsl + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 230 335 包装数量\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 200 " + "早班" + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 335 班次\r\n" +
				"SETMAG 0 0\r\n" +
				"VBARCODE 128 3 4 80 380 665 " + data.hxtm + "\r\n" +
				"SETMAG 1 1\r\nVTEXT 5 2 470 550 " + data.hxtm + "\r\n" +
				"SETMAG 0 0\r\n" +
				"FORM\r\n" +
				"PRINT\r\n";
		}
		if(_smtype == 2) {
			socket = new Socket("192.168.1.182", 6101);
			//socket = new Socket("192.168.1.196", 6101);
			//socket.setKeepAlive(true);
		} else if(_smtype == 1) {
			socket = new Socket("192.168.1.196", 6101);
			//socket = new Socket("192.168.1.108", 6101);
			//socket.setKeepAlive(true);
		}
		outputStream = socket.getOutputStream();
		plus.android.importClass(outputStream);
		var bytes = plus.android.invoke(string2, 'getBytes', 'gbk');
		outputStream.write(bytes);
		outputStream.flush();
		socket.shutdownOutput();
		if(_smtype == 1) {
			var _xtm = data.bxtm;
			callback(_xtm)
		} else if(_smtype == 2) {
			var _xtm = data.hxtm;
			callback(_xtm)
		}
		mui.toast("条码打印成功！！！");
		plus.nativeUI.closeWaiting();
		var wobj = plus.webview.getWebviewById("app/main.html"); //注意 HBuilder 是   1.html 的 ID  你如果1.html 有ID   要替换掉HBuilder，  
		wobj.reload(true);
		wobj.show();
	} catch(e) {
		plus.nativeUI.closeWaiting();
		mui.toast("网络连接超时，请重新连接！")
		//TODO handle the exception
	}

}
/**
 * 正常提交打印
 * @param {Object} _smtype		标志位 1代表不合格打印，2代表合格品打印	
 * @param {Object} callback		回调函数
 */
function print2(_smtype, callback) {
	plus.nativeUI.showWaiting("正在打印中。。。");

	var _data = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.loginData;
	var _okNum = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.productData.okNum;
	var _defectInfo = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.qualityData.defectInfo;
	var _details1 = ' ';
	var _details2 = ' ';
	var _details3 = ' ';
	for(var i = 0; i < _defectInfo.length; i++) {
		if(_defectInfo[i].num > 0) {
			if(i < 3) {
				_details1 = _details1 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
			}
			if(2 < i && i < 6) {
				_details2 = _details2 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
			}
			if(5 < i && i < 9) {
				_details3 = _details3 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
			}
		}
	}
	//零件编码
	var _ljbm = _data.ljbm;
	//零件名称
	var _ljname = _data.ljname;
	var _sxname = _data.ygname;
	var hxtm = localStorage.getItem("hgp");
	var bxtm = localStorage.getItem("bhg");

	var _hljsl = localStorage.getItem("xhljsl"); //hljsl
	//缺陷数量
	var _defectNum = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.qualityData.defectNum;
	var Socket = plus.android.importClass("java.net.Socket");
	var PrintWriter = plus.android.importClass("java.io.PrintWriter");
	var BufferedWriter = plus.android.importClass("java.io.BufferedWriter");
	var OutputStreamWriter = plus.android.importClass("java.io.OutputStreamWriter");
	var BufferedReader = plus.android.importClass("java.io.BufferedReader");
	var InputStreamReader = plus.android.importClass("java.io.InputStreamReader");
	var socket;
	var outputStream;
	//测试改良
	var StrictMode = plus.android.importClass("android.os.StrictMode");
	var Build = plus.android.importClass("android.os.Build");
	if(Build.VERSION.SDK_INT > 9) {
		var policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
		StrictMode.setThreadPolicy(policy);
	}

	try {
		var string2;
		if(_smtype == 1) {

			string2 = "! 0 560 700 800 1\r\n" +
				"ENCODING GB18030\r\n" +
				"LINE 20 6 20 700 2\r\n" + /*最上方的线*/
				"LINE 110 6 110 700 2\r\n" + /*第二根水平线*/
				"LINE 165 6 165 700 2\r\n" + /*第三根水平线*/
				"LINE 220 6 220 700 2\r\n" + /*第四根水平线*/
				"LINE 275 6 275 700 2\r\n" + /*第五根水平线*/
				"LINE 360 6 360 700 2\r\n" + /*第六根水平线*/
				"LINE 540 6 540 700 2\r\n" + /*最下方的线*/
				"LINE 20 6 540 6 2\r\n" + /*最左边的线*/
				"LINE 110 230 275 230 2\r\n" + /*第一根竖线*/
				"LINE 110 335 275 335 2\r\n" +
				"LINE 110 600 360 600 2\r\n" + /*最右边的竖线*/
				"LINE 20 700 540 700 2\r\n" + /*最右边的线*/
				"PCX 10 570 !<LOGO.PCX\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 45 490 不合格零件证\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 600 " + _ljname + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 700 零件名称\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 600 " + 'GF9' + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 700 使用地点\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 600 " + _sxname + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 700 筛选人\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 120 230 " + _ljbm + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 130 335 零件号\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 210 " + _defectNum + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 335 包装数量\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 210 " + "早班" + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 335 班次\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 280 600 " + _details1 + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 305 600 " + _details2 + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 330 600 " + _details3 + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 700 缺陷信息\r\n" +
				"SETMAG 0 0\r\n" +
				"VBARCODE 128 3 4 64 390 670 " + bxtm + "\r\n" +
				"SETMAG 1 1\r\nVTEXT 5 2 470 570 " + bxtm + "\r\n" +
				"SETMAG 0 0\r\n" +
				"FORM\r\n" +
				"PRINT\r\n";
		} else {

			string2 = "! 0 560 700 800 1\r\n" +
				"ENCODING GB18030\r\n" +
				"LINE 20 6 20 700 2\r\n" + /*最上方的线*/
				"LINE 140 6 140 700 2\r\n" + /*第二根水平线*/
				"LINE 202 6 202 700 2\r\n" + /*第三根水平线*/
				"LINE 286 6 286 700 2\r\n" + /*第四根水平线*/
				"LINE 348 6 348 700 2\r\n" + /*第五根水平线*/
				"LINE 540 6 540 700 2\r\n" + /*最下方的线*/
				"LINE 20 6 540 6 2\r\n" + /*最左边的线*/
				"LINE 140 220 348 220 2\r\n" + /*第一根竖线*/
				"LINE 140 335 348 335 2\r\n" +
				"LINE 140 600 348 600 2\r\n" + /*最右边的竖线*/
				"LINE 20 700 540 700 2\r\n" + /*最右边的线*/
				"PCX 30 590 !<LOGO.PCX\r\n" +
				"SETMAG 3 3\r\nVTEXT GBUNSG24.CPF 0 55 580 零件筛选合格证\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 165 600 " + _ljname + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 165 700 零件名称\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 230 580 " + 'GF9' + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 230 700 筛选地点\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 580 " + _sxname + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 700 筛选人\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 150 220 " + _ljbm + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 165 335 零件号\r\n" +
				"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 230 200 " + _hljsl + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 230 335 包装数量\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 200 " + "早班" + "\r\n" +
				"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 335 班次\r\n" +
				"SETMAG 0 0\r\n" +
				"VBARCODE 128 3 4 80 380 665 " + hxtm + "\r\n" +
				"SETMAG 1 1\r\nVTEXT 5 2 470 550 " + hxtm + "\r\n" +
				"SETMAG 0 0\r\n" +
				"FORM\r\n" +
				"PRINT\r\n";

		}

		if(_smtype == 2) {
			socket = new Socket("192.168.1.182", 6101);
			//socket = new Socket("192.168.1.196", 6101);
			//socket.setKeepAlive(true);
		} else if(_smtype == 1) {
			//socket = new Socket("192.168.1.108", 6101);
			socket = new Socket("192.168.1.196", 6101);
			//socket.setKeepAlive(true);
		}
		outputStream = socket.getOutputStream();
		plus.android.importClass(outputStream);
		var bytes = plus.android.invoke(string2, 'getBytes', 'gbk');
		outputStream.write(bytes);
		outputStream.flush();
		socket.shutdownOutput();
		if(_smtype == 1) {
			callback(bxtm)
		} else if(_smtype == 2) {
			callback(hxtm)
		}
		mui.toast("条码打印成功！！！");
		plus.nativeUI.closeWaiting();
		var wobj = plus.webview.getWebviewById("app/main.html"); //注意 HBuilder 是   1.html 的 ID  你如果1.html 有ID   要替换掉HBuilder，  
		wobj.reload(true);
		wobj.show();
	} catch(e) {
		plus.nativeUI.closeWaiting();
		mui.toast("网络连接超时，请重新连接！")
	}
}
/**
 * 排序方法
 * @param {Object} arr		数组
 * @param {Object} name		按name怕许
 * @param {Object} snum		true倒叙 false正序
 */
function quickSort(arr, name, snum) {
	//如果数组<=1,则直接返回
	if(arr.length <= 1) {
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2);
	//找基准，并把基准从原数组删除
	var pivot = arr.splice(pivotIndex, 1)[0];
	var middleNum = pivot[name];
	// 定义左右数组
	var left = [];
	var right = [];
	//比基准小的放在left，比基准大的放在right
	if(snum) {
		for(var i = 0; i < arr.length; i++) {
			if(Number(arr[i][name]) <= Number(middleNum)) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
	} else {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i][name] <= middleNum) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
	}
	//递归,返回所需数组
	return quickSort(left, name, snum).concat([pivot], quickSort(right, name, snum));
}

function printx(mac_address, data, callback) {
	plus.nativeUI.showWaiting("正在打印中。。。");
	var device = null,
		BAdapter = null,
		BluetoothAdapter = null,
		uuid = null,
		main = null,
		bluetoothSocket = null;
	var date3 = new Date();
	var _nowdate = date3.getFullYear() + "-" + ((date3.getMonth() < 10 ? ("0" + (date3.getMonth() + 1)) : (date3.getMonth() + 1))) + "-" + date3.getDate();

	if(!mac_address) {
		plus.nativeUI.closeWaiting();
		mui.toast('请选择蓝牙打印机');
		return;
	}

	if(device == null) {
		main = plus.android.runtimeMainActivity();
		BluetoothAdapter = plus.android.importClass("android.bluetooth.BluetoothAdapter");
		UUID = plus.android.importClass("java.util.UUID");
		uuid = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB");
		BAdapter = BluetoothAdapter.getDefaultAdapter();
		device = BAdapter.getRemoteDevice(mac_address);
		plus.android.importClass(device);
		bluetoothSocket = device.createInsecureRfcommSocketToServiceRecord(uuid);
		//在这下面加上一句
		plus.android.importClass(bluetoothSocket);
	}

	if(!bluetoothSocket.isConnected()) {
		// console.log('检测到设备未连接，尝试连接....');
		try {
			bluetoothSocket.connect()
		} catch(e) {
			plus.nativeUI.closeWaiting();
			mui.toast("打印机连接出错，请确认")
		}
	}

	//  console.log('bluetoothSocket.isConnected()='+bluetoothSocket.isConnected());

	if(bluetoothSocket.isConnected()) {
		var outputStream = bluetoothSocket.getOutputStream();
		plus.android.importClass(outputStream);
		var string2;
		var _defectInfo = data.defects;
		var _details1 = ' ';
		var _details2 = ' ';
		var _details3 = ' ';
		for(var i = 0; i < _defectInfo.length; i++) {
			if(_defectInfo[i].num > 0) {
				if(i < 3) {
					_details1 = _details1 + _defectInfo[i].qxname + " " + _defectInfo[i].qxs + "件" + " "
				}
				if(2 < i && i < 6) {
					_details2 = _details2 + _defectInfo[i].qxname + " " + _defectInfo[i].qxs + "件" + " "
				}
				if(5 < i && i < 9) {
					_details3 = _details3 + _defectInfo[i].qxname + " " + _defectInfo[i].qxs + "件" + " "
				}
			}
		}
		string2 = "! 0 560 800 868 1\r\n" +
			"ENCODING GB18030\r\n" +
			"LINE 20 6 20 800 2\r\n" + /*最上方的线*/
			"LINE 110 6 110 800 2\r\n" + /*第二根水平线*/
			"LINE 165 6 165 800 2\r\n" + /*第三根水平线*/
			"LINE 220 6 220 800 2\r\n" + /*第四根水平线*/
			"LINE 275 6 275 800 2\r\n" + /*第五根水平线*/
			"LINE 360 6 360 800 2\r\n" + /*第六根水平线*/
			"LINE 540 6 540 800 2\r\n" + /*最下方的线*/
			"LINE 20 6 540 6 2\r\n" + /*最左边的线*/
			"LINE 110 230 275 230 2\r\n" + /*第一根竖线*/
			"LINE 110 370 275 370 2\r\n" +
			"LINE 110 670 360 670 2\r\n" + /*最右边的竖线*/
			"LINE 20 800 540 800 2\r\n" + /*最右边的线*/
			"PCX 10 660 !<LOGO.PCX\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 45 550 不合格零件证\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 655 " + data.ljname + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 780 零件名称\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 620 " + 'GF9' + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 780 使用地点\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 617 " + data.ygname + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 770 筛选人\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 120 230 " + data.ljbm + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 130 360 零件号\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 210 " + data.ljsl + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 365 包装数量\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 210 " + "早班" + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 360 班次\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 280 655 " + _details1 + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 305 655 " + _details2 + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 330 655 " + _details3 + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 790 缺陷信息\r\n" +
			"SETMAG 0 0\r\n" +
			"VBARCODE 128 3 4 64 390 720 " + data.bxtm + "\r\n" +
			"SETMAG 1 1\r\nVTEXT 5 2 470 570 " + data.bxtm + "\r\n" +
			"SETMAG 0 0\r\n" +
			"FORM\r\n" +
			"PRINT\r\n";
		var bytes = plus.android.invoke(string2, 'getBytes', 'gbk');
		outputStream.write(bytes);
		outputStream.flush();
		device = null;
		bluetoothSocket.close();
		mui.toast("条码打印成功！！！");
		callback(_xtm)
		plus.nativeUI.closeWaiting();
	} else {
		plus.nativeUI.closeWaiting();
		mui.toast("蓝牙连接失败，请确认是否连接打印机")
	}
}

function print3(data, callback) {
	plus.nativeUI.showWaiting("正在打印中。。。");

	var date3 = new Date();
	var _nowdate = date3.getFullYear() + "-" + ((date3.getMonth() < 10 ? ("0" + (date3.getMonth() + 1)) : (date3.getMonth() + 1))) + "-" + date3.getDate();

	var Socket = plus.android.importClass("java.net.Socket");
	var PrintWriter = plus.android.importClass("java.io.PrintWriter");
	var BufferedWriter = plus.android.importClass("java.io.BufferedWriter");
	var OutputStreamWriter = plus.android.importClass("java.io.OutputStreamWriter");
	var BufferedReader = plus.android.importClass("java.io.BufferedReader");
	var InputStreamReader = plus.android.importClass("java.io.InputStreamReader");
	var socket;
	var outputStream;
	//测试改良
	var StrictMode = plus.android.importClass("android.os.StrictMode");
	var Build = plus.android.importClass("android.os.Build");
	if(Build.VERSION.SDK_INT > 9) {
		var policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
		StrictMode.setThreadPolicy(policy);
	}

	try {

		//while(true){
		//socket = new Socket("192.168.1.108", 6101);
		socket = new Socket("192.168.1.196", 6101);
		//socket.setKeepAlive(true);
		//}

		var string2;
		var _defectInfo = data[0].defects;
		//console.log(JSON.stringify(_defectInfo));
		var _details1 = ' ';
		var _details2 = ' ';
		var _details3 = ' ';
		for(var i = 0; i < _defectInfo.length; i++) {
			if(_defectInfo[i].qxs > 0) {
				if(i < 3) {
					_details1 = _details1 + _defectInfo[i].qxname + " " + _defectInfo[i].qxs + "件" + " "
				}
				if(2 < i && i < 6) {
					_details2 = _details2 + _defectInfo[i].qxname + " " + _defectInfo[i].qxs + "件" + " "
				}
				if(5 < i && i < 9) {
					_details3 = _details3 + _defectInfo[i].qxname + " " + _defectInfo[i].qxs + "件" + " "
				}
			}
		}
		string2 = "! 0 560 700 800 1\r\n" +
			"ENCODING GB18030\r\n" +
			"LINE 20 6 20 700 2\r\n" + /*最上方的线*/
			"LINE 110 6 110 700 2\r\n" + /*第二根水平线*/
			"LINE 165 6 165 700 2\r\n" + /*第三根水平线*/
			"LINE 220 6 220 700 2\r\n" + /*第四根水平线*/
			"LINE 275 6 275 700 2\r\n" + /*第五根水平线*/
			"LINE 360 6 360 700 2\r\n" + /*第六根水平线*/
			"LINE 540 6 540 700 2\r\n" + /*最下方的线*/
			"LINE 20 6 540 6 2\r\n" + /*最左边的线*/
			"LINE 110 230 275 230 2\r\n" + /*第一根竖线*/
			"LINE 110 335 275 335 2\r\n" +
			"LINE 110 600 360 600 2\r\n" + /*最右边的竖线*/
			"LINE 20 700 540 700 2\r\n" + /*最右边的线*/
			"PCX 10 570 !<LOGO.PCX\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 45 490 不合格零件证\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 600 " + data[0].ljname + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 700 零件名称\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 600 " + 'GF9' + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 700 使用地点\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 600 " + data[0].ygname + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 700 筛选人\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 120 230 " + data[0].ljbm + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 130 335 零件号\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 210 " + data[0].ljsl + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 335 包装数量\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 210 " + "早班" + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 335 班次\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 280 600 " + _details1 + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 305 600 " + _details2 + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 330 600 " + _details3 + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 700 缺陷信息\r\n" +
			"SETMAG 0 0\r\n" +
			"VBARCODE 128 3 4 64 390 670 " + data[0].bxtm + "\r\n" +
			"SETMAG 1 1\r\nVTEXT 5 2 470 570 " + data[0].bxtm + "\r\n" +
			"SETMAG 0 0\r\n" +
			"FORM\r\n" +
			"PRINT\r\n";
		outputStream = socket.getOutputStream();
		plus.android.importClass(outputStream);
		var bytes = plus.android.invoke(string2, 'getBytes', 'gbk');
		outputStream.write(bytes);
		outputStream.flush();
		socket.shutdownOutput();

		mui.toast("条码打印成功！！！");
		callback(data.bxtm)
		plus.nativeUI.closeWaiting();
		var wobj = plus.webview.getWebviewById("app/main.html"); //注意 HBuilder 是   1.html 的 ID  你如果1.html 有ID   要替换掉HBuilder，  
		wobj.reload(true);
		wobj.show();
	} catch(e) {
		plus.nativeUI.closeWaiting();
		mui.toast("网络连接超时，请重新连接！")
	}

}
//非筛选hold补打
function print4(data2, callback) {
	plus.nativeUI.showWaiting("正在打印中。。。");
	var Socket = plus.android.importClass("java.net.Socket");
	var PrintWriter = plus.android.importClass("java.io.PrintWriter");
	var BufferedWriter = plus.android.importClass("java.io.BufferedWriter");
	var OutputStreamWriter = plus.android.importClass("java.io.OutputStreamWriter");
	var BufferedReader = plus.android.importClass("java.io.BufferedReader");
	var InputStreamReader = plus.android.importClass("java.io.InputStreamReader");
	var socket;
	var outputStream;
	var string2;
	//测试改良
	var StrictMode = plus.android.importClass("android.os.StrictMode");
	var Build = plus.android.importClass("android.os.Build");
	if(Build.VERSION.SDK_INT > 9) {
		var policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
		StrictMode.setThreadPolicy(policy);
	}

	try {

		//socket = new Socket("192.168.1.108", 6101);
		socket = new Socket("192.168.1.196", 6101);
		//socket.setKeepAlive(true);
		var _defectInfo = data2.fdefects;
		var _details1 = ' ';
		var _details2 = ' ';
		var _details3 = ' ';
		for(var i = 0; i < _defectInfo.length; i++) {
			if(_defectInfo[i].qxs > 0) {
				if(i < 3) {
					_details1 = _details1 + _defectInfo[i].qxname + " " + _defectInfo[i].qxs + "件" + " "
				}
				if(2 < i && i < 6) {
					_details2 = _details2 + _defectInfo[i].qxname + " " + _defectInfo[i].qxs + "件" + " "
				}
				if(5 < i && i < 9) {
					_details3 = _details3 + _defectInfo[i].qxname + " " + _defectInfo[i].qxs + "件" + " "
				}
			}
		}
		string2 = "! 0 560 700 800 1\r\n" +
			"ENCODING GB18030\r\n" +
			"LINE 20 6 20 700 2\r\n" + /*最上方的线*/
			"LINE 110 6 110 700 2\r\n" + /*第二根水平线*/
			"LINE 165 6 165 700 2\r\n" + /*第三根水平线*/
			"LINE 220 6 220 700 2\r\n" + /*第四根水平线*/
			"LINE 275 6 275 700 2\r\n" + /*第五根水平线*/
			"LINE 360 6 360 700 2\r\n" + /*第六根水平线*/
			"LINE 540 6 540 700 2\r\n" + /*最下方的线*/
			"LINE 20 6 540 6 2\r\n" + /*最左边的线*/
			"LINE 110 230 275 230 2\r\n" + /*第一根竖线*/
			"LINE 110 335 275 335 2\r\n" +
			"LINE 110 600 360 600 2\r\n" + /*最右边的竖线*/
			"LINE 20 700 540 700 2\r\n" + /*最右边的线*/
			"PCX 10 570 !<LOGO.PCX\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 45 490 不合格零件证\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 600 " + data2.fljname + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 700 零件名称\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 600 " + 'GF9' + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 700 使用地点\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 600 " + data2.fbygname + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 700 筛选人\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 120 230 " + data2.fljbm + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 130 335 零件号\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 210 " + data2.fhsl + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 335 包装数量\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 210 " + "早班" + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 335 班次\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 280 600 " + _details1 + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 305 600 " + _details2 + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 330 600 " + _details3 + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 700 缺陷信息\r\n" +
			"SETMAG 0 0\r\n" +
			"VBARCODE 128 3 4 64 390 670 " + data2.fhxtm + "\r\n" +
			"SETMAG 1 1\r\nVTEXT 5 2 470 570 " + data2.fhxtm + "\r\n" +
			"SETMAG 0 0\r\n" +
			"FORM\r\n" +
			"PRINT\r\n";
		outputStream = socket.getOutputStream();
		plus.android.importClass(outputStream);
		var bytes = plus.android.invoke(string2, 'getBytes', 'gbk');
		outputStream.write(bytes);
		outputStream.flush();
		socket.shutdownOutput();

		callback(data2.fhxtm);
		mui.toast("补打条码成功！！！");

		plus.nativeUI.closeWaiting();
		var wobj = plus.webview.getWebviewById("app/main.html"); //注意 HBuilder 是   1.html 的 ID  你如果1.html 有ID   要替换掉HBuilder，  
		wobj.reload(true);
		wobj.show();
	} catch(e) {
		plus.nativeUI.closeWaiting();
		mui.toast("网络连接超时，请重新连接！")
	}

}

function printter(data, callback) {
	plus.nativeUI.showWaiting("正在打印中。。。");
	var Socket = plus.android.importClass("java.net.Socket");
	/*var isEnable = true;
	    var Context = plus.android.importClass("android.content.Context"),
            //导入wifi管理模块
            WifiManager = plus.android.importClass("android.net.wifi.WifiManager"),
            //获取wifi服务
            wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);*/

	var socket;
	var outputStream;
	var string2;
	//测试改良
	var StrictMode = plus.android.importClass("android.os.StrictMode");
	var Build = plus.android.importClass("android.os.Build");
	if(Build.VERSION.SDK_INT > 9) {
		var policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
		StrictMode.setThreadPolicy(policy);
	}
	try {

		//socket = new Socket("192.168.1.108", 6101);
		socket = new Socket("192.168.1.196", 6101);
		//socket.setKeepAlive(true); 
		//console.log(socket.isConnected());
		string2 = "! 0 560 700 800 1\r\n" +
			"ENCODING GB18030\r\n" +
			"LINE 20 6 20 700 2\r\n" + /*最上方的线*/
			"LINE 110 6 110 700 2\r\n" + /*第二根水平线*/
			"LINE 165 6 165 700 2\r\n" + /*第三根水平线*/
			"LINE 220 6 220 700 2\r\n" + /*第四根水平线*/
			"LINE 275 6 275 700 2\r\n" + /*第五根水平线*/
			"LINE 360 6 360 700 2\r\n" + /*第六根水平线*/
			"LINE 540 6 540 700 2\r\n" + /*最下方的线*/
			"LINE 20 6 540 6 2\r\n" + /*最左边的线*/
			"LINE 110 230 275 230 2\r\n" + /*第一根竖线*/
			"LINE 110 335 275 335 2\r\n" +
			"LINE 110 600 360 600 2\r\n" + /*最右边的竖线*/
			"LINE 20 700 540 700 2\r\n" + /*最右边的线*/
			"PCX 10 570 !<LOGO.PCX\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 45 490 不合格零件证\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 600 " + data.ljname + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 128 700 零件名称\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 600 " + 'GF9' + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 700 使用地点\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 600 " + data.realname + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 700 筛选人\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 120 230 " + data.ljbm + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 130 335 零件号\r\n" +
			"SETMAG 2 2\r\nVTEXT GBUNSG24.CPF 0 175 210 " + data.holdsys + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 180 335 包装数量\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 210 " + "早班" + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 240 335 班次\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 280 600 " + data.holdyy + "\r\n" +
			"SETMAG 1 1\r\nVTEXT GBUNSG24.CPF 0 310 700 缺陷信息\r\n" +
			"SETMAG 0 0\r\n" +
			"VBARCODE 128 3 4 64 390 670 " + data.txm + "\r\n" +
			"SETMAG 1 1\r\nVTEXT 5 2 470 570 " + data.txm + "\r\n" +
			"SETMAG 0 0\r\n" +
			"FORM\r\n" +
			"PRINT\r\n";
		outputStream = socket.getOutputStream();
		plus.android.importClass(outputStream);
		var bytes = plus.android.invoke(string2, 'getBytes', 'gbk');
		outputStream.write(bytes);
		outputStream.flush();
		socket.shutdownOutput();

		callback();
		plus.nativeUI.closeWaiting();
	} catch(e) {
		plus.nativeUI.closeWaiting();
		//http://192.168.1.2:8080/GFX/gfx/
		mAjax("http://192.168.1.2:8080/GFX/gfx/updateFsHoldStation2", {
			txm: data.txm
		}, function(data2) {
			var _data = data2.success;
			//console.log(_data);
			if(data2.success == 1) {
				var wobj = plus.webview.getWebviewById("FHolePrint.html");
				wobj.reload(true);
				wobj.show();
			}
		});
		mui.toast("打印失败！" + e);
		mui.toast("网络连接超时，请重新连接！")
	}
}
//非筛选hold
function windowsPrinterScreening(data, callback){
	/**下面四个参数必须放在cfreport_custom.js脚本后面，以覆盖cfreport_custom.js中的默认值**/
	var _delay_send = -1; //发送打印服务器前延时时长(毫秒)，-1表示不自动打印
	var _delay_close = -1; //打印完成后关闭窗口的延时时长(毫秒), -1则表示不关闭
	var cfprint_addr = '127.0.0.1'; //打印服务器监听地址
	var cfprint_port = 54321; //打印服务器监听端口

	var _obj = {};
	_obj.Name = "Table1";
	_obj.Cols = [];
	_obj.Data = [];
	var _obj2 = {};
	_obj2.type = "str";
	_obj2.size = 255;
	_obj2.Name = "pname";
	_obj2.required = false;
	var _obj3 = {};
	_obj3.type = "str";
	_obj3.size = 255;
	_obj3.Name = "pno";
	_obj3.required = false;
	var _obj4 = {};
	_obj4.type = "str";
	_obj4.size = 255;
	_obj4.Name = "pplace";
	_obj4.required = false;
	var _obj5 = {};
	_obj5.type = "str";
	_obj5.size = 255;
	_obj5.Name = "pcount";
	_obj5.required = false;
	var _obj7 = {};
	_obj7.type = "str";
	_obj7.size = 255;
	_obj7.Name = "pusername";
	_obj7.required = false;
	var _obj8 = {};
	_obj8.type = "str";
	_obj8.size = 255;
	_obj8.Name = "pclass";
	_obj8.required = false;

	var _obj9 = {};
	_obj9.type = "str";
	_obj9.size = 255;
	_obj9.Name = "pbcode";
	_obj9.required = false;
	
	var _obj10 = {};
	_obj10.type = "str";
	_obj10.size = 255;
	_obj10.Name = "defect1";
	_obj10.required = false;
	var _obj11 = {};
	_obj11.type = "str";
	_obj11.size = 255;
	_obj11.Name = "defect2";
	_obj11.required = false;
	_obj.Cols.push(_obj2);
	_obj.Cols.push(_obj3);
	_obj.Cols.push(_obj4);
	_obj.Cols.push(_obj5);
	_obj.Cols.push(_obj7);
	_obj.Cols.push(_obj8);
	_obj.Cols.push(_obj9);
	_obj.Cols.push(_obj10);
	_obj.Cols.push(_obj11);
	var _obj6 = {};
	_obj6.pname = data.ljname;
	_obj6.pno = data.ljbm;
	_obj6.pplace = "BAP";
	_obj6.pcount = data.holdsys;
	_obj6.pusername = data.realname;
	_obj6.defect1 = data.holdyy;
	_obj6.defect2 = '';
	_obj6.pclass = "早班";
	_obj6.pbcode = data.txm;
	_obj.Data.push(_obj6);
	_reportData3.Tables.push(_obj);
	//_reportData = _reportData2; //自动打印的数据变更名称是 _reportData ，所以这里重新赋值一下
	sendMsg(_reportData3);
	cfprint.onmessage = function(evn) {
		cfprint.log('收到消息！"' + evn.data + '"', evn);
		var resp = JSON && JSON.parse(evn.data) || $.parseJSON(evn.data); //解析服务器返回数据
		//console.log(resp);
		if(resp.result == 1) {
			callback();
		}
	}
}
//合格品打印
function windowsPrinter(callback) {
	var _data = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.loginData;
	var _okNum = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.productData.okNum;
	var _defectInfo = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.qualityData.defectInfo;
	//零件编码
	var _ljbm = _data.ljbm;
	//零件名称
	var _ljname = _data.ljname;
	var _sxname = _data.ygname;
	var hxtm = localStorage.getItem("hgp");
	var bxtm = localStorage.getItem("bhg");

	var _hljsl = localStorage.getItem("xhljsl"); //hljsl
	//缺陷数量
	var _defectNum = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.qualityData.defectNum;
	/**下面四个参数必须放在cfreport_custom.js脚本后面，以覆盖cfreport_custom.js中的默认值**/
	var _delay_send = -1; //发送打印服务器前延时时长(毫秒)，-1表示不自动打印
	var _delay_close = -1; //打印完成后关闭窗口的延时时长(毫秒), -1则表示不关闭
	var cfprint_addr = '127.0.0.1'; //打印服务器监听地址
	var cfprint_port = 54321; //打印服务器监听端口

	var _obj = {};
	_obj.Name = "Table1";
	_obj.Cols = [];
	_obj.Data = [];
	var _obj2 = {};
	_obj2.type = "str";
	_obj2.size = 255;
	_obj2.Name = "pname";
	_obj2.required = false;
	var _obj3 = {};
	_obj3.type = "str";
	_obj3.size = 255;
	_obj3.Name = "pno";
	_obj3.required = false;
	var _obj4 = {};
	_obj4.type = "str";
	_obj4.size = 255;
	_obj4.Name = "pplace";
	_obj4.required = false;
	var _obj5 = {};
	_obj5.type = "str";
	_obj5.size = 255;
	_obj5.Name = "pcount";
	_obj5.required = false;
	var _obj7 = {};
	_obj7.type = "str";
	_obj7.size = 255;
	_obj7.Name = "pusername";
	_obj7.required = false;
	var _obj8 = {};
	_obj8.type = "str";
	_obj8.size = 255;
	_obj8.Name = "pclass";
	_obj8.required = false;

	var _obj9 = {};
	_obj9.type = "str";
	_obj9.size = 255;
	_obj9.Name = "pbcode";
	_obj9.required = false;
	_obj.Cols.push(_obj2);
	_obj.Cols.push(_obj3);
	_obj.Cols.push(_obj4);
	_obj.Cols.push(_obj5);
	_obj.Cols.push(_obj7);
	_obj.Cols.push(_obj8);
	_obj.Cols.push(_obj9);
	var _obj6 = {};
	_obj6.pname = _ljname;
	_obj6.pno = _ljbm;
	_obj6.pplace = "BAP";
	_obj6.pcount = _hljsl;
	_obj6.pusername = _sxname;
	_obj6.pclass = "早班";
	_obj6.pbcode = hxtm;
	_obj.Data.push(_obj6);
	_reportData2.Tables.push(_obj);
	//_reportData = _reportData2; //自动打印的数据变更名称是 _reportData ，所以这里重新赋值一下
	sendMsg(_reportData2);
	cfprint.onmessage = function(evn) {
		cfprint.log('收到消息！"' + evn.data + '"', evn);
		var resp = JSON && JSON.parse(evn.data) || $.parseJSON(evn.data); //解析服务器返回数据
		//console.log(resp);
		if(resp.result == 1) {
			callback(hxtm);
		}
	}
}
//合格品补打
function windowsOkReprint(data, callback) {
	/**下面四个参数必须放在cfreport_custom.js脚本后面，以覆盖cfreport_custom.js中的默认值**/
	var _delay_send = -1; //发送打印服务器前延时时长(毫秒)，-1表示不自动打印
	var _delay_close = -1; //打印完成后关闭窗口的延时时长(毫秒), -1则表示不关闭
	var cfprint_addr = '127.0.0.1'; //打印服务器监听地址
	var cfprint_port = 54321; //打印服务器监听端口

	var _obj = {};
	_obj.Name = "Table1";
	_obj.Cols = [];
	_obj.Data = [];
	var _obj2 = {};
	_obj2.type = "str";
	_obj2.size = 255;
	_obj2.Name = "pname";
	_obj2.required = false;
	var _obj3 = {};
	_obj3.type = "str";
	_obj3.size = 255;
	_obj3.Name = "pno";
	_obj3.required = false;
	var _obj4 = {};
	_obj4.type = "str";
	_obj4.size = 255;
	_obj4.Name = "pplace";
	_obj4.required = false;
	var _obj5 = {};
	_obj5.type = "str";
	_obj5.size = 255;
	_obj5.Name = "pcount";
	_obj5.required = false;
	var _obj7 = {};
	_obj7.type = "str";
	_obj7.size = 255;
	_obj7.Name = "pusername";
	_obj7.required = false;
	var _obj8 = {};
	_obj8.type = "str";
	_obj8.size = 255;
	_obj8.Name = "pclass";
	_obj8.required = false;

	var _obj9 = {};
	_obj9.type = "str";
	_obj9.size = 255;
	_obj9.Name = "pbcode";
	_obj9.required = false;
	_obj.Cols.push(_obj2);
	_obj.Cols.push(_obj3);
	_obj.Cols.push(_obj4);
	_obj.Cols.push(_obj5);
	_obj.Cols.push(_obj7);
	_obj.Cols.push(_obj8);
	_obj.Cols.push(_obj9);
	var _obj6 = {};
	_obj6.pname = data.ljname;
	_obj6.pno = data.ljbm;
	_obj6.pplace = "BAP";
	_obj6.pcount = data.hgsl;
	_obj6.pusername = data.hygname;
	_obj6.pclass = "早班";
	_obj6.pbcode = data.hxtm;
	_obj.Data.push(_obj6);
	_reportData2.Tables.push(_obj);
	//_reportData = _reportData2; //自动打印的数据变更名称是 _reportData ，所以这里重新赋值一下
	sendMsg(_reportData2);
	cfprint.onmessage = function(evn) {
		cfprint.log('收到消息！"' + evn.data + '"', evn);
		var resp = JSON && JSON.parse(evn.data) || $.parseJSON(evn.data); //解析服务器返回数据
		//console.log(resp);
		if(resp.result == 1) {
			callback(data.hxtm);
		}
	}
}
//不合格品打印
function windowsPrinterNOK(callback) {
	var _data = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.loginData;
	var _okNum = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.productData.okNum;
	var _defectInfo = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.qualityData.defectInfo;
	var _details1 = ' ';
	var _details2 = ' ';
	var _details3 = ' ';
	for(var i = 0; i < _defectInfo.length; i++) {
		if(_defectInfo[i].num > 0) {
			if(i < 3) {
				_details1 = _details1 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
			}
			if(2 < i && i < 6) {
				_details2 = _details2 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
			}
			if(5 < i && i < 9) {
				_details3 = _details3 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
			}
		}
	}
	//零件编码
	var _ljbm = _data.ljbm;
	//零件名称
	var _ljname = _data.ljname;
	var _sxname = _data.ygname;
	var hxtm = localStorage.getItem("hgp");
	var bxtm = localStorage.getItem("bhg");

	var _hljsl = localStorage.getItem("xhljsl"); //hljsl
	//缺陷数量
	var _defectNum = JSON.parse(getLsItem('station_' + JSON.parse(getLsItem("currentStation")))).data.qualityData.defectNum;
	/**下面四个参数必须放在cfreport_custom.js脚本后面，以覆盖cfreport_custom.js中的默认值**/
	var _delay_send = -1; //发送打印服务器前延时时长(毫秒)，-1表示不自动打印
	var _delay_close = -1; //打印完成后关闭窗口的延时时长(毫秒), -1则表示不关闭
	var cfprint_addr = '127.0.0.1'; //打印服务器监听地址
	var cfprint_port = 54321; //打印服务器监听端口

	var _obj = {};
	_obj.Name = "Table1";
	_obj.Cols = [];
	_obj.Data = [];
	var _obj2 = {};
	_obj2.type = "str";
	_obj2.size = 255;
	_obj2.Name = "pname";
	_obj2.required = false;
	var _obj3 = {};
	_obj3.type = "str";
	_obj3.size = 255;
	_obj3.Name = "pno";
	_obj3.required = false;
	var _obj4 = {};
	_obj4.type = "str";
	_obj4.size = 255;
	_obj4.Name = "pplace";
	_obj4.required = false;
	var _obj5 = {};
	_obj5.type = "str";
	_obj5.size = 255;
	_obj5.Name = "pcount";
	_obj5.required = false;
	var _obj7 = {};
	_obj7.type = "str";
	_obj7.size = 255;
	_obj7.Name = "pusername";
	_obj7.required = false;
	var _obj8 = {};
	_obj8.type = "str";
	_obj8.size = 255;
	_obj8.Name = "pclass";
	_obj8.required = false;

	var _obj9 = {};
	_obj9.type = "str";
	_obj9.size = 255;
	_obj9.Name = "pbcode";
	_obj9.required = false;
	
	var _obj10 = {};
	_obj10.type = "str";
	_obj10.size = 255;
	_obj10.Name = "defect1";
	_obj10.required = false;
	var _obj11 = {};
	_obj11.type = "str";
	_obj11.size = 255;
	_obj11.Name = "defect2";
	_obj11.required = false;
	_obj.Cols.push(_obj2);
	_obj.Cols.push(_obj3);
	_obj.Cols.push(_obj4);
	_obj.Cols.push(_obj5);
	_obj.Cols.push(_obj7);
	_obj.Cols.push(_obj8);
	_obj.Cols.push(_obj9);
	_obj.Cols.push(_obj10);
	_obj.Cols.push(_obj11);
	var _obj6 = {};
	_obj6.pname = _ljname;
	_obj6.pno = _ljbm;
	_obj6.pplace = "BAP";
	_obj6.pcount = _defectNum;
	_obj6.pusername = _sxname;
	_obj6.defect1 = _details1;
	_obj6.defect2 = _details2;
	_obj6.pclass = "早班";
	_obj6.pbcode = bxtm;
	_obj.Data.push(_obj6);
	_reportData3.Tables.push(_obj);
	//_reportData = _reportData2; //自动打印的数据变更名称是 _reportData ，所以这里重新赋值一下
	sendMsg(_reportData3);
	cfprint.onmessage = function(evn) {
		cfprint.log('收到消息！"' + evn.data + '"', evn);
		var resp = JSON && JSON.parse(evn.data) || $.parseJSON(evn.data); //解析服务器返回数据
		//console.log(resp);
		if(resp.result == 1) {
			callback(bxtm);
		}
	}
}
//不合格品补打
function windowsNOkReprint(data,callback) {
	console.log(data);
	var _defectInfo = data.bdefectDatas;
	var _details1 = ' ';
	var _details2 = ' ';
	var _details3 = ' ';
	for(var i = 0; i < _defectInfo.length; i++) {
		if(_defectInfo[i].num > 0) {
			if(i < 3) {
				_details1 = _details1 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
			}
			if(2 < i && i < 6) {
				_details2 = _details2 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
			}
			if(5 < i && i < 9) {
				_details3 = _details3 + _defectInfo[i].defect + " " + _defectInfo[i].num + "件" + " "
			}
		}
	}
	/**下面四个参数必须放在cfreport_custom.js脚本后面，以覆盖cfreport_custom.js中的默认值**/
	var _delay_send = -1; //发送打印服务器前延时时长(毫秒)，-1表示不自动打印
	var _delay_close = -1; //打印完成后关闭窗口的延时时长(毫秒), -1则表示不关闭
	var cfprint_addr = '127.0.0.1'; //打印服务器监听地址
	var cfprint_port = 54321; //打印服务器监听端口

	var _obj = {};
	_obj.Name = "Table1";
	_obj.Cols = [];
	_obj.Data = [];
	var _obj2 = {};
	_obj2.type = "str";
	_obj2.size = 255;
	_obj2.Name = "pname";
	_obj2.required = false;
	var _obj3 = {};
	_obj3.type = "str";
	_obj3.size = 255;
	_obj3.Name = "pno";
	_obj3.required = false;
	var _obj4 = {};
	_obj4.type = "str";
	_obj4.size = 255;
	_obj4.Name = "pplace";
	_obj4.required = false;
	var _obj5 = {};
	_obj5.type = "str";
	_obj5.size = 255;
	_obj5.Name = "pcount";
	_obj5.required = false;
	var _obj7 = {};
	_obj7.type = "str";
	_obj7.size = 255;
	_obj7.Name = "pusername";
	_obj7.required = false;
	var _obj8 = {};
	_obj8.type = "str";
	_obj8.size = 255;
	_obj8.Name = "pclass";
	_obj8.required = false;

	var _obj9 = {};
	_obj9.type = "str";
	_obj9.size = 255;
	_obj9.Name = "pbcode";
	_obj9.required = false;
	
	var _obj10 = {};
	_obj10.type = "str";
	_obj10.size = 255;
	_obj10.Name = "defect1";
	_obj10.required = false;
	var _obj11 = {};
	_obj11.type = "str";
	_obj11.size = 255;
	_obj11.Name = "defect2";
	_obj11.required = false;
	_obj.Cols.push(_obj2);
	_obj.Cols.push(_obj3);
	_obj.Cols.push(_obj4);
	_obj.Cols.push(_obj5);
	_obj.Cols.push(_obj7);
	_obj.Cols.push(_obj8);
	_obj.Cols.push(_obj9);
	_obj.Cols.push(_obj10);
	_obj.Cols.push(_obj11);
	var _obj6 = {};
	_obj6.pname = data.ljname;
	_obj6.pno = data.ljbm;
	_obj6.pplace = "BAP";
	_obj6.pcount = data.bhgsl;
	_obj6.pusername = data.bygname;
	_obj6.defect1 = _details1;
	_obj6.defect2 = _details2;
	_obj6.pclass = "早班";
	_obj6.pbcode = data.bxtm;
	_obj.Data.push(_obj6);
	_reportData3.Tables.push(_obj);
	//_reportData = _reportData2; //自动打印的数据变更名称是 _reportData ，所以这里重新赋值一下
	sendMsg(_reportData3);
	cfprint.onmessage = function(evn) {
		cfprint.log('收到消息！"' + evn.data + '"', evn);
		var resp = JSON && JSON.parse(evn.data) || $.parseJSON(evn.data); //解析服务器返回数据
		//console.log(resp);
		if(resp.result == 1) {
			callback(data.bxtm);
		}
	}
}