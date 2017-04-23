
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


    $(".NetWeightLi").click(function () {
        var s = $(".NetWeightLi-select");
        s.removeClass("NetWeightLi-select");
        s.addClass("NetWeightLi");
        $(this).removeClass("NetWeightLi");
        $(this).addClass("NetWeightLi-select");
    });

    $(".ColorLi").click(function () {
        var s = $(".ColorLi-select");
        s.removeClass("ColorLi-select");
        s.addClass("ColorLi");
        $(this).removeClass("ColorLi");
        $(this).addClass("ColorLi-select");
    });


    $(".goodsInformationBuyQuantityAdd").click(function () {
        var s = Number($(".goodsInformationBuyQuantity").text());
        $(".goodsInformationBuyQuantity").text(s + 1);
    });

    $(".goodsInformationBuyQuantityReduce").click(function () {
        var s = Number($(".goodsInformationBuyQuantity").text());
        if (s >= 2) {
            $(".goodsInformationBuyQuantity").text(s - 1);
        }
    });

    

    // 是否放大回复图片的toggle值
    var imgToggle = 0;
    // 这种写法是有并发问题的
    $(".goodsEvaluateImg").click(function () {
        var url = $(this).attr("src");
        var img = $(this).parent().parent().next().find("img");
        if (imgToggle == 0) {
            imgToggle = imgToggle + 1;
            $(".goodsEvaluateImg").css("border", "2px solid #f2f2f2");
            $(this).css("border", "2px solid #c40000");

            img.attr("src", url);
            img.css("display", "block");
            img.animate({ width: "50%" }, 500, "swing");
        } else {
            imgToggle = 0;
            $(this).css("border", "2px solid #f2f2f2");
            img.css("display", "none");
            img.css("width", "0%");
            img.attr("src", "");
        }

    });

    $("#goodsInformationMiddleDiv-second-Head").click(function () {
        $("#goodsInformationRightDiv").css("display", "none");
        $("#goodsEvaluateRightDiv").css("display", "block");
    });

    $("#goodsInformationMiddleDiv-first-Head").click(function () {
        $("#goodsEvaluateRightDiv").css("display", "none");
        $("#goodsInformationRightDiv").css("display", "block");
    });


    $(".heart").click(function () {
        // 完成点击收藏商品按钮后，界面变成填充的星星图案 字改成已收藏
        if ($(this).css("background-position") == "0px 0px") {
            $(this).css("background-position", "-1540px 0");
        } else if ($(this).css("background-position") == "-1540px 0px") {
            $(this).css("background-position", "0px 0");
        }
    });


});

