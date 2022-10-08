let welcome= '欢迎光临招生办！';
function getPeriod(){
    let today = new Date();
    let curHour = today.getHours();
    let message= '';

    if (curHour <6 || curHour >=19) {
        message = '晚上好！';
    } else if (curHour < 11) {
        message = '早上好！';
    } else if (curHour < 13) {
        message = '中午好！';
    } else if (curHour < 19) {
        message = '下午好！';
    }

    return message;
}
