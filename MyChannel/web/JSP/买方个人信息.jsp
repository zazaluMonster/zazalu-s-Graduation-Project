<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%--时间戳--%>
<%
    request.setAttribute("time","?" + new Date().getTime());
%>
<!DOCTYPE html>
<html lang="en">

<%--此页面要正常显示的条件
        1.在页面域中可以找到User 然后通过EL表达式去展现买方的基本信息
--%>

<head>
    <title>Matrix Admin</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/bootstrap-responsive.min.css"/>
    <link rel="stylesheet" href="css/matrix-style.css"/>
    <link rel="stylesheet" href="css/matrix-media.css"/>
    <link rel="stylesheet" href="css/shouyeCss.css"/>
    <link rel="stylesheet" href="css/userPageCss.css"/>
    <link rel="stylesheet" href="css/select2.min.css"/>
    <link rel="stylesheet" href="css/replydowndiv.css" />
    <link rel="stylesheet" href="css/goodbuydiv.css" />
    <link rel="stylesheet" href="css/foot.css"/>
    <link rel="stylesheet" href="css/zazaluhead.css"/>
    <!--头像裁剪的依赖css-->
    <link href="css/cropper.css" rel="stylesheet">

    <link href="font-awesome/css/font-awesome.css" rel="stylesheet"/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

</head>

<body>
<!--遮罩-part-->
<div id="zhezhao">
    <div class="zazalu page-header">
        <h3 id="zhezhaoId">商品查询
            <small>根据您输入的内容来查询名称接近的商品</small>
        </h3>
    </div>
    <ul id="zhezhaoLike">
        <li class="zhezhaoLikeLi">
            <div>
                <div class="zhezhaoLikePicture"><img class="zhezhaoLikeImg" src="img/user/user1/personalInformationHeadImg.png" alt="" ></div>
                <div class="zhezhaoLIkeDescrible">
                    <div class="zhezhaoLIkeDescribleTitle"><a href="#">xxx-xxx</a></div>
                    <div class="zhezhaoLIkeDescribleSmall">xxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
            </div>
        </li>
        <li class="zhezhaoLikeLi">
            <div>
                <div class="zhezhaoLikePicture"><img class="zhezhaoLikeImg" src="img/user/user1/personalInformationHeadImg.png" alt="" ></div>
                <div class="zhezhaoLIkeDescrible">
                    <div class="zhezhaoLIkeDescribleTitle"><a href="#">xxx-xxx</a></div>
                    <div class="zhezhaoLIkeDescribleSmall">xxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
            </div>
        </li>
        <li class="zhezhaoLikeLi">
            <div>
                <div class="zhezhaoLikePicture"><img class="zhezhaoLikeImg" src="img/user/user1/personalInformationHeadImg.png" alt="" ></div>
                <div class="zhezhaoLIkeDescrible">
                    <div class="zhezhaoLIkeDescribleTitle"><a href="#">xxx-xxx</a></div>
                    <div class="zhezhaoLIkeDescribleSmall">xxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
            </div>
        </li>
        <li class="zhezhaoLikeLi">
            <div>
                <div class="zhezhaoLikePicture"><img class="zhezhaoLikeImg" src="img/user/user1/personalInformationHeadImg.png" alt="" ></div>
                <div class="zhezhaoLIkeDescrible">
                    <div class="zhezhaoLIkeDescribleTitle"><a href="#">xxx-xxx</a></div>
                    <div class="zhezhaoLIkeDescribleSmall">xxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
            </div>
        </li>
        <li class="zhezhaoLikeLi">
            <div>
                <div class="zhezhaoLikePicture"><img class="zhezhaoLikeImg" src="img/user/user1/personalInformationHeadImg.png" alt="" ></div>
                <div class="zhezhaoLIkeDescrible">
                    <div class="zhezhaoLIkeDescribleTitle"><a href="#">xxx-xxx</a></div>
                    <div class="zhezhaoLIkeDescribleSmall">xxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
            </div>
        </li>
        <li class="zhezhaoLikeLi">
            <div>
                <div class="zhezhaoLikePicture"><img class="zhezhaoLikeImg" src="img/user/user1/personalInformationHeadImg.png" alt="" ></div>
                <div class="zhezhaoLIkeDescrible">
                    <div class="zhezhaoLIkeDescribleTitle"><a href="#">xxwx-xxx</a></div>
                    <div class="zhezhaoLIkeDescribleSmall">xxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
            </div>
        </li>
        <li class="zhezhaoLikeLi" style="padding-bottom: 100px;">
            <div>
                <div class="zhezhaoLikePicture"><img class="zhezhaoLikeImg" src="img/user/user1/personalInformationHeadImg.png" alt="" ></div>
                <div class="zhezhaoLIkeDescrible">
                    <div class="zhezhaoLIkeDescribleTitle"><a href="#">xxxwd-xxx</a></div>
                    <div class="zhezhaoLIkeDescribleSmall">xxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
            </div>
        </li>
    </ul>
</div>
<!--Header-part-->
<div id="header">
    <h1><a href="shouye.jsp">Matrix Admin</a></h1>
</div>
<!--close-Header-part-->

<!--top-Header-menu-->
<div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav" id="headList">
        <li class="dropdown" id="profile-messages"><a title="" href="#" data-toggle="dropdown"
                                                      data-target="#profile-messages" class="dropdown-toggle"><i
                class="icon icon-user"></i> <span class="text">Welcome User</span><b class="caret"></b></a>
            <ul class="dropdown-menu">
                <li>
                    <a href="买方个人信息.jsp" id="user-nav-userHeadA">
                        <img id="user-nav-userHeadImg" src="${sessionScope.user.userHeadUrl60}${requestScope.time}"/>
                        <div id="user-nav-userHeadDescrible">
                            <div id="user-nav-userHeadId">${sessionScope.user.userName}</div>
                            <div id="user-nav-userHeadWelcome">Mychanel欢迎您</div>
                        </div>
                    </a>
                </li>
                <li class="divider"></li>
                <li><a href="ShoppingCart.jsp"><i class="icon-heart-empty"></i> My ShoppingCart</a></li>
                <li class="divider"></li>
                <li><a href="userFavorite.jsp"><i class="icon-heart-empty"></i> My Favorites</a></li>
                <li class="divider"></li>
                <li><a href="${pageContext.request.contextPath}/userAction_userLogOut.action"><i class="icon-key"></i> Log Out</a></li>
            </ul>
        </li>
        <li class=""><a title="" href="#"><i class="icon icon-cog"></i> <span class="text">Settings</span></a></li>
        <li class=""><a title="" href="login.jsp"><i class="icon icon-question-sign"></i> <span
                class="text">Support</span></a></li>
        <li class=""><a title="" href="login.jsp"><i class="icon icon-heart"></i> <span class="text">About</span></a>
        </li>
        <li class=""><a title="" href="${pageContext.request.contextPath}/userAction_userLogOut.action"><i class="icon icon-share-alt"></i> <span
                class="text">Logout</span></a></li>
        <li class="">
            <a title="" href="#" id="headMusicA">
                <i class="icon icon-music" id="headMusicI"></i>
                <span class="text" id="headMusicSpan">music</span>
                <span id="headMusicProgress" style="display: none"></span>
                <span id="headMusicCircle" style="display: none"></span>
                <span id="headMusicTitle" style="display: none">GIRAFFE BLUES ~Freyja Solo~ - 鈴木みのり</span>
                <audio id="headMusic">
                    <source src="audio/audio1.mp3" type="audio/mpeg"/>
                </audio>
            </a>
        </li>
    </ul>
</div>

<!--start-top-serch-->
<div id="search">
    <input type="text" placeholder="Search here..." id="headSearch"/>
    <button id="topSearchButton" type="submit" class="tip-bottom" title="Search"><i class="icon-search icon-white"></i></button>
</div>
<!--close-top-serch-->

<!--个人信息展示页-->
<div id="personalInformationDiv">
    <!--start leftDiv-->
    <div id="personalInformationLeftDiv">
        <div id="personalInformationHeadDiv" style="cursor: pointer">
            <div id="personalInformationHead">
                <img id="personalInformationHeadImg" src="${sessionScope.user.userHeadUrl164}${requestScope.time}"/>
            </div>
            <div id="personalInformationLevel">${sessionScope.user.userName}</div>
        </div>
        <div>
            <div class="personalInformationLeftDivDown" id="personalInformationLeftDivDown-first" style="right: 78px;">
                <i class="icon icon-envelope" style="margin-right: 8px;"></i>${sessionScope.user.userEmail}</div>
            <div class="personalInformationLeftDivDown" id="personalInformationLeftDivDown-second" style="left: 96px;">
                <i class="icon icon-phone" style="margin-right: 8px;"></i>${sessionScope.user.userTel}</div>
            <div class="personalInformationLeftDivDown" id="personalInformationLeftDivDown-third" style="right: 78px;">
                <i class="icon icon-time" style="margin-right: 8px;"></i>Joined June 2017
            </div>
            <div class="personalInformationLeftDivDown" id="personalInformationLeftDivDown-fourth" style="left: 96px;">
                <i class="icon icon-table" style="margin-right: 8px;"></i>Born on ${sessionScope.user.userBirth}</div>
        </div>
    </div>
    <!--end leftDIv-->
    <!--start rightDiv-->
    <div id="personalInformationRightDiv">
        <div id="personalInformationTrans">
            <div class="personalInformationRightUp"><a id="getDaiFaHuo" class="personalInformationRightUpA"><i
                    class="icon icon-truck" style="margin-right: 8px;"></i>待发货</a>
                <span class="personalInformation-quantity" style="display: none">2</span>
            </div>
            <div class="personalInformationRightUp"><a id="getDaiFuKuan" class="personalInformationRightUpA"><i
                    class="icon icon-barcode" style="margin-right: 8px;"></i>待付款</a></div>
            <div class="personalInformationRightUp"><a id="getDaiPingJia" class="personalInformationRightUpA"><i
                    class="icon icon-edit" style="margin-right: 8px;"></i>待评价</a></div>
            <div class="personalInformationRightUp"><a id="getJiFenGoods" class="personalInformationRightUpA"><i
                    class="icon icon-certificate" style="margin-right: 8px;"></i>我的积分</a></div>
        </div>
        <div id="personalGoodsMessage" style="margin-left: 40px;">
            <ul style="
      list-style-type: none;
      margin-top: 29px;
      overflow: scroll;
      height: 350px;" id="personalInformationRightDivUl">
                <!--动态生成的li-->
            </ul>
        </div>
    </div>
    <!--end rightDiv-->

    <!--一开始隐藏的rightdiv-->
    <div id="personalInformationRightDiv-ghost" style="display: none">
        <div id="personalInformationTrans">
            <div class="personalInformationRightUp"><a id="getGeRenZiLiao" class="personalInformationRightUpA"><i
                    class="icon icon-user" style="margin-right: 8px;"></i>个人资料</a></div>
            <div class="personalInformationRightUp"><a id="getShouHuoDiZhi" class="personalInformationRightUpA"><i
                    class="icon icon-map-marker" style="margin-right: 8px;"></i>收获地址</a></div>
            <div class="personalInformationRightUp"><a id="getMiMaXiuGai" class="personalInformationRightUpA"><i
                    class="icon icon-unlock" style="margin-right: 8px;"></i>密码修改</a></div>
        </div>
        <!--收货地址编辑页面-->
        <div id="personalInformation-ShouHuoAddress-div" style="display:none">
            <div id="personalInformation-ShouHuoAddress-Editor-div">
                <form id="ShouHuoAddressForm" action="addressAction_addNewAddress.action" method="post" class="form-horizontal">
                    <div class="personalInformationChangeForm-div" style="height: 64px;padding-top: 22px;">
                        <label class="personalInformation-label">* 所在地区 :</label>
                        <select id="addressProvince" class="personalInformation-Address province" style="width: 98px;" name="addressProvince">
                            <option value="北京">北京</option>
                            <option value="天津">天津</option>
                            <option value="河北">河北</option>
                            <option value="山西">山西</option>
                            <option value="内蒙古">内蒙古</option>
                            <option value="辽宁">辽宁</option>
                            <option value="吉林">吉林</option>
                            <option value="黑龙江">黑龙江</option>
                            <option value="上海">上海</option>
                            <option value="江苏">江苏</option>
                            <option value="浙江">浙江</option>
                            <option value="安徽">安徽</option>
                            <option value="福建">福建</option>
                            <option value="江西">江西</option>
                            <option value="山东">山东</option>
                            <option value="河南">河南</option>
                            <option value="湖北">湖北</option>
                            <option value="湖南">湖南</option>
                            <option value="广东">广东</option>
                            <option value="广西">广西</option>
                            <option value="海南">海南</option>
                            <option value="重庆">重庆</option>
                            <option value="四川">四川</option>
                            <option value="贵州">贵州</option>
                            <option value="云南">云南</option>
                            <option value="西藏">西藏</option>
                            <option value="陕西">陕西</option>
                            <option value="甘肃">甘肃</option>
                            <option value="青海">青海</option>
                            <option value="宁夏">宁夏</option>
                            <option value="新疆">新疆</option>
                            <option value="台湾">台湾</option>
                            <option value="香港">香港</option>
                            <option value="澳门">澳门</option>
                        </select>
                        <select id="addressCity" class="personalInformation-Address city" style="width: 98px;" name="addressCity">
                            <option id="addressCityJiaZai" disabled="disabled">加载中</option>
                        </select>
                        <select id="addressArea" class="personalInformation-Address area" style="width: 98px;" name="addressArea">
                            <option id="addressAreaJiaZai" disabled="disabled">加载中</option>
                        </select>
                        <span class="help-block" style="color: red;"></span>
                    </div>
                    <div class="personalInformationChangeForm-div">
                        <label class="personalInformation-label">* 详细地址</label>
                        <div class="personalInformation-input-div">
                            <textarea id="addressDetail" class="span4" name="AddressDetail"></textarea>
                            <span class="help-block" style="color: red;"></span>
                        </div>
                    </div>
                    <div class="personalInformationChangeForm-div">
                        <label class="personalInformation-label">* 收货人 :</label>
                        <div class="personalInformation-input-div">
                            <input id="addressRewardPeople" type="text" class="span4" placeholder="Your RewardPeople Name" name="RewardPeople"/>
                            <span class="help-block" style="color: red;"></span>
                        </div>
                    </div>
                    <div class="personalInformationChangeForm-div">
                        <label class="personalInformation-label">* 联系电话 :</label>
                        <div class="personalInformation-input-div">
                            <input id="addressTel" type="text" class="span4" placeholder="Your phone number" name="AddressTel"/>
                            <span class="help-block" style="color: red;"></span>
                        </div>
                    </div>
                    <div class="personalInformationChangeForm-save">
                        <button type="button" class="btn btn-success" id="personalInformationChangeForm-save-button">Save</button>
                        <button type="button" class="btn" id="personalInformationChangeForm-cancle-save-button">返回
                        </button>
                    </div>

                </form>
            </div>
        </div>
        <!--收获地址编辑页面结束-->

        <!--展示收货地址页面-->
        <div id="personalInfromation-ShouHuoAddress-Message" style="margin-left: 40px;display: none">
            <div id="ShouHuoAddressJiaZai" style="color:cornflowerblue;display: none">加载中...</div>
            <ul style="
      list-style-type: none;
      margin-top: 29px;
      overflow: scroll;
      height: 350px;" id="personalInformation-ShouHuoAddress-Message-Ul">
                <!--动态生成的li-->
            </ul>
            <div style="width: 111px;position: relative;left: 31px;">
                <button type="submit" class="btn btn-info" id="addNewShouHuoAddressButton">新增默认地址</button>
            </div>
        </div>

        <!--展示收货地址页面-->

        <!--密码修改页面-->
        <div id="personalInformation-PasswordChange-Div" style="display:none">
            <div id="personalInformation-PasswordChange-Editor-div">
                <form id="userPasswordChangeForm" action="userAction_passwordChange.action" method="post" class="form-horizontal">
                    <div class="personalInformationChangeForm-div">
                        <label class="personalInformation-label">* 旧密码 :</label>
                        <div class="personalInformation-input-div">
                            <input id="ordPassword" type="password" class="span4" placeholder="Your ord password"/>
                            <span class="help-block" style="color: red;"></span>
                        </div>
                    </div>
                    <div class="personalInformationChangeForm-div">
                        <label class="personalInformation-label">* 新密码 :</label>
                        <div class="personalInformation-input-div">
                            <input id="newPassword" type="text" name="newPassword" class="span4" placeholder="Your new password"/>
                            <span class="help-block" style="color: red;"></span>
                        </div>
                    </div>
                    <input type="hidden" name="userName" value="${sessionScope.user.userName}"/>
                    <div class="personalInformationChangeForm-save" style="margin-left: 14px">
                        <button id="passwordChangeButton" type="button" class="btn btn-success">Save</button>
                    </div>

                </form>
            </div>
        </div>
        <!--密码修改页面结束-->

        <!--个人信息编辑页面-->
        <div id="personalInformationMessage" style="display: none">
            <ul style="
      list-style-type: none;
      margin-top: 29px;
      overflow: scroll;
      height: 350px;" id="personalInformationRightDivUl">
                <!--头像修改-->
                <li class="personalInformationHeadChange" id="headEditorDiv">
                    <div id="headEditorDiv-first">
                        <label class="personalInformation-label">当前头像 :</label>
                        <img id="personalInformationHeadImg60" src="${sessionScope.user.userHeadUrl60}${requestScope.time}"/>
                        <div id="headEditorDiv-second">修改头像</div>
                    </div>
                </li>
                <!--个人信息修改-->
                <div class="personalInformationChangeDiv">
                    <div class="personalInformationChangeDivContent nopadding">
                        <form id="personalInformationForm"
                              action="userActionNoModelDriven_personalInformationSave.action" method="post"
                              class="form-horizontal">
                            <div class="personalInformationChangeForm-div">
                                <label class="personalInformation-label">* 用户名 :</label>
                                <div class="personalInformation-input-div">
                                    <input type="text" class="span4" placeholder="Your User name"
                                           id="personalInformation-input-username"
                                           readonly="readonly"
                                           name="UserName"
                                           value="${sessionScope.user.userName}"/>
                                </div>
                            </div>
                            <div class="personalInformationChangeForm-div">
                                <label class="personalInformation-label">* 性别 :</label>
                                <div class="personalInformation-input-div">
                                    <label>
                                        <input type="radio" name="UserSex" style="vertical-align: initial;" value="1"
                                               <c:if test="${sessionScope.UserSexMale}">checked</c:if> />
                                        男
                                    </label>
                                    <label>
                                        <input type="radio" name="UserSex" style="vertical-align: initial;" value="0"
                                               <c:if test="${sessionScope.UserSexFeMale}">checked</c:if> />
                                        女
                                    </label>
                                </div>
                            </div>
                            <div class="personalInformationChangeForm-div">
                                <label class="personalInformation-label">* 联系电话 :</label>
                                <div class="personalInformation-input-div">
                                    <input type="text" class="span4" placeholder="Your phone number"
                                           name="UserTel"
                                           value="${sessionScope.user.userTel}"/>
                                </div>
                            </div>
                            <div class="personalInformationChangeForm-div">
                                <label class="personalInformation-label">* 联系邮箱 :</label>
                                <div class="personalInformation-input-div">
                                    <input type="text" class="span4" placeholder="Your E-mail"
                                           name="UserEmail"
                                           value="${sessionScope.user.userEmail}"/>
                                </div>
                            </div>
                            <!--地址的select是要动态生成的，后面来处理，现在还是先完成纯页面的加载-->
                            <div class="personalInformationChangeForm-div" style="height: 64px;">
                                <label class="personalInformation-label">* 联系地址 :</label>
                                <select id="zazaluProvince" class="personalInformation-Address province"
                                        style="width: 98px;" name="UserProvince">
                                    <option value="${fn:substring(sessionScope.user.userAddress,0,2)}"
                                            selected="selected">${fn:substring(sessionScope.user.userAddress,0,2)}</option>
                                    <%--<option id="zazaluProvinceJiaZai" disabled="disabled">加载中</option>--%>
                                    <option value="北京">北京</option>
                                    <option value="天津">天津</option>
                                    <option value="河北">河北</option>
                                    <option value="山西">山西</option>
                                    <option value="内蒙古">内蒙古</option>
                                    <option value="辽宁">辽宁</option>
                                    <option value="吉林">吉林</option>
                                    <option value="黑龙江">黑龙江</option>
                                    <option value="上海">上海</option>
                                    <option value="江苏">江苏</option>
                                    <option value="浙江">浙江</option>
                                    <option value="安徽">安徽</option>
                                    <option value="福建">福建</option>
                                    <option value="江西">江西</option>
                                    <option value="山东">山东</option>
                                    <option value="河南">河南</option>
                                    <option value="湖北">湖北</option>
                                    <option value="湖南">湖南</option>
                                    <option value="广东">广东</option>
                                    <option value="广西">广西</option>
                                    <option value="海南">海南</option>
                                    <option value="重庆">重庆</option>
                                    <option value="四川">四川</option>
                                    <option value="贵州">贵州</option>
                                    <option value="云南">云南</option>
                                    <option value="西藏">西藏</option>
                                    <option value="陕西">陕西</option>
                                    <option value="甘肃">甘肃</option>
                                    <option value="青海">青海</option>
                                    <option value="宁夏">宁夏</option>
                                    <option value="新疆">新疆</option>
                                    <option value="台湾">台湾</option>
                                    <option value="香港">香港</option>
                                    <option value="澳门">澳门</option>
                                </select>
                                </select>
                                <select id="zazaluCity" class="personalInformation-Address city" style="width: 98px;"
                                        name="UserCity">
                                    <option value="${fn:substring(sessionScope.user.userAddress,2,4)}"
                                            selected="selected">${fn:substring(sessionScope.user.userAddress,2,4)}</option>
                                    <option id="zazaluCityJiaZai" disabled="disabled">加载中</option>
                                </select>
                                <select id="zazaluArea" class="personalInformation-Address area" style="width: 98px;"
                                        name="UserArea">
                                    <option value="${fn:substring(sessionScope.user.userAddress,4,6)}"
                                            selected="selected">${fn:substring(sessionScope.user.userAddress,4,6)}</option>
                                    <option id="zazaluAreaJiaZai" disabled="disabled">加载中</option>
                                </select>
                            </div>
                            <div class="personalInformationChangeForm-div" style="height: 64px;">
                                <label class="personalInformation-label">* 生日 :</label>
                                <select class="personalInformation-birth year" style="width: 98px;"
                                        name="UserBirthYear">
                                    <option value="${sessionScope.userBirthYear}"
                                            selected="selected">${sessionScope.userBirthYear}</option>
                                    <option value="1940">1940</option>
                                    <option value="1941">1941</option>
                                    <option value="1942">1942</option>
                                    <option value="1943">1943</option>
                                    <option value="1944">1944</option>
                                    <option value="1945">1945</option>
                                    <option value="1946">1946</option>
                                    <option value="1947">1947</option>
                                    <option value="1948">1948</option>
                                    <option value="1949">1949</option>
                                    <option value="1950">1950</option>
                                    <option value="1951">1951</option>
                                    <option value="1952">1952</option>
                                    <option value="1953">1953</option>
                                    <option value="1954">1954</option>
                                    <option value="1955">1955</option>
                                    <option value="1956">1956</option>
                                    <option value="1957">1957</option>
                                    <option value="1958">1958</option>
                                    <option value="1959">1959</option>
                                    <option value="1960">1960</option>
                                    <option value="1961">1961</option>
                                    <option value="1962">1962</option>
                                    <option value="1963">1963</option>
                                    <option value="1964">1964</option>
                                    <option value="1965">1965</option>
                                    <option value="1966">1966</option>
                                    <option value="1967">1967</option>
                                    <option value="1968">1968</option>
                                    <option value="1969">1969</option>
                                    <option value="1970">1970</option>
                                    <option value="1971">1971</option>
                                    <option value="1972">1972</option>
                                    <option value="1973">1973</option>
                                    <option value="1974">1974</option>
                                    <option value="1975">1975</option>
                                    <option value="1976">1976</option>
                                    <option value="1977">1977</option>
                                    <option value="1978">1978</option>
                                    <option value="1979">1979</option>
                                    <option value="1980">1980</option>
                                    <option value="1981">1981</option>
                                    <option value="1982">1982</option>
                                    <option value="1983">1983</option>
                                    <option value="1984">1984</option>
                                    <option value="1985">1985</option>
                                    <option value="1986">1986</option>
                                    <option value="1987">1987</option>
                                    <option value="1988">1988</option>
                                    <option value="1989">1989</option>
                                    <option value="1990">1990</option>
                                    <option value="1991">1991</option>
                                    <option value="1992">1992</option>
                                    <option value="1993">1993</option>
                                    <option value="1994">1994</option>
                                    <option value="1995">1995</option>
                                    <option value="1996">1996</option>
                                    <option value="1997">1997</option>
                                    <option value="1998">1998</option>
                                    <option value="1999">1999</option>
                                    <option value="2000">2000</option>
                                    <option value="2001">2001</option>
                                    <option value="2002">2002</option>
                                    <option value="2003">2003</option>
                                    <option value="2004">2004</option>
                                    <option value="2005">2005</option>
                                    <option value="2006">2006</option>
                                    <option value="2007">2007</option>
                                    <option value="2008">2008</option>
                                    <option value="2009">2009</option>
                                    <option value="2010">2010</option>
                                    <option value="2011">2011</option>
                                    <option value="2012">2012</option>
                                    <option value="2013">2013</option>
                                    <option value="2014">2014</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                </select>
                                <select class="personalInformation-birth month" style="width: 98px;"
                                        name="UserBirthMonth">
                                    <option value="${sessionScope.userBirthMonth}"
                                            selected="selected">${sessionScope.userBirthMonth}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select class="personalInformation-birth day" style="width: 98px;" name="UserBirthDay">
                                    <option value="${sessionScope.userBirthDay}"
                                            selected="selected">${sessionScope.userBirthDay}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                            <div class="personalInformationChangeForm-div">
                                <label class="personalInformation-label">* 身份证号 :</label>
                                <div class="personalInformation-input-div">
                                    <input type="text" class="span4" placeholder="Your IdentityId" name="UserIdentity"
                                           value="${sessionScope.user.userIdentity}"/>
                                </div>
                            </div>
                            <div class="personalInformationChangeForm-save">
                                <button type="submit" class="btn btn-success">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ul>
        </div>
        <!--个人信息编辑页面结束-->

    </div>
    <!--隐藏div结束-->

    <!--头像具体编辑页面-->
    <div id="headEditorDiv-third" style="display: none">
        <div id="headEditorDiv-third-middle-left">
            <img id="image" src="img/user/user1/selectPicture.jpg">
            <div id="preview164"></div>
            <p style="position: relative;left: 736px;bottom: 396px;width: 114px;">大尺寸头像 164x164</p>
            <div id="preview60"></div>
            <p style="position: relative;left: 707px;bottom: 367px;font-size: 12px;width: 114px;">60x60</p>
            <div id="preview30"></div>
            <p style="position: relative;left: 784px;bottom: 425px;font-size: 10px;width: 114px;">30x30</p>
            <p style="    position: relative;left: 687px;bottom: 384px;font-size: 11px;width: 177px;color: rgba(135, 80, 0, 1);">
                您上传的头像会自动生成三种尺寸，请注意中小尺寸的头像是否清晰</p>
        </div>
        <div id="headEditorDiv-third-top">
            <input type="file" class="sr-only" id="inputImage" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff"
                   style="float: right;position: relative;right: 83%;width: 17%;padding-top: 2%;opacity: 0;z-index: 10;"/>
            <button class="btn btn-info btn-large">上传图片</button>
            <button class="btn btn-success btn-large" id="controlCropBoxSaveButtons">保存</button>
            <button class="btn  controlCropBoxButtons" id="controlCropBoxTurnBigButtons">放大</button>
            <button class="btn  controlCropBoxButtons" id="controlCropBoxTurnSmallButtons">缩小</button>
        </div>
    </div>
    <!--头像具体编辑页面结束-->
</div>

</div>

<!--从下方弹出的回复Div-->
<form id="goodsEvaluateReplyForm" method="POST" enctype="multipart/form-data">
    <div class="goodsEvaluateReplyDownDiv">
        <div class="goodsEvaluateReplyDownDiv-first"><span id="goodsEvaluateReplyDownDiv-first-span">回复: zazalu</span> <a id="goodsEvaluateReplyDownDiv-first-a2" href="javascript:;">关闭</a>
            <a id="goodsEvaluateReplyDownDiv-first-a1" href="javascript:;">发送</a>
        </div>
        <div class="goodsEvaluateReplyDownDiv-uploadPicture" style="height: 0px">
            <ul style="height: inherit;" id="goodsEvaluateReplyDownDiv-uploadPicture-Ul">

            </ul>
        </div>
        <div class="goodsEvaluateReplyDownDiv-second">
            <textarea id="goodsEvaluateReplyDownDiv-second-textarea"></textarea>
            <div id="goodsEvaluateReplyDownDiv-second-addPictureDiv">
                <i class="icon-camera icon-2x" id="goodsEvaluateReplyDownDiv-second-addPicture">
                    <input type="file" name="replyPicture[]" id="goodsEvaluateReplyDownDiv-second-addPictureInput" />
                </i>
            </div>
        </div>
    </div>
</form>
<!--回复Div结束-->

<!--购买弹出框-->
<div class="goodsBuyDiv">
    <div class="goodsBuyDiv-first">
        <ul class="recent-posts">
            <li class="recent-posts-goodsLi">
                <div class="user-thumb" style="margin-top: -5px;width: 65px;height: 65px"> <img width="65" height="65" alt="User" src="img/goods/good1/goodImg430.jpg"> </div>
                <div class="article-post" style="margin-left: 47%">
                    <p class="good-info" style="font-size: 17px;color: white;"> 商品名: john Deo / 净含量: 2  / 颜色: 3  / 购买数量: 0 </p>
                    <p style="font-size: 15px;color: white;">价格: 648¥</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="goodsBuyDiv-second" style="background-image: url(img/QRCode.png)">
    </div>
    <div class="goodsBuyDiv-third">支 付</div>
    <div class="goodsBuyDiv-fourth">取 消</div>
</div>

<!--购买弹出框结束-->

<!--隐藏的form表单-->
<form id="goodBuyForm"  action="ordersAction_payOrders.action" method="post" >
    <input id="goodId" type="hidden" name="GoodId" value="">
    <input id="goodName" type="hidden" name="GoodName" value="">
    <input id="goodNetWeight" type="hidden" name="GoodNetWeight" value="">
    <input id="goodColor" type="hidden" name="GoodColor" value="">
    <input id="goodBuyQuantity" type="hidden" name="GoodBuyQuantity" value="">
    <input id="ordersId" type="hidden" name="OrdersId" value="">
</form>

<!--弹出回复栏时候的遮罩-->
<div id="replyZheZhao" ></div>

<!--Footer-part-->
<div class="row-fluid">
    <ul class="footul">
        <li style="padding-left: 250px">
            <span class="foot add-on bg_lg"><i class="icon-phone icon-2x"></i></span>
            <div class="footdivone">
                <p>000-000-0000 / 000-000-0000</p>
                <p style="font-size: 11px">普通话7*24小时</p>
            </div>
        </li>
        <li>
            <span class="foot add-on bg_lg"><i class="icon-comments icon-2x"></i></span>
            <div class="footdivone">
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                <p style="font-size: 11px">微信公众号</p>
            </div>
        </li>
        <li>
            <span class="foot add-on bg_lg"><i class="icon-headphones icon-2x"></i></span>
            <div class="footdivone">
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                <p style="font-size: 11px">在线客服</p>
            </div>
        </li>
    </ul>
    <div id="footer" class="span12"> 2013 &copy; Matrix Admin. Brought to you by <a href="http://themedesigner.in/">Themedesigner.in</a>
    </div>
</div>
<!--end-Footer-part-->
<script src="js/jquery.js"></script>
<!--<script src="js/jquery.min.js"></script>-->
<script src="js/jquery.ui.custom.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/matrix.js"></script>
<script src="js/shouyeAdsPicture.js"></script>
<script src="js/zazaluMusic.js"></script>
<script src="js/zazaluSearch.js"></script>
<script src="js/personalPage.js"></script>
<script src="js/select2.min.js"></script>
<!--头像裁剪的依赖js-->
<script src="js/cropper.js"></script>
<script src="js/cropperPerferences.js"></script>
<!--头像裁剪js结束-->
<script type="text/javascript">
    $(document).ready(function () {
        $(".province").select2();
        $(".city").select2();
        $(".area").select2();
        $(".month").select2();
        $(".day").select2();
        $(".year").select2();
    });
</script>
<script src="js/getChinaMap.js"></script>
<script src="js/getAddressChinaMap.js"></script>

</body>

</html>