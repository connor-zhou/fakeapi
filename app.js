var express = require('express');
var path =require('path');
var bodyParser = require('body-parser');

//fakes
var fakeProject  = require('./api/project');
var fakeAssignment  = require('./api/assignment');
var fakeYeepay  = require('./api/yeepay');
var fakeEvent  = require('./api/event');
var fakeAccount  = require('./api/account');
var fakeMore  = require('./api/more');
var fakeMall  = require('./api/mall');
var fakeCommon  = require('./api/common');
var fakeWechat  = require('./api/wechat');

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function(req, res, next) {//fake cros
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/', fakeProject);
app.use('/', fakeAssignment);
app.use('/', fakeYeepay);
app.use('/', fakeEvent);
app.use('/', fakeAccount);
app.use('/', fakeMore);
app.use('/', fakeMall);
app.use('/', fakeCommon);
app.use('/', fakeWechat);

//livereload
if(app.get('env') == 'development'){
    app.use(require('connect-livereload')());
}
app.use('/fakedocs',express.static(path.join(__dirname, 'fakedocs')));



module.exports = app;