/**
 * Created by yanhaoqi on 2017/7/22.
 */
var querystring = require('querystring');
var fs = require('fs');
//引入path模块保证项目部署到服务器之后相对路径的准确
var path = require('path');

function start(response,postData){
    console.log("request handler=============== 'start' was called");
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
    console.log("request handler============== 'upload' was called");
    //第一个参数是Content-type 第二个参数是 以什么格式显示和字符集
    response.setHeader('Content-type','text/html;charset=UTF-8');
    response.write('start路由展示表单页中的数据post发送给upload路由，并且在浏览器展示======='+querystring.parse(postData).text);
    response.end();
}

function show(response,postData){
    console.log("request handler============== 'show' was called");
    fs.readFile(path.join(__dirname,'./tmp/test.png'),function(error,file){
        if(error){
            console.log('读取文件错误------------')
            console.log(error)
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.write(error +'/n')
        }else{
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(file,'binary');
            response.end();
            console.log('读取文件成功***************')
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.show = show;