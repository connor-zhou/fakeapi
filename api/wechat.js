var express = require('express');
var router = express.Router();

/**
 * @fakedoc （微信中使用）微信js SDK签名字符串
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

/**
 * @fakedoc （App-->微信端）得到微信版花生金服的版本号，用于app请求微信端页面时使用
 * 
 * @name wechat.getVersion
 * @href /wechat/getVersion
 *
 * @description
 * 
 * 使用方式：
 * 
 * 1. App调微信端，得到微信版花生金服的版本号
 * 
 * 2. App调微信端url时，带上微信版花生金服的版本号，如：http://www.xxxxx.com?v=1.1.1.0
 * 
 * 设计目的：
 * 
 * 当微版微信版花生金服的版本升级时，app请求的url会自动更新到新版，而不是取本地缓存
 */

/**
 * @fakedoc （微信端-->App）活动分享
 * 
 * @name wechat.activityShare
 * 
 * @input.post {string} title 活动名称
 * @input.post {string} desc  活动描述
 * @input.post {string} link 	分享链接
 * @input.post {string} imgUrl 活动配图
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * <a href="#" onclick="window.hsbank.activityShare('邀请好友','邀请的好友可获得现金2.88元/人', 'http://xxxx/activity?id=200', 'http://xxxx/image.jpg');" class="btn-mt btn-zc">活动分享</a>
 */

/**
 * @fakedoc （微信端-->App）立即投资（已过期，改调 'window.hsbank.invest'接口）
 * 
 * @name window.hsbank.investProject
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * <a href="#" onclick="window.hsbank.investProject();" class="btn-mt btn-zc">立即投资</a>
 */

/**
 * @fakedoc （微信端-->App）立即投资
 * 
 * @name window.hsbank.invest
 * 
 * @input.post {string} projectId 项目Id（为空时，跳转到项目列表，否则跳转指定项目的详情页）
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * <a href="#" onclick="window.hsbank.invest('');" class="btn-mt btn-zc">立即投资</a>
 */

/**
 * @fakedoc （微信端-->App）用户是否已登录（已过期，改调 'window.hsbank.hasLogin'接口）
 * 
 * @name window.hsbank.userIsHasLogin
 * 
 * @output	{String} 未登录，返回""；已登录，返回token
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * <a href="#" onclick="window.hsbank.userIsHasLogin();" class="btn-mt btn-zc">用户是否已登录</a>
 */

/**
 * @fakedoc （微信端-->App）用户是否已登录（已过期，改调 'window.hsbank.hasLogin'接口）
 * 
 * @name window.hsbank.hasLogin
 * 
 * @output	{String} 未登录，返回""；已登录，返回token
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * <a href="#" onclick="window.hsbank.hasLogin();" class="btn-mt btn-zc">用户是否已登录</a>
 */

/**
 * @fakedoc （微信端-->App）跳转到App首页（已过期，改调 'window.hsbank.gotoView'接口）
 * 
 * @name window.hsbank.toAppHome
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * <a href="#" onclick="window.hsbank.toAppHome();" class="btn-mt btn-zc">跳转到App首页</a>
 */

/**
 * @fakedoc （微信端-->App）跳转到App登录页（已过期，改调 'window.hsbank.gotoView'接口）
 * 
 * @name window.hsbank.toLoginVC
 * 
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * <a href="#" onclick="window.hsbank.toLoginVC();" class="btn-mt btn-zc">跳转到App登录页</a>
 */

/**
 * @fakedoc （微信端-->App）跳转到App指定页
 * 
 * @name window.hsbank.gotoView
 * 
 * @input.post {string} pageId 页面Id，如首页(home)、登录页(login)、帮助中心(help)。App和微信端商量确定，系统内唯一即可。
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * <a href="#" onclick="window.hsbank.gotoView('more');" class="btn-mt btn-zc">跳转到App登录页</a>
 */

module.exports = router;