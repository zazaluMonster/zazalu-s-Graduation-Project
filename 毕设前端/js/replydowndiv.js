
$(document).ready(function () {
    // 全局Fromdata 封装了用户的所有想法送的数据
    var godFormData = new FormData();
    jQuery.easing.def = "easeOutElastic";


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
            godFormData.append('goodsEvaluateReplyForm', document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0]);
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
                            "<div class='deletePictureDiv'><i class='icon-remove-sign icon-2x'></i></div>" +
                            "<img style='width: 127px;height: " + height + "px;margin-top: -" + marginTop + "px'  src='" + p_fr.target.result + "' />" +
                            "</li>"
                        );
                    } else {
                        // 高度小于宽度情况
                        var prop = 127 / imgs.height;
                        var width = Math.round(imgs.width * prop);
                        var marginLeft = (width - 127) / 2;
                        $("#goodsEvaluateReplyDownDiv-uploadPicture-Ul").append(
                            "<li class='goodsEvaluateReplyDownDiv-uploadPicture-li'>" +
                            "<div class='deletePictureDiv'><i class='icon-remove-sign icon-2x'></i></div>" +
                            "<img style='max-width: none;height: 127px;width: " + width + "px;margin-left: -" + marginLeft + "px'  src='" + p_fr.target.result + "' />" +
                            "</li>"
                        );
                    }
                }
            };
        }
    });


    // 删除图片
    

    $("#goodsEvaluateReplyDownDiv-first-a1").click(function () {
        if ($("#goodsEvaluateReplyDownDiv-second-textarea").val().trim() == "" || $("#goodsEvaluateReplyDownDiv-second-textarea").val() == null) {
            alert("您还没输入内容呢")
        } else if (document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0] === 'undefined') {
            alert("您不想上传一些图片吗？")
        } else {
            var form = $('#goodsEvaluateReplyDownDiv-second-addPictureInput');
            alert(form.prop("multiple"));
            var pics = form.prop("files");
            console.log(pics);
            alert($('#goodsEvaluateReplyDownDiv-second-textarea').val());
            godFormData.append('goodsEvaluateReplyForm', $('#goodsEvaluateReplyDownDiv-second-textarea').val());
            console.log(godFormData.getAll('goodsEvaluateReplyForm'));
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

});

