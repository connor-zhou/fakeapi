var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc xtz.我的消息-账户消息
 * 
 * @name message.accountMessagePageList
 * @href /message/accountMessagePageList
 *
 * @description
 * 
 * https://localhost:5000/message/accountMessagePageList
 * 
 * https://fakeapi.asterlake.cn:5000/message/accountMessagePageList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 *      msgsId:"{String} 消息编号",
 *      category:"{String} 消息分类（默认返回0）",
 *      title:"{String} 标题",
 *		content:"{String} 内容",
 *		markRead:"{int} 状态(1:已读、其它：未读)",
 *      markReadName:"{String} 状态名称(已读、未读)",
 *      timeline:"{String} 创建时间"
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
        	msgsId: "msgs" + start,
        	category: 0,
        	title: "提现成功",
        	content:"尊敬的用户，您于2016年02月14日回款22154.0元。关注花生金服官方微信，查详情、抢标的，让您随时随地赚不停！",
        	markRead:[0,1][type % 2],
            markReadName: ["未读","已读"][type % 2],
            timeline: "2015-10-20 13:02"
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
 * @fakedoc xtz.我的消息-系统消息
 * 
 * @name message.systemMessagePageList
 * @href /message/systemMessagePageList
 *
 * @description
 * 
 * https://localhost:5000/message/systemMessagePageList
 * 
 * https://fakeapi.asterlake.cn:5000/message/systemMessagePageList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 *      msgsId:"{String} 消息编号",
 *      title:"{String} 标题",
 *		content:"{String} 内容",
 *      timeline:"{String} 创建时间"
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
        	msgsId: "msgs" + start,
        	title: "新消息",
        	content:"活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动活动，活动！",
            timeline: "2015-10-20 12:30"
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
 * @fakedoc xtz.标记为已读
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
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/message/read
 * 
 * https://fakeapi.asterlake.cn:5000/message/read
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