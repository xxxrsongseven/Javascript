const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    str = `请求路径是 ${req.url},请求方式是 ${req.method}`
    console.log(str);
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(str)
})
server.listen('80',()=>{
    console.log('server running at 127.0.0.1:80');
})