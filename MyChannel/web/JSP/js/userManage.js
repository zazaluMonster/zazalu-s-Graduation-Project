
$(document).ready(function () {
    //加载用户列表
    $.ajax({
        url: '/MyChannel/userAction_getUserList.action',
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
        $.each(json.user , function (index,item) {
            console.log("处理" + item.UserId);
            //做到 要把封停 根据信号量动态生成
            var userToggle;
            if(item.UserSemaphore === "1"){
                userToggle = "封停";
            }else {
                userToggle = "启用";
            }
            $(".recent-posts").prepend(
            "<li class='recent-posts-goodsLi'>" +
                "<div class='user-thumb'><img width='40' height='40' alt='goodImg' src='"+item.UserHeadUrl164+"'></div>" +
                "<div class='article-post'>" +
                    "<div class='fr'><a href='#' id='user"+item.UserId+"' class='btn btn-primary btn-mini'>"+userToggle+"</a> <a href='#' id='deleteUser"+item.UserId+"' class='btn btn-danger btn-mini'>删除</a></div>" +
                    "<span class='user-info'> 买方Id: "+item.UserId+" / 买方名: "+item.UserName+"  / 买方性别: "+item.UserSex+" </span>" +
                    "<p>"+"买方地址 : " + item.UserAddress+"</p>" +
                "</div>" +
            "</li>"
            );
            //处理userToggle的click事件
            $("#user" + item.UserId).click(function () {
                var userName = item.UserName;
                $.ajax({
                    method: "POST",
                    url: "/MyChannel/userAction_userManage.action",
                    data: { userName: userName}
                })
                    .done(function( msg ) {
                        if(msg === "success"){
                            console.log("toggle成功");
                            location.reload();
                        }else {
                            console.log("失败 请查看异常栈信息" + msg);
                        }
                    });
            });

            //处理删除的click事件
            $("#deleteUser"+ item.UserId).click(function () {
                var userName = item.UserName;
                $.ajax({
                    method: "POST",
                    url: "/MyChannel/userAction_deleteUser.action",
                    data: { userName: userName}
                })
                    .done(function( msg ) {
                        if(msg === "success"){
                            console.log("delete成功");
                            location.reload();
                        }else {
                            console.log("删除失败 请查看异常栈信息" + mag);
                        }
                    });
            });
        });
    }
});