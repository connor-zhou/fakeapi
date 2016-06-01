var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 我要融资
 *
 * @name more.loan
 * @href /more/loan
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} use 			用途
 * @input.post {string} amount 		金额
 * @input.post {string} term 	 		期限
 *
 * @description
 * 
 * https://localhost:3000/more/loan?client=asdfaqerq1werqwe&token=4352131234123&use=aaaaaaaaaa&amount=bbbbbbbbbb&term=ddddddddddd
 * 
 * https://fakeapi.fdjf.net:3000/more/loan?client=asdfaqerq1werqwe&token=4352131234123&use=aaaaaaaaaa&amount=bbbbbbbbbb&term=ddddddddddd
 *
 * @output {json} 保存融资请求的操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 */
router.all('/more/loan', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok'
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.意见反馈
 *
 * @name more.feedbackAdvice
 * @href /more/feedbackAdvice
 *
 * @input.post {string}      client 				客户端统计参数（common/client）
 * @input.post {string}      token 				Token
 * @input.post {string} 	   content				反馈意见内容 (不得多于160个字符)
 * @input.post {json}	       imgArray			    图片数组（数组转为json格式："[{data:xxxx,format:'jpg'},.....]"）
 * @input.post {int}	       imgDataType          图片数据类型( 0--base64，1--微信url，2--form表单 )
 *
 * @description
 *
 * https://localhost:5000/more/feedbackAdvice
 *
 * https://fakeapi.asterlake.cn:5000/more/feedbackAdvice
 *
 * @output {json} 用户反馈意见的接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 */
router.all('/more/feedbackAdvice', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok'
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.我的反馈
 *
 * @name more.myFeedback
 * @href /more/myFeedback
 *
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {int}    pageSize 				页容量 （默认为 10）
 * @input.post {int}    pageNumber 			页码   （默认为1）
 *
 * @description
 *
 * https://localhost:5000/more/myFeedback
 *
 * https://fakeapi.asterlake.cn:5000/more/myFeedback
 *
 * @output {json} 我的反馈列表接口
 * {
 * 		code:"{int}   状态代码（0表示成功，其它值表示失败）",
 *  	text:"{String} 状态描述",
 *  	recordList:[{
 *  		imgArray:"{Array} 图片url数组 （['url01','url02'....]）",
 *  		content:"{String} 反馈内容"
  *  		}]
 *
 * }
 */
router.all('/more/myFeedback', function (req, res, next) {
	var recordList = [];

	recordList.push({
		imgArray:["http://www.xingtouzi.com/static/img/index_img/media/sohu.jpg","http://www.xingtouzi.com/static/img/index_img/media/sohu.jpg"],
		content:'今天在路边看见有卖加密蚊帐的，不知道用的什么算法？！'
	})
    var resultValue = {
    	code: 0,
    	text: 'ok',
		recordList:recordList
	}
    res.json(resultValue);
});

/**
 * @fakedoc 活动分页列表
 *
 * @name more.activityPageList
 * @href /more/activityPageList
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {interger=} [pageSize=10] 		页容量
 * @input.post {interger=} [pageNumber=1] 		页码
 *
 * @description
 * 
 * https://localhost:3000/more/activityPageList?client=asdfaqerq1werqwe&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/more/activityPageList?client=asdfaqerq1werqwe&pageSize=10&pageNumber=1
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 *  	imageUrl:"{string} 	图片URL（绝对路径）",
 *  	title:"{string} 标题",
 *  	type:"{int} 类型（1--活动，点击后打开url；2--项目，点击后跳到项目详情",
 *  	target:"{string} 目标参数",
 *  	activity_period:"{string} 活动周期",
 *  	status:"{string} 状态(0:进行中、1：已结束)",
 *  	statusName:"{string} 状态名称(进行中、已结束)"
 *  }]
 * }
 */
router.all('/more/activityPageList', function (req, res, next) {
    var activities = [];
    _.forEach([2,3,4,5,6,7], function (i) {
    	activities.push({
    		imageUrl:'https://www.hsbank360.com/static/modules/front/images/index/banner-0' + i + '.jpg', 
        	title: 'slide'+i, 
        	type: [1,2][i % 2],
        	target: [1,2][i % 2] == 1 ? "https://www.hsbank360.com/f/activity/invitation" : "1",
        	activity_period:'2015-11-09至2015-12-09',
        	status:'1',
        	statusName:'已结束'
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: activities
    }
    res.json(resultValue);
});

module.exports = router;