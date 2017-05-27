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
<title>MyChanne</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="css/bootstrap-responsive.min.css" />
<link rel="stylesheet" href="css/matrix-style.css" />
<link rel="stylesheet" href="css/matrix-media.css" />
<link rel="stylesheet" href="css/shouyeCss.css" />
<link rel="stylesheet" href="css/foot.css" />
<link rel="stylesheet" href="css/zazaluhead.css" />
<link href="font-awesome/css/font-awesome.css" rel="stylesheet" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

</head>
<body >
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
        <li><a href="${pageContext.request.contextPath}/userAction_userLogOut.action"><i class="icon-key"></i> 登出</a></li>
      </ul>
    </li>
    <li class=""><a title="" href="#"><i class="icon icon-cog"></i> <span class="text">设置</span></a></li>
    <li class=""><a title="" href="login.jsp"><i class="icon icon-question-sign"></i> <span
            class="text">支持</span></a></li>
    <li class=""><a title="" href="login.jsp"><i class="icon icon-heart"></i> <span class="text">关于</span></a>
    </li>
    <li class=""><a title="" href="${pageContext.request.contextPath}/userAction_userLogOut.action"><i class="icon icon-share-alt"></i> <span
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
  <input type="text" placeholder="找不到？试试搜索" id="headSearch" value=""/>
  <button id="topSearchButton" type="button" class="tip-bottom" title="Search"><i class="icon-search icon-white"></i></button>
</div>
<!--close-top-serch--> 

<!--首页广告的索引图片-->
<!--<div id="shouyeAdsIndex"></div>-->
<!--首页广告-->
<div id="shouyeAds" style="background-size: cover;background-position: 0px -47px;">
</div>
<!--sidebar-menu-->

<div id="sidebar" style="display: none"> <!--<a href="#" class="visible-phone"><i class="icon icon-file"></i> Addons</a>-->
  <ul>
    <li><a href="index.html"><i class="icon icon-home"></i> <span>Dashboard</span></a> </li>
    <li><a href="charts.html"><i class="icon icon-signal"></i> <span>Charts &amp; graphs</span></a> </li>
    <li><a href="widgets.html"><i class="icon icon-inbox"></i> <span>Widgets</span></a> </li>
    <li><a href="tables.html"><i class="icon icon-th"></i> <span>Tables</span></a></li>
    <li><a href="grid.html"><i class="icon icon-fullscreen"></i> <span>Full width</span></a></li>
    <li class="submenu"> <a href="#"><i class="icon icon-list"></i> <span>Forms</span> <span class="label label-important">3</span></a>
      <ul>
        <li><a href="form-common.html">Basic Form</a></li>
        <li><a href="form-validation.html">Form with Validation</a></li>
        <li><a href="form-wizard.html">Form with Wizard</a></li>
      </ul>
    </li>
    <li><a href="buttons.html"><i class="icon icon-tint"></i> <span>Buttons &amp; icons</span></a></li>
    <li><a href="interface.html"><i class="icon icon-pencil"></i> <span>Eelements</span></a></li>
    <li class="submenu active"> <a href="#"><i class="icon icon-file"></i> <span>Addons</span> <span class="label label-important">5</span></a>
      <ul>
        <li><a href="index2.html">Dashboard2</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="calendar.html">Calendar</a></li>
        <li><a href="invoice.html">Invoice</a></li>
        <li><a href="chat.html">Chat option</a></li>
      </ul>
    </li>
    <li class="submenu"> <a href="#"><i class="icon icon-info-sign"></i> <span>Error</span> <span class="label label-important">4</span></a>
      <ul>
        <li><a href="error403.html">Error 403</a></li>
        <li><a href="error404.html">Error 404</a></li>
        <li><a href="error405.html">Error 405</a></li>
        <li><a href="error500.html">Error 500</a></li>
      </ul>
    </li>
    <li class="content"> <span>Monthly Bandwidth Transfer</span>
      <div class="progress progress-mini progress-danger active progress-striped">
        <div style="width: 77%;" class="bar"></div>
      </div>
      <span class="percent">77%</span>
      <div class="stat">21419.94 / 14000 MB</div>
    </li>
    <li class="content"> <span>Disk Space Usage</span>
      <div class="progress progress-mini active progress-striped">
        <div style="width: 87%;" class="bar"></div>
      </div>
      <span class="percent">87%</span>
      <div class="stat">604.44 / 4000 MB</div>
    </li>
  </ul>
</div>
<div id="content" style="margin-left: 0px">
  <div id="content-header">
    <div id="breadcrumb"> <a title="Go to Home" class="tip-bottom"><i class="icon-home"></i> 首页</a> 主页商品页<a ></a> <a class="current">所有商品页</a> </div>
    <!--<h1>Gallery</h1>-->
  </div>
  <div class="container-fluid"> <!-- <hr> -->
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-picture"></i> </span>
            <h5>所有商品页</h5>
          </div>
          <div class="widget-content">
            <ul class="thumbnails">
              <%--动态生成li--%>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pagination alternate">
    <ul id="paginationDiv">
      <%--动态生成页数--%>
    </ul>
  </div>
</div>


<!--Footer-part-->
<div class="row-fluid">
  <ul class="footul">
      <li style="padding-left: 25.5%;">
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
  <div id="footer" class="span12"> 2013 &copy; Matrix Admin. Brought to you by <a href="http://themedesigner.in/">Themedesigner.in</a></div>
</div>
<!--end-Footer-part-->
<script src="js/jquery.min.js"></script> 
<script src="js/jquery.ui.custom.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/matrix.js"></script>
<script src="js/shouyeAdsPicture.js"></script>
<script src="js/zazaluMusic.js"></script>
<script src="js/zazaluSearch.js"></script>
<script src="js/zazaluShouyeLoading.js"></script>
</body>
</html>
