var express = require('express');
var router = express.Router();

/**
 * @fakedoc 项目分页列表
 * @name project.pageList
 * @href /project/pageList
 *
 * @description
 * 
 * https://localhost:5000/project/pageList
 * 
 * https://192.168.1.86:3000/project/pageList
 *
 * @input.post {string} client 		    客户端统计参数
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data: [
 * 	  {
 *      id:"{string} 项目ID",
 *      title:"{string} 项目名称",
 *      borrowerType:"{int} 借款方类型（0-个人，1-企业）",
 *      category:"{int} 项目类型",
 *      categoryText:"{string} 项目类型名称",
 *      repaymendMode:"{int} 还款方式",
 *      money:"{string} 融资金额",
 *      minInvest:"{string} 起投金额",
 *      remainInvest:"{string} 可投金额",
 *      schedule:"{string} 已投百分比，不要加(%)",
 *      status:"{int} 项目状态(0-投标中，1-还款中，2-已还款)",
 *      statusText:"{string} 项目状态说明",
 *      annualizedRate :"{string} 年化利率（不用加 %）",
 *      duration:"{int} 项目期限",
 *      durationUnit:"{string} 项目期限单位",
 *      expireTimeline:"{string} 过期时间",
 *      repaymentTimeline:"{string} 还款时间",
 *      canUseCashTicket :"{int} 能否用投资券 (1-能,0-否)",
 *      canUseRateTicket:"{int} 能否使用加息券 （1-能，0-否）",
 *      isNewUserProject:"{int} 是否是新手项目 (1-是，0-否)",
 *      isRecommend:"{int} 是否重点推荐 (1-是,0-否)"
 * 	  }
 * 	]
 * }
 */

router.all('/project/pageList', function (req, res, next) {
    var start = req.body.start || 1;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;

    var projects = [];
    var max = 35;
    var types = ['星企贷', '星保理', '星车宝', '星票宝','星房宝','星股神','星居宝'];
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 7);
        projects.push({
            id: start,
            borrowerType:start % 2,
            title: types[type] + '**' + start,
            category: type,
            categoryText: types[type],
            repaymentMode: "先息后本",
            minInvest:20000.00,
            remainMoney:4000000,
            money:5000000,
            schedule: 10,
            status: [1, 2, 3][start % 3],
            statusText:["投标中","还款中","已还款"][start % 3],
            annualizedRate: Math.floor(Math.random() * 20) * 0.01,
            duration: 6,
            durationUnit:'个月',
            repaymentTimeline:"2016-12-15",
            expireTimeline:"2017-08-06",
            canUseCashTicket:start % 2,
            canUseRateTicket:start % 2,
            isNewUserProject:start % 2,
            isRecommend:start % 2
        });
        start++;
        limit--;
    }
    var resultValue = {
        code: 0,
        text: 'ok',
        data: projects
    }
    res.json(resultValue);
});

/**
 * @fakedoc 推荐项目列表
 * 
 * @name project.recommend
 * @href /project/recommend
 * 
 * @input.post {string} client 		客户端统计参数
 *
 * @description 
 * 
 * https://localhost:5000/project/recommend
 * 
 * https://192.168.1.86:3000/project/recommend
 *
 * 输出同'/project/pageList'
 */

router.all('/project/recommendList', function (req, res, next) {
    res.redirect('/project/pageList?client=2435234523451&pageSize=10&pageNumber=1');
})

/**
 * @fakedoc 得到指定项目的详情信息
 *
 * @name project.detail
 * @href /project/detail
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} projectId 		项目Id
 *
 * @description 
 * 
 * https://localhost:5000/project/detail
 * 
 * https://192.168.1.86:3000/project/detail
 *
 * @output {json} 项目详情字段
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data: {
 *      id:"{string} 项目ID",
 *      title:"{string} 项目名称",
 *      borrowerType:"{int} 项目的借款方类别（0-个人，1-企业）",
 *      category:"{int} 项目类型(例：0-星企贷，1-星保理，2-星车宝)",
 *      categoryText:"{string} 项目类型描述",
 *      repaymentMode:"{string} 还款方式",
 *      schedule:"{string} 已投百分比(不需加百分号 %)",
 *      status:"{int} 状态(0-投标中，1-还款中，2-已还款)",
 *      statusText:"{string} 状态描述",
 *      annualizedRate:"{string} 年化利率（不用加 %）",
 *      duration:"{string} 项目期限",
 *      durationUnit:"{string} 项目期限单位",
 *      money:"{string} 融资金额",
 *      minInvest:"{string} 起投金额",
 *      remainInvest:"{string} 剩余可投金额",
 *      expireTimeline:"{string} 投资截止日期",
 *      repaymentTimeline:"{string} 还款日期",
 *      tips:"{string} 项目温馨提示",
 *      canUseCashTicket :"{int} 能否用投资券 (1-能,0-否)",
 *      canUseRateTicket:"{int} 能否使用加息券 （1-能，0-否）",
 *      isNewUserProject:"{int} 是否是新手项目 (1-是，0-否)",
 *      isRecommend:"{int} 是否重点推荐 (1-是,0-否)"
 *   }
 * }
 */

router.all('/project/detail', function (req, res, next) {
    var pid = req.body.projectId || 1;
    var types = ['星企贷', '星保理', '星车宝', '星票宝','星房宝','星股神','星居宝'];
    var type = Math.floor(Math.random() * 7+1);
    var duration = Math.floor(Math.random() * 20 + 2);
    var yesOrNo = Math.floor(Math.random() * 2);
    var project = {
        id: pid,
        title: types[type-1]+"**"+pid,
        borrowerType:Math.floor(Math.random()),
        category: type,
        categoryText: types[type-1],
        repaymentMode: Math.floor(Math.random() * 3) == 1 ?  "等额本息" : "一次性还本付息",
        money: '200000',
        schedule: 35,
        status: [1,2,3][type % 3],
        statusName: ["投标中","还款中","已还款"][type % 3],
        annualizedRate : Math.floor(Math.random() * 20) * 0.01,
        duration: duration,
        durationUnit:'个月',
        minInvest: ['2000','1000'][yesOrNo],
        remainInvest:'190000',
        expireTimeline: '2016-09-05',
        repaymentTimeline:"2016-08-05",
        tips:'这个项目可以赚好多哦！',
        canUseCashTicket:yesOrNo,
        canUseRateTicket:yesOrNo,
        isNewUserProject:yesOrNo,
        isRecommend:yesOrNo
    };

    var resultValue = {
        code: 0,
        text: 'ok',
        data: project
    }
    res.json(resultValue);
});


/**
 * @fakedoc 得到指定项目的还款计划
 *
 * @name project.repaymentPlan
 * @href /project/repaymentPlan
 *
 * @input.post {string} client 		    客户端统计参数（common/client）
 * @input.post {string} projectId 		项目Id
 *
 * @description 
 * 
 * https://localhost:5000/project/repaymentPlan
 * 
 * https://192.168.1.86:3000/project/repaymentPlan
 *
 * @output {json} 还款计划
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data: [{
 *  	planTimeline:"{string} 还款时间",
 *  	money:"{string} 计划偿还本金",
 *  	interest:"{string} 应还利息",
        days:"{string} 计息天数 "
 *  }]
 * }
 */
router.all('/project/repaymentPlan', function (req, res, next) {
    var moment = require('moment');
    var records = [];
    var limit = 10;
    while (limit-- > 0) {
        var dt = moment().add(10 - limit - 1, 'M');
        records.push({
            planTimeline: dt.format('YYYY-MM-DD'),
            money: '100',
            repayment:'2000',
            days:'20'
        });
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: records
    }
    res.json(resultValue);
});

/**
 * @fakedoc 得到指定项目的借款方信息
 *
 * @name project.borrowerInfo
 * @href project/borrowerInfo
 *
 * @input.post {string} client 		 客户端统计参数（common/client）
 * @input.post {string} projectId    项目id
 *
 * @description
 *
 * https://localhost:5000/project/borrowerInfo
 *
 * https://192.168.1.86:3000/project/borrowerInfo
 *
 *@output {json} 借款方信息
 * {
 *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *      text:"{string} 状态描述",
 *      data: {
 *          type:"{int} 借款方类型（0-个人，1-企业）",
 *          intro:"{string} 借款方介绍html（标题和正文需用不同标签或者类名区分，方便前台加样式。）",
 *          photos:"{array} 资料图片绝对url数组"
 *      }
 * }
 *
 * **/
router.all('/project/borrowerInfo',function(req,res,next){
    var pid = req.body.projectId || 1;
    var resultValue = {
        code:0,
        text:'ok',
        data:{
            type:Math.floor(Math.random()*1),
            intro: '<div><h2>企业背景：</h2><p>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p></div><div><h2>经营状况：</h2><p>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p></div>',
            photos:["http://www.xingtouzi.com/upload/images/20170726/15010699741311.png","http://www.xingtouzi.com/upload/images/20170726/15010699741311.png"]
        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc 得到指定项目的投资须知
 *
 * @name project.instruction
 * @href project/instruction
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} projectId   项目id
 *
 * @description
 *
 * https://localhost:5000/project/instruction
 *
 * https://192.168.1.86:3000/project/instruction
 *
 *@output {json} 企业信息
 * {
 *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *      text:"{string} 状态描述",
 *      data: {
 *          instruction:"{string} 项目说明的html（标题和正文需用不同标签或者类名区分，方便前台加样式。）"
 *      }
 * }
 *
 * **/
router.all('/project/instruction',function(req,res,next){
    var pid = req.body.projectId || 1;
    var resultValue = {
        code:0,
        text:'ok',
        data:{
            instruction: '<div><h2>企业背景：</h2><p>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p></div><div><h2>经营状况：</h2><p>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p></div>'   }
    }
    res.json(resultValue);
});

// /**
//  * @fakedoc xtz.得到指定项目的担保机构及意见
//  *
//  * @name project.guaranteeAndAdvice
//  * @href project/guaranteeAndAdvice
//  *
//  * @input.post {string} client 		客户端统计参数（common/client）
//  * @input.post {string} projectId      项目id
//  *
//  * @description
//  *
//  * https://localhost:5000/project/guaranteeAndAdvice
//  *
//  * https://192.168.1.86:3000/project/guaranteeAndAdvice
//  *
//  *@output {json} 担保机构及意见
//  * {
//  *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
//  *      text:"{string} 状态描述",
//  *      data: {
//  *          html:"{html} 担保机构及意见的html"
//  *      }
//  * }
//  *
//  * **/
// router.all('/project/guaranteeAndAdvice',function(req,res,next){
//     var pid = req.body.projectId || 1;
//     var resultValue = {
//         code:0,
//         text:'ok',
//         data:{
//             html: '<p><strong>企业背景：</strong>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p><p><strong>经营状况：</strong>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p><p><br/></p>'
//         }
//     }
//     res.json(resultValue);
// });
//

/**
 * @fakedoc 得到指定项目的贷后管理
 *
 * @name project.executionInfo
 * @href project/executionInfo
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} projectId      项目id
 *
 * @description
 *
 * https://localhost:5000/project/executionInfo
 *
 * https://192.168.1.86:3000/project/executionInfo
 *
 *@output {json} 贷后管理信息
 * {
 *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *      text:"{string} 状态描述",
 *      data: {
 *          info:"{string} 项目执行情况的html（标题和正文需用不同标签或者类名区分，方便前台加样式。）"
 *      }
 * }
 *
 *
 **/
router.all('/project/executionInfo',function(req,res,next){
    var pid = req.body.projectId || 1;
    var resultValue = {
        code:0,
        text:'ok',
        data:{
            info: '<div><h2>企业背景：</h2><p>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p></div><div><h2>经营状况：</h2><p>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p></div>'           }
    }
    res.json(resultValue);
});

/**
 * @fakedoc 得到指定项目的风险提示
 *
 * @name project.riskInfo
 * @href project/riskInfo
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} projectId      项目id
 *
 * @description
 *
 * https://localhost:5000/project/riskInfo
 *
 * https://192.168.1.86:3000/project/riskInfo
 *
 *@output {json} 风险提示
 * {
 *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *      text:"{string} 状态描述",
 *      data: {
 *          info:"{string} 风险提示的html（标题和正文需用不同标签或者类名区分，方便前台加样式。）"
 *      }
 * }
 *
 * **/

router.all('/project/riskInfo',function(req,res,next){
    var pid = req.body.projectId || 1;
    var resultValue = {
        code:0,
        text:'ok',
        data:{
            info: '<div><h2>企业背景：</h2><p>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p></div><div><h2>经营状况：</h2><p>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p></div>'        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc 得到指定项目的投资记录列表
 *
 * @name project.investmentRecords
 * @href /project/investmentRecords
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} projectId 		项目Id
 *
 * @description 
 * 
 * 得到投资记录列表
 * 
 * https://localhost:5000/project/investmentRecords
 * 
 * https://192.168.1.86:3000/project/investmentRecords
 *
 * @output {json} 投资记录列表
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data: [{
 *      repayMoney:"{string} 已还款金额 ",
 *      repayDuration:"{string} 已还款期数",
 *      remainRepayMoney:"{string} 未还款金额",
 *      remainRepayDuration:"{string} 未还款期数",
 *      recordList:{
 *          no:"{string} 顺序编号",
 *          name:"{string} 投资人（模糊化的用户手机号。例：135****2547）",
 *          money:"{string} 投资金额（默认两位小数。例：2000.00）",
 *          terminal:"{string} 投资来源（wechat，ios，android，website）",
 *          timeline:"{string} 投资时间（例：2017-09-05 12:15）"
 *      }
 *  }]
 * }
 */
router.all('/project/investmentRecords', function (req, res, next) {
    var start = req.query.start;
    var limit = req.query.limit;
    if (typeof start == 'undefined') {
        start = 0;
    }

    if (typeof limit == 'undefined') {
        limit = 10;
    }

    var records = [];
    var i = start;
    var max = 35;
    while (i < max && limit > 0) {
        records.push({
            no:i+'',
            name: 'a****d',
            timeline: '2015-08-29 12:15',
            money: [100.12, 1000.14, 50.15, 10500.65, 6700.00, 5.00][Math.floor(Math.random() * 6)],
            terminal:['wechat','ios','android','website'][Math.floor(Math.random() * 3)]
        });
        i++;
        limit--;
    }
    if (i > max) {
        records.push(undefined);// no more
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: records
    }
    res.json(resultValue);
});

/**
 *
 * @fakedoc 收益计算
 *
 * @name project.interestCalculation
 * @href /project/interestCalculation
 * 
 * @input.post {string}  client 		    客户端统计参数（common/client）
 * @input.post {string}  projectId 		    项目Id
 * @input.post {string}  money 		        投资金额
 * @input.post {string=} rateTicketId 		加息券id
 *
 * @description 
 * 
 * https://localhost:5000/project/interestCalculation
 * 
 * https://192.168.1.86:3000/project/interestCalculation
 *
 * @output {json} 收益
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      interest:"{string} 收益"
 *      }
 * }
 */

router.all('/project/interestCalculation', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data:{
            interest:100
        }
    }
    res.json(resultValue);
});

module.exports = router;