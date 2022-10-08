const util = require('util');
//引入fs
const fs = require('fs')
let myReadFile=util.promisify(fs.readFile);
myReadFile('./resource/content.text').then(value=>{
    console.log(value.toString());
},(err)=>{
    console.log(err);
})