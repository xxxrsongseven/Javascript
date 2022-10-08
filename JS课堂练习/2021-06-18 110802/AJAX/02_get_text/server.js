/*node.js代码
需在命令提示符(DOS)中的本文件目录下输入node server.js
将index.html在浏览器中打开
*/
var http= require('http');
var server= http.createServer(function(req,res) {
    var id=Math.floor(Math.random()*(20-1+1)+1);    //随机数
    id=id.toString();

    res.setHeader("Access-Control-Allow-Origin","*");           //跨源访问
    res.setHeader("Content-Type", "text/html;charset=utf-8");   //响应内容的类型和字符编码
    res.write(id);      //向客户端返回响应内容
    res.end();          //结束响应
});
server.listen(90);    //启动服务器，在指定端口监听