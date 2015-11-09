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
router.all('/more/activityPageList', function (req, res, next) {
    var activities = [];
    _.forEach([2,3,4,5,6,7], function (i) {
    	activities.push({
    		imageUrl:'https://www.hsbank360.com/static/modules/front/images/index/banner-0' + i + '.jpg', 
        	title: 'slide'+i, 
        	type: [1,2][i % 2],
        	target: [1,2][i % 2] == 1 ? "https://www.hsbank360.com/f/activity/invitation" : "1"
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