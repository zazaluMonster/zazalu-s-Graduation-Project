
$(document).ready(function () {

    $(".searchType").on("select2:select", function () {
        var searchType = $("#select2-searchType-container").text();
        if(searchType === "时间"){
            $("#listSearch").next().css("margin-top","2px");
            $("#listSearch").css("display","none");
            $("#timeSearchYear").css("display","block");
            $("#timeSearchMonth").css("display","block");
            $("#timeSearchDay").css("display","block");
        }else {
            $("#listSearch").next().css("margin-top","0px");
            $("#listSearch").css("display","inline");
            $("#timeSearchYear").css("display","none");
            $("#timeSearchMonth").css("display","none");
            $("#timeSearchDay").css("display","none");
        }
    });

    $(".tip-bottom").click(function () {
        //获取搜索类型还有要搜索的值
        var searchType = $("#select2-searchType-container").text();
        var searchValue = $("#listSearch").val();
        console.log("搜索类型: " + searchType + " 搜索值: " + searchValue);
        //按不同类型提交到后台进行处理
        if (searchType === "时间"){
            var year = $("#select2-year-container").text();
            var month = $("#select2-month-container").text();
            var day = $("#select2-day-container").text();
            searchValue = year + "-" + month + "-" + day;
            console.log("要搜索的时间为: " + searchValue);
            searchByType(searchType,searchValue);
        }else {
            console.log("按 " + searchType +"搜索");
            searchByType(searchType,searchValue);
        }

    });


    function searchByType(searchType,searchValue) {
        $.ajax({
            url: '/MyChannel/ordersAction_searchOrdersByType.action',
            type: 'POST',
            timeout: 1000,
            data: { searchType: searchType,searchValue: searchValue},
            cache: false,
            crossDomain: true,
            beforeSend: LoadFunction, //加载执行方法
            error: erryFunction,  //错误执行方法
            success: succFunction //成功执行方法
        });
    }

    function LoadFunction() {
        //在请求数据的时候 要显示请求中字样告知用户等待片刻
        console.log("loading...");
    }
    function erryFunction() {
        console.log("error!");
    }

    function succFunction(tt) {
        //分析Json 然后动态生成收货地址的各个li
        //先删除所有的li,从而使得每次都会重新向服务器获取最新的收货地址
        if ($(".allOrdersTr").length != 0) {
            $(".allOrdersTr").remove();
        }
        var json = eval("("+tt+")"); //数组
        var tt = "";
        $.each(json.searchOrdersResult , function (index,item) {
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
        });
    }

});