var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 新闻列表（媒体报道、行业动态）
 * 
 * @name platform.newsPageList
 * @href /platform/news/pageList
 *
 * @input.post {string}     client 				客户端统计参数
 * @input.post {int}        type 				消息类型（0-媒体报道，1-行业动态）
 * @input.post {int=}      [pageNumber=1] 	    页码
 * @input.post {int=}      [pageSize=10] 	    页量
 *
 *
 * @output {json} 新闻
 * {
 *  	code:"{int} 状态代码（0表示成功，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *      data:[{
 *          id:"{string} 新闻id",
 *          profile:"{string} 新闻缩略图",
 *          title:"{string} 新闻标题",
 *          intro:"{string} 新闻内容简介",
 *          timeline:"{string} 创建时间（例：2015-12-12 12:12:15）"
 *      }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/platform/news/pageList
 *
 * https://192.168.1.86:3000/platform/news/pageList
 */

router.all('/platform/news/pageList', function (req, res, next) {

    var random = [1,3,5,8,2];
    var recordList= [];


    random.forEach(function(value,key){
        recordList.push({
            id:key+'',
            profile:'https://www.xingtouzi.com/upload/2017/07/12/1499850625416xqz4t.jpg',
            title:'有一个美丽的小女孩',
            timeline:'2017-09-1'+value+' 12:15:30',
            intro:'她的名字叫做小微，她有双温柔的眼睛...'
        });
    });

    res.json({
        code:0,
        text:'ok',
        data:recordList
    });
});

/**
 * @fakedoc 新闻详情
 *
 * @name platform.newsDetail
 * @href /platform/news/detail
 *
 *
 * @description
 *
 * https://localhost:5000/platform/news/detail
 *
 * https://192.168.1.86:3000/platform/news/detail
 *
 * @input.post {string} client 		客户端统计参数
 * @input.post {string} token		Token
 * @input.post {string} type		新闻类型（0-媒体报道，1-行业动态）
 * @input.post {string} newsId      新闻Id
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:
 *       {
 *          title:"{string}  消息标题",
 *          timeline:"{string} 消息时间",
 *          html:"{string} 系统消息详情html"
 *       }
 * }
 */
router.all('/platform/news/detail', function (req, res, next) {

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
 * @fakedoc 帮助中心问题列表
 *
 * @name platform.helpQuestionList
 * @href /platform/help/questionList
 *
 * @input.post {string}         client 				    客户端统计参数
 * @input.post {int=}           type 				    根据问题分类搜索
 * @input.post {string=}        keywords 				根据问题关键字搜索（type，keywords 都传，默认按keywords搜索）
 *
 *
 * @output {json} 问题列表
 * {
 *  	code:"{int} 状态代码（0表示成功，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *      data:[{
 *          id:"{string} 问题id",
 *          title:"{string} 问题"
 *      }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/platform/help/questionList
 *
 * https://192.168.1.86:3000/platform/help/questionList
 */

router.all('/platform/help/questionList', function (req, res, next) {

    var random = [1,3,5,8,2];
    var recordList= [];


    random.forEach(function(value,key){
        recordList.push({
            id:key+'',
            title:'什么是第三方资金托管？'
        });
    });

    res.json({
        code:0,
        text:'ok',
        data:recordList
    });
});

/**
 * @fakedoc 帮助中心问题答案
 *
 * @name platform.helpQanswer
 * @href /platform/help/answer
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/platform/help/answer
 *
 * https://192.168.1.86:3000/platform/help/answer
 *
 * @input.post {string} client 		    客户端统计参数
 * @input.post {string} questionId      问题Id
 *
 * @output {json} 帮助中心问题答案
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:
 *       {
 *          id:"{string} 问题id",
 *          answer:"{string} 问题答案"
 *       }
 * }
 */
router.all('/platform/help/answer', function (req, res, next) {

    var resultValue = {
        code: 0,
        text: 'ok',
        data: {
            id:'1542',
            answer:'<p>这是一条系统消息测试，如果你看到此条消息，说明数据返回正常，祝愉快</p>'
        }
    }
    res.json(resultValue);
});


/**
 * @fakedoc  星投资平台累计成交数据
 *
 * @name platform.dealData
 * @href /platform/dealData
 *
 * @input.post {string}   client                  客户端统计参数
 *
 * @description
 *
 *
 * https://localhost:5000/platform/dealData
 *
 * https://92.168.1.86:3000/platform/dealData
 *
 *
 * @output {json} 累计成交数据
 *{
 *      code:"{int} 状态代码（0表示成功，其它值表示失败）",
 *      text:"{string} 状态描述",
 *      data:{
 *          moneySum:"{string} 累计成交额",
 *          profitSum:"{string} 累计收益额",
 *          days:"{string}  累计运营天数"
 *      }
 * }
 *
 * */

router.all('/platform/dealData',function(req,res,next){

    var data ={
        moneySum:"170,151,360.00",
        profitSum:"12,374,483.37",
        days:"1286"
    }

    var resultValue = {
        code: 0,
        text:'ok',
        data:data
    }
    res.json(resultValue);
});




module.exports = router;