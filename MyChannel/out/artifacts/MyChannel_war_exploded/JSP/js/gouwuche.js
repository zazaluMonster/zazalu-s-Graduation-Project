$(document).ready(function () {

    var userName = $("#user-nav-userHeadId").text();

    //使用Ajax查询 得到该用户购物车的数据
    $.ajax({
        url: '/MyChannel/ordersAction_getUserShoppingCartList.action',
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
        var sumMoney = 0;
        $.each(json.shoppingcartList, function (index, item) {
            console.log("处理" + item.OrdersId);
            var goodPriceForSum = item.GoodPrice;
            var goodDiscountForSum = item.GoodDiscount;
            var userBuyQuantityForSum = item.GoodNumber;
            if (goodDiscountForSum !== "10") {
                sumMoney = sumMoney + Math.round(Number(userBuyQuantityForSum) * (Number(goodPriceForSum)) * (Number(goodDiscountForSum)) * 0.1);

            } else {
                sumMoney = sumMoney + Math.round(Number(userBuyQuantityForSum) * (Number(goodPriceForSum)));
            }
            $("#personalInformationRightDivUl").append(
                "<li class='personalInformationRightDivDown' id='" + "personalInformationRightDivDown" + i + "'>" +
                " <div class='personalInformation-goodsDiv'>" +
                "<div class='personalInformation-goodsId'>订单号: " + item.OrdersId + "</div>" +
                "<div class='personalInformation-goodsdescrible'>商品描述: " + item.GoodDescrible + "</div>" +
                "</div>" +
                "<div class='personalInformation-buttons-div'>" +
                "<div class='personalInformation-buttons' id='goumaiciwu" + i + "' ><i class='icon icon-truck' style='margin-right: 8px;'></i>购买此物</div>" +
                "<div class='personalInformation-buttons' id='shanchuciwu" + i + "'><i class='icon icon-truck' style='margin-right: 8px;'></i>删除此物</div>" +
                "</div>" +
                "</li>");
            //为所有条目添加click事件，使得起点击后可以修改左边详细信息的一些数据
            $("#personalInformationRightDivDown" + i).mouseenter(function () {
                $("#personalInformationLeftDiv").fadeOut(200, "swing", function () {
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
                $("#personalInformationLeftDiv").fadeIn(200, "swing");
            });

            //为条目中的按钮添加click事件
            /***
             * 购买此物模块开始
             */

            // 购买此物按钮
            $("#goumaiciwu" + i).click(function () {
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
                    //删除表中被点击的一项ShoppingCart
                    //ajax请求
                    $.ajax({
                        method: "POST",
                        url: "/MyChannel/ordersAction_deleteShoppingCart.action",
                        data: { ShoppingcartId: item.shoppingcartId ,deleteOrderTo: "no"}

                    })
                        .done(function( msg ) {
                            if(msg === "delete shoppingcart suceess"){
                                console.log("在购物车內支付完毕 删除该购物车栏完毕 准备将此订单转变为待发货状态");
                            }else {
                                console.log("删除购物车栏失败 请检查异常栈 sad" + msg);
                            }
                        });
                    //ajax请求结束

                    //生成已付款未发货订单
                    $("#goodBuyForm").submit();
                    //转到支付完成页面 然后再转到买方的个人信息 待发货页面

                });

            });


            /***
             * 购买此物模块结束
             */

            /***
             * 删除此物模块开始
             */

            $("#shanchuciwu" + i).click(function () {
                //点击删除此物 则会在删除此购物车栏后 同时删除对应的订单
                //ajax请求
                $.ajax({
                    method: "POST",
                    url: "/MyChannel/ordersAction_deleteShoppingCart.action",
                    data: { ShoppingcartId: item.shoppingcartId ,deleteOrderTo: "yes",orderId: item.OrdersId}

                })
                    .done(function( msg ) {
                        if(msg === "delete shoppingcart suceess"){
                            console.log("在购物车內删除完毕 删除该购物车栏完毕 准备将此订单也一并删除");
                            //刷新此页面
                            window.location.reload();
                        }else {
                            console.log("删除购物车栏失败 请检查异常栈 sad" + msg);
                        }
                    });
                //ajax请求结束
            });
            /***
             * 删除此物模块结束
             */
            i = i + 1;
            $(".personalInformationRightDivDown").animate({opacity: 1}, 800, "swing");

            console.log("处理" + item.OrdersId + "结束");
        });

        //查看是否有订单 有的话 添加一个全部购买的按钮
        if(json.shoppingcartList.length !== 0){
            console.log("订单数量: " + json.shoppingcartList.length);
            $("#personalInformationRightDivUl").append("<div style='margin-top: 20px'> " +
                "<button id='allBuyButton' type='button' class='btn btn-success'>全部购买</button> " +
                "</div>");

            //为全部购买添加click事件
            $("#allBuyButton").click(function () {
                //发送userName 后台就直接查询到该用户的所有购物车内容 然后在后台直接一起支付 前台就生成一个支付页面

                //生成支付页面
                // 实现点击立即购买后 弹出对话框
                $("#replyZheZhao").css("display", "block");
                $("#replyZheZhao").animate({opacity: ".6"}, 800, "easeInOutQuart", function () {
                    $(".goodsBuyDiv").css("display", "block");
                    $(".goodsBuyDiv").animate({opacity: "1"}, 400, "easeInOutQuart");
                });
                // 实现将对话框中的订单信息显示
                //填入对话框中对应内容
                $(".good-info").next().text("价格: " + sumMoney + "¥");

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
                    //删除该用户所有的ShoppingCart
                    //ajax请求
                    $.ajax({
                        method: "POST",
                        url: "/MyChannel/ordersAction_deleteAllShoppingCart.action",
                        data: { userName: userName ,deleteOrderTo: "no"}

                    })
                        .done(function( msg ) {
                            if(msg === "all buy success!"){
                                console.log("在购物车內支付完毕 删除该购物车栏完毕 准备将此订单转变为待发货状态");
                                alert("支付成功!");
                                window.location.reload();
                            }else {
                                console.log("删除购物车栏失败 请检查异常栈 sad" + msg);
                            }
                        });
                    //ajax请求结束
                });

            });

        }else {
            console.log("订单数量: 0");
        }


    }
});