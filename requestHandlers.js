/**
 * Created by yanhaoqi on 2017/7/22.
 */
var querystring = require('querystring');
var fs = require('fs');
//引入path模块保证项目部署到服务器之后相对路径的准确
var path = require('path');
var formidable = require("formidable")

function start(response){
    console.log("request handler=============== 'start' was called");
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        //    enctype 规定在表单数据发送到服务器之前如何对其进行编码
        '<form action="/upload" enctype="multipart/form-data" '+ 'method="post">'+
        //    type=file 文件上传,multiple 字段可接受多个值
        '<input type="file" name="upload" multiple="multiple">'+
        //    点击按钮，发送数据并跳转到/upload
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.setHeader('content-type','text/html;charset=UTF-8');
    response.write(body);
    response.end();
}

//将start路由表单post来的数据转化为服务器tmp文件夹下test.png
function upload(response, request) {
    console.log("Request handler======================= 'upload' was called.");

    var form = new formidable.IncomingForm();
    //临时路径
    // form.uploadDir='tmp';
    form.parse(request, function(error, fields, files) {
        if(error){
            console.log('form.parse出错了------------------');
            console.log(error);
        }else{
            console.log("form.parse 正确---------------------");

            var body = '<html>'+
                '<head>'+
                '<meta http-equiv="Content-Type" content="text/html; '+
                'charset=UTF-8" />'+
                '</head>'+
                '<body>'+
                //    img的src指向图片资源
                '<img src="/show"/>'+
                '<form action="/start" '+ 'method="post">'+
                '<input type="submit" value="重新上传" />'+
                '</form>'+
                '<form action="/show" '+ 'method="post">'+
                '<input type="submit" value="查看原图" />'+
                '</form>'+
                '</body>'+
                '</html>';

            fs.renameSync(files.upload.path, "./tmp/test.png");
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write("received image:<br/>");
            response.write(body);
            response.end();
        }
    });
}

//读取test.png，设置网页内容为png，显示文件流
function show(response){
    console.log("request handler============== 'show' was called");
    fs.readFile("./tmp/test.png", "binary", function(error, file) {
        if(error) {
            console.log('读取./tmp/test.png  失败=================');
            console.log(error);
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.end();
        } else {
            console.log('读取./tmp/test.png  成功=================');
            //设置网页内容为png
            response.writeHead(200, {"Content-Type": "image/png"});
            //显示文件流
            response.write(file, "binary");
            response.end();
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.show = show;