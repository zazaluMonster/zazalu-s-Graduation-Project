
$(document).ready(function(){
    var toggle = false;
    $("#headMusicA").click(function(){
        //toggle是个参数，来完成已经被弃用的toggle()方法的功能
        toggle=!toggle;
        //因为我所有的动态操作都是和这个headMusicA标签有关的，为了防止不同的bind函数不互相冲突 实现全部unbind
        $("#headMusicA").unbind("fadeOut");
        $("#headMusicA").unbind("fadeIn");
        if(toggle == true){
            //如果为true 说明还没开始放歌
            var audio = $("#headMusic").get(0);
            var musicLength = audio.duration;
            audio.addEventListener('timeupdate',function(){
                //监听播放变化的监听器方法
                var audio = $("#headMusic").get(0);
                var leftstep =  audio.currentTime / (audio.duration/238);
                $("#headMusicCircle").css("left",(80+leftstep)+"px" );
            },false);
            audio.play();
            $("#headMusicA").fadeOut(600,"swing",function(){
                $("#headMusicI").removeClass("icon icon-music").addClass("icon icon-play");
                $("#headMusicSpan").html("正在播放");
                $("#headMusicProgress").css("display","inline-block");
                $("#headMusicCircle").css("display","inline-block");
                $("#headMusicTitle").css("display","inline-block");
                $("#headMusicA").fadeIn(600,"swing",function(){
                });
            });
        }else{
            //为false 所以要暂停歌曲
            var audio = $("#headMusic").get(0);
            audio.pause();
            $("#headMusicA").fadeOut(600,"swing",function(){
                $("#headMusicI").removeClass("icon icon-play").addClass("icon icon-music");
                $("#headMusicSpan").html("music");
                $("#headMusicProgress").css("display","none");
                $("#headMusicCircle").css("display","none");
                $("#headMusicTitle").css("display","none");
                $("#headMusicA").fadeIn(600,"swing",function(){
                });
            });
        }
    });
});