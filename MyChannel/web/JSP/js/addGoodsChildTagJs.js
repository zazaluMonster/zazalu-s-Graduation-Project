
$(document).ready(function () {
    var tagsi = 2;
    $("#addGoodsChildTagButton").click(function () {
        $("#addGoodsChildTagButton").before(
            "<label class='control-label'>子标签" +tagsi+ " :</label><div class='controls'><input type='text' class='span2' placeholder='请输入子标签名' /></div>"
        );
        tagsi = tagsi+1;
    });


});