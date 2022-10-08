$(function(){
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
    //为发送按钮绑定鼠标点击事件
    $('#btnSend').on('click',function(){
        var text=$('#ipt').val().trim()
        if(text.length<=0){
            alert('发送消息为空')
            $('#ipt').val('')
        }else{
            //用户输入，追加到页面上
            $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>'+text+'</span></li>')
            $('#ipt').val('')
            //发起请求，获取聊天内容
            getMsg(text)
            //重置滚动条位置
            resetui()
        }
    })
    //获取聊天机器人发送回来的消息
    function getMsg(text){
        $.ajax({
            method:'GET',
            url:'http://www.liulongbin.top:3006/api/robot',
            data:{
                spoken:text
            },
            success:function(res){
                res.data.info.text
                $('#talk_list').append('<li class="left_word"><img src="img/person01.png"/><span>'+res.data.info.text+'</span></li>')
                resetui()
                //获取声音
                getVoice(res.data.info.text)
            }
        })
    }
    //文字转化为语音播放
    function getVoice(text){
        $.ajax({
            type:'GET',
            url:'http://www.liulongbin.top:3006/api/synthesize',
            data:{
                text:text
            },
            success:function(res){
                if(res.status==200){
                    var voice=res.voiceUrl
                    $('#audio').attr('src',voice)
                }
            }
        })
    }

    //回车发消息
    $('#ipt').on('keyup',function(e){
        if(e.keyCode==13){
            $('#btnSend').click()
        }
    })
  })