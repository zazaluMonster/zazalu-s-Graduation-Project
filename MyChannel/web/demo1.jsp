<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="${pageContext.request.contextPath}/userAction_register" method="post">
		<input type="text" name="UserName">
		<input type="text" name="UserPassword">
		<input type="text" name="UserTel">
		<input type="hidden" name="isManager" value="0">
		<input type="submit">
	</form>
    <hr/>
    <form action="${pageContext.request.contextPath}/goodAction_register" method="post">
        <input type="text" name="GoodName">
        <input type="text" name="GoodDescrible">
        <input type="text" name="GoodStock">
        <input type="text" name="GoodNetWeight">
        <input type="text" name="GoodColor">
        <input type="text" name="GoodMessage">
        <input type="text" name="GoodImgUrl164">
        <input type="text" name="GoodImgUrl60">
        <input type="text" name="GoodImgUrl30">
        <input type="text" name="GoodImgUrl430">
        <input type="text" name="GoodPoint">
        <input type="text" name="GoodDiscount">
        <input type="submit">
    </form>
    <hr/>
    <form action="${pageContext.request.contextPath}/ordersAction_newOrder" method="post">
        <input type="text" name="UserId">
        <input type="text" name="GoodId">
        <input type="text" name="GoodNumber">
        <input type="text" name="GoodNetWeight">
        <input type="text" name="GoodColor">
        <input type="text" name="isPay">
        <input type="text" name="isUnSubscribe">
        <input type="submit">
    </form>
    <hr/>
    <form action="${pageContext.request.contextPath}/favoriteAction_addFavorite" method="post">
        <input type="text" name="UserId">
        <input type="text" name="GoodId">
        <input type="submit">
    </form>
    <hr/>
    <form action="${pageContext.request.contextPath}/tagAction_addTag" method="post">
        <input type="text" name="TagName">
        <input type="text" name="TagDescrible">
        <input type="text" name="FatherTagId">
        <input type="submit">
    </form>
    <hr/>
    <form action="${pageContext.request.contextPath}/evaluateAction_addEvaluate" method="post">
        <input type="text" name="EvaluateMessage">
        <input type="text" name="OrdersId">
        <input type="text" name="EvaluateStar">
        <input type="text" name="EvaluateImgUrl">
        <input type="text" name="FatherEvaluateId">
        <input type="text" name="Semaphore">
        <input type="submit">
    </form>
    <hr/>
    <form action="${pageContext.request.contextPath}/advertisementAction_addAdvertisement" method="post">
        <input type="text" name="AdsImgUrl">
        <input type="text" name="GoodId">
        <input type="submit">
    </form>
    <hr/>
    <form action="${pageContext.request.contextPath}/addressAction_addAddress" method="post">
        <input type="text" name="AddressPlace">
        <input type="text" name="AddressDetail">
        <input type="text" name="AddressTel">
        <input type="text" name="RewardPeople">
        <input type="text" name="isDefault">
        <input type="text" name="UserId">
        <input type="submit">
    </form>

</body>
</html>