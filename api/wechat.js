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
 * 微信中使用
 * 获取微信js sdk的签名 具体文档参见 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
 *
 * http://localhost:5000/wechat/jsSignature
 *
 * https://192.168.1.86:3000/wechat/jsSignature
 *
 * @output {json} 微信js SDK签名字符串
 * {
 *  code:"{int}    状态代码（0表示成功，69633表示token无效，其它值表示失败）",
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