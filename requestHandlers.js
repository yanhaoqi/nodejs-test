/**
 * Created by yanhaoqi on 2017/7/22.
 */
var querystring = require('querystring');
function start(response,postData){
    console.log("request handler 'start' was called");
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        //    action 向哪个路由发送表单的数据并跳转到该路由，数据字段名是text，一般是向本页所在路由发送数据，action='#'或不写该attribute method 发送数据的方式
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        //    注意是 submit
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.setHeader('content-type','text/html;charset=UTF-8');
    response.write(body);
    response.end();
}
function upload(response,postData){
    console.log("request handler 'upload' was called");
    //第一个参数是Content-type 第二个参数是 以什么格式显示和字符集
    response.setHeader('Content-type','text/html;charset=UTF-8');
    response.write('start路由展示表单页中的数据post发送给upload路由，并且在浏览器展示======='+querystring.parse(postData).text);
    response.end();
}
exports.start = start;
exports.upload = upload;