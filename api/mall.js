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
 * @input.post {String} addressId		 			收件地址Id
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

/**
 * @fakedoc xtz.收货地址列表
 *
 * @name mall.addressList
 * @href /mall/addressList
 *
 * @input.post {string} client 					客户端统计参数（common/client）
 * @input.post {string} token						token
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/addressList
 *
 * https://fakeapi.asterlake.cn:5000/mall/addressList
 *
 * @output {json} 收货地址
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	id:"{String} 收货地址id",
 *  	name:"{String} 收件人姓名",
 *  	phone:"{String} 收件人电话",
 *  	address:"{String} 收件地址",
 *  	isMain:"{int} 是否默认地址"
 *  }]
 * }
 *
 *
 */
router.all('/mall/addressList', function (req, res, next) {
	var lists = [];
	_.forEach([1,2,3,4,5,6], function (i) {
		lists.push({
			id:'10'+ i,
			name:'李小龙',
			phone:'1356478214'+ i,
			address:'上海市浦东新区张江',
			isMain:0
		});
	});
	var resultValue = {
		code: 0,
		text: 'ok',
		data: lists
	}

    res.json(resultValue);
});

/**
 * @fakedoc xtz.收货地址详情
 *
 * @name mall.addressDetail
 * @href /mall/addressDetail
 *
 * @input.post {string} client 						客户端统计参数（common/client）
 * @input.post {string} token							token
 * @input.post {string} addressId						收货地址id
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/addressDetail
 *
 * https://fakeapi.asterlake.cn:5000/mall/addressDetail
 *
 * @output {json} 收货地址
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	addressId:"{String} 收货地址id",
 *  	name:"{String} 收件人姓名",
 *  	phone:"{String} 收件人电话",
 *  	province:"{String} 收件地址所在省份",
 *  	city:"{String} 收件地址所在城市",
 *  	detail:'{String} 详细地址',
 *  	isMain:"{int} 是否默认收货地址"
 *  }
 * }
 *
 *
 */
router.all('/mall/addressDetail', function (req, res, next) {
	var list = {
		addressId:'1012',
		name:'张三丰',
		phone:'13256478956',
		province:'上海市',
		city:'浦东新区',
		detail:'半岛科技园6号楼',
		isMain:0
	}
	var resultValue = {
		code: 0,
		text: 'ok',
		data: list
	}

    res.json(resultValue);
});

/**
 * @fakedoc xtz.编辑（添加）收货地址
 *
 * @name mall.editAddress
 * @href /mall/editAddress
 *
 * @input.post {string}  client 						客户端统计参数（common/client）
 * @input.post {string}  token							token
 * @input.post {string=} addressId						收货地址id（可选。不传表示新增，传值表示修改之前地址）
 * @input.post {string}  name							收件人姓名
 * @input.post {string}  phone							收件人手机号
 * @input.post {string}  province						收件地址所在省份
 * @input.post {string}  city						    收件地址所在城市
 * @input.post {string}  detail						收件地址详情
 * @input.post {string}  main						    是否设为默认地址（1--是，0--否）
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/editAddress
 *
 * https://fakeapi.asterlake.cn:5000/mall/editAddress
 *
 * @output {json} 收货地址
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述"
 * }
 *
 *
 */
router.all('/mall/editAddress', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok'
	}

    res.json(resultValue);
});

/**
 * @fakedoc xtz.删除收货地址
 *
 * @name mall.deleteAddress
 * @href /mall/deleteAddress
 *
 * @input.post {string}  client 						客户端统计参数（common/client）
 * @input.post {string}  token							token
 * @input.post {string} addressId						收货地址id
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/deleteAddress
 *
 * https://fakeapi.asterlake.cn:5000/mall/deleteAddress
 *
 * @output {json} 删除收货地址
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述"
 * }
 *
 *
 */
router.all('/mall/deleteAddress', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok'
	}

    res.json(resultValue);
});


/**
 * @fakedoc xtz.设置默认收货地址
 *
 * @name mall.setMainAddress
 * @href /mall/setMainAddress
 *
 * @input.post {string}  client 						客户端统计参数（common/client）
 * @input.post {string}  token							token
 * @input.post {string}  addressId						收货地址id
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/setMainAddress
 *
 * https://fakeapi.asterlake.cn:5000/mall/setMainAddress
 *
 * @output {json} 默认收货地址
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述"
 * }
 *
 *
 */
router.all('/mall/setMainAddress', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok'
	}

    res.json(resultValue);
});

/**
 * @fakedoc xtz.我的兑换订单列表
 *
 * @name mall.orderPageList
 * @href /mall/orderPageList
 *
 * @input.post {string}  client 						客户端统计参数（common/client）
 * @input.post {string}  token							token
 * @input.post {interger} [pageSize=10] 				页容量
 * @input.post {interger} [pageNumber=1] 				页码
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/orderPageList
 *
 * https://fakeapi.asterlake.cn:5000/mall/orderPageList
 *
 * @output {json} 兑换订单列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	introduction:"{String} 商品介绍",
 *  	productCount:"{int} 订单所兑商品数量",
 *  	timeline:"{String} 兑换时间（格式：2016-08-06 12:00）",
 *  	status:"{int} 订单状态 (0--已创建，1--已发货，2--已撤销)",
 *  	statusName:'{String} 订单状态说明',
 *  	coins:"{int} 所用星币数量"
 *  }]
 * }
 *
 */
router.all('/mall/orderPageList', function (req, res, next) {
	var lists = [];

	_.forEach([1,2,3,4,5,6],function(i){
		lists.push({
			introduction:'50元代金券',
			productCount:5,
			timeline:'2016-08-06 12:00',
			status:0,
			statusName:'已创建',
			coins:400
		})
	})

	var resultValue = {
		code: 0,
		text: 'ok',
		data:lists
	}

    res.json(resultValue);
});

/**
 * @fakedoc xtz.我的星币记录列表
 *
 * @name mall.coinLogPageList
 * @href /mall/coinLogPageList
 *
 * @input.post {string}  client 						客户端统计参数（common/client）
 * @input.post {string}  token							token
 * @input.post {interger} [pageSize=10] 				页容量
 * @input.post {interger} [pageNumber=1] 				页码
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/coinLogPageList
 *
 * https://fakeapi.asterlake.cn:5000/mall/coinLogPageList
 *
 * @output {json} 星币记录列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  		yearMonth:"{string} 记录年月（格式如：2016-12）",
 *  		recordList:[{
 *  			timeline:"{String} 操作日期时间 （格式如：12-07 12:00:00）",
 *  			category:"{int} 记录类型",
 *  			categoryName:"{String} 记录类型名称",
 *  			note:"{String} 备注( 格式如：+5)"
 *  		}]
 *  	}]
 * }
 *
 */
router.all('/mall/coinLogPageList', function (req, res, next) {
	var lists = [];

	_.forEach([1,2,3,4,5,6],function(i){
		lists.push({
			yearMonth:'2016-12',
			recordList:[{
				timeline:'12-06 12:00:00',
				category:0,
				categoryName:'bbs论坛',
				note:'+5'
			}]
		})
	})

	var resultValue = {
		code: 0,
		text: 'ok',
		data:lists
	}

    res.json(resultValue);
});

/**
 * @fakedoc xtz.星币兑换规则
 *
 * @name mall.coinRule
 * @href /mall/coinRule
 *
 * @input.post {string}  client 						客户端统计参数（common/client）
 * @input.post {string}  token							token
 *
 * @needAuth
 *
 * @description
 *
 * https://localhost:5000/mall/coinRule
 *
 * https://fakeapi.asterlake.cn:5000/mall/coinRule
 *
 * @output {json} 星币记录列表
 * {
 * 	code:"{int}  状态代码（0表示成功，其它值表示失败(69633表示未登陆)）",
 *  text:"{String} 状态描述",
 *  data:"{Array} 规则html数组（格式如：['规则01html','规则02html',..]）"
 *}
 */
router.all('/mall/coinLogPageList', function (req, res, next) {
	var lists = [];

	_.forEach([1,2,3],function(i){
		lists.push('<p>'+i+'、投资获取星币，投资100元1个星币</p>')
	})

	var resultValue = {
		code: 0,
		text: 'ok',
		data:lists
	}

    res.json(resultValue);
});

module.exports = router;