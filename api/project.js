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
 *      categoryName:"{string} 项目类型名称",
 *      methods:"{int} 还款方式",
 *      money:"{number} 融资金额",
 *      minInvest:"{number} 起投金额",
 *      haveMoney:"{number} 已投金额",
 *      schedule:"{number} 已投百分比，不要加(%)",
 *      projectStatus:"{int} 状态(3-投标中，4--投标结束，5-还款中，6--还款结束，7-清算结束)",
 *      projectStatusName:"{String} 状态说明",
 *      revenue:"{number} 年化利率",
 *      revenueAward:"{number} 活动加息年化利率",
 *      revenueDisplay:"{string} 活动说明（新手专享加息+8%，App专享加息+xx%，平台贴息+xx%，金刚花生保存障计划项目）",
 *      duration:"{int} 借款期限，单位 *月份*",
 *      expireTime:"{string} 过期时间",
 *      repaymentTime:"{string} 还款时间",
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
            money:5000000,
            schedule: 10,
            projectStatus: [3, 5, 7][start % 3],
            projectStatusName: Math.floor(Math.random() * 3) == 1 ?  "未满在投":"还款中",
            revenue: Math.floor(Math.random() * 20) * 0.01,
            revenueAward: Math.floor(Math.random() * 5) * 0.01,
            revenueDisplay: 'app专享加息+1.4%',
            duration: 5,
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
 *      title:"{string} 项目名称",
 *      category:"{int} 项目类型",
 *      categoryName:"{string} 项目类型名称",
 *      methods:"{int} 还款方式",
 *      money:"{number} 融资金额",
 *      haveMoney:"{number} 已投金额",
 *      schedule:"{number} 已投百分比(%)",
 *      projectStatus:"{int} 状态(3-投标中，4--投标结束，5-还款中，6--还款结束，7-清算结束)",
 *      projectStatusName:"{String} 状态说明",
 *      revenue:"{number} 年化利率",
 *      revenueAward:"{number} 活动加息年化利率",
 *      revenueDisplay:"{string} 活动说明（新手专享加息+8%，App专享加息+xx%，平台贴息+xx%，金刚花生保存障计划项目）",
 *      duration:"{int} 项目期限，单位 *月份*",
 *      minInvest:"{number} 起投金额",
 *      canInvest:"{number} 可投金额",
 *      expireTime:"{string} 投资截止日期",
 *      repaymentTime:"{string} 还款日期",
 *      description:"{string} 项目简介",
 *      information:"{string} 企业信息",
 *      revolve:"{string} 资金运转",
 *      control:"{html} 风险控制",
 *      market:"{string} 担保机构及其意见",
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
    var type = Math.floor(Math.random() * 7);
    var duration = Math.floor(Math.random() * 20 + 2);
    var project = {
        id: pid,
        title: '个人信用贷款' + pid,
        category: type,
        categoryName: types[type],
        methods: Math.floor(Math.random() * 3) == 1 ?  "等额本息" : "一次性还本付息",
        money: 200000,
        haveMoney:10000,
        schedule: 35,
        projectStatus: [3, 5, 7][pid % 3],
        projectStatusName: Math.floor(Math.random() * 3) == 1 ?  "未满在投":"还款中",
        revenue: Math.floor(Math.random() * 20) * 0.01,
        revenueAward: Math.floor(Math.random() * 5) * 0.01,
        revenueDisplay: 'app专享加息+2.4%',
        duration: duration,
        minInvest: [2000,1000][Math.floor(Math.random() * 2)],
        canInvest:190000,
        expireTime: '2016-09-05',
        repaymentTime:"2016-08-05",
        information: 'some text一些介绍',
        description: '资金周转',
        revolve: '投资后3天可转让',
        market:"星投资",
        control: '<h2>项目风险保障方案</h2><p>专业尽调团队对核心企业和必要的融资项目进行360度实地尽职调查，调查报告的数据包括实地调查数据、人民银行征信系统数</p>',
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
            uname: 'a*b*c*d',
            timeline: '2015-08-29',
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