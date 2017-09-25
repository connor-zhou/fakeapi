var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 客户端统计参数client
 *
 * @name common.client

 *
 * @description
 * 使用时（传到后台时）需要 base64 encode编码
 *
 * <pre>
 *{
 *	android:{					//Android参数
 *		channel:"",				//发布渠道
 *		md5:"",					//apk签名的md5值
 *		deviceModel:"",			//设备型号
 *		deviceNumber:"",		//设备号码
 *		platformVersion:"",		//操作系统的版本，如：Android 4.3
 *		sdkVersion:""			//SDK的版本，如：19
 *	},
 *	ios:{						//IOS参数
 *		deviceModel:"",			//设备型号，如：iPhone4、iphone6s
 *		systemVersion:""		//操作系统版本，如：9.0.1
 *	},
 *	language:"",				//语言
 *	type:"",           			//类型：website、wechat、android、ios
 *	version:"",					//版本
 *	website:{},					//网站参数
 *	wechat:{
 *      ad:""                      //广告渠道
 *      channel:""                 //营销渠道
 *      m:""                       //推荐人手机号码
 *      type:""                    //wechat类型标识
 *      version:""                 //版本号
 *      wechat:{
 *          ua:""                  //代理信息
 *      }
 *
 *  }
 *}
 * </pre>
 */







/**
 * @fakedoc readme
 *
 * @name common.readme
 *
 * @description
 *
 * 所有接口返回的几点说明
 *
 * <pre>
 *
 * 1、涉及到交易金额的字段值，如无特别说明，默认都为保留两位小数的字符串。
 *
 * 2、所有涉及到查询用户敏感信息（身份证号，邮箱，手机号等）的返回，都需模糊化后返回；
 *    且因为此时用户一般都已登陆（有了登陆凭证token），若前台要用到用户真实信息
 *    （比如修改邮箱等操作时需发送验证码验证用户身份），只需用带token的接口请求即可，
 *    不必传入真实信息。（后台可根据token，查找用户真实信息，做出对应操作）
 *
 * 3、若在未登录情况下请求需要登录凭证token或者token无效的接口，默认报错code都为69633 。
 *
 * 4、密码格式为 8-15位的大小写字母和数字（传入后台时需base64编码）。
 *
 * 5、需要返回时间的字段，若无特别备注，格式统一为字符串形式的时间戳。（例："1506071684489"）
 *
 * 6、有 “待确定” 字眼的地方，需要和后台确认。
 *
 * 7、部分错误码：
 * {
 *      SUCCESS(0, "success"),
        TOKEN_INVALID(69633, "用户未登录"),
        CLIENT_ERROR(20000, "客户端错误"),
        PARAM_ILLEGAL(30000, "参数非法"),
        BUSINESS_ERROR(40000, "业务异常"),
        API_NOT_FOUND(50000, "接口不存在"),
        SYSTEM_ERROR(60000, "系统异常"),
 * }
 *
 *
 * </pre>
 *
 */


/**
 * @fakedoc 用户是否已注册
 *
 * @name common.isRegistered
 * @href /common/isRegistered
 *
 * @input.post {string} client 		客户端统计参数
 * @input.post {string} mobile 		手机号码
 *
 * @description
 *
 * https://localhost:5000/common/isRegistered
 *
 * https://92.168.1.86:3000/common/isRegistered
 *
 * @output {json} 用户是否已注册
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{string} 状态描述",
 *  data:{
 *      result:"{boolean} true表示已注册，false表示还没"
 *  }
 * }
 *
 *
 */
router.all('/common/isRegistered', function (req, res, next) {
	// var phone = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13566667777');
    var resultValue = {
    	code: 0,
    	text: 'ok',
        data:{
    	    result:false
        }
    };
    res.json(resultValue);
});
//
// /**
//  * @fakedoc xtz.得到可绑定的银行列表
//  *
//  * @name common.bankList
//  * @href common/bankList
//  *
//  * @input.post {string} client    客户端统计参数（common/client）
//  *
//  * @description
//  *
//  * https://localhost:5000/common/bankList
//  *
//  * https://92.168.1.86:3000/common/bankList
//  *
//  * @output {json} 得到可绑定的银行列表
//  * {
//  *      code:"{int} 状态代码（0表示成功，其它值表示失败）",
//  *      text:"{string} 状态描述",
//  *      data:[{
//  *          id:"{int} 银行Id",
//  *          name:"{string} 银行中文名称",
//  *          abbr:"{string} 银行英文简称",
//  *          logoUrl:"{string} 银行logoUrl"
//  *      }]
//  * }
//  */
// router.all('/common/bankList', function (req, res, next) {
//     var bankLists =[];
//     var start = 0;
//     var limit = 10;
//     while( start < limit){
//         bankLists.push({
//             id:['11','9','1','3'][start % 4],
//             name:['中国银行','交通银行','工商银行','建设银行'][start % 4],
//             abbr:['BOC','COMM','ICBC','CCB'][start % 4],
//             logoUrl:''
//         })
//         start++;
//     }
//     var resultValue = {
//         code: 0,
//         text:'ok',
//         data:bankLists
//     }
//     res.json(resultValue);
// });
// /**
//  * @fakedoc xtz.得到省份列表
//  *
//  * @name common.provinceList
//  * @href common/provinceList
//  *
//  * @input.post {string} client 客户端统计参数（common/client）
//  *
//  * @description
//  *
//  * https://localhost:5000/common/provinceList
//  *
//  * https://92.168.1.86:3000/common/provinceList
//  *
//  * @output {json} 得到省份列表
//  *{
//  *      code:"{int} 状态代码（0表示成功，其它值表示失败）",
//  *      text:"{string} 状态描述",
//  *      data:
//  *          [
//  *              [{
//  *               firstLetter:"{string} 省份名称首字母（大写）",
//  *               recordList:
//  *                  [{
//  *                      id:"{string} 编号Id",
//  *                      name:"{string} 省份名称",
//  *                      code:"{string} 省份编码",
//  *                      parent:"{string} 父级编码"
//   *                   }]
//   *             }]
//  *          ]
//  * }
//  * */
// router.all('/common/provinceList',function(req,res,next){
//     var resultValue = {
//         code: 0,
//         text:'ok',
//         data:
//          [
//                  [{  firstLetter:'B',
//                         recordList:[
//                         {id:'2',name:'北京市',code:'1',parent:0}
//                         ]
//                  }],
//
//                  [{  firstLetter:'H',
//                      recordList:[
//                          {id:'5',name:'海南省',code:'5',parent:0}
//                      ]
//                  }],
//
//                  [{  firstLetter:'S',
//                         recordList:[
//                         {id:'2',name:'上海市',code:'2',parent:0},
//                         {id:'3',name:'陕西省',code:'3',parent:0},
//                         {id:'4',name:'山西省',code:'4',parent:0}
//                         ]
//                  }]
//
//          ]
//
//     }
//     res.json(resultValue);
// });
//
// /**
//  * @fakedoc xtz.得到所在省份城市列表
//  *
//  * @name common.cityList
//  * @href common/cityList
//  *
//  * @input.post {string} client              客户端统计参数（common/client）
//  * @input.post {string} provinceCode        省份编码
//  *
//  * @description
//  *
//  * https://localhost:5000/common/cityList
//  *
//  * https://92.168.1.86:3000/common/cityList
//  *
//  * @output {json} 得到所在省份城市列表（firstLetter为首字母统称，具体数据会有不同值）
//  *{
//  *      code:"{int} 状态代码（0表示成功，其它值表示失败）",
//  *      text:"{string} 状态描述",
//  *      data:[
//  *              [{
//  *              firstLetter:"{string} 城市首字母大写",
//  *              recordList:[{
//  *                      id:"{string} 编号Id",
//  *                      name:"{string} 城市名称",
//  *                      code:"{string} 城市编码",
//  *                      parent:"{string} 父级（省份）编码"
//  *                     }]
//  *              }]
//  *          ]
//  * }
//  * */
// router.all('/common/cityList',function(req,res,next){
//     var resultValue = {
//         code: 0,
//         text:'ok',
//         data:
//             [
//                 [{
//                     firstLetter: 'B',
//                     recordList: [
//                         {id: '36', name: '北京', code: '1001', parent: '1'}
//                     ]
//                 }]
//
//             ]
//     }
//     res.json(resultValue);
// })
//
// /**
//  * @fakedoc xtz.银行分行查询
//  *
//  * @name common.branchBankName
//  * @href common/branchBankName
//  *
//  * @input.post {string} client                  客户端统计参数（common/client）
//  * @input.post {string} provinceName            省份名称
//  * @input.post {string} cityName                城市名称
//  * @input.post {string} bankName                银行名称
//  * @input.post {string} branchName              银行分行名称
//  *
//  * @description
//  *
//  * https://localhost:5000/common/branchBankName
//  *
//  * https://92.168.1.86:3000/common/branchBankName
//  *
//  * @output {json} 银行分行列表(数据示例为 安徽-合肥-交通银行-某分行)
//  *{
//  *      code:"{int} 状态代码（0表示成功，其它值表示失败）",
//  *      text:"{string} 状态描述",
//  *      data:[ "{string} 字符串数组"]
//  * }
//  * */
// router.all('/common/branchBankName',function(req,res,next){
//     var resultValue = {
//         code: 0,
//         text:'ok',
//         data:['交通银行安徽省分行','交通银行安徽省分行营业部','交通银行合肥三孝口支行','交通银行股份有限公司合肥滨湖新区支行',
//                '交通银行合肥寿春路桥支行','交通银行股份有限公司合肥临泉路支行','交通银行合肥南七支行','交通银行股份有限公司合肥屯溪路支行']
//     }
//     res.json(resultValue);
// });
//
//

/**
 * @fakedoc  获取图形验证码
 *
 * @name common.imageCode
 * @href common/imageCode
 *
 * @input.get {string}  client                  客户端统计参数
 * @input.get {string}  uniqueId                可表示唯一性的id
 *
 * @description
 *
 * https://localhost:5000/common/imageCode?client="LKJLSJFDAL"&uniqueId="SAFSFS"
 *
 * https://192.168.1.86:3000/common/imageCode?client="LKJLSJFDAL"&uniqueId="SAFSFS"
 *
 * @output {string} 返回图片数据data
 *
 * */

router.all('/common/imageCode',function(req,res,next){
    var resultValue = {
        code: 0,
        text:'ok',
        data:{
            url:'http://bbs.xingtouzi.com/forum-36-1.html'
        }
    };

    res.json('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNo8zjsOxCAMBFB/　KEAUFFR0Cbng3nQPw68ArZdAlOZppPFIBhH5EAB8b+Tlt9MYQ6i1BuqFaq1CKSVcxZ2Acs6406KUgpt5/　LCKuVgz5BDCSb13ZO99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg==');
});

/**
 * @fakedoc  发送短信验证码
 *
 * @name common.sendSmsCode
 * @href common/sendSmsCode
 *
 * @input.post {string}   client                  客户端统计参数
 * @input.post {string=}  token                   Token（仅status == 0 时传入）
 * @input.post {string=}  mobile                  手机号（仅status == 1 时传入）
 * @input.post {string}   uniqueId                请求图形验证码时用到的唯一id
 * @input.post {string}   imageCode               图形验证码
 * @input.post {int}      status                  是否登录状态（0-已登录，1-未登录）
 * @input.post {int}      serviceType             验证码用途（0-重置密码，1-更改密码，2-注册，3-修改邮箱，4-验证码登录）
 *
 * @description
 *
 *
 * https://localhost:5000/common/sendSmsCode
 *
 * https://192.168.1.86:3000/common/sendSmsCode
 *
 *
 * @output {json} 短信验证码
 *{
 *      code:"{int} 状态代码（0表示成功，69633表示token无效，其它值表示失败）",
 *      text:"{string} 状态描述"
 * }
 * */

router.all('/common/sendSmsCode',function(req,res,next){
    var resultValue = {
        code: 0,
        text:'ok'
    }
    res.json(resultValue);
});




module.exports = router;