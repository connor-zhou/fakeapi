var express = require('express');
var router = express.Router();

/**
 * @fakedoc 项目分页列表
 * @name project.pageList
 * @href /project/pageList
 *
 * @description
 * 
 * https://localhost:3000/project/pageList?client=2435234523451&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/project/pageList?client=2435234523451&pageSize=10&pageNumber=1
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
 *      projectId:"{int} 项目ID",
 *      projectName:"{String} 项目名称",
 *      projectType:"{int} 项目类型",
 *      projectTypeName:"{string} 项目类型名称",
 *      repaymentMode:"{int} 还款方式",
 *      repaymentModeName:"{String} 还款方式名称",
 *      startingAmount:"{number} 起投金额",
 *      amount:"{number} 可投金额",
 *      rate:"{number} 已投百分比，不要加(%)",
 *      status:"{int} 状态(3-投标中，4--投标结束，5-还款中，6--还款结束，7-清算结束)",
 *      statusName:"{String} 状态名称",
 *      annualizedRate:"{number} 年化利率",
 *      projectDuration:"{int} 借款期限，单位 *月份*",
 *      safeguardMode:"{int} 保障方式",
 *      safeguardModeName:"{String} 保障方式名称",
 *      isNewUser:"{String} 是否新手项目（0是，其它不是）",
 *		isRecommend:"{String} 是否重点推荐（0是，其它不是）",
 *		isUseTicket:"{String} 是否可用券（0是，其它不是）",
 *		isCanAssign:"{String} 是否可转让（0是，其它不是）"
 * 	  }
 * 	]
 * }
 */
router.all('/project/pageList', function (req, res, next) {
    var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;

    var projects = [];

    var max = 35;
    var types = ['商圈贷', '车辆抵押', '个人信用贷', '典当融资租赁'];
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        projects.push({
            projectId: start,
            projectName: types[type] + '-' + start,
            projectType: type,
            projectTypeName: types[type],
            repaymentMode: 1,
            repaymentModeName:  ["等额本息","先息后本","一次性还本付息"][start % 3],
            startingAmount:100,
            amount: 1000000,
            rate: 36,
            status: [3, 5, 7][start % 3],
            statusName: ["立即投资","还款中","已结束"][start % 3],
            annualizedRate: Math.floor(Math.random() * 20) * 0.01,
            projectDuration: 5,
            safeguardMode:2,
            safeguardModeName: "本息保障",
            isNewUser:['0','1'][start % 2],
            isRecommend:['0','1'][start % 2],
            isUseTicket:['0','1'][start % 2],
            isCanAssign:['0','1'][start % 2]
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
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description 
 * 
 * https://localhost:3000/project/recommend?client=2435234523451
 * 
 * https://fakeapi.fdjf.net:3000/project/recommend?client=2435234523451
 *
 * 输出同'/project/pageList'
 * 
 */
router.all('/project/recommend', function (req, res, next) {
    res.redirect('/project/pageList?client=2435234523451&pageSize=10&pageNumber=1');
});

/**
 * @fakedoc 得到指定项目的详情信息
 *
 * @name project.detail
 * @href /project/detail
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int} projectId 		项目Id
 *
 * @description 
 * 
 * https://localhost:3000/project/detail?client=asdfaqerq1werqwe&projectId=1
 * 
 * https://fakeapi.fdjf.net:3000/project/detail?client=asdfaqerq1werqwe&projectId=1
 *
 * @output {json} 项目详情字段
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *      projectId:"{int} 项目ID",
 *      projectName:"{string} 项目名称",
 *      projectType:"{int} 项目类型",
 *      projectTypeName:"{string} 项目类型名称",
 *      repaymentMode:"{int} 还款方式",
 *      repaymentModeName:"{String} 还款方式名称",
 *      planAmount:"{number} 融资金额",
 *      amount:"{number} 可投金额",
 *      rate:"{number} 已投百分比(%)",
 *      status:"{int} 状态(3-投标中，4--投标结束，5-还款中，6--还款结束，7-清算结束)",
 *      statusName:"{String} 状态名称",
 *      annualizedRate:"{number} 年化利率",
 *      borrowersUser:"{string} 借款人",
 *      projectDuration:"{int} 借款期限，单位 *月份*",
 *      startingAmount:"{number} 起投金额",
 *      biddingDeadline:"{date} 投资截止日期",
 *      projectIntroduce:"{string} 项目简介",
 *      useMethod:"{string} 用途",
 *      transferCode:"{string} 转让天数限制",
 *      transferConstraint:"{string} 转让限制描述",
 *      riskInfo:"{html} 风险信息",
 *      aboutFiles:["{string} 文件链接"],
 *      investmentCount:"{int} 投资人数",
 *      isNewUser:"{String} 是否新手项目（0是，其它不是）",
 *		isRecommend:"{String} 是否重点推荐（0是，其它不是）",
 *		isUseTicket:"{String} 是否可用券（0是，其它不是）",
 *		isCanAssign:"{String} 是否可转让（0是，其它不是）"
 *   }
 * }
 *
 */
router.all('/project/detail', function (req, res, next) {
    var projectId = req.body.projectId || 1;
    var types = ['商圈贷', '车辆抵押', '个人信用贷', '典当融资租赁'];
    var type = Math.floor(Math.random() * 4);
    var duration = Math.floor(Math.random() * 20 + 2);
    var project = {
        projectId: projectId,
        projectName: '个人信用贷款-' + projectId,
        projectType: type,
        projectTypeName: types[type],
        repaymentMode: 1,
        repaymentModeName: Math.floor(Math.random() * 3) == 1 ?  "等额本息" : "一次性还本付息",
        planAmount: 1000000,
        amount: 360000,
        rate: 65,
        status: [3, 5, 7][projectId % 3],
        statusName: Math.floor(Math.random() * 3) == 1 ?  "立即投资":"还款中",
        annualizedRate: Math.floor(Math.random() * 20) * 0.01,
        borrowersUser: 'D*s*d*s',
        projectDuration: duration,
        startingAmount: [100, 1000][Math.floor(Math.random() * 2)],
        biddingDeadline: '2015-09-05',
        projectIntroduce: 'some text一些介绍',
        useMethod: '资金周转',
        transferCode: 3,
        transferConstraint: '投资后3天可转让',
        riskInfo: '<h2>项目风险保障方案</h2><p>专业尽调团队对核心企业和必要的融资项目进行360度实地尽职调查，调查报告的数据包括实地调查数据、人民银行征信系统数</p>',
        aboutFiles: (function () {
            var i = 0, f = [];
            while (i++ < 9)f.push('/images/example/about-file-' + i + '.png');
            return f;
        })(),
        investmentCount: 100,
        isNewUser:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        isRecommend:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        isUseTicket:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        isCanAssign:Math.floor(Math.random() * 2) == 1 ? '0' : '1'
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
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int} projectId 		项目Id
 *
 * @description 
 * 
 * https://localhost:3000/project/repaymentPlan?client=asdfaqerq1werqwe&projectId=1
 * 
 * https://fakeapi.fdjf.net:3000/project/repaymentPlan?client=asdfaqerq1werqwe&projectId=1
 *
 * @output {json} 还款计划
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 *  	planDate:"{string} 还款日期",
 *  	planMoney:"{string} 还款金额",
 *  	principal:"{string} 应还本金",
 *  	interest:"{string} 应还利息",
 *  	remainingPrincipal:"{string} 剩余应还本金",
 *  	status:"{string} 状态",
 *  	statusName:"{String} 状态名称"
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
            planDate: dt.format('YYYY-MM-DD'),
            planMoney: 100,
            principal: 90,
            interest: 10,
            remainingPrincipal: 1000,
            status: Math.floor(Math.random() * 4),
            statusName: "还款中"
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
 * @fakedoc 得到指定项目的投资记录列表
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
 * https://localhost:3000/project/investmentRecords?client=asdfaqerq1werqwe&projectId=1
 * 
 * https://fakeapi.fdjf.net:3000/project/investmentRecords?client=asdfaqerq1werqwe&projectId=1
 *
 * @output {json} 投资记录列表
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 *  	investmentUser:"{string} 投资人",
 *  	opTerm:"{string} 操作终端",
 *  	opDt:"{string} 操作日期",
 *  	amount:"{string} 投资金额"
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
            investmentUser: 'a*b*c*d',
            opTerm: 'iPhone客户端',
            opDt: '2015-08-29',
            amount: [100, 1000, 50, 10500, 6700, 5][Math.floor(Math.random() * 6)]
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
 * @fakedoc 收益计算
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
 * https://localhost:3000/project/interestCalculation?client=asdfaqerq1werqwe&projectId=1&amount=10000
 * 
 * https://fakeapi.fdjf.net:3000/project/interestCalculation?client=asdfaqerq1werqwe&projectId=1&amount=10000
 *
 * @output {json} 收益
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{number} 收益"
 * }
 */
router.all('/project/interestCalculation', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: 100
    }
    res.json(resultValue);
});

module.exports = router;