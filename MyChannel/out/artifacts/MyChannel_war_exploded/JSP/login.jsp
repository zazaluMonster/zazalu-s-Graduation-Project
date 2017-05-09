<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>MyChannel</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/bootstrap-responsive.min.css"/>
    <link rel="stylesheet" href="css/matrix-login.css"/>
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet"/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

</head>
<body>
<div id="loginbox">
    <!--登录的form-->
    <form id="loginform" class="form-vertical" action="userAction_userLogin.action" method="post">
        <!--logo-->
        <div class="control-group normal_text"><h3><img src="img/logo.png" alt="Logo"/></h3></div>
        <!--模块div-->
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="add-on bg_lg"><i class="icon-envelope-alt"></i></span><input type="text"
                                                                                              placeholder="用户名"
                                                                                              id="to-username"
                                                                                              name="UserName"
                                                                                              data-content="请输入您的用户名"
                                                                                              data-placement="top"
                                                                                              data-toggle="popover"/>
                    <!-- 让提示框内容的字体变成红色的代码 <p style='color:red'>输入您的邮箱名，如果您还没有注册过，请点击Setup</p>-->
                </div>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="add-on bg_ly"><i class="icon-lock"></i></span><input type="password"
                                                                                      placeholder="密码"
                                                                                      id="to-password"
                                                                                      name="UserPassword"
                                                                                      data-content="请小心翼翼地输入您的密码哦"
                                                                                      data-placement="top"
                                                                                      data-toggle="popover"/>
                </div>
            </div>
        </div>
        <div class="form-actions">
            <!--<span class="pull-left"><a href="#" class="flip-link btn btn-danger" id="to-recover">Lost password?</a></span>-->
            <span class="pull-left" style="padding-bottom: 100px"><a href="#" class="btn btn-info" id="to-setup"
                                                                     data-content="如果您还没有帐号，请点击Setup"
                                                                     data-placement="right"
                                                                     data-toggle="popover"> 注册</a></span>
            <span class="pull-left" style="padding-bottom: 100px"><a href="#" class="btn btn-primary"
                                                                     id="to-quick-setup" data-content="可以使用邮箱来快速注册哦!"
                                                                     data-placement="right" data-toggle="popover"> 邮箱注册</a></span>
            <span class="pull-left" style="padding-bottom: 100px"><a href="#" class="btn btn-danger"
                                                                     id="to-lostpassword"
                                                                     data-content="核实您的真实身份后我们会提供给您修改密码的权利"
                                                                     data-placement="right" data-toggle="popover">密码找回</a></span>
            <span class="pull-right"><a class="btn btn-success" id="to-index"
                                        data-content="输完帐号密码了？赶紧点击Login，进行您的香水采购吧！" data-placement="left"
                                        data-toggle="popover">登录</a></span>
        </div>
    </form>
    <!--找回密码的form-->
    <form id="recoverform" action="userAction_lostPassword.action" class="form-vertical">
        <div class="control-group normal_text"><h3><img src="img/logo.png" alt="Logo"/></h3></div>
        <p class="normal_text">填写您的注册邮箱，随后我们会发送验证邮箱给您</p>

        <div class="controls">
            <div class="main_input_box">
                <span class="add-on bg_lo"><i class="icon-envelope"></i></span><input type="text"
                                                                                      name="lostPasswordEmail"
                                                                                      placeholder="邮箱名"
                                                                                      id="to-lost-password"
                                                                                      data-content="请输入您的注册邮箱，我们会发生一则带有您密码的验证邮件给您"
                                                                                      data-placement="top"
                                                                                      data-toggle="popover"/>
            </div>
        </div>

        <div class="form-actions">
            <span class="pull-left"><a href="#" class="flip-link btn btn-success" id="to-login-recover">&laquo; 返回登录</a></span>
            <span class="pull-right"><a id="lostPasswordRecoverButton" class="btn btn-info">发送</a></span>
        </div>
    </form>
    <!--注册的form-->
    <form id="setupform" action="userAction_register.action" class="form-vertical" method="post">
        <div class="control-group normal_text"><h3><img src="img/logo.png" alt="Logo"/></h3></div>
        <p class="normal_text">欢迎来到MyChanel!</p>
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="add-on bg_lg"><i class="icon-user"></i></span><input type="text" name="UserName"
                                                                                      placeholder="用户名"
                                                                                      id="setup-username"
                                                                                      data-content="请输入您的用户名 6位英文或者数字，允许的特殊符号_"
                                                                                      data-placement="top"
                                                                                      data-toggle="popover"/>
                </div>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="add-on bg_ly"><i class="icon-lock"></i></span><input type="password"
                                                                                      name="UserPassword"
                                                                                      placeholder="密码"
                                                                                      id="setup-password"
                                                                                      data-content="密码6～16位，必须含有至少一个特殊字符!@#$%^&*_和数字0-9"
                                                                                      data-placement="top"
                                                                                      data-toggle="popover"/>
                </div>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="add-on bg_lv"><i class="icon-lock"></i></span><input type="password"
                                                                                      placeholder="确认密码"
                                                                                      id="doublecheck-password"
                                                                                      data-content="请再输入一次您的密码"
                                                                                      data-placement="top"
                                                                                      data-toggle="popover"/>
                </div>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="add-on bg_lo"><i class="icon-phone"></i></span><input type="text" name="UserTel"
                                                                                       placeholder="手机号"
                                                                                       id="mobile-phone"
                                                                                       data-content="手机是我们联系您的唯一保证，至少快递员是"
                                                                                       data-placement="top"
                                                                                       data-toggle="popover"/>
                </div>
            </div>
        </div>
        <input type="hidden" name="isManager" value="0">
        <div class="form-actions">
            <span class="pull-left"><a href="#" class="flip-link btn btn-success" id="to-login-setup">&laquo; 返回登录</a></span>
            <span class="pull-right"><a id="setupFormSubmitButton" class="btn btn-info">注册</a></span>
        </div>
    </form>
    <!--快速注册的表单form-->
    <form id="quicksetupform" action="userAction_quickRegister.action" class="form-vertical">
        <div class="control-group normal_text"><h3><img src="img/logo.png" alt="Logo"/></h3></div>
        <p class="normal_text">邮箱注册</p>
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="add-on bg_lr"><i class="icon-envelope-alt"></i></span><input type="text"
                                                                                              name="UserEmail"
                                                                                              placeholder="邮箱名"
                                                                                              id="quicksetup-username"
                                                                                              data-content="请输入您的邮箱名，确认后我们会发送验证邮箱，注意查收"
                                                                                              data-placement="top"
                                                                                              data-toggle="popover"/>
                </div>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="add-on bg_ly"><i class="icon-lock"></i></span><input type="password"
                                                                                      name="UserPassword"
                                                                                      placeholder="密码"
                                                                                      id="quicksetup-password"
                                                                                      data-content="密码6～16位，必须含有至少一个特殊字符!@#$%^&*_和数字0-9"
                                                                                      data-placement="top"
                                                                                      data-toggle="popover"/>
                </div>
            </div>
        </div>
        <div class="form-actions">
            <span class="pull-left"><a href="#" class="flip-link btn btn-success" id="to-login-quicksetup">&laquo; 返回登录</a></span>
            <span class="pull-right"><a id="quicksetupFormSubmitButton" class="btn btn-info">注册</a></span>
        </div>
    </form>
</div>
<!--弹出窗口 使用遮盖-->

<!--使用Popver的必备js代码-->
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/matrix.js"></script>
<script src="js/matrix.popover.js"></script>
<!---->
<script src="js/matrix.login.js"></script>
<!--检查用户输入的语法 不掉用数据库层面-->
<!--<script src="js/zazalu.checkinput.js"></script>-->
<!--用户输入完全没问题情况下 login后的js-->
</body>

</html>
