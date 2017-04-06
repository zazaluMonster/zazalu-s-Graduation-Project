
$(document).ready(function () {
    $("#addGoodsColorButton").click(function () {
        alert("1");
        $("#addGoodsColorButton").before(
           "<div data-color-format='rgb' data-color='rgb(155, 142, 180)' class='input-append color colorpicker colorpicker-rgb'><input type='text' value='rgb(155, 142, 180)' class='span11' /><span class='add-on'><i style='background-color: rgb(155, 142, 180)'></i></span></div>"
        );
    });


});