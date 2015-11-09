var express = require('express');
var router = express.Router();

/**
 * @fakedoc 微信js SDK签名字符串
 *
 * @name wechat.jsSignature
 * @href /wechat/jsSignature
 *
 * @input.post {string} url 签名的url
 *
 * @description
 * 获取微信js sdk的签名 具体文档参见 http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html#.E9.99.84.E5.BD.951-JS-SDK.E4.BD.BF.E7.94.A8.E6.9D.83.E9.99.90.E7.AD.BE.E5.90.8D.E7.AE.97.E6.B3.95
 *
 * http://localhost:3000/wechat/jsSignature?token=asdfaqerq1werqwe
 *
 * https://fakeapi.fdjf.net:3000/wechat/jsSignature?token=asdfaqerq1werqwe
 *
 * @output {json} 微信js SDK签名字符串
 * {
 *  code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *          appId: '{string} appid',
 *          timestamp: '{string} timestamp',
 *          nonceStr: '{string} nonceStr',
 *          signature: '{string} signature'
 *      }
 * }
 */
router.all('/wechat/jsSignature', function (req, res, next) {
    res.json({
        code:0,
        text:'签名成功',
        data:{
            appId: 'appId',
            timestamp: 'timestamp',
            nonceStr: 'nonceStr',
            signature: 'signature'
        }
    });
});

module.exports = router;