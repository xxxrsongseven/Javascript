//封装一个函数，读取文件内容
function myReadFile(path){
    return new Promise((resolve,reject) => {
        require('fs').readFile(path,(err,data)=>{
            if(err)reject(err);
            resolve(data)
        })
    })
}
myReadFile('./resource/content.text').then(value=>{
    console.log(value.toString());
},err=>{
    console.warn(err);
})