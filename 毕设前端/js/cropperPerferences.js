$(document).ready(function () {
  var i = 1;

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
      $("#image").cropper('setCropBoxData', { width: 164, height: 164 });
    }
  });

  $("#controlCropBoxTurnBigButtons").click(function () {
    var cropBox = $("#image").cropper('getCropBoxData');
    var i = 1;
    var w = cropBox.width + i;
    var h = cropBox.height + i;
    var l = cropBox.left;
    var t = cropBox.top;
    $("#image").cropper('setCropBoxData', { left: l, top: t, width: w, height: h });
  });

  $("#controlCropBoxTurnSmallButtons").click(function () {
    var cropBox = $("#image").cropper('getCropBoxData');
    var i = -1;
    var w = cropBox.width + i;
    var h = cropBox.height + i;
    var l = cropBox.left;
    var t = cropBox.top;
    $("#image").cropper('setCropBoxData', { left: l, top: t, width: w, height: h });
  });

  
  $("#controlCropBoxSaveButtons").click(function(){
    //上传164x164版本
	  $("#image").cropper('getCroppedCanvas').toBlob(function (blob) {
		    var formData = new FormData();

        //修改第一个参数 即可在java后台生成对应的图片名
		    formData.append('croppedImage', blob);

		    $.ajax('/TestCrop/testCrop', {
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
    $("#image").cropper('getCroppedCanvas', {width: 60,height: 60}).toBlob(function (blob) {
		    var formData = new FormData();
        //修改第一个参数 即可在java后台生成对应的图片名
		    formData.append('croppedImage', blob);

		    $.ajax('/TestCrop/testCrop', {
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
    $("#image").cropper('getCroppedCanvas', {width: 30,height: 30}).toBlob(function (blob) {
		    var formData = new FormData();
        //修改第一个参数 即可在java后台生成对应的图片名
		    formData.append('croppedImage', blob);

		    $.ajax('/TestCrop/testCrop', {
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