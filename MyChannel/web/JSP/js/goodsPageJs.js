var rdd_evaluateId;

$(document).ready(function () {

    $("#goodsInfomationMiddleDiv-first").click(function () {
        //添加被click的效果
        $(this).addClass("goodsInfomationMiddleDiv-first-select");
        $("#goodsInformationMiddleDiv-first-Head").css("border-left", "1px solid #b00000");
        //移除其他的单位的click效果
        $("#goodsInfomationMiddleDiv-second").removeClass("goodsInfomationMiddleDiv-second-select");
        $("#goodsInformationMiddleDiv-second-Head").css("border-left", "none");

    });

    $("#goodsInfomationMiddleDiv-second").click(function () {
        //添加被click的效果
        $(this).addClass("goodsInfomationMiddleDiv-second-select");
        $("#goodsInformationMiddleDiv-second-Head").css("border-left", "1px solid #b00000");
        //移除其他的单位的click效果
        $("#goodsInfomationMiddleDiv-first").removeClass("goodsInfomationMiddleDiv-first-select");
        $("#goodsInformationMiddleDiv-first-Head").css("border-left", "none");
    });

    $("#goodsInfomationMiddleDiv-first").click();

    // 净含量选择
    $(".NetWeightLi").click(function () {
        // 选中动画效果实现
        var s = $(".NetWeightLi-select");
        s.removeClass("NetWeightLi-select");
        s.addClass("NetWeightLi");
        $(this).removeClass("NetWeightLi");
        $(this).addClass("NetWeightLi-select");

        //如果加入购物车是 加入成功! 那么改回去
        if ($("#addShoppingCartSpan").text() === "加 入 成 功 !") {
            $("#addShoppingCartLi").removeClass("bg_dg");
            $("#addShoppingCartLi").addClass("bg_lo");
            $("#addShoppingCartButton").find("i").removeClass("icon-ok");
            $("#addShoppingCartButton").find("i").addClass("icon-shopping-cart");
            $("#addShoppingCartSpan").text("加 入 购 物 车");
        }

        // 将选中的净含量 填充到隐藏的表单域中
        // 获取选中的净含量
        var userSelectNetWeight = $(this).text();
        console.log("用户选中了" + userSelectNetWeight + "净含量");
        // 填入表单中
        $("#goodNetWeight").val(userSelectNetWeight);

    });

    // 颜色选择
    $(".ColorLi").click(function () {
        //选中动画效果实现
        var s = $(".ColorLi-select");
        s.removeClass("ColorLi-select");
        s.addClass("ColorLi");
        $(this).removeClass("ColorLi");
        $(this).addClass("ColorLi-select");

        //如果加入购物车是 加入成功! 那么改回去
        if ($("#addShoppingCartSpan").text() === "加 入 成 功 !") {
            $("#addShoppingCartLi").removeClass("bg_dg");
            $("#addShoppingCartLi").addClass("bg_lo");
            $("#addShoppingCartButton").find("i").removeClass("icon-ok");
            $("#addShoppingCartButton").find("i").addClass("icon-shopping-cart");
            $("#addShoppingCartSpan").text("加 入 购 物 车");
        }

        //将选中的颜色 填充到表单中
        //获取选中的颜色
        var userSelectColor = $(this).css("background-color");
        console.log("用户选中了" + userSelectColor + "颜色");
        //填入表单中
        $("#goodColor").val(userSelectColor);
    });

    // 数量选择
    $(".goodsInformationBuyQuantityAdd").click(function () {
        //如果加入购物车是 加入成功! 那么改回去
        if ($("#addShoppingCartSpan").text() === "加 入 成 功 !") {
            $("#addShoppingCartLi").removeClass("bg_dg");
            $("#addShoppingCartLi").addClass("bg_lo");
            $("#addShoppingCartButton").find("i").removeClass("icon-ok");
            $("#addShoppingCartButton").find("i").addClass("icon-shopping-cart");
            $("#addShoppingCartSpan").text("加 入 购 物 车");
        }

        var s = Number($(".goodsInformationBuyQuantity").text());
        $(".goodsInformationBuyQuantity").text(s + 1);
    });

    $(".goodsInformationBuyQuantityReduce").click(function () {
        //如果加入购物车是 加入成功! 那么改回去
        if ($("#addShoppingCartSpan").text() === "加 入 成 功 !") {
            $("#addShoppingCartLi").removeClass("bg_dg");
            $("#addShoppingCartLi").addClass("bg_lo");
            $("#addShoppingCartButton").find("i").removeClass("icon-ok");
            $("#addShoppingCartButton").find("i").addClass("icon-shopping-cart");
            $("#addShoppingCartSpan").text("加 入 购 物 车");
        }
        var s = Number($(".goodsInformationBuyQuantity").text());
        if (s >= 2) {
            $(".goodsInformationBuyQuantity").text(s - 1);
        }
    });


    //点击累计评论 把右边的div变换成评论区
    $("#goodsInformationMiddleDiv-second-Head").click(function () {
        //css变换
        $("#goodsInformationRightDiv").css("display", "none");
        $("#goodsEvaluateRightDiv").css("display", "block");

        //开始加载属于这个商品的所有父评论
        $.ajax({
            url: '/MyChannel/evaluateAction_getFatherEvaluateListByGoodId.action',
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
            console.log(tt);
            if ($(".goodsEvaluateLi").length != 0) {
                $(".goodsEvaluateLi").remove();
            }
            var json = eval("(" + tt + ")"); //数组
            var tt = "";
            var i = 0;
            $.each(json.evaluateListByGoodId, function (index, item) {
                console.log("处理" + item.EvaluateId);
                var ie = item.EvaluateId;
                $(".goodsEvaluateUl").append("<li class='goodsEvaluateLi'>" +
                    "<div id='goodsEvaluateMainDiv" + ie + "' class='goodsEvaluateliLeftDiv'> " +
                    "<a> " +
                    "<img src='" + item.UserHeadUrl60 + "' style='float: left;margin: 12px;' /> " +
                    "</a> " +
                    "<div class='goodsEvaluateUserName'>" + item.UserName + "</div> " +
                    "<div class='goodsEvaluateCreatedTime'>" + item.EvaluateTime + "</div> " +
                    "<div class='goodsEvaluateContent'>" + item.EvaluateMessage + "</div> " +
                    "<div id='goodsEvaluateReplyButton"+ie+"' class='goodsEvaluateReplyButton'>回复此主题 " +
                    "</div>" +
                    "</li>");

                //判断是否有上传的图片
                if (item.EvaluateImgUrl !== "null") {
                    //说明有图片 那么显示

                    //先把图片显示的div的框架搭好
                    $("#goodsEvaluateMainDiv" + ie).append("<div class='goodsEvaluateContent'> " +
                        "<ul id='goodsEvaluateImgUl" + ie + "' class='goodsEvaluateImgUl'> " +
                        "</ul> " +
                        "<div class='goodsEvaluateImgViewDiv'> " +
                        "<img style='width: 0%;padding-left: 12px;padding-bottom: 12px;display: none' /> " +
                        "</div> " +
                        "</div>");

                    //查看有多少图片
                    var evaluateImgUrl = item.EvaluateImgUrl;
                    var evaluateImgUrlArr = evaluateImgUrl.split("&");
                    $.each(evaluateImgUrlArr, function (index, urlItem) {
                        if (urlItem !== "") {
                            console.log("要填充的图片有 " + urlItem);
                            //填充到图片div中显示
                            $("#goodsEvaluateImgUl" + ie).append("<li class='goodsEvaluateImgLi'> " +
                                "<img id='goodsEvaluateImg" + ie + "' src='" + urlItem + "' class='goodsEvaluateImg' /> " +
                                "</li> ")
                        }
                    })
                }
                // 是否放大回复图片的toggle值
                var imgToggle = 0;
                // 这种写法是有并发问题的
                $("#goodsEvaluateImg" + ie).click(function () {
                    var url = $(this).attr("src");
                    var img = $(this).parent().parent().next().find("img");
                    if (imgToggle == 0) {
                        imgToggle = imgToggle + 1;
                        $(".goodsEvaluateImg").css("border", "2px solid #f2f2f2");
                        $(this).css("border", "2px solid #c40000");

                        img.attr("src", url);
                        img.css("display", "block");
                        img.animate({width: "50%"}, 500, "swing");
                    } else {
                        imgToggle = 0;
                        $(this).css("border", "2px solid #f2f2f2");
                        img.css("display", "none");
                        img.css("width", "0%");
                        img.attr("src", "");
                    }

                });

                //搜索这个评论的子评论
                //子评论ajax请求
                $.ajax({
                    method: "POST",
                    url: '/MyChannel/evaluateAction_getChildEvaluateListByFatherEvaluateId.action',
                    data: { fatherEvaluateId: ie }
                })
                    .done(function( tt ) {
                        var json = eval("(" + tt + ")"); //数组
                        var tt = "";
                        var i = 0;
                        if(json.childEvaluateList.length !== 0){
                            //加入回复框架
                            $("#goodsEvaluateMainDiv"+ie).append("<ul id='goodsEvaluateReplyUl"+ie+"' class='goodsEvaluateReplyUl'> </ul>")
                        }
                        $.each(json.childEvaluateList, function (childIndex, childItem) {
                            //添加回复
                            $("#goodsEvaluateReplyUl"+ie).append("<li class='goodsEvaluateReplyLi'> " +
                                "<div id='goodsEvaluateMainDiv"+childItem.EvaluateId+"' style='min-height: 100px;'> " +
                                    "<a> " +
                                        "<img src='"+childItem.UserHeadUrl60+"' style='float: left;margin: 12px;' /> " +
                                    "</a> " +
                                    "<div class='goodsEvaluateUserName'>"+childItem.UserName+"</div> " +
                                    "<div class='goodsEvaluateCreatedTime'>"+childItem.EvaluateTime+"</div> " +
                                    "<div class='goodsEvaluateContent'>"+childItem.EvaluateMessage+"</div> " +
                                "</div> " +
                                "</li>");
                            //判断是否有上传的图片
                            if (childItem.EvaluateImgUrl !== "null") {
                                //说明有图片 那么显示
                                //先把图片显示的div的框架搭好
                                $("#goodsEvaluateMainDiv" + childItem.EvaluateId).append("<div class='goodsEvaluateContent'> " +
                                    "<ul id='goodsEvaluateImgUl" + childItem.EvaluateId + "' class='goodsEvaluateImgUl'> " +
                                    "</ul> " +
                                    "<div class='goodsEvaluateImgViewDiv'> " +
                                    "<img style='width: 0%;padding-left: 12px;padding-bottom: 12px;display: none' /> " +
                                    "</div> " +
                                    "</div>");
                                //查看有多少图片
                                var childEvaluateImgUrl = childItem.EvaluateImgUrl;
                                var childEvaluateImgUrlArr = childEvaluateImgUrl.split("&");
                                $.each(childEvaluateImgUrlArr, function (index, urlItem) {
                                    if (urlItem !== "") {
                                        console.log("要填充的图片有 " + urlItem);
                                        //填充到图片div中显示
                                        $("#goodsEvaluateImgUl" + childItem.EvaluateId).append("<li class='goodsEvaluateImgLi'> " +
                                            "<img id='goodsEvaluateImg" + childItem.EvaluateId + "' src='" + urlItem + "' class='goodsEvaluateImg' /> " +
                                            "</li> ")
                                    }
                                })
                            }

                            // 是否放大回复图片（子评论）的toggle值
                            var imgToggle = 0;
                            // 这种写法是有并发问题的
                            $("#goodsEvaluateImg" + childItem.EvaluateId).click(function () {
                                var url = $(this).attr("src");
                                var img = $(this).parent().parent().next().find("img");
                                if (imgToggle == 0) {
                                    imgToggle = imgToggle + 1;
                                    $(".goodsEvaluateImg").css("border", "2px solid #f2f2f2");
                                    $(this).css("border", "2px solid #c40000");

                                    img.attr("src", url);
                                    img.css("display", "block");
                                    img.animate({width: "50%"}, 500, "swing");
                                } else {
                                    imgToggle = 0;
                                    $(this).css("border", "2px solid #f2f2f2");
                                    img.css("display", "none");
                                    img.css("width", "0%");
                                    img.attr("src", "");
                                }

                            });

                        });

                    });
                //子评论ajax请求结束
                //子评论相关代码结束

                //回复按钮
                $("#goodsEvaluateReplyButton" + ie).click(function () {
                    //获取哪个评论被点击
                    var evaluateId = $(this).attr('id').substring(24);
                    console.log("被点击的评论id为" + evaluateId);
                    rdd_evaluateId = evaluateId;
                    $("#replyZheZhao").css("display", "block");
                    $("#replyZheZhao").animate({ opacity: ".6" }, 800, "easeInOutQuart");
                    $(".goodsEvaluateReplyDownDiv").animate({ bottom: "0%" }, 800, "easeInOutQuart");
                });
                //回复按钮结束

                i = i + 1;
                $(".goodsEvaluateLi").animate({opacity: 1}, 800, "swing");
                console.log("处理" + ie + "结束");
            });
        }

    });

    //点击宝贝详情 把右边的div变换成购买区
    $("#goodsInformationMiddleDiv-first-Head").click(function () {
        $("#goodsEvaluateRightDiv").css("display", "none");
        $("#goodsInformationRightDiv").css("display", "block");
    });


    //检测是否是喜欢的商品
    //ajax请求
    $.ajax({
        method: "POST",
        url: "/MyChannel/favoriteAction_verifyGoodIsFavorite.action",
        data: {goodId: $("#goodId").val()}
    })
        .done(function (msg) {
            if (msg === "isLike") {
                console.log("该商品为该用户收藏的商品");
                $(".heart").css("background-position", "-1540px 0");
            } else if (msg === "noLike") {
                console.log("该商品为该用户没有收藏的商品");
                $(".heart").css("background-position", "0px 0px");
            } else {
                console.log("检测收藏夹失败 sad 请查看异常栈" + msg);
            }
        });
    //ajax请求结束

    //获取评论数量
    $.ajax({
        method: "POST",
        url: "/MyChannel/evaluateAction_getEvaluateNumberByGoodId.action",
        data: {goodId: $("#goodId").val()}
    })
        .done(function (msg) {
            if (msg === "0") {
                console.log("无评论");
            } else {
                console.log(Number(msg));
                if(Number(msg) > 99){
                    $("#leijipinglun1").text("99+");
                }else {
                    $("#leijipinglun1").text(msg);
                }
                $("#leijipinglun2").text(msg);
            }
        });
    //ajax请求结束



    $(".heart").click(function () {
        if ($(this).css("background-position") === "0px 0px") {
            console.log("添加收藏");
            //ajax发送买方Name和商品id
            $.ajax({
                method: "POST",
                url: "/MyChannel/favoriteAction_addFavorite.action",
                data: {goodId: $("#goodId").val(), userName: $("#user-nav-userHeadId").text()}
            })
                .done(function (msg) {
                    if (msg === "addfavorite success") {
                        // 完成点击收藏商品按钮后，界面变成填充的星星图案 字改成已收藏
                        $(".heart").css("background-position", "-1540px 0");
                    } else {
                        console.log("添加收藏夹失败 请查看异常栈信息\n" + msg);
                        alert("不为人知的错误发生了!请联系程序员!");
                    }
                });
        } else if ($(this).css("background-position") === "-1540px 0px") {
            console.log("删除收藏");
            //ajax发送买方Name和商品id
            $.ajax({
                method: "POST",
                url: "/MyChannel/favoriteAction_deleteFavorite.action",
                data: {goodId: $("#goodId").val(), userName: $("#user-nav-userHeadId").text()}
            })
                .done(function (msg) {
                    if (msg === "deleteFavorite success") {
                        // 删除收藏 图片返回
                        $(".heart").css("background-position", "0px 0");
                    } else {
                        console.log("添加收藏夹失败 请查看异常栈信息\n" + msg);
                        alert("不为人知的错误发生了!请联系程序员!");
                    }
                });
        }
    });


    var getArray = window.location.href.split('?');
    var getUrlParamArray = getArray[1].split('&');
    var getToEvaluateDiv = getUrlParamArray[0].split('=')[1];
    if(getToEvaluateDiv == 1){
        //说明个人信息还不完整
        $("#goodsInfomationMiddleDiv-second").click();
        $("#goodsInformationMiddleDiv-second-Head").click();
    }


});

