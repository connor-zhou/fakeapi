var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc xtz.定期投资_协议（投资时使用）
 *
 * @name agreement.investment
 * @href /agreement/investment
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {String} projectId	 			项目Id
 * @input.post {String} amount		 			投资金额
 *
 * @description
 * 
 * https://localhost:3000/agreement/investment?client=asdfaqerq1werqwe&token=adfasdf234&projectId=22&amount=10000
 * 
 * https://fakeapi.fdjf.net:3000/agreement/investment?client=asdfaqerq1werqwe&token=adfasdf234&projectId=22&amount=10000
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
 * @fakedoc 活期投资_协议（投资时使用）
 *
 * @name agreement.current
 * @href /agreement/current
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token 					Token
 * @input.post {String} projectId	 			项目Id
 *
 * @description
 * 
 * https://localhost:3000/agreement/current?client=asdfaqerq1werqwe&token=adfasdf234&projectId=22
 * 
 * https://fakeapi.fdjf.net:3000/agreement/current?client=asdfaqerq1werqwe&token=adfasdf234&projectId=22
 *
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		aCustomerName:"{String} 甲方（出借人）",
 *  	aAddress:"{String} 甲方（通讯地址）",
 *  	bCustomerName:"{String} 乙方（借款人）",
 *  	bAccountName:"{String} 乙方（花生金服用户名）"
 *   }
 * }
 */
router.all('/agreement/current', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		aCustomerName:"甲方（出借人）",
    	  	aAddress:"甲方（通讯地址）",
    	  	bCustomerName:"乙方（借款人）",
    	  	bAccountName:"乙方（花生金服用户名）"
    	}
    }
    res.json(resultValue);
});

module.exports = router;