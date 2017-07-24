/**
 * Created by yanhaoqi on 2017/7/22.
 */
var exec = require('child_process').exec;
function start(response){
    console.log("request handler 'start' was called");
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.setHeader('content-type','text/html;charset=UTF-8');
    response.write(body);
    response.end();
}
function upload(response){
    console.log("request handler 'upload' was called");
    //第一个参数是Content-type 第二个参数是 以什么格式显示和字符集
    response.setHeader('Content-type','text/html;charset=UTF-8');
    response.write('我是upload页 =====================');
    response.end();
}
exports.start = start;
exports.upload = upload;