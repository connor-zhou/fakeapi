var express = require('express');
var router = express.Router();

/**
 * @fakedoc 活期项目分页列表
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
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        projects.push({
            projectId: start,
            projectName: '小李子-' + start,
            projectType: type,
            projectTypeName: "",
            repaymentMode: "按日计息",
            financeMoney:9999999,
            netWorth:1.2,
            startingAmount:100,
            maxAmount:10000,
            amount: 1043,
            rate: 36,
            status: [3, 5, 7][start % 3],
            statusName: ["立即投资","还款中","已结束"][start % 3],
            annualizedRate: Math.floor(Math.random() * 20) * 0.01,
            annualizedRateNormal: Math.floor(Math.random() * 20) * 0.01,
            annualizedRateAdd: Math.floor(Math.random() * 5) * 0.01,
            interestOf10000Yuan: "2.00元",
            activityRemark: '一元起投，灵活存取',
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
 * @fakedoc 得到指定活期项目的详情信息
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
 *		terminalCodes:"{String} 适用终端编号，多个用逗号间隔(0：PC，1：Android，2：iOS，3：weixin)"
 *   }
 * }
 *
 */
router.all('/current/detail', function (req, res, next) {
    var projectId = req.body.projectId || 1;
    var types = ['mj', '车辆抵押', '个人信用贷', '典当融资租赁'];
    var type = Math.floor(Math.random() * 4);
    var duration = Math.floor(Math.random() * 20 + 2);
    var project = {
        projectId: projectId,
        projectName:types[type] +'-' + projectId,
        projectType: type,
        projectTypeName: types[type],
        repaymentMode:"按日计息",
        financeMoney:999,
        netWorth:1.2,
        amount: 3600,
        rate: 55,
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
 * @fakedoc 活期收益计算
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

/**
 * @fakedoc 我的活花生
 *
 * @name current.myCurrent
 * @href /current/myCurrent
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @output {json} 我的活花生
 * {
 *  	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  	text:"{String} 状态描述",
 *  	data:[{
 *      	projectId:"{string} 项目Id",
 *      	projectName:"{string} 项目名称",
 *      	amount:"{number} 投资金额(持有本金)",
 *      	receivedProfit:"{number} 累计收益",
 *      	annualizedRate:"{number} 年化利率"
 *    	}]
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/current/myCurrent?client=asdfaqerq1werqwe&token=2435135345623413
 * 
 * https://fakeapi.fdjf.net:3000/current/myCurrent?client=asdfaqerq1werqwe&token=2435135345623413
 */
router.all('/current/myCurrent', function (req, res, next) {
	var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;
	var projects = [];
    var max = 35;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        projects.push({
            projectId: start,
            projectName: '活花生-' + start,
            amount: 1000000,
            receivedProfit: 36000,
            annualizedRate: Math.floor(Math.random() * 20) * 0.01
        });
        start++;
        limit--;
    }
    if (start > max) {
        projects.push(undefined);//no more
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: projects
    }
    res.json(resultValue);
});

/**
 * @fakedoc 我的活花生--项目详情
 *
 * @name current.myCurrentDetail
 * @href /current/myCurrentDetail
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} projectId 		项目Id
 *
 * @output {json} 我的投资--项目详情
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	account: {
 *  		principal:"{number} 持有本金（元）",
 *  		redeemingPrincipal:"{number} 赎回中本金（元）",
 *  		canRedeemPrincipal:"{number} 可赎回本金（元）",
 *  		interest:"{number} 可提取收益（元）",
 *  		totalInterest:"{number} 累计收益（元）",
 *  		interestOfYesterday:"{number} 昨日收益（元）"
 *  	},
 *  	project:{
 *  		projectId:"{int} 项目ID",
 *      	projectName:"{string} 项目名称",
 *      	projectType:"{int} 项目类型",
 *      	projectTypeName:"{string} 项目类型名称",
 *      	repaymentMode:"{String} 还款方式",
 *      	financeMoney:"{number} 融资金额",
 *      	netWorth:"{number} 单位净值",
 *      	amount:"{number} 可投金额",
 *      	rate:"{number} 已投百分比(%)",
 *      	status:"{int} 状态(3-投标中，4--投标结束，5-已清盘)",
 *      	statusName:"{String} 状态名称",
 *      	annualizedRate:"{number} 年化利率",
 *      	annualizedRateNormal:"{number} 正常年化利率",
 *      	annualizedRateAdd:"{number} 活动加息年化利率",
 *      	interestOf10000Yuan:"{String} 每万元日收益",
 *      	activityRemark:"{string} 活动说明（一元起投，灵活存取，按日计息）",
 *      	startingAmount:"{number} 起投金额",
 *      	maxAmount:"{number} 最大投资金额",
 *      	startDate:"{String} 收益起始日",
 *      	redeemRule:"{String} 赎回规则",
 *      	introduce:"{string} 项目简介",
 *      	investmentScope:"{String} 投资范围",
 *      	duration:"{String} 期限",
 *      	buyRule:"{String} 购买规则",
 *      	interestCalculateRule:"{string} 计息规则",
 *      	fee:"{String} 费用",
 *      	hasFinancedMoney:"{number} 累计投资总额",
 *      	buyCount:"{int} 成功购买次数",
 *      	hasRepaidMoney:"{int} 累计已赚收益",
 *			terminalCodes:"{String} 适用终端编号，多个用逗号间隔(0：PC，1：Android，2：iOS，3：weixin)"
 *  	}
 *      
 *    }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/current/myCurrentDetail?client=asdfaqerq1werqwe&token=4324523452345&projectId=2435135345623413
 * 
 * https://fakeapi.fdjf.net:3000/current/myCurrentDetail?client=asdfaqerq1werqwe&token=4324523452345&projectId=2435135345623413
 */
router.all('/current/myCurrentDetail', function (req, res, next) {
	var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		account: {
    			 principal:22222,
    			 redeemingPrincipal:20000,
    			 canRedeemPrincipal:2222,
    			 interest:22,
    			 totalInterest:10,
    			 interestOfYesterday:2
    		},
    		project: {
    			projectId: start,
    	        projectName: '活花生-' + start,
    	        projectType: "",
    	        projectTypeName: "",
    	        repaymentMode:"按日计息",
    	        financeMoney:999999,
    	        netWorth:1.2,
    	        amount: 360000,
    	        rate: 65,
    	        status: [3, 4, 5][start % 3],
    	        statusName: Math.floor(Math.random() * 3) == 1 ?  "立即投资":"还款中",
    	        annualizedRate: Math.floor(Math.random() * 20) * 0.01,
    	        annualizedRateNormal: Math.floor(Math.random() * 20) * 0.01,
    	        annualizedRateAdd: Math.floor(Math.random() * 5) * 0.01,
    	        interestOf10000Yuan: "2.00元",
    	        activityRemark: '一元起投，灵活存取，按日计息',
    	        startingAmount: [100, 1000][Math.floor(Math.random() * 2)],
    	        maxAmount:10000,
    	        startDate:"T + 1",
    	        redeemRule:"1、按照1元的整数倍赎回，每人每天赎回限额5万元。2、一般T+1日到账，赎回的资金当日起不再计算收益。3、若遇巨额赎回情况，花生金服有权拒绝客户当日的转出申请，您可以次日继续申请转出，具体以公司通知为准。",
    	        introduce: '活花生是花生金服为帮助投资人更方便省心的投资而推出的自动投资工具。加入活花生后，系统将资金自动投资获得用户认可符合要求的优质标的。',
    	        investmentScope: '活花生的投标范围精选花生金服平台投资范围包括：不动产抵押债权、动产质押债权、私募基金收益权、存单质押债权、信托收益权质押债权、租赁租金收益权质押、个人信用贷债权、企业借款债权。',
    	        duration: "活期",
    	        buyRule: '1、起投金额为1元，按照1元的整数倍进行追加； 2、用户可以在限额内进行重复购买，用户的购买限额为100,000元，花生金服也可根据运营情况随时调整单人购买限额。',
    	        interestCalculateRule: '1、每天凌晨00:00根据昨日的预期年化收益率对活花生的计息金额进行计息。2、计息金额=活花生投资金额-未开始计息金额-转出中金额。 3、昨日预期收益=计息金额*昨日预期年化收益率/365',
    	        fee:"加入费用：0元；退出费用：0元",
    	        hasFinancedMoney:123456,
    	        buyCount:55,
    	        hasRepaidMoney: 100,
    	        terminalCodes:'0,2'
    		}
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 指定活花生项目的本金变化（投资或赎回）分页列表
 *
 * @name current.myCurrentPrincipalPageList
 * @href /current/myCurrentPrincipalPageList
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 * @input.post {string} projectId 		项目Id
 * @input.post {string} changeType 	变化类型（投资：0；赎回：1；空则取全部）
 *
 * @output {json} 分页列表
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	opDt:"{String} 操作日期时间",
 *  	changeType:"{String} 变更类型",
 *  	changeTypeName:"{String} 变更类型名称",
 *  	changeVal:"{String} 变更值"
 *   }]
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/current/myCurrentPrincipalPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1&projectId=1
 * 
 * https://fakeapi.fdjf.net:3000/current/myCurrentPrincipalPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1&projectId=1
 */
router.all('/current/myCurrentPrincipalPageList', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: [
    	   {opDt:'2015-10-19 11:01:01',changeType:1,changeTypeName:'投资',changeVal:'+1000'},
    	   {opDt:'2015-10-12 11:01:01',changeType:1,changeTypeName:'投资',changeVal:'+3300'},
    	   {opDt:'2015-10-09 11:01:01',changeType:1,changeTypeName:'赎回',changeVal:'-1000'},
    	   {opDt:'2015-10-09 11:01:01',changeType:1,changeTypeName:'投资',changeVal:'+10000'},
    	   {opDt:'2015-09-09 11:01:01',changeType:1,changeTypeName:'赎回',changeVal:'-3000'}
       ]
    }
    res.json(resultValue);
});

/**
 * @fakedoc 指定活花生项目的利息变化（收息或赎回）分页列表
 *
 * @name current.myCurrentInterestPageList
 * @href /current/myCurrentInterestPageList
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 * @input.post {string} projectId 		项目Id
 * @input.post {string} changeType 	变化类型（收息：0；赎回：1；空则取全部）
 *
 * @output {json} 交易记录分页列表
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	opDt:"{String} 操作日期时间",
 *  	changeType:"{String} 变更类型",
 *  	changeTypeName:"{String} 变更类型名称",
 *  	changeVal:"{String} 变更值"
 *   }]
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/current/myCurrentInterestPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1&projectId=1
 * 
 * https://fakeapi.fdjf.net:3000/current/myCurrentInterestPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1&projectId=1
 */
router.all('/current/myCurrentInterestPageList', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: [
    	   {opDt:'2015-10-19 11:01:01',changeType:1,changeTypeName:'收息',changeVal:'+1.7965'},
    	   {opDt:'2015-10-12 11:01:01',changeType:1,changeTypeName:'收息',changeVal:'+1.7965'},
    	   {opDt:'2015-10-09 11:01:01',changeType:1,changeTypeName:'赎回',changeVal:'-2'},
    	   {opDt:'2015-10-09 11:01:01',changeType:1,changeTypeName:'收息',changeVal:'+1.7965'},
    	   {opDt:'2015-09-09 11:01:01',changeType:1,changeTypeName:'赎回',changeVal:'-3'}
       ]
    }
    res.json(resultValue);
});

/**
 * @fakedoc 提取收益
 *
 * @name current.redeemInterest
 * @href /current/redeemInterest
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} projectId 		项目Id
 * @input.post {string} amount 		提取收益金额
 *
 * @output {json} 提取收益
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	resultCode:"{String} 结果（0：成功；1：失败）",
 *  	resultText:"{String} 结果描述"
 *   }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/current/redeemInterest?client=asdfaqerq1werqwe&token=2435135345623413projectId=1&amount=11
 * 
 * https://fakeapi.fdjf.net:3000/current/redeemInterest?client=asdfaqerq1werqwe&token=2435135345623413&projectId=1&amount=11
 */
router.all('/current/redeemInterest', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: {
    		resultCode:0,
    		resultText:"提取收益成功"
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 赎回本金
 *
 * @name current.redeemPrincipal
 * @href /current/redeemPrincipal
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} projectId 		项目Id
 * @input.post {string} amount 		赎回金额
 *
 * @output {json} 赎回本金
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	resultCode:"{String} 结果（0：成功；1：失败）",
 *  	resultText:"{String} 结果描述"
 *   }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/current/redeemPrincipal?client=asdfaqerq1werqwe&token=2435135345623413projectId=1&amount=11
 * 
 * https://fakeapi.fdjf.net:3000/current/redeemPrincipal?client=asdfaqerq1werqwe&token=2435135345623413&projectId=1&amount=11
 */
router.all('/current/redeemPrincipal', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: {
    		resultCode:0,
    		resultText:"赎回本金成功"
    	}
    }
    res.json(resultValue);
});

module.exports = router;