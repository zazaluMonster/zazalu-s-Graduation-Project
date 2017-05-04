
$(document).ready(function(){
    var header = $("#header").width();
    var length = header - 320;
    var windowHeight = $(window).height();

    //改变遮罩div的高度 使其高度包裹所有的页面

    $("#zhezhao").height(windowHeight);
    
    $("#headSearch").focus(function(){
        $("#headList").fadeOut(600,"swing");
        $(this).animate({width:length},800,"swing",function(){
            $("#zhezhao").animate({opacity:0.9},800,"swing");
            $("#zhezhao").css("display","block");
            $("#zhezhao").css("z-index","1000");
        });
        
    });
    // $("#headSearch").blur(function(){
    //     $("#zhezhao").animate({opacity:0},800,"swing",function(){

    //     $("#zhezhao").css("display","none");
    //     $("#zhezhao").css("z-index","-1");
    //     });
    //     $("#headList").fadeIn(800,"swing");
    //     $(this).animate({width:"100px"},600,"swing");
    // });
});