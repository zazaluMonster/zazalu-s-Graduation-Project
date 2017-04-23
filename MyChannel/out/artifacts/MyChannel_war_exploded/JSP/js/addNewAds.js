
$(document).ready(function () {
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
            $("#addNewAdsForm").submit();

        }
    })
});