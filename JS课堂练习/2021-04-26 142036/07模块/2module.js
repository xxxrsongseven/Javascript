let size = 16;
// 1导出下面的函数
function changeFontsize(n) {
    size= size + n;
    if(size < 14) size= 14;
    else if(size > 22) size= 22;
    document.body.style.fontSize = size + 'px';
};