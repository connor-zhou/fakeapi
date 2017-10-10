var express = require('express');
var router = express.Router();

/**
 * @fakedoc 得到宝付平台注册新用户的URL
 *
 * @name bf.toRegister
 * @href /bf/toRegister
 *
 * @input.post {string} client 		    客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {string} realname 		真实姓名
 * @input.post {string} chinaId 		身份证号码
 * @input.post {string} callbackUrl     注册完成后的跳转地址（需 base64 编码）
 *
 * @needAuth
 *
 * @description
 *
 * 得到宝付平台注册新用户的URL
 * 
 * https://localhost:5000/bf/toRegister
 * 
 * https://192.168.1.86:3000/bf/toRegister
 *
 * @output {json} 宝付平台注册新用户的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      url:"{string} 注册的URL",
 *      maps:"{map} 参数map"
 *  }
 * }
 */
router.all('/bf/toRegister', function (req, res, next) {
        var realname, chinaId;
        realname = req.query.realname ? req.query.realname :req.body.realname;
        chinaId = req.query.chinaId ? req.query.chinaId :req.body.chinaId;
        var resultValue = {
        	code: 0,
        	text: 'ok',
        	data: {
               url:'/bf/callback/toRegister',
               maps:[{'key':'value'}]
            }
        }
        res.json(resultValue);
});

/**
 * @fakedoc 得到宝付平台充值的URL
 *
 * @name bf.toRecharge
 * @href /bf/toRecharge
 *
 * @input.post {string} client 		     客户端统计参数
 * @input.post {string} token 			 Token
 * @input.post {string} money 		     充值金额
 * @input.post {string} method 		     充值方式（0-快捷支付，1-网银支付）
 * @input.post {string} callbackUrl      充值完成后的跳转地址（需 base64 编码）
 *
 * @needAuth
 *
 * @description
 *
 * 得到宝付平台充值的URL
 *
 * 移动端只能用快捷支付（method == 0）
 * 
 * https://localhost:5000/bf/toRecharge
 * 
 * https://192.168.1.86:3000/bf/toRecharge
 *
 * @output {json} 充值的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      url:"{string} 充值的URL",
 *      maps:"{map} 参数map"
 *  }
 * }
 */
router.all('/bf/toRecharge', function (req, res, next) {
        var money = req.query.money ? req.money :req.body.money;
        var resultValue = {
        	code: 0,
        	text: 'ok',
            data: {
                url:'/bf/callback/toRecharge',
                maps:[{'key':'value'}]
            }
        }
        res.json(resultValue);
});

/**
 * @fakedoc 得到宝付平台提现的URL
 *
 * @name bf.toWithdraw
 * @href /bf/toWithdraw
 *
 * @input.post {string}  client 		 客户端统计参数
 * @input.post {string}  token 			 Token
 * @input.post {string}  money 		     提现金额
 * @input.post {string=} cardId          提现银行卡id
 * @input.post {int}     isUseTicket     是否用提现券（1-是，0-否）
 * @input.post {string}  callbackUrl     提现完成后的跳转地址（需 base64 编码）
 *
 * @needAuth
 *
 * @description
 *
 * 得到宝付平台提现的URL
 * 
 * https://localhost:5000/bf/toWithdraw
 * 
 * https://192.168.1.86:3000/bf/toWithdraw
 *
 * @output {json} 提现的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      url:"{string} 提现的URL",
 *      maps:"{map} 参数map"
 *  }
 * }
 */
router.all('/bf/toWithdraw', function (req, res, next) {
        var money = req.query.money ? req.query.money :req.body.money;
        var cardNo = req.query.cardNo ? req.query.cardNo :req.body.cardNo;
        var resultValue = {
        	code: 0,
        	text: 'ok',
            data: {
                url:'/bf/callback/toWithdraw',
                maps:[{'key':'value'}]
            }
        };
        res.json(resultValue);
});


/**
 * @fakedoc 得到宝付平台修改交易密码的URL
 *
 * @name bf.toTradePassword
 * @href /bf/toTradePassword
 *
 * @input.post {string}  client 		 客户端统计参数
 * @input.post {string}  token 			 Token
 * @input.post {string}  callbackUrl     修改交易密码完成后的跳转地址（需 base64 编码）
 *
 * @needAuth
 *
 * @description
 *
 * 得到宝付平台修改交易密码的URL
 *
 * https://localhost:5000/bf/toTradePassword
 *
 * https://192.168.1.86:3000/bf/toTradePassword
 *
 * @output {json} 修改交易密码的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      url:"{string} 修改交易密码的URL",
 *      maps:"{map} 参数map"
 *  }
 * }
 */

router.all('/bf/toTradePassword', function (req, res, next) {
    var money = req.query.money ? req.query.money :req.body.money;
    var cardNo = req.query.cardNo ? req.query.cardNo :req.body.cardNo;
    var resultValue = {
        code: 0,
        text: 'ok',
        data: {
            url:'/bf/callback/toTradePassword',
            maps:[{'key':'value'}]
        }
    };
    res.json(resultValue);
});


/**
 * @fakedoc 得到宝付平台绑定银行卡的URL
 *
 * @name bf.toBindBankcard
 * @href /bf/toBindBankcard
 *
 * @input.post {string}  client 		 客户端统计参数
 * @input.post {string}  token 			 Token
 * @input.post {string}  callbackUrl     绑定银行卡完成后的跳转地址（需 base64 编码）
 *
 * @needAuth
 *
 * @description
 *
 * 得到宝付平台绑定银行卡的URL
 *
 * https://localhost:5000/bf/toBindBankcard
 *
 * https://192.168.1.86:3000/bf/toBindBankcard
 *
 * @output {json} 绑定银行卡的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      url:"{string} 绑定银行卡的URL",
 *      maps:"{map} 参数map"
 *  }
 * }
 */

router.all('/bf/toBindBankcard', function (req, res, next) {
    var money = req.query.money ? req.query.money :req.body.money;
    var cardNo = req.query.cardNo ? req.query.cardNo :req.body.cardNo;
    var resultValue = {
        code: 0,
        text: 'ok',
        data: {
            url:'/bf/callback/toBindBankcard',
            maps:[{'key':'value'}]
        }
    };
    res.json(resultValue);
});

/**
 * @fakedoc 解绑银行卡
 *
 * @name bf.toUnbindBankcard
 * @href /bf/toUnbindBankcard
 *
 * @input.post {string}     client 		        客户端统计参数
 * @input.post {string}     token 			    Token
 * @input.post {string=}    bankId 			    绑定的银行卡id
 *
 * @needAuth
 *
 * @description
 *
 *
 * https://localhost:5000/bf/toUnbindBankcard
 *
 * https://192.168.1.86:3000/bf/toUnbindBankcard
 *
 * @output {json} 解绑银行卡
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述"
 * }
 */

router.all('/bf/toUnbindBankcard', function (req, res, next) {
    var resultValue = {
        code: 0,
        text: 'ok'
    };
    res.json(resultValue);
});


/**
 * @fakedoc 得到宝付平台投资的URL
 *
 * @name bf.toInvest
 * @href /bf/toInvest
 * 
 * @input.post {string}    client 				        客户端统计参数
 * @input.post {string}    token					    Token
 * @input.post {string}    projectId				    项目Id
 * @input.post {string}    money					    投资金额
 * @input.post {string=}   cashTicketIds				现金券Ids（多个id用半角逗号隔开,例："'015','023'..."）
 * @input.post {string=}   cashTicketTotalValue			选中的现金券总值（cashTicketIds 有值时必传）
 * @input.post {string=}   rateTicketId			        加息券Id
 * @input.post {string}    callbackUrl                  投资完成后的跳转地址（需 base64 编码）
 *
 * @needAuth
 *
 * @output {json} 投资的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      url:"{string} 投资的URL",
 *      maps:"{map} 参数map"
 *  }
 * }
 * 
 * @needAuth
 * 
 * @description
 *
 * 得到宝付平台投资的URL
 *
 * https://localhost:5000/bf/toInvest
 * 
 * https://192.168.1.86:3000/bf/toInvest
 */
router.all('/bf/toInvest', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
        data: {
            url:'/bf/callback/toInvest',
            maps:[{'key':'value'}]
        }
    }
    res.json(resultValue);
});

// /**
//  * @fakedoc 得到宝付平台提现手续费
//  *
//  * @name bf.withdrawFee
//  * @href /bf/withdrawFee
//  *
//  * @input.post {string}   client 				    客户端统计参数
//  * @input.post {string}   token					    Token
//  * @input.post {string}   money					    提现金额
//  *
//  * @output {json} 投资的URL
//  * {
//  *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
//  *  text:"{string} 状态描述",
//  *  data:{
//  *      fee:"{Strng} 提现手续费用"
//  *      }
//  * }
//  *
//  * @needAuth
//  *
//  * @description
//  *
//  * 得到宝付平台投资的URL
//  *
//  * https://localhost:5000/bf/withdrawFee
//  *
//  * https://192.168.1.86:3000/bf/withdrawFee

router.all('/bf/withdrawFee', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
        data: {
            fee:'20'
        }
    }
    res.json(resultValue);
});


/**
 * @fakedoc 得到宝付平台激活为新系统的URL
 *
 * @name bf.toActivate
 * @href /bf/toActivate
 *
 * @input.post {string} client 		    客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {string} callbackUrl     激活完成后的跳转地址（需 base64 编码）
 *
 * @needAuth
 *
 * @description
 *
 * 得到宝付平台激活为新系统的URL
 *
 * https://localhost:5000/bf/toActivate
 *
 * https://192.168.1.86:3000/bf/toActivate
 *
 * @output {json} 得到宝付平台老系统用户激活为新系统
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      url:"{string} 激活的URL",
 *      maps:"{map} 参数map"
 *  }
 * }
 */
router.all('/bf/toActivate', function (req, res, next) {
    var realname, chinaId;
    realname = req.query.realname ? req.query.realname :req.body.realname;
    chinaId = req.query.chinaId ? req.query.chinaId :req.body.chinaId;
    var resultValue = {
        code: 0,
        text: 'ok',
        data: {
            url:'/bf/callback/toRegister',
            maps:[{'key':'value'}]
        }
    }
    res.json(resultValue);
});


/**
 * @fakedoc 得到用户转账到宝付的URL
 *
 * @name bf.toTransfer
 * @href /bf/toTransfer
 *
 * @input.post {string} client 		    客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {string} callbackUrl     转账完成后的跳转地址（需 base64 编码）
 *
 * @needAuth
 *
 * @description
 *
 *
 * https://localhost:5000/bf/toTransfer
 *
 * https://192.168.1.86:3000/bf/toTransfer
 *
 * @output {json} 得到用户转账url
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      url:"{string} 转账的URL",
 *      maps:"{map} 参数map"
 *  }
 * }
 */
router.all('/bf/toTransfer', function (req, res, next) {
    var realname, chinaId;
    realname = req.query.realname ? req.query.realname :req.body.realname;
    chinaId = req.query.chinaId ? req.query.chinaId :req.body.chinaId;
    var resultValue = {
        code: 0,
        text: 'ok',
        data: {
            url:'/bf/callback/toTransfer',
            maps:[{'key':'value'}]
        }
    }
    res.json(resultValue);
});




module.exports = router;
