var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc xtz.首页轮播列表
 *
 * @name event.carousel
 * @href /event/carousel
 *
 * @input.post {string}  client 		客户端统计参数（common/client）
 * @input.post {string=} [type=0]		图片用途类型（0--首页轮播图，1--弹框图片，2--启动页广告）
 *
 * @description
 *
 * https://localhost:5000/event/carousel
 *
 * https://fakeapi.asterlake.cn:5000/event/carousel
 *
 * @output {json} 首页轮播列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 * 	  {
 * 	  	id:"{string} 图片id",
 *  	photo:"{string} 图片URL（绝对路径）",
 *  	title:"{string} 标题",
 *  	target:"{string} 链接地址"
 *     }
 * 	]
 * }
 *
 *
 */
router.all('/event/carousel', function (req, res, next) {
    var events = [],random;
    _.forEach([2,3,4,5,6,8], function (i) {
		random = Math.floor(Math.random*10);
    	events.push({
			id:random,
    		photo:'https://www.hsbank360.com/static/modules/front/images/index/banner-0' + i + '.jpg',
        	title: 'slide'+i,
        	target: [1,2][i % 2] == 1 ? "https://www.hsbank360.com/f/activity/invitation" : "1"
        });
    });
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: events
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.App自动更新检查接口
 *
 * @name event.checkUpdate
 * @href /event/checkUpdate
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:5000/event/checkUpdate
 *
 * https://fakeapi.asterlake.cn:5000/event/checkUpdate
 *
 * @output {json} App自动更新检查
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		needUpdate:"{int} 		    是否有更新（1--是，0--否）",
 * 		needForcedUpdate:"{int} 	是否需要强制更新（1--是，0--否）",
 *  	url:"{string} 				待更新的apk文件url（android）或AppStore下载链接（iOS）",
 *  	version:"{String} 			待更新App版本",
 *  	versionInfo:"{string} 		待更新App版本说明",
 *  	androidAppSize:"{string} 	待更新App文件大小（byte）"
 *    }
 * }
 *
 */
router.all('/event/checkUpdate', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		needUpdate:1,
    		needForcedUpdate:1,
    		url:"http://www.fdjf.net/client/fdjf_hsbank-1.0.1-fdjf-FDJF-release-aligned-com.fdjf.hsbank.apk",
    		version:"1.0.1",
    		versionInfo:"测试功能",
    		androidAppSize:"134123"
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.服务端状态检查接口
 *
 * @name event.checkServerStatus
 * @href /event/checkServerStatus
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:5000/event/checkServerStatus
 *
 * https://fakeapi.asterlake.cn:5000/event/checkServerStatus
 *
 * @output {json} 服务端状态检查
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		statusCode:"{int} 		服务端是否正常工作（1--是，0--否）",
 *  	statusText:"{string}    服务端状态说明"
 *    }
 * }
 *
 */
router.all('/event/checkServerStatus', function (req, res, next) {
	var i = Math.floor(Math.random() * 1);
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		statusCode:i == 1 ? 1 : 0,
    		statusText:i == 1 ? "ok" : "维护中，请稍候再试"
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 新手任务
 *
 * @name event.newUserTask
 * @href /event/newUserTask
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:3000/event/newUserTask?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/newUserTask?client=asfdaqwerqe
 *
 * @output {json} 新手任务接口
 * {
 * 	code:"{int} 状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 * 		step1:"{String} 	注册奖励",
 *  	step2:"{string} 	开通第三方资金托管奖励",
 *  	step3:"{String} 	充值奖励 ",
 *  	step4:"{string} 	首次投资奖励 "
 *    }
 * }
*/
router.all('/event/newUserTask', function (req, res, next) {
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: {
    		step1:"您已获得5元投资券",
    		step2:"您已获得1张10元投资券",
    		step3:"您已获得10元投资券",
    		step4:"您已获得8元现金和200元投资券",
    	}
    }
    res.json(resultValue);
});

/**
 * @fakedoc 我的抽奖信息
 *
 * @name event.lotteryInfo
 * @href /event/lotteryInfo
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 		token
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树,1011 :女神升值季】)
 * @needAuth
 * @description
 *
 * https://localhost:3000/event/lotteryInfo?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/lotteryInfo?client=asfdaqwerqe
 *
 * @output {json} 我的抽奖信息
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	count:"{int} 	抽奖机会（已使用抽奖次数+剩余抽奖次数）",
 *  	used:"{int} 	已使用抽奖次数",
 *  	over:"{int} 	剩余抽奖次数",
 *    }
 * }
 *
 */
router.all('/event/lotteryInfo', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			count:2,
			used:2,
			over:0
		}
	};
	res.json(resultValue);
});

/**
 * @fakedoc 抽奖
 *
 * @name event.lottery
 * @href /event/lottery
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 		token
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树,1011 :女神升值季】)
 * @needAuth
 * @description
 *
 * https://localhost:3000/event/lottery?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/lottery?client=asfdaqwerqe
 *
 * @output {json} 抽奖接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	angle:"{int} 	旋转角度（适用于转盘）",
 *  	result:"{String}   返回信息",
 *    }
 * }
 *
 */
router.all('/event/lottery', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			angle:40,
			result:'返回信息'
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc 我的中奖信息
 * @name event.myPrizeList
 * @href /event/myPrizeList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token 		token
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树】)
 * @input.post {int=} [pageSize=10] 	页容量
 * @input.post {int=} [pageNumber=1] 	页码
 * @needAuth
 * @description
 *
 * https://localhost:3000/event/myPrizeList?client=asfdaqwerqe
 *
 * https://fakeapi.fdjf.net:3000/event/myPrizeList?client=asfdaqwerqe
 *
 * @output {json} 我的中奖信息
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *   data: {
 *   count : "{int} 	奖品数量",
 *   data : [{
 *  	prize:"{String}   奖品",
 *  	date:"{String} 	中奖时间"
 *   }]
 *  }
 * }
 *
 */
router.all('/event/myPrizeList', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			count: 10,
			data :[
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "迪士尼米奇玩偶"},
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "iPad mini3"},
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "50元现金券"},
			{date: '2016.3.1 10:02', result: "10元现金券"},
			{date: '2016.3.1 10:02', result: "iPhone 6s"},
			{date: '2016.3.1 10:02', result: "20元投资券"}
			]
		}
	};
	res.json(resultValue);
});

/**
 * @fakedoc 活动分享成功
 * @name event.shareSuccess
 * @href /event/shareSuccess
 *
 * @input.post {string} client 	客户端统计参数（common/client）
 * @input.post {string} token 		token
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树】)
 * @needAuth
 * @description
 * https://localhost:3000/event/shareSuccess?client=asfdaqwerqe
 * https://fakeapi.fdjf.net:3000/event/shareSuccess?client=asfdaqwerqe
 *
 * @output {json} 分享成功
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 * }
 */
router.all('/event/shareSuccess', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok'
	};
	res.json(resultValue);
});

/**
 * @fakedoc xtz.中奖榜单
 *
 * @name event.lotteryPrizeList
 * @href /event/lotteryPrizeList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} code 		活动代码(【1009:春节活动 ,1010:摇钱树】)
 *
 * @description
 *
 * https://localhost:5000/event/lotteryPrizeList
 *
 * https://fakeapi.asterlake.cn:5000/event/lotteryPrizeList
 *
 * @output {json} 中奖榜单接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [{
 *  	phone:"{String} 	手机号码",
 *  	prize:"{String}   奖品"
 *  }]
 * }
 *
 */
router.all('/event/lotteryPrizeList', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: [
			{phone:'158****4609',prize:"10元现金券"},
			{phone:'158****4609',prize:"迪士尼米奇玩偶"},
			{phone:'158****4609',prize:"10元现金券"},
			{phone:'158****4609',prize:"iPad mini3"},
			{phone:'158****4609',prize:"10元现金券"},
			{phone:'158****4609',prize:"10元现金券"},
			{phone:'158****4609',prize:"50元现金券"},
			{phone:'158****4609',prize:"10元现金券"},
			{phone:'158****4609',prize:"iPhone 6s"},
			{phone:'158****4609',prize:"20元投资券"}
		]
	};
	res.json(resultValue);
});

/**
 * @fakedoc 投资排行
 *
 * @name event.investmentList
 * @href /event/investmentList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} type 			类型（week:周排行；month:月排行）
 * @input.post {string} year 			年份
 * @input.post {string} month 			月份
 * @input.post {string} week 			当月第N周
 * @input.post {string} genre 			类型2（1:投资排行[default],2,年化排行）
 *
 * @description
 *
 * https://localhost:3000/event/investmentList?client=asfdaqwerqe&token=1342345234532&type=month&year=2015&month=12&week=2
 *
 * https://fakeapi.fdjf.net:3000/event/investmentList?client=asfdaqwerqe&token=1342345234532&type=month&year=2015&month=12&week=2
 *
 * @output {json} 投资排行接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: {
 *  	myRanking:"{String} 	当前用户的名次（如果未登录，则为0）",
 *  	myAmount:"{String}    	当前用户的周期内的投资金额（元）(如果未登录，则为0)",
 *  	recordList:[{
 *  		ranking:"{String} 	名次",
 *  		mobile:"{String}    手机号码（要预处理，显示成如下格式：136****5555）",
 *  		amount:"{String}    周期内的投资金额（元）"
 *  	}]
 *    }
 * }
 *
 */
router.all('/event/investmentList', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: {
			myRanking:100,
			myAmount:23456,
			recordList:[{ranking:'1',mobile:'158****4609',amount:"100000"},
				{ranking:'2',mobile:'158****4609',amount:"100000"},
				{ranking:'3',mobile:'158****4609',amount:"100000"},
				{ranking:'4',mobile:'158****4609',amount:"100000"},
				{ranking:'5',mobile:'158****4609',amount:"100000"},
				{ranking:'6',mobile:'158****4609',amount:"100000"},
				{ranking:'7',mobile:'158****4609',amount:"100000"},
				{ranking:'8',mobile:'158****4609',amount:"100000"},
				{ranking:'9',mobile:'158****4609',amount:"100000"},
				{ranking:'10',mobile:'158****4609',amount:"100000"},
				{ranking:'11',mobile:'158****4609',amount:"100000"},
				{ranking:'12',mobile:'158****4609',amount:"100000"},
				{ranking:'13',mobile:'158****4609',amount:"100000"},
				{ranking:'14',mobile:'158****4609',amount:"100000"},
				{ranking:'15',mobile:'158****4609',amount:"100000"},
				{ranking:'16',mobile:'158****4609',amount:"100000"},
				{ranking:'17',mobile:'158****4609',amount:"100000"},
				{ranking:'18',mobile:'158****4609',amount:"100000"},
				{ranking:'19',mobile:'158****4609',amount:"100000"},
				{ranking:'20',mobile:'158****4609',amount:"100000"}
			]
		}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.礼品分页列表
 *
 * @name event.giftPageList
 * @href /event/giftPageList
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} pageSize		页容量
 * @input.post {string} pageNumber    页码
 *
 * @description
 *
 * https://localhost:5000/event/giftPageList
 *
 * https://fakeapi.asterlake.cn:5000/event/giftPageList
 *
 * @output {json} 礼品分页接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:[{
 *  	id:"{String} 礼品id",
 *      title:"{String} 礼品标题",
 *      intro:"{String} 礼品简介",
 *      imgUrl:"{String} 礼品图片url",
 *      level:"{int} 礼品可领取区间（0--1万以下，1--1万至10万，2--10万至20万，3--20万至50万，4--50万至1000万，5--1000万以上）"
 *  }]
 *}
 */
router.all('/event/giftPageList', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data: [
			{id:'2',title:'小糊涂神',intro:'酒',imgUrl:'http://www.baidu.com',level:'1'}
		]
	}
	res.json(resultValue);
});
/**
 * @fakedoc xtz.礼品详情信息
 *
 * @name event.giftDetail
 * @href /event/giftDetail
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} id		        礼品id
 *
 * @description
 *
 * https://localhost:5000/event/giftDetail
 *
 * https://fakeapi.asterlake.cn:5000/event/giftDetail
 *
 * @output {json} 礼品详情信息接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	id:"{String} 礼品id",
 *      title:"{String} 礼品标题",
 *      imgUrlArray:"{String} 礼品介绍图片数组",
 *      remainNumber:"{String} 礼品剩余数量",
 *      status:"{int} 礼品领取状态 （1--立即领取，2--不在活动时间，3--已经领取过，4--投资额度不够，不能领取，5--剩余数量不够） "
 *  }
 *}
 */
router.all('/event/giftDetail', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data:
			{id:'2',title:'小糊涂神',imgUrlArray:[],remainNumber:'12',status:1}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.确认礼品领取
 *
 * @name event.confirmGetGift
 * @href /event/confirmGetGift
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string}  id			领取礼品id
 * @input.post {string} address	    礼品寄送详细地址
 * @input.post {string} zipcode       邮编
 *
 * @description
 *
 * https://localhost:5000/event/confirmGetGift
 *
 * https://fakeapi.asterlake.cn:5000/event/confirmGetGift
 *
 * @output {json} 确认礼品领取接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *      title:"{String} 礼品标题",
 *      imgUrl:"{String} 礼品介绍图片url",
 *      zipcode:"{String} 寄送目的地邮编",
 *      address:"{String}  寄送目的地址"
 *  }
 *}
 */
router.all('/event/confirmGetGift', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data:
			{title:'小糊涂神',imgUrl:'',zipcode:'201209',address:'上海市浦东新区达尔文路'}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.礼品寄送信息更新
 *
 * @name event.updataSendInfo
 * @href /event/updataSendInfo
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} address	    礼品寄送详细地址
 * @input.post {string} zipcode       邮编
 *
 * @description
 *
 * https://localhost:5000/event/updataSendInfo
 *
 * https://fakeapi.asterlake.cn:5000/event/updataSendInfo
 *
 * @output {json} 礼品寄送信息更新接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *      zipcode:"{String} 寄送目的地邮编(更新后)",
 *      address:"{String}  寄送目的地址(更新后)"
 *  }
 *}
 */
router.all('/event/updataSendInfo', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data:
			{zipcode:'201200',address:'上海市浦东新区牛顿路'}
	}
	res.json(resultValue);
});

/**
 * @fakedoc xtz.我的礼品
 *
 * @name event.myGift
 * @href /event/myGift
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 *
 * @description
 *
 * https://localhost:5000/event/myGift
 *
 * https://fakeapi.asterlake.cn:5000/event/myGift
 *
 * @output {json} 得到我的礼品信息接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	name:"{String} 姓名",
 *  	chinaId:"{String} 证件号码",
 *  	phone:"{String} 联系电话",
 *  	id:"{String} 礼品id",
 *  	thumbUrl:"{String} 礼品图片url",
 *      zipcode:"{String} 寄送目的地邮编",
 *      address:"{String}  寄送目的地详细地址",
 *      status:"{String} 状态码(1--已发出，0--未发出)",
 *      statusName:"{String} 状态名称"
 *  }
 *}
 */
router.all('/event/updataSendInfo', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data:
			{zipcode:'201200',address:'上海市浦东新区牛顿路',status:1,statusName:'已发出'}
	}
	res.json(resultValue);
});
/**
 * @fakedoc xtz.活动截止时间
 *
 * @name event.activityTime
 * @href /event/activityTime
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 * @input.post {string} id			    活动id（默认为1）
 *
 * @description
 *
 * https://localhost:5000/event/activityTime
 *
 * https://fakeapi.asterlake.cn:5000/event/activityTime
 *
 * @output {json} 活动截止时间接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	startTime:"{String} 活动开始时间的秒数",
 *  	endTime:"{String} 活动结束时间的秒数"
 *  }
 *}
 */
router.all('/event/activityTime', function (req, res, next) {
	var endTime = new Date().getTime();
	var resultValue = {
		code: 0,
		text: 'ok',
		data:
			{startTime:endTime,endTime:endTime}
	}
	res.json(resultValue);
});
/**
 * @fakedoc xtz.用户当前累计投资额
 *
 * @name event.investTotal
 * @href /event/investTotal
 *
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} token			Token
 *
 * @description
 *
 * https://localhost:5000/event/investTotal
 *
 * https://fakeapi.asterlake.cn:5000/event/investTotal
 *
 * @output {json} 用户当前累计投资接口
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	money:"{String} 用户累计投资额"
 *  }
 *}
 */
router.all('/event/investTotal', function (req, res, next) {
	var resultValue = {
		code: 0,
		text: 'ok',
		data:
			{money:'12000'}
	}
	res.json(resultValue);
});


module.exports = router;