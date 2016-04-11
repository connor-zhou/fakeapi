var express = require('express');
var router = express.Router();

/**
 * @fakedoc xtz.项目分页列表
 * @name project.pageList
 * @href /project/pageList
 *
 * @description
 * 
 * https://localhost:5000/project/pageList
 * 
 * https://fakeapi.asterlake.cn:5000/project/pageList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 *      id:"{int} 项目ID",
 *      title:"{String} 项目名称",
 *      category:"{int} 项目类型",
 *      categoryName:"{String} 项目类型名称",
 *      methods:"{int} 还款方式",
 *      money:"{number} 融资金额",
 *      minInvest:"{number} 起投金额",
 *      haveMoney:"{number} 已投金额",
 *      canInvestMoney:"{number} 可投金额",
 *      schedule:"{number} 已投百分比，不要加(%)",
 *      projectStatus:"{int} 状态(1-投标中，2--还款中，3--已还款)",
 *      projectStatusName:"{String} 状态说明",
 *      revenue:"{number} 年化利率",
 *      revenueAward:"{number} 活动加息年化利率",
 *      revenueDisplay:"{String} 活动说明（新手活动）",
 *      duration:"{String} 借款期限，单位 *月份*",
 *      expireTime:"{String} 过期时间",
 *      repaymentTime:"{String} 还款时间",
 *      canInvest:"{int} 能否投资(1--能,0--不能)",
 *      canUseAward :"{int} 能否用券 (1--能,0--不能)",
 *      isRecommend:"{int} 是否推荐 (1--是,0--否)"
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
            title: types[type] + '**' + start,
            category: type,
            categoryName: types[type],
            methods: "先息后本",
            minInvest:2000.00,
            haveMoney: 1000000,
            canInvestMoney:4000000,
            money:5000000,
            schedule: 10,
            projectStatus: [1, 2, 3][start % 3],
            projectStatusName:["投标中","还款中","已还款"][start % 3],
            revenue: Math.floor(Math.random() * 20) * 0.01,
            revenueAward: Math.floor(Math.random() * 5) * 0.01,
            revenueDisplay: 'app专享加息+1.4%',
            duration: "6个月",
            repaymentTime:"2016-12-15",
            expireTime:"2017-08-06",
            canInvest:start % 2,
            canUseAward:start % 2,
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
 * @fakedoc xtz.推荐项目列表
 * 
 * @name project.recommend
 * @href /project/recommend
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description 
 * 
 * https://localhost:5000/project/recommend
 * 
 * https://fakeapi.asterlake.cn:5000/project/recommend
 *
 * 输出同'/project/pageList'
 */
router.all('/project/recommend', function (req, res, next) {
    res.redirect('/project/pageList?client=2435234523451&pageSize=10&pageNumber=1');
});
/**
 * @fakedoc xtz.得到指定项目的详情信息
 *
 * @name project.detail
 * @href /project/detail
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int} projectId 		项目Id
 *
 * @description 
 * 
 * https://localhost:5000/project/detail
 * 
 * https://fakeapi.asterlake.cn:5000/project/detail
 *
 * @output {json} 项目详情字段
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *      id:"{int} 项目ID",
 *      title:"{String} 项目名称",
 *      category:"{int} 项目类型(1--星企贷，2--星保理，3--星车宝，4--星票宝，5--星房宝，6--星股神，7--星居宝)",
 *      categoryName:"{String} 项目类型名称",
 *      methods:"{String} 还款方式",
 *      money:"{number} 融资金额",
 *      haveMoney:"{number} 已融资金额",
 *      schedule:"{number} 已投百分比(%)",
 *      projectStatus:"{int} 状态(1--投标中，2-还款中，3-已还款",
 *      projectStatusName:"{String} 状态说明",
 *      revenue:"{number} 年化利率",
 *      revenueAward:"{number} 活动加息年化利率",
 *      revenueDisplay:"{string} 活动说明（新手活动）",
 *      duration:"{string} 项目期限，单位 *月份*",
 *      minInvest:"{number} 起投金额",
 *      canInvestMoney:"{number} 可投金额",
 *      expireTime:"{string} 投资截止日期",
 *      repaymentTime:"{string} 还款日期",
 *      investNumber:"{number} 投资总数",
 *      isRecommend:"{int} 是否推荐 (1--能,0--否)",
 *      canInvest:"{int} 能否投资 (1--能,0--否)",
 *      canUseAward :"{int} 能否用券 (1--能,0--否)"
 *   }
 * }
 *
 */
router.all('/project/detail', function (req, res, next) {
    var pid = req.body.projectId || 1;
    var types = ['星企贷', '星保理', '星车宝', '星票宝','星房宝','星股神','星居宝'];
    var type = Math.floor(Math.random() * 7+1);
    var duration = Math.floor(Math.random() * 20 + 2);
    var project = {
        id: pid,
        title: types[type-1]+"**"+pid,
        category: type,
        categoryName: types[type-1],
        methods: Math.floor(Math.random() * 3) == 1 ?  "等额本息" : "一次性还本付息",
        money: 200000,
        haveMoney:10000,
        schedule: 35,
        projectStatus: [1,2,3][type % 3],
        projectStatusName: ["投标中","还款中","已还款"][type % 3],
        revenue: Math.floor(Math.random() * 20) * 0.01,
        revenueAward: Math.floor(Math.random() * 5) * 0.01,
        revenueDisplay: 'app专享加息+2.4%',
        duration: duration+"个月",
        minInvest: [2000,1000][Math.floor(Math.random() * 2)],
        canInvestMoney:190000,
        expireTime: '2016-09-05',
        repaymentTime:"2016-08-05",
        investNumber:100,
        isRecommend:Math.floor(Math.random() * 2),
        canInvest:Math.floor(Math.random() * 2),
        canUseAward:Math.floor(Math.random() * 2)
    };
    var resultValue = {
        code: 0,
        text: 'ok',
        data: project
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到指定项目的还款计划
 *
 * @name project.repaymentPlan
 * @href /project/repaymentPlan
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int} projectId 		项目Id
 *
 * @description 
 * 
 * https://localhost:5000/project/repaymentPlan
 * 
 * https://fakeapi.asterlake.cn:5000/project/repaymentPlan
 *
 * @output {json} 还款计划
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 *  	planTime:"{string} 还款时间",
 *  	repayment:"{bumber} 计划偿还本金",
 *  	interest:"{number} 应还利息",
        days:"{int} 计息天数 "
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
            planTime: dt.format('YYYY-MM-DD'),
            interest: 100,
            repayment:2000,
            days:20
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
 * @fakedoc xtz.得到指定项目的企业信息
 *
 * @name project.enterpriseInfo
 * @href project/enterpriseInfo
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {String} projectId      项目id
 *
 * @description
 *
 * https://localhost:5000/project/enterpriseInfo
 *
 * https://fakeapi.asterlake.cn:5000/project/enterpriseInfo
 *
 *@output {json} 企业信息
 * {
 *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *      text:"{String} 状态描述",
 *      data: {
 *          html:"{html} 企业信息的html"
 *      }
 * }
 *
 * **/
router.all('/project/enterpriseInfo',function(req,res,next){
    var pid = req.body.projectId || 1;
    var resultValue = {
        code:0,
        text:'ok',
        data:{
           html: '<p><strong>企业背景：</strong>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p><p><strong>经营状况：</strong>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p><p><br/></p>'
        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到指定项目的项目描述
 *
 * @name project.description
 * @href project/description
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {String} projectId      项目id
 *
 * @description
 *
 * https://localhost:5000/project/description
 *
 * https://fakeapi.asterlake.cn:5000/project/description
 *
 *@output {json} 企业信息
 * {
 *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *      text:"{String} 状态描述",
 *      data: {
 *          html:"{html} 项目描述的html"
 *      }
 * }
 *
 * **/
router.all('/project/description',function(req,res,next){
    var pid = req.body.projectId || 1;
    var resultValue = {
        code:0,
        text:'ok',
        data:{
            html: '<p><strong>企业背景：</strong>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p><p><strong>经营状况：</strong>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p><p><br/></p>'
        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到指定项目的担保机构及意见
 *
 * @name project.guaranteeAndAdvice
 * @href project/guaranteeAndAdvice
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {String} projectId      项目id
 *
 * @description
 *
 * https://localhost:5000/project/guaranteeAndAdvice
 *
 * https://fakeapi.asterlake.cn:5000/project/guaranteeAndAdvice
 *
 *@output {json} 担保机构及意见
 * {
 *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *      text:"{String} 状态描述",
 *      data: {
 *          html:"{html} 担保机构及意见的html"
 *      }
 * }
 *
 * **/
router.all('/project/guaranteeAndAdvice',function(req,res,next){
    var pid = req.body.projectId || 1;
    var resultValue = {
        code:0,
        text:'ok',
        data:{
            html: '<p><strong>企业背景：</strong>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p><p><strong>经营状况：</strong>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p><p><br/></p>'
        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到指定项目的资金运转
 *
 * @name project.moneyOperation
 * @href project/moneyOperation
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {String} projectId      项目id
 *
 * @description
 *
 * https://localhost:5000/project/moneyOperation
 *
 * https://fakeapi.asterlake.cn:5000/project/moneyOperation
 *
 *@output {json} 资金运转
 * {
 *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *      text:"{String} 状态描述",
 *      data: {
 *          html:"{html} 资金运转的html"
 *      }
 * }
 *
 * **/
router.all('/project/moneyOperation',function(req,res,next){
    var pid = req.body.projectId || 1;
    var resultValue = {
        code:0,
        text:'ok',
        data:{
            html: '<p><strong>企业背景：</strong>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p><p><strong>经营状况：</strong>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p><p><br/></p>'
        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到指定项目的风险控制
 *
 * @name project.riskControl
 * @href project/riskControl
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {String} projectId      项目id
 *
 * @description
 *
 * https://localhost:5000/project/riskControl
 *
 * https://fakeapi.asterlake.cn:5000/project/riskControl
 *
 *@output {json} 风险控制
 * {
 *      code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *      text:"{String} 状态描述",
 *      data: {
 *          html:"{html} 风险控制的html"
 *      }
 * }
 *
 * **/

router.all('/project/riskControl',function(req,res,next){
    var pid = req.body.projectId || 1;
    var resultValue = {
        code:0,
        text:'ok',
        data:{
            html: '<p><strong>企业背景：</strong>借款企业于2012年2月29日注册成立。公司自成立以来，严守“质量是公司的生命，顾客需求是公司的目标”的理念，参与市场竞争，做到在质量上让顾客放心，在价格上让顾客称心，在服务上让顾客欢心。目前已多家电气公司签订长期合作，上下游稳定。</p><p><strong>经营状况：</strong>主要生产产品为冰箱内胆、冰箱干燥器、压塑机后罩盖等，和多家大型电气厂商签订长期供销合同。今年9月份才上的吹塑项目，主要为江苏某集团生产的冷却壶出口产品。公司产品一次送检合格率98%，顾客反馈信息处理率100%。</p><p><br/></p>'
        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到指定项目的投资记录列表
 *
 * @name project.investmentRecords
 * @href /project/investmentRecords
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int} projectId 		项目Id
 *
 * @description 
 * 
 * 得到投资记录列表
 * 
 * https://localhost:5000/project/investmentRecords
 * 
 * https://fakeapi.asterlake.cn:5000/project/investmentRecords
 *
 * @output {json} 投资记录列表
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 *  	uname:"{string} 投资人",
 *  	timeline:"{string} 操作日期",
 *  	money:"{string} 投资金额"
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
            uname: 'a****d',
            timeline: '2015-08-29 12:15',
            money: [100, 1000, 50, 10500, 6700, 5][Math.floor(Math.random() * 6)]
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
 * @fakedoc xtz.收益计算
 *
 * @name project.interestCalculation
 * @href /project/interestCalculation
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int} projectId 		项目Id
 * @input.post {number} amount 		投资金额
 *
 * @description 
 * 
 * https://localhost:5000/project/interestCalculation
 * 
 * https://fakeapi.asterlake.cn:5000/project/interestCalculation
 *
 * @output {json} 收益
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *      interest:"{number} 收益"
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