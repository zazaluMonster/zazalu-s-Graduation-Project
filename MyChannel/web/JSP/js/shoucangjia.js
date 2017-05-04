
$(document).ready(function () {

    //ajax请求获取该用户的收藏夹商品列表
    $.ajax({
        url: '/MyChannel/favoriteAction_getUserFavorite.action',
        type: 'GET',
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

    function succFunction(tt) {
        //将拿到的数据，写一个for循环，循环的把数据放入
        //先删除所有的li
        if ($(".personalInformationRightDivDown").length != 0) {
            $(".personalInformationRightDivDown").remove();
        }
        var json = eval("(" + tt + ")"); //数组
        var tt = "";
        var i = 0;
        $.each(json.favoriteList, function (index, item) {
            console.log("处理" + item.GoodId);
            $("#personalInformationRightDivUl").append(
                "<li class='personalInformationRightDivDown' id='" + "personalInformationRightDivDown" + i + "'>" +
                " <div class='personalInformation-goodsDiv'>" +
                "<div class='personalInformation-goodsId'>商品名: " + item.GoodName + "</div>" +
                "<div class='personalInformation-goodsdescrible'>商品描述: " + item.GoodDescrible + "</div>" +
                "</div>" +
                "<div class='personalInformation-buttons-div'>" +
                "<div class='personalInformation-buttons' id='goumaiciwu" + i + "' ><i class='icon icon-truck' style='margin-right: 8px;'></i>前往购买</div>" +
                "<div class='personalInformation-buttons' id='shanchuciwu" + i + "'><i class='icon icon-truck' style='margin-right: 8px;'></i>取消收藏</div>" +
                "</div>" +
                "</li>");
            //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
            $("#personalInformationRightDivDown" + i).mouseenter(function () {
                $("#personalInformationLeftDiv").fadeOut(200, "swing", function () {
                    $("#personalInformationHeadImg").attr("src", item.GoodImgUrl164);
                    $("#personalInformationLevel").text(item.GoodName);
                    $("#personalInformationLeftDivDown-first").text("商品价格: " + item.GoodPrice);
                    $("#personalInformationLeftDivDown-second").text("商品库存: " + item.GoodStock);
                    $("#personalInformationLeftDivDown-third").text("打折率: " + item.GoodDiscount);
                    $("#personalInformationLeftDivDown-fourth").text("已收藏该商品");
                });
                $("#personalInformationLeftDiv").fadeIn(200, "swing");
            });
            // 购买此物按钮
            $("#goumaiciwu" + i).click(function () {
                window.location.href="/MyChannel/goodAction_toGoodPage.action?goodId="+item.GoodId;
            });

            /***
             * 取消收藏模块开始
             */

            $("#shanchuciwu" + i).click(function () {
                //点击取消收藏 会去删除对应此用户的该收藏
                //ajax请求
                $.ajax({
                    method: "POST",
                    url: "/MyChannel/favoriteAction_deleteFavorite.action",
                    data: { userName: $("#user-nav-userHeadId").text() ,goodId: item.GoodId }
                })
                    .done(function( msg ) {
                        if(msg === "deleteFavorite success"){
                            console.log("删除收藏成功");
                            //刷新此页面
                            window.location.reload();
                        }else {
                            console.log("删除收藏失败 请检查异常栈 sad" + msg);
                        }
                    });
                //ajax请求结束
            });
            /***
             * 取消收藏模块结束
             */
            i = i + 1;
            $(".personalInformationRightDivDown").animate({opacity: 1}, 800, "swing");
        });
    }


});