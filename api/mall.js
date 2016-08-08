var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc xtz.热门兑换商品分页列表
 *
 * @name mall.hotProductPageList
 * @href /mall/hotProductPageList
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token					token
 *
 * @needAuth
 *
 * @description
 * 
 * https://localhost:5000/mall/hotProductPageList
 * 
 * https://fakeapi.asterlake.cn:5000/mall/hotProductPageList
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败（69633表示未登陆））",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 * 		productId:"{String} 商品Id",
 * 		type:"{int} 商品类型(1--加息券，2--代金券，3--实物商品)",
 * 		introduction:"{String} 商品名称",
 * 		photo:"{String} 商品图片",
 *  	price:"{number} 原价",
 *  	showPrice:"{number} 现价",
 * 		productCount:"{int} 库存量"
 *     }
 * 	]
 * }
 * 
 *
 */
router.all('/mall/hotProductPageList', function (req, res, next) {
    var activities = [];
    _.forEach([1,2,3,4,5,6,7], function (i) {
    	activities.push({
    		productId: i,
			type:[1,2,3][i % 3],
			introduction: '商品名称'+i,
        	photo:"https://www.hsbank360.com/userfiles/1/images/integral/integralMallProduct/2015/09/integralMall_img02(1).jpg",
        	price:1000,
        	showPrice:800,
        	productCount:'20'
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: activities
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.更多兑换商品分页列表
 *
 * @name mall.productPageList
 * @href /mall/productPageList
 *
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token					token
 * @input.post {interger} [pageSize=10] 		页容量
 * @input.post {interger} [pageNumber=1] 		页码
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/productPageList
 *
 * https://fakeapi.asterlake.cn:5000/mall/productPageList
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败（69633表示未登陆））",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 * 		productId:"{String} 商品Id",
 * 		type:"{int} 商品类型(1--加息券，2--代金券，3--实物商品)",
 * 		introduction:"{String} 商品名称",
 * 		photo:"{String} 商品图片",
 *  	price:"{number} 原价",
 *  	showPrice:"{number} 现价",
 * 		productCount:"{int} 库存量"
 *     }
 * 	]
 * }
 *
 *
 */
router.all('/mall/productPageList', function (req, res, next) {
    var activities = [];
    _.forEach([1,2,3,4,5,6,7], function (i) {
    	activities.push({
    		productId: i,
			type:[1,2,3][i % 3],
			introduction: '商品名称'+i,
        	photo:"https://www.hsbank360.com/userfiles/1/images/integral/integralMallProduct/2015/09/integralMall_img02(1).jpg",
        	price:1000,
        	showPrice:800,
        	productCount:'20'
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: activities
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.兑换商品详情
 *
 * @name mall.productDetail
 * @href /mall/productDetail
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {string} token					token
 * @input.post {String} productId		 		商品Id
 *
 * @needAuth
 *
 * @description
 * 
 * https://localhost:5000/mall/productDetail
 * 
 * https://fakeapi.asterlake.cn:5000/mall/productDetail
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		productId:"{String} 商品Id",
 * 		introduction:"{String} 商品介绍",
 * 		pics:"{array} 商品图片url数组（虚拟商品取pics[0]）",
 *  	showPrice:"{String} 现价",
 *  	rule:"{String} 兑换规则html"
 *   }
 * }
 * 
 *
 */
router.all('/mall/productDetail', function (req, res, next) {
    var activities = [];
    _.forEach([1], function (i) {
    	activities.push({
    		productId: i,
			pics:["https://www.hsbank360.com/userfiles/1/images/integral/integralMallProduct/2015/09/integralMall_img02(1).jpg"],
        	introduction:"商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍",
        	showPrice:'800',
			rule:'<p>this is a test html</p><p>only two paraphgraph</p>'
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: activities[0]
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.检查商品是否可兑换
 *
 * @name mall.checkExchange
 * @href /mall/checkExchange
 *
 * @input.post {string} client 					客户端统计参数（common/client）
 * @input.post {string} token						token
 * @input.post {String} productId		 			商品Id
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/checkExchange
 *
 * https://fakeapi.asterlake.cn:5000/mall/checkExchange
 *
 * @output {json} 检查兑换
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述"
 * }
 *
 *
 */
router.all('/mall/checkExchange', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok'
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.商品兑换确认
 *
 * @name mall.confirmExchange
 * @href /mall/confirmExchange
 *
 * @input.post {string} client 					客户端统计参数（common/client）
 * @input.post {string} token						token
 * @input.post {String} productId		 			商品Id
 * @input.post {String} [num=1]		 			商品数量
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/confirmExchange
 *
 * https://fakeapi.asterlake.cn:5000/mall/confirmExchange
 *
 * @output {json} 确认兑换
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述"
 * }
 *
 *
 */
router.all('/mall/confirmExchange', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok'
    }
    res.json(resultValue);
});

module.exports = router;