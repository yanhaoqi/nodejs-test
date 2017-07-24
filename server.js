var http = require('http');
var url = require('url');
function start(route,handle){
    function onRequest(request,response){
        var postData = '';
        var pathName = url.parse(request.url).pathname;
        if(pathName != '/favicon.ico'){
            console.log('请求的路径是=====' + pathName);
            request.setEncoding('UTF-8');
            request.addListener('data',function(postDataChunk){
                postData += postDataChunk;
                //当数据量比较大的时候就会看见 data事件的函数回调了很多次
                console.log('大的数据拆分成小的数据块=====')
            });
            request.addListener('end',function(){
                route(handle,pathName,response,postData);
                console.log('大的数据-------拆分完毕')
            });
        }
    };
    http.createServer(onRequest).listen(8888);
    console.log('server start============')
};
exports.start = start;