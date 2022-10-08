/*服务器端node.js代码
需在命令提示符(DOS)中的本文件目录下输入node get-json.js
将03get-json.html在浏览器中打开
*/
var http= require('http');
var server= http.createServer(function(req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");           //跨源访问
    //响应内容的类型和字符编码。注意text/json是非官方写法，很多库对其支持，但不建议用
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    //向客户端返回json格式的响应内容
    res.write('{"id": "5", "name": "比尔盖茨"}');
    res.end();          //结束响应
});
server.listen(90);    //启动服务器，在指定端口监听