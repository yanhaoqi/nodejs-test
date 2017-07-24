/**
 *
 * Created by yanhaoqi on 2017/7/22.
 */
function route(handle,pathname,response){
    console.log('route a request for a pathname', pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](response);
    }else{
        console.log('该路由没有对应的请求处理程序');
        //设置页面内容是html 编码格式是UTF-8
        response.setHeader('Content-type','text/html;charset = UTF-8');
        response.write('404 not found  兄弟你走错路由了');
        response.end();
    }
}
exports.route = route;