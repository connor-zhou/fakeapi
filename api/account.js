var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 手机号码是否已注册
 *
 * @name account.hasRegistered
 * @href /account/hasRegistered
 *
 * @input.post {string} client 客户端统计参数（common/client）
 * @input.post {string} mobile 手机号码
 * 
 * @output {json} 手机号码是否已注册
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 * 
 * @description
 *
 * 手机号码如果是 13577778888 表示已经注册过，否则都表示未注册过
 *
 * https://localhost:3000/account/hasRegistered?client=asdfaqerq1werqwe&mobile=13577778888
 * 
 * https://fakeapi.fdjf.net:3000/account/hasRegistered?client=asdfaqerq1werqwe&mobile=13577778888
 */
router.all('/account/hasRegistered', function (req, res, next) {
	var mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13577778888');
	var range = 10;
	var rand = Math.random();
	var i = Math.round(rand * range);
	var code = 0;
	var text = "已注册";
    if (mobile != '13577778888') {
    	code = 1;
    	text = "未注册";
    }
    var resultValue = {
    	code: code,
    	text: text
    }
    res.json(resultValue);
});

/**
 * @fakedoc 发送验证码
 *
 * @name account.sendSmsCode
 * @href /account/sendSmsCode
 *
 * @input.post {string} client 客户端统计参数（common/client）
 * @input.post {string} mobile 手机号码
 *
 * @output {json} 手机号码是否已注册
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @description
 * 
 * https://localhost:3000/account/sendSmsCode?client=asdfaqerq1werqwe&mobile=13566667777 
 * 
 * https://fakeapi.fdjf.net:3000/account/sendSmsCode?client=asdfaqerq1werqwe&mobile=13566667777
 */
router.all('/account/sendSmsCode', function (req, res, next) {
	var resultValue = {
    	code: 0,
    	text: '发送成功'
    }
    res.json(resultValue);
});

/**
 * @fakedoc 注册
 *
 * @name account.register
 * @href /account/register
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} mobile 		手机号码
 * @input.post {string} password 		密码
 * @input.post {string} smsCode 		短信验证码
 * @input.post {string} inviteCode 	邀请码(选填)
 * @input.post {string} channel 		注册渠道(选填)
 * @input.post {string} lotteryToken 	奖品token(选填)
 * @input.post {string} subid			最终客户在渠道商处的编码， 由渠道商生成，花生金服负责记录(选填)
 *
 * @output {json} 注册结果
 * {
 * 		code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  	text:"{String} 状态描述",
 *  	data: {
 *  		token:"{String} 登录凭证"
 *  	}
 * }
 *
 * @description
 *
 * https://localhost:3000/account/register?client=asdfaqerq1werqwe&mobile=13566667777&password=111111&smsCode=000000&channel=baiduAd&lotteryToken=&subid=
 *
 * https://fakeapi.fdjf.net:3000/account/register?client=asdfaqerq1werqwe&mobile=13566667777&password=111111&smsCode=000000&channel=baiduAd&lotteryToken=&subid=
 */
router.all('/account/register', function (req, res, next) {
	var mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13566667777');
	var password = req.query.password ? req.query.password :(req.body.password ? req.body.password : '13566667777');
	var code = 0;
	var text = "注册成功";
	if (mobile != '13566667777') {
    	code = 1;
    	text = "注册失败";
    }
	var resultValue = {
    	code: code,
    	text: text,
    	data: {
    		token: code == 0 ? "2435135345623413" : ""
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 忘记密码时，重置密码（用户未登录）
 *
 * @name account.resetPassword
 * @href /account/resetPassword
 *
 * @input.post {string} client 			客户端统计参数（common/client）
 * @input.post {string} mobile 			手机号码
 * @input.post {string} smsCode 			短信验证码
 * @input.post {string} newPassword 		新密码
 *
 * @output {json} 重置密码结果
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @description
 *
 * https://localhost:3000/account/resetPassword?client=asdfaqerq1werqwe&mobile=13566667777&newPassword=111111smsCode=000000
 *
 * https://fakeapi.fdjf.net:3000/account/resetPassword?client=asdfaqerq1werqwe&mobile=13566667777&newPassword=111111smsCode=000000
 */
router.all('/account/resetPassword', function (req, res, next) {
	var mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13566667777');
	var password = req.query.password ? req.query.password :(req.body.password ? req.body.password : '13566667777');
	var smscode = req.query.smscode ? req.query.smscode :(req.body.smscode ? req.body.smscode : '13566667777');
	var code = 0;
	var text = "重置密码成功";
	if (mobile != '13566667777') {
    	code = 1;
    	text = "重置密码失败";
    }
	var resultValue = {
    	code: code,
    	text: text
    }
    res.json(resultValue);

});

/**
 * @fakedoc 修改密码（用户已登录）
 *
 * @name account.changePassword
 * @href /account/changePassword
 *
 * @input.post {string} client 			客户端统计参数（common/client）
 * @input.post {string} token 				Token
 * @input.post {string} oldPassword 		旧密码
 * @input.post {string} newPassword 		新密码
 *
 * @output {json} 修改密码结果
 * {
 *    code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *    text:"{String} 状态描述",
 *    data: {
 *  	  token:"{String} 登录凭证（旧token失败，返回新的token）"
 *    }
 * }
 *
 * @description
 * 
 * https://localhost:3000/account/changePassword?client=asdfaqerq1werqwe&token=23452345243&newPassword=111111&oldPassword=111111
 *
 * https://fakeapi.fdjf.net:3000/account/changePassword?client=asdfaqerq1werqwe&token=23452345243&newPassword=111111&oldPassword=111111
 */
router.all('/account/changePassword', function (req, res, next) {
	var mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13566667777');
	var password = req.query.password ? req.query.password :(req.body.password ? req.body.password : '13566667777');
	var smscode = req.query.smscode ? req.query.smscode :(req.body.smscode ? req.body.smscode : '13566667777');
	var code = 0;
	var text = "修改密码成功";
	if (mobile != '13566667777') {
    	code = 1;
    	text = "修改密码失败";
    }
	var resultValue = {
    	code: code,
    	text: text,
    	data: {
    		token: "asdfq4r31451324123412341"
    	}
    }
    res.json(resultValue);

});

/**
 * @fakedoc 登录
 *
 * @name account.login
 * @href /account/login
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} mobile 		手机号码
 * @input.post {string} password 		密码
 * @input.post {string} smsCode 		短信验证码
 *
 * @output {json} 登录结果
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	token:"{String} 登录凭证"
 *  }
 * }
 * 
 * @description
 * 
 * 用户可以用mobile + password登录，也可以用mobile + smsCode登录
 *
 * https://localhost:3000/account/login?client=asdfaqerq1werqwe&mobile=13566667777&password=111111&smsCode=222222
 * 
 * https://fakeapi.fdjf.net:3000/account/login?client=asdfaqerq1werqwe&mobile=13566667777&password=111111&smsCode=222222
 */
router.all('/account/login', function (req, res, next) {
	var mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13566667777');
	var password = req.query.password ? req.query.password :(req.body.password ? req.body.password : '000001');

	var code = 0;
	var text = "登录成功";
	if (mobile != '13566667777') {
    	code = 1;
    	text = "登录失败";
    }
	var resultValue = {
    	code: code,
    	text: text,
    	data: {
    		token: code == 0 ? "2435135345623413" : ""
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 登出   
 *
 * @name account.logout
 * @href /account/logout
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @output {json} 登出结果
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/logout?client=asdfaqerq1werqwe&token=2435135345623413
 * 
 * https://fakeapi.fdjf.net:3000/account/logout?client=asdfaqerq1werqwe&token=2435135345623413
 */
router.all('/account/logout', function (req, res, next) {
	var code = 0;
	var text = "登出成功";
	var resultValue = {
    	code: code,
    	text: text
    }
    res.json(resultValue);
});

/**
 * @fakedoc 我的信息
 *
 * @name account.my
 * @href /account/my
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @output {json} 我的信息
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	accountId:"{String} 会员账号Id",
 *  	avatar:"{String} 头像URL",
 *  	nickname:"{String} 昵称",
 *  	customerName:"{String} 真实姓名",
 *  	certNum:"{String} 身份证号码（后台做模糊处理）",
 *  	mobile:"{String} 手机号码",
 *  	email:"{String} 电子邮箱",
 *  	bankCard: {
 *  		cardNo:"{String} 银行卡",
 *  		status:"{String} 银行卡绑定状态【VERIFYING（认证中），VERIFIED（已认证)】",
 *  		statusName:"{String} 银行卡绑定状态【VERIFYING（认证中），VERIFIED（已认证)】",
 *  		bankCode:"{String} 银行卡所属银行",
 *  		bankName:"{String} 银行卡所属银行名称",
 *      	bankLogo:"{String} 银行Logo的URL",
 *      	quota:"{number} 每次限额",
 *          dayQuota:"{number} 日限额",
 *  		amount:"{number} 可提现金额",
 *      	ticketCount:"{int} 提现券张数"
 *  	},
 *  	netAssets:"{number} 账户资产",
 *  	goldBalance:"{number} 账户余额",
 *  	congealVal:"{number} 冻结金额", 
 *  	sumProfit:"{number} 累计收益",
 *  	willProfit:"{number} 待收收益",
 *  	willPrincipal:"{number} 待收本金",
 *  	availableBalance:"{number} 可用余额",
 *  	availableIntegral:"{number} 可用花生豆余额",
 *      hasSigned:"{String} 是否签到（true 或 false)",
 *      hasRemindOfMsg:"{String} 是否有未读消息（true 或 false)",
 *      hasRemindOfTicket:"{String} 是否有可用投资券（true 或 false)",
 *      hasRemindOfReward:"{String} 是否有积分提醒（true 或 false)",
 *      hasOpenThirdAccount:"{String} 是否开通第三方账号（0：未开通；1：已开通）",
 *      hasBindBankCard:"{String} 是否绑定银行卡（0：未绑卡；1：已绑卡）",
 *      isNewUser:"{String} 是否新手（0是，其它不是）",
 *      hasRecharged:"{String} 是否充过值（0是，其它不是）"
 *  }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/my?client=asdfaqerq1werqwe&token=2435135345623413
 * 
 * https://fakeapi.fdjf.net:3000/account/my?client=asdfaqerq1werqwe&token=2435135345623413
 */
router.all('/account/my', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: {
    		avatar:"https://www.hsbank360.com/upload_files/avatar/20151013105933_792.jpg",
    		netAssets:189000,
    		goldBalance:1000,
    		congealVal:19000,
    		sumProfit:38000,
    		willProfit:2324,
    		willPrincipal:25434,
    		availableBalance:10000,
    		availableIntegral:20000,
    		hasSigned:Math.floor(Math.random() * 2) == 1 ? "true" : "false",
    		hasRemindOfMsg:Math.floor(Math.random() * 2) == 1 ? "true" : "false",
    		hasRemindOfTicket:Math.floor(Math.random() * 2) == 1 ? "true" : "false",
    		hasRemindOfReward:Math.floor(Math.random() * 2) == 1 ? "true" : "false",
    		hasOpenThirdAccount:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
    		hasBindBankCard:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
			accountId: 5,
    		nickname: '小二hahaha',
    		customerName: '王小二',
    		certNum: '234567198878763526',
    		mobile: '13566667777',
    		email:'34523452@ww.com',
    		bankCard:{
    			cardNo:"23452134523463456",
        		cardStatusCode:"VERIFIED",
        		bankCode:"NJYH",
        		bankName:"东亚银行",
        		bankLogo:"http://pic.58pic.com/58pic/12/38/92/34i58PICVNP.jpg",
        		quota:5000,
        		dayQuota:100000,
        		amount:1345,
        		ticketCount:5
    		},
    		isNewUser:"0",
    		hasRecharged:"1"
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 我的投资券
 *
 * @name account.myTickets
 * @href /account/myTickets
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @output {json} 我的投资券列表
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *      	ticketId:"{int} 投资券Id",
 *      	type:"{int} 类型(1：5元，2：10元，3：20元，4：50元，5：100元)",
 *      	typeName:"{string} 类型名称",
 *      	useInfo:"{string} 使用条件",
 *      	useLimit:"{number} 使用限制",
 *      	amount:"{number} 面值",
 *      	status:"{int} 状态(0, 1, 2)",
 *      	statusName:"{String} 状态名称(正常,已使用,过期)",
 *     		invalidDt:"{String} 失效时间",
 *     		getRemark:"{String} 来源备注"
 *    }]
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/myTickets?client=asdfaqerq1werqwe&token=2435135345623413
 * 
 * https://fakeapi.fdjf.net:3000/account/myTickets?client=asdfaqerq1werqwe&token=2435135345623413
 */
router.all('/account/myTickets', function (req, res, next) {
	var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;
	var tickets = [];
    var max = 15;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        tickets.push({
        	ticketId: start,
            type: [0, 1, 2, 3, 4, 5][start % 5],
            typeName: '投资券',
            useInfo: '满1000元可用',
            useLimit: Math.floor(Math.random() * 1000),
            amount: 10,
            status: [0, 1, 2][start % 3],
            statusName: ["正常","已使用","过期"][start % 3],
            invalidDt:"2015-10-22",
            getRemark:"推荐好友奖励"
        });
        start++;
        limit--;
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: tickets
    }
    res.json(resultValue);
});

/**
 * @fakedoc 我的投资
 *
 * @name account.myInvestment
 * @href /account/myInvestment
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} flag 			标识（1--投标中，2--持有中，3--已结束）
 *
 * @output {json} 我的投资
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	totalInvestment:"{number} 投资总额",
 *  	receiveMoney:"{number} 收款总额",
 *  	tipMsg:"{String} 收款提示信息",
 *  	projectList:[{
 *  		recordId:"{string} 记录Id",
 *      	projectId:"{string} 项目Id",
 *      	projectName:"{string} 项目名称",
 *      	projectType:"{int} 项目类型",
 *      	projectTypeName:"{string} 项目类型名称",
 *      	projectDuration:"{int} 项目期限，单位 *月份*",
 *     		repaymentMode:"{int} 还款方式",
 *      	repaymentModeName:"{String} 还款方式名称",
 *      	amount:"{number} 投资金额",
 *      	receivedProfit:"{number} 已收收益",
 *      	willProfit:"{number} 待收收益",
 *      	status:"{int} 状态(3-投标中，4--投标结束，5-还款中，6--还款结束，7-清算结束)",
 *      	statusName:"{String} 状态名称",
 *      	annualizedRate:"{number} 年化利率",
 *      	rate:"{number} 已投百分比，不要加(%)",
 *      	remainingDays:"{int} 剩余天数",
 *      	opDt:"{String} 投资日期",
 *      	lastRepaymentDate:"{String} 到期日期（取的是后台的【项目最后还款日期】）",
 *      	isNewUser:"{String} 是否新手项目（0是，其它不是）",
 *			isRecommend:"{String} 是否重点推荐（0是，其它不是）"
 * 		}]
 *    }
 * }
 *
 * @needAuth
 * 
 * @description
 * 
 * flag=1(投标中)：对应status=3(投标中)、对应status=4(投标结束)
 * 
 * flag=2(持有中)：status=5(还款中)
 * 
 * flag=3(已结束)：对应status=6(还款结束)、status=7(清算结束)
 *
 * https://localhost:3000/account/myInvestment?client=asdfaqerq1werqwe&token=2435135345623413&flag=3
 * 
 * https://fakeapi.fdjf.net:3000/account/myInvestment?client=asdfaqerq1werqwe&token=2435135345623413&flag=3
 */
router.all('/account/myInvestment', function (req, res, next) {
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
        	recordId: start,
            projectId: start,
            projectName: types[type] + '-' + start,
            projectType: type,
            projectTypeName: types[type],
            projectDuration:12,
            repaymentMode: 1,
            repaymentModeName:  ["等额本息","先息后本","一次性还本付息"][start % 3],
            amount: 1000000,
            receivedProfit: 36000,
            willProfit: 64000,
            status: [3, 5, 7][start % 3],//project status constant:3-PROJECT_STATUS_INVESTMENT,5-PROJECT_STATUS_REPAYMENTING,7-PROJECT_STATUS_END
            statusName: ["立即投资","还款中","已结束"][start % 3],
            annualizedRate: Math.floor(Math.random() * 20) * 0.01,
            rate:Math.floor(Math.random() * 100) * 0.01,
            remainingDays:55,
            opDt:"2015-12-01",
            lastRepaymentDate:"2016-12-01",
            isNewUser:['0','1'][start % 2],
            isRecommend:['0','1'][start % 2]
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
    	data: {
    		totalInvestment:87800,
    		receiveMoney:988,
    		tipMsg:'距下期收款还有2天, 金额10.22元',
    		projectList:projects
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 我的投资--项目详情
 *
 * @name account.myInvestmentDetail
 * @href /account/myInvestmentDetail
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} recordId 		投资记录Id
 *
 * @output {json} 我的投资--项目详情
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	recordId:"{string} 记录Id",
 *      projectId:"{int} 项目Id",
 *      projectCode:"{String} 项目编号",
 *      projectName:"{string} 项目名称",
 *      projectType:"{int} 项目类型",
 *      projectTypeName:"{string} 项目类型名称",
 *      repaymentMode:"{int} 还款方式",
 *      repaymentModeName:"{String} 还款方式名称",
 *      amount:"{number} 投资金额",
 *      receivedProfit:"{number} 已收收益",
 *      willProfit:"{number} 待收收益",
 *      status:"{int} 状态(3-投标中，4--投标结束，5-还款中，6--还款结束，7-清算结束)",
 *      statusName:"{String} 状态名称",
 *      annualizedRate:"{number} 年化利率",
 *      rate:"{number} 已投百分比，不要加(%)",
 *		investmentPeriod:"{String} 收款区间",
 *		remaindAndTotalMonth:"{String} 剩余期数/总期数",
 *      isNewUser:"{String} 是否新手项目（0是，其它不是）",
 *		isRecommend:"{String} 是否重点推荐（0是，其它不是）",
 *		isCanAssign:"{String} 是否可转让（0是，其它不是）"
 *    }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/myInvestmentDetail?client=asdfaqerq1werqwe&token=4324523452345&recordId=2435135345623413
 * 
 * https://fakeapi.fdjf.net:3000/account/myInvestmentDetail?client=asdfaqerq1werqwe&token=4324523452345&recordId=2435135345623413
 */
router.all('/account/myInvestmentDetail', function (req, res, next) {
	var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		recordId: 1,
    		projectId: 1,
    		projectCode: "4352345234523",
            projectName: '花生贷' + '-' + 1,
            projectTypeName: '典当融资租赁',
            projectType: 1,
            repaymentMode: 1,
            repaymentModeName:  ["等额本息","先息后本","一次性还本付息"][Math.floor(Math.random() * 3) % 3],
            amount: 1000000,
            receivedProfit: 36000,
            willProfit: 64000,
            status: [3, 5, 7][1 % 3],
            statusName: ["立即投资","还款中","已结束"][Math.floor(Math.random() * 3) % 3],
            annualizedRate: Math.floor(Math.random() * 20) * 0.01,
            rate:Math.floor(Math.random() * 100) * 0.01,
            investmentPeriod:"2015-10-20 至 2016-06-10",
            remaindAndTotalMonth:"2/12",
            isNewUser:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
            isRecommend:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
            isCanAssign:Math.floor(Math.random() * 2) == 1 ? '0' : '1'
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 得到指定投资记录的还款计划
 *
 * @name account.repaymentPlan
 * @href /account/repaymentPlan
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} recordId 		投资记录Id
 *
 * @description 
 * 
 * https://localhost:3000/account/repaymentPlan?client=asdfaqerq1werqwe&recordId=1
 * 
 * https://fakeapi.fdjf.net:3000/account/repaymentPlan?client=asdfaqerq1werqwe&recordId=1
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
router.all('/account/repaymentPlan', function (req, res, next) {
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
 * @fakedoc 回款日历
 *
 * @name account.repaymentCalendar
 * @href /account/repaymentCalendar
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} year 			年
 * @input.post {string} month 			月
 *
 * @output {json} 回款日历
 * {
 *     code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *     text:"{String} 状态描述",
 *     data: {
 *         sumRepaymentAmout:"{number} 本月应回款(元)",
 *         repaymentAmout:"{number} 本月已回款(元)",
 *         dayList:[{
 *  			day:"{int} 天",
 *  			amount:"{number} 还款额",
 *  			status:"{int} 状态(0-未还，1--已还，2--逾期)",
 *  			recordList:[{
 *      			projectName:"{string} 项目名称",
 *      			planDate:"{string} 还款日期",
 *  				planMoney:"{string} 还款金额",
 *  				principal:"{string} 应还本金",
 *  				interest:"{string} 应还利息",
 *  				remainingPrincipal:"{string} 剩余应还本金"
 * 				}]
 *  	   }]
 *     }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/repaymentCalendar?client=asdfaqerq1werqwe&token=2435135345623413&year=2015&month=10
 * 
 * https://fakeapi.fdjf.net:3000/account/repaymentCalendar?client=asdfaqerq1werqwe&token=2435135345623413&year=2015&month=10
 */
router.all('/account/repaymentCalendar', function (req, res, next) {
	var start = req.body.start || 0;
	var limit = req.body.limit || 10;
	var records = [];
    var max = 5;
    var types = ['商圈贷', '车辆抵押', '个人信用贷', '典当融资租赁'];
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        records.push({
            projectName: types[type] + '-' + start,
            planDate: '2015-11-06',
            planMoney: 100,
            principal: 90,
            interest: 10,
            remainingPrincipal: 1000
        });
        start++;
        limit--;
    }

    if (start > max) {
        records.push(undefined);//no more
    }
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: {
    		sumRepaymentAmout:30000,
    		repaymentAmout:2000,
    		dayList:[
      	   		{day:5,amount:3500,status:1,recordList:records},
      	   		{day:8,amount:500,status:1,recordList:records},
      	   		{day:12,amount:100,status:1,recordList:records},
      	   		{day:15,amount:10200,status:0,recordList:records},
      	   		{day:25,amount:3500,status:0,recordList:records},
      	   	]
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 交易记录分页列表
 *
 * @name account.transactionRecord
 * @href /account/transactionRecord
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 交易记录分页列表
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	opDt:"{date} 操作日期时间",
 *  	changeType:"{String} 变更类型（B2B网银:NET_B2B，B2C网银:NET_B2C，一键支付:A_PAY，代充值:WH_NO_CARD，快捷充值:SWIFT，正常提现，T+1 天到账:NORMAL，加急提现，T+0 当日到账:URGENT，投资冻结:1，投资冻结取消:2，投资确认:3，还款:4，充值获取抵用额:5，推荐好友投资返利:6，首次充值送现金:7，中秋国庆双节投资返利:8）",
 *  	changeTypeName:"{String} 变更类型名称",
 *  	changeVal:"{String} 变更值"
 *   }]
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/transactionRecord?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/account/transactionRecord?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 */
router.all('/account/transactionRecord', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: [
    	   {opDt:'2015-10-19 11:01:01',changeType:1,changeTypeName:'充值',changeVal:'+10000'},
    	   {opDt:'2015-10-12 11:01:01',changeType:2,changeTypeName:'投资',changeVal:'-500'},
    	   {opDt:'2015-10-09 11:01:01',changeType:3,changeTypeName:'收益',changeVal:'+10'},
    	   {opDt:'2015-10-09 11:01:01',changeType:4,changeTypeName:'提现',changeVal:'-100'},
    	   {opDt:'2015-09-09 11:01:01',changeType:5,changeTypeName:'提现手续费',changeVal:'-2'}
       ]
    }
    res.json(resultValue);
});

/**
 * @fakedoc 保存头像
 *
 * @name account.saveAvatar
 * @href /account/saveAvatar
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} avatar			头像(base64)
 * @input.post {string} avatarUrl		头像Url(微信)
 * 
 * @output {json} 保存头像
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{String} 头像Url"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/saveAvatar?client=asdfaqerq1werqwe&token=2435135345623413&avatar=23523afdfasdfasdfasdfasdfasdfq1413241234&avatarUrl=
 * 
 * https://fakeapi.fdjf.net:3000/account/saveAvatar?client=asdfaqerq1werqwe&token=2435135345623413&avatar=23523afdfasdfasdfasdfasdfasdfq1413241234&avatarUrl=
 */
router.all('/account/saveAvatar', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: "https://www.hsbank360.com/upload_files/avatar/20151013105933_792.jpg"
    }
    res.json(resultValue);
});

/**
 * @fakedoc 保存昵称
 *
 * @name account.saveNickname
 * @href /account/saveNickname
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} nickname		昵称
 * 
 * @output {json} 保存昵称
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/saveNickname?client=asdfaqerq1werqwe&token=2435135345623413&nickname=Haha
 * 
 * https://fakeapi.fdjf.net:3000/account/saveNickname?client=asdfaqerq1werqwe&token=2435135345623413&nickname=Haha
 * 
 */
router.all('/account/saveNickname', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text
    }
    res.json(resultValue);
});

/**
 * @fakedoc 保存手机号码
 *
 * @name account.saveMobile
 * @href /account/saveMobile
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} mobile			手机号码
 * 
 * @output {json} 保存手机号码
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/saveMobile?client=asdfaqerq1werqwe&token=2435135345623413&mobile=13566667777
 * 
 * https://fakeapi.fdjf.net:3000/account/saveMobile?client=asdfaqerq1werqwe&token=2435135345623413&mobile=13566667777
 */
router.all('/account/saveMobile', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text
    }
    res.json(resultValue);
});

/**
 * @fakedoc 保存Email
 *
 * @name account.saveEmail
 * @href /account/saveEmail
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} email			Email
 * 
 * @output {json} 保存Email
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/saveEmail?client=asdfaqerq1werqwe&token=2435135345623413&email=13566667777@139.com
 * 
 * https://fakeapi.fdjf.net:3000/account/saveEmail?client=asdfaqerq1werqwe&token=2435135345623413&email=13566667777@139.com
 */
router.all('/account/saveEmail', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text
    }
    res.json(resultValue);
});

/**
 * 
 * @Deprecated
 * 
 * @fakedoc 提现前置接口 （已过期，改调 'account/my'接口）
 *
 * @name account.beforeWithdraw
 * @href /account/beforeWithdraw
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * 
 * @output {json} 得到用户可提现金额、银行卡等信息
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	cardNo:"{String} 绑定的卡号",
 *  	cardStatusCode:"{String} 银行卡绑定状态【VERIFYING（认证中），VERIFIED（已认证)】",
 *  	bankCode:"{String} 银行卡所属银行",
 *  	bankName:"{String} 银行卡所属银行名称",
 *      bankLogo:"{String} 银行Logo的URL",
 *  	amount:"{number} 可提现金额",
 *      ticketCount:"{int} 提现券张数"
 *   }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/beforeWithdraw?client=asdfaqerq1werqwe&token=2435135345623413
 * 
 * https://fakeapi.fdjf.net:3000/account/beforeWithdraw?client=asdfaqerq1werqwe&token=2435135345623413
 */
router.all('/account/beforeWithdraw', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: {
    		cardNo:"23452134523463456",
    		cardStatusCode:"VERIFIED",
    		bankCode:"NJYH",
    		bankName:"东亚银行",
    		bankLogo:"http://pic.58pic.com/58pic/12/38/92/34i58PICVNP.jpg",
    		amount:1345,
    		ticketCount:5
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 签到
 *
 * @name account.sign
 * @href /account/sign
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * 
 * @output {json} 签到结果
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{number} 变化的积分值"
 * }
 * 
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/sign?client=asdfaqerq1werqwe&token=2435135345623413&client=234523452345
 * 
 * https://fakeapi.fdjf.net:3000/account/sign?client=asdfaqerq1werqwe&token=2435135345623413&client=234523452345
 */
router.all('/account/sign', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: -20
    }
    res.json(resultValue);
});

/**
 * @fakedoc 推荐有奖-好友分页列表
 * 
 * @name account.myInvitationPageList
 * @href /account/myInvitationPageList
 *
 * @description
 * 
 * https://localhost:3000/account/myInvitationPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/account/myInvitationPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
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
 *      name:"{String} 姓名",
 *      account:"{String} 帐号",
 *      status:"{int} 状态(0:已注册、1：已投资、2：已充值、3：已开通第三方账号、4：已成交)",
 *      statusName:"{String} 状态名称(已注册、已投资、已充值、已开通第三方账号、已成交)",
 *		registerDt:"{String} 注册时间"
 * 	  }
 * 	]
 * }
 */
router.all('/account/myInvitationPageList', function (req, res, next) {
    var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;

    var myInvitation = [];

    var max = 15;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        myInvitation.push({
            name: "张三" + start,
            account: 'abcd-' + start,
            status: [1, 2, 3][start % 3],
            statusName: ["已注册","已充值","已投资"][start % 3],
            registerDt: "2015-10-20"
        });
        start++;
        limit--;
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: myInvitation
    }
    res.json(resultValue);
});

/**
 * @fakedoc 推荐有奖-统计
 * 
 * @name account.myInvitationStat
 * @href /account/myInvitationStat
 *
 * @description
 * 
 * https://localhost:3000/account/myInvitationStat?client=asdfaqerq1werqwe&token=2435135345623413
 * 
 * https://fakeapi.fdjf.net:3000/account/myInvitationStat?client=asdfaqerq1werqwe&token=2435135345623413
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 *
 * @output {json} 好友数量
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	registerCount:"{int} 好友注册人数",
 *      nameAuthCount:"{int} 好友实名人数",
 *      investCount:"{int} 好友投资人数",
 *      investAccount:"{int} 好友投资人数(字段拼错，建议在1.1.1.0版本之后废弃)",
 *      registerAmount:"{number} 好友注册得现金券额度",
 *      nameAuthAmount:"{number} 好友实名得现金券额度",
 *      investAmount:"{number} 好友投资得现金券额度",
 *      earningAmount:"{number} 奖励金额",
 *      earningTicketAmount:"{number} 奖励投资券额度"
 *  }
 * }
 */
router.all('/account/myInvitationStat', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		registerCount:100,
    		nameAuthCount:80,
    		investCount:50,
    		investAccount:50,
    		registerAmount:1000,
    		nameAuthAmount:800,
    		investAmount:500,
    		earningAmount:300,
    		earningTicketAmount:3000
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 推荐有奖-奖励现金分页列表
 * 
 * @name account.myEarningPageList
 * @href /account/myEarningPageList
 *
 * @description
 * 
 * https://localhost:3000/account/myEarningPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/account/myEarningPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 分页列表
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	opDt:"{date} 操作日期时间",
 *  	changeType:"{String} 变更类型（5，推荐好友投资返利:6，首次充值送现金:7，中秋国庆双节投资返利:8）",
 *  	changeTypeName:"{String} 变更类型名称",
 *  	changeVal:"{String} 变更值"
 *   }]
 * }
 */
router.all('/account/myEarningPageList', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: [
    	   {opDt:'2015-10-19 11:01:01',changeType:1,changeTypeName:'推荐好友投资返利',changeVal:'+10000'},
    	   {opDt:'2015-10-12 11:01:01',changeType:2,changeTypeName:'首次充值送现金',changeVal:'-500'},
    	   {opDt:'2015-10-09 11:01:01',changeType:3,changeTypeName:'首次充值送现金',changeVal:'+10'},
    	   {opDt:'2015-10-09 11:01:01',changeType:4,changeTypeName:'中秋国庆双节投资返利',changeVal:'-100'},
    	   {opDt:'2015-09-09 11:01:01',changeType:5,changeTypeName:'中秋国庆双节投资返利',changeVal:'-2'}
       ]
    }
    res.json(resultValue);
});

/**
 * @fakedoc 推荐有奖-奖励投资券分页列表
 *
 * @name account.myEarningTicketPageList
 * @href /account/myEarningTicketPageList
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 我的投资券列表
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *      	ticketId:"{int} 投资券Id",
 *      	amount:"{number} 面值",
 *     		getDt:"{String} 获得时间",
 *     		getRemark:"{String} 来源备注"
 *    }]
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:3000/account/myEarningTicketPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/account/myEarningTicketPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 */
router.all('/account/myEarningTicketPageList', function (req, res, next) {
	var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;
	var tickets = [];
    var max = 15;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        tickets.push({
        	ticketId: start,
            amount: 10,
            getDt:"2015-10-22",
            getRemark:"推荐好友奖励"
        });
        start++;
        limit--;
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: tickets
    }
    res.json(resultValue);
});

/**
 * @fakedoc 我的花生豆分页列表
 * 
 * @name account.myIntegralPageList
 * @href /account/myIntegralPageList
 *
 * @description
 * 
 * https://localhost:3000/account/myIntegralPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/account/myIntegralPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 分页列表
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	opDt:"{date} 操作日期时间",
 *  	changeReason:"{String} 变更原因",
 *  	changeVal:"{String} 变更值",
 *  	type:"{String} 类型（1收，2兑）",
 *  	typeName:"{String} 类型名称"
 *   }]
 * }
 */
router.all('/account/myIntegralPageList', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: [
    	   {opDt:'2015-10-19 11:01:01',changeReason:'推荐好友投资返利',changeVal:'+10000',type:'1',typeName:'收'},
    	   {opDt:'2015-10-12 11:01:01',changeReason:'首次充值送现金',changeVal:'-500',type:'2',typeName:'兑'},
    	   {opDt:'2015-10-09 11:01:01',changeReason:'首次充值送现金',changeVal:'+10',type:'1',typeName:'收'},
    	   {opDt:'2015-10-09 11:01:01',changeReason:'中秋国庆双节投资返利',changeVal:'-100',type:'1',typeName:'收'},
    	   {opDt:'2015-09-09 11:01:01',changeReason:'中秋国庆双节投资返利',changeVal:'-2',type:'1',typeName:'收'}
       ]
    }
    res.json(resultValue);
});

/**
 * @fakedoc (我的)收件人地址分页列表
 *
 * @name account.customerAddressPageList
 * @href /account/customerAddressPageList
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {interger=} [pageSize=10] 		页容量
 * @input.post {interger=} [pageNumber=1] 		页码
 *
 * @description
 * 
 * https://localhost:3000/account/customerAddressPageList?client=asdfaqerq1werqwe&token=adfasdf234&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/account/customerAddressPageList?client=asdfaqerq1werqwe&token=adfasdf234&pageSize=10&pageNumber=1
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 * 		accountId:"{String} 用户编号",
 * 		addressId:"{String} 记录Id",
 * 		showName:"{String} 收件人名称",
 * 		mobile:"{String} 收件人手机号码",
 * 		address:"{String} 收件人地址",
 * 		postCode:"{String} 收件人邮编",
 * 		isDefault:"{String} 是否缺省收件地址(0是，1不是)",
 *  	createDt:"{String} 创建时间",
 *  	status:"{int} 状态",
 *      statusName:"{String} 状态名称"
 *   }]
 * }
 * 
 *
 */
router.all('/account/customerAddressPageList', function (req, res, next) {
    var activities = [];
    _.forEach([1,2,3,4,5,6,7], function (i) {
    	activities.push({
    		accountId: i + "", 
    		addressId:i + "",
    		showName: '收件人名称'+i, 
    		mobile: "13567899876",
    		address:"收件人地址收件人地址",
    		postCode:"234523",
    		isDefault:"0",
    		createDt:'2015-10-20 11:11:11',
        	downDt:'2016-10-20 11:11:11',
        	productCount:20,
        	productSurplus:10,
        	status:1,
        	statusName:'状态名称',
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: activities
    }
    res.json(resultValue);
});

/**
 * @fakedoc 新增(我的)收件人地址
 *
 * @name account.customerAddressAdd
 * @href /account/customerAddressAdd
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {String} showName 				收件人名称
 * @input.post {String} mobile 				收件人手机号码
 * @input.post {String} address 				收件人地址
 * @input.post {String} postCode 				收件人邮编
 * @input.post {String} isDefault 				是否缺省收件地址(0是，1不是)
 *
 * @description
 * 
 * https://localhost:3000/account/customerAddressAdd?client=asdfaqerq1werqwe&token=adfasdf234&showName=张三&mobile=13566666666&address=浦江科技广场&postCode=123456&isDefault=0
 * 
 * https://fakeapi.fdjf.net:3000/account/customerAddressAdd?client=asdfaqerq1werqwe&token=adfasdf234&showName=张三&mobile=13566666666&address=浦江科技广场&postCode=123456&isDefault=0
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 * }
 */
router.all('/account/customerAddressAdd', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok'
    }
    res.json(resultValue);
});

/**
 * @fakedoc 编辑(我的)收件人地址
 *
 * @name account.customerAddressEdit
 * @href /account/customerAddressEdit
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {String} addressId 				记录Id
 * @input.post {String} showName 				收件人名称
 * @input.post {String} mobile 				收件人手机号码
 * @input.post {String} address 				收件人地址
 * @input.post {String} postCode 				收件人邮编
 * @input.post {String} isDefault 				是否缺省收件地址(0是，1不是)
 *
 * @description
 * 
 * https://localhost:3000/account/customerAddressAdd?client=asdfaqerq1werqwe&token=adfasdf234&addressId=1&showName=张三&mobile=13566666666&address=浦江科技广场&postCode=123456&isDefault=0
 * 
 * https://fakeapi.fdjf.net:3000/account/customerAddressAdd?client=asdfaqerq1werqwe&token=adfasdf234&addressId=1&showName=张三&mobile=13566666666&address=浦江科技广场&postCode=123456&isDefault=0
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 * }
 */
router.all('/account/customerAddressEdit', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok'
    }
    res.json(resultValue);
});

/**
 * @fakedoc 删除(我的)收件人地址
 *
 * @name account.customerAddressDelete
 * @href /account/customerAddressDelete
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {String} addressId 				记录Id
 *
 * @description
 * 
 * https://localhost:3000/account/customerAddressDelete?client=asdfaqerq1werqwe&token=adfasdf234&addressId=1
 * 
 * https://fakeapi.fdjf.net:3000/account/customerAddressDelete?client=asdfaqerq1werqwe&token=adfasdf234&addressId=1
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 */
router.all('/account/customerAddressDelete', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok'
    }
    res.json(resultValue);
});

/**
 * @fakedoc 提交订单
 *
 * @name account.orderConfirm
 * @href /account/orderConfirm
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {String} productId	 			商品Id
 * @input.post {String} productCount 			商品数量
 * @input.post {String} addressId 				收件人地址Id
 *
 * @description
 * 
 * https://localhost:3000/account/orderConfirm?client=asdfaqerq1werqwe&token=adfasdf234&productId=22&productCount=1&addressId=2
 * 
 * https://fakeapi.fdjf.net:3000/account/orderConfirm?client=asdfaqerq1werqwe&token=adfasdf234&productId=22&productCount=1&addressId=2
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		orderCode:"{String} 订单编号",
 *  	createDt:"{String} 交易时间"
 *   }
 * }
 */
router.all('/account/orderConfirm', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		orderCode:'43234234',
    		createDt:'2015-10-20 11:11:11'
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 兑换记录分页列表
 *
 * @name account.orderPageList
 * @href /account/orderPageList
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {interger=} [pageSize=10] 		页容量
 * @input.post {interger=} [pageNumber=1] 		页码
 *
 * @description
 * 
 * https://localhost:3000/account/orderPageList?client=asdfaqerq1werqwe&token=adfasdf234&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/account/orderPageList?client=asdfaqerq1werqwe&token=adfasdf234&pageSize=10&pageNumber=1
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 * 		orderCode:"{String} 订单编号",
 * 		productId:"{String} 商品Id",
 * 		productName:"{String} 商品名称",
 * 		productCount:"{String} 商品数量",
 *      logoMin:"{String} 商品图片",
 * 		price:"{number} 花生豆",
 *  	createDt:"{String} 交易时间",
 *  	status:"{int} 状态",
 *      statusName:"{String} 状态名称"
 *   }]
 * }
 * 
 *
 */
router.all('/account/orderPageList', function (req, res, next) {
    var activities = [];
    _.forEach([1,2,3,4,5,6,7], function (i) {
    	activities.push({
    		orderCode: i + "", 
    		productId:i + "",
    		productName: '商品名称'+i, 
    		productCount: "1",
    		logoMin:"https://www.hsbank360.com/userfiles/1/images/integral/integralMallProduct/2015/09/integralMall_img02(1).jpg",
    		price:"20000",
    		createDt:'2015-10-20 11:11:11',
        	status:1,
        	statusName:'状态名称',
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: activities
    }
    res.json(resultValue);
});

/**
 * @fakedoc 是否领取新年红包
 *
 * @name account.hasGetNewYearGiftMoney
 * @href /account/hasGetNewYearGiftMoney
 *
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:3000/account/hasGetNewYearGiftMoney?client=asdfaqerq1werqwe&token=adfasdf234
 *
 * https://fakeapi.fdjf.net:3000/account/hasGetNewYearGiftMoney?client=asdfaqerq1werqwe&token=adfasdf234
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示领取成功，1表示token无效，2表示未领取，其它值表示失败）",
 *  text:"{String} 状态描述",
 * }
 *
 *
 */
router.all('/account/hasGetNewYearGiftMoney', function (req, res, next) {
	var resultValue = {
		code: 2,
		text: '未领取'
	}
	res.json(resultValue);
});



/**
 * @fakedoc 获取新年红包
 *
 * @name account.getNewYearGiftMoney
 * @href /account/getNewYearGiftMoney
 *
 * @needAuth
 *
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 *
 * @description
 *
 * https://localhost:3000/account/getNewYearGiftMoney?client=asdfaqerq1werqwe&token=adfasdf234
 *
 * https://fakeapi.fdjf.net:3000/account/getNewYearGiftMoney?client=asdfaqerq1werqwe&token=adfasdf234
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示领取成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 * }
 *
 *
 */
router.all('/account/getNewYearGiftMoney', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: '恭喜你获得5元现金券'
	}
	res.json(resultValue);
});


module.exports = router;