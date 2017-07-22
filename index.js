/**
 * Created by yanhaoqi on 2017/7/22.
 */
var server = require('./server');
var router = require('./router');
//把router.js的route函数作为参数传入start函数中
server.start(router.route);