
$(document).ready(function () {
    $("#addNewGoodButton").click(function () {
        //去除所有提示
        $("#GoodName").next().text("");
        $("#GoodDes").next().text("");
        $("#GoodStock").next().text("");
        $("#GoodNetWeight").next().text("");
        $("#addGoodsColorButton").next().text("");
        $("#GoodDiscount").next().text("");
        $("#GoodPoint").next().text("");
        $("#GoodMessage").next().next().text("");
        $("#addGoodImgSpan").next().text("");
        console.log($("#GoodImgUrl30").val());

        //检测新增地址是否全部填写完毕
        if($("#GoodName").val() === "" || $("#GoodName").val().length > 6){
            $("#GoodName").next().text("请填写商品名，最大6位中文或者英文");
        }else if($("#GoodDes").val() === "" || $("#GoodName").val().length > 100){
            $("#GoodDes").next().text("请填写广告描述 最大100位中文或者英文");
        }else if($("#GoodStock").val() === ""){
            $("#GoodStock").next().text("请填写该香水可以提供的库存");
        }else if($("#GoodNetWeight").val() === ""){
            $("#GoodNetWeight").next().text("请填写该香水可以提供的净含量种类");
        }else if($("#GoodMessage").val() === ""){
            $("#GoodMessage").next().next().text("请填写商品补充内容");
        }else if($("#GoodImgUrl30").val() === ""){
            $("#addGoodImgSpan").next().text("请上传30x30图片");
        }else if($("#GoodImgUrl60").val() === ""){
            $("#addGoodImgSpan").next().text("请上传60x60图片");
        }else if($("#GoodImgUrl164").val() === ""){
            $("#addGoodImgSpan").next().text("请上传164x164图片");
        }else if($("#GoodImgUrl430").val() === ""){
            $("#addGoodImgSpan").next().text("请上传430x430图片");
        }else {
            //提交订单
            $("#addNewGoodForm").submit();
        }
    })
});