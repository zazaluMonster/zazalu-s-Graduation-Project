
$(document).ready(function () {
    // 全局Fromdata 封装了用户的所有想法送的数据
    var godFormData = new FormData();
    jQuery.easing.def = "easeOutElastic";
    var i = 0;


    // 添加图片
    $("#goodsEvaluateReplyDownDiv-second-addPictureInput").change(function () {
        var fr = false;
        if (typeof window.FileReader === 'undefined') {
            alert("抱歉你的浏览器不支持FileReader");
        } else {
            if ($(".goodsEvaluateReplyDownDiv-uploadPicture").css("height") == "0px") {
                $(".goodsEvaluateReplyDownDiv-uploadPicture").animate({ height: "145px" }, 800, jQuery.easing.def);
            }
            fr = new FileReader();
            godFormData.append('goodsEvaluateReplyImg' + i, document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0]);
            fr.readAsDataURL(document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0]);
            fr.onload = function (p_fr) {
                var imgs = new Image();
                imgs.src = p_fr.target.result;
                //因为上一步的imgs.src是异步的 所以浏览器执行太快了 也许高宽还没来得及读入 就已经开始下面的代码了 所以为了保证下面的imgs.width等能够正常工作而不是返回0 所以就在onload里写
                imgs.onload = function () {
                    if (imgs.width < imgs.height) {
                        // 宽度小于高度情况
                        var prop = 127 / imgs.width;
                        var height = Math.round(imgs.height * prop);
                        var marginTop = (height - 127) / 2;
                        $("#goodsEvaluateReplyDownDiv-uploadPicture-Ul").append(
                            "<li class='goodsEvaluateReplyDownDiv-uploadPicture-li'>" +
                            "<div class='deletePictureDiv'><i class='icon-remove-sign icon-2x' id='" + "icon-remove-sign" + i + "' ></i></div>" +
                            "<img id='goodsEvaluateReplyImg" + i + "' style='width: 127px;height: " + height + "px;margin-top: -" + marginTop + "px'  src='" + p_fr.target.result + "' />" +
                            "</li>"
                        );
                    } else {
                        // 高度小于宽度情况
                        var prop = 127 / imgs.height;
                        var width = Math.round(imgs.width * prop);
                        var marginLeft = (width - 127) / 2;
                        $("#goodsEvaluateReplyDownDiv-uploadPicture-Ul").append(
                            "<li class='goodsEvaluateReplyDownDiv-uploadPicture-li'>" +
                            "<div class='deletePictureDiv'><i class='icon-remove-sign icon-2x' id='" + "icon-remove-sign" + i + "' ></i></div>" +
                            "<img id='goodsEvaluateReplyImg" + i + "' style='max-width: none;height: 127px;width: " + width + "px;margin-left: -" + marginLeft + "px'  src='" + p_fr.target.result + "' />" +
                            "</li>"
                        );
                    }
                    // 删除图片
                    $("#icon-remove-sign" + i).click(function () {
                        $(this).parent().parent().remove();
                        var getId = $(this).parent().next().attr("id");
                        godFormData.delete(getId);
                        alert("成功删除");
                        if ($(".goodsEvaluateReplyDownDiv-uploadPicture-li").length == 0) {
                            $(".goodsEvaluateReplyDownDiv-uploadPicture").animate({ height: "0px" }, 800, "easeInElastic");
                        }
                    });
                    // 改变图片id
                    i = i + 1;
                    // 只能上传四张图片
                    if (i == 4) {
                        $("#goodsEvaluateReplyDownDiv-second-addPictureInput").attr("disabled", "disabled");
                        $("#goodsEvaluateReplyDownDiv-second-addPicture").css("opacity", "0.2");
                    }
                }


            };
        }
    });

    $("#goodsEvaluateReplyDownDiv-first-a1").click(function () {
        if ($("#goodsEvaluateReplyDownDiv-second-textarea").val().trim() == "" || $("#goodsEvaluateReplyDownDiv-second-textarea").val() == null) {
            alert("您还没输入内容呢")
        } else if (document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0] === 'undefined') {
            alert("您不想上传一些图片吗？")
        } else {
            godFormData.append('goodsEvaluateReplyForm', $('#goodsEvaluateReplyDownDiv-second-textarea').val());
            for (var pair of godFormData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            $.ajax('/TestReply/testReply', {
                method: "POST",
                data: godFormData,
                processData: false,
                contentType: false,
                success: function () {
                    console.log('Upload success');
                },
                error: function () {
                    console.log('Upload error');
                }
            });
        }

    });


    // 点击回复弹出来的效果
    $(".goodsEvaluateReplyButton").click(function () {
        $("#replyZheZhao").css("display", "block");
        $("#replyZheZhao").animate({ opacity: ".6" }, 800, "easeInOutQuart");
        $(".goodsEvaluateReplyDownDiv").animate({ bottom: "0%" }, 800, "easeInOutQuart");

    })

    // 点击遮罩 取消回复
    $("#replyZheZhao,#goodsEvaluateReplyDownDiv-first-a2").click(function () {
        $(".goodsEvaluateReplyDownDiv").animate({ bottom: "-21%" }, 800, "easeInOutQuart");
        $("#replyZheZhao").animate({ opacity: "0" }, 800, "easeInOutQuart", function () {

            $("#replyZheZhao").css("display", "none");
        });
    });

});

