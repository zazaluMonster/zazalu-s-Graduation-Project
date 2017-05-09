
$(document).ready(function () {

    //检测商品名是否存在
    $("#GoodName").blur(function () {
        if($("#GoodName").val() === "" || $("#GoodName").val().length > 6){
            $("#GoodName").next().text("请填写商品名，最大6位中文或者英文");
        }else {
            //获取商品名
            var goodName = $("#GoodName").val();
            //ajax发送到后台
            //ajax请求
            $.ajax({
                method: "POST",
                url: "/MyChannel/goodAction_verifyGoodName.action",
                data: { goodName: goodName }
            })
                .done(function( msg ) {
                    if(msg === "no this good"){
                        $("#GoodName").next().text("");
                    }else {
                        //表明商品名已经存在
                        console.log(msg);
                        $("#GoodName").next().text("该商品已经存在");
                    }
                });
            //ajax请求结束
        }

    });



    $("#addNewGoodButton").click(function () {
        if($("#GoodName").next().text() === "该商品已经存在"){

        }else {
            //去除所有提示
            $("#GoodName").next().text("");
            $("#GoodDes").next().text("");
            $("#GoodStock").next().text("");
            $("#GoodPrice").next().text("");
            $("#GoodNetWeight").next().text("");
            $("#addGoodsColorButton").next().text("");
            $("#GoodDiscount").next().text("");
            $("#GoodPoint").next().text("");
            $("#GoodMessage").next().next().text("");
            $("#addGoodImgSpan").next().text("");
            console.log($("#GoodImgUrl30").val());

            //检测新增地址是否全部填写完毕
            if ($("#GoodName").val() === "" || $("#GoodName").val().length > 6) {
                $("#GoodName").next().text("请填写商品名，最大6位中文或者英文");
            } else if ($("#GoodDes").val() === "" || $("#GoodName").val().length > 100) {
                $("#GoodDes").next().text("请填写广告描述 最大100位中文或者英文");
            } else if ($("#GoodStock").val() === "") {
                $("#GoodStock").next().text("请填写该香水可以提供的库存");
            } else if ($("#GoodPrice").val() === "") {
                $("#GoodPrice").next().text("请填写该香水可以提供的库存");
            } else if ($("#GoodNetWeight").val() === "") {
                $("#GoodNetWeight").next().text("请填写该香水可以提供的净含量种类");
            } else if ($("#GoodMessage").val() === "") {
                $("#GoodMessage").next().next().text("请填写商品补充内容");
            } else if ($("#GoodImgUrl30").val() === "") {
                $("#addGoodImgSpan").next().text("请上传30x30图片");
            } else if ($("#GoodImgUrl60").val() === "") {
                $("#addGoodImgSpan").next().text("请上传60x60图片");
            } else if ($("#GoodImgUrl164").val() === "") {
                $("#addGoodImgSpan").next().text("请上传164x164图片");
            } else if ($("#GoodImgUrl430").val() === "") {
                $("#addGoodImgSpan").next().text("请上传430x430图片");
            } else {
                //提交订单
                $("#addNewGoodForm").submit();
            }
        }
    })
});