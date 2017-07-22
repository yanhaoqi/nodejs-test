/**
 *
 * Created by yanhaoqi on 2017/7/22.
 */
function route(handle,pathname){
    console.log('route a request for a pathname', pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else{
        console.log('该路由没有对应的请求处理程序');
    }
}
exports.route = route;