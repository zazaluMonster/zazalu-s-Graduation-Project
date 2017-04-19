
$(document).ready(function(){

	// var login = $('#loginform');
	// var recover = $('#recoverform');
	// var speed = 400;

	$('#to-setup').click(function(){
		$("#loginform").slideUp(500,"swing",function(){
            //alert("slideUp方法已经完成")
        });
		// $("#recoverform").fadeIn(500,"swing",function(){

        // });
        $("#setupform").fadeIn(500,"swing",function(){

        });
	});
    $('#to-quick-setup').click(function(){
		$("#loginform").slideUp(500,"swing",function(){
            //alert("slideUp方法已经完成")
        });
		// $("#recoverform").fadeIn(500,"swing",function(){

        // });
        $("#quicksetupform").fadeIn(500,"swing",function(){

        });
	});
    $('#to-lostpassword').click(function(){
		$("#loginform").slideUp(500,"swing",function(){
            //alert("slideUp方法已经完成")
        });
		// $("#recoverform").fadeIn(500,"swing",function(){

        // });
        $("#recoverform").fadeIn(500,"swing",function(){

        });
	});
	$('#to-login-setup').click(function(){
		$("#loginform").slideDown(500,"swing",function(){
            //alert("slideUp方法已经完成")
        });
        // $("#recoverform").fadeOut(500,"swing",function(){

        // });
        $("#setupform").fadeOut(500,"swing",function(){

        });
		//$("#recoverform").hide();
		//$("#loginform").fadeIn();
	});
    $('#to-login-quicksetup').click(function(){
		$("#loginform").slideDown(500,"swing",function(){
            //alert("slideUp方法已经完成")
        });
        // $("#recoverform").fadeOut(500,"swing",function(){

        // });
        $("#quicksetupform").fadeOut(500,"swing",function(){

        });
		//$("#recoverform").hide();
		//$("#loginform").fadeIn();
	});
    $('#to-login-recover').click(function(){
		$("#loginform").slideDown(500,"swing",function(){
            //alert("slideUp方法已经完成")
        });
        // $("#recoverform").fadeOut(500,"swing",function(){

        // });
        $("#recoverform").fadeOut(500,"swing",function(){

        });
		//$("#recoverform").hide();
		//$("#loginform").fadeIn();
	});

    $("#setupFormSubmitButton").click(function(){
        //保证再点击一次提交后不能在点击,改变文本内容 每次click的时候检查文本内容是不是Confirm...
        //是的话 就说明已经点击过 正在发送请求
        if($("#setupFormSubmitButton").text() === "Confirm!"){
            $("#setupFormSubmitButton").text("Confirming...");
            $("#setupform").submit();
        }else if($("#setupFormSubmitButton").text() === "Confirming..."){
            alert("正在提交了 网速有点慢 请稍后...");
        }
    });

    $("#quicksetupFormSubmitButton").click(function () {
        if($("#quicksetup-username").val() !== "" && $("#quicksetup-password").val() !== "" && $("#quicksetupFormSubmitButton").text() === "Confirm!"){
            $("#quicksetupform").submit();
            $("#quicksetupFormSubmitButton").text("Confirm...")
        }else if ($("#quicksetupFormSubmitButton").text() === "Confirm..."){
            alert("请不要重复点击! 并且赶紧去你的验证邮箱中去查看下吧!");
        }
    });

    $("#lostPasswordRecoverButton").click(function () {
       if($("#to-lost-password").val() !== ""){
           $("#recoverform").submit();
       }else {
           alert("请填写邮箱名");
       }
    });

    $("#to-index").click(function () {
        if($("#to-username").val() !== "" && $("#to-password").val() !== "" && $("#to-index").text() === "Login!"){
            $("#loginform").submit();
            $("#to-index").text("Login...")
        }else if ($("#to-index").text() === "Login..."){
            alert("正在登录了 网速有点慢 请稍后...");
        }
    });

    // 判断浏览器是否为IE，因为IE9以及更早版本 不支持input标签的placeholder属性
    if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
        //这个类选择器表示找到所有有placeholder的input标签
        $('input[placeholder]').each(function(){ 
       
        var input = $(this);       
       
        $(input).val(input.attr('placeholder'));
               
        $(input).focus(function(){
             if (input.val() == input.attr('placeholder')) {
                 input.val('');
             }
        });
       
        $(input).blur(function(){
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        });
    });
    }
});