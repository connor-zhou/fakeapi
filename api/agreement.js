var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 定期投资_协议（投资时使用）
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
 * @output {json} 操作结果
 * {
 * 	code:"{int}    状态代码（0表示成功，1表示token无效，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		aCustomerName:"{String} 甲方（出借人）",
 *  	aAccountName:"{String} 甲方（花生金服用户名）",
 *  	aCertNum:"{String} 甲方（身份证号码）",
 *  	aAddress:"{String} 甲方（通讯地址）",
 *  	aMobile:"{String} 甲方（联系电话）",
 *  	bCustomerName:"{String} 乙方（借款人）",
 *  	bAccountName:"{String} 乙方（花生金服用户名）",
 *  	bCertNum:"{String} 乙方（身份证号码）",
 *  	bAddress:"{String} 乙方（通讯地址）",
 *  	bMobile:"{String} 乙方（联系电话）",
 * 		loanAmount:"{String} 借款金额",
 * 		startYear:"{String} 借款期限（起始日期：年）",
 * 		startMonth:"{String} 借款期限（起始日期：月）",
 * 		startDay:"{String} 借款期限（起始日期：日）",
 * 		endYear:"{String} 借款期限（截止日期：年）",
 * 		endMonth:"{String} 借款期限（截止日期：月）",
 * 		endDay:"{String} 借款期限（截止日期：日）",
 * 		rate:"{String} 借款年利率",
 * 		useType:"{String} 借款用途",
 * 		repaymentMode:"{String} 还款方式",
 * 		repayDay:"{String} 还款日",
 * 		safeguardMode:"{String} 担保方式",
 * 		upperLoanAmount:"{String} 借款金额（大写）",
 * 		theYear:"{String} 日期(年)",
 * 		theMonth:"{String} 日期(月)",
 * 		theDay:"{String} 日期(日)"
 *   }
 * }
 */
router.all('/agreement/investment', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		aCustomerName:"甲方（出借人）",
    	  	aAccountName:"甲方（花生金服用户名）",
    	  	aCertNum:"甲方（身份证号码）",
    	  	aAddress:"甲方（通讯地址）",
    	  	aMobile:"甲方（联系电话）",
    	  	bCustomerName:"乙方（借款人）",
    	  	bAccountName:"乙方（花生金服用户名）",
    	  	bCertNum:"乙方（身份证号码）",
    	  	bAddress:"乙方（通讯地址）",
    	  	bMobile:"乙方（联系电话）",
	 		loanAmount:"2000",
	 		startYear:"2005",
	 		startMonth:"12",
	 		startDay:"04",
	 		endYear:"2017",
	 		endMonth:"10",
	 		endDay:"5",
	 		rate:"12",
	 		useType:"借款用途",
	 		repaymentMode:"还款方式",
	 		repayDay:"还款日",
	 		safeguardMode:"担保方式",
	 		upperLoanAmount:"借款金额（大写）",
	 		theYear:"2015",
	 		theMonth:"12",
	 		theDay:"11"
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