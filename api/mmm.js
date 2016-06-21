var express = require('express');
var router = express.Router();

/**
 * @fakedoc xtz.得到乾多多平台注册新用户的URL
 *
 * @name mmm.toRegister
 * @href /mmm/toRegister
 *
 * @input.post {String} client 		    客户端统计参数（common/client）
 * @input.post {String} token 			    Token
 * @input.post {String} realName 		    真实姓名
 * @input.post {String} chinaId 		    身份证号码
 * @input.post {String} callbackUrlSucc   注册成功后的跳转地址（只h5页面对应接口需要传入）
 * @input.post {String} callbackUrlFail   注册失败后的跳转地址（只h5页面对应接口需要传入）
 *
 * @description
 *
 * 得到乾多多平台注册新用户的URL
 * 
 * https://localhost:5000/mmm/toRegister
 * 
 * https://fakeapi.asterlake.cn:5000/mmm/toRegister
 *
 * @output {json} 乾多多平台注册新用户的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *      url:"{String} 乾多多平台注册新用户的URL"
 *  }
 * }
 */
router.all('/mmm/toRegister', function (req, res, next) {
        var realName, chinaId;
        realName = req.query.realName ? req.query.realName :req.body.realName;
        chinaId = req.query.chinaId ? req.query.chinaId :req.body.chinaId;
        var resultValue = {
        	code: 0,
        	text: 'ok',
        	data: {
               url:'/mmm/callback/toRegister'
            }
        }
        res.json(resultValue);
});

/**
 * @fakedoc xtz.得到乾多多平台充值的URL
 *
 * @name mmm.toRecharge
 * @href /mmm/toRecharge
 *
 * @input.post {String} client 		     客户端统计参数（common/client）
 * @input.post {String} token 			     Token
 * @input.post {String} money 		         充值金额
 * @input.post {String} callbackUrlSucc    充值成功后的跳转地址 （只h5页面对应接口需要传入）
 * @input.post {String} callbackUrlFail    充值失败后的跳转地址 （只h5页面对应接口需要传入）
 *
 * @description
 *
 * 得到乾多多平台充值的URL
 * 
 * https://localhost:5000/mmm/toRecharge
 * 
 * https://fakeapi.asterlake.cn:5000/mmm/toRecharge
 *
 * @output {json} 充值的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *      url:"{String} 乾多多平台充值的URL"
 *   }
 * }
 */
router.all('/mmm/toRecharge', function (req, res, next) {
        var money = req.query.money ? req.money :req.body.money;
        var resultValue = {
        	code: 0,
        	text: 'ok',
            data: {
                url:'/mmm/callback/toRecharge'
            }
        }
        res.json(resultValue);
});

/**
 * @fakedoc xtz.得到乾多多平台提现的URL
 *
 * @name mmm.toWithdraw
 * @href /mmm/toWithdraw
 *
 * @input.post {String} client 		     客户端统计参数（common/client）
 * @input.post {String} token 			     Token
 * @input.post {String} money 		         提现金额
 * @input.post {String} cardNo             提现银行卡号
 * @input.post {String} callbackUrlSucc    提现成功后的跳转地址 （只h5页面对应接口需要传入）
 * @input.post {String} callbackUrlFail    提现失败后的跳转地址 （只h5页面对应接口需要传入）
 *
 * @description
 *
 * 得到乾多多平台提现的URL
 * 
 * https://localhost:5000/mmm/toWithdraw
 * 
 * https://fakeapi.asterlake.cn:5000/mmm/toWithdraw
 *
 * @output {json} 提现的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *      url: "{String} 乾多多平台提现的URL"
 *  }
 *
 * }
 */
router.all('/mmm/toWithdraw', function (req, res, next) {
        var money = req.query.money ? req.query.money :req.body.money;
        var cardNo = req.query.cardNo ? req.query.cardNo :req.body.cardNo;
        var resultValue = {
        	code: 0,
        	text: 'ok',
            data: {
                url:'/mmm/callback/toWithdraw'
            }
        }
        res.json(resultValue);
});

/**
 * @fakedoc xtz.得到乾多多平台投资的URL
 *
 * @name mmm.toInvest
 * @href /mmm/toInvest
 * 
 * @input.post {String}    client 				        客户端统计参数（common/client）
 * @input.post {String}    token					    Token
 * @input.post {String}    projectId				    项目Id
 * @input.post {String}    money					    投资金额
 * @input.post {String=}   awardIds				        投资券Ids（多个id用 ","(英文逗号)拼接）
 * @input.post {String=}   interestTicketId				加息券Id
 * @input.post {String}    callbackUrlSucc             投资成功后的跳转地址 （只h5页面对应接口需要传入）
 * @input.post {String}    callbackUrlFail             投资失败后的跳转地址 （只h5页面对应接口需要传入）
 *
 * @output {json} 投资的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *      url:"{String} 乾多多平台投资的URL"
 *  }
 * }
 * 
 * @needAuth
 * 
 * @description
 *
 * 得到乾多多平台投资的URL
 *
 * https://localhost:5000/mmm/toInvest
 * 
 * https://fakeapi.asterlake.cn:5000/mmm/toInvest
 */
router.all('/mmm/toInvest', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
        data: {
            url:'/mmm/callback/toInvest'
        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到乾多多平台提现手续费
 *
 * @name mmm.withdrawFee
 * @href /mmm/withdrawFee
 *
 * @input.post {String}   client 				        客户端统计参数（common/client）
 * @input.post {String}   token					    Token
 * @input.post {String}   money					    提现金额
 *
 * @output {json} 投资的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *      fee:"{Strng} 提现手续费用"
 *      }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * 得到乾多多平台投资的URL
 *
 * https://localhost:5000/mmm/withdrawFee
 *
 * https://fakeapi.asterlake.cn:5000/mmm/withdrawFee
 */
router.all('/mmm/withdrawFee', function (req, res, next) {
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

router.get('/mmm/form/:action', function (req, res, next) {
    switch(req.params.action) {
        case 'toRegister':
            var userNo = 'wechat_fake_user_' + Math.floor(Math.random() * 10000);
            var requestNo = 'wechat_fake_requset_' + Math.floor(Math.random() * 10000);
            var data = {
                platformUserNo: userNo,
                requestNo: requestNo,
                nickName: '',
                realName: req.query.realName,
                idCardType: 'G2_IDCARD',
                idCardNo: req.query.idCardNo,
                mobile: req.query.mobile,
                email: '',
                callbackUrl: 'http://43.254.146.157:8088/mmm/callback/toRegister?parmas='+req.query.realName+'____'+ req.query.mobile+'____'+req.query.idCardNo+'____' + requestNo+'____' + userNo,
                notifyUrl: 'http://www.baidu.com/a/notify/toRegister'//do not need fake notify
            };
            //res.status(200).send('<script type="text/javascript">window.top.postMessage("toRegisterSuccess","*");</script>');
            //res.status(200).send(mmmCreateForm('toRegister', data));
            res.redirect('/mmm/callback/toRegister?parmas=温强____13564335614____511623198707103957____wechat_fake_requset_1231____wechat_fake_user_1242');
            break;
    }
});

router.all('/mmm/callback/:action', function (req, res, next) {
    var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title></title></head><body><h1>I\'m in</h1>'+
    '<script type="text/javascript">window.top.postMessage({event:"'+req.params.action+'Success",params:{}},"*");</script>'
    +'</body></html>';
    res.status(200).send(html);
});

function mmmSign(req){
    var restler = require('restler-when');
    var signUrl = 'http://120.25.122.251:6789/sign/servlet/signService';
    var ret;

    restler.post(signUrl, {
        headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
        data:{command:'sign', req:req, sign:''}
    }).then(function (sign) {
        ret = sign;
    });
    while(undefined === ret) {
        require('deasync').sleep(1);
    }
    return ret;
}

function mmmCreateForm(method, reqData){
    var reqString = '<?xml version="1.0" encoding="UTF-8"?>';
    reqString += '<request platformNo="10012467598">';
    for (x in reqData) {
        reqString += '<' + x + '>' + reqData[x] + '</' + x + '>';
    }
    reqString+='</request>';
    var sign = mmmSign(reqString);
    var action = 'https://member.mmm.com/member/bha/'+method;
    //var action = 'https://member.mmm.com/member/bhawireless/'+method;
    var escapeHTML = (function() {
        var MAP = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&#34;',
            "'": '&#39;'
        };
        var repl = function(c) { return MAP[c]; };
        return function(s) {
            return s.replace(/[&<>'"]/g, repl);
        };
    })();

    return '<html><head><meta charset="UTF-8"><title>页面跳转中</title></head><body>'+
        '页面跳转...'+'<form id="form" action="'+action+ '" method="post" style=""><div>'+
        '<label>req</label><input name="req" type="text" value="'+escapeHTML(reqString)+'" style="width:100%"></input></div>'+
        '<div><label>sign</label><input name="sign" type="text" value="'+escapeHTML(sign)+'" style="width:100%"></input></div>'+
        '<div><button type="submit" id="submit">提交</button></div></form><a type="text/javascript">window.document.getElementById(\'submit\').click()</a> </body></html>';
}

module.exports = router;
