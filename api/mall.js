var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 积分兑换商品分页列表
 *
 * @name mall.productPageList
 * @href /mall/productPageList
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {interger=} [pageSize=10] 		页容量
 * @input.post {interger=} [pageNumber=1] 		页码
 *
 * @description
 * 
 * https://localhost:3000/mall/productPageList?client=asdfaqerq1werqwe&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/mall/productPageList?client=asdfaqerq1werqwe&pageSize=10&pageNumber=1
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 * 		productId:"{String} 商品Id",
 * 		productName:"{String} 商品名称",
 * 		typeId:"{String} 商品类别Id",
 * 		typeName:"{String} 商品类别名称",
 * 		logoMin:"{String} 商品图片",
 * 		introduction:"{String} 商品介绍",
 *  	price:"{number} 原价",
 *  	showPrice:"{number} 现价",
 *  	upDt:"{string} 上架时间",
 *  	downDt:"{string} 下架时间",
 * 		productCount:"{int} 上架数量",
 *  	productSurplus:"{int} 剩余数量",
 *  	status:"{int} 状态",
 *      statusName:"{String} 状态名称",
 *  	isRecommend:"{string} 是否推荐(0是，1不是)"
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
    		productName: '商品名称'+i, 
        	typeId: [1,2][i % 2],
        	typeName:"商品类别名称",
        	logoMin:"https://www.hsbank360.com/userfiles/1/images/integral/integralMallProduct/2015/09/integralMall_img02(1).jpg",
        	price:1000,
        	showPrice:800,
        	upDt:'2015-10-20 11:11:11',
        	downDt:'2016-10-20 11:11:11',
        	productCount:20,
        	productSurplus:10,
        	status:1,
        	statusName:'状态名称',
        	isRecommend:"0"
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
 * @fakedoc 积分兑换商品详情
 *
 * @name mall.productDetail
 * @href /mall/productDetail
 * 
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {String} productId		 		商品Id
 *
 * @description
 * 
 * https://localhost:3000/mall/productDetail?client=asdfaqerq1werqwe&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/mall/productDetail?client=asdfaqerq1werqwe&pageSize=10&pageNumber=1
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		productId:"{String} 商品Id",
 * 		productName:"{String} 商品名称",
 * 		typeId:"{String} 商品类别Id",
 * 		typeName:"{String} 商品类别名称",
 * 		logoNormal:"{String} 商品图片(中图）",
 * 		introduction:"{String} 商品介绍",
 *  	price:"{number} 原价",
 *  	showPrice:"{number} 现价",
 *  	upDt:"{string} 上架时间",
 *  	downDt:"{string} 下架时间",
 * 		productCount:"{int} 上架数量",
 *  	productSurplus:"{int} 剩余数量",
 *  	status:"{int} 状态",
 *      statusName:"{String} 状态名称",
 *  	isRecommend:"{string} 是否推荐(0是，1不是)"
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
    		productName: '商品名称'+i, 
        	typeId: [1,2][i % 2],
        	typeName:"商品类别名称",
        	logoNormal:"https://www.hsbank360.com/userfiles/1/images/integral/integralMallProduct/2015/09/integralMall_img02(1).jpg",
        	introduction:"商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍",
        	price:1000,
        	showPrice:800,
        	upDt:'2015-10-20 11:11:11',
        	downDt:'2016-10-20 11:11:11',
        	productCount:20,
        	productSurplus:10,
        	status:1,
        	statusName:'状态名称',
        	isRecommend:"0"
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: activities[0]
    }
    res.json(resultValue);
});

module.exports = router;