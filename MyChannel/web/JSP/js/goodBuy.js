$(document).ready(function () {

    /***
     * 立即购买模块开始
     */

    // 立即购买按钮
    $("#buyNowButton").click(function () {
        var userBuyQuantity = $(".goodsInformationBuyQuantity").text();
        var userSelectNetWeight = $("#goodNetWeight").val();
        var userBuyGoodName = $("#goodName").val();
        var userSelectColor = $("#goodColor").val();
        var userBuyGoodId = $("#goodId").val();
        //判断是否已经选择完净含量 颜色 和数量
        if (userSelectNetWeight === "" || userSelectColor === "") {
            alert("请选择商品类别!");
        } else {
            // 实现点击立即购买后 弹出对话框
            $("#replyZheZhao").css("display", "block");
            $("#replyZheZhao").animate({opacity: ".6"}, 800, "easeInOutQuart", function () {
                $(".goodsBuyDiv").css("display", "block");
                $(".goodsBuyDiv").animate({opacity: "1"}, 400, "easeInOutQuart");
            });

            //计算购买数量 然后填入表单
            $("#goodBuyQuantity").val(userBuyQuantity);
            // 实现将对话框中的订单信息显示
            //取出所有的信息
            var howMuchMoney;
            console.log($(".goodsInfomationDiscountSpan"));
            if ($(".goodsInfomationDiscountSpan") !== undefined || $(".goodsInfomationDiscountSpan") !== null) {
                console.log("计算促销价格" + Number(userBuyQuantity) + (Number($(".goodsInfomationDiscountSpan").text())));
                howMuchMoney = Math.round(Number(userBuyQuantity) * (Number($(".goodsInfomationDiscountSpan").text())));

            } else {
                console.log("计算普通价格");
                howMuchMoney = Math.round(Number(userBuyQuantity) * (Number($(".goodsInfomationPriceSpan").text())));
            }
            //填入对话框中对应内容
            $(".good-info").text(" 商品名: " + userBuyGoodName + " / 净含量: " + userSelectNetWeight + " / 购买数量: " + userBuyQuantity + " ");
            $(".good-info").next().text("价格: " + howMuchMoney + "¥");

            //生成未付款订单
            //提交隐藏域中的表单信息 用于后台生成一个订单
            //ajax请求
            $.ajax({
                method: "POST",
                url: "/MyChannel/ordersAction_bornNewOrder.action",
                data: {
                    GoodId: userBuyGoodId,
                    GoodName: userBuyGoodName,
                    GoodNetWeight: userSelectNetWeight,
                    GoodColor: userSelectColor,
                    GoodBuyQuantity: userBuyQuantity
                }
            })
                .done(function (msg) {
                    console.log("新订单号: " + msg);
                    //msg是新订单的订单号
                    $("#ordersId").val(msg);
                });
            //ajax请求结束

        }
    });

    // 点击遮罩 取消g购买
    $("#replyZheZhao , .goodsBuyDiv-fourth").click(function () {
        //将支付弹出框隐藏
        $(".goodsBuyDiv").animate({opacity: "0"}, 800, "easeInOutQuart", function () {
            $(".goodsBuyDiv").css("display", "none");
        });
        $("#replyZheZhao").animate({opacity: "0"}, 800, "easeInOutQuart", function () {
            $("#replyZheZhao").css("display", "none");
        });
        //将刚刚生成的订单取消掉
        if ($("#ordersId").val() !== "") {
            //ajax请求
            $.ajax({
                method: "POST",
                url: "/MyChannel/ordersAction_deleteOrder.action",
                data: {OrderId: $("#ordersId").val()}
            })
                .done(function (msg) {
                    if (msg === "delete order success") {
                        console.log("删除新订单成功");
                    } else {
                        console.log("删除失败 请查看异常栈" + msg);
                    }

                });
            //ajax请求结束
        }
    });
    //支付按钮
    $(".goodsBuyDiv-third").click(function () {
        //生成已付款未发货订单
        $("#goodBuyForm").submit();
        //转到支付完成页面 然后再转到买方的个人信息 待发货页面

    });
    /***
     * 立即购买模块结束
     */

    /***
     * 加入购物车模块开始
     */

    //点击加入购物车按钮
    $("#addShoppingCartButton").click(function () {
        //和立即购买一样 点击加入购物车就会生成新订单 不过同时还是将该订单放入购物车 等待支付
        var userBuyQuantity = $(".goodsInformationBuyQuantity").text();
        var userSelectNetWeight = $("#goodNetWeight").val();
        var userBuyGoodName = $("#goodName").val();
        var userSelectColor = $("#goodColor").val();
        var userBuyGoodId = $("#goodId").val();
        //判断是否已经选择完净含量 颜色 和数量
        if (userSelectNetWeight === "" || userSelectColor === "") {
            alert("请选择商品类别!");
        } else if ($("#addShoppingCartSpan").text() === "加 入 成 功 !") {
            alert("请不要重复提交");
        } else {
            //修改加入购物车按钮外观 变为成功添加
            $("#addShoppingCartLi").removeClass("bg_lo");
            $("#addShoppingCartLi").addClass("bg_dg");
            $("#addShoppingCartButton").find("i").removeClass("icon-shopping-cart");
            $("#addShoppingCartButton").find("i").addClass("icon-ok");
            $("#addShoppingCartSpan").text("加 入 成 功 !");

            //计算购买数量 然后填入表单
            $("#goodBuyQuantity").val(userBuyQuantity);
            //ajax请求
            $.ajax({
                method: "POST",
                url: "/MyChannel/ordersAction_bornNewOrder.action",
                data: {
                    GoodId: userBuyGoodId,
                    GoodName: userBuyGoodName,
                    GoodNetWeight: userSelectNetWeight,
                    GoodColor: userSelectColor,
                    GoodBuyQuantity: userBuyQuantity
                }
            })
                .done(function (msg) {
                    console.log("新订单号: " + msg);
                    //msg是新订单的订单号
                    $("#ordersId").val(msg);

                    //新订单生成成功后 再次使用ajax请求 去加入购物车中
                    $.ajax({
                        method: "POST",
                        url: "/MyChannel/ordersAction_addShoppingCart.action",
                        data: {OrderId: msg}
                    })
                        .done(function (ms) {
                            if (ms === "add new shopping cart success") {
                                console.log("添加购物车成功");
                            } else {
                                console.log("添加失败 请查看异常栈" + ms);
                            }

                        });
                    //ajax请求结束
                });
            //ajax请求结束

        }
    })

    /***
     * 加入购物车模块开始
     */
});

