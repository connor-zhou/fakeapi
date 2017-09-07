var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 注册
 *
 * @name account.register
 * @href /account/register
 *
 *
 * @input.post {string} mobile		     	手机号码
 * @input.post {string} password 		 	密码
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
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} aname 			账户名（手机号或者用户名）
 * @input.post {string=} password 		密码
 * @input.post {string=} smsCode 		短信验证码
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
 * aname+password 可通用；aname+smsCode 仅适用 aname 用手机号的情况。
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
 *  		freeWithdrawLimit:"{string} 免费提现额度",
 *  		investmentSum:"{string} 累计投资",
 *  		integral:"{string} 积分",
 *  		isSign:"{int} 是否已签到（1-签了，0-没签）",
 *  		isOpenFy:"{int} 是否开通富有(1-开通，0-未开通)",
 *  		isNewUser:"{int} 用户是否是新手(1-是，0-否)",
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
			freeWithdrawLimit:'5000.00',
			integral:"2000",
			isSign:0,
			isOpenFy:0,
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
 * @input.post {string}     email 		新邮箱地址（仅 step == 1 时传入）
 * @input.post {string}     smsCode     手机验证码（仅 step == 1 时传入）
 * @input.post {string}     emailCode   邮箱验证码（仅 step == 2 时传入）
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
 * @input.post {string}     mobile 		新手机号码（仅 step == 1 时传入）
 * @input.post {string}     smsCode01   原手机验证码（仅 step == 1 时传入）
 * @input.post {string}     smsCode02   新手机验证码（仅 step == 2 时传入）
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
 * @input.post {string} avatarType 		头像所用图片格式（ 'jpg'，'png'...）
 * @input.post {string} avatarData 		头像数据
 * @input.post {string} type			头像数据类型( 0--base64，1--微信url，2--form表单 )
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
 * @fakedoc 更改密码（修改，重置）
 *
 * @name account.alterPassword
 * @href /account/alterPassword
 *
 * @input.post {string}  client 		客户端统计参数
 * @input.post {string}  pwdNew         新密码
 * @input.post {string} pwdNewAgain 	确认新密码
 * @input.post {string=}  mobile 		手机号（仅重置密码传入，必须传）
 * @input.post {string=} smsCode        验证码（仅重置密码时传入，必须传）
 * @input.post {string=} token 			Token（仅修改密码时传入，必须传）
 * @input.post {string=} pwd 		    原始密码（仅修改密码时传入，必须传）
 *
 *
 * @output {json} 返回的头像
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:{
 *  		token:"{string=} 登录凭证（旧token失败，返回新的token。仅修改密码成功后返回）"
 		}
 * }
 *
 * @needAuth
 *
 * @description
 *
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
 * @fakedoc 我的加息券
 *
 * @name account.rateTickets
 * @href /account/rateTickets
 *
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {int=} 	status 			加息券状态（0-正常，1-已使用，2-过期。不传或者值为空，按时间顺序显示全部。）
 *
 * @output {json} 加息券信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:[{
 *  		id:"{string} 加息券id",
 *  		value:"{string} 加息券值",
 *  		status:"{int} 加息券状态（0-正常，1-已使用，2-已过期）",
 *  		usedTimeline:"{string=} 加息券使用时间（仅当status = 1 时返回）",
 *  		expireTimeline:"{string} 加息券过期时间",
 *  		useRule:"{string} 加息券使用规则说明",
 *  		remark:"{string} 加息券来源等备注信息"
 		}]
 * }
 *
 * @needAuth
 *
 * @description
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
			id:value+'',
			value:'0.'+value,
			status:value === 5 ? 0 : value === 2 ? 1:2 ,
			expireTimeline:'2018-12-1'+value+' 12:50',
			useRule:"只能用在投资额5000元以上的项目",
			remark:"是在参加线下逗比全明星赛时候获得的"
		});
		value === 2 && (result[key]['usedTimeline'] = '2017-12-1'+value+' 12:50')
	});

    res.json({
        code:0,
        text:'ok',
        data:result
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
 * @input.post {int=} 	status 			投资券状态（0-正常，1-已使用，2-过期。不传或者值为空，按时间顺序显示全部。）
 *
 * @output {json} 投资券信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:[{
 *  		id:"{string} 投资券id",
 *  		value:"{string} 投资券值",
 *  		status:"{int} 投资券状态（0-正常，1-已使用，2-已过期）",
 *  		useLimitMoney:"{string} 投资券可用投资额",
 *  		usedTimeline:"{string=} 投资券使用时间（仅当status = 1 时返回）",
 *  		expireTimeline:"{string} 投资券过期时间",
 *  		useRule:"{string} 投资券使用规则说明",
 *  		remark:"{string} 投资券来源等备注信息"
 		}]
 * }
 *
 * @needAuth
 *
 * @description
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
            id:value+'',
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
        data:result
    });
});


/**
 * @fakedoc 我的资金流水
 *
 * @name account.transactionRecords
 * @href /account/transactionRecords
 *
 * @input.post {string} client 				客户端统计参数
 * @input.post {string} token 				Token
 * @input.post {int=}  [pageNumber=1]		页码
 * @input.post {int=}  [pageSize=10]		页量
 * @input.post {int}  	category			交易类型（0-全部，1-充值，2-提现，3-投资，4-收益，5-本金，6-奖励）
 * @input.post {string}  startTimeline		开始时间（毫秒级时间戳，所有时间段时，传空值)
 * @input.post {string}  endTimeline		结束时间（毫秒级时间戳，所有时间段时，传空值）
 *
 * @output {json} 资金流水
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:[{
 *  		id:"{string} 交易流水唯一标识",
 *  		timeline:"{string} 交易发生时间（例：2017-12-04）",
 *  		category:"{int} 交易类型（0-全部，1-充值，2-提现，3-投资，4-收益，5-本金，6-奖励）",
 *  		categoryText:"{string} 交易类型描述",
 *  		remark:"{string} 交易详情",
 *  		cash:"{string} 交易涉及到金额",
 *  		money:"{string} 交易后账户余额"
 		}]
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
            timeline:'2017-09-1'+value,
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
        data:result
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
 * @input.post {int}        state 				投资项目的状态（0-持有中，1-已结束，传空值表示所有。）
 *
 *
 * @output {json} 投资记录信息
 * {
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{string} 状态描述",
 *  	data:[{
 *  		id:"{string} 投资记录id",
 *  		pId:"{string} 投资项目的id",
 *  	    pTitle:"{string} 项目名称",
 *          state:"{int} 投资记录的状态（0-持有中，1-已结束）",
 *  		money:"{string} 投资金额",
 *  	    annualizedRate:"{string} 年化利率",
 *  	    profitWill:"{string=} 待收收益（仅 status == 0 时返回）",
 *  	    profit:"{string} 已收收益",
 *  	    remainDays:"{string=} 剩余天数（仅 status == 0 时返回）",
 *  	    endTimeline:"{string} 项目结束时间（仅 status == 1 时返回，例：2017-12-14）"
 		}]
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

    var random = [1,3,5,8,2,5];
    var catText = ['全部','充值','提现','投资','收益','本金','奖励'];
    var result= [];

    random.forEach(function(value,key){
        var cat = Math.floor(Math.random() * 5+1);
        result.push({
            id:value+'',
            timeline:'2017-09-1'+value,
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
        data:result
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
 *              recordList:[{
 *                  id:"{string} 项目id",
 *                  title:"{string} 项目名称",
 *                  timeline:"{string} 还款时间",
 *                  capitalWill:"{string} 应还本金",
 *                  profitWill:"{string} 应还利息"
 *              }]
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
 * @fakedoc 我的消息
 *
 * @name account.messagePageList
 * @href /account/messagePageList
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
 *      data:[{
 *          id:"{string} 消息唯一标识id",
 *          status:"{int} 消息状态（0-未读，其它已读）",
 *          title:"{string} 消息标题",
 *          content:"{string} 消息内容简介（type == 0 时显示全部内容）",
 *          timeline:"{string} 创建时间（例：2015-12-12 12:12:15）"
 *      }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/messagePageList
 *
 * https://192.168.1.86:3000/account/messagePageList
 */

router.all('/account/messagePageList', function (req, res, next) {

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



module.exports = router;