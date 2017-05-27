<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">
<%--时间戳--%>
<%
    request.setAttribute("time","?" + new Date().getTime());
%>
<head>
    <title>MyChannel</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/bootstrap-responsive.min.css"/>
    <link rel="stylesheet" href="css/matrix-style.css"/>
    <link rel="stylesheet" href="css/matrix-media.css"/>
    <link rel="stylesheet" href="css/shouyeCss.css"/>
    <link rel="stylesheet" href="css/userPageCss.css"/>
    <link rel="stylesheet" href="css/select2.min.css"/>
    <link rel="stylesheet" href="css/foot.css"/>
    <link rel="stylesheet" href="css/zazaluhead.css"/>
    <link rel="stylesheet" href="css/goodbuydiv.css"/>
    <link rel="stylesheet" href="css/replydowndiv.css" />
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
<!--top-Header-menu-->
<div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav" id="headList">
        <li class="dropdown" id="profile-messages"><a title="" href="#" data-toggle="dropdown"
                                                      data-target="#profile-messages" class="dropdown-toggle"><i
                class="icon icon-user"></i> <span class="text">欢迎 用户</span><b class="caret"></b></a>
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
                <li><a href="ShoppingCart.jsp"><i class="icon-heart-empty"></i> 我的购物车</a></li>
                <li class="divider"></li>
                <li><a href="userFavorite.jsp"><i class="icon-heart-empty"></i> 我的收藏夹</a></li>
                <li class="divider"></li>
                <li><a href="${pageContext.request.contextPath}/userAction_userLogOut.action"><i class="icon-key"></i>
                    登出</a></li>
            </ul>
        </li>
        <li class=""><a title="" href="#"><i class="icon icon-cog"></i> <span class="text">设置</span></a></li>
        <li class=""><a title="" href="login.jsp"><i class="icon icon-question-sign"></i> <span
                class="text">支持</span></a></li>
        <li class=""><a title="" href="login.jsp"><i class="icon icon-heart"></i> <span class="text">关于</span></a>
        </li>
        <li class=""><a title="" href="${pageContext.request.contextPath}/userAction_userLogOut.action"><i
                class="icon icon-share-alt"></i> <span
                class="text">登出</span></a></li>
        <li class="">
            <a title="" href="#" id="headMusicA">
                <i class="icon icon-music" id="headMusicI"></i>
                <span class="text" id="headMusicSpan">音乐</span>
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
    <input type="text" placeholder="找不到？试试搜索" id="headSearch"/>
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
                    class="icon icon-shopping-cart" style="margin-right: 8px;"></i>我的购物车</a>
                <span class="personalInformation-quantity" style="display: none">2</span>
            </div>
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
</div>


<!--隐藏的form表单-->
<form id="goodBuyForm"  action="ordersAction_payOrders.action" method="post" >
    <input id="goodId" type="hidden" name="GoodId" value="">
    <input id="goodName" type="hidden" name="GoodName" value="">
    <input id="goodNetWeight" type="hidden" name="GoodNetWeight" value="">
    <input id="goodColor" type="hidden" name="GoodColor" value="">
    <input id="goodBuyQuantity" type="hidden" name="GoodBuyQuantity" value="">
    <input id="ordersId" type="hidden" name="OrdersId" value="">
</form>

<!--购买弹出框-->
<div class="goodsBuyDiv">
    <div class="goodsBuyDiv-first">
        <ul class="recent-posts">
            <li class="recent-posts-goodsLi">
                <div class="user-thumb" style="margin-top: -5px;width: 65px;height: 65px"><img width="65" height="65"
                                                                                               alt="User"
                                                                                               src="img/goods/good1/goodImg430.jpg">
                </div>
                <div class="article-post" style="margin-left: 47%">
                    <p class="good-info" style="font-size: 17px;color: white;"></p>
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

<!--弹出回复栏时候的遮罩-->
<div id="replyZheZhao"></div>

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
<script src="js/gouwuche.js"></script>
</body>

</html>