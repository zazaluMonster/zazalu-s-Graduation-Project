
$(document).ready(function () {
    //


    $("#yearSelect").change(function () {
        var selectedYear = $(this).children('option:selected').val();
        //获取所选年份的交易额
        $.ajax({
            url: '/MyChannel/ordersAction_getYearMoney.action',
            type: 'GET',
            timeout: 1000,
            data: {selectedYear: selectedYear},
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
        function erryFunction(msg) {
            console.log("error!" + msg);
        }

        function succFunction(tt) {
            //分析Json 然后动态生成收货地址的各个li
            //先删除所有的li,从而使得每次都会重新向服务器获取最新的收货地址
            if ($(".recent-posts-goodsLi").length != 0) {
                $(".recent-posts-goodsLi").remove();
            }
            var maxMoney = 0;
            var json = eval("("+tt+")"); //数组
            var tt = "";
            $.each(json.selectedYear , function (index,item) {
                if (Number(item.money) > maxMoney) {
                    maxMoney = Number(item.money);
                }
            });

            $.each(json.selectedYear , function (index,item) {
                var bili = item.money / maxMoney;
                bili = bili.toFixed(2);
                $(".form-actions").before(
                    "<li class='recent-posts-goodsLi'><div class='article-post'><span>" + item.month + "月 / 交易额 : " + item.money + "¥</span></div></li>"
                );
                if(1000*bili > 96){
                    $(".form-actions").prev().animate({width: 1000*bili+"px"},1000,"swing");
                }else {
                    $(".form-actions").prev().animate({width: "96px"},1000,"swing");
                }
            });
        }

    });

});