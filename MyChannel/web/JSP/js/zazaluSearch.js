
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
    $("#headSearch").blur(function(){
        if($("#headSearch").val() !== ""){

        }else {
            $("#zhezhao").animate({opacity: 0}, 800, "swing", function () {

                $("#zhezhao").css("display", "none");
                $("#zhezhao").css("z-index", "-1");
            });
            $("#headList").fadeIn(800, "swing");
            $(this).animate({width: "100px"}, 600, "swing");
            //清空搜索结果li 然后变回原来的推荐商品
        }
    });



    //点击搜索按钮
    $("#topSearchButton").click(function () {
        //读取input中的输入内容
        var searchStr = $("#headSearch").val();
        if(searchStr !== ""){
            //发送给后台然后查询商品
            $.ajax({
                url: '/MyChannel/goodAction_getGoodListByGoodName.action',
                type: 'GET',
                data: { goodName: searchStr},
                timeout: 1000,
                cache: false,
                crossDomain: true,
                beforeSend: LoadFunction, //加载执行方法
                error: erryFunction,  //错误执行方法
                success: succFunction //成功执行方法
            });

            function LoadFunction() {
                //在请求数据的时候 要显示请求中字样告知用户等待片刻
                console.log("loading...");
            }
            function erryFunction() {
                console.log("error!");
            }
            function succFunction(searchResult) {
                var json = eval("("+searchResult+")"); //数组
                var searchResult = "";
                //从推你喜欢改变成搜索结果
                $("#zhezhaoId").html("搜索结果 " +
                    "<small>根据'"+searchStr+"'搜索后得到的结果如下</small>")
                //清除原来的li
                if($(".zhezhaoLikeLi").length !== 0){
                    $(".zhezhaoLikeLi").remove();
                }
                $.each(json.good , function (index,item) {
                    $("#zhezhaoLike").append("<li id='zhezhaoLikeLi"+item.GoodId+"' class='zhezhaoLikeLi'> " +
                        "<div> " +
                            "<div class='zhezhaoLikePicture'>" +
                                "<img class='zhezhaoLikeImg' src='"+item.GoodImgUrl164+"' alt='' >" +
                            "</div> " +
                            "<div class='zhezhaoLIkeDescrible'> " +
                                "<div class='zhezhaoLIkeDescribleTitle'><a href='/MyChannel/goodAction_toGoodPage.action?goodId="+item.GoodId+"'>"+item.GoodName+"</a></div> " +
                                "<div class='zhezhaoLIkeDescribleSmall'>"+item.GoodDescrible+"</div> " +
                            "</div> " +
                        "</div> " +
                        "</li>");

                    $("#zhezhaoLikeLi"+item.GoodId).animate({opacity : 1},400,"swing");
                });


            }
        }
    });

});