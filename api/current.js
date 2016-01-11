﻿var express = require('express');
var router = express.Router();

/**
 * @fakedoc 项目分页列表
 * @name current.pageList
 * @href /current/pageList
 *
 * @description
 * 
 * https://localhost:3000/current/pageList?client=2435234523451&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/current/pageList?client=2435234523451&pageSize=10&pageNumber=1
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
 *      repaymentMode:"{String} 还款方式",
 *      financeMoney:"{number} 融资金额",
 *      netWorth:"{number} 单位净值",
 *      startingAmount:"{number} 起投金额",
 *      maxAmount:"{number} 最大投资金额",
 *      amount:"{number} 可投金额",
 *      rate:"{number} 已投百分比，不要加(%)",
 *      status:"{int} 状态(3-投标中，4--投标结束，5-还款中，6--还款结束，7-清算结束)",
 *      statusName:"{String} 状态名称",
 *      annualizedRate:"{number} 年化利率",
 *      annualizedRateNormal:"{number} 正常年化利率",
 *      annualizedRateAdd:"{number} 活动加息年化利率",
 *      interestOf10000Yuan:"{String} 每万元日收益",
 *      activityRemark:"{string} 活动说明（一元起投，灵活存取）",
 *      isNewUser:"{String} 是否新手项目（0是，其它不是）",
 *		isRecommend:"{String} 是否重点推荐（0是，其它不是）",
 *		isUseTicket:"{String} 是否可用券（0是，其它不是）",
 *		isCanAssign:"{String} 是否可转让（0是，其它不是）",
 *		terminalCodes:"{String} 适用终端编号，多个用逗号间隔(0：PC，1：Android，2：iOS，3：weixin)"
 * 	  }
 * 	]
 * }
 */
router.all('/current/pageList', function (req, res, next) {
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
            projectName: '活花生-' + start,
            projectType: type,
            projectTypeName: types[type],
            repaymentMode: "按日计息",
            financeMoney:999999,
            netWorth:1.2,
            startingAmount:100,
            maxAmount:10000,
            amount: 1000000,
            rate: 36,
            status: [3, 5, 7][start % 3],
            statusName: ["立即投资","还款中","已结束"][start % 3],
            annualizedRate: Math.floor(Math.random() * 20) * 0.01,
            annualizedRateNormal: Math.floor(Math.random() * 20) * 0.01,
            annualizedRateAdd: Math.floor(Math.random() * 5) * 0.01,
            interestOf10000Yuan: "2.00元",
            activityRemark: '一元起投，灵活存取',
            isNewUser:['0','1'][start % 2],
            isRecommend:['0','1'][start % 2],
            isUseTicket:['0','1'][start % 2],
            isCanAssign:['0','1'][start % 2],
            terminalCodes:'0,2'
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
 * @fakedoc 得到指定项目的详情信息
 *
 * @name current.detail
 * @href /current/detail
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int} projectId 		项目Id
 *
 * @description 
 * 
 * https://localhost:3000/current/detail?client=asdfaqerq1werqwe&projectId=1
 * 
 * https://fakeapi.fdjf.net:3000/current/detail?client=asdfaqerq1werqwe&projectId=1
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
 *      repaymentMode:"{String} 还款方式",
 *      financeMoney:"{number} 融资金额",
 *      netWorth:"{number} 单位净值",
 *      amount:"{number} 可投金额",
 *      rate:"{number} 已投百分比(%)",
 *      status:"{int} 状态(3-投标中，4--投标结束，5-还款中，6--还款结束，7-清算结束)",
 *      statusName:"{String} 状态名称",
 *      annualizedRate:"{number} 年化利率",
 *      annualizedRateNormal:"{number} 正常年化利率",
 *      annualizedRateAdd:"{number} 活动加息年化利率",
 *      interestOf10000Yuan:"{String} 每万元日收益",
 *      activityRemark:"{string} 活动说明（一元起投，灵活存取，按日计息）",
 *      startingAmount:"{number} 起投金额",
 *      maxAmount:"{number} 最大投资金额",
 *      startDate:"{String} 收益起始日",
 *      redeemRule:"{String} 提取到账时间",
 *      introduce:"{string} 项目简介",
 *      investmentScope:"{String} 投资范围",
 *      duration:"{String} 期限",
 *      buyRule:"{String} 购买规则",
 *      interestCalculateRule:"{string} 计息规则",
 *      fee:"{String} 费用",
 *      hasFinancedMoney:"{number} 累计投资总额",
 *      buyCount:"{int} 成功购买次数",
 *      hasRepaidMoney:"{int} 累计已赚收益",
 *      isNewUser:"{String} 是否新手项目（0是，其它不是）",
 *		isRecommend:"{String} 是否重点推荐（0是，其它不是）",
 *		isUseTicket:"{String} 是否可用券（0是，其它不是）",
 *		isCanAssign:"{String} 是否可转让（0是，其它不是）",
 *		terminalCodes:"{String} 适用终端编号，多个用逗号间隔(0：PC，1：Android，2：iOS，3：weixin)"
 *   }
 * }
 *
 */
router.all('/current/detail', function (req, res, next) {
    var projectId = req.body.projectId || 1;
    var types = ['商圈贷', '车辆抵押', '个人信用贷', '典当融资租赁'];
    var type = Math.floor(Math.random() * 4);
    var duration = Math.floor(Math.random() * 20 + 2);
    var project = {
        projectId: projectId,
        projectName: '活花生-' + projectId,
        projectType: type,
        projectTypeName: types[type],
        repaymentMode:"按日计息",
        financeMoney:999999,
        netWorth:1.2,
        amount: 360000,
        rate: 65,
        status: [3, 5, 7][projectId % 3],
        statusName: Math.floor(Math.random() * 3) == 1 ?  "立即投资":"还款中",
        annualizedRate: Math.floor(Math.random() * 20) * 0.01,
        annualizedRateNormal: Math.floor(Math.random() * 20) * 0.01,
        annualizedRateAdd: Math.floor(Math.random() * 5) * 0.01,
        interestOf10000Yuan: "2.00元",
        activityRemark: '一元起投，灵活存取，按日计息',
        startingAmount: [100, 1000][Math.floor(Math.random() * 2)],
        maxAmount:10000,
        startDate:"T + 1",
        redeemRule:"T + 1",
        introduce: '活花生是花生金服为帮助投资人更方便省心的投资而推出的自动投资工具。加入活花生后，系统将资金自动投资获得用户认可符合要求的优质标的。',
        investmentScope: '活花生的投标范围精选花生金服平台投资范围包括：不动产抵押债权、动产质押债权、私募基金收益权、存单质押债权、信托收益权质押债权、租赁租金收益权质押、个人信用贷债权、企业借款债权。',
        duration: "活期",
        buyRule: '1、起投金额为1元，按照1元的整数倍进行追加； 2、用户可以在限额内进行重复购买，用户的购买限额为100,000元，花生金服也可根据运营情况随时调整单人购买限额。',
        interestCalculateRule: '1、每天凌晨00:00根据昨日的预期年化收益率对活花生的计息金额进行计息。2、计息金额=活花生投资金额-未开始计息金额-转出中金额。 3、昨日预期收益=计息金额*昨日预期年化收益率/365',
        fee:"加入费用：0元；退出费用：0元",
        hasFinancedMoney:123456,
        buyCount:55,
        hasRepaidMoney: 100,
        isNewUser:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        isRecommend:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        isUseTicket:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        isCanAssign:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        terminalCodes:'0,2'
    };
    var resultValue = {
        code: 0,
    	text: 'ok',
    	data: project
    }
    res.json(resultValue);
});

/**
 * @fakedoc 得到指定项目的投资记录列表
 *
 * @name current.investmentRecords
 * @href /current/investmentRecords
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int} projectId 		项目Id
 *
 * @description 
 * 
 * 得到投资记录列表
 * 
 * https://localhost:3000/current/investmentRecords?client=asdfaqerq1werqwe&projectId=1
 * 
 * https://fakeapi.fdjf.net:3000/current/investmentRecords?client=asdfaqerq1werqwe&projectId=1
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
router.all('/current/investmentRecords', function (req, res, next) {
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
 * @name current.interestCalculation
 * @href /current/interestCalculation
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {int} projectId 		项目Id
 * @input.post {number} amount 		投资金额
 *
 * @description 
 * 
 * https://localhost:3000/current/interestCalculation?client=asdfaqerq1werqwe&projectId=1&amount=10000
 * 
 * https://fakeapi.fdjf.net:3000/current/interestCalculation?client=asdfaqerq1werqwe&projectId=1&amount=10000
 *
 * @output {json} 收益
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{String} 收益"
 * }
 */
router.all('/current/interestCalculation', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: '100'
    }
    res.json(resultValue);
});

module.exports = router;