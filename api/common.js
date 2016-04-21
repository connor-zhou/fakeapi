var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 客户端统计参数
 *
 * @name common.client
 * @href /common/client
 *
 * @description
 *
 * 使用方式：http://www.xxxxx.com?client=Base64.encode(json)
 *
 * <pre>
 *{
 *	android:{						//Android参数
 *		channel:"",					//发布渠道
 *		md5:"",						//apk签名的md5值
 *		deviceModel:"",				//设备型号
 *		deviceNumber:"",			//设备号码
 *		platformVersion:"",			//操作系统的版本，如：Android 4.3
 *		sdkVersion:""				//SDK的版本，如：19
 *	},
 *	ios:{							//IOS参数
 *		deviceModel:"",				//设备型号，如：iPhone4、iphone6s
 *		systemVersion:""			//操作系统版本，如：9.0.1
 *	},
 *	language:"",					//语言
 *	type:"",           				//类型：website、wechat、android、ios
 *	version:"",						//版本
 *	website:{},						//网站参数
 *	wechat:{}						//微信参数
 *}
 * </pre>
 */

/**
 * @fakedoc xtz.手机号码是否正确
 *
 * @name common.isMobile
 * @href /common/isMobile
 * 
 * @input.post {string} client 		客户端统计参数（common/client）
 * @input.post {string} mobile 		手机号码
 *
 * @description
 * 
 * https://localhost:5000/common/isMobile
 * 
 * https://fakeapi.asterlake.cn:5000/common/isMobile
 *
 * @output {json} 手机号码是否正确
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述"
 * }
 * 
 *
 */
router.all('/common/isMobile', function (req, res, next) {
	var phone = req.query.mobile ? req.query.mobile :(req.body.mobile ? req.body.mobile : '13566667777');
    var resultValue = {
    	code: phone == '13566667777' ? 0 : 0,
    	text: 'ok',
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到可绑定的银行列表
 *
 * @name common.bankList
 * @href common/bankList
 *
 * @input.post {String} client    客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:5000/common/bankList
 *
 * https://fakeapi.asterlake.cn:5000/common/bankList
 *
 * @output {json} 得到可绑定的银行列表
 * {
 *      code:"{int} 状态代码（0表示成功，其它值表示失败）",
 *      text:"{String} 状态描述",
 *      data:[{
 *          id:"{int} 银行Id",
 *          name:"{String} 银行中文名称",
 *          abbr:"{String} 银行英文简称"
 *      }]
 * }
 */
router.all('/common/bankList', function (req, res, next) {
    var bankLists =[];
    var start = 0;
    var limit = 10;
    while( start < limit){
        bankLists.push({
            id:['11','9','1','3'][start % 4],
            name:['中国银行','交通银行','工商银行','建设银行'][start % 4],
            abbr:['BOC','COMM','ICBC','CCB'][start % 4]
        })
        start++;
    }
    var resultValue = {
        code: 0,
        text:'ok',
        data:bankLists
    }
    res.json(resultValue);
});
/**
 * @fakedoc xtz.得到银行卡的开户省份列表
 *
 * @name common.provinceList
 * @href common/provinceList
 *
 * @input.post {String} client 客户端统计参数（common/client）
 *
 * @description
 *
 * https://localhost:5000/common/provinceList
 *
 * https://fakeapi.asterlake.cn:5000/common/provinceList
 *
 * @output {json} 得到银行卡的开户省份列表
 *{
 *      code:"{int} 状态代码（0表示成功，其它值表示失败）",
 *      text:"{String} 状态描述",
 *      data:[{
 *          firstLetter:"{String} 省份拼音的首字母（大写）",
 *          provinceList:
 *          [{
 *              id:"{String} 编号Id",
 *              name:"{String} 省份名称",
 *              code:"{String} 省份编码",
 *              parent:"{String} 父级编码"
 *          }]
 *      }]
 * }
 * */
router.all('/common/provinceList',function(req,res,next){
    var provinceLists =[];
    var start = 0;
    var limit = 10;
    while( start < limit){
        provinceLists.push({
            id:['2','3','4'][start % 4],
            name:['北京市','天津市','河北省'][start % 4],
            code:['1','2','3'][start % 4],
            parent:0,
            firstLetter:['B','T','H']
        })
        start++;
    }
    var resultValue = {
        code: 0,
        text:'ok',
        data:[
            {
                firstLetter:'B',
                provinceList:[
                    {id:'2',name:'北京市',code:'1',parent:0}
                ]
            },
            {
                firstLetter:'T',
                provinceList:[
                    {id:'3',name:'天津市',code:'2',parent:0}
                ]
            },
            {
                firstLetter:'H',
                provinceList:[
                    {id:'4',name:'河北省',code:'3',parent:0}
                ]
            }
        ]
    }
    res.json(resultValue);
});

/**
 * @fakedoc xtz.得到银行卡开户所在省份城市列表
 *
 * @name common.cityList
 * @href common/cityList
 *
 * @input.post {String} client              客户端统计参数（common/client）
 * @input.post {String} provinceCode        省份编码
 *
 * @description
 *
 * https://localhost:5000/common/cityList
 *
 * https://fakeapi.asterlake.cn:5000/common/cityList
 *
 * @output {json} 得到银行卡的开户省份列表
 *{
 *      code:"{int} 状态代码（0表示成功，其它值表示失败）",
 *      text:"{String} 状态描述",
 *      data:[{
 *          firstLetter:"{String} 城市拼音的首字母（大写）",
 *          cityList:
  *          [{
  *             id:"{String} 编号Id",
 *              name:"{String} 城市名称",
 *              code:"{String} 城市编码",
 *              parent:"{String} 父级（省份）编码"
 *          }]
 *      }]
 * }
 * */
router.all('/common/cityList',function(req,res,next){
    var resultValue = {
        code: 0,
        text:'ok',
        data:[
            {   firstLetter:'B',
                cityList: [
                    {id:'36',name:'北京',code:'1001',parent:'1',firstLetter:'B'}
                ]
            },
            {   firstLetter:'T',
                cityList: [
                    {id:'37',name:'天津',code:'1002',parent:'2',firstLetter:'T'},
                    {id:'39',name:'唐山',code:'1004',parent:'2',firstLetter:'T'}
                ]
            },
            {   firstLetter:'S',
                cityList: [
                    {id:'38',name:'石家庄',code:'1003',parent:'2',firstLetter:'S'}
                ]
            }
        ]
    }
    res.json(resultValue);
})

/**
 * @fakedoc xtz.银行分行查询
 *
 * @name common.branchBankName
 * @href common/branchBankName
 *
 * @input.post {String} client                  客户端统计参数（common/client）
 * @input.post {String} provinceName            省份名称
 * @input.post {String} cityName                城市名称
 * @input.post {String} bankName                银行名称
 * @input.post {String} branchName              银行分行名称
 *
 * @description
 *
 * https://localhost:5000/common/branchBankName
 *
 * https://fakeapi.asterlake.cn:5000/common/branchBankName
 *
 * @output {json} 得到银行卡的开户省份列表(数据示例为 安徽-合肥-交通银行-某分行)
 *{
 *      code:"{int} 状态代码（0表示成功，其它值表示失败）",
 *      text:"{String} 状态描述",
 *      data:[ "{String} 字符串数组"]
 * }
 * */
router.all('/common/branchBankName',function(req,res,next){
    var resultValue = {
        code: 0,
        text:'ok',
        data:['交通银行安徽省分行','交通银行安徽省分行营业部','交通银行合肥三孝口支行','交通银行股份有限公司合肥滨湖新区支行',
               '交通银行合肥寿春路桥支行','交通银行股份有限公司合肥临泉路支行','交通银行合肥南七支行','交通银行股份有限公司合肥屯溪路支行']
    }
    res.json(resultValue);
});

module.exports = router;