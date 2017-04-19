
$(function ()
{
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,16}$/
    var mobilephone = /^1(3|4|5|7|8)\d{9}$/
    var usernameRegex = /^[a-z0-9_-]{1,6}$/

    var setupUsernameSem = 0;
    var setupPasswordSem = 0;
    var doublecheckPasswordSem = 0;
    var mobilePhoneSem = 0;

    var loginUserNameSem = 0;
    var loginPasswordSem = 0;

    var quicksetupEmailSem = 0;
    var quicksetupPasswordSem = 0;


    var verifyRegisterInputIsReady = function(){
        if(setupUsernameSem === 1 && setupPasswordSem === 1 && doublecheckPasswordSem === 1 && mobilePhoneSem === 1){
            console.log("进入验证是否全部完成填写方法");
            $("#setupFormSubmitButton").text("Confirm!");
        }else {
            console.log("进入验证是否全部完成填写方法");
            if($("#setupFormSubmitButton").text() !== "Confirm"){
                $("#setupFormSubmitButton").text("Confirm");
            }
        }
    }

    var verifyLoginInputIsReady = function () {
        if(loginPasswordSem === 1 && loginUserNameSem === 1){
            $("#to-index").text("Login!");
        }else {
            if($("#to-index").text() !== "Login"){
                $("#to-index").text("Login");
            }
        }
    }

    var verifyQuickSetupInputIsReady = function() {
        if(quicksetupEmailSem === 1 && quicksetupPasswordSem === 1){
            $("#quicksetupFormSubmitButton").text("Confirm!");
        }else {
            if($("#quicksetupFormSubmitButton").text() !== "Confirm"){
                $("#quicksetupFormSubmitButton").text("Confirm");
            }
        }
    }


    // 以下完成了登陆界面的基本验证功能
     $("#to-username,#to-password").popover({
         trigger: 'manual'
     })
     .on(
        'focus',
        function() {
            $(this).popover('show');
        }
     )
     .on(
         'blur',
         function() {
             if($(this).val() === ""){
                 if($(this).attr('id') === "to-username"){
                    $(this).attr("data-content","请输入您的用户名");
                    loginUserNameSem = 0;
                    verifyLoginInputIsReady();
                 }
                $(this).popover('hide');
             }else if($(this).attr('id') == "to-username"){
                if(!usernameRegex.test($(this).val())){
                    //邮箱格式输错了
                    $(this).attr("data-content","<p style='color:red'>用户名格式有误</p>");
                    loginUserNameSem = 0;
                    verifyLoginInputIsReady();
                    $(this).popover('show');
                }else{
                    //跑道这里说明用户名输入正确
                    $(this).attr("data-content","请输入您的用户名");

                    //检测用户名是否已经存在的情况

                    //ajax请求
                    $.ajax({
                        method: "POST",
                        url: "/MyChannel/userAction_verifyByName.action",
                        data: { whatTable: "User", name: $(this).val() }
                    })
                        .done(function( msg ) {
                            if(msg !== "ok"){
                                $("#to-username").attr("data-content","请输入您的用户名");
                                $("#to-username").popover('hide');
                                loginUserNameSem = 1;
                                verifyLoginInputIsReady();
                            }else {
                                //表明用户名是不存在的
                                console.log("用户名不存在");
                                $("#to-username").attr("data-content","<p style='color:red'>该用户名不存在</p>");
                                $("#to-username").popover('show');
                                loginUserNameSem = 0;
                                verifyLoginInputIsReady();
                            }
                        });
                    //ajax请求结束
                    $(this).popover('hide');
                }
             }else if($(this).attr('id') === "to-password"){
                 //获取密码框的值 要使用val()
                 if($("#to-password").val() !== ""){
                     loginPasswordSem = 1;
                     console.log("密码输入完成");
                     verifyLoginInputIsReady();
                 }else if($("#to-password").val() === ""){
                     loginPasswordSem = 0;
                     console.log("密码没有输入");
                     verifyLoginInputIsReady();
                 }
                 $(this).popover('hide');
             }

         }
     );



     $("#to-index,#to-setup,#to-quick-setup,#to-lostpassword").popover({
         trigger: 'hover'
     });
     //以下来完成注册界面的基本验证功能
     $("#setup-username").popover({
         trigger: 'manual'
     })
     .on(
        'focus',
        function() {
            $(this).popover('show');
        }
     )
     .on(
        'blur',
        function() {
            if($(this).val() == ""){
                //啥都没输入的情况
                $(this).attr("data-content","请输入您的用户名 6位英文或者数字，允许的特殊符号_");
                $(this).popover('hide');
                setupUsernameSem = 0;
                verifyRegisterInputIsReady();
            }else if($(this).val().length > 6 || !usernameRegex.test($(this).val())){
                //用户名格式违规的情况
                $(this).attr("data-content","<p style='color:red'>用户名格式不正确</p>");
                $(this).popover('show');
                setupUsernameSem = 0;
                verifyRegisterInputIsReady();
            }else{
                //检测用户名是否已经存在的情况

                //ajax请求
                $.ajax({
                    method: "POST",
                    url: "/MyChannel/userAction_verifyByName.action",
                    data: { whatTable: "User", name: $(this).val() }
                })
                    .done(function( msg ) {
                        if(msg !== "ok"){
                            $("#setup-username").attr("data-content","<p style='color:red'>用户名已经存在</p>");
                            $("#setup-username").popover('show');
                            setupUsernameSem = 0;
                            verifyRegisterInputIsReady();
                        }else {
                            //表明用户名可用到这里说明了用户名这一栏已经准备完毕
                            $("#setup-username").attr("data-content","请输入您的用户名 6位英文或者数字，允许的特殊符号_");
                            $("#setup-username").popover('hide');
                            setupUsernameSem = 1;
                            verifyRegisterInputIsReady();
                        }
                    });
                //ajax请求结束

            }
        }
     );
     $("#quicksetup-username").popover({
         trigger: 'manual'
     })
     .on(
        'focus',
        function() {
            $(this).popover('show');
        }
     )
     .on(
        'blur',
        function() {
            if($(this).val() == ""){
                $(this).attr("data-content","请输入您的邮箱名，确认后我们会发送验证邮箱，注意查收");
                $(this).popover('hide');
                quicksetupEmailSem = 0;
                verifyQuickSetupInputIsReady();
            }else if(!reg.test($(this).val())){
                //邮箱格式输错了
                $(this).attr("data-content","<p style='color:red'>邮箱格式有误</p>");
                $(this).popover('show');
                quicksetupEmailSem = 0
                verifyQuickSetupInputIsReady();
            }else{
                quicksetupEmailSem = 1;
                verifyQuickSetupInputIsReady();
                $(this).attr("data-content","请输入您的邮箱名，确认后我们会发送验证邮箱，注意查收");
                $(this).popover('hide');
            }
        }
     );
     $("#setup-password").popover({
         trigger: 'manual'
     })
     .on(
        'focus',
        function() {
            $(this).popover('show');
        }
     )
     .on(
        'blur',
        function() {
            if($(this).val() == ""){
                $(this).attr("data-content","密码6～16位，必须含有至少一个特殊字符!@#$%^&*_和数字0-9");
                $(this).popover('hide');
                setupPasswordSem = 0;
                verifyRegisterInputIsReady();
            }else if(!regPassword.test($(this).val())){
                //密码格式输错了
                $(this).attr("data-content","<p style='color:red'>密码不符合规范</p>");
                $(this).popover('show');
                setupPasswordSem = 0;
                verifyRegisterInputIsReady();
            }else{
                $(this).attr("data-content","密码6～16位，必须含有至少一个特殊字符!@#$%^&*_和数字0-9");
                $(this).popover('hide');
                setupPasswordSem = 1;
                verifyRegisterInputIsReady();
            }
        }
     );
    $("#quicksetup-password").popover({
        trigger: 'manual'
    })
        .on(
            'focus',
            function() {
                $(this).popover('show');
            }
        )
        .on(
            'blur',
            function() {
                if($(this).val() == ""){
                    $(this).attr("data-content","密码6～16位，必须含有至少一个特殊字符!@#$%^&*_和数字0-9");
                    $(this).popover('hide');
                    quicksetupPasswordSem = 0;
                    verifyQuickSetupInputIsReady();
                }else if(!regPassword.test($(this).val())){
                    //密码格式输错了
                    $(this).attr("data-content","<p style='color:red'>密码不符合规范</p>");
                    $(this).popover('show');
                    quicksetupPasswordSem = 0;
                    verifyQuickSetupInputIsReady();
                }else{
                    $(this).attr("data-content","密码6～16位，必须含有至少一个特殊字符!@#$%^&*_和数字0-9");
                    $(this).popover('hide');
                    quicksetupPasswordSem = 1;
                    verifyQuickSetupInputIsReady();
                }
            }
        );

     $("#doublecheck-password").popover({
         trigger: 'manual'
     })
     .on(
        'focus',
        function() {
            $(this).popover('show');
        }
     )
     .on(
        'blur',
        function() {
            var firstPassword = $("#setup-password").val();
            if($(this).val() == ""){
                $(this).attr("data-content","请再输入一次您的密码");
                $(this).popover('hide');
                doublecheckPasswordSem = 0;
                verifyRegisterInputIsReady();
            }else if(firstPassword != $(this).val()){
                //密码格式输错了
                $(this).attr("data-content","<p style='color:red'>和第一次输入不一致</p>");
                $(this).popover('show');
                doublecheckPasswordSem = 0;
                verifyRegisterInputIsReady();
            }else{
                $(this).attr("data-content","请再输入一次您的密码");
                $(this).popover('hide');
                doublecheckPasswordSem = 1;
                verifyRegisterInputIsReady();
            }
        }
     );
     $("#mobile-phone").popover({
         trigger: 'manual'
     })
     .on(
        'focus',
        function() {
            $(this).popover('show');
        }
     )
     .on(
        'blur',
        function() {
            if($(this).val() == ""){
                $(this).attr("data-content","手机是我们联系您的唯一保证，至少快递员是");
                $(this).popover('hide');
                mobilePhoneSem = 0;
                verifyRegisterInputIsReady();
            }else if(!mobilephone.test($(this).val())){
                //密码格式输错了
                $(this).attr("data-content","<p style='color:red'>手机号格式错误</p>");
                $(this).popover('show');
                mobilePhoneSem = 0;
                verifyRegisterInputIsReady();
            }else{
                $(this).attr("data-content","手机是我们联系您的唯一保证，至少快递员是");
                $(this).popover('hide');
                mobilePhoneSem = 1;
                verifyRegisterInputIsReady();
            }
        }
     );

     //以下是找回密码的模块
     $("#to-lost-password").popover({
         trigger: 'manual'
     })
     .on(
        'focus',
        function() {
            $(this).popover('show');
        }
     )
     .on(
        'blur',
        function() {
            if($(this).val() == ""){
                $(this).attr("data-content","请输入您的注册邮箱，我们会发生一则带有您密码的验证邮件给您");
                $(this).popover('hide');
            }else if(!reg.test($(this).val())){
                //邮箱格式输错了
                $(this).attr("data-content","<p style='color:red'>邮箱格式有误</p>");
                $(this).popover('show');
            }else{
                $(this).attr("data-content","请输入您的注册邮箱，我们会发生一则带有您密码的验证邮件给您");
                $(this).popover('hide');
            }
        }
     );


     
});



!function( $ ) {
"use strict"
var Popover = function ( element, options ) {
this.init('popover', element, options)
}
/* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
========================================== */
Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {
constructor: Popover
, setContent: function () {
var $tip = this.tip()
, title = this.getTitle()
, content = this.getContent()
$tip.find('.popover-title')[ $.type(title) == 'object' ? 'append' : 'html' ](title)
$tip.find('.popover-content > *')[ $.type(content) == 'object' ? 'append' : 'html' ](content)
$tip.removeClass('fade top bottom left right in')
}
, hasContent: function () {
return this.getTitle() || this.getContent()
}
, getContent: function () {
var content
, $e = this.$element
, o = this.options
content = $e.attr('data-content')
|| (typeof o.content == 'function' ? o.content.call($e[0]) : o.content)
content = content.toString().replace(/(^\s*|\s*$)/, "")
return content
}
, tip: function() {
if (!this.$tip) {
this.$tip = $(this.options.template)
}
return this.$tip
}
})
/* POPOVER PLUGIN DEFINITION
* ======================= */
$.fn.popover = function ( option ) {
return this.each(function () {
var $this = $(this)
, data = $this.data('popover')
, options = typeof option == 'object' && option
if (!data) $this.data('popover', (data = new Popover(this, options)))
if (typeof option == 'string') data[option]()
})
}
$.fn.popover.Constructor = Popover
$.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
placement: 'right'
, content: ''
, template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
})
}( window.jQuery );
