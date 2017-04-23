<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Matrix Admin</title>
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
  <link rel="stylesheet" href="css/goodsTags.css">

  <link href="font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

</head>

<body>
  <!--Header-part-->
  <div id="header">
    <h1><a href="dashboard.html">Matrix Admin</a></h1>
  </div>
  <!--close-Header-part-->

  <!--top-Header-menu-->
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav" id="headList">
      <li class="dropdown" id="profile-messages"><a title="" href="#" data-toggle="dropdown"
                                                    data-target="#profile-messages" class="dropdown-toggle"><i
              class="icon icon-user"></i> <span class="text">Welcome User</span><b class="caret"></b></a>
        <ul class="dropdown-menu">
          <li>
            <a href="买方个人信息.jsp" id="user-nav-userHeadA">
              <img id="user-nav-userHeadImg" src="${sessionScope.user.userHeadUrl60}"/>
              <div id="user-nav-userHeadDescrible">
                <div id="user-nav-userHeadId">${sessionScope.user.userName}</div>
                <div id="user-nav-userHeadWelcome">Mychanel欢迎您</div>
              </div>
            </a>
          </li>
          <li class="divider"></li>
          <li><a href="#"><i class="icon-check"></i> My Tasks</a></li>
          <li class="divider"></li>
          <li><a href="#"><i class="icon-heart-empty"></i> My Favorites</a></li>
          <li class="divider"></li>
          <li><a href="${pageContext.request.contextPath}/userAction_userLogOut.action"><i class="icon-key"></i> Log Out</a></li>
        </ul>
      </li>
      <li class="dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages"
                                                 class="dropdown-toggle"><i class="icon icon-envelope"></i> <span
              class="text">Messages</span> <span class="label label-important">5</span> <b class="caret"></b></a>
        <ul class="dropdown-menu">
          <li><a class="sAdd" title="" href="#"><i class="icon-plus"></i> new message</a></li>
          <li class="divider"></li>
          <li><a class="sInbox" title="" href="#"><i class="icon-envelope"></i> inbox</a></li>
          <li class="divider"></li>
          <li><a class="sOutbox" title="" href="#"><i class="icon-arrow-up"></i> outbox</a></li>
          <li class="divider"></li>
          <li><a class="sTrash" title="" href="#"><i class="icon-trash"></i> trash</a></li>
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
  <!--sidebar-menu-->

  <ul>
    <li><a href="${pageContext.request.contextPath}/JSP/GoodManage_AddGood.jsp"><i class="icon icon-plus"></i> <span>添加商品</span></a> </li>
    <li class="submenu active"><a href="#"><i class="icon icon-tag"></i> <span>商品标签管理</span></a>
      <ul>
        <li><a href="${pageContext.request.contextPath}/JSP/GoodManage_GoodTagManage_Browser.jsp">商品标签列表</a></li>
        <li><a href="${pageContext.request.contextPath}/JSP/GoodManage_GoodTagManage_AddTag.jsp">添加商品标签</a></li>
      </ul>
    </li>
    <li><a href="${pageContext.request.contextPath}/JSP/GoodManage_ChangeGoodMessage_Browser.jsp"><i class="icon icon-wrench"></i> <span>商品信息修改</span></a></li>
    <li><a href="${pageContext.request.contextPath}/JSP/GoodManage_Order_Browser.jsp"><i class="icon icon-th"></i> <span>查看订单</span></a></li>

  </ul>
  </div>

  <!--添加商品的页面-->
  <div id="content">
    <div id="content-header">
      <div id="breadcrumb"> <a href="#" title="Go to Home" class="tip-bottom"><i class="icon-home"></i> Home</a> <a href="#">商铺管理</a>
        <a href="#" class="current">商品标签管理</a>
      </div>
    </div>
    <div class="container-fluid">
      <!-- <hr> -->
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title"> <span class="icon"> <i class="icon-plus"></i> </span>
              <h5>商品名</h5>
            </div>
            <div class="widget-content">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>该商品所属标签</th>
                    <th>该标签的字标签</th>
                    <th>标签描述</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="label">Default</span><i class="icon-remove"></i></td>
                    <td><span class="badge">1</span></td>
                    <td><code>&lt;span class="badge"&gt;</code></td>
                  </tr>
                  <tr>
                    <td><span class="label"></td>
                    <td><span class="badge">1</span><i class="icon-remove"></i></td>
                    <td><code>&lt;span class="badge"&gt;</code></td>
                  </tr>
                  <tr>
                    <td><span class="label">Default</span><i class="icon-remove"></i></td>
                    <td><span class="badge">1</span></td>
                    <td><code>&lt;span class="badge"&gt;</code></td>
                  </tr>
                  <tr>
                    <td><span class="label">Default</span><i class="icon-remove"></i></td>
                    <td><span class="badge">1</span></td>
                    <td><code>&lt;span class="badge"&gt;</code></td>
                  </tr>
                  <tr>
                    <td><span class="label">Default</span><i class="icon-remove"></i></td>
                    <td><span class="badge">1</span></td>
                    <td><code>&lt;span class="badge"&gt;</code></td>
                  </tr>
                  <tr>
                    <td><span class="label">Default</span><i class="icon-remove"></i></td>
                    <td><span class="badge">1</span></td>
                    <td><code>&lt;span class="badge"&gt;</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title"> <span class="icon"> <i class="icon-plus"></i> </span>
              <h5>为该商品添加新标签</h5>
            </div>
            <div class="widget-content nopadding">
              <form action="#" method="get" class="form-horizontal">
                <div class="control-group">
                  <label class="control-label"><span style="color: red">*</span>母标签 :</label>
                  <div class="controls">
                    <input type="text" class="span2" placeholder="请输入母标签名" />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label"><span style="color: red">*</span>母标签描述 :</label>
                  <div class="controls">
                    <input type="text" class="span11" placeholder="请输入标签描述" />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label">子标签1 :</label>
                  <div class="controls">
                    <input type="text" class="span2" placeholder="请输入子标签名" />
                  </div>
                  <span id="addGoodsChildTagButton" style="position: relative;left: 451px;font-size: 23px;">+</span>
                </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-success">Save</button>
            </div>
            </form>
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
  <script src="js/zazaluSearch.js"></script>
  <script src="js/addGoodsChildTagJs.js"></script>
  <!--保证文件选择后显示选择图片名的js-->
  <script src="js/jquery.uniform.js"></script>
  <script src="js/matrix.form_common.js"></script>
  


</body>

</html>