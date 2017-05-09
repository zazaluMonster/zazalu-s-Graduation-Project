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
  <ul>
    <li ><a href="${pageContext.request.contextPath}/JSP/GoodManage_AddGood.jsp"><i class="icon icon-plus"></i> <span>添加商品</span></a> </li>
    <li ><a href="${pageContext.request.contextPath}/JSP/GoodManage_ChangeGoodMessage_Browser.jsp"><i class="icon icon-wrench"></i> <span>商品信息修改</span></a></li>
    <li class="active"><a href="${pageContext.request.contextPath}/JSP/GoodManage_Order_Browser.jsp"><i class="icon icon-th"></i> <span>查看订单</span></a></li>

  </ul>
  </div>

  <!--添加商品的页面-->
  <div id="content">
    <div id="content-header">
      <div id="breadcrumb"> <a href="#" title="Go to Home" class="tip-bottom"><i class="icon-home"></i> Home</a> <a href="#">商铺管理</a>
        <a href="#" class="current">订单详情</a>
      </div>
    </div>
    <div class="container-fluid">
      <!-- <hr> -->
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title"> <span class="icon"> <i class="icon-plus"></i> </span>
              <h5>订单详情</h5>
            </div>
          </div>
          <div class="widget-content">
            <div class="row-fluid">
              <div class="span6" style="width: 20%;margin-bottom: 11px">
                <img src="${sessionScope.order.goodId.goodImgUrl430}" />
              </div>
              <div class="span6" style="width: 23%;">
                <table class="">
                  <tbody>
                    <tr>
                      <td>
                        <h4>订单号 : ${sessionScope.order.ordersId}</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>买方名 : ${sessionScope.order.userId.userName}</td>
                    </tr>
                    <tr>
                      <td>买方联系方式 : +${sessionScope.order.userId.userTel}</td>
                    </tr>
                    <tr>
                      <td>买方邮箱 : ${sessionScope.order.userId.userEmail}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="span6" style="float: none;margin: 0">
                <table class="table table-bordered table-invoice">
                  <tbody>
                    <tr>
                      <td class="width30">商品唯一 ID:</td>
                      <td class="width70"><strong>${sessionScope.order.goodId.goodId}</strong></td>
                    </tr>
                    <tr>
                      <td>购买量 :</td>
                      <td><strong>${sessionScope.order.goodNumber}</strong></td>
                    </tr>
                    <tr>
                      <td>选择的净含量 :</td>
                      <td><strong>${sessionScope.order.goodNetWeight}</strong></td>
                    </tr>
                    <tr>
                      <td>选择的颜色 :</td>
                      <td><strong>${sessionScope.order.goodColor}</strong></td>
                    </tr>
                    <tr>
                      <td>享有的折扣率 :</td>
                      <td><strong style="color: red">${sessionScope.order.goodId.goodDiscount}</strong></td>
                    </tr>
                    <tr>
                      <td>可获得的积分点 :</td>
                      <td><strong>${sessionScope.order.goodId.goodPoint}</strong></td>
                    </tr>
                    <tr>
                      <td class="width30">订单评价 :</td>
                      <td class="width70">
                        <strong style="font-size: 14px">zazalu</strong>
                        <br> <span style="font-size: 11px;color: #0593d3">2017.4.5 14:58:00</span>
                        <br> 东西很不错，很良心的产品
                        <br> <span style="font-size: 10px;">回复</span>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </div>
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
  <script src="js/zazaluSearch.js"></script>
  <!--保证文件选择后显示选择图片名的js-->
  <script src="js/jquery.uniform.js"></script>
  <script src="js/matrix.form_common.js"></script>

</body>

</html>