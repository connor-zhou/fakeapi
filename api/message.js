var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 我的消息（账户、系统）
 * 
 * @name message.pageList
 * @href /message/pageList
 *
 * @input.post {string}     client 				客户端统计参数
 * @input.post {string}     token 				Token
 * @input.post {int}        type 				消息类型（0-账户消息，1-系统消息）
 * @input.post {int=}      status 				消息状态（0-未读，1-已读，不传或者传空，返回全部）
 * @input.post {int=}      [pageNumber=1] 	    页码
 * @input.post {int=}      [pageSize=10] 	    页量
 *
 *
 * @output {json} 我的消息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *      data:{
 *          count:"{int} 条目总数量",
 *          recordList:[{
 *              id:"{string} 消息唯一标识id",
 *              status:"{int} 消息状态（0-未读，其它已读）",
 *              title:"{string} 消息标题",
 *              content:"{string} 消息内容简介（type == 0 时显示全部内容）",
 *              timeline:"{string} 创建时间（例：2015-12-12 12:12:15）"
 *      }]
 *      }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/message/pageList
 *
 * https://192.168.1.86:3000/message/pageList
 */

router.all('/message/pageList', function (req, res, next) {

    var random = [1,3,5,8,2,5];
    var recordList= [];


    random.forEach(function(value,key){
        recordList.push({
            id:key+'',
            title:'有一个美丽的小女孩',
            timeline:'2017-09-1'+value,
            content:'她的名字叫做小微..',
            status:key % 2
        });
    });

    res.json({
        code:0,
        text:'ok',
        data:recordList
    });
});

/**
 * @fakedoc 消息详情
 *
 * @name message.detail
 * @href /message/detail
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/message/detail
 *
 * https://192.168.1.86:3000/message/detail
 *
 * @input.post {string} client 		客户端统计参数
 * @input.post {string} token		Token
 * @input.post {string} msgId       消息Id
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:
 *       {
 *          title:"{string}  消息标题",
 *          timeline:"{string} 消息时间",
 *          html:"{string} 系统消息详情html"
 *       }
 * }
 */

router.all('/message/detail', function (req, res, next) {

    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
            title:'测试系统消息',
            timeline:'2015-12-20 12:15:45',
            html:'<p>这是一条系统消息测试，如果你看到此条消息，说明数据返回正常，祝愉快</p>'
        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc 将消息标记为已读
 *
 * @name message.markRead
 * @href /message/markRead
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token		Token
 * @input.post {string} msgIds		消息Ids，半角逗号间隔（空值表示将所有设为已读）
 * 
 * @output {json} 标记为已读
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/message/markRead
 * 
 * https://192.168.1.86:3000/message/markRead
 */

router.all('/message/markRead', function (req, res, next) {

    res.json({
        code:0,
        text:"ok"
    });
});

module.exports = router;