
$(document).ready(function () {
    //加载可供选择的商品列表
    //加载商品列表
    $.ajax({
        url: '/MyChannel/goodAction_getGoodList.action',
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
        if ($(".recent-posts-goodsLi").length != 0) {
            $(".recent-posts-goodsLi").remove();
        }
        var json = eval("("+tt+")"); //数组
        var tt = "";
        $.each(json.good , function (index,item) {
            console.log("处理" + item.GoodId);
            $(".recent-posts").prepend(
                "<li id='recent-posts-goodsLi"+item.GoodId+"' class='recent-posts-goodsLi'>" +
                "<div class='user-thumb'><img width='40' height='40' alt='goodImg' src='"+item.GoodImgUrl430+"'></div>" +
                "<div class='article-post'>" +
                "<span class='user-info'> 商品名: "+item.GoodName+" / 商品库存: "+item.GoodStock+"  / 商品积分: "+item.GoodPoint+"  / 商品折扣: "+item.GoodDiscount+" </span>" +
                "<p>"+item.GoodDescrible+"</p>" +
                "</div>" +
                "</li>"
            );

            //处理整个li的点击事件
            $("#recent-posts-goodsLi" + item.GoodId).click(function () {
                //商品名写入input中
                $("#adsGoodName").val(item.GoodName);
            });

            console.log("处理" + item.GoodId + "结束");
        });
    }



    $("#addNewAdsButton").click(function () {
        //去除所有提示
        $("#adsImgNoteSpan").next().text("");
        $("#adsGoodNameNoteSpan").next().text("");

        //检测新增地址是否全部填写完毕
        if($("#adsImg").val() === ""){
            $("#adsImgNoteSpan").next().text("请上传此广告图片");
        }else if($("#adsGoodName").val() === ""){
            $("#adsGoodNameNoteSpan").next().text("请填写您的广告对应的商品名");
        }else {
            //提交订单
            alert("广告提交成功！");
            $("#addNewAdsForm").submit();

        }
    })
});