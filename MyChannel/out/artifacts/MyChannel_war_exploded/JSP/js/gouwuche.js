
$(document).ready(function () {

    /**
     * 处理待发货待评价待付款界面的js开始
     */
    //我的收藏夹
    $("#getDaiFaHuo").click(function () {
        //修改待发货的按钮的颜色，同时修改其它按钮颜色
        $(this).css("color", "rgba(63, 183, 114, 1)");
        $("#getDaiFuKuan").css("color", "#666");
        $("#getDaiPingJia").css("color", "#666");
        $("#getJiFenGoods").css("color", "#666");
        //使用Ajax查询 得到该用户待发货的数据

        //模拟下获取到的JSON数据
        var JSONObject = [
            {
                "goodsName": "goods1",
                "goodsPictureUrl": "img/gallery/164_164_goodsPicture/goods1.png",
                "goodsPrice": 3000,
                "LikeTime": "2017-3-17 21:36",
                "goodsStock": "3",
                "goodsId": 3092608431813507,
                "goodsDescrible": "徕卡SUMMILUX高端镜头，金属钻雕工艺，多彩外观设计",
            },
            {
                "goodsName": "goods2",
                "goodsPictureUrl": "img/gallery/164_164_goodsPicture/goods2.png",
                "goodsPrice": 4500,
                "LikeTime": "2017-3-17 21:41",
                "goodsStock": "3",
                "goodsId": 4012398971233122,
                "goodsDescrible": "徕卡SUMMILUX高端镜头，金属钻雕工艺，多彩外观设计",
            }];

        //将拿到的数据，写一个for循环，循环的把数据放入
        //先删除所有的li
        if ($(".personalInformationRightDivDown").length != 0) {
            $(".personalInformationRightDivDown").remove();
        }
        //先判断是否有li了 有li说明已经进行过数据的查询了，不需要再添加
        if ($(".personalInformationRightDivDown").length == 0) {
            var i = 0;
            JSONObject.forEach(function (element) {
                $("#personalInformationRightDivUl").append(
                    "<li class='personalInformationRightDivDown' id='" + "personalInformationRightDivDown" + i + "'>" +
                    " <div class='personalInformation-goodsDiv'>" +
                    "<div class='personalInformation-goodsId'>商品名: " + element.goodsName + "</div>" +
                    "<div class='personalInformation-goodsdescrible'>商品描述: " + element.goodsDescrible + "</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div class='personalInformation-buttons' id='woyaocuidan" + i + "' ><i class='icon icon-star-empty' style='margin-right: 8px;'></i>购买此物</div>" +
                    "<div class='personalInformation-buttons' id='woyaocuidan" + i + "' ><i class='icon icon-star-empty' style='margin-right: 8px;'></i>删除此物</div>" +
                    "</div>" +
                    "</li>");
                //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
                $("#personalInformationRightDivDown" + i).click(function () {
                    $("#personalInformationLeftDiv").fadeOut(500, "swing", function () {
                        $("#personalInformationHeadImg").attr("src", element.goodsPictureUrl);
                        $("#personalInformationLevel").text(element.goodsName);
                        $("#personalInformationLeftDivDown-first").text("商品价格: " + element.goodsPrice);
                        $("#personalInformationLeftDivDown-second").text("购买数量: " + element.goodsStock);
                        $("#personalInformationLeftDivDown-third").text("购买时间: " + element.BuyTime);
                        if (element.isLike == true) {
                            $("#personalInformationLeftDivDown-fourth").text("已收藏该商品");
                        } else {
                            $("#personalInformationLeftDivDown-fourth").text("没有收藏该商品");
                        }
                    });
                    $("#personalInformationLeftDiv").fadeIn(500, "swing");
                });
                //为条目中的"我要xx"按钮添加click事件
                $("#woyaocuidan" + i).click(function () {
                    alert(element.goodsId);
                });
                $("#woyaotuidan" + i).click(function () {
                    alert(element.goodsId);
                });
                i = i + 1;
                $(".personalInformationRightDivDown").animate({ opacity: 1 }, 800, "swing");

            }, this);
        }
        //
    });

    $("#getDaiFaHuo").click();

    /**
    * 处理右边三大界面的切换js
    */

    $("#personalInformationHeadDiv").click(function () {
        if ($("#personalInformationRightDiv-ghost").css("display") == "none" && $("#personalInformationRightDiv").css("display") != "none") {
            $("#personalInformationRightDiv").fadeOut(500, "swing", function () {
                $("#personalInformationRightDiv").css("display", "none");
                $("#personalInformationRightDiv-ghost").css("opacity", "0");
                $("#personalInformationRightDiv-ghost").css("display", "block");
                $("#personalInformationRightDiv-ghost").animate({ opacity: 1 }, 800, "swing");
            });
        } else if ($("#personalInformationRightDiv-ghost").css("display") == "none" && $("#personalInformationRightDiv").css("display") == "none") {
            $("#headEditorDiv-third").fadeOut(500, "swing", function () {
                $("#headEditorDiv-third").css("display", "none");
                $("#personalInformationRightDiv-ghost").css("opacity", "0");
                $("#personalInformationRightDiv-ghost").css("display", "block");
                $("#personalInformationRightDiv-ghost").animate({ opacity: 1 }, 800, "swing");
            });
        }
    });

    $("#headEditorDiv-second").click(function () {
        $("#personalInformationRightDiv-ghost").fadeOut(500, "swing", function () {
            $("#personalInformationRightDiv-ghost").css("display", "none");
            $("#headEditorDiv-third").css("opacity", "0");
            $("#headEditorDiv-third").css("display", "block");
            $("#headEditorDiv-third").animate({ opacity: 1 }, 800, "swing");
        });
    });
    /**
     * 到此三大界面切换js结束
     */



});