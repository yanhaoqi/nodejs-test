/**
 * Created by yanhaoqi on 2017/7/21.
 */
var http = require('http');
var url = require('url');
//把代表路由和请求处理函数映射关系的handle对象最为start的参数传入
function start(route,handle){
    http.createServer(function(request,response){
        console.log('request recived 收到请求');
        var pathname = url.parse(request.url).pathname;
        if(pathname != '/favicon.ico'){
            console.log('req url 请求路由',pathname);
            //把handle作为参数传入route
            route(handle,pathname);
            response.setHeader('Content-type','text/html;charset = UTF-8');
            // response.writeHead(200,{'Content-type':'text/plain'});
            response.write('HELLO WORLD 闫浩奇');
            response.end();
        }
    }).listen(8888);
    console.log('server start')
};
exports.start = start