/**
 * Created by yanhaoqi on 2017/7/22.
 */
var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandlers');

var handle = {};
//对象属性的键 是路由字符串，值 是对应的请求处理函数  --将不同的路由映射到不同的请求处理函数
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;
handle['/show'] = requestHandler.show;
//把router.js的route函数作为参数传入start函数中
server.start(router.route,handle);