var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 首页轮播列表
 *
 * @name event.carousel
 * @href /event/carousel
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 * 
 * https://localhost:3000/event/carousel?client=asdfaqerq1werqwe
 * 
 * https://fakeapi.fdjf.net:3000/event/carousel?client=asdfaqerq1werqwe
 *
 * @output {json} 首页轮播列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 *  	imageUrl:"{string} 	图片URL（绝对路径）",
 *  	title:"{string} 标题",
 *  	type:"{int} 类型（1--活动，点击后打开url；2--项目，点击后跳到项目详情",
 *  	target:"{string} 目标参数"
 *     }
 * 	]
 * }
 * 
 *
 */
router.all('/event/carousel', function (req, res, next) {
    var events = [];
    _.forEach([2,3,4,5,6,7], function (i) {
    	events.push({
    		imageUrl:'https://www.hsbank360.com/static/modules/front/images/index/banner-0' + i + '.jpg', 
        	title: 'slide'+i, 
        	type: [1,2][i % 2],
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
 * @fakedoc Android自动更新接口
 *
 * @name event.androidUpdate
 * @href /event/androidUpdate
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 * 
 * https://localhost:3000/event/androidUpdate?client=asfdaqwerqe
 * 
 * https://fakeapi.fdjf.net:3000/event/androidUpdate?client=asfdaqwerqe
 * 
 * @output {json} Android自动更新接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		needUpdate:"{String} 	是否强制更新（0是，其它不是）",
 *  	url:"{string} 			待更新的apk文件URL",
 *  	version:"{String} 		待更新App版本",
 *  	versionInfo:"{string} 	待更新App版本说明"
 *    }
 * }
 *
 */
router.all('/event/androidUpdate', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		needUpdate:"1",
    		url:"http://www.fdjf.net/client/fdjf_hsbank-1.0.1-fdjf-FDJF-release-aligned-com.fdjf.hsbank.apk",
    		version:"1.0.1",
    		versionInfo:"测试功能"
    	}
    }
    res.json(resultValue);
});

module.exports = router;