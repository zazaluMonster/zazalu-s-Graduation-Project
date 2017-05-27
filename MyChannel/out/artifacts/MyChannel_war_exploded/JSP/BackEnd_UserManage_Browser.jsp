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
  <title>Mychannel</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/bootstrap-responsive.min.css" />
  <link rel="stylesheet" href="css/matrix-style.css" />
  <link rel="stylesheet" href="css/matrix-media.css" />
  <link rel="stylesheet" href="css/shouyeCss.css" />
  <link rel="stylesheet" href="css/goodsManage.css" />
  <link rel="stylesheet" href="css/foot.css" />
  <link rel="stylesheet" href="css/zazaluhead.css" />
  <link rel="stylesheet" href="css/uniform.css">
  <link rel="stylesheet" href="css/select2.min.css" />
  <link rel="stylesheet" href="css/goodsMessageBrowse.css">
  <link href="font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

</head>

<body>
  <!--Header-part-->
  <div id="header">
    <h1><a href="forwardPage/toManagePageSelect.jsp">Matrix Admin</a></h1>
  </div>
  <!--close-Header-part-->

  <!--top-Header-menu-->
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav" id="headList">
      <li class="dropdown" id="profile-messages"><a title="" href="#" data-toggle="dropdown"
                                                    data-target="#profile-messages" class="dropdown-toggle"><i
              class="icon icon-user"></i> <span class="text">欢迎 管理员</span><b class="caret"></b></a>
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
  <!--sidebar-menu-->

  <div id="sidebar">
    <!--<a href="#" class="visible-phone"><i class="icon icon-file"></i> Addons</a>-->
    <ul>
      <li class="submenu"><a href="#"><i class="icon icon-plus"></i> <span>广告管理</span></a>
        <ul>
          <li><a id="adsListA" href="${pageContext.request.contextPath}/JSP/后台管理_广告管理_浏览.jsp">广告列表</a></li>
          <li><a href="${pageContext.request.contextPath}/JSP/BackEnd_AdsManage.jsp">添加新广告</a></li>
        </ul>
      </li>
      <li><a href="BackEnd_month.jsp"><i class="icon icon-tag"></i> <span>月交易统计</span></a> </li>
      <li class="active"><a href="BackEnd_UserManage_Browser.jsp"><i class="icon icon-wrench"></i> <span>账户管理</span></a> </li>

    </ul>
  </div>

  <!--添加商品的页面-->
  <div id="content">
    <div id="content-header">
      <div id="breadcrumb"> <a title="Go to Home" class="tip-bottom"><i class="icon-home"></i> 主页</a> <a >后台管理</a>
        <a class="current">账户管理</a>
      </div>
    </div>
    <div class="container-fluid">
      <!-- <hr> -->
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title"> <span class="icon"> <i class="icon-plus"></i> </span>
              <ul style="list-style: none;padding-top: 4px;">
                <li style="width: 100px;float: left;">
                  <select class="searchType" style="width: 98px;" tabindex="-1" aria-hidden="true">
                    <option value="WY">买方名</option>
                  </select>
                </li>
                <li style="width: 260px;float: left;">
                  <div>
                    <input type="text" placeholder="Search here..." id="listSearch">
                    <button type="button" class="tip-bottom" data-original-title="Search" style="margin-bottom: 10px;"><i class="icon-search icon-white"></i></button>
                  </div>
                </li>
              </ul>
            </div>
            <div class="widget-content">
              <div class="widget-content nopadding">
                <ul class="recent-posts">
                  <%--动态生成li--%>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    <div id="footer" class="span12"> 2013 &copy; Matrix Admin. Brought to you by <a href="http://themedesigner.in/">Themedesigner.in</a></div>
  </div>
  <!--end-Footer-part-->
  <script src="js/jquery.min.js"></script>
  <script src="js/jquery.ui.custom.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/matrix.js"></script>
  <script src="js/shouyeAdsPicture.js"></script>
  <script src="js/zazaluMusic.js"></script>
  <script src="js/userManage.js"></script>
  <script src="js/searchUser.js"></script>
  <!--保证文件选择后显示选择图片名的js-->
  <script src="js/jquery.uniform.js"></script>
  <script src="js/matrix.form_common.js"></script>
  <%--下拉框--%>
  <script src="js/select2.min.js"></script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".searchType").select2();
      });
  </script>

</body>

</html>