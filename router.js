/**
 *
 * Created by yanhaoqi on 2017/7/22.
 */
function route(handle,pathname){
    console.log('route a request for a pathname', pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname]();
    }else{
        console.log('该路由没有对应的请求处理程序');
        return '404 not found  兄弟你走错路由了'
    }
}
exports.route = route;