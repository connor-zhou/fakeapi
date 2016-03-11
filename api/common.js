var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 客户端统计参数
 * 
 * @name common.client
 * @href /common/client
 *
 * @description
 * 
 * 使用方式：http://www.xxxxx.com?client=Base64.encode(json)
 * 
 * <pre>
 *{
 *	android:{						//Android参数
 *		channel:"",					//发布渠道
 *		md5:"",						//apk签名的md5值
 *		deviceModel:"",				//设备型号
 *		deviceNumber:"",			//设备号码
 *		platformVersion:"",			//操作系统的版本，如：Android 4.3
 *		sdkVersion:""				//SDK的版本，如：19
 *	},
 *	ios:{							//IOS参数
 *		deviceModel:"",				//设备型号，如：iPhone4、iphone6s
 *		systemVersion:""			//操作系统版本，如：9.0.1
 *	},
 *	language:"",					//语言
 *	type:"",           				//类型：website、wechat、android、ios
 *	version:"",						//版本
 *	website:{},						//网站参数
 *	wechat:{}						//微信参数
 *}
 * </pre>
 */
 
/**
 * @fakedoc xtz.手机号码是否正确
 *
 * @name common.isMobile
 * @href /common/isMobile
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} mobile 		手机号码
 *
 * @description
 * 
 * https://localhost:3000/common/isMobile?client=asdfaqerq1werqwe&mobile
 * 
 * https://fakeapi.fdjf.net:3000/common/isMobile?client=asdfaqerq1werqwe&mobile
 *
 * @output {json} 手机号码是否正确
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 * 
 *
 */
router.all('/common/isMobile', function (req, res, next) {
	var phone = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13577778888');
    var resultValue = {
    	code: phone == '13577778888' ? 0 : 1,
    	text: 'ok',
    }
    res.json(resultValue);
});

module.exports = router;