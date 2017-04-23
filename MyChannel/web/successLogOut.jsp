<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>MyChannel</title>
</head>
<script >
    alert("登出成功！现在为您转回到登录");
    window.location.href='${pageContext.request.contextPath}/JSP/login.jsp';
</script>
<body>
</body>
</html>