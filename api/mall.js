var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 优惠券列表
 *
 * @name mall.couponPageList
 * @href /mall/coupon/pageList
 *
 * @input.post {string}  client 		客户端统计参数
 * @input.post {int=}   [pageNumber=1]	页码
 * @input.post {int=}   [pageSize=10]	页量
 * @input.post {int}    type	        是否为推荐（热门）列表（0-不是，1-是）
 *
 *
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
 *  recordList:[{
 * 	  	id:"{string} 优惠券id",
 *  	value:"{string} 优惠券面值（例：加息券加息 0.5% 只返回 0.5）",
 *  	type:"{int} 优惠券类型（0-现金券，1-加息券，2-提现券）",
 *  	money:"{string=} 优惠券使用时投资额度限制（例：加息券表示加息上限金额，现金券表示需满足的投资额度。type == 2 时不返回）",
 *      price:"{string} 现在所需星币（现价）",
 *      oldPrice:"{string} 之前所需星币（原价）",
 *      count:"{string} 库存数",
 *      profile:"{string} 商品缩略图（app，微信）",
 *      profileWeb:"{string} 商品缩略图（官网）",
 *     }]
 *  }
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
            money:'1000',
            price:'1200',
            oldPrice:'5000',
            count:'12',
            profile:'',
            profileWeb:''
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
 * @fakedoc 商品详情
 *
 * @name mall.productDetail
 * @href /mall/product/detail
 *
 * @input.post {string}  client 		客户端统计参数
 * @input.post {string}  productId 		商品id
 *
 * @description
 *
 * https://localhost:5000/mall/product/detail
 *
 * https://192.168.1.86:3000/mall/product/detail
 *
 * @output {json} 商品详情
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data: {
 * 	  	id:"{string} 商品id",
 * 	    title:"{string} 商品标题",
 *  	type:"{int} 优惠券类型（0-现金券，1-加息券，2-提现券）",
 *      price:"{string} 所需星币（现价）",
 *      count:"{int} 库存数",
 *      profile:"{string} 商品缩略图（app，微信）",
 *      profileWeb:"{string} 商品缩略图（官网）",
 *      remark:"{string} 商品使用备注"
 *  }
 *}
 */
router.all('/mall/product/detail', function (req, res, next) {
    var resultValue = {
        code: 0,
        text: 'ok',
        data: {
            id:1020,
            title:'现金券',
            type: 0,
            price:'1200',
            count:12,
            profile:'',
            profileWeb:'',
            remark:'满100可用'
        }
    };
    res.json(resultValue);
});

/**
 * @fakedoc 商品兑换确认
 *
 * @name mall.productExchange
 * @href /mall/product/exchange
 *
 * @input.post {string}  client 					客户端统计参数（common/client）
 * @input.post {string}  token						token
 * @input.post {String}  productId		 			商品Id
 * @input.post {String}  [num=1]		 			商品数量
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/product/exchange
 *
 * https://192.168.1.86:3000/mall/product/exchange
 *
 * @output {json} 确认兑换
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述",
 *  data:{
 *      no:"{string=} 订单编号（成功时返回）"
 *  }
 * }
 *
 *
 */
router.all('/mall/product/exchange', function (req, res, next) {
    var resultValue = {
        code: 0,
        text: 'ok',
        data:{
            no:"468725"
        }
    };
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
 *          profile:"{string} 商品缩略图（app，微信）",
 *          profileWeb:"{string} 商品缩略图（官网）",
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
			profile:'',
			profileWeb:''
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
 * @fakedoc 我的星币兑换记录（我的订单）
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
 * @needAuth
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
 *  		statusText:"{string}   订单状态（已完成，已发货，已创建，已取消）",
 *          profile:"{string} 商品缩略图（app，微信）",
 *          profileWeb:"{string} 商品缩略图（官网）"
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
            statusText:'已完成',
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
 * @needAuth
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


/**
 * @fakedoc 订单详情
 *
 * @name mall.orderDetail
 * @href /mall/orderDetail
 *
 * @input.post {string} client 			客户端统计参数
 * @input.post {string} token 			Token
 * @input.post {string}  orderId		订单记录id
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/orderDetail
 *
 * https://192.168.1.86:3000/mall/orderDetail
 *
 * @output {json}  订单详情
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *      id:"{string} 订单id",
 *  	title:"{string} 订单标题",
 *      totalPrice:"{string} 订单所用星币数",
 *      count:"{string} 兑换商品数量",
 *      profile:"{string} 商品缩略图（app，微信）",
 *      profileWeb:"{string} 商品缩略图（官网）",
 *      status:"{int} 订单状态（0-已完成，1-已发货，2-已创建，3-已取消）",
 *      no:"{string} 订单编号",
 *      createTimeline:"{string} 订单创建时间",
 *      sendTimeline:"{string} 发货时间",
 *      finishTimeline:"{string} 完成时间"
 *   }
 * }
 *
 */
router.all('/mall/orderDetail', function (req, res, next) {

    var data = {
        id:'2323',
        title:'5元现金券',
        totalPrice:"20",
        count:'2',
        profile:'',
        profileWeb:'',
        status:0,
        no:'54556545545',
        createTimeline:'15021512154',
        sendTimeline:'15021512154',
        finishTimeline:'15021512154'
    };

    var resultValue = {
        code: 0,
        text: 'ok',
        data: data
    };
    res.json(resultValue);
});


module.exports = router;