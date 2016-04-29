var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc xtz.借款协议（投资时使用）
 *
 * @name agreement.investment
 * @href /agreement/investment
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {String} projectId	 			项目Id
 * @input.post {String} money	 			    投资金额
 *
 * @description
 * 
 * https://localhost:5000/agreement/investment
 * 
 * https://fakeapi.asterlake.cn:5000/agreement/investment
 *
 *html输出格式：
 <pre>
		 甲方（出借人）:张三
		 星投资用户名（甲方）:xingtouzi
		 身份证号码（甲方）:62275968612151245
		 电话（甲方）:15623561235
		 通讯地址:上海市浦东新区达尔文路88号
		 乙方(借款人):李四
  		 星投资用户名(乙方):lisi
		 身份证号码（乙方）:62275968454545454
		 电话（乙方）:15623556897
		 通讯地址(乙方):上海市浦东新区金海路
		 借款金额:5000000
		 借款金额大写:伍佰万元整
		 借款时间:2015-12-5
		 还款时间;2018-12-5
		 借款期限:3年
		 借款年利率:3
		 担保方式:星投资担保
 </pre>
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		html:"{string} 投资协议html"
 *   }
 * }
*/
 router.all('/agreement/investment', function (req, res, next) {
 	 var resultValue = {
   		code: 0,
    	text: 'ok',
   		data: {
   			html:'<p>甲方（出借人）:张三</p><p>星投资用户名:xingtouzi</p><p>身份证号码（甲方）:62275968612151245</p><p>电话（甲方）:15623561235</p><p>通讯地址:上海市浦东新区达尔文路88号</p><p>乙方(借款人):李四</p><p>星投资用户名:lisi</p><p>身份证号码（乙方）:62275968454545454</p><p>电话（乙方）:15623556897</p><p>通讯地址（乙方）:上海市浦东新区金海路</p><p>借款金额:5000000</p><p>借款金额大写:伍佰万元整</p> <p>借款时间:2015-12-5</p> <p>还款时间;2018-12-5</p> <p>借款期限:3年</p> <p>借款年利率:3</p> <p> 担保方式:星投资担保</p>'
    	}
    }
   res.json(resultValue);
});

/**
 * @fakedoc xtz.注册协议（注册时使用）
 *
 * @name agreement.register
 * @href /agreement/register
 *
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 *
 * @description
 *
 * https://localhost:5000/agreement/register
 *
 * https://fakeapi.asterlake.cn:5000/agreement/register
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
			html:"{String} 注册协议html"
 *   }
 * }
 */
router.all('/agreement/register', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			html:'<p>甲方（出借人）:张三</p><p>星投资用户名:xingtouzi</p><p>身份证号码（甲方）:62275968612151245</p><p>电话（甲方）:15623561235</p><p>通讯地址:上海市浦东新区达尔文路88号</p><p>乙方(借款人):李四</p><p>星投资用户名:lisi</p><p>身份证号码（乙方）:62275968454545454</p><p>电话（乙方）:15623556897</p><p>通讯地址（乙方）:上海市浦东新区金海路</p><p>借款金额:5000000</p><p>借款金额大写:伍佰万元整</p> <p>借款时间:2015-12-5</p> <p>还款时间;2018-12-5</p> <p>借款期限:3年</p> <p>借款年利率:3</p> <p> 担保方式:星投资担保</p>'
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.用户协议（登陆或者注册前使用）
 *
 * @name agreement.user
 * @href /agreement/user
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 *
 * @description
 * 
 * https://localhost:5000/agreement/user
 * 
 * https://fakeapi.asterlake.cn:5000/agreement/user
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	html:"{String} 用户协议html"
 *   }
 * }
 */
router.all('/agreement/user', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
			html:'<p>甲方（出借人）:张三</p><p>星投资用户名:xingtouzi</p><p>身份证号码（甲方）:62275968612151245</p><p>电话（甲方）:15623561235</p><p>通讯地址:上海市浦东新区达尔文路88号</p><p>乙方(借款人):李四</p><p>星投资用户名:lisi</p><p>身份证号码（乙方）:62275968454545454</p><p>电话（乙方）:15623556897</p><p>通讯地址（乙方）:上海市浦东新区金海路</p><p>借款金额:5000000</p><p>借款金额大写:伍佰万元整</p> <p>借款时间:2015-12-5</p> <p>还款时间;2018-12-5</p> <p>借款期限:3年</p> <p>借款年利率:3</p> <p> 担保方式:星投资担保</p>'
		}
    }
    res.json(resultValue);
});

module.exports = router;