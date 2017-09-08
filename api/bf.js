var express = require('express');
var router = express.Router();

/**
 * @fakedoc 得到宝付平台注册新用户的URL
 *
 * @name bf.toRegister
 * @href /bf/toRegister
 *
 * @input.post {string} client 		    客户端统计参数
 * @input.post {string} token 			    Token
 * @input.post {string} realname 		    真实姓名
 * @input.post {string} chinaId 		    身份证号码
 * @input.post {string} callbackUrlSucc   注册成功后的跳转地址（只h5页面对应接口需要传入）
 * @input.post {string} callbackUrlFail   注册失败后的跳转地址（只h5页面对应接口需要传入）
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
 *      url:"{string} 宝付平台注册新用户的URL"
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
               url:'/bf/callback/toRegister'
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
 * @input.post {string} token 			     Token
 * @input.post {string} money 		         充值金额
 * @input.post {string} callbackUrlSucc    充值成功后的跳转地址 （只h5页面对应接口需要传入）
 * @input.post {string} callbackUrlFail    充值失败后的跳转地址 （只h5页面对应接口需要传入）
 *
 * @description
 *
 * 得到宝付平台充值的URL
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
 *      url:"{string} 宝付平台充值的URL"
 *   }
 * }
 */
router.all('/bf/toRecharge', function (req, res, next) {
        var money = req.query.money ? req.money :req.body.money;
        var resultValue = {
        	code: 0,
        	text: 'ok',
            data: {
                url:'/bf/callback/toRecharge'
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
 * @input.post {string} client 		     客户端统计参数
 * @input.post {string} token 			     Token
 * @input.post {string} money 		         提现金额
 * @input.post {string} cardNo             提现银行卡号
 * @input.post {string} callbackUrlSucc    提现成功后的跳转地址 （只h5页面对应接口需要传入）
 * @input.post {string} callbackUrlFail    提现失败后的跳转地址 （只h5页面对应接口需要传入）
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
 *      url: "{string} 宝付平台提现的URL"
 *  }
 *
 * }
 */
router.all('/bf/toWithdraw', function (req, res, next) {
        var money = req.query.money ? req.query.money :req.body.money;
        var cardNo = req.query.cardNo ? req.query.cardNo :req.body.cardNo;
        var resultValue = {
        	code: 0,
        	text: 'ok',
            data: {
                url:'/bf/callback/toWithdraw'
            }
        }
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
 * @input.post {string=}   cashTicketIds				    投资券Ids（多个id用 ","(英文逗号)拼接）
 * @input.post {string=}   rateTicketId			加息券Id
 * @input.post {string}    callbackUrlSucc             投资成功后的跳转地址 （只h5页面对应接口需要传入）
 * @input.post {string}    callbackUrlFail             投资失败后的跳转地址 （只h5页面对应接口需要传入）
 *
 * @output {json} 投资的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      url:"{string} 宝付平台投资的URL"
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
            url:'/bf/callback/toInvest'
        }
    }
    res.json(resultValue);
});

/**
 * @fakedoc 得到宝付平台提现手续费
 *
 * @name bf.withdrawFee
 * @href /bf/withdrawFee
 *
 * @input.post {string}   client 				    客户端统计参数
 * @input.post {string}   token					    Token
 * @input.post {string}   money					    提现金额
 *
 * @output {json} 投资的URL
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      fee:"{Strng} 提现手续费用"
 *      }
 * }
 *
 * @needAuth
 *
 * @description
 *
 * 得到宝付平台投资的URL
 *
 * https://localhost:5000/bf/withdrawFee
 *
 * https://192.168.1.86:3000/bf/withdrawFee
 */
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

router.get('/bf/form/:action', function (req, res, next) {
    switch(req.params.action) {
        case 'toRegister':
            var userNo = 'wechat_fake_user_' + Math.floor(Math.random() * 10000);
            var requestNo = 'wechat_fake_requset_' + Math.floor(Math.random() * 10000);
            var data = {
                platformUserNo: userNo,
                requestNo: requestNo,
                nickName: '',
                realname: req.query.realname,
                idCardType: 'G2_IDCARD',
                idCardNo: req.query.idCardNo,
                mobile: req.query.mobile,
                email: '',
                callbackUrl: 'http://43.254.146.157:8088/bf/callback/toRegister?parmas='+req.query.realname+'____'+ req.query.mobile+'____'+req.query.idCardNo+'____' + requestNo+'____' + userNo,
                notifyUrl: 'http://www.baidu.com/a/notify/toRegister'//do not need fake notify
            };
            //res.status(200).send('<script type="text/javascript">window.top.postMessage("toRegisterSuccess","*");</script>');
            //res.status(200).send(bfCreateForm('toRegister', data));
            res.redirect('/bf/callback/toRegister?parmas=温强____13564335614____511623198707103957____wechat_fake_requset_1231____wechat_fake_user_1242');
            break;
    }
});

router.all('/bf/callback/:action', function (req, res, next) {
    var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title></title></head><body><h1>I\'m in</h1>'+
    '<script type="text/javascript">window.top.postMessage({event:"'+req.params.action+'Success",params:{}},"*");</script>'
    +'</body></html>';
    res.status(200).send(html);
});

function bfSign(req){
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

function bfCreateForm(method, reqData){
    var reqstring = '<?xml version="1.0" encoding="UTF-8"?>';
    reqstring += '<request platformNo="10012467598">';
    for (x in reqData) {
        reqstring += '<' + x + '>' + reqData[x] + '</' + x + '>';
    }
    reqstring+='</request>';
    var sign = bfSign(reqstring);
    var action = 'https://member.bf.com/member/bha/'+method;
    //var action = 'https://member.bf.com/member/bhawireless/'+method;
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
        '<label>req</label><input name="req" type="text" value="'+escapeHTML(reqstring)+'" style="width:100%"></input></div>'+
        '<div><label>sign</label><input name="sign" type="text" value="'+escapeHTML(sign)+'" style="width:100%"></input></div>'+
        '<div><button type="submit" id="submit">提交</button></div></form><a type="text/javascript">window.document.getElementById(\'submit\').click()</a> </body></html>';
}

module.exports = router;
