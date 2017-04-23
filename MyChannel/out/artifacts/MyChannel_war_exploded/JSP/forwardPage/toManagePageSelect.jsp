<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Matrix Admin</title>
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
    <!--logo-->
    <div class="control-group normal_text" style="border-bottom-style: outset;border-bottom-width: 1px;">
        <h3><img src="img/logo.png" alt="Logo" /></h3>
    </div>
    <p class="normal_text">欢迎来到MyChannel管理系统!请选择管理模式!</p>
    <button id="toBackEndButton" class="btn btn-info" style="position: relative;margin-top: 90px;">后台管理</button>
    <button id="toShangPuButton" class="btn btn-success" style="position: relative;margin-top: 90px;;left: 243px;">商铺管理</button>

</div>

<!--使用Popver的必备js代码-->
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/matrix.js"></script>
<script src="js/matrix.popover.js"></script>
<!---->
<script src="js/matrix.login.js"></script>
<script>
    $("#toBackEndButton").click(function () {
        window.location.href='${pageContext.request.contextPath}/JSP/后台管理_广告管理_浏览.jsp';
    })
    $("#toShangPuButton").click(function () {
        window.location.href='${pageContext.request.contextPath}/JSP/GoodManage_AddGood.jsp';
    })
</script>
<!--检查用户输入的语法 不掉用数据库层面-->
<!--<script src="js/zazalu.checkinput.js"></script>-->
<!--用户输入完全没问题情况下 login后的js-->
</body>

</html>
