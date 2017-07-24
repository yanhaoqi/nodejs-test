/**
 * Created by yanhaoqi on 2017/7/21.
 */
var http = require('http');
var url = require('url');
//把代表路由和请求处理函数映射关系的handle对象最为start的参数传入
function start(route,handle){
    http.createServer(function(request,response){
        var pathname = url.parse(request.url).pathname;
        if(pathname != '/favicon.ico'){
            console.log('req url 请求路由',pathname);
            route(handle,pathname,response);
        }
    }).listen(8888);
    console.log('server start');
    exports.start = start;
};
exports.start = start;