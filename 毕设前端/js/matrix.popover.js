
$(function ()
{
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,16}$/
    var mobilephone = /^1(3|4|5|7|8)\d{9}$/
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
             alert($(this).attr('value'));
             if($(this).attr('value') == ""){
                 if($(this).attr('id') == "to-username"){
                    $(this).attr("data-content","输入您的邮箱名，如果您还没有注册过，请点击Setup");
                    }
                $(this).popover('hide');
             }else if($(this).attr('id') == "to-username"){
                if(!reg.test($(this).attr('value'))){
                    //邮箱格式输错了
                    $(this).attr("data-content","<p style='color:red'>邮箱格式有误</p>");
                    $(this).popover('show');
                }else{
                    //跑道这里说明邮箱输入正确，所以就使用ajax提交到后台 然后验证其邮箱名的正确性
                    $(this).attr("data-content","输入您的邮箱名，如果您还没有注册过，请点击Setup");
                    $(this).popover('hide');
                }
             }else if($(this).attr('id') == "to-password"){
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
            if($(this).attr('value') == ""){
                $(this).attr("data-content","请输入您的邮箱名");
                $(this).popover('hide');
            }else if(!reg.test($(this).attr('value'))){
                //邮箱格式输错了
                $(this).attr("data-content","<p style='color:red'>邮箱格式有误</p>");
                $(this).popover('show');
            }else{
                $(this).attr("data-content","请输入您的邮箱名");
                $(this).popover('hide');
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
            if($(this).attr('value') == ""){
                $(this).attr("data-content","请输入您的邮箱名，确认后我们会发送验证邮箱，注意查收");
                $(this).popover('hide');
            }else if(!reg.test($(this).attr('value'))){
                //邮箱格式输错了
                $(this).attr("data-content","<p style='color:red'>邮箱格式有误</p>");
                $(this).popover('show');
            }else{
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
            if($(this).attr('value') == ""){
                $(this).attr("data-content","密码6～16位，必须含有至少一个特殊字符!@#$%^&*_和数字0-9");
                $(this).popover('hide');
            }else if(!regPassword.test($(this).attr('value'))){
                //密码格式输错了
                $(this).attr("data-content","<p style='color:red'>密码不符合规范</p>");
                $(this).popover('show');
            }else{
                $(this).attr("data-content","密码6～16位，必须含有至少一个特殊字符!@#$%^&*_和数字0-9");
                $(this).popover('hide');
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
            var firstPassword = $("#setup-password").attr('value');
            if($(this).attr('value') == ""){
                $(this).attr("data-content","请再输入一次您的密码");
                $(this).popover('hide');
            }else if(firstPassword != $(this).attr('value')){
                //密码格式输错了
                $(this).attr("data-content","<p style='color:red'>和第一次输入不一致</p>");
                $(this).popover('show');
            }else{
                $(this).attr("data-content","请再输入一次您的密码");
                $(this).popover('hide');
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
            if($(this).attr('value') == ""){
                $(this).attr("data-content","手机是我们联系您的唯一保证，至少快递员是");
                $(this).popover('hide');
            }else if(!mobilephone.test($(this).attr('value'))){
                //密码格式输错了
                $(this).attr("data-content","<p style='color:red'>手机号格式错误</p>");
                $(this).popover('show');
            }else{
                $(this).attr("data-content","手机是我们联系您的唯一保证，至少快递员是");
                $(this).popover('hide');
            }
        }
     );
     $("#setup-address").popover({
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
            if($(this).attr('value') == ""){
                $(this).attr("data-content","请输入您的地址，这是邮寄的需要");
                $(this).popover('hide');
            }else{
                $(this).attr("data-content","请输入您的地址，这是邮寄的需要");
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
