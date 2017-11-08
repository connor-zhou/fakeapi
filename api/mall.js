var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 可兑换优惠券列表
 *
 * @name mall.couponPageList
 * @href /mall/coupon/pageList
 *
 * @input.post {string}  client 		客户端统计参数
 * @input.post {int=}   [pageNumber=1]	页码
 * @input.post {int=}   [pageSize=10]	页量
 *
 * @description
 *
 * https://localhost:5000/mall/coupon/pageList
 *
 * https://192.168.1.86:3000/mall/coupon/pageList
 *
 * @output {json} 优惠券列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  count:"{int} 总条目数",
 *  recordList:[
 * 	  {
 * 	  	id:"{string} 优惠券id",
 *  	value:"{string} 优惠券面值（例：加息券加息 0.5% 只返回 0.5）",
 *  	type:"{int} 优惠券类型（0-现金券，1-加息券，2-提现券）",
 *  	typeText:"{string} 优惠券类型描述",
 *  	money:"{string=} 优惠券使用时投资额度限制（例：加息券表示加息上限金额，现金券表示需满足的投资额度。type == 2 时不返回）"
 *     }
 * 	]}
 *}
 *
 */
router.all('/mall/coupon/pageList', function (req, res, next) {
    var events = [],random;
    _.forEach([2,3,4,5,6,8], function (i) {
		random = Math.floor(Math.random*10);
    	events.push({
			id:random,
            value:0.5,
            type: 0,
            typeText: '现金券',
            money:'1000'
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		count:6,
			recordList:events
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 用户星币兑换记录
 *
 * @name mall.integralExchangeRecords
 * @href /mall/integral/exchangeRecords
 *
 * @input.post {string} client 		客户端统计参数
 * @input.post {int=}   [pageNumber=1]	页码
 * @input.post {int=}   [pageSize=10]	页量
 *
 * @description
 *
 * https://localhost:5000/mall/integral/exchangeRecords
 *
 * https://192.168.1.86:3000/mall/integral/exchangeRecords
 *
 * @output {json} 星币兑换记录
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	count:"{int} 总条目数",
 *  	recordList:[{
 * 			id:"{string} 	记录id",
 * 			type:"{int} 	优惠券类型（0-现金券，1-加息券，2-提现券）",
 *  		typeText:"{string} 	优惠券类型描述",
 *  		name:"{String} 		参与用户（用户掩码手机号。例：188****2211）",
 *  		value:"{string} 	优惠券面值（例：加息券加息 0.5% 只返回 0.5)",
 *  		count:"{string} 	使用张数",
 *  		profile:"{string}   能代表此券的缩略图地址"
 *    	}]
 *    }
 * }
 *
 */
router.all('/mall/integral/exchangeRecords', function (req, res, next) {
    var events = [],random;
    _.forEach([2,3,4,5,6,8], function (i) {
        random = Math.floor(Math.random*10);
        events.push({
            id:random,
            value:0.5,
            type: 0,
            typeText: '现金券',
            name:'132****2587',
			count:'23',
			profile:''
        });
    });
    var resultValue = {
        code: 0,
        text: 'ok',
        data: {
            count:6,
            recordList:events
        }
    };
    res.json(resultValue);
});

/**
 * @fakedoc 我的星币兑换记录
 *
 * @name mall.integralMyExchangeRecords
 * @href /mall/integral/myExchangeRecords
 *
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {int=}   [pageNumber=1]	页码
 * @input.post {int=}   [pageSize=10]	页量
 * @input.post {int}    period			记录时间间隔（0-所有时间段，1-近一个月，2-近三个月）
 *
 * @description
 *
 * https://localhost:5000/mall/integral/myExchangeRecords
 *
 * https://192.168.1.86:3000/mall/integral/myExchangeRecords
 *
 * @output {json} 我的星币兑换记录
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	count:"{int} 总条目数",
 *  	recordList:[{
 * 			id:"{string} 	记录id",
 * 			title:"{int} 	记录文字描述（例：10元 提现券）",
 *  		price:"{string}  兑换时的星币单价",
 *  		totalPrice:"{String} 兑换时的星币总价",
 *  		timeline:"{string} 	下单时间",
 *  		count:"{string} 	兑换券的数量",
 *  		no:"{string}   订单编号",
 *  		statusText:"{string}   订单状态"
 *    	}]
 *    }
 * }
 *
 */
router.all('/mall/integral/myExchangeRecords', function (req, res, next) {
    var events = [],random;
    _.forEach([2,3,4,5,6,8], function (i) {
        random = Math.floor(Math.random*10);
        events.push({
            id:random,
            title:'10元 提现券',
            price: '10',
            totalPrice: '100',
            timeline:'15021545464',
            count:'23',
            no:'1545125',
            statusText:'已完成'
        });
    });
    var resultValue = {
        code: 0,
        text: 'ok',
        data: {
            count:6,
            recordList:events
        }
    };
    res.json(resultValue);
});


/**
 * @fakedoc 我的星币出入明细
 *
 * @name mall.integralMyLogs
 * @href /mall/integral/MyLogs
 *
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {int=}   [pageNumber=1]	页码
 * @input.post {int=}   [pageSize=10]	页量
 * @input.post {int}    category		明细类型（0-全部，1-获得，2-消费）
 *
 * @description
 *
 * https://localhost:5000/mall/integral/MyLogs
 *
 * https://192.168.1.86:3000/mall/integral/MyLogs
 *
 * @output {json}  我的星币出入明细
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	count:"{int} 总条目数",
 *  	recordList:[{
 * 			id:"{string} 	记录id",
 *  		timeline:"{string} 	操作时间",
 *  		operation:"{string} 	操作（例：签到）",
 *  		remark:"{string} 星币变化（例：+10）"
 *    	}]
 *   }
 * }
 *
 */
router.all('/mall/integral/MyLogs', function (req, res, next) {
    var events = [],random;
    _.forEach([2,3,4,5,6,8], function (i) {
        random = Math.floor(Math.random*10);
        events.push({
            id:random,
            operation: '签到',
            timeline:'15021545464',
            remark:'+10'
        });
    });
    var resultValue = {
        code: 0,
        text: 'ok',
        data: {
            count:6,
            recordList:events
        }
    };
    res.json(resultValue);
});



module.exports = router;