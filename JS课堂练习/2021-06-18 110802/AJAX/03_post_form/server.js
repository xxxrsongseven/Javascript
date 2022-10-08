/*node.js代码
需在命令提示符(DOS)中的本文件目录下输入node server.js
将index.html在浏览器中打开
*/
var http= require('http');
var qs= require('querystring');//引入查询串解析模块

var server= http.createServer(function(req,res) {
    var body = '', username='', password='';
    req.setEncoding('utf8'); //请求字符串编码
    req.on('data', function (chunk) {   //接收到数据时
        body += chunk;
    });
    req.on('end', function () {         //实收数据完时
        var obj = qs.parse(body);
        username = obj.username;
        password = obj.password;
        show();
    });

    function show() {
        res.setHeader("Access-Control-Allow-Origin", "*");           //跨源访问
        res.setHeader("Content-Type", "text/html;charset=utf-8");   //响应内容的类型和字符编码
        if(username=="ajax" && password=="jquery"){
            res.write('{"user":'+"\""+username+"\""+',"flag":"pass"}');   //向客户端返回响应内容
        }
        else{
            res.write('{"flag":"error"}');    //向客户端返回响应内容
        }
        res.end();          //结束响应
    }
});
server.listen(8765);    //启动服务器，在指定端口监听