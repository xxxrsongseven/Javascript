/* 新建XMLHttpRequest对象，旧版本IE浏览器新建方式不同，但他们都包含相同的方法和属性。*/
//IE9及非IE浏览器，支持XMLHttpRequest对象。
if (window.XMLHttpRequest){
    var xhr = new XMLHttpRequest();
}
// 兼容IE老版本浏览器，支持ActiveXObject对象。随着IE的消失，下面代码不再需要。
else if (window.ActiveXObject){
    try{
        var xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e){
        try{
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e)
        { }
    }
}