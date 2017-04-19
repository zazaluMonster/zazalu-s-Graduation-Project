$(document).ready(function () {
    var i = 1;
    var zazaluInterval;

    //导入图片必要的参数
    //参考http://fengyuanchen.github.io/cropper/的main.js代码
    var URL = window.URL || window.webkitURL;
    var $image = $('#image');
    var options = {
        aspectRatio: 1 / 1,
        preview: $("#preview164,#preview60,#preview30"),
        dragCrop: false,
        movable: false,
        rotatable: false,
        scalable: false,
        zoomable: false,
        mouseWheelZoom: false,
        touchDragZoom: false,
        cropBoxResizable: false,
        doubleClickToggle: false,
        crop: function (e) {
            // Output the result data for cropping image.
            console.log(e.x);
            console.log(e.y);
            console.log(e.width);
            console.log(e.height);
            console.log(e.rotate);
            console.log(e.scaleX);
            console.log(e.scaleY);
        },
        ready: function () {
            $("#image").cropper('setCropBoxData', {width: 164, height: 164});
        }
    };
    var uploadedImageURL;

    $('#image').cropper({
        aspectRatio: 1 / 1,
        preview: $("#preview164,#preview60,#preview30"),
        dragCrop: false,
        movable: false,
        rotatable: false,
        scalable: false,
        zoomable: false,
        mouseWheelZoom: false,
        touchDragZoom: false,
        cropBoxResizable: false,
        doubleClickToggle: false,
        crop: function (e) {
            // Output the result data for cropping image.
            console.log(e.x);
            console.log(e.y);
            console.log(e.width);
            console.log(e.height);
            console.log(e.rotate);
            console.log(e.scaleX);
            console.log(e.scaleY);
        },
        ready: function () {
            $("#image").cropper('setCropBoxData', {width: 164, height: 164});
        }
    });
    //用法参考https://segmentfault.com/q/1010000000267088
    $("#controlCropBoxTurnBigButtons").mousedown(zazaluBigMouseState).mouseup(zazaluBigMouseState);

    function zazaluBigMouseState(e) {
        if (e.type == "mouseup") {
            clearInterval(zazaluInterval);
        }
        if (e.type == "mousedown") {
            //code triggers on hold
            zazaluInterval = setInterval(function () {
                var cropBox = $("#image").cropper('getCropBoxData');
                var i = 1;
                var w = cropBox.width + i;
                var h = cropBox.height + i;
                var l = cropBox.left;
                var t = cropBox.top;
                $("#image").cropper('setCropBoxData', {left: l, top: t, width: w, height: h});
            }, 100);
        }
    }

    $("#controlCropBoxTurnSmallButtons").mousedown(zazaluSmallMouseState).mouseup(zazaluSmallMouseState);

    function zazaluSmallMouseState(e) {
        if (e.type == "mouseup") {
            clearInterval(zazaluInterval);
        }
        if (e.type == "mousedown") {
            //code triggers on hold
            zazaluInterval = setInterval(function () {
                var cropBox = $("#image").cropper('getCropBoxData');
                var i = -1;
                var w = cropBox.width + i;
                var h = cropBox.height + i;
                var l = cropBox.left;
                var t = cropBox.top;
                $("#image").cropper('setCropBoxData', {left: l, top: t, width: w, height: h});
            }, 100);
        }
    }

    // Import image
    //照搬了http://fengyuanchen.github.io/cropper/页面上的main.js中的代码
    var $inputImage = $('#inputImage');

    if (URL) {
        $inputImage.change(function () {
            var files = this.files;
            var file;

            if (!$image.data('cropper')) {
                return;
            }

            if (files && files.length) {
                file = files[0];

                if (/^image\/\w+$/.test(file.type)) {
                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                    }

                    uploadedImageURL = URL.createObjectURL(file);
                    $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
                    $inputImage.val('');
                } else {
                    window.alert('Please choose an image file.');
                }
            }
        });
    } else {
        $inputImage.prop('disabled', true).parent().addClass('disabled');
    }

    // $("#controlCropBoxTurnBigButtons").click(function () {
    //   var cropBox = $("#image").cropper('getCropBoxData');
    //   var i = 1;
    //   var w = cropBox.width + i;
    //   var h = cropBox.height + i;
    //   var l = cropBox.left;
    //   var t = cropBox.top;
    //   $("#image").cropper('setCropBoxData', { left: l, top: t, width: w, height: h });
    // });
    //
    // $("#controlCropBoxTurnSmallButtons").click(function () {
    //   var cropBox = $("#image").cropper('getCropBoxData');
    //   var i = -1;
    //   var w = cropBox.width + i;
    //   var h = cropBox.height + i;
    //   var l = cropBox.left;
    //   var t = cropBox.top;
    //   $("#image").cropper('setCropBoxData', { left: l, top: t, width: w, height: h });
    // });

    var $inputImage = $('#inputImage');

    if (URL) {
        $inputImage.change(function () {
            var files = this.files;
            var file;

            if (!$image.data('cropper')) {
                return;
            }

            if (files && files.length) {
                file = files[0];

                if (/^image\/\w+$/.test(file.type)) {
                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                    }

                    uploadedImageURL = URL.createObjectURL(file);
                    $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
                    $inputImage.val('');
                } else {
                    window.alert('Please choose an image file.');
                }
            }
        });
    } else {
        $inputImage.prop('disabled', true).parent().addClass('disabled');
    }


    $("#controlCropBoxSaveButtons").click(function () {
        //上传164x164版本
        $("#image").cropper('getCroppedCanvas').toBlob(function (blob) {
            var formData = new FormData();

            //修改第一个参数 即可在java后台生成对应的图片名
            formData.append('personalInformationHeadImg164', blob);
            formData.append('userName', $("#user-nav-userHeadId").text());

            $.ajax('/MyChannel/personalImgServlet', {
                method: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function () {
                    console.log('Upload success');
                },
                error: function () {
                    console.log('Upload error');
                }
            });
        });

        //上传60x60版本
        $("#image").cropper('getCroppedCanvas', {width: 60, height: 60}).toBlob(function (blob) {
            var formData = new FormData();
            //修改第一个参数 即可在java后台生成对应的图片名
            formData.append('personalInformationHeadImg60', blob);
            formData.append('userName', $("#user-nav-userHeadId").text());

            $.ajax('/MyChannel/personalImgServlet', {
                method: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function () {
                    console.log('Upload success');
                },
                error: function () {
                    console.log('Upload error');
                }
            });
        });

        //上传30x30版本
        $("#image").cropper('getCroppedCanvas', {width: 30, height: 30}).toBlob(function (blob) {
            var formData = new FormData();
            //修改第一个参数 即可在java后台生成对应的图片名
            formData.append('personalInformationHeadImg30', blob);
            formData.append('userName', $("#user-nav-userHeadId").text());

            $.ajax('/MyChannel/personalImgServlet', {
                method: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function () {
                    console.log('Upload success');
                },
                error: function () {
                    console.log('Upload error');
                }
            });
        });
    });


});