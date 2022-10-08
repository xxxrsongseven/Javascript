function resolveData(data){
    var arr = []
    for (var key in data){
        var str =key+'='+data[key]
        arr.push(str)
    }
    return arr.join('&')
}
function myajax(options){
    var xhr=new XMLHttpRequest()
    //把外界传来的参数对象转化为查询字符串
    var qs=resolveData(options.data)
    if(options.method.toUpperCase()==='GET'){
        xhr.open(options.method,options.url+'?'+qs)
        xhr.send()

    }else if(options.method.toUpperCase()==='POST'){
        xhr.open(options.method,options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}
