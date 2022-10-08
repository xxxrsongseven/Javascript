const path = require('path');//路径
const Koa = require('koa');//koa框架
const views = require('koa-views');//ejs模板
const staticServer = require('koa-static');//静态资源
const router = require('koa-router')();//路由
const session = require('koa-session');//session
const app = new Koa();//产生实例

// 加载静态资源文件夹
app.use(staticServer(__dirname , 'public'));

// 加载配置模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

// 配置session
app.keys = ['session'];//用作于session加密处理，配合signed属性的签名key
const CONFIG = {
   key: 'koa:sess',   // cookie的key名称。默认是 koa:sess
   maxAge: 10000,    // session过期时间，以毫秒ms为单位计算。默认值是1天
   autoCommit: true,  // 自动提交到响应头。默认是true
   overwrite: true,   // 是否允许重写。默认是true */
   httpOnly: true,    //是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。默认 true
   signed: true,      // 是否签名。默认是 true
   rolling: true,     // 是否每次响应时刷新Session的有效期。默认false
   renew: false,      // 是否在Session快过期时刷新Session的有效期。默认是 false
};
// 使用中间件
app.use(session(CONFIG, app));

app.use(router.routes());
app.use(router.allowedMethods());

//路由
router.get('/', async (ctx) => {
    let user = 'a';    // 向模板传递参数
    let pwd= 'b'
    await ctx.render('index', { // 渲染 模板
      user, pwd
    });
})

router.get('/news', async (ctx) => {
  if(ctx.session.username){
    let title = 'koa框架'; // 向模板传递参数
    let content= 'koa框架是node的新一代框架'
    await ctx.render('news', { // 渲染 模板
      title, content
    })
  } else {
    ctx.body='还未登录';
  }
})

router.get('/login',async (ctx, next)=>{
  if (ctx.path === '/favicon.ico') return;// 忽略favicon
  let query= ctx.request.query;
  //const { username,password }=ctx.request.body //获取post请求中的参数
  if(query.username=='a' && query.password=='b'){
    // 添加session
    ctx.session.username = query.username;
    ctx.body= query.username + '登录成功';
    return 
  }
  ctx.body='登录失败';
})

app.listen(90)