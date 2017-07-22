/**
 * Created by yanhaoqi on 2017/7/22.
 */
function start(){
    function sleep(seconds){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + seconds){}
    }
    console.log("request handler 'start' was called");
    //while循环10秒，这是阻塞。setTimeout是异步，注意阻塞和异步的区别
    sleep(10000);
    console.log('终于循环结束了');
    return "哈哈 我是start";
}
function upload(){
    console.log("request handler 'upload' was called");
    return 'upload-----let us go';
}
exports.start = start;
exports.upload = upload;