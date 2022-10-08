/*服务器端node.js代码
需在命令提示符(DOS)中的本文件目录下输入node get.js
将01get.html在浏览器中打开
*/
let http= require('http');
let server= http.createServer(function(req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");           //跨源访问
    res.setHeader("Content-Type", "text/html;charset=utf-8");   //响应内容的类型和字符编码
    res.write('我是服务器发来的消息');      //向客户端返回响应内容
    res.end();          //结束响应
});
server.listen(90);    //启动服务器，在指定端口监听