
$(document).ready(function () {

    /**
     * 处理待发货待评价待付款界面的js开始
     */
    //待发货模块
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
                "BuyNumbers": 3,
                "BuyTime": "2017-3-17 21:36",
                "isLike": true,
                "goodsId": 3092608431813507,
                "goodsDescrible": "徕卡SUMMILUX高端镜头，金属钻雕工艺，多彩外观设计",
            },
            {
                "goodsName": "goods2",
                "goodsPictureUrl": "img/gallery/164_164_goodsPicture/goods2.png",
                "goodsPrice": 4500,
                "BuyNumbers": 2,
                "BuyTime": "2017-3-17 21:41",
                "isLike": false,
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
                    "<div class='personalInformation-goodsId'>订单号: " + element.goodsId + "</div>" +
                    "<div class='personalInformation-goodsdescrible'>商品描述: " + element.goodsDescrible + "</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div class='personalInformation-buttons' id='woyaocuidan" + i + "' ><i class='icon icon-truck' style='margin-right: 8px;'></i>我要催单</div>" +
                    "<div class='personalInformation-buttons' id='woyaotuidan" + i + "'><i class='icon icon-truck' style='margin-right: 8px;'></i>我要退单</div>" +
                    "</div>" +
                    "</li>");
                //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
                $("#personalInformationRightDivDown" + i).click(function () {
                    $("#personalInformationLeftDiv").fadeOut(500, "swing", function () {
                        $("#personalInformationHeadImg").attr("src", element.goodsPictureUrl);
                        $("#personalInformationLevel").text(element.goodsName);
                        $("#personalInformationLeftDivDown-first").text("商品价格: " + element.goodsPrice);
                        $("#personalInformationLeftDivDown-second").text("购买数量: " + element.BuyNumbers);
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

    //待付款模块
    $("#getDaiFuKuan").click(function () {
        //修改待发货的按钮的颜色，同时修改其它按钮颜色
        $(this).css("color", "rgba(63, 183, 114, 1)");
        $("#getDaiFaHuo").css("color", "#666");
        $("#getDaiPingJia").css("color", "#666");
        $("#getJiFenGoods").css("color", "#666");
        //使用Ajax查询 得到该用户待发货的数据

        var JSONObject = [
            {
                "goodsName": "goods1",
                "goodsPictureUrl": "img/gallery/164_164_goodsPicture/goods1.png",
                "goodsPrice": 3000,
                "BuyNumbers": 3,
                "BuyTime": "2017-3-17 21:36",
                "isLike": true,
                "goodsId": 3092608431813507,
                "goodsDescrible": "徕卡SUMMILUX高端镜头，金属钻雕工艺，多彩外观设计",
            },
            {
                "goodsName": "goods2",
                "goodsPictureUrl": "img/gallery/164_164_goodsPicture/goods2.png",
                "goodsPrice": 4500,
                "BuyNumbers": 2,
                "BuyTime": "2017-3-17 21:41",
                "isLike": false,
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
                    "<div class='personalInformation-goodsId'>订单号: " + element.goodsId + "</div>" +
                    "<div class='personalInformation-goodsdescrible'>商品描述: " + element.goodsDescrible + "</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div class='personalInformation-buttons'><i class='icon icon-truck' style='margin-right: 8px;'></i>我要付款</div>" +
                    "<div class='personalInformation-buttons'><i class='icon icon-truck' style='margin-right: 8px;'></i>取消订单</div>" +
                    "</div>" +
                    "</li>");
                //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
                $("#personalInformationRightDivDown" + i).click(function () {
                    $("#personalInformationLeftDiv").fadeOut(500, "swing", function () {
                        $("#personalInformationHeadImg").attr("src", element.goodsPictureUrl);
                        $("#personalInformationLevel").text(element.goodsName);
                        $("#personalInformationLeftDivDown-first").text("商品价格: " + element.goodsPrice);
                        $("#personalInformationLeftDivDown-second").text("购买数量: " + element.BuyNumbers);
                        $("#personalInformationLeftDivDown-third").text("购买时间: " + element.BuyTime);
                        if (element.isLike == true) {
                            $("#personalInformationLeftDivDown-fourth").text("已收藏该商品");
                        } else {
                            $("#personalInformationLeftDivDown-fourth").text("没有收藏该商品");
                        }
                    });
                    $("#personalInformationLeftDiv").fadeIn(500, "swing");
                });
                i = i + 1;
                $(".personalInformationRightDivDown").animate({ opacity: 1 }, 800, "swing");

            }, this);
        }
    });

    //待评价模块
    $("#getDaiPingJia").click(function () {
        //修改待发货的按钮的颜色，同时修改其它按钮颜色
        $(this).css("color", "rgba(63, 183, 114, 1)");
        $("#getDaiFuKuan").css("color", "#666");
        $("#getDaiFaHuo").css("color", "#666");
        $("#getJiFenGoods").css("color", "#666");
        //使用Ajax查询 得到该用户待发货的数据

        var JSONObject = [
            {
                "goodsName": "goods1",
                "goodsPictureUrl": "img/gallery/164_164_goodsPicture/goods1.png",
                "goodsPrice": 3000,
                "BuyNumbers": 3,
                "BuyTime": "2017-3-17 21:36",
                "isLike": true,
                "goodsId": 3092608431813507,
                "goodsDescrible": "徕卡SUMMILUX高端镜头，金属钻雕工艺，多彩外观设计",
            },
            {
                "goodsName": "goods2",
                "goodsPictureUrl": "img/gallery/164_164_goodsPicture/goods2.png",
                "goodsPrice": 4500,
                "BuyNumbers": 2,
                "BuyTime": "2017-3-17 21:41",
                "isLike": false,
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
                    "<div class='personalInformation-goodsId'>订单号: " + element.goodsId + "</div>" +
                    "<div class='personalInformation-goodsdescrible'>商品描述: " + element.goodsDescrible + "</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div class='personalInformation-buttons'><i class='icon icon-truck' style='margin-right: 8px;'></i>我要评价</div>" +
                    "</div>" +
                    "</li>");
                //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
                $("#personalInformationRightDivDown" + i).click(function () {
                    $("#personalInformationLeftDiv").fadeOut(500, "swing", function () {
                        $("#personalInformationHeadImg").attr("src", element.goodsPictureUrl);
                        $("#personalInformationLevel").text(element.goodsName);
                        $("#personalInformationLeftDivDown-first").text("商品价格: " + element.goodsPrice);
                        $("#personalInformationLeftDivDown-second").text("购买数量: " + element.BuyNumbers);
                        $("#personalInformationLeftDivDown-third").text("购买时间: " + element.BuyTime);
                        if (element.isLike == true) {
                            $("#personalInformationLeftDivDown-fourth").text("已收藏该商品");
                        } else {
                            $("#personalInformationLeftDivDown-fourth").text("没有收藏该商品");
                        }
                    });
                    $("#personalInformationLeftDiv").fadeIn(500, "swing");
                });

                i = i + 1;
                $(".personalInformationRightDivDown").animate({ opacity: 1 }, 800, "swing");

            }, this);
        }
    });

    //积分商城模块
    $("#getJiFenGoods").click(function () {
        //修改待发货的按钮的颜色，同时修改其它按钮颜色
        $(this).css("color", "rgba(63, 183, 114, 1)");
        $("#getDaiFuKuan").css("color", "#666");
        $("#getDaiPingJia").css("color", "#666");
        $("#getDaiFaHuo").css("color", "#666");
        //使用Ajax查询 得到该用户待发货的数据

        var JSONObject = [
            {
                "goodsName": "goods1",
                "goodsPictureUrl": "img/gallery/164_164_goodsPicture/goods1.png",
                "goodsPrice": 3000,
                "BuyNumbers": 3,
                "BuyTime": "2017-3-17 21:36",
                "isLike": true,
                "goodsId": 3092608431813507,
                "goodsDescrible": "徕卡SUMMILUX高端镜头，金属钻雕工艺，多彩外观设计",
            },
            {
                "goodsName": "goods2",
                "goodsPictureUrl": "img/gallery/164_164_goodsPicture/goods2.png",
                "goodsPrice": 4500,
                "BuyNumbers": 2,
                "BuyTime": "2017-3-17 21:41",
                "isLike": false,
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
                    "<div class='personalInformation-goodsId'>订单号: " + element.goodsId + "</div>" +
                    "<div class='personalInformation-goodsdescrible'>商品描述: " + element.goodsDescrible + "</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div class='personalInformation-buttons'><i class='icon icon-truck' style='margin-right: 8px;'></i>积分购买</div>" +
                    "</div>" +
                    "</li>");
                //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
                $("#personalInformationRightDivDown" + i).click(function () {
                    $("#personalInformationLeftDiv").fadeOut(500, "swing", function () {
                        $("#personalInformationHeadImg").attr("src", element.goodsPictureUrl);
                        $("#personalInformationLevel").text(element.goodsName);
                        $("#personalInformationLeftDivDown-first").text("商品价格: " + element.goodsPrice);
                        $("#personalInformationLeftDivDown-second").text("购买数量: " + element.BuyNumbers);
                        $("#personalInformationLeftDivDown-third").text("购买时间: " + element.BuyTime);
                        if (element.isLike == true) {
                            $("#personalInformationLeftDivDown-fourth").text("已收藏该商品");
                        } else {
                            $("#personalInformationLeftDivDown-fourth").text("没有收藏该商品");
                        }
                    });
                    $("#personalInformationLeftDiv").fadeIn(500, "swing");
                });
                i = i + 1;
                $(".personalInformationRightDivDown").animate({ opacity: 1 }, 800, "swing");

            }, this);
        }
    });

    $("#getDaiFaHuo").click();
    /**
     * 到此为止处理待发货待评价待付款界面的js结束
     */

    /**
     * 处理个人资料界面的js开始
     */

    //个人资料模块
    $("#getGeRenZiLiao").click(function () {
        //修改按钮的颜色，同时修改其它按钮颜色
        $(this).css("color", "rgba(63, 183, 114, 1)");
        $("#getShouHuoDiZhi").css("color", "#666");
        $("#getMiMaXiuGai").css("color", "#666");

        if($("#personalInformation-ShouHuoAddress-div").css("display") != "none"){
            $("#personalInformation-ShouHuoAddress-div").css("display","none");   
        }

        if($("#personalInfromation-ShouHuoAddress-Message").css("display") != "none"){
            $("#personalInfromation-ShouHuoAddress-Message").css("display","none");   
        }

        if ($("#personalInformation-PasswordChange-Div").css("display") != "none") {
            $("#personalInformation-PasswordChange-Div").css("display","none");
        }

        if ($("#personalInformationMessage").css("display") == "none") {
            $("#personalInformationMessage").css("opacity", "0");
            $("#personalInformationMessage").css("display", "block");
            $("#personalInformationMessage").animate({ opacity: 1 }, 800, "swing");
        }
    });

    $("#getGeRenZiLiao").click();

    //收货地址模块
    $("#getShouHuoDiZhi").click(function () {
        //修改按钮的颜色，同时修改其它按钮颜色
        $(this).css("color", "rgba(63, 183, 114, 1)");
        $("#getGeRenZiLiao").css("color", "#666");
        $("#getMiMaXiuGai").css("color", "#666");

        if($("#personalInformationMessage").css("display") != "none"){
            $("#personalInformationMessage").css("display","none");
        }

        if($("#personalInformation-ShouHuoAddress-div").css("display") != "none"){
            $("#personalInformation-ShouHuoAddress-div").css("display","none");
        }

        if ($("#personalInformation-PasswordChange-Div").css("display") != "none") {
            $("#personalInformation-PasswordChange-Div").css("display","none");
        }

        if ($("#personalInfromation-ShouHuoAddress-Message").css("display") == "none") {
            $("#personalInfromation-ShouHuoAddress-Message").css("opacity", "0");
            $("#personalInfromation-ShouHuoAddress-Message").css("display", "block");
            $("#personalInfromation-ShouHuoAddress-Message").animate({ opacity: 1 }, 800, "swing");
        }

        //模拟收货地址的Json数据
        var JSONObject = [
            {
                "AddressId": 3092608431813507,
                "RewardPeople": "zazalu",
                "AddressPlace": "陕西省 西安市 长安区 兴隆街道",
                "AddressDetail": "陕西省西安市西安电子科技大学长安校区",
                "isDefault": true,
                "AddressTel": "18829212801",
            },
            {
                "AddressId": 4012398971233122,
                "RewardPeople": "zazalu",
                "AddressPlace": "浙江省 绍兴市 上虞区 曹娥街道",
                "AddressDetail": "上虞曹娥街道振兴新村6A403室",
                "isDefault": false,
                "AddressTel": "18829212801",
            }];

        //分析Json 然后动态生成收货地址的各个li
        //先删除所有的li,从而使得每次点击收货地址按钮 都会重新向服务器获取最新的收货地址
        if ($(".personalInformationRightDivDown").length != 0) {
            $(".personalInformationRightDivDown").remove();
        }
        
        //先判断是否有li
        if ($(".personalInformationRightDivDown").length == 0) {
            var i = 0;
            JSONObject.forEach(function (element) {
                var s;
                if(element.isDefault == true){
                    s = "默认地址"
                }else{
                    s = "设为默认"
                }
                $("#personalInformation-ShouHuoAddress-Message-Ul").append(
                    "<li class='personalInformationRightDivDown' id='" + "personalInformation-ShouHuoAddress-li" + i + "'>" +
                    " <div class='personalInformation-ShouHuoAddress-Message-Div'>" +
                    "<div class='personalInformation-ShouHuoAddress-Message-RewardPeople'>收货人: " + element.RewardPeople + "</div>" +
                    "<div class='personalInformation-ShouHuoAddress-Message-AddressPlace'>所在地区: " + element.AddressPlace + "</div>" +
                    "<div class='personalInformation-ShouHuoAddress-Message-AddressDetail'>详细地址: " + element.AddressDetail + "</div>" +
                    "<div class='personalInformation-ShouHuoAddress-Message-AddressTel'>联系电话: " + element.AddressTel + "</div>" +
                    "<div id='"+element.isDefault+i+"' class='personalInformation-ShouHuoAddress-Message-isDefault-"+element.isDefault+"'>"+s+"</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div class='personalInformation-buttons'><i class='icon icon-wrench' style='margin-right: 8px;'></i>修改</div>" +
                    "<div class='personalInformation-buttons'><i class='icon icon-trash' style='margin-right: 8px;'></i>删除</div>" +
                    "</div>" +
                    "</li>");
                $(".personalInformationRightDivDown").animate({ opacity: 1 }, 800, "swing");
                var f = "#false" + i;
                $("#personalInformation-ShouHuoAddress-li" + i).mouseenter(function(){
                    $(f).animate({opacity: 1},200);
                });
                $("#personalInformation-ShouHuoAddress-li"+ i).mouseleave(function(){
                    $(f).animate({opacity: 0},200);
                });
                i = i + 1;
            }, this);
        }
    });

    $("#addNewShouHuoAddressButton").click(function(){
        if ($("#personalInfromation-ShouHuoAddress-Message").css("display") != "none") {
            $("#personalInfromation-ShouHuoAddress-Message").animate({ opacity: 0 }, 800, "swing");
            $("#personalInfromation-ShouHuoAddress-Message").css("display", "none");
            $("#personalInformation-ShouHuoAddress-div").css("display","block");
            $("#personalInformation-ShouHuoAddress-div").animate({ opacity: 1 }, 800, "swing");
        }
    });

    $("#personalInformationChangeForm-cancle-save-button").click(function(){
        if($("#personalInformation-ShouHuoAddress-div").css("display") != "none"){
            $("#personalInformation-ShouHuoAddress-div").animate({ opacity: 0 }, 800, "swing");
            $("#personalInformation-ShouHuoAddress-div").css("display", "none");
            $("#personalInfromation-ShouHuoAddress-Message").css("display","block");
            $("#personalInfromation-ShouHuoAddress-Message").animate({ opacity: 1 }, 800, "swing");   
        }
    });

    //密码修改模块
    $("#getMiMaXiuGai").click(function () {
        //修改按钮的颜色，同时修改其它按钮颜色
        $(this).css("color", "rgba(63, 183, 114, 1)");
        $("#getShouHuoDiZhi").css("color", "#666");
        $("#getGeRenZiLiao").css("color", "#666");

        if($("#personalInformationMessage").css("display") != "none"){
            $("#personalInformationMessage").css("display","none");
        }

        if($("#personalInformation-ShouHuoAddress-div").css("display") != "none"){
            $("#personalInformation-ShouHuoAddress-div").css("display","none");
        }

        if($("#personalInfromation-ShouHuoAddress-Message").css("display") != "none"){
            $("#personalInfromation-ShouHuoAddress-Message").css("display","none");
        }

        if ($("#personalInformation-PasswordChange-Div").css("display") == "none") {
            $("#personalInformation-PasswordChange-Div").css("opacity", "0");
            $("#personalInformation-PasswordChange-Div").css("display", "block");
            $("#personalInformation-PasswordChange-Div").animate({ opacity: 1 }, 800, "swing");
        }
    });

    /**
     * 处理个人资料界面的js结束
     */


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
    //如果是从messageIncomplete网页跳转过来的 那么就自动跳转到个人信息页面
    var getArray = window.location.href.split('?');
    var getUrlParamArray = getArray[1].split('&');
    var getUserMessageIncomplete = getUrlParamArray[0].split('=')[1];
    if(getUserMessageIncomplete == 1){
        //说明个人信息还不完整
        $("#personalInformationHeadDiv").click();
    }
    /**
     * 到此三大界面切换js结束
     */



});