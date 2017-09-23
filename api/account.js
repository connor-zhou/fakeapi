var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 注册
 *
 * @name account.register
 * @href /account/register
 *
 * @input.post {string}  client 		    客户端统计参数
 * @input.post {string} mobile		     	手机号码
 * @input.post {string} password 		 	密码（需base64 编码）
 * @input.post {string} smsCode 		 	短信验证码
 * @input.post {string=} inviteMobile  		邀请人手机号码
 *
 * @output {json} 注册结果
 * {
 * 		code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data: {
 *  		token:"{string} 登录凭证"
 *  	}
 * }
 *
 * @description
 *
 * 错误码：{ "短信验证码错误":40100 }
 *
 * https://localhost:5000/account/register
 *
 * https://192.168.1.86:3000/account/register
 */

router.all('/account/register', function (req, res, next) {
	var mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13577778888');
	var password = req.query.password ? req.query.password :(req.body.password ? req.body.password : '13577778888');
	var code = 0;
	var text = "注册成功";
	if (mobile != '13577778888') {
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
 * @fakedoc 登录
 *
 * @name account.login
 * @href /account/login
 *
 * @input.post {string}  client 		客户端统计参数
 * @input.post {string}  aname 			账户名（手机号或者用户名）
 * @input.post {string=} password 		密码（仅type == 0 时传入，需base64 编码）
 * @input.post {string=} smsCode 		短信验证码（仅type == 1 时传入）
 * @input.post {int}     type 		    登录类型（0-密码登录，1-短信验证码登录）
 *
 * @output {json} 登录结果
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data: {
 *  	token:"{string} 登录凭证"
 *  }
 * }
 * 
 * @description
 * 
 * aname+password 可通用；aname+smsCode（v1.5 版本暂不实现） 仅适用 aname 用手机号的情况。
 *
 *
 * https://localhost:5000/account/login
 * 
 * https://192.168.1.86:3000/account/login
 */
router.all('/account/login', function (req, res, next) {
	var mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13566667777');
	var password = req.query.password ? req.query.password :(req.body.password ? req.body.password : '000001');

	var code = 0;
	var text = "登录成功";
	if (mobile != '13566667777'|| password != '000001') {
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
 * @input.post {string} client 		客户端统计参数
 * @input.post {string} token 			Token
 *
 * @output {json} 登出结果
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/logout
 * 
 * https://192.168.1.86:3000/account/logout
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
 * @fakedoc 账户信息
 *
 * @name account.info
 * @href /account/info
 *
 * @input.post {string} client 		客户端统计参数
 * @input.post {string} token 			Token
 *
 * @output {json} 我的信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *  		aid:"{string} 会员账号Id",
 *  		avatar:"{string} 头像URL",
 *  		nickname:"{string} 昵称",
 *  		realname:"{string} 真实姓名（例：习*大）",
 *  		chinaId:"{string} 身份证号码（例：6227****1254）",
 *  		mobile:"{string} 手机号码（例：132****5478）",
 *  		email:"{string} 电子邮箱（例：15****32@qq.com）",
 *  		capitalTotal:"{string} 账户资产",
 *  		profitTotal:"{string} 账户收益",
 *  		money:"{string} 账户余额",
 *  		profitSum:"{string} 累计收益",
 *  		profitWill:"{string} 待收利息",
 *  		capitalWill:"{string} 待收本金",
 *  		capitalFreeze:"{string} 冻结本金",
 *  		investmentSum:"{string} 累计投资",
 *  		integral:"{string} 积分",
 *  	    cashTicketsCount:"{string} 状态正常（status == 0）的现金券张数",
 *  	    withdrawTicketsCount:"{string} 状态正常（status == 0）的提现券张数",
 *  	    rateTicketsCount:"{string} 状态正常（status == 0）的加息券张数",
 *  		isSign:"{int} 是否已签到（1-签了，0-没签）",
 *  		isOpenBf:"{int} 是否开通宝付(1-开通，0-未开通)",
 *  		isNewUser:"{int} 用户是否是新手(1-是，0-否)",
 *  		isRiskAssess:"{int} 用户是否做过风险评估(1-是，0-否)"
 *  	}
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/info
 * 
 * https://192.168.1.86:3000/account/info
 */
router.all('/account/info', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var random = Math.floor(Math.random() * 4);
	var resultValue = {
		code: code,
		text: text,
		data: {
            aid: "155",
			avatar:"https://www.hsbank360.com/upload_files/avatar/20151013105933_792.jpg",
            nickname: '爱情漂流瓶',
            realname: '王*二',
            chinaId:'6227****3562',
            mobile: '135****7777',
            email:'34****52@ww.com',
			capitalTotal:"9600.00",
			capitalFreeze:"9600.00",
			capitalWill:"9600.00",
			profitTotal:"9600.00",
			profitSum:"9600.00",
            profitWill:"9600.00",
            money:"9600.00",
     		investmentSum:"5000.00",
			integral:"2000",
            cashTicketsCount:'12',
            rateTicketsCount:'45',
            withdrawTicketsCount:'45',
            isSign:0,
			isOpenBf:0,
			isNewUser:1
		}
	}
	res.json(resultValue);
});


/**
 * @fakedoc 更改邮箱
 *
 * @name account.alterEmail
 * @href /account/alterEmail
 *
 * @input.post {string}     client 		客户端统计参数
 * @input.post {string}     token 		Token
 * @input.post {int}        step        更改步骤（1 或 2）
 * @input.post {string=}     email 		新邮箱地址（仅 step == 1 时传入）
 * @input.post {string=}     smsCode    手机验证码（仅 step == 1 时传入）
 * @input.post {string=}     emailCode  邮箱验证码（仅 step == 2 时传入）
 *
 * @output {json} 邮箱信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述"
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/alterEmail
 *
 * https://192.168.1.86:3000/account/alterEmail
 */
router.all('/account/alterEmail', function (req, res, next) {

    res.json({
		code:0,
		text:'ok'
	});
});


/**
 * @fakedoc 更改手机号
 *
 * @name account.alterMobile
 * @href /account/alterMobile
 *
 * @input.post {string}     client 		客户端统计参数
 * @input.post {string}     token 		Token
 * @input.post {int}        step        更改步骤（1 或 2）
 * @input.post {string=}     mobile 	新手机号码（仅 step == 1 时传入）
 * @input.post {string=}     smsCode01   原手机验证码（仅 step == 1 时传入）
 * @input.post {string=}     smsCode02   新手机验证码（仅 step == 2 时传入）
 *
 * @output {json} 手机号信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述"
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/alterMobile
 *
 * https://192.168.1.86:3000/account/alterMobile
 */

router.all('/account/alterMobile', function (req, res, next) {

    res.json({
        code:0,
        text:'ok'
    });
});




/**
 * @fakedoc 更改昵称
 *
 * @name account.alterNickname
 * @href /account/alterNickname
 *
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {string} nickname 		昵称
 *
 * @output {json} 昵称信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述"
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/alterNickname
 *
 * https://192.168.1.86:3000/account/alterNickname
 */
router.all('/account/alterNickname', function (req, res, next) {

    res.json({
        code:0,
        text:'ok'
    });
});


/**
 * @fakedoc 更改头像
 *
 * @name account.alterAvatar
 * @href /account/alterAvatar
 *
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {string} avatarData 		头像数据（需base64编码）
 *
 * @output {json} 返回的头像
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *  		avatar:"{string} 新的头像url"
 		}
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/alterAvatar
 *
 * https://192.168.1.86:3000/account/alterAvatar
 */

router.all('/account/alterAvatar', function (req, res, next) {

    res.json({
        code:0,
        text:'ok',
		data:{
        	avatar:""
		}
    });
});



/**
 * @fakedoc 更改密码
 *
 * @name account.alterPassword
 * @href /account/alterPassword
 *
 * @input.post {string}  client 		客户端统计参数
 * @input.post {string}  token 			Token
 * @input.post {string}  pwd 		    原始密码（需base64编码）
 * @input.post {string}  pwdNew         新密码（需base64编码）
 * @input.post {string}  pwdNewAgain 	确认新密码（需base64编码）
 *
 *
 * @output {json} 更改密码
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述"
 * }
 *
 * @needAuth
 *
 * @description

 * 密码更改成功后，之前用旧密码登录此账号的终端（除当前更改终端）token都会失效，若需要登录状态需重新登录。

 * https://localhost:5000/account/alterPassword
 *
 * https://192.168.1.86:3000/account/alterPassword
 */

router.all('/account/alterPassword', function (req, res, next) {

    res.json({
        code:0,
        text:'ok',
        data:{
            token:"4654654615465"
        }
    });
});


/**
 * @fakedoc 重置密码
 *
 * @name account.resetPassword
 * @href /account/resetPassword
 *
 * @input.post {string}  client 		客户端统计参数
 * @input.post {string}  pwdNew         新密码（需base64编码）
 * @input.post {string}  pwdNewAgain 	确认新密码（需base64编码）
 * @input.post {string}  mobile 		手机号
 * @input.post {string}  smsCode        验证码
 *
 *
 * @output {json} 返回的头像
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *  		token:"{string=} 登录凭证（返回token。仅修改密码成功后返回）"
 		}
 * }
 *
 * @needAuth
 *
 * @description
 *
 * 密码重置成功后，之前用旧密码登录此账号的终端token都会失效，若需要登录状态需重新登录。
 *
 * https://localhost:5000/account/resetPassword
 *
 * https://192.168.1.86:3000/account/resetPassword
 */

router.all('/account/resetPassword', function (req, res, next) {

    res.json({
        code:0,
        text:'ok',
        data:{
            token:"4654654615465"
        }
    });
});


/**
 * @fakedoc 我的加息券
 *
 * @name account.rateTickets
 * @href /account/rateTickets
 *
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {int=}   [pageNumber=1]	页码
 * @input.post {int=}   [pageSize=10]	页量
 * @input.post {int} 	status 			加息券状态（0-全部，1-正常（在有效期），2-已使用，3-已过期。）
 *
 * @output {json} 加息券信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *          count:"{int} 条目总数量",
 *      	recordList:[{
 *  		id:"{string} 加息券id",
 *  	    name:"{string} 加息券名称",
 *  		rate:"{string} 所加利息（不加 %）",
 *  	    rateDuration:"{string} 加息期限（天）",
 *  	    maxMoney:"{string} 额度上限（元）",
 *  		status:"{int} 加息券状态（1-正常，2-已使用，3-已过期）",
 *  		usedTimeline:"{string=} 加息券使用时间（仅当status = 2 时返回）",
 *  	    getTimeline:"{string} 券获取时间（例：2017-12-12）",
 *  		expireTimeline:"{string} 券过期时间（例：2017-10-12）",
 *  		useRule:"{string} 加息券使用规则说明",
 *  		usedRemark:"{string=} 已使用券的备注（如，券用在哪个项目等。仅 status == 2 时返回）",
 *  		getRemark:"{string} 加息券来源等备注信息"
 		}]
 	   }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * 仅status == 2 时需要返回加息券使用时间（usedTimeline）和 已使用券的使用情况说明（usedRemark）。
 *
 * 仅当 status == 1 时，返回按过期时间升序排；其它status值返回按过期时间降序排。
 *
 * https://localhost:5000/account/rateTickets
 *
 * https://192.168.1.86:3000/account/rateTickets
 */

router.all('/account/rateTickets', function (req, res, next) {

	var random = [1,3,5,8,2,5];

	var result= [];
	random.forEach(function(value,key){
		result.push({
			id:value+''+Math.floor(Math.random()*15),
			name:'加息券',
			status:value === 5 ? 0 : value === 2 ? 1:2 ,
			usedTimeline: value === 2 ?'2018-12-1'+value+' 12:50':'',
            expireTimeline:'2019-12-1'+value+' 12:50',
            getTimeline:'2017-12-1'+value+' 12:50',
            rateDuration:'2',
            rate:'0.5',
			useRule:"只能用在投资额5000元以上的项目",
            usedRemark: value === 2 ?"在参加谁有最短头发活动时使用":"",
            getRemark:"是在参加线下逗比全明星赛时候获得的",
            maxMoney:'2000.00'
		});
		value === 2 && (result[key]['usedTimeline'] = '2017-12-1'+value+' 12:50')
	});

    res.json({
        code:0,
        text:'ok',
        data:{
            count:'6',
            recordList:result
        }
    });
});


/**
 * @fakedoc 我的投资券
 *
 * @name account.cashTickets
 * @href /account/cashTickets
 *
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {int=}   [pageNumber=1]	页码
 * @input.post {int=}   [pageSize=10]	页量
 * @input.post {int} 	status 			投资券状态（0-全部（包括1,2,3），1-正常，2-已使用，3-过期。）
 * @input.post {string=} money 			用券投资额
 *
 * @output {json} 投资券信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *          count:"{int} 条目总数量",
 *          recordList:[{
 *  		id:"{string} 投资券id",
 *  		value:"{string} 投资券值",
 *  		status:"{int} 投资券状态（1-正常，2-已使用，3-已过期）",
 *  		useLimitMoney:"{string} 投资券可用投资额",
 *  		usedTimeline:"{string=} 投资券使用时间（仅当status = 2 时返回）",
 *  		expireTimeline:"{string} 投资券过期时间",
 *  		useRule:"{string} 投资券使用规则说明",
 *  		remark:"{string} 投资券来源等备注信息"
 		    }]
 		}
 * }
 *
 * @needAuth
 *
 * @description
 *
 * 仅当 status == 1 时，返回按过期时间升序排；其它status值返回按过期时间降序排。
 *
 * https://localhost:5000/account/cashTickets
 *
 * https://192.168.1.86:3000/account/cashTickets
 */

router.all('/account/cashTickets', function (req, res, next) {

    var random = [1,3,5,8,2,5];
    var result= [];

    random.forEach(function(value,key){
        result.push({
            id:value+''+Math.floor(Math.random()*15),
            value:value * 100 +'',
            status:value === 5 ? 0 : value === 2 ? 1:2 ,
            useLimitMoney:value * 1000+'',
            expireTimeline:'2018-12-1'+value+' 12:50',
            useRule:'只能用在投资额'+value * 1000+'元以上的项目',
            remark:"是在参加线下逗比全明星赛时候获得的"
        });
        value === 2 && (result[key]['usedTimeline'] = '2017-12-1'+value+' 12:50')
    });

    res.json({
        code:0,
        text:'ok',
        data:{
            count:'5',
            recordList:result
        }
    });
});


/**
 * @fakedoc 我的提现券
 *
 * @name account.withdrawTickets
 * @href /account/withdrawTickets
 *
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} token 			Token
 *
 * @output {json} 提现券信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *         usedCount:"{int} 已使用数量",
 *         unusedCount:"{int} 未使用数量"
 *		}
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/withdrawTickets
 *
 * https://192.168.1.86:3000/account/withdrawTickets
 */

router.all('/account/withdrawTickets', function (req, res, next) {


    res.json({
        code:0,
        text:'ok',
        data:{
            usedCount:10,
            unusedCount:10
        }
    });
});


/**
 * @fakedoc 我的指定投资项目的还款计划
 *
 * @name account.repaymentPlan
 * @href /account/repaymentPlan
 *
 * @input.post {string} client 		    客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} projectId 		项目Id
 *
 * @description
 *
 * https://localhost:5000/account/repaymentPlan
 *
 * https://192.168.1.86:3000/account/repaymentPlan
 *
 * @output {json} 还款计划
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data: [{
 *  	timeline:"{string} 还款时间",
 *  	capital:"{string} 计划偿还本金",
 *  	interest:"{string} 应还利息",
 *      days:"{string} 计息天数 "
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
            timeline: dt.format('YYYY-MM-DD'),
            capital: '100',
            interest:'2000',
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
 *
 * @fakedoc 我的指定项目的总收益计算
 *
 * @name account.profitCalculation
 * @href /account/profitCalculation
 *
 * @input.post {string}  client 		    客户端统计参数
 * @input.post {string}  token 		        Token
 * @input.post {string}  projectId 		    项目Id
 * @input.post {string}  money 		        投资金额
 * @input.post {string=}  rateTicketId 		加息券id
 *
 * @description
 *
 * https://localhost:5000/account/profitCalculation
 *
 * https://192.168.1.86:3000/account/profitCalculation
 *
 * @output {json} 收益
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      profit:"{string} 收益"
 *    }
 * }
 */

router.all('/account/profitCalculation', function (req, res, next) {
    var resultValue = {
        code: 0,
        text: 'ok',
        data:{
            profit:100
        }
    }
    res.json(resultValue);
});


/**
 * @fakedoc 我的资金流水
 *
 * @name account.transactionRecords
 * @href /account/transactionRecords
 *
 * @input.post {string}  client 			客户端统计参数
 * @input.post {string}  token 				Token
 * @input.post {int=}    [pageNumber=1]		页码
 * @input.post {int=}    [pageSize=10]		页量
 * @input.post {int}  	 category			交易类型（0-全部，1-充值，2-提现，3-投资，4-收益，5-本金，6-奖励）
 * @input.post {string}  startTimeline		开始时间（毫秒级时间戳，所有时间段时，传空值)
 * @input.post {string}  endTimeline		结束时间（毫秒级时间戳，所有时间段时，传空值）
 *
 * @output {json} 资金流水
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *          count:"{int} 条目总数量",
 *          recordList:	[{
 *  		    id:"{string} 交易流水唯一标识",
 *  		    timeline:"{string} 交易发生时间（例：2017-12-04）",
 *  		    category:"{int} 交易类型（0-全部，1-充值，2-提现，3-投资，4-收益，5-本金，6-奖励）",
 *  		    categoryText:"{string} 交易类型描述",
 *  		    remark:"{string} 交易详情",
 *  		    cash:"{string} 交易涉及到金额",
 *  		    money:"{string} 交易后账户余额"
 		    }]
 		    }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/transactionRecords
 *
 * https://192.168.1.86:3000/account/transactionRecords
 */

router.all('/account/transactionRecords', function (req, res, next) {

    var random = [1,3,5,8,2,5];
    var catText = ['全部','充值','提现','投资','收益','本金','奖励'];
    var result= [];

    random.forEach(function(value,key){
    	var cat = Math.floor(Math.random() * 5+1);
        result.push({
            id:value+'',
            timeline:'2017-09-01'+value,
            category:cat,
			categoryText:catText[cat],
            remark:catText[cat],
            cash:value * 10 +'',
            money:value * 1000 +''
        });
    });

    res.json({
        code:0,
        text:'ok',
        data:{
            count:'4',
            recordList:result
        }
    });
});


/**
 * @fakedoc 我的投资记录
 *
 * @name account.investmentRecords
 * @href /account/investmentRecords
 *
 * @input.post {string}     client 				客户端统计参数
 * @input.post {string}     token 				Token
 * @input.post {int=}       [pageNumber=1]		页码
 * @input.post {int=}       [pageSize=10]		页量
 * @input.post {int}        state 				投资项目的状态（0-持有中，1-投标中，2-已结束，空值表示所有。）
 *
 *
 * @output {json} 投资记录信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *          count:"{string} 条目总数量",
 *          recordList:[{
 *  		    id:"{string} 投资记录id",
 *  		    pId:"{string} 投资项目的id",
 *  	        pTitle:"{string} 项目名称",
 *              state:"{int} 投资记录的状态（0-持有中，1-投标中，2-已结束）",
 *  		    money:"{string} 投资金额",
 *  	        annualizedRate:"{string} 年化利率",
 *  	        profitWill:"{string=} 待收收益（仅 status == 0 时返回）",
 *  	        profit:"{string} 已收收益",
 *  	        remainDays:"{string=} 剩余天数（仅 status == 0 时返回）",
 *  	        endTimeline:"{string} 项目结束时间（仅 status == 2 时返回，例：2017-12-14）"
 		    }]
 *      }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/investmentRecords
 *
 * https://192.168.1.86:3000/account/investmentRecords
 */

router.all('/account/investmentRecords', function (req, res, next) {

    var random = [1,3,5,8,2,10,4,6,7,9,11,12,13,34,54,90];
    var catText = ['全部','充值','提现','投资','收益','本金','奖励'];
    var result= [];

    random.forEach(function(value,key){
        var cat = Math.floor(Math.random() * 5+1);
        result.push({
            id:value+''+Math.floor(Math.random()*15),
            pId:value+''+Math.floor(Math.random()*15),
            pTitle:catText[cat],
            state:value % 3 == 0 ? 0 :value % 2 == 0 ? 1:3,
            endTimeline:value % 2 == 0 ? '2017-09-01':'',
            money:value * 30,
            annualizedRate:10,
            profitWill:value % 3 == 0 ? '2010.00':'',
            profit:value * 30+'.00',
            remainDays:value % 3 == 0 ? 30:0
        });
    });

    res.json({
        code:0,
        text:'ok',
        data:{
            count:"16",
            recordList:result
        }
    });
});


/**
 * @fakedoc 我的回款日历
 *
 * @name account.repaymentCalendar
 * @href /account/repaymentCalendar
 *
 * @input.post {string}     client 				客户端统计参数
 * @input.post {string}     token 				Token
 * @input.post {string}     year                年
 * @input.post {string}     month               月
 *
 *
 * @output {json} 回款日历
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *          money:"{string} 本月应还款（元）",
 *          moneyYet:"{string} 本月已回款(元)",
 *          dayList:[{
 *              day:"{string} 本月第几天（几号）",
 *              status:"{int} 还款状态（0-已还款，1-待回款，2-逾期）",
 *              capital:"{string} 此 day 涉及本金",
 *              profit:"{string} 此 day 涉及利息（利润）"
 *          }]
 *   }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/repaymentCalendar
 *
 * https://192.168.1.86:3000/account/repaymentCalendar
 */

router.all('/account/repaymentCalendar', function (req, res, next) {

    var dayList= [];

    var random = [1,3,5,8,2,5];
    random.forEach(function(value,key){
        var recordList= [];
        if( key >= 5) return ;

        random.forEach(function(value,key){
            recordList.push({
                id:value+'',
                title:'有一个美丽的小女孩',
                timeline:'2017-09-1'+value,
                capitalWill:value * 1000 +".00",
                profitWill:value * 0.3 * 1000 +".00"
            });
        });

        dayList.push({
            day:value+'',
            status:Math.floor(Math.random() * 2),
            capital:'1215.89',
            profit:'4587.11',
            recordList:recordList
        })
    })


    res.json({
        code:0,
        text:'ok',
        data:{
            money:"2510.78",
            moneyYet:"1245.45",
            dayList:dayList
        }
    });
});

/**
 * @fakedoc 我的邀请
 *
 * @name account.invitation
 * @href /account/invitation
 *
 * @input.post {string}     client 				客户端统计参数
 * @input.post {string}     token 				Token
 *
 *
 * @output {json} 回款日历
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *          rewardTotal:{
 *              cash:"{string} 现金奖励",
 *              ticket:"{string} 代金券奖励"
 *          },
 *          inviteTotalCount:{
 *              register:"{string} 注册人数",
 *              openFy:"{string} 开通托管人数",
 *              investment:"{string} 投资人数"
 *          },
 *          inviteList:[{
 *              name:"{string} 好友真实名字（例：习*大）",
 *              mobile:"{string} 好友手机号（例：132****5478）",
 *              status:"{int} 好友账号状态(0-已注册、1-已实名、2-已投资)",
 *              statusText:"{string} 好友账号状态描述"
 *          }]
 *   }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/invitation
 *
 * https://192.168.1.86:3000/account/invitation
 */

router.all('/account/invitation', function (req, res, next) {

    var dayList= [];

    var random = [1,3,5,8,2,5];
    random.forEach(function(value,key){
        var recordList= [];
        if( key >= 5) return ;

        random.forEach(function(value,key){
            recordList.push({
                id:value+'',
                title:'有一个美丽的小女孩',
                timeline:'2017-09-1'+value,
                capitalWill:value * 1000 +".00",
                profitWill:value * 0.3 * 1000 +".00"
            });
        });

        dayList.push({
            day:value+'',
            recordList:recordList
        })
    })


    res.json({
        code:0,
        text:'ok',
        data:{
            money:"2510.78",
            moneyYet:"1245.45",
            dayList:dayList
        }
    });
});


/**
 * @fakedoc 我的银行卡列表
 *
 * @name account.bankCardList
 * @href /account/bankCardList
 *
 * @input.post {string}     client 				客户端统计参数
 * @input.post {string}     token 				Token
 *
 * @output {json} 银行卡列表
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:[{
 *         id:"{string} 银行卡记录Id",
 *         cardNo:"{string} 银行卡号（例：622****1234）",
 *         bankName:"{string} 银行卡所属银行名称",
 *         bankAbbr:"{string} 银行卡所属银行英文缩写"
 *   }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * 适用：判断用户有无绑定银行卡、取得绑定所有银行卡等。
 *
 * https://localhost:5000/account/bankCardList
 *
 * https://192.168.1.86:3000/account/bankCardList
 */

router.all('/account/bankCardList', function (req, res, next) {

    var random = [1,3,5,8,2];
    var bankList = [];

    random.forEach(function(value,key){
        bankList.push({
            id:value+'',
            cardNo:'6227****2547',
            bankName:'中国工商银行',
            bankAbbr:"ICBC"
        });
    });

    res.json({
        code:0,
        text:'ok',
        data:bankList
    });
});


/**
 * @fakedoc 我的风险评估
 *
 * @name account.riskAssessList
 * @href /account/riskAssess/list
 *
 * @input.post {string}     client 				客户端统计参数
 * @input.post {string}     token 				Token
 *
 * @output {json} 风险评估
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:[{
 *         id:"{string} 问题id",
 *         title:"{string} 问题",
 *         answerlist:[{
 *          answerId:"{string} 答案id",
 *          content:"{string} 答案"
 *         }]
 *   }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 *
 * https://localhost:5000/account/riskAssess/list
 *
 * https://192.168.1.86:3000/account/riskAssess/list
 */

router.all('/account/riskAssessList', function (req, res, next) {

    var random = [1,3,5,8,2];
    var result = [];

    random.forEach(function(value,key){
        result.push({
            id:value+'',
            title:'这世界有鬼吗?',
            answerList:[{
                answerId:'023',
                content:"你信则有，不信则无。"
            }]
        });
    });

    res.json({
        code:0,
        text:'ok',
        data:result
    });
});



/**
 * @fakedoc 我的风险评估提交
 *
 * @name account.riskAssessSubmit
 * @href /account/riskAssess/submit
 *
 * @input.post {string}     client 				客户端统计参数
 * @input.post {string}     token 				Token
 * @input.post {string}     answer 				选择的问题和答案（格式:"'q0Id;a0Id','q1Id;a1Id'..."）
 *
 * @output {json} 风险评估
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述"
 * }
 *
 * @needAuth
 *
 * @description
 *
 *
 * https://localhost:5000/account/riskAssess/submit
 *
 * https://192.168.1.86:3000/account/riskAssess/submit
 */

router.all('/account/riskAssess/submit', function (req, res, next) {


    res.json({
        code:0,
        text:'ok'
    });
});



module.exports = router;