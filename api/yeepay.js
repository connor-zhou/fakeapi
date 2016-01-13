var express = require('express');
var router = express.Router();

/**
 * @fakedoc 得到易宝平台注册新用户的URL
 *
 * @name yeepay.toRegister
 * @href /yeepay/toRegister
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} realName 		真实姓名
 * @input.post {string} idCardNo 		身份证号码
 * @input.post {string} mobile 		手机号码
 *
 * @description
 * 得到易宝平台注册新用户的URL，然后在WebView中调用这个URL，成功后再调用“我的”接口
 * 
 * https://localhost:3000/yeepay/toRegister?client=asdfaqerq1werqwe&token=134252345234&realName=温强&idCardNo=1225234523451&mobile=13564335614
 * 
 * https://fakeapi.fdjf.net:3000/yeepay/toRegister?client=asdfaqerq1werqwe&token=134252345234&realName=温强&idCardNo=1225234523451&mobile=13564335614
 *
 * @output {json} 易宝平台注册新用户的URL
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{string} 易宝平台注册新用户的URL"
 * }
 */
router.all('/yeepay/toRegister', function (req, res, next) {
        var realName, idCardNo, url, mobile;
        realName = req.query.realName ? req.query.realName :req.body.realName;
        idCardNo = req.query.idCardNo ? req.query.idCardNo :req.body.idCardNo;
        mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13564335614');
        var resultValue = {
        	code: 0,
        	text: 'ok',
        	data: '/yeepay/callback/toRegister'
        }
        res.json(resultValue);
});

/**
 * @fakedoc 得到易宝平台绑定银行卡的URL
 *
 * @name yeepay.toBindBankCard
 * @href /yeepay/toBindBankCard
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 *
 * @description
 *
 * 得到易宝平台绑定银行卡的URL，然后在WebView中调用这个URL，成功后再调用“我的”接口
 * 
 * https://localhost:3000/yeepay/toBindBankCard?client=asdfaqerq1werqwe&token=134252345234
 * 
 * https://fakeapi.fdjf.net:3000/yeepay/toBindBankCard?client=asdfaqerq1werqwe&token=134252345234
 *
 * @output {json} 绑定银行卡的URL
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{string} 易宝平台绑定银行卡的URL"
 * }
 */
router.all('/yeepay/toBindBankCard', function (req, res, next) {
        var realName, idCardNo, url, mobile;
        realName = req.query.realName ? req.query.realName :req.body.realName;
        idCardNo = req.query.idCardNo ? req.query.idCardNo :req.body.idCardNo;
        mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13564335614');
        var resultValue = {
        	code: 0,
        	text: 'ok',
        	data: '/yeepay/callback/toBindBankCard'
        }
        res.json(resultValue);
});

/**
 * @fakedoc 得到易宝平台充值的URL
 *
 * @name yeepay.toRecharge
 * @href /yeepay/toRecharge
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} amount 		充值金额
 *
 * @description
 *
 * 得到易宝平台充值的URL，然后在WebView中调用这个URL，成功后再调用“我的”接口
 * 
 * https://localhost:3000/yeepay/toRecharge?client=asdfaqerq1werqwe&token=134252345234&amount=1000
 * 
 * https://fakeapi.fdjf.net:3000/yeepay/toRecharge?client=asdfaqerq1werqwe&token=134252345234&amount=1000
 *
 * @output {json} 充值的URL
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{string} 易宝平台充值的URL"
 * }
 */
router.all('/yeepay/toRecharge', function (req, res, next) {
        var realName, idCardNo, url, mobile;
        realName = req.query.realName ? req.query.realName :req.body.realName;
        idCardNo = req.query.idCardNo ? req.query.idCardNo :req.body.idCardNo;
        mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13564335614');
        var resultValue = {
        	code: 0,
        	text: 'ok',
        	data: '/yeepay/callback/toRecharge'
        }
        res.json(resultValue);
});

/**
 * @fakedoc 得到易宝平台提现的URL
 *
 * @name yeepay.toWithdraw
 * @href /yeepay/toWithdraw
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 			Token
 * @input.post {string} amount 		提现金额
 * @input.post {String} useTicket		是否用提现券（true 是，false 否）"
 *
 * @description
 *
 * 得到易宝平台提现的URL，然后在WebView中调用这个URL，成功后再调用“我的”接口
 * 
 * https://localhost:3000/yeepay/toWithdraw?client=asdfaqerq1werqwe&token=134252345234&amout=1000&useTicket=true
 * 
 * https://fakeapi.fdjf.net:3000/yeepay/toWithdraw?client=asdfaqerq1werqwe&token=134252345234&amout=1000&useTicket=true
 *
 * @output {json} 提现的URL
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{string} 易宝平台提现的URL"
 * }
 */
router.all('/yeepay/toWithdraw', function (req, res, next) {
        var realName, idCardNo, url, mobile;
        realName = req.query.realName ? req.query.realName :req.body.realName;
        idCardNo = req.query.idCardNo ? req.query.idCardNo :req.body.idCardNo;
        mobile = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13564335614');
        var resultValue = {
        	code: 0,
        	text: 'ok',
        	data: '/yeepay/callback/toWithdraw'
        }
        res.json(resultValue);
});

/**
 * @fakedoc 得到易宝平台投资的URL
 *
 * @name yeepay.toInvest
 * @href /yeepay/toInvest
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token					Token
 * @input.post {string} projectId				项目Id
 * @input.post {string} transferProjectId		转让编号
 * @input.post {string} amount					投资金额
 * @input.post {string} ticketIds				优惠券Ids
 * @input.post {string} ticketAmount			优惠券金额
 * @input.post {string} platformAmount			平台垫付金额
 * @input.post {string} type					直投（"1"）、债权转让（"2"）
 * 
 * @input.post {string} token					Token
 * 
 * @output {json} 投资的URL
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{string} 易宝平台投资的URL"
 * }
 * 
 * @needAuth
 * 
 * @description
 *
 * 得到易宝平台投资(直投或债权转让)的URL，然后在WebView中调用这个URL，成功后再调用“我的”接口
 *
 * https://localhost:3000/yeepay/toInvest?client=asdfaqerq1werqwe&token=2435135345623413&projectId=1&transferProjectId=2&amount=1000&ticketIds=1,2&ticketAmount=20&platformAmount=0&type=1
 * 
 * https://fakeapi.fdjf.net:3000/yeepay/toInvest?client=asdfaqerq1werqwe&token=2435135345623413&projectId=1&transferProjectId=2&amount=1000&ticketIds=1,2&ticketAmount=20&platformAmount=0&type=1
 */
router.all('/yeepay/toInvest', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: '/yeepay/callback/toInvest'
    }
    res.json(resultValue);
});

/**
 * @fakedoc 得到易宝平台活期投资的URL
 *
 * @name yeepay.toCurrentInvest
 * @href /yeepay/toCurrentInvest
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token					Token
 * @input.post {string} projectId				项目Id
 * @input.post {string} amount					投资金额
 * 
 * @output {json} 活期投资的URL
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:"{string} 易宝平台提现的活期投资URL"
 * }
 * 
 * @needAuth
 * 
 * @description
 *
 * 得到易宝平台活期投资的URL，然后在WebView中调用这个URL，成功后再调用“我的”接口
 *
 * https://localhost:3000/yeepay/toCurrentInvest?client=asdfaqerq1werqwe&token=2435135345623413&projectId=1&amount=1000
 * 
 * https://fakeapi.fdjf.net:3000/yeepay/toCurrentInvest?client=asdfaqerq1werqwe&token=2435135345623413&projectId=1&amount=1000
 */
router.all('/yeepay/toCurrentInvest', function (req, res, next) {
	var code = 0;
	var text = "ok";
	var resultValue = {
    	code: code,
    	text: text,
    	data: '/yeepay/callback/toCurrentInvest'
    }
    res.json(resultValue);
});

router.get('/yeepay/form/:action', function (req, res, next) {
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
                callbackUrl: 'http://43.254.146.157:8088/yeepay/callback/toRegister?parmas='+req.query.realName+'____'+ req.query.mobile+'____'+req.query.idCardNo+'____' + requestNo+'____' + userNo,
                notifyUrl: 'http://www.baidu.com/a/notify/toRegister'//do not need fake notify
            };
            //res.status(200).send('<script type="text/javascript">window.top.postMessage("toRegisterSuccess","*");</script>');
            //res.status(200).send(yeepayCreateForm('toRegister', data));
            res.redirect('/yeepay/callback/toRegister?parmas=温强____13564335614____511623198707103957____wechat_fake_requset_1231____wechat_fake_user_1242');
            break;
    }
});

router.all('/yeepay/callback/:action', function (req, res, next) {
    var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title></title></head><body><h1>I\'m in</h1>'+
    '<script type="text/javascript">window.top.postMessage({event:"'+req.params.action+'Success",params:{}},"*");</script>'
    +'</body></html>';
    res.status(200).send(html);
});

function yeepaySign(req){
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

function yeepayCreateForm(method, reqData){
    var reqString = '<?xml version="1.0" encoding="UTF-8"?>';
    reqString += '<request platformNo="10012467598">';
    for (x in reqData) {
        reqString += '<' + x + '>' + reqData[x] + '</' + x + '>';
    }
    reqString+='</request>';
    var sign = yeepaySign(reqString);
    var action = 'https://member.yeepay.com/member/bha/'+method;
    //var action = 'https://member.yeepay.com/member/bhawireless/'+method;
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
