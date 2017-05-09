
$(document).ready(function () {
    var regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,16}$/;

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
        //加载待发货列表
        $.ajax({
            url: '/MyChannel/ordersAction_getPayedOrdersList.action',
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
            var json = eval("("+tt+")"); //数组
            var tt = "";
            var i = 0;
            $.each(json.payedOrdersList , function (index,item) {
                console.log("处理" + item.OrdersId);
                $("#personalInformationRightDivUl").append(
                    "<li class='personalInformationRightDivDown' id='" + "personalInformationRightDivDown" + i + "'>" +
                    " <div class='personalInformation-goodsDiv'>" +
                    "<div class='personalInformation-goodsId'>订单号: " + item.OrdersId + "</div>" +
                    "<div class='personalInformation-goodsdescrible'>商品描述: "+item.GoodDescrible+ "</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div class='personalInformation-buttons' id='woyaotuidan" + i + "'><i class='icon icon-truck' style='margin-right: 8px;'></i>我要退单</div>" +
                    "</div>" +
                    "</li>");
                //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
                $("#personalInformationRightDivDown" + i).mouseenter(function () {
                    $("#personalInformationLeftDiv").fadeOut(100, "swing", function () {
                        $("#personalInformationHeadImg").attr("src", item.GoodImg164);
                        $("#personalInformationLevel").text(item.GoodName);
                        $("#personalInformationLeftDivDown-first").text("商品价格: " + item.GoodPrice);
                        $("#personalInformationLeftDivDown-second").text("购买数量: " + item.GoodNumber);
                        $("#personalInformationLeftDivDown-third").text("购买时间: " + item.OrderTime);
                        if (item.isLike === "1") {
                            $("#personalInformationLeftDivDown-fourth").text("已收藏该商品");
                        } else {
                            $("#personalInformationLeftDivDown-fourth").text("没有收藏该商品");
                        }
                    });
                    $("#personalInformationLeftDiv").fadeIn(100, "swing");
                });

                // //为条目中的"我要xx"按钮添加click事件
                // $("#woyaocuidan" + i).click(function () {
                //     //点击我要催单 然后后台
                //
                // });
                $("#woyaotuidan" + i).click(function () {
                    //点击我要退单后修改该订单的isUnSubscribe为1 表明是退订了
                    //ajax请求
                    $.ajax({
                        method: "POST",
                        url: "/MyChannel/ordersAction_unSubscribeOrder.action",
                        data: { orderId: item.OrdersId }
                    })
                        .done(function( msg ) {
                            if(msg === "unSubscribe Order success!"){
                                console.log("退订成功");
                                //刷新此页面
                                window.location.reload();
                            }else {
                                console.log("退订失败 请检查异常栈 sad" + msg);
                            }
                        });
                    //ajax请求结束
                });
                i = i + 1;
                $(".personalInformationRightDivDown").animate({ opacity: 1 }, 800, "swing");
            });
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
        //加载待付款列表
        $.ajax({
            url: '/MyChannel/ordersAction_getUnPayOrdersList.action',
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
            var json = eval("("+tt+")"); //数组
            var tt = "";
            var i = 0;
            $.each(json.unPayOrdersList , function (index,item) {
                console.log("处理" + item.OrdersId);
                $("#personalInformationRightDivUl").append(
                    "<li class='personalInformationRightDivDown' id='" + "personalInformationRightDivDown" + i + "'>" +
                    " <div class='personalInformation-goodsDiv'>" +
                    "<div class='personalInformation-goodsId'>订单号: " + item.OrdersId + "</div>" +
                    "<div class='personalInformation-goodsdescrible'>商品描述: "+item.GoodDescrible+ "</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div class='personalInformation-buttons' id='zhifu" + i + "'><i class='icon icon-truck' style='margin-right: 8px;'></i>支付</div>" +
                    "</div>" +
                    "</li>");
                //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
                $("#personalInformationRightDivDown" + i).mouseenter(function () {
                    $("#personalInformationLeftDiv").fadeOut(100, "swing", function () {
                        $("#personalInformationHeadImg").attr("src", item.GoodImg164);
                        $("#personalInformationLevel").text(item.GoodName);
                        $("#personalInformationLeftDivDown-first").text("商品价格: " + item.GoodPrice);
                        $("#personalInformationLeftDivDown-second").text("购买数量: " + item.GoodNumber);
                        $("#personalInformationLeftDivDown-third").text("购买时间: " + item.OrderTime);
                        if (item.isLike === "1") {
                            $("#personalInformationLeftDivDown-fourth").text("已收藏该商品");
                        } else {
                            $("#personalInformationLeftDivDown-fourth").text("没有收藏该商品");
                        }
                    });
                    $("#personalInformationLeftDiv").fadeIn(100, "swing");
                });

                // //为条目中的"我要xx"按钮添加click事件
                // $("#woyaocuidan" + i).click(function () {
                //     //点击我要催单 然后后台
                //
                // });
                $("#zhifu" + i).click(function () {
                    var userBuyQuantity = item.GoodNumber;
                    var userSelectNetWeight = item.GoodNetWeight;
                    var userBuyGoodName = item.GoodName;
                    var userSelectColor = item.GoodColor;
                    var userBuyGoodId = item.GoodId;
                    // 实现点击立即购买后 弹出对话框
                    $("#replyZheZhao").css("display", "block");
                    $("#replyZheZhao").animate({opacity: ".6"}, 800, "easeInOutQuart", function () {
                        $(".goodsBuyDiv").css("display", "block");
                        $(".goodsBuyDiv").animate({opacity: "1"}, 400, "easeInOutQuart");
                    });

                    //填写隐藏表单
                    $("#goodId").val(userBuyGoodId);
                    $("#goodName").val(userBuyGoodName);
                    $("#goodNetWeight").val(userSelectNetWeight);
                    $("#goodColor").val(userSelectColor);
                    $("#ordersId").val(item.OrdersId);
                    $("#goodBuyQuantity").val(userBuyQuantity);
                    console.log("隐藏表单填写完毕!");

                    // 实现将对话框中的订单信息显示
                    //取出所有的信息
                    var howMuchMoney;
                    var goodPrice = item.GoodPrice;
                    var goodDiscount = item.GoodDiscount;
                    if (goodDiscount !== "10") {
                        howMuchMoney = Math.round(Number(userBuyQuantity) * (Number(goodPrice)) * (Number(goodDiscount)) * 0.1);

                    } else {
                        howMuchMoney = Math.round(Number(userBuyQuantity) * (Number(goodPrice)));
                    }
                    //填入对话框中对应内容
                    $(".good-info").text(" 商品名: " + userBuyGoodName + " / 净含量: " + userSelectNetWeight + " / 购买数量: " + userBuyQuantity + " ");
                    $(".good-info").next().text("价格: " + howMuchMoney + "¥");

                    // 点击遮罩 取消g购买
                    $("#replyZheZhao , .goodsBuyDiv-fourth").click(function () {
                        //将支付弹出框隐藏
                        $(".goodsBuyDiv").animate({opacity: "0"}, 800, "easeInOutQuart", function () {
                            $(".goodsBuyDiv").css("display", "none");
                        });
                        $("#replyZheZhao").animate({opacity: "0"}, 800, "easeInOutQuart", function () {
                            $("#replyZheZhao").css("display", "none");
                        });
                    });
                    //支付按钮
                    $(".goodsBuyDiv-third").click(function () {
                        //先查看此订单是否也存在于购物车中
                        if(item.shoppingCartId === "0"){
                            //说明不存在 所以不需要删除
                            console.log("此订单不在购物车中");
                        }else {
                            //ajax请求
                            $.ajax({
                                method: "POST",
                                url: "/MyChannel/ordersAction_deleteShoppingCart.action",
                                data: { ShoppingcartId: item.shoppingCartId ,deleteOrderTo: "no"}

                            })
                                .done(function( msg ) {
                                    if(msg === "delete shoppingcart suceess"){
                                        console.log("在购物车內支付完毕 删除该购物车栏完毕 准备将此订单转变为待发货状态");
                                    }else {
                                        console.log("删除购物车栏失败 请检查异常栈 sad" + msg);
                                    }
                                });
                            //ajax请求结束
                        }

                        //生成已付款未发货订单
                        $("#goodBuyForm").submit();
                        //转到支付完成页面 然后再转到买方的个人信息 待发货页面

                    });
                });
                i = i + 1;
                $(".personalInformationRightDivDown").animate({ opacity: 1 }, 800, "swing");
            });
        }
    });

    //待评价模块
    $("#getDaiPingJia").click(function () {
        //修改待发货的按钮的颜色，同时修改其它按钮颜色
        $(this).css("color", "rgba(63, 183, 114, 1)");
        $("#getDaiFuKuan").css("color", "#666");
        $("#getDaiFaHuo").css("color", "#666");
        $("#getJiFenGoods").css("color", "#666");
        //使用Ajax查询 得到该用户待评价的数据
        //加载待评价列表
        $.ajax({
            url: '/MyChannel/ordersAction_getUnEvaluateOrdersList.action',
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
            var json = eval("("+tt+")"); //数组
            var tt = "";
            var i = 0;
            $.each(json.unEvaluateOrdersList , function (index,item) {
                console.log("处理" + item.OrdersId);
                $("#personalInformationRightDivUl").append(
                    "<li class='personalInformationRightDivDown' id='" + "personalInformationRightDivDown" + i + "'>" +
                    " <div class='personalInformation-goodsDiv'>" +
                    "<div class='personalInformation-goodsId'>订单号: " + item.OrdersId + "</div>" +
                    "<div class='personalInformation-goodsdescrible'>商品描述: "+item.GoodDescrible+ "</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div class='personalInformation-buttons' id='pingjia" + i + "'><i class='icon icon-truck' style='margin-right: 8px;'></i>评价</div>" +
                    "</div>" +
                    "</li>");
                //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
                $("#personalInformationRightDivDown" + i).mouseenter(function () {
                    $("#personalInformationLeftDiv").fadeOut(100, "swing", function () {
                        $("#personalInformationHeadImg").attr("src", item.GoodImg164);
                        $("#personalInformationLevel").text(item.GoodName);
                        $("#personalInformationLeftDivDown-first").text("商品价格: " + item.GoodPrice);
                        $("#personalInformationLeftDivDown-second").text("购买数量: " + item.GoodNumber);
                        $("#personalInformationLeftDivDown-third").text("购买时间: " + item.OrderTime);
                        if (item.isLike === "1") {
                            $("#personalInformationLeftDivDown-fourth").text("已收藏该商品");
                        } else {
                            $("#personalInformationLeftDivDown-fourth").text("没有收藏该商品");
                        }
                    });
                    $("#personalInformationLeftDiv").fadeIn(100, "swing");
                });

                // //为条目中的"我要xx"按钮添加click事件
                // $("#woyaocuidan" + i).click(function () {
                //     //点击我要催单 然后后台
                //
                // });
                $("#pingjia" + i).click(function () {
                    //弹出对话框
                    $("#replyZheZhao").css("display", "block");
                    $("#replyZheZhao").animate({ opacity: ".6" }, 800, "easeInOutQuart");
                    $(".goodsEvaluateReplyDownDiv").animate({ bottom: "0%" }, 800, "easeInOutQuart");

                    // 全局Fromdata 封装了用户的所有想法送的数据
                    var godFormData = new FormData();
                    jed = "easeOutElastic";
                    var is = 0;


                    // 添加图片
                    $("#goodsEvaluateReplyDownDiv-second-addPictureInput").change(function () {
                        var fr = false;
                        if (typeof window.FileReader === 'undefined') {
                            alert("抱歉你的浏览器不支持FileReader");
                        } else {
                            if ($(".goodsEvaluateReplyDownDiv-uploadPicture").css("height") == "0px") {
                                $(".goodsEvaluateReplyDownDiv-uploadPicture").animate({ height: "145px" }, 800, jed);
                            }
                            fr = new FileReader();
                            godFormData.append('goodsEvaluateReplyImg' + is, document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0]);
                            fr.readAsDataURL(document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0]);
                            fr.onload = function (p_fr) {
                                var imgs = new Image();
                                imgs.src = p_fr.target.result;
                                //因为上一步的imgs.src是异步的 所以浏览器执行太快了 也许高宽还没来得及读入 就已经开始下面的代码了 所以为了保证下面的imgs.width等能够正常工作而不是返回0 所以就在onload里写
                                imgs.onload = function () {
                                    if (imgs.width < imgs.height) {
                                        // 宽度小于高度情况
                                        var prop = 127 / imgs.width;
                                        var height = Math.round(imgs.height * prop);
                                        var marginTop = (height - 127) / 2;
                                        $("#goodsEvaluateReplyDownDiv-uploadPicture-Ul").append(
                                            "<li class='goodsEvaluateReplyDownDiv-uploadPicture-li'>" +
                                            "<div class='deletePictureDiv'><i class='icon-remove-sign icon-2x' id='" + "icon-remove-sign" + is + "' ></i></div>" +
                                            "<img id='goodsEvaluateReplyImg" + is + "' style='width: 127px;height: " + height + "px;margin-top: -" + marginTop + "px'  src='" + p_fr.target.result + "' />" +
                                            "</li>"
                                        );
                                        console.log("图片id = goodsEvaluateReplyImg" + is + "生成完毕");
                                    } else {
                                        // 高度小于宽度情况
                                        var prop = 127 / imgs.height;
                                        var width = Math.round(imgs.width * prop);
                                        var marginLeft = (width - 127) / 2;
                                        $("#goodsEvaluateReplyDownDiv-uploadPicture-Ul").append(
                                            "<li class='goodsEvaluateReplyDownDiv-uploadPicture-li'>" +
                                            "<div class='deletePictureDiv'><i class='icon-remove-sign icon-2x' id='" + "icon-remove-sign" + is + "' ></i></div>" +
                                            "<img id='goodsEvaluateReplyImg" + is + "' style='max-width: none;height: 127px;width: " + width + "px;margin-left: -" + marginLeft + "px'  src='" + p_fr.target.result + "' />" +
                                            "</li>"
                                        );
                                        console.log("图片id = goodsEvaluateReplyImg" + is + "生成完毕");
                                    }
                                    // 删除图片
                                    $("#icon-remove-sign" + is).click(function () {
                                        $(this).parent().parent().remove();
                                        var getId = $(this).parent().next().attr("id");
                                        godFormData.delete(getId);
                                        console.log("成功删除  图片id = " + getId);
                                        is = is - 1;
                                        if ($(".goodsEvaluateReplyDownDiv-uploadPicture-li").length == 0) {
                                            $(".goodsEvaluateReplyDownDiv-uploadPicture").animate({ height: "0px" }, 800, "easeInElastic");
                                        }
                                        // 只能上传四张图片
                                        if (is != 4) {
                                            $("#goodsEvaluateReplyDownDiv-second-addPictureInput").removeAttr("disabled");
                                            $("#goodsEvaluateReplyDownDiv-second-addPicture").css("opacity", "1");
                                        }
                                    });
                                    // 改变图片id
                                    is = is + 1;
                                    // 只能上传四张图片
                                    if (is == 4) {
                                        $("#goodsEvaluateReplyDownDiv-second-addPictureInput").attr("disabled", "disabled");
                                        $("#goodsEvaluateReplyDownDiv-second-addPicture").css("opacity", "0.2");
                                    }
                                }


                            };
                        }
                    });



                    $("#goodsEvaluateReplyDownDiv-first-a1").click(function () {
                        if (document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0] === 'undefined') {
                            console.log("您不想上传一些图片吗？");
                        }
                        if ($("#goodsEvaluateReplyDownDiv-second-textarea").val().trim() == "" || $("#goodsEvaluateReplyDownDiv-second-textarea").val() == null) {
                            alert("评价内容不能为空");
                        } else {
                            godFormData.append('goodsEvaluateReplyForm', encodeURI($('#goodsEvaluateReplyDownDiv-second-textarea').val()));
                            //OrdersId
                            godFormData.append('evaluateOrderId', item.OrdersId);
                            //表示是初始回复 没有父评论
                            godFormData.append('hasFatherEvaluate', "0");
                            $.ajax('/MyChannel/addEvaluateServlet', {
                                method: "POST",
                                data: godFormData,
                                processData: false,
                                contentType: false,
                                success: function (msg) {
                                    if(msg === "add evaluate success"){
                                        //评论发表成功 刷新
                                        window.location.href = "http://localhost:8080/MyChannel/JSP/买方个人信息.jsp?usermessageincomplete=0&userchangepassword=0&ShouHuoAddress=0&daipingjia=1"
                                    }else {
                                        //已经连接到后台 然后跑到这里 说明后台报错 代码没跑完
                                        console.log("后台报错 请查看异常栈信息" + msg)
                                    }
                                },
                                error: function () {
                                    //无法连接上
                                    alert("评论失败 请查看是否联网");
                                }
                            });
                        }
                    });

                })
                ;
                i = i + 1;
                $(".personalInformationRightDivDown").animate({ opacity: 1 }, 800, "swing");
            });
        }

    });

    //回复框取消动作实现
    // 点击遮罩 取消回复 删除所有内容
    $("#replyZheZhao,#goodsEvaluateReplyDownDiv-first-a2").click(function () {
        $(".goodsEvaluateReplyDownDiv").animate({ bottom: "-50%" }, 800, "easeInOutQuart");
        $("#replyZheZhao").animate({ opacity: "0" }, 800, "easeInOutQuart", function () {

            $("#replyZheZhao").css("display", "none");
            $("#goodsEvaluateReplyDownDiv-second-textarea").val("");
            $(".goodsEvaluateReplyDownDiv-uploadPicture-li").remove();
            if ($(".goodsEvaluateReplyDownDiv-uploadPicture-li").length == 0) {
                $(".goodsEvaluateReplyDownDiv-uploadPicture").animate({ height: "0px" }, 800, "easeInElastic");
            }
        });
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

        //发送ajax请求 获取用户的收货地址列表
        $.ajax({
            url: '/MyChannel/addressAction_getUserAddress.action',
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
            $("#ShouHuoAddressJiaZai").css("display","block");
        }
        function erryFunction() {
            console.log("error!");
        }

        //解析json数据
        function succFunction(tt) {
            //删除加载中
            $("#ShouHuoAddressJiaZai").css("display","none");
            console.log("删除加载中完成");
            //分析Json 然后动态生成收货地址的各个li
            //先删除所有的li,从而使得每次点击收货地址按钮 都会重新向服务器获取最新的收货地址
            if ($(".personalInformationRightDivDown").length != 0) {
                $(".personalInformationRightDivDown").remove();
            }
            var i = 0;
            var json = eval("("+tt+")"); //数组
            var tt = "";
            $.each(json.address , function (index,item) {
                console.log("处理" + item.AddressId);
                var s;
                var bs;
                if(item.isDefault == 1){
                    s = "默认地址"
                    bs = true;
                }else{
                    s = "设为默认"
                    bs = false;
                }
                $("#personalInformation-ShouHuoAddress-Message-Ul").append(
                    "<li class='personalInformationRightDivDown' id='" + "personalInformation-ShouHuoAddress-li" + i + "'>" +
                    " <div class='personalInformation-ShouHuoAddress-Message-Div'>" +
                    "<div class='personalInformation-ShouHuoAddress-Message-RewardPeople'>收货人: " + item.RewardPeople + "</div>" +
                    "<div class='personalInformation-ShouHuoAddress-Message-AddressPlace'>所在地区: " + item.AddressPlace + "</div>" +
                    "<div class='personalInformation-ShouHuoAddress-Message-AddressDetail'>详细地址: " + item.AddressDetail + "</div>" +
                    "<div class='personalInformation-ShouHuoAddress-Message-AddressTel'>联系电话: " + item.AddressTel + "</div>" +
                    "<div id='"+bs+i+"' class='personalInformation-ShouHuoAddress-Message-isDefault-"+bs+"'>"+s+"</div>" +
                    "</div>" +
                    "<div class='personalInformation-buttons-div'>" +
                    "<div id='deleteAddress"+item.AddressId+"' class='personalInformation-buttons'><i class='icon icon-trash' style='margin-right: 8px;'></i>删除</div>" +
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
                //处理设为默认click事件
                $(f).click(function () {
                   //获取要设为默认的地址id
                    var addId = item.AddressId;
                    //将此id用ajax发送到后台处理
                    $.ajax({
                        method: "POST",
                        url: "/MyChannel/addressAction_setupToDefault.action",
                        data: { addressId: addId}
                    })
                        .done(function( msg ) {
                            if(msg === "default address change success"){
                                console.log("设定成功");
                                $("#getShouHuoDiZhi").click(); //重新加载一次收货地址
                            }else {
                                console.log("设定失败 请查看异常栈信息" + msg);
                                alert("不为人知的错误发生了!请联系后台管理")
                            }
                        });
                    //设为默认ajax结束
                });
                i = i + 1;
                console.log("处理" + item.AddressId + "结束");

                //处理删除按钮逻辑
                //为什么要在这里写 因为在这里的时候 删除按钮在会有可能存在 在能赋予click事件
                $("#deleteAddress" + item.AddressId).click(function () {
                    //判断是哪个地址要被删除
                   var strId = $(this).attr('id');
                    strId = strId.substring(13);
                    //如果要删除的是默认地址,提示用户
                    // 由于你即将删除默认地址 并告知其应该再设置一个默认地址
                    //默认地址会在您购物完成选择地址的时候 默认的显示
                    //不过不用担心 没有默认地址 你依然可以正常购物 只不过在选择地址的时候 系统不会自动的帮您选择好购物地址而已
                    if(item.isDefault == 1){
                        alert("由于你即将删除默认地址 所以应该再设置一个默认地址 默认地址会在您购物完成选择地址的时候 默认的显示 不过不用担心 没有默认地址 你依然可以正常购物 只不过在选择地址的时候 系统不会自动的帮您选择好购物地址而已");
                    }
                    //发送ajax请求 在数据库中删除此收货地址
                    $.ajax({
                        method: "POST",
                        url: "/MyChannel/addressAction_deleteAddressByAddressId.action",
                        data: { addressId: strId}
                    })
                        .done(function( msg ) {
                            if(msg === "delete success"){
                                console.log("删除成功");
                                $("#getShouHuoDiZhi").click(); //重新加载一次收货地址
                            }else {
                                console.log("删除失败 请查看异常栈信息");
                            }
                        });
                    //ajax请求删除指定收获地址结束
                });

                //
            });
        }

        //ajax获取收货地址请求结束

        // //模拟收货地址的Json数据
        // var JSONObject = [
        //     {
        //         "AddressId": 3092608431813507,
        //         "RewardPeople": "zazalu",
        //         "AddressPlace": "陕西省 西安市 长安区 兴隆街道",
        //         "AddressDetail": "陕西省西安市西安电子科技大学长安校区",
        //         "isDefault": true,
        //         "AddressTel": "18829212801"
        //     },
        //     {
        //         "AddressId": 4012398971233122,
        //         "RewardPeople": "zazalu",
        //         "AddressPlace": "浙江省 绍兴市 上虞区 曹娥街道",
        //         "AddressDetail": "上虞曹娥街道振兴新村6A403室",
        //         "isDefault": false,
        //         "AddressTel": "18829212801"
        //     }];
        //
        // //删除加载中
        // $("#ShouHuoAddressJiaZai").css("display","none");
        //
        // //分析Json 然后动态生成收货地址的各个li
        // //先删除所有的li,从而使得每次点击收货地址按钮 都会重新向服务器获取最新的收货地址
        // if ($(".personalInformationRightDivDown").length != 0) {
        //     $(".personalInformationRightDivDown").remove();
        // }
        //
        //
        //
        // //先判断是否有li
        // if ($(".personalInformationRightDivDown").length == 0) {
        //     var i = 0;
        //     JSONObject.forEach(function (element) {
        //         var s;
        //         if(element.isDefault == true){
        //             s = "默认地址"
        //         }else{
        //             s = "设为默认"
        //         }
        //         $("#personalInformation-ShouHuoAddress-Message-Ul").append(
        //             "<li class='personalInformationRightDivDown' id='" + "personalInformation-ShouHuoAddress-li" + i + "'>" +
        //             " <div class='personalInformation-ShouHuoAddress-Message-Div'>" +
        //             "<div class='personalInformation-ShouHuoAddress-Message-RewardPeople'>收货人: " + element.RewardPeople + "</div>" +
        //             "<div class='personalInformation-ShouHuoAddress-Message-AddressPlace'>所在地区: " + element.AddressPlace + "</div>" +
        //             "<div class='personalInformation-ShouHuoAddress-Message-AddressDetail'>详细地址: " + element.AddressDetail + "</div>" +
        //             "<div class='personalInformation-ShouHuoAddress-Message-AddressTel'>联系电话: " + element.AddressTel + "</div>" +
        //             "<div id='"+element.isDefault+i+"' class='personalInformation-ShouHuoAddress-Message-isDefault-"+element.isDefault+"'>"+s+"</div>" +
        //             "</div>" +
        //             "<div class='personalInformation-buttons-div'>" +
        //             "<div class='personalInformation-buttons'><i class='icon icon-wrench' style='margin-right: 8px;'></i>修改</div>" +
        //             "<div class='personalInformation-buttons'><i class='icon icon-trash' style='margin-right: 8px;'></i>删除</div>" +
        //             "</div>" +
        //             "</li>");
        //         $(".personalInformationRightDivDown").animate({ opacity: 1 }, 800, "swing");
        //         var f = "#false" + i;
        //         $("#personalInformation-ShouHuoAddress-li" + i).mouseenter(function(){
        //             $(f).animate({opacity: 1},200);
        //         });
        //         $("#personalInformation-ShouHuoAddress-li"+ i).mouseleave(function(){
        //             $(f).animate({opacity: 0},200);
        //         });
        //         i = i + 1;
        //     }, this);
        // }
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
     * 处理密码修改js开始
     */
    $("#passwordChangeButton").click(function () {
        //检测旧密码是否正确
        $.ajax({
            method: "POST",
            url: "/MyChannel/userAction_verifyUserPassword.action",
            data: { ordPassword: $("#ordPassword").val() ,userName: $("#personalInformationLevel").text() }
        })
            .done(function( msg ) {
                console.log($("#oldPassword").val() + "/ " + !regPassword.test($("#newPassword").val()));
                if(msg !== "ordPassword correct"){
                    $("#ordPassword").next().text("旧密码错误");
                    return;
                }

                if(!regPassword.test($("#newPassword").val())){
                    //到这里说明格式不对
                    $("#newPassword").next().text("密码6～16位，必须含有至少一个特殊字符!@#$%^&*_和数字0-9");
                    return;
                }
                    $("#userPasswordChangeForm").submit();
            });
    });


    /**
     * 处理密码修改js结束
     */

    /**
     * 处理新增地址开始
     */

    $("#personalInformationChangeForm-save-button").click(function () {
        //去除所有提示
        $("#select2-addressArea-container").next().text("");
        $("#addressDetail").next().text("");
        $("#addressRewardPeople").next().text("");
        $("#addressTel").next().text("");

        //检测新增地址是否全部填写完毕
        if($("#select2-addressProvince-container").text() === "" &&
                $("#select2-addressCity-container").text() === ""
        ){
            $("#select2-addressArea-container").next().text("请选择地区");
        }else if($("#addressDetail").val() === ""){
            $("#addressDetail").next().text("请填写详细地址，这很重要");
        }else if($("#addressRewardPeople").val() === "") {
            $("#addressRewardPeople").next().text("请填写收货人名称");
        }else if($("#addressTel").val() === ""){
            $("#addressTel").next().text("请填写您的联系电话");
        }else {
            //提交订单
            $("#ShouHuoAddressForm").submit();
        }
    });

    /**
     * 处理新增地址结束
     */

    /**
    * 处理右边三大界面的切换js
    */

    $("#personalInformationHeadDiv").click(function () {
        $("body").css("min-width","1280px");
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
        $("body").css("min-width","1600px");

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
    var getUserChangePassword = getUrlParamArray[1].split('=')[1];
    if (getUserChangePassword == 1){
        //跳到密码修改页面
        $("#getMiMaXiuGai").click();
    }
    var getShouHuoAddress = getUrlParamArray[2].split('=')[1];
    if(getShouHuoAddress == 1){
        //跳到收货地址页面
        $("#getShouHuoDiZhi").click();
    }
    var getDaiPingJia = getUrlParamArray[3].split('=')[1];
    if(getDaiPingJia == 1){
        $("#getDaiPingJia").click();
    }
    /**
     * 到此三大界面切换js结束
     */



});