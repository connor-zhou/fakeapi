var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 我的消息-账户消息
 * 
 * @name message.accountMessagePageList
 * @href /message/accountMessagePageList
 *
 * @description
 * 
 * https://localhost:3000/message/accountMessagePageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/message/accountMessagePageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 *      messageId:"{String} 消息编号",
 *      messageChannel:"{String} 发送渠道：web(0)、微信(1)、android(2)、ios(3)、短信(4)、邮件(5)",
 *      title:"{String} 标题",
 *		content:"{String} 内容",
 *		status:"{int} 状态(2:已读、其它：未读)",
 *      statusName:"{String} 状态名称(已读、未读)",
 *      createDt:"{String} 创建时间"
 * 	  }
 * 	]
 * }
 */
router.all('/message/accountMessagePageList', function (req, res, next) {
    var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;

    var pageList = [];

    var max = 15;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        pageList.push({
        	messageId: "" + start,
        	messageChannel: "0",
        	title: "您有一笔回款",
        	content:"尊敬的用户，您于2016年02月14日回款22154.0元。关注花生金服官方微信，查详情、抢标的，让您随时随地赚不停！",
        	status:[0,2][start % 2],
            statusName: ["已读","未读"][start % 2],
            createDt: "2015-10-20"
        });
        start++;
        limit--;
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: pageList
    }
    res.json(resultValue);
});

/**
 * @fakedoc 我的消息-系统消息
 * 
 * @name message.systemMessagePageList
 * @href /message/systemMessagePageList
 *
 * @description
 * 
 * https://localhost:3000/message/systemMessagePageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/message/systemMessagePageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 *      messageId:"{String} 消息编号",
 *      messageChannel:"{String} 发送渠道：web(0)、微信(1)、android(2)、ios(3)、短信(4)、邮件(5)",
 *      title:"{String} 标题",
 *		content:"{String} 内容",
 *		status:"{int} 状态(2:已读、其它：未读)",
 *      statusName:"{String} 状态名称(已读、未读)",
 *      createDt:"{String} 创建时间"
 * 	  }
 * 	]
 * }
 */
router.all('/message/systemMessagePageList', function (req, res, next) {
    var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;

    var pageList = [];

    var max = 15;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        pageList.push({
        	messageId: "" + start,
        	messageChannel: "0",
        	title: "您有一条系统消息",
        	content:"活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动！",
        	status:[0,2][start % 2],
            statusName: ["已读","未读"][start % 2],
            createDt: "2015-10-20"
        });
        start++;
        limit--;
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: pageList
    }
    res.json(resultValue);
});

/**
 * @fakedoc 标记为已读
 *
 * @name message.read
 * @href /message/read
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} messageIds		消息Ids，半角逗号间隔
 * 
 * @output {json} 标记为已读
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/message/read?client=asdfaqerq1werqwe&token=2435135345623413&messageIds=2,3,52
 * 
 * https://fakeapi.fdjf.net:3000/message/read?client=asdfaqerq1werqwe&token=2435135345623413&messageIds=2,3,52
 */
router.all('/message/read', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text
    }
    res.json(resultValue);
});

module.exports = router;