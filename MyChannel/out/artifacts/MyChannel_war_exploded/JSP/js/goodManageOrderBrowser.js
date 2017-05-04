
$(document).ready(function () {
    //加载所有的订单列表
    $.ajax({
        url: '/MyChannel/ordersAction_getAllOrders.action',
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
        //分析Json 然后动态生成商品的各个li
        //先删除所有的li,从而使得每次都会重新向服务器获取最新的收货地址
        if ($(".allOrdersTr").length != 0) {
            $(".allOrdersTr").remove();
        }
        var json = eval("("+tt+")"); //数组
        var tt = "";
        $.each(json.allOrdersList , function (index,item) {
            console.log("处理" + item.OrdersId);
            var isPay = item.isPay;
            var isUnSubscribe = item.isUnSubscribe;
            var isFaHuo = item.isFaHuo;
            var isEvaluate = item.isEvaluate;
            var statusText;
            var status;
            if(isPay === "0"){
                statusText = "支付中";
                status = "in-progress";
            }else if(isUnSubscribe === "0"){
                statusText = "待发货";
                status = "in-progress";
            }else if(isUnSubscribe === "1"){
                statusText = "已退订";
                status = "pending";
            }
            if (isPay === "1" && isUnSubscribe === "0" && isFaHuo === "1"){
                statusText = "交易完成";
                status = "done";
            }
            $("#allOrdersTbody").prepend("<tr class='allOrdersTr'> " +
                "<td id='ordersTitle"+item.OrdersId+"' class='taskDesc'><i class='icon-info-sign'></i> 订单号 : "+item.OrdersId+" / 买方名 : "+item.UserName+" / 商品名 : "+item.GoodName+" / 订单时间 : "+item.OrderTime+"</td> " +
                "<td class='taskStatus'><span class='"+status+"'>"+statusText+"</span></td> " +
                "<td class='taskOptions'><a id='goodManageFaHuo"+item.OrdersId+"' class='tip-top' data-original-title='dispatch'><i class='icon-ok'></i></a> <a id='goodManageCancle"+item.OrdersId+"' class='tip-top' data-original-title='cancle'><i class='icon-remove'></i></a></td> " +
                "</tr>"
            );
            //处理发货的click事件
            $("#goodManageFaHuo" + item.OrdersId).click(function () {
                //获取要发货的订单的Id
                var orderId = item.OrdersId;

                if(statusText === "待发货") {
                    //将此id用ajax发送到后台处理
                    $.ajax({
                        method: "POST",
                        url: "/MyChannel/ordersAction_orderFaHuo.action",
                        data: {orderId: orderId}
                    })
                        .done(function (msg) {
                            if (msg === "fahuo success") {
                                console.log("发货成功");
                                location.reload();
                            } else {
                                console.log("发货失败 请查看异常栈信息" + msg);
                                alert("不为人知的错误发生了!请联系程序员!");
                            }
                        });
                    //删除商品ajax结束
                }
            });
            //处理删除的click事件
            $("#goodManageCancle"+ item.OrdersId).click(function () {
                //获取要删除的订单的Id
                var orderId = item.OrdersId;
                //发送到后台
                $.ajax({
                    method: "POST",
                    url: "/MyChannel/ordersAction_cancleOrder.action",
                    data: {orderId: orderId}
                })
                    .done(function( msg ) {
                        if(msg === "cancle order success!"){
                            console.log("暴力删除订单成功");
                            location.reload();
                        }else {
                            console.log("删除失败 请查看异常栈信息" + msg);
                            alert("不为人知的错误发生了!请联系程序员!");
                        }
                    });
            });

            //点击标题后进入订单详情页面
            $("#ordersTitle" + item.OrdersId).click(function () {
                //获取要删除的订单的Id
                var orderId = item.OrdersId;
               //告知后台 点击了哪个订单 然后把此订单的详细内容存入到session中
                $.ajax({
                    method: "POST",
                    url: "/MyChannel/ordersAction_toOrderPage.action",
                    data: {orderId: orderId}
                })
                    .done(function( msg ) {
                        if(msg === "save order to session success"){
                            console.log("准备跳转至订单详情页面");
                            window.location.href="/MyChannel/JSP/GoodManage_Order_detail.jsp";
                        }else {
                            console.log("跳转失败 请查看异常栈信息" + msg);
                            alert("不为人知的错误发生了!请联系程序员!");
                        }
                    });
            });


            console.log("处理" + item.OrdersId + "结束");
        });
    }
});