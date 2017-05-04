$(document).ready(function () {
    // 全局Fromdata 封装了用户的所有想法送的数据
    var godFormData = new FormData();
    jed = "easeOutElastic";
    var replydowndivi = 0;


    // 添加图片
    $("#goodsEvaluateReplyDownDiv-second-addPictureInput").change(function () {
        var fr = false;
        if (typeof window.FileReader === 'undefined') {
            alert("抱歉你的浏览器不支持FileReader");
        } else {
            if ($(".goodsEvaluateReplyDownDiv-uploadPicture").css("height") == "0px") {
                $(".goodsEvaluateReplyDownDiv-uploadPicture").animate({height: "145px"}, 800, jed);
            }
            fr = new FileReader();
            godFormData.append('goodsEvaluateReplyImg' + replydowndivi, document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0]);
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
                            "<div class='deletePictureDiv'><i class='icon-remove-sign icon-2x' id='" + "icon-remove-sign" + replydowndivi + "' ></i></div>" +
                            "<img id='goodsEvaluateReplyImg" + replydowndivi + "' style='width: 127px;height: " + height + "px;margin-top: -" + marginTop + "px'  src='" + p_fr.target.result + "' />" +
                            "</li>"
                        );
                        console.log("图片id = goodsEvaluateReplyImg" + replydowndivi + "生成完毕");
                    } else {
                        // 高度小于宽度情况
                        var prop = 127 / imgs.height;
                        var width = Math.round(imgs.width * prop);
                        var marginLeft = (width - 127) / 2;
                        $("#goodsEvaluateReplyDownDiv-uploadPicture-Ul").append(
                            "<li class='goodsEvaluateReplyDownDiv-uploadPicture-li'>" +
                            "<div class='deletePictureDiv'><i class='icon-remove-sign icon-2x' id='" + "icon-remove-sign" + replydowndivi + "' ></i></div>" +
                            "<img id='goodsEvaluateReplyImg" + replydowndivi + "' style='max-width: none;height: 127px;width: " + width + "px;margin-left: -" + marginLeft + "px'  src='" + p_fr.target.result + "' />" +
                            "</li>"
                        );
                        console.log("图片id = goodsEvaluateReplyImg" + replydowndivi + "生成完毕");
                    }
                    // 删除图片
                    $("#icon-remove-sign" + replydowndivi).click(function () {
                        $(this).parent().parent().remove();
                        var getId = $(this).parent().next().attr("id");
                        godFormData.delete(getId);
                        console.log("成功删除  图片id = " + getId);
                        replydowndivi = replydowndivi - 1;
                        if ($(".goodsEvaluateReplyDownDiv-uploadPicture-li").length == 0) {
                            $(".goodsEvaluateReplyDownDiv-uploadPicture").animate({height: "0px"}, 800, "easeInElastic");
                        }
                        // 只能上传四张图片
                        if (replydowndivi != 4) {
                            $("#goodsEvaluateReplyDownDiv-second-addPictureInput").removeAttr("disabled");
                            $("#goodsEvaluateReplyDownDiv-second-addPicture").css("opacity", "1");
                        }
                    });
                    // 改变图片id
                    replydowndivi = replydowndivi + 1;
                    // 只能上传四张图片
                    if (replydowndivi == 4) {
                        $("#goodsEvaluateReplyDownDiv-second-addPictureInput").attr("disabled", "disabled");
                        $("#goodsEvaluateReplyDownDiv-second-addPicture").css("opacity", "0.2");
                    }
                }


            };
        }
    });

    $("#goodsEvaluateReplyDownDiv-first-a1").click(function () {
        if (document.getElementById('goodsEvaluateReplyDownDiv-second-addPictureInput').files[0] === 'undefined') {
            console.log("您不想上传一些图片吗？");
        }
        if ($("#goodsEvaluateReplyDownDiv-second-textarea").val().trim() == "" || $("#goodsEvaluateReplyDownDiv-second-textarea").val() == null) {
            alert("评价内容不能为空");
        } else {
            godFormData.append('goodsEvaluateReplyForm', encodeURI($('#goodsEvaluateReplyDownDiv-second-textarea').val()));
            godFormData.append('evaluateId', rdd_evaluateId);
            $.ajax('/MyChannel/addEvaluateServlet', {
                method: "POST",
                data: godFormData,
                processData: false,
                contentType: false,
                success: function (msg) {
                    if (msg === "add evaluate success") {
                        //刷新页面
                        window.location.href="http://localhost:8080/MyChannel/JSP/GoodPage.jsp?toEvaluateDiv=1";
                    }
                },
                error: function () {
                    console.log('Upload error');
                }
            });
        }
    });


    // // 点击回复弹出来的效果
    // $(".goodsEvaluateReplyButton").click(function () {
    //     //获取哪个评论被点击
    //     var evaluateId = $(this).attr('id').substring(24);
    //     console.log("被点击的评论id为" + evaluateId);
    //     rdd_evaluateId = evaluateId;
    //     $("#replyZheZhao").css("display", "block");
    //     $("#replyZheZhao").animate({opacity: ".6"}, 800, "easeInOutQuart");
    //     $(".goodsEvaluateReplyDownDiv").animate({bottom: "0%"}, 800, "easeInOutQuart");
    // });


    // 点击遮罩 取消回复
    $("#replyZheZhao,#goodsEvaluateReplyDownDiv-first-a2").click(function () {
        $(".goodsEvaluateReplyDownDiv").animate({bottom: "-50%"}, 800, "easeInOutQuart");
        $("#replyZheZhao").animate({opacity: "0"}, 800, "easeInOutQuart", function () {

            $("#replyZheZhao").css("display", "none");
        });
    });

});

