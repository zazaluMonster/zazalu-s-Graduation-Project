
$(document).ready(function () {
    //加载菜单项

    //加载总商品数量
    $.ajax({
        method: "POST",
        url: "/MyChannel/goodAction_getGoodNumber.action",
    })
        .done(function( goodNumber ) {
            //goodNumber是商品数量
            console.log(goodNumber);
            var pageNumber = Math.floor(goodNumber / 12) + 1;
            console.log("页数: " + pageNumber);
            //动态生成分页索引
            for (var i = 0; i < pageNumber;++i){
                console.log("生成第" + (i+1) + "页");
                //如果是第一页 自动变成当前页
                if (i === 0){
                    $("#paginationDiv").append("<li id='firstPage' class='pageIndexLi'> <a>"+ (i+1) +"</a> </li>");
                }else {
                    $("#paginationDiv").append("<li class='pageIndexLi'> <a>"+ (i+1) +"</a> </li>");
                }
            }
            //为页数添加click事件
            $(".pageIndexLi").click(function () {
                //去掉所有页数的蓝色
                $(".pageIndexLi").removeClass("active");
                //被点击的页数要变成蓝色 表示当前页
                $(this).addClass("active");
                //回到顶部 方便用户查看
                if(document.body.scrollTop > 660){
                    $('body,html').animate({scrollTop:660},1000);
                }
                //获取是第几页
                var pageIndex = $(this).find("a").text();
                console.log("被点击的页数是: " + pageIndex);
                //获取这一页的商品
                $.ajax({
                    url: '/MyChannel/goodAction_getGoodListByPageIndex.action',
                    type: 'GET',
                    data: { pageIndex: pageIndex},
                    timeout: 1000,
                    cache: false,
                    crossDomain: true,
                    beforeSend: LoadFunction, //加载执行方法
                    error: erryFunction,  //错误执行方法
                    success: succFunction //成功执行方法
                });
            });
            $("#firstPage").click();


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
        if ($(".span2").length != 0) {
            $(".span2").remove();
        }
        var json = eval("("+tt+")"); //数组
        var tt = "";
        $.each(json.good , function (index,item) {
            console.log("处理" + item.GoodName);
            //看是否是打折商品
            if(item.GoodDiscount == 10){

                //没打折
                console.log("商品"+item.GoodName + "打折率" + item.GoodDiscount);
                $(".thumbnails").append("<li class='span2'> <a> <img src='"+item.GoodImgUrl430+"'> </a> " +
                    "<div class='actions'><a class='lightbox_trigger' href='/MyChannel/goodAction_toGoodPage.action?goodId="+item.GoodId+"'><i class='icon-search'></i></a> </div> " +
                    "<div >" +
                    " <div class='goodsname'><p>"+item.GoodName+"</p></div>" +
                    " <div class='goodsdescribe'>"+item.GoodDescrible+"</div> " +
                    "</div> " +
                    "</li>"
                );
            }else {
                //打折的
                console.log("商品"+item.GoodName + "打折率" + item.GoodDiscount);
                $(".thumbnails").append("<li class='span2'> " +
                    "<a> " +
                    "<div class='actions-activity'>" +
                    "<p class='actions-activity-first-p'>活动中</p>" +
                    "<p class='actions-activity-second-p'>"+item.GoodStock+"</p>" +
                    "<p class='actions-activity-third-p'>仅剩</p>" +
                    "</div>" +
                    "<img src='"+item.GoodImgUrl430+"'> " +
                    "</a> " +
                    "<div class='actions'><a class='lightbox_trigger' href='/MyChannel/goodAction_toGoodPage.action?goodId="+item.GoodId+"'><i class='icon-search'></i></a> </div> " +
                    "<div >" +
                    " <div class='goodsname'><p>"+item.GoodName+"</p></div>" +
                    " <div class='goodsdescribe'>"+item.GoodDescrible+"</div> " +
                    "</div> " +
                    "</li>"
                );

            }
            // //处理Delete的click事件
            // $("#deleteGood" + item.GoodId).click(function () {
            //     //获取要删除的商品id
            //     var goodId = item.GoodId;
            //     //将此id用ajax发送到后台处理
            //     $.ajax({
            //         method: "POST",
            //         url: "/MyChannel/goodAction_deleteGood.action",
            //         data: { goodId: goodId}
            //     })
            //         .done(function( msg ) {
            //             if(msg === "delete Good success!"){
            //                 console.log("删除成功");
            //                 location.reload();
            //             }else {
            //                 console.log("删除失败 请查看异常栈信息");
            //                 alert("不为人知的错误发生了!请联系程序员!");
            //             }
            //         });
            //     //删除商品ajax结束
            // });

            // //处理Detail的click事件
            // $("#editGood"+ item.GoodId).click(function () {
            //     //获取要显示的商品的id
            //     var goodId = item.GoodId;
            //     //发送到后台 获取该商品的所有详细信息 随后在后台存入httpsession中!
            //     $.ajax({
            //         method: "POST",
            //         url: "/MyChannel/goodAction_saveGoodToHttpSession.action",
            //         data: { goodId: goodId}
            //     })
            //         .done(function( msg ) {
            //             if(msg === "save to session ok"){
            //                 //转发到详细商品页
            //                 window.location.href="/MyChannel/JSP/GoodManage_GoodManage_Success.jsp"
            //             }else {
            //                 console.log("删除失败 请查看异常栈信息");
            //                 alert("不为人知的错误发生了!请联系程序员!");
            //             }
            //         });
            // });
            console.log("处理" + item.GoodId + "结束");
        });
    }

});