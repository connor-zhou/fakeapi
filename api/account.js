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
 * @input.post {string} phone 		     	手机号码
 * @input.post {string} password 		 	密码
 * @input.post {string} smsCode 		 	短信验证码
 * @input.post {string} recommendPhone  	推荐人手机号码
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
 * 手机号码如果是 13577778888 可以注册通过。
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
 * @input.post {string} client 			客户端统计参数（common/client）
 * @input.post {string} phoneOrUname 		手机号码或者用户名
 * @input.post {string} password 			密码
 * @input.post {string} smsCode 			短信验证码
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
 * 用户可以用mobile或uname + password登录，也可以用mobile + smsCode登录
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
 *  	code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  	text:"{String} 状态描述",
 *  	data:{
 *  		aid:"{String} 会员账号Id",
 *  		photo:"{String} 头像URL",
 *  		nickname:"{String} 昵称",
 *  		realName:"{String} 真实姓名",
 *  		chinaId:"{String} 身份证号码（后台做模糊处理）",
 *  		phone:"{String} 模糊后手机号码",
 *  	    realPhone:"{String} 真实号码",
 *  		uname:"{String}  用户名",
 *  		email:"{String} 电子邮箱",
 *  		capitalTotal:"{String} 账户资产",
 *  		interestTotal:"{String} 账户收益",
 *  		money:"{String} 账户余额",
 *  		interestc:"{String} 累计收益",
 *  		interestWill:"{String} 待收利息",
 *  		capitalWill:"{String} 待收本金",
 *  		capitalFreeze:"{String} 冻结本金",
 *  		freeWithdrawLimit:"{String} 免费提现额度",
 *  		coins:"{String} 星币数量",
 *  		isSign:"{int} 是否已签到(1--是，0--否）",
 *  		isSeller:"{int} 是否是商家（1--是，0--不是）",
 *  		isOpenMmm:"{int} 是否开通乾多多(1--开通，0--未开通)",
 *  		isNewUser:"{int} 用户是否是新手(1--是，0--否)",
 *  		hasExpMoney:"{int} 是否有体验金（1--是，0--否）",
 *  		hasUnreadMessage:"{int} 是否有未读信息（1--有，0--无）"
 *  	}
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/my
 * 
 * https://192.168.1.86:3000/account/my
 */
router.all('/account/my', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var random = Math.floor(Math.random() * 4);
	var resultValue = {
		code: code,
		text: text,
		data: {
			photo:"https://www.hsbank360.com/upload_files/avatar/20151013105933_792.jpg",
			capitalTotal:9600,
			money:1000,
			capitalFreeze:3600,
			capitalWill:5000,
			interestTotal:30434,
			interestc:2500,
			interestWill:25434,
			aid: 5,
			nickname: '小二hahaha',
			chinaId:'622*******3562',
			realName: '王小二',
			phone: '135****7777',
			realPhone:'13526548754',
			uname:'小王',
			email:'34523452@ww.com',
			freeWithdrawLimit:'5000',
			coins:'34',
			hasExpMoney:1,
			isSign:0,
			isSeller:0,
			isOpenMmm:0,
			isNewUser:1,
			hasUnreadMessage:false
		}
	}
	res.json(resultValue);
});








module.exports = router;