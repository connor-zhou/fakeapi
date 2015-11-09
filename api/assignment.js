var express = require('express');
var router = express.Router();
var _ = require('lodash');

/**
 * @fakedoc 债权转让项目分页列表
 * @name assignment.pageList
 * @href /assignment/pageList
 *
 * @description
 * 
 * 根据分页参数和排序参数查询项目列表
 *
 * https://localhost:3000/assignment/pageList?client=asdfaqerq1werqwe&pageSize=10&pageNumber=1
 * 
 * https://fakeapi.fdjf.net:3000/assignment/pageList?client=asdfaqerq1werqwe&pageSize=10&pageNumber=1
 *
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {interger=} [pageSize=10] 		页容量
 * @input.post {interger=} [pageNumber=1] 		页码
 *
 * @output {json} 分页列表
 * {
 * 	code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data: [
 *    {
 *      transferProjectId:"{interger} 转让编号",
 *  	projectId:"{interger} 项目ID",
 *      projectName:"{string} 项目名称",
 *      projectType:"{string} 项目类型",
 *      projectTypeName:"{interger} 项目类型名称",
 *      repaymentMode:"{interger} 还款方式",
 *      repaymentModeName:"{String} 还款方式名称",
 *      amount:"{number} 可投金额",
 *      rate:"{number} 已投百分比(%)",
 *      status:"{int} 状态",
 *      statusName:"{String} 状态名称",
 *      annualizedRate:"{number} 年化利率",
 *      remainingTime:"{number} 剩余期限",
 *      safeguardMode:"{int} 保障方式",
 *      safeguardModeName:"{String} 保障方式名称",
 *		isRecommend:"{String} 是否重点推荐（0是，其它不是）",
 *		isUseTicket:"{String} 是否可用券（0是，其它不是）"
 *    }
 *   ]
 * }
 */
router.all('/assignment/pageList', function (req, res, next) {
    var start = req.body.start || 0;
    var limit = req.body.limit || 10;
    var order = req.body.order;
    var type = req.body.type;

    var projects = [];

    var max = 35;
    var types = ['商圈贷', '车辆抵押', '个人信用贷', '典当融资租赁'];
    while (start < max && limit > 0) {
        var type = Math.floor(Math.random() * 4);
        projects.push({
        	transferProjectId:start,
            projectId: start,
            projectName: types[type] + '-' + start,
            projectType: type,
            projectTypeName: types[type],
            repaymentMode: 1,
            repaymentModeName:  ["等额本息","先息后本","一次性还本付息"][start % 3],
            amount: 1000000,
            rate:56,
            status: [3, 5, 7][start % 3],
            statusName: ["立即投资","还款中","已结束"][start % 3],
            annualizedRate: Math.floor(Math.random() * 20) * 0.01,
            remainingTime: 6,
            safeguardMode:2,
            safeguardModeName: "本息保障",
            isRecommend:['0','1'][start % 2],
            isUseTicket:['0','1'][start % 2]
        });
        start++;
        limit--;
    }

    if (start > max) {
        projects.push(undefined);//no more
    }
    var resultValue = {
    	code: 0,
    	text: 'ok',
    	data: projects
    }
    res.json(resultValue);
});

/**
 * @fakedoc 得到指定项目的详情信息
 *
 * @name assignment.detail
 * @href /assignment/detail
 *
 * @description 
 * 
 * 得到指定项目的详情信息
 * 
 * https://localhost:3000/assignment/detail?client=asdfaqerq1werqwe&transferProjectId=1
 * 
 * https://fakeapi.fdjf.net:3000/assignment/detail?client=asdfaqerq1werqwe&transferProjectId=1
 *
 * @input.post {string} client 				客户端统计参数（common/client）
 * @input.post {interger} transferProjectId 	转让编号
 *
 * @output {json} 项目详情字段
 * {
 *  code:"{int}    状态代码（0表示成功，其它值表示失败）",
 *  text:"{String} 状态描述",
 *  data:{
 *  	transferProjectId:"{interger} 转让编号",
 *  	projectId:"{int} 项目Id",
 *      projectName:"{string} 项目名称",
 *      projectType:"{int} 项目类型",
 *      projectTypeName:"{string} 项目类型名称",
 *      repaymentMode:"{int} 还款方式",
 *      repaymentModeName:"{String} 还款方式名称",
 *      assignAmount:"{number} 债权金额",
 *      amount:"{number} 可投金额",
 *      rate:"{number} 已投百分比(%)",
 *      status:"{int} 状态",
 *      statusName:"{String} 状态名称",
 *      annualizedRate:"{number} 年化利率",
 *      borrowersUser:"{string} 借款人",
 *      remainingTime:"{number} 剩余期限",
 *      startingAmount:"{number} 起投金额",
 *      biddingDeadline:"{date} 投资截止日期",
 *      projectIntroduce:"{string} 项目简介",
 *      useMethod:"{string} 用途",
 *      transferCode:"{string} 转让天数限制",
 *      transferConstraint:"{string} 转让限制描述",
 *      riskInfo:"{html} 风险信息",
 *      aboutFiles:["{string} 文件链接"],
 *      investmentCount:"{int} 投资人数",
 *		isRecommend:"{String} 是否重点推荐（0是，其它不是）",
 *		isUseTicket:"{String} 是否可用券（0是，其它不是）",
 *  }
 * }
 *
 */
router.all('/assignment/detail', function (req, res, next) {
    var transferProjectId = req.body.transferProjectId || 1;
    var types = ['商圈贷', '车辆抵押', '个人信用贷', '典当融资租赁'];
    var type = Math.floor(Math.random() * 4);
    var duration = Math.floor(Math.random() * 20 + 2);
    var project = {
    	transferProjectId:transferProjectId,
    	projectId: 1,
    	projectName: '个人信用贷款-' + transferProjectId,
        projectType: type,
        projectTypeName: types[type],
        repaymentMode: 1,
        repaymentModeName: Math.floor(Math.random() * 3) == 1 ?  "等额本息" : "一次性还本付息",
        assignAmount: 1000000,
        amount: 360000,
        rate: 65,
        status: [3, 5, 7][transferProjectId % 3],
        statusName: Math.floor(Math.random() * 3) == 1 ?  "立即投资":"还款中",
        annualizedRate: Math.floor(Math.random() * 20) * 0.01,
        borrowersUser: 'D*s*d*s',
        projectDuration: duration,
        startingAmount: [100, 1000][Math.floor(Math.random() * 2)],
        biddingDeadline: '2015-09-05',
        projectIntroduce: 'some text一些介绍',
        useMethod: '资金周转',
        transferCode: 3,
        transferConstraint: '投资后3天可转让',
        riskInfo: '<h2>项目风险保障方案</h2><p>专业尽调团队对核心企业和必要的融资项目进行360度实地尽职调查，调查报告的数据包括实地调查数据、人民银行征信系统数</p>',
        aboutFiles: (function () {
            var i = 0, f = [];
            while (i++ < 9)f.push('/images/example/about-file-' + i + '.png');
            return f;
        })(),
        investmentCount: 100,
        isNewUser:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        isRecommend:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        isUseTicket:Math.floor(Math.random() * 2) == 1 ? '0' : '1',
        isCanAssign:Math.floor(Math.random() * 2) == 1 ? '0' : '1'
    };
    var resultValue = {
        code: 0,
    	text: 'ok',
    	data: project
    }
    res.json(resultValue);
});

module.exports = router;