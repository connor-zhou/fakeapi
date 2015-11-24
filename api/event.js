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
 * @fakedoc App自动更新检查接口
 *
 * @name event.checkUpdate
 * @href /event/checkUpdate
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/checkUpdate?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/checkUpdate?client=asfdaqwerqe
 *
 * @output {json} App自动更新检查
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		needUpdate:"{String} 	是否强制更新（0是，其它不是）",
 *  	url:"{string} 			待更新的apk文件url（android）或AppStore下载链接（iOS）",
 *  	version:"{String} 		待更新App版本",
 *  	versionInfo:"{string} 	待更新App版本说明"
 *    }
 * }
 *
 */
router.all('/event/checkUpdate', function (req, res, next) {
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

/**
 * @fakedoc 服务端状态检查接口
 *
 * @name event.checkServerStatus
 * @href /event/checkServerStatus
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/checkServerStatus?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/checkServerStatus?client=asfdaqwerqe
 *
 * @output {json} 服务端状态检查
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		statusCode:"{String} 		服务端是否正常工作（0是，其它不是）",
 *  	statusText:"{string} 		服务端状态说明"
 *    }
 * }
 *
 */
router.all('/event/checkServerStatus', function (req, res, next) {
	var i = Math.floor(Math.random() * 3);
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		statusCode:i == 1 ? "1" : "0",
    		statusText:i == 1 ? "维护中，请稍候再试" : "ok"
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 新手任务
 *
 * @name event.newUserTask
 * @href /event/newUserTask
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/newUserTask?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/newUserTask?client=asfdaqwerqe
 *
 * @output {json} 新手任务接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		step1:"{String} 	注册奖励",
 *  	step2:"{string} 	开通第三方资金托管奖励",
 *  	step3:"{String} 	充值奖励 ",
 *  	step4:"{string} 	首次投资奖励 "
 *    }
 * }
 *
 */
router.all('/event/newUserTask', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		step1:"您已获得5元投资券",
    		step2:"您已获得1张10元投资券",
    		step3:"您已获得10元投资券",
    		step4:"您已获得8元现金和200元投资券",
    	}
    }
    res.json(resultValue);
});


/**
 * @fakedoc 抽奖
 *
 * @name event.lottery
 * @href /event/lottery
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/lottery?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/lottery?client=asfdaqwerqe
 *
 * @output {json} 抽奖接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	rotate:"{int} 	旋转角度",
 *  	result:"{String}   返回信息",
 *  	token:"{String}     奖品token",
 * 		imgUrl:"{String}    奖品logo"
 *    }
 * }
 *
 */
router.all('/event/lottery', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			rotate:240,
			result:"恭喜您，获得了现金奖励1.88元",
			token:'token',
			imgUrl:"https://www.hsbank360.com/upload_files/avatar/20151112170848_538.png"
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc 中奖榜单
 *
 * @name event.lotteryPrizeList
 * @href /event/lotteryPrizeList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/lotteryPrizeList?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/lotteryPrizeList?client=asfdaqwerqe
 *
 * @output {json} 中奖榜单接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 *  	mobile:"{String} 	手机号码",
 *  	prize:"{String}   奖品"
 *  }]
 * }
 *
 */
router.all('/event/lotteryPrizeList', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: [
			{mobile:'158****4609',result:"10元投资券"},
			{mobile:'158****4609',result:"迪士尼米奇玩偶"},
			{mobile:'158****4609',result:"10元投资券"},
			{mobile:'158****4609',result:"iPad mini3"},
			{mobile:'158****4609',result:"10元投资券"},
			{mobile:'158****4609',result:"10元投资券"},
			{mobile:'158****4609',result:"50元投资券"},
			{mobile:'158****4609',result:"10元投资券"},
			{mobile:'158****4609',result:"iPhone 6s"},
			{mobile:'158****4609',result:"20元投资券"}
		]
	}
	res.json(resultValue);
});


module.exports = router;