var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 首页轮播列表
 *
 * @name event.carousel
 * @href /event/carousel
 *
 * @input.post {string}  client 		客户端统计参数
 * @input.post {string=} [type=0]		图片用途类型（0--首页轮播图，1--弹框图片，2--启动页广告）
 *
 * @description
 *
 * https://localhost:5000/event/carousel
 *
 * https://192.168.1.86:3000/event/carousel
 *
 * @output {json} 首页轮播列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 * 	  	id:"{string} 图片id",
 *  	photo:"{string} 图片URL（绝对路径）",
 *  	title:"{string} 标题",
 *  	target:"{string} 链接地址"
 *     }
 * 	]
 * }
 *
 *
 */
router.all('/event/carousel', function (req, res, next) {
    var events = [],random;
    _.forEach([2,3,4,5,6,8], function (i) {
		random = Math.floor(Math.random*10);
    	events.push({
			id:random,
    		photo:'https://www.hsbank360.com/static/modules/front/images/index/banner-0' + i + '.jpg',
        	title: 'slide'+i,
        	target: [1,2][i % 2] == 1 ? "https://www.hsbank360.com/f/activity/invitation" : "1"
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: events
    }
    res.json(resultValue);
});

/**
 * @fakedoc App自动更新检查接口
 *
 * @name event.checkUpdate
 * @href /event/checkUpdate
 *
 * @input.post {string} client 		客户端统计参数
 *
 * @description
 *
 * https://localhost:5000/event/checkUpdate
 *
 * https://192.168.1.86:3000/event/checkUpdate
 *
 * @output {json} App自动更新检查
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		needUpdate:"{int} 		    是否有更新（1--是，0--否）",
 * 		needForcedUpdate:"{int} 	是否需要强制更新（1--是，0--否）",
 *  	url:"{string} 				待更新的apk文件url（android）或AppStore下载链接（iOS）",
 *  	version:"{String} 			待更新App版本",
 *  	versionInfo:"{string} 		待更新App版本说明",
 *  	androidAppSize:"{string} 	待更新App文件大小（byte）"
 *    }
 * }
 *
 */
router.all('/event/checkUpdate', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		needUpdate:1,
    		needForcedUpdate:1,
    		url:"http://www.fdjf.net/client/fdjf_hsbank-1.0.1-fdjf-FDJF-release-aligned-com.fdjf.hsbank.apk",
    		version:"1.0.1",
    		versionInfo:"测试功能",
    		androidAppSize:"134123"
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 服务端状态检查接口
 *
 * @name event.checkServerStatus
 * @href /event/checkServerStatus
 *
 * @input.post {string} client 		客户端统计参数
 *
 * @description
 *
 * https://localhost:5000/event/checkServerStatus
 *
 * https://192.168.1.86:3000/event/checkServerStatus
 *
 * @output {json} 服务端状态检查
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		statusCode:"{int} 		服务端是否正常工作（1--是，0--否）",
 *  	statusText:"{string}    服务端状态说明"
 *    }
 * }
 *
 */
router.all('/event/checkServerStatus', function (req, res, next) {
	var i = Math.floor(Math.random() * 1);
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		statusCode:i == 1 ? 1 : 0,
    		statusText:i == 1 ? "ok" : "维护中，请稍候再试"
    	}
    }
    res.json(resultValue);
});



module.exports = router;