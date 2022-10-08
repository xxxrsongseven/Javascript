const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8')
    if (req.url==='/'||req.url==='/index.html') {
        res.end(`<h1>主页</h1>`)
    }else if(req.url==='/about.html'){
        res.end(`<h1>关于</h1>`)
    }else{
        res.end(`<h1>404 NOT FOUND</h1>`)
    }
})
server.listen('80',()=>{
    console.log('server is running');
})