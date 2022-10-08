const fs = require('fs')
//回调函数形式
/* fs.readFile('./resource/content.text',(err,data) => {
    if(err) throw err;
    console.log(data.toString());
}) */

//Promise
let p = new Promise((resolve,reject ) => {
    fs.readFile('./resource/content.text',(err,data) => {
        //如果出错
        if(err) reject(err);
        resolve(data.toString())
    })
})
    p.then((value) => {
        console.log(value);
    },(err) => {
        console.log(err);
    })