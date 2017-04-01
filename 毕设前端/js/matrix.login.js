
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
	
	
	$('#to-login').click(function(){
	
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