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
 * @name wechat.getWechatVersion
 * @href /wechat/getWechatVersion
 *
 * @description
 *
 * http://localhost:3000/wechat/getWechatVersion
 *
 * https://fakeapi.fdjf.net:3000/wechat/getWechatVersion
 *
 * 使用方式：
 *
 * 1. App调微信端，得到微信版花生金服的版本号
 *
 * 2. App调微信端url时，带上微信版花生金服的版本号，如：http://www.xxxxx.com?v=1.1.1.0
 *
 * 3. 微信端GET参数说明参见 http://code.fdjf.net/git/wenqiang/wechat/blob/master/README.md#全局参数列表
 *
 * 4. 正式环境的地址是 http://m.hsbank360.com/info.json
 *
 * 5. 测试环境的地址是 http://fakeapi.fdjf.net/info.json
 *
 * 设计目的：
 *
 * 当微版微信版花生金服的版本升级时，app请求的url会自动更新到新版，而不是取本地缓存
 */
router.all('/wechat/getWechatVersion', function (req, res, next) {
    res.json({
        code:0,
        text:'ok',
        data:{
            version: '1.1.2.0'
        }
    });
});

/**
 * @fakedoc （微信端-->APP）得到花生金服APP的版本号
 *
 * @name wechat.getAppVersion
 * @ios.since 1.2.0
 * @android.since 1.3.0.0
 *
 * @output {string} '1.1.1.0' 返回APP版本号
 *
 * @description
 *
 * 设计目的：
 *
 * 不同的APP版本曝光出来的js函数会有区别，微信端需要加以区别
 *
 * 在微信页面端可以按如下方式调用
 *
 *@example
 * ```
 *      <script>
 *          alert(window.hsbank.getAppVersion());
 *      </script>
 * ```
 */

/**
 * @fakedoc （微信端-->App）活动分享
 * 
 * @name wechat.activityShare
 * @ios.since 1.2.0
 * @android.since 1.3.0.0
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
 * `<a href="#" onclick="window.hsbank.activityShare('邀请好友','邀请的好友可获得现金2.88元/人', 'http://xxxx/activity?id=200', 'http://xxxx/image.jpg');" class="btn-mt btn-zc">活动分享</a>`
 */

/**
 * @fakedoc （微信端-->App）立即投资（已过期，改调 'wechat.invest'接口）
 * 
 * @name wechat.investProject
 * @ios.deprecated 1.2.0
 * @android.deprecated 1.3.0.0
 * @ios.since 1.0.0
 * @android.since 1.0.0.0
 * @ios.delete 1.5.0
 * @android.delete 1.5.0.0
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * `<a href="#" onclick="window.hsbank.investProject();" class="btn-mt btn-zc">立即投资</a>`
 */

/**
 * @fakedoc （微信端-->App）立即投资
 * 
 * @name wechat.invest
 * @ios.since 1.2.0
 * @android.since 1.3.0.0
 * 
 * @input.post {string} projectId 项目Id（为空时，跳转到项目列表，否则跳转指定项目的详情页）
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * `<a href="#" onclick="window.hsbank.invest('');" class="btn-mt btn-zc">立即投资</a>`
 */

/**
 * @fakedoc （微信端-->App）用户是否已登录（已过期，改调 'wechat.hasLogin'接口）
 * 
 * @name wechat.userIsHasLogin
 * @ios.deprecated 1.2.0
 * @android.deprecated 1.3.0.0
 * @ios.since 1.0.0
 * @android.since 1.0.0.0
 * @ios.delete 1.5.0
 * @android.delete 1.5.0.0
 * 
 * @output	{String} 未登录，返回""；已登录，返回token
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * `<a href="#" onclick="window.hsbank.userIsHasLogin();" class="btn-mt btn-zc">用户是否已登录</a>`
 */

/**
 * @fakedoc （微信端-->App）用户是否已登录（已过期，改调 'wechat.hasLogin'接口）
 * 
 * @name wechat.hasLogin
 * @ios.deprecated 1.2.0
 * @android.deprecated 1.3.0.0
 * @ios.since 1.0.0
 * @android.since 1.0.0.0
 * @ios.delete 1.5.0
 * @android.delete 1.5.0.0
 * 
 * @output	{String} 未登录，返回""；已登录，返回token
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * `<a href="#" onclick="window.hsbank.hasLogin();" class="btn-mt btn-zc">用户是否已登录</a>`
 */

/**
 * @fakedoc （微信端-->App）跳转到App首页（已过期，改调 'wechat.gotoView'接口）
 * 
 * @name wechat.toAppHome
 * @ios.deprecated 1.2.0
 * @android.deprecated 1.3.0.0
 * @ios.since 1.0.0
 * @android.since 1.0.0.0
 * @ios.delete 1.5.0
 * @android.delete 1.5.0.0
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * `<a href="#" onclick="window.hsbank.toAppHome();" class="btn-mt btn-zc">跳转到App首页</a>`
 */

/**
 * @fakedoc （微信端-->App）跳转到App登录页（已过期，改调 'wechat.gotoView'接口）
 * 
 * @name wechat.toLoginVC
 * @ios.deprecated 1.2.0
 * @android.deprecated 1.3.0.0
 * @ios.since 1.0.0
 * @android.since 1.0.0.0
 * @ios.delete 1.5.0
 * @android.delete 1.5.0.0
 * 
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * `<a href="#" onclick="window.hsbank.toLoginVC();" class="btn-mt btn-zc">跳转到App登录页</a>`
 */

/**
 * @fakedoc （微信端-->App）跳转到App指定页
 * 
 * @name wechat.gotoView
 * @ios.since 1.2.0
 * @android.since 1.3.0.0
 * 
 * @input.post {string} pageId 页面Id，如首页(home)、登录页(login)、帮助中心(help)。App和微信端商量确定，系统内唯一即可。
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * `<a href="#" onclick="window.hsbank.gotoView('more');" class="btn-mt btn-zc">跳转到App登录页</a>`
 */

/**
 * @fakedoc （微信端-->App）返回到App页面
 * 
 * @name wechat.popupView
 * @ios.since 1.2.0
 * @android.since 1.3.0.0
 *
 * @description
 * 
 * 使用方式：
 * 
 * 在微信页面端可以按如下方式调用
 * 
 * `<a href="#" onclick="window.hsbank.popupView();" class="btn-mt btn-zc">返回到App页面</a>`
 * 
 * 具体返回的页面，有：帮助中心、安全保障。
 */

module.exports = router;