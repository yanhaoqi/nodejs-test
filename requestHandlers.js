/**
 * Created by yanhaoqi on 2017/7/22.
 */
function start(){
    console.log("request handler 'start' was called");
}
function upload(){
    console.log("request handler 'upload' was called");
}
exports.start = start;
exports.upload = upload;