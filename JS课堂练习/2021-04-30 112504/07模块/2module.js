// 1导出下面的对象
export let fontsize= {
    size: 16,
    changeFontsize(n) {
        this.size= this.size + n;
        if(this.size < 14) this.size= 14;
        else if(this.size > 22) this.size= 22;
        document.body.style.fontSize = this.size + 'px';
    }
}
