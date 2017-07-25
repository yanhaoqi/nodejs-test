var http = require('http');
var url = require('url');
function start(route,handle){
    function onRequest(request,response){
        var pathName = url.parse(request.url).pathname;
        if(pathName != '/favicon.ico'){
            console.log('请求的路径是=====' + pathName);
            route(handle,pathName,response,request);
        }
    };
    http.createServer(onRequest).listen(8888);
    console.log('server start============')
};
exports.start = start;