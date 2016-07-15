var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc xtz.手机号码是否已注册
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
 * 手机号码如果是 13566667777（登陆密码为000001） 表示已经注册过，否则都表示未注册过
 *
 * 手机号码如果是 13577778888，可以注册通过
 *
 * https://localhost:5000/account/hasRegistered
 *
 *https://fakeapi.asterlake.cn:5000/account/hasRegistered
 */
router.all('/account/hasRegistered', function (req, res, next) {
	var mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13566667777');
	var range = 10;
	var rand = Math.random();
	var i = Math.round(rand * range);
	var code = 0;
	var text = "已注册";
    if (mobile != '13566667777') {
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
 * @fakedoc xtz.发送验证码
 *
 * @name account.sendSmsCode
 * @href /account/sendSmsCode
 *
 * @input.post {string} client 客户端统计参数（common/client）
 * @input.post {string} mobile 手机号码
 *
 * @output {json} 手机号码是否已注册
 * {
 *  code:"{int}    状态代码（0表示成功，其它值不成功，数据默认为0）",
 *  text:"{String} 状态描述"
 * }
 *
 * @description
 * 
 * https://localhost:5000/account/sendSmsCode
 * 
 * https://fakeapi.asterlake.cn:5000/account/sendSmsCode
 */
router.all('/account/sendSmsCode', function (req, res, next) {
	var resultValue = {
    	code: 0,
    	text: '发送成功'
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.注册
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
 * https://fakeapi.asterlake.cn:5000/account/register
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
 * @fakedoc xtz.忘记密码时，重置密码（用户未登录）
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
 * https://localhost:5000/account/resetPassword
 *
 * https://fakeapi.asterlake.cn:5000/account/resetPassword
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
 * @fakedoc xtz.修改密码（用户已登录）
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
 *    code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *    text:"{String} 状态描述",
 *    data: {
 *  	  token:"{String} 登录凭证（旧token失败，返回新的token）"
 *    }
 * }
 *
 * @description
 * 
 * https://localhost:5000/account/changePassword
 *
 * https://fakeapi.asterlake.cn:5000/account/changePassword
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
 * @fakedoc xtz.登录
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
 * https://fakeapi.asterlake.cn:5000/account/login
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
 * @fakedoc xtz.登出
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
 * https://fakeapi.asterlake.cn:5000/account/logout
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
 * @fakedoc xtz.我的信息
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
 *  		isSeller:"{int} 是否是商家（1--是，0--不是）",
 *  		isOpenMmm:"{int} 是否开通乾多多(1--开通，0--未开通)",
 *  		isNewUser:"{int} 用户是否是新手(1--是，0--否)",
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
 * https://fakeapi.asterlake.cn:5000/account/my
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
			isSeller:0,
			isOpenMmm:0,
			isNewUser:1,
			hasUnreadMessage:false
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.我的投资券
 *
 * @name account.myTickets
 * @href /account/myTickets
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @output {json} 我的投资券列表
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  		id:"{int} 投资券id",
 *  		status:"{int} 投资券状态（0--正常，1--已使用，2--过期）",
 *      	award:"{String} 投资券值",
 *      	useRule:"{String} 投资券使用规则",
 *      	params:"{String} 投资券可用投资额",
 *     		expiryTime:"{String} 过期时间",
 *     		note:"{String} 投资券来源说明",
 *     		usedTime:"{String} 使用时间"
 *    }]
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/myTickets
 * 
 * https://fakeapi.asterlake.cn:5000/account/myTickets
 */
router.all('/account/myTickets', function (req, res, next) {
	var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;
	var tickets = [];
    var max = 15;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4+1);
        tickets.push({
			id:start,
			status:[0,1,2][type % 3],
            award: [10,20,50][start % 3],
            expiryTime:type%2 == 0?"2015-10-22":"2014-2-10",
			useRule:'满10000元可抵',
            note:"注册奖励",
			usedTime:"2015-01-02",
			params:[10000,1000,500,5000][type-1]
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
 * @fakedoc xtz.我的可用优惠券
 *
 * @name account.myAvailCoupons
 * @href /account/myAvailCoupons
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @output {json} 我的可用优惠券列表
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  		id:"{string} 优惠券id",
 *  		thumbnail:"{string} 缩略图地址",
 *  		content:"{string} 优惠券内容"
 *    }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/myAvailCoupons
 *
 * https://fakeapi.asterlake.cn:5000/account/myAvailCoupons
 */

router.all('/account/myAvailCoupons', function (req, res, next) {
	var start = req.body.start || 0;
	var limit = req.body.limit || 10;
	var order = req.body.order;
	var type = req.body.type;
	var coupons = [];
	var max = 15;
	while (start < max && limit > 0) {
		var type = Math.floor(Math.random() * 4 + 1);
		coupons.push({
			id:start,
			thumbnail:'',
			content:'价值30元柒妈美食体验券'
		});
		start++;
		limit--;
	}
	var resultValue = {
		code: 0,
		text: 'ok',
		data: coupons
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.我的不可用优惠券
 *
 * @name account.myUnavailCoupons
 * @href /account/myUnavailCoupons
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @output {json} 我的不可用优惠券列表
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  		id:"{string} 优惠券id",
 *  		thumbnail:"{string} 缩略图地址",
 *  		content:"{string} 优惠券内容",
 *  		status:"{int} （1--已使用，2--已过期）",
 *  		statusName:"{string} 状态说明"
 *    }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/myUnavailCoupons
 *
 * https://fakeapi.asterlake.cn:5000/account/myUnavailCoupons
 */

router.all('/account/myUnavailCoupons', function (req, res, next) {
	var start = req.body.start || 0;
	var limit = req.body.limit || 10;
	var order = req.body.order;
	var type = req.body.type;
	var coupons = [];
	var max = 15;
	while (start < max && limit > 0) {
		var type = Math.floor(Math.random() * 4 + 1);
		coupons.push({
			id:start,
			thumbnail:'',
			content:'价值30元柒妈美食体验券',
			status:1,
			statusName:'已使用'
		});
		start++;
		limit--;
	}
	var resultValue = {
		code: 0,
		text: 'ok',
		data: coupons
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.我的优惠券详情
 *
 * @name account.myCouponDetail
 * @href /account/myCouponDetail
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} id				优惠券id
 *
 * @output {json} 我的优惠券详情
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  		id:"{string} 优惠券id",
 *  		code:"{string} 二维码地址（只有status为 0 时才有返回值，否则为''）",
 *  		usedTime:"{string} 使用时间（只有status为 1 时才有返回值，否则为''）",
 *  		expiryTime:"{string} 截止有效时间",
 *  		status:"{int} （0--正常，1--已使用，2--已过期）",
 *  		usedRule:"{string} 使用规则html"
 *    }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/myCouponDetail
 *
 * https://fakeapi.asterlake.cn:5000/account/myCouponDetail
 */

router.all('/account/myCouponDetail', function (req, res, next) {
	var coupon = {
			id:'1024',
			code:'',
			usedTime:'2016-07-15',
			expiryTime:'2016-09-15',
			status:1,
			statusName:'已使用',
			usedRule:'<p>1、凭该优惠券可到“柒妈美食”实体店领取价值30元特色美食一份;</p><p>2、该券有效期至2016年8月31日;</p><p>3、该券仅支持线下领取美食;</p><p>4、柒妈美食店地址;上海市浦东新区达尔文路88号6棟405</p>'
	}

	var resultValue = {
		code: 0,
		text: 'ok',
		data: coupon
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.得到指定优惠券的二维码
 *
 * @name account.getQRCodeUrl
 * @href /account/getQRCodeUrl
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} id				优惠券id
 *
 * @output {json} 我的优惠券详情
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	url:"{string} 二维码地址"
 *  }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/getQRCodeUrl
 *
 * https://fakeapi.asterlake.cn:5000/account/getQRCodeUrl
 */

router.all('/account/getQRCodeUrl', function (req, res, next) {

	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			url:''
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.我的入账优惠券种类
 *
 * @name account.myCouponTypeList
 * @href /account/myCouponTypeList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @output {json} 我的入账优惠券种类
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	id:"{string} 记录id",
 *  	type:"{string}  所属优惠券种类",
 *  	thumbnail:"{string} 优惠券缩略图url",
 *  	title:"{string}     优惠券标题",
 *  	content:"{string}   优惠券内容",
 *  }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/myCouponTypeList
 *
 * https://fakeapi.asterlake.cn:5000/account/myCouponTypeList
 */

router.all('/account/myCouponTypeList', function (req, res, next) {
	var results = [];
	var i = 1;
	while(i < 6){
		results.push({
			id:'10'+i,
			type:i+'',
			thumbnail:'',
			title:'柒妈美食',
			content:'柒妈美食体验券'
		})
		i++;
	}

	var resultValue = {
		code: 0,
		text: 'ok',
		data: results
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.我的入账优惠券对应信息列表
 *
 * @name account.myCouponInfoList
 * @href /account/myCouponInfoList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} type 			已入账的优惠券类型
 *
 * @output {json} 我的入账优惠券对应内容列表
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	total:"{string} 优惠券总数",
 *  	thumbnail:"{string} 优惠券缩略图url",
 *  	infoLists:[{
 *			phone:"{string} 使用人号码",
 *			usedTime:"{string} 入账时间"
 *  	}]
 *  }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/myCouponInfoList
 *
 * https://fakeapi.asterlake.cn:5000/account/myCouponInfoList
 */

router.all('/account/myCouponInfoList', function (req, res, next) {
	var results = [];
	var i = 1;
	while(i < 6){
		results.push({
			phone:'1356985625'+ i,
			usedTime:'2015-12-23'
		})
		i++;
	}

	var recordList = {
		total:23 + '',
		thumbnail:'',
		infoLists:results
	}

	var resultValue = {
		code: 0,
		text: 'ok',
		data: recordList
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.检查二维码扫描结果
 *
 * @name account.checkQRCode
 * @href /account/checkQRCode
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} param			提交参数
 *
 * @output {json} 二维码扫描结果
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	type:"{int} 结果类型 （0--扫描成功，1--无权限）",
 *  	couponTitle:"{string} 优惠券类型名称 （type为 1 时可不显示）",
 *  	phone:"{string} 使用人电话号码（type为 1 时可不显示）",
 *  	currentTime:"{string} 当前时间（type为 1 时可不显示）"
 *  }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/checkQRCode
 *
 * https://fakeapi.asterlake.cn:5000/account/checkQRCode
 */

router.all('/account/checkQRCode', function (req, res, next) {

	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			type:'1'
		}
	}
	res.json(resultValue);
});



/**
 * @fakedoc xtz.我的加息券
 *
 * @name account.myInterestTickets
 * @href /account/myInterestTickets
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @output {json} 我的加息券列表
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  		id:"{int} 加息券id",
 *  		status:"{int} 加息券状态（0--正常，1--已使用，2--过期）",
 *      	value:"{String} 加息券值",
 *      	useRule:"{String} 加息券使用规则说明",
 *     		note:"{String} 加息券来源说明",
 *     		usedTime:"{String} 使用时间",
 *     		expiryTime:"{String} 过期时间",
 *    }]
 * }
 *  @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/myInterestTickets
 *
 * https://fakeapi.asterlake.cn:5000/account/myInterestTickets
 *
 **/
 router.all('/account/myInterestTickets', function (req, res, next) {
	 var start = req.body.start || 0;
	 var limit = req.body.limit || 10;
	 var order = req.body.order;
	 var type = req.body.type;
	 var tickets = [];
	 var max = 15;
	 while (start < max && limit > 0) {
		 var type = Math.floor(Math.random() * 4+1);
		 tickets.push({
			 id:start,
			 status:[0,1,2][type % 3],
			 value: [10,20,50][start % 3],
			 useRule:'满10000元可用',
			 expiryTime:type % 2 == 0?"2015-10-22":"2014-2-10",
			 note:"注册奖励",
			 usedTime:"2015-01-02"
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
 * @fakedoc xtz.我的可用投资券
 *
 * @name account.myAvailableTickets
 * @href /account/myAvailableTickets
 *
 * @input.post  {string} client 			客户端统计参数（common/client）
 * @input.post  {string} token 			Token
 *
 *
 * @output {json} 我的可用投资券列表
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *			id:"{String} 投资券id",
 *      	award:"{String} 投资券值",
 *      	params:"{String} 投资券可用投资额",
 *     		expiryTime:"{String} 过期时间",
 *     		note:"{String} 投资券来源说明"
 *    }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/myAvailableTickets
 *
 * https://fakeapi.asterlake.cn:5000/account/myAvailableTickets
 */
router.all('/account/myAvailableTickets', function (req, res, next) {

	var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;
	var tickets = [];
    var max = 15;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4+1);
        tickets.push({
			id:start,
            award: ['10','20','50'][start % 3],
			params:['1000','1000','10000'][start % 3],
            expiryTime:type % 2 == 0 ? "2015-10-22":"2014-2-10",
            note:"注册奖励"
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
 * @fakedoc xtz.我的可用加息券
 *
 * @name account.myAvailInterestTickets
 * @href /account/myAvailInterestTickets
 *
 * @input.post   {string} client 			客户端统计参数（common/client）
 * @input.post   {string} token 			Token
 * @input.post   {string} projectId       项目id
 * @input.post   {string} money			投资金额
 *
 * @output {json} 我的可用加息券列表
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *			id:"{String} 加息券id",
 *		    value:"{String} 加息券值",
 *      	useRule:"{String} 使用规则说明",
 *     		expiryTime:"{String} 过期时间",
 *     		note:"{String} 加息券来源说明"
 *    }]
 * }
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/myAvailInterestTickets
 *
 * https://fakeapi.asterlake.cn:5000/account/myAvailInterestTickets
 */
router.all('/account/myAvailInterestTickets', function (req, res, next) {

	var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;
	var tickets = [];
    var max = 15;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4+1);
        tickets.push({
			id:start+'',
            value: ['1','0.2','0.6'][start % 3],
			useRule:"满10000元可用",
            expiryTime:type % 2 == 0 ? "2015-10-22":"2014-2-10",
            note:"注册奖励"
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
 * @fakedoc xtz.我的投资
 *
 * @name account.myInvestment
 * @href /account/myInvestment
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} flag 			标识（1--持有中，0--已结束）
 *
 * @output {json} 我的投资
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	projectList:[{
 *  		iid:"{int} 记录Id",
 *  	  	pid:"{String} 项目Id",
 *  	    money:"{String} 投资金额",
 *  	    interestYet:"{String} 已获收益",
 *      	interestWill:"{String} 待收收益",
 *  	    status:"{int} 投资状态（0--已结束 1--持有中）",
 *  	    statusName:"{String} 投资状态名称",
 *  	    days:"{int} 剩余还款天数",
 *  		project:{
 *      		title:"{String} 项目名称",
 *          	revenue:"{String} 年化收益率",
 *          	repaymentTime:"{String} 还款时间",
 *          	category:"{int} 项目类型(1--星企贷，2--星保理，3--星车宝，4--星票宝，5--星房宝，6--星股神，7--星居宝)",
 *          	categoryName:"{String} 项目类型说明 "
 *  		}
 * 		}]
 *    }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 *
 * https://localhost:5000/account/myInvestment
 * 
 * https://fakeapi.asterlake.cn:5000/account/myInvestment
 */
router.all('/account/myInvestment', function (req, res, next) {
	var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
	var projects = [];
    var max = 35;
    var types = ['星企贷', '星保理', '星车宝', '星票宝','星房宝','星股神','星居宝'];
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 7 + 1) ;
		var random = Math.floor(Math.random() * 20)*0.01;
        projects.push({
        	iid: start,
			pid: start+1,
			money: 1000000,
			interestYet: 36000,
			interestWill: 1000000 * random,
			status:[0,1][start % 2],
			statusName:["已结束","持有中"][start % 2],
			days:17,
			project:{
				title:types[type-1] + '-' + start,
				category:type,
				categoryName:types[type-1],
				revenue:random,
				repaymentTime:'2016-12-21'
			}
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
    		projectList:projects
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.我的投资--投资详情
 *
 * @name account.myInvestmentDetail
 * @href /account/myInvestmentDetail
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} recordId 		投资记录Id
 *
 * @output {json} 我的投资--投资详情
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	iid:"{int} 记录Id",
 *   	pid:"{String} 项目Id",
 *  	status:"{int} 投资状态（0--已结束 1--持有中）",
 *  	statusName:"{String} 投资状态名称",
 *  	interestYet:"{String} 已获收益",
 *      interestWill:"{String} 预期收益",
 * 		money:"{String} 投资金额",
 * 		intTicket:'{String} 投资时选择的加息利率',
 *  	project:{
 *      	title:"{String} 项目名称",
 *      	category:"{int} 项目类型(1--星企贷，2--星保理，3--星车宝，4--星票宝，5--星房宝，6--星股神，7--星居宝)",
 *          categoryName:"{String} 项目类型说明 ",
 *      	methods:"{String} 还款方式（'按日计息，按月付息，到期还本'）",
 *      	schedule:"{String} 融资进度，不要加(%)",
 *      	revenue: "{String} 年化收益率",
 *      	remaindAndTotalMonth:"{String} 剩余/总期数",
 *          repaymentTime:"{String} 还款日期（应和投资人的收款期一致）",
  *		}
 *    }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/myInvestmentDetail
 * 
 * https://fakeapi.asterlake.cn:5000/account/myInvestmentDetail
 */
router.all('/account/myInvestmentDetail', function (req, res, next) {
    var recordId = req.body.recordId;
	var types = ['星企贷', '星保理', '星车宝', '星票宝','星房宝','星股神','星居宝'];
	var random = Math.floor(Math.random() * 20);
	var type = Math.floor(Math.random() * 7 + 1);
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		iid: 2,
			status: [0,1][random  % 2],
			statusName: ["已结束","持有中"][random  % 2],
			interestTimeline : '2015-12-1',
			money: 1000000,
			interestYet:5200,
			interestWill: 64000,
			pid: 1,
			intTicket:'0.2',
			project:{
				title: types[type-1] + '-' + type,
				category:type,
				categoryName:types[type-1],
				methods: "按日计息,按月付息,到期还本",
				schedule:65,
				revenue:random,
				repaymentTime:'2016-12-20',
				remaindAndTotalMonth : "20/100"
			}
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到指定投资记录的还款计划
 *
 * @name account.repaymentPlan
 * @href /account/repaymentPlan
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} recordId 		投资记录Id
 *
 * @description 
 * 
 * https://localhost:5000/account/repaymentPlan
 * 
 * https://fakeapi.asterlake.cn:5000/account/repaymentPlan
 *
 * @output {json} 还款计划
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	interestTotal:"{String} 总收益",
 *  	money:"{String} 投资金额",
 *     	recordList:
 *     	[{
 *      	planTime:"{string} 应还款时间",
 *  		interestWill:"{string} 应还利息",
 *  		capitalWill:"{string} 剩余应还本金",
			days:"{int} 计息天数",
			status:"{int} 支付状态（1--已支付,0--未支付）",
			statusName:"{String} 支付状态说明"
 *  	}]
 * 	 }
 * }
 */
router.all('/account/repaymentPlan', function (req, res, next) {
    var moment = require('moment');
    var records = [];
    var limit = 10;
    while (limit-- > 0) {
		var start = Math.floor(Math.random()*4);
        var dt = moment().add(10 - limit - 1, 'M');
        records.push({
				planTime: dt.format('YYYY-MM-DD'),
				interestWill: 10,
				capitalWill: 1000,
				days:12,
				status:[0,1][start % 2],
				statusName:['未支付','已支付'][start % 2]
        });
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
			interestTotal: 1002,
			money:20000,
			recordList:records
		}

    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.回款日历
 *
 * @name account.repaymentCalendar
 * @href /account/repaymentCalendar
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} year 			年
 * @input.post {string} month 			月
 *
 * @output {json} 回款日历 (day为第几天，可能为多个值)
 * {
 *     code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *     text:"{String} 状态描述",
 *     data: {
 *         repayment:"{String} 本月应回款(元)",
 *         repaymentYet:"{String} 本月已回款(元)",
 *         dayList:[{
 *         			day:"{String} 天数",
 *         			recordList:	[{
 *         				 title:"{string} 项目名称",
 *      				 repaymentTime:"{string} 还款日期",
 *  					 money:"{string} 应还本金",
 *  			         interest:"{string} 应还利息"
 *         			}]
 *  	   	}]
 *     }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/repaymentCalendar
 * 
 * https://fakeapi.asterlake.cn:5000/account/repaymentCalendar
 */
router.all('/account/repaymentCalendar', function (req, res, next) {
	var resultValue = {
    	code: 0,
    	text: "ok",
    	data: {
			repayment: 30000,
			repaymentYet: 2000,
			dayList: [{
					day:10,
					recordList:
				 	[{title: '星企贷', repaymentTime: '2015-10-5', money: 90, interest: 10},
					{title: '星保理', repaymentTime: '2015-11-5', money: 930, interest: 10},
					{title: '星车宝', repaymentTime: '2015-11-5', money: 906, interest: 10}]
				},
				{
					day: 11,
					recordList:
						[{title: '星企贷', repaymentTime: '2015-10-10', money: 90, interest: 10},
						{title: '星保理', repaymentTime: '2015-11-10', money: 930, interest: 10},
						{title: '星车宝', repaymentTime: '2015-11-10', money: 906, interest: 10}]


				}]
		}
	}
    res.json(resultValue);
});

/**
 * @fakedoc xtz.交易记录分页列表
 *
 * @name account.transactionRecord
 * @href /account/transactionRecord
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int} [pageSize=10] 	页容量
 * @input.post {int} [pageNumber=1] 	页码
 *
 * @output {json} 交易记录分页列表  (返回数据应是全部数据据日期排序后按页返回)
 *
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	timeline:"{String} 操作日期时间",
 *  	category:"{int} 变更类型（1-充值，2-取现，3-投资，4-系统奖励，5-积分兑换，6-收益，7-回收本金，8-折让金（转让），9-债券转让，10-折让金（认购）,102-推荐投资佣金，801-股票配资保证金，802-股票配资管理费，803-股票配资结算，804-股票配资利息，805-保证金（股票配资免费体验保证金））",
 *  	categoryName:"{String} 变更类型名称",
 *  	note:"{String} 备注",
 *  	money: "{String} 金额"
 *   }]
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/transactionRecord
 * 
 * https://fakeapi.asterlake.cn:5000/account/transactionRecord
 */
router.all('/account/transactionRecord', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: [
    	   {timeline:'2015-10-19 11:01',category:1,categoryName:'充值',money:10000,note:'+10000'},
    	   {timeline:'2015-10-12 11:01',category:2,categoryName:'投资',money:500,note:'-500'},
    	   {timeline:'2015-10-09 11:01',category:3,categoryName:'收益',money:10,note:'+10'},
    	   {timeline:'2015-10-09 11:01',category:4,categoryName:'提现',money:-100,note:'-100'},
    	   {timeline:'2015-09-09 11:01',category:5,categoryName:'提现手续费',money:-2,note:'-2'}
       ]
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.保存头像
 *
 * @name account.savePhoto
 * @href /account/savePhoto
 * 
 * @input.post {string} client 			客户端统计参数（common/client）
 * @input.post {string} token				Token
 * @input.post {string} photoData			头像数据
 * @input.post {string} photoType			头像所用图片格式（ 'jpg'，'png'...）
 * @input.post {int}    type				头像数据类型( 0--base64，1--微信url，2--form表单 )
 * 
 * @output {json} 保存头像
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *      	photo:"{String} 头像Url"
 *      }
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/savePhoto
 * 
 * https://fakeapi.asterlake.cn:5000/account/savePhoto
 */
router.all('/account/savePhoto', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: {
			photo:"https://www.hsbank360.com/upload_files/avatar/20151013105933_792.jpg"
		}
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.保存昵称
 *
 * @name account.saveNickname
 * @href /account/saveNickname
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} nickname		昵称
 * 
 * @output {json} 保存昵称
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/saveNickname
 * 
 * https://fakeapi.asterlake.cn:5000/account/saveNickname
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
 * @fakedoc xtz.保存手机号码
 *
 * @name account.savePhone
 * @href /account/savePhone
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} phone			手机号码
 * 
 * @output {json} 保存手机号码
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/savePhone
 * 
 * https://fakeapi.asterlake.cn:5000/account/savePhone
 */
router.all('/account/savePhone', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.保存Email
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
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/saveEmail
 * 
 * https://fakeapi.asterlake.cn:5000/account/saveEmail
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
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{number} 变化的积分值"
 * }
 * 
 * @needAuth
 * 
 * @description
 *
 * https://localhost:5000/account/sign?client=asdfaqerq1werqwe&token=2435135345623413&client=234523452345
 * 
 * https://fakeapi.asterlake.cn:5000/account/sign?client=asdfaqerq1werqwe&token=2435135345623413&client=234523452345
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
 * @fakedoc xtz.我的邀请
 * 
 * @name account.myInvitation
 * @href /account/myInvitation
 *
 * @description
 * 
 * https://localhost:5000/account/myInvitation
 * 
 * https://fakeapi.asterlake.cn:5000/account/myInvitation
 *
 * @input.post {string} client 		 客户端统计参数（common/client）
 * @input.post {string} token			 Token
 * @input.post {string} status			 状态（如果为空，则取全部）
 * @input.post {int=} [pageSize=10] 	 好友列表页容量
 * @input.post {int=} [pageNumber=1] 	 好友列表页码
 *
 * @output {json} 分页列表
 * {
 * 		code:"{int} 状态代码(0表示成功，69633表示token无效，其它值表示失败)",
 *  	text:"{String} 状态描述",
 *  	data: {
 *  		registerCount:"{int} 好友注册人数",
 *      	nameAuthCount:"{int} 好友实名人数",
 *      	investCount:"{int} 好友投资人数",
 *  		pageList:[{
 *      		uname:"{String} 姓名",
 *      		account:"{String} 账号(手机号)",
 *      		status:"{int} 状态(0:已注册、1：已实名、2：已投资)",
 *      		statusName:"{String} 状态名称"
 * 	  		}]
 * 	  }
 * }
 */
router.all('/account/myInvitation', function (req, res, next) {
    var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;

    var myInvitation = [];

    var max = 15;
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        myInvitation.push({
            uname: "张三" + start,
            account: '15025863698',
            status: [0, 1, 2][start % 3],
            statusName: ["已注册","已实名","已投资"][start % 3]
        });
        start++;
        limit--;
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
			 	registerCount:100,
				nameAuthCount:80,
				investCount:50,
				pageList:myInvitation
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
 * https://localhost:5000/account/myEarningPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.asterlake.cn:5000/account/myEarningPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 *
 * @output {json} 分页列表
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	opDt:"{String} 操作日期时间",
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
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
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
 * https://localhost:5000/account/myEarningTicketPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.asterlake.cn:5000/account/myEarningTicketPageList?client=asdfaqerq1werqwe&token=2435135345623413&pageSize=10&pageNumber=1
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
 * https://localhost:5000/account/customerAddressPageList?client=asdfaqerq1werqwe&token=adfasdf234&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.asterlake.cn:5000/account/customerAddressPageList?client=asdfaqerq1werqwe&token=adfasdf234&pageSize=10&pageNumber=1
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
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
    		aId: i + "",
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
 * https://localhost:5000/account/customerAddressAdd?client=asdfaqerq1werqwe&token=adfasdf234&showName=张三&mobile=13566666666&address=浦江科技广场&postCode=123456&isDefault=0
 * 
 * https://fakeapi.asterlake.cn:5000/account/customerAddressAdd?client=asdfaqerq1werqwe&token=adfasdf234&showName=张三&mobile=13566666666&address=浦江科技广场&postCode=123456&isDefault=0
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
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
 * https://localhost:5000/account/customerAddressAdd?client=asdfaqerq1werqwe&token=adfasdf234&addressId=1&showName=张三&mobile=13566666666&address=浦江科技广场&postCode=123456&isDefault=0
 * 
 * https://fakeapi.asterlake.cn:5000/account/customerAddressAdd?client=asdfaqerq1werqwe&token=adfasdf234&addressId=1&showName=张三&mobile=13566666666&address=浦江科技广场&postCode=123456&isDefault=0
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
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
 * https://localhost:5000/account/customerAddressDelete?client=asdfaqerq1werqwe&token=adfasdf234&addressId=1
 * 
 * https://fakeapi.asterlake.cn:5000/account/customerAddressDelete?client=asdfaqerq1werqwe&token=adfasdf234&addressId=1
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
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
 * https://localhost:5000/account/orderConfirm?client=asdfaqerq1werqwe&token=adfasdf234&productId=22&productCount=1&addressId=2
 * 
 * https://fakeapi.asterlake.cn:5000/account/orderConfirm?client=asdfaqerq1werqwe&token=adfasdf234&productId=22&productCount=1&addressId=2
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
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
 * https://localhost:5000/account/orderPageList?client=asdfaqerq1werqwe&token=adfasdf234&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.asterlake.cn:5000/account/orderPageList?client=asdfaqerq1werqwe&token=adfasdf234&pageSize=10&pageNumber=1
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
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
 * https://localhost:5000/account/hasGetNewYearGiftMoney?client=asdfaqerq1werqwe&token=adfasdf234
 *
 * https://fakeapi.asterlake.cn:5000/account/hasGetNewYearGiftMoney?client=asdfaqerq1werqwe&token=adfasdf234
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示领取成功，69633表示token无效，2表示未领取，其它值表示失败）",
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
 * https://localhost:5000/account/getNewYearGiftMoney?client=asdfaqerq1werqwe&token=adfasdf234
 *
 * https://fakeapi.asterlake.cn:5000/account/getNewYearGiftMoney?client=asdfaqerq1werqwe&token=adfasdf234
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示领取成功，69633表示token无效，其它值表示失败）",
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


/**
 * @fakedoc 保存用户是否接收push消息的标识
 *
 * @name account.savePushSwitch
 * @href /account/savePushSwitch
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			token
 * @input.post {string} pushSwitch 	(true or false)
 * @needAuth
 * @description
 *
 * https://localhost:5000/account/savePushSwitch?client=asfdaqwerqe
 *
 * https://fakeapi.asterlake.cn:5000/account/savePushSwitch?client=asfdaqwerqe
 *
 * @output {json} 用户是否接收push消息的标识
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 */
router.all('/account/savePushSwitch', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok'
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.绑定银行卡
 *
 * @name account.addBankCard
 * @href /account/addBankCard
 *
 * @input.post {String} client 			客户端统计参数（common/client）
 * @input.post {String} token 				token
 * @input.post {String} provinceCode   	省份编码
 * @input.post {String} cityCode   		城市编码
 * @input.post {String} bankId				银行Id
 * @input.post {String} branchBankName		分行名称
 * @input.post {String} cardNo				银行卡号
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/addBankCard
 *
 * https://fakeapi.asterlake.cn:5000/account/addBankCard
 *
 * @output {json} 绑定银行卡
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	recordId:"{String} 添加成功后的记录Id"
 *  }
 * }
 *
 */
router.all('/account/addBankCard', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data :{
			recordId:11
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.解绑银行卡
 *
 * @name account.removeBankCard
 * @href /account/removeBankCard
 *
 * @input.post {String} client 			客户端统计参数（common/client）
 * @input.post {String} token 				token
 * @input.post {String} recordId			绑定记录Id
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/removeBankCard
 *
 * https://fakeapi.asterlake.cn:5000/account/removeBankCard
 *
 * @output {json} 解绑银行卡
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 *
 */
router.all('/account/removeBankCard', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok'
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.绑定的银行卡列表
 *
 * @name account.bankCardList
 * @href /account/bankCardList
 *
 * @input.post {String} client 			客户端统计参数（common/client）
 * @input.post {String} token 				token
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/bankCardList
 *
 * https://fakeapi.asterlake.cn:5000/account/bankCardList
 *
 * @output {json} 绑定的银行卡列表
 * {
 * 		code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  	text:"{String} 状态描述",
 *  	data:[{
 *  		id:"{String} 绑定记录Id",
 *  		cardNo:"{String} 银行卡号 （后台加*输出 如：622****1234）",
 *  		bankName:"{String} 银行卡所属银行名称",
 *  		bankId:"{String} 银行卡所属银行Id",
 *  		bankAbbr:"{String} 银行卡所属银行英文缩写",
 *  		logoUrl:"{String} 银行logoUrl",
 *  		main:"{int} 是否为默认银行卡（1--是，0--否）"
 * 	 }]
 * }
 *
 */
router.all('/account/bankCardList', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data:[
			{id:'19',cardNo:'622****1545',bankName:'建设银行',bankId:'3',bankAbbr:'CCB',logoUrl:'',main:1},
			{id:'20',cardNo:'622****1545',bankName:'建设银行',bankId:'3',bankAbbr:'CCB',logoUrl:'',main:0},
			{id:'21',cardNo:'622****1545',bankName:'建设银行',bankId:'3',bankAbbr:'CCB',logoUrl:'',main:0},
			{id:'22',cardNo:'622****1545',bankName:'建设银行',bankId:'3',bankAbbr:'CCB',logoUrl:'',main:0},
			{id:'23',cardNo:'622****1545',bankName:'建设银行',bankId:'3',bankAbbr:'CCB',logoUrl:'',main:0},
			{id:'24',cardNo:'622****1545',bankName:'建设银行',bankId:'3',bankAbbr:'CCB',logoUrl:'',main:0}
		]
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.账户是否已开通乾多多支付
 *
 * @name account.isOpenMmm
 * @href /account/isOpenMmm
 *
 * @input.post {String} client 			客户端统计参数（common/client）
 * @input.post {String} token 				token
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/isOpenMmm
 *
 * https://fakeapi.asterlake.cn:5000/account/isOpenMmm
 *
 * @output {json} 账户是否已开通乾多多支付
 * {
 * 		code:"{int}    状态代码（0表示成功，其它值表示失败--模拟接口默认返回0）",
 *  	text:"{String} 状态描述"
 * }
 */
router.all('/account/isOpenMmm', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok'
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.得到默认银行卡
 *
 * @name account.getMainBankcard
 * @href /account/getMainBankcard
 *
 * @input.post {String} client 			客户端统计参数（common/client）
 * @input.post {String} token 				token
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/getMainBankcard
 *
 * https://fakeapi.asterlake.cn:5000/account/getMainBankcard
 *
 * @output {json} 得到默认银行卡
 * {
 * 		code:"{int}    状态代码（0表示成功，其它值表示失败--模拟接口默认返回0）",
 *  	text:"{String} 状态描述",
 *  	data:{
 *			id:"{String} 绑定记录Id",
 *  		cardNo:"{String} 银行卡号 （后台加*输出 如：622****1234）",
 *  		bankName:"{String} 银行卡所属银行名称",
 *  		bankId:"{String} 银行卡所属银行Id",
 *  		bankAbbr:"{String} 银行卡所属银行英文缩写",
 *  		logoUrl:"{String} 银行logoUrl"
 *  	}
 * }
 */
router.all('/account/getMainBankcard', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			id: '19',
			cardNo: '622****1545',
			bankName: '建设银行',
			bankId: '3',
			bankAbbr: 'CCB',
			logoUrl:''
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.设置默认银行卡
 *
 * @name account.setMainBankcard
 * @href /account/setMainBankcard
 *
 * @input.post {String} client 			客户端统计参数（common/client）
 * @input.post {String} token 				token
 * @input.post {String} recordId			要设置的银行卡添加记录Id
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/setMainBankcard
 *
 * https://fakeapi.asterlake.cn:5000/account/setMainBankcard
 *
 * @output {json} 设置默认银行卡
 * {
 * 		code:"{int}    状态代码（0表示成功，其它值表示失败--模拟接口默认返回0）",
 *  	text:"{String} 状态描述"
 *
 * }
 */
router.all('/account/setMainBankcard', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok'
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.获取用户姓名和身份证
 *
 * @name account.getNameAndChinaId
 * @href /account/getNameAndChinaId
 *
 * @input.post {String} client 			客户端统计参数（common/client）
 * @input.post {String} token 				token
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/getNameAndChinaId
 *
 * https://fakeapi.asterlake.cn:5000/account/getNameAndChinaId
 *
 * @output {json} 设置默认银行卡
 * {
 * 		code:"{int}    状态代码（0表示成功，其它值表示失败--模拟接口默认返回0）",
 *  	text:"{String} 状态描述",
 *      data:{
 *      	name:"{String} 用户姓名",
 *          chinaId:"{String} 用户身份证号"
 *      }
 *
 * }
 */
router.all('/account/getNameAndChinaId', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data:{
			name:'hello',
			chinaId:'72262254896856985'
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.获取原快捷支付银行卡信息
 *
 * @name account.getQuickPayCardInfo
 * @href /account/getQuickPayCardInfo
 *
 * @input.post {String} client 			客户端统计参数（common/client）
 * @input.post {String} token 				token
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/account/getQuickPayCardInfo
 *
 * https://fakeapi.asterlake.cn:5000/account/getQuickPayCardInfo
 *
 * @output {json} 设置默认银行卡
 * {
 * 		code:"{int}    状态代码（0表示成功，其它值表示失败--模拟接口默认返回0）",
 *  	text:"{String} 状态描述",
 *      data:[{
 *      	cardNo:"{String} 银行卡号 (需模糊处理，格式：2545********2548)",
 *          money:"{String} 必须提现金额"
 *       }]
 *
 * }
 */
router.all('/account/getQuickPayCardInfo', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data:[
			{cardNo:'2548********2548',money:'10000'},
			{cardNo:'2548********2018',money:'5000'}
		]
	}
	res.json(resultValue);
});



module.exports = router;