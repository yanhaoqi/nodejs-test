/**
 * Created by yanhaoqi on 2017/7/22.
 */
var exec = require('child_process').exec;
function start(response){
    console.log("request handler 'start' was called");
    exec('find /',function(error,stdout,stderr){
        response.setHeader('Content-type','text/html;charset=UTF-8');
        response.write(stdout);
        response.end();
        console.log('耗时操作 开始执行')
    });
    console.log('我是 耗时操作 后面的代码')
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