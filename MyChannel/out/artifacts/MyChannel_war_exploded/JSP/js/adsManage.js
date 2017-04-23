
$(document).ready(function () {
    //加载广告列表
    $.ajax({
        url: '/MyChannel/advertisementAction_getAdsList.action',
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
        //分析Json 然后动态生成收货地址的各个li
        //先删除所有的li,从而使得每次都会重新向服务器获取最新的收货地址
        if ($(".recent-posts-goodsLi").length != 0) {
            $(".recent-posts-goodsLi").remove();
        }
        var json = eval("("+tt+")"); //数组
        var tt = "";
        $.each(json.ads , function (index,item) {
            console.log("处理" + item.AdsId);
            $(".recent-posts").prepend(
            "<li class='recent-posts-goodsLi'>" +
                "<div class='user-thumb'><img width='40' height='40' alt='adsImg' src='"+item.AdsImgUrl+"'></div>" +
                "<div class='article-post'>" +
                    "<div class='fr'><a id='deleteAds"+item.AdsId+"' class='btn btn-danger btn-mini'>Delete</a></div>" +
                    "<span class='user-info'> 商品名: "+item.GoodName+" / 商品库存: "+item.GoodStock+"  / 商品积分: "+item.GoodPoint+"  / 商品折扣: "+item.GoodDiscount+" </span>" +
                    "<p>"+item.GoodDescrible+"</p>" +
                "</div>" +
            "</li>"
            );
            //处理Delete的click事件
            $("#deleteAds" + item.AdsId).click(function () {
                //获取要删除的广告id
                var adsId = item.AdsId;
                //将此id用ajax发送到后台处理
                $.ajax({
                    method: "POST",
                    url: "/MyChannel/advertisementAction_deleteAds.action",
                    data: { adsId: adsId}
                })
                    .done(function( msg ) {
                        if(msg === "delete Ads success!"){
                            console.log("删除成功");
                            location.reload();
                        }else {
                            console.log("删除失败 请查看异常栈信息");
                            alert("不为人知的错误发生了!请联系程序员!");
                        }
                    });
                //删除广告ajax结束
            });
            console.log("处理" + item.AdsId + "结束");
        });
    }

    //广告添加button
    $("#addNewAds").click(function () {
        window.location.href='/MyChannel/JSP/BackEnd_AdsManage.jsp';
    })
});