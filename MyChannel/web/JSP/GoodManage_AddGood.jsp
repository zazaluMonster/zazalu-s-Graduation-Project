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
  <link rel="stylesheet" href="css/colorpicker.css">
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
  <!--sidebar-menu-->

  <div id="sidebar">
    <!--<a href="#" class="visible-phone"><i class="icon icon-file"></i> Addons</a>-->
    <ul>
      <li class="active"><a href="${pageContext.request.contextPath}/JSP/GoodManage_AddGood.jsp"><i class="icon icon-plus"></i> <span>添加商品</span></a> </li>
      <li><a href="${pageContext.request.contextPath}/JSP/GoodManage_ChangeGoodMessage_Browser.jsp"><i class="icon icon-wrench"></i> <span>商品信息修改</span></a></li>
      <li><a href="${pageContext.request.contextPath}/JSP/GoodManage_Order_Browser.jsp"><i class="icon icon-th"></i> <span>查看订单</span></a></li>

    </ul>
  </div>

  <!--添加商品的页面-->
  <div id="content">
    <div id="content-header">
      <div id="breadcrumb"> <a href="#" title="Go to Home" class="tip-bottom"><i class="icon-home"></i> Home</a> <a href="#">商铺管理</a>
        <a href="#" class="current">添加商品</a>
      </div>
    </div>
    <div class="container-fluid">
      <!-- <hr> -->
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title"> <span class="icon"> <i class="icon-plus"></i> </span>
              <h5>添加商品</h5>
            </div>
            <div class="widget-content">
              <div class="widget-content nopadding">
                <form id="addNewGoodForm" action="${pageContext.request.contextPath}/addNewGoodServlet" method="post" class="form-horizontal" enctype="multipart/form-data">
                  <div class="control-group">
                    <label class="control-label"><span style="color: red">*</span>商品名 :</label>
                    <div class="controls">
                      <input id="GoodName" name="GoodName" type="text" class="span11" placeholder="请输入商品名" />
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label"><span style="color: red">*</span>商品描述 :</label>
                    <div class="controls">
                      <textarea id="GoodDes" name="GoodDes" class="span11" placeholder="对该商品的官方描述"></textarea>
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label"><span style="color: red">*</span>商品价格 :</label>
                    <div class="controls">
                      <input id="GoodPrice" name="GoodPrice" type="text" class="span11" placeholder="商品价格" />
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label"><span style="color: red">*</span>商品库存 :</label>
                    <div class="controls">
                      <input id="GoodStock" name="GoodStock" type="text" class="span11" placeholder="商品库存量" />
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label"><span style="color: red">*</span>净含量 :</label>
                    <div class="controls">
                      <input id="GoodNetWeight" name="GoodNetWeight" type="text" class="span11" placeholder="写法 :50ml&100ml&150ml" />
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label"><span style="color: red">*</span>颜色 (rgb) :</label>
                    <div class="controls" id="GoodsColorDiv">
                      <div data-color-format="rgb" data-color="rgb(155, 142, 180)" class="input-append color colorpicker colorpicker-rgb">
                        <input name="GoodColor" type="text" value="rgb(155, 142, 180)" class="span11" />
                        <span class="add-on"><i style="background-color: rgb(155, 142, 180)"></i></span>
                      </div>
                      <div data-color-format="rgb" data-color="rgb(155, 142, 180)" class="input-append color colorpicker colorpicker-rgb">
                        <input  name="GoodColor" type="text" value="rgb(155, 142, 180)" class="span11" />
                        <span class="add-on"><i style="background-color: rgb(155, 142, 180)"></i></span>
                      </div>
                      <div data-color-format="rgb" data-color="rgb(155, 142, 180)" class="input-append color colorpicker colorpicker-rgb">
                        <input name="GoodColor" type="text" value="rgb(155, 142, 180)" class="span11" />
                        <span class="add-on"><i style="background-color: rgb(155, 142, 180)"></i></span>
                      </div>
                      <span id="addGoodsColorButton">-</span>
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label"><span style="color: red">*</span>折扣率 :</label>
                    <div class="controls">
                      <select id="GoodDiscount" name="GoodDiscount" class="" style="width: 98px;">
                        <option value="1"  selected="selected">1</option>
                        <option value="2"  >2</option>
                        <option value="3"  >3</option>
                        <option value="4"  >4</option>
                        <option value="5"  >5</option>
                        <option value="6"  >6</option>
                        <option value="7"  >7</option>
                        <option value="8"  >8</option>
                        <option value="9"  >9</option>
                        <option value="0"  >10</option>
                      </select>
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label"><span style="color: red">*</span>商品积分 :</label>
                    <div class="controls">
                      <select id="GoodPoint" name="GoodPoint" class="" style="width: 98px;">
                        <option value="1"  selected="selected">1</option>
                        <option value="2"  >2</option>
                        <option value="3"  >3</option>
                        <option value="4"  >4</option>
                        <option value="5"  >5</option>
                        <option value="6"  >6</option>
                        <option value="7"  >7</option>
                        <option value="8"  >8</option>
                        <option value="9"  >9</option>
                        <option value="10"  >10</option>
                      </select>
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">商品Message :</label>
                    <div class="controls">
                      <input id="GoodMessage" name="GoodMessage" type="text" class="span11" />
                      <span class="help-block">商品展示页面在商品名下方显示的补充性文字，红色</span>
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label"><span style="color: red">*</span>商品封面 :</label>
                    <div class="controls">
                      <div class="uploader" >
                        <input id="GoodImgUrl30" name="GoodImgUrl30" type="file" size="19" style="opacity: 0;">
                        <span class="filename">No file selected</span>
                        <span class="action">Choose File</span>
                      </div>
                      <div class="uploader" >
                        <input id="GoodImgUrl60" name="GoodImgUrl60" type="file" size="19" style="opacity: 0;">
                        <span class="filename">No file selected</span>
                        <span class="action">Choose File</span>
                      </div>
                      <div class="uploader" >
                        <input id="GoodImgUrl164" name="GoodImgUrl164" type="file" size="19" style="opacity: 0;">
                        <span class="filename">No file selected</span>
                        <span class="action">Choose File</span>
                      </div>
                      <div class="uploader">
                        <input id="GoodImgUrl430" name="GoodImgUrl430" type="file" size="19" style="opacity: 0;">
                        <span class="filename">No file selected</span>
                        <span class="action">Choose File</span>
                      </div>
                      <span id="addGoodImgSpan" class="help-block" style="padding-top: 7px;">请严格按30x30 60x60 164x164 430x430图片大小顺序从左到右上传</span>
                      <span class="help-block" style="padding-top: 7px;color: red"></span>
                    </div>
                  </div>
                  <%--<div class="control-group">--%>
                    <%--<label class="control-label">商品展示图 :</label>--%>
                    <%--<div class="controls">--%>
                      <%--<div class="uploader" >--%>
                        <%--<input type="file" size="19" style="opacity: 0;">--%>
                        <%--<span class="filename">No file selected</span>--%>
                        <%--<span class="action">Choose File</span>--%>
                      <%--</div>--%>
                      <%--<div class="uploader" >--%>
                        <%--<input type="file" size="19" style="opacity: 0;">--%>
                        <%--<span class="filename">No file selected</span>--%>
                        <%--<span class="action">Choose File</span>--%>
                      <%--</div>--%>
                      <%--<div class="uploader" >--%>
                        <%--<input type="file" size="19" style="opacity: 0;">--%>
                        <%--<span class="filename">No file selected</span>--%>
                        <%--<span class="action">Choose File</span>--%>
                      <%--</div>--%>
                      <%--<span class="help-block" style="padding-top: 7px;">可以的话 商品的各个角度的图片请在这里上传 供买家可以浏览更多的商品信息</span>--%>
                      <%--<span class="help-block" style="padding-top: 7px;color: red"></span>--%>
                    <%--</div>--%>
                  <%--</div>--%>
              <div class="form-actions">
                <button id="addNewGoodButton" type="button" class="btn btn-success">Save</button>
              </div>
              </form>
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
  <!--使用它的原因是 我使用了最新的jquery 然而我后面的js用到了老版的jquery的api(其在最新的jquery中已经被废弃) 所以要使用下面这个js 可以让您使用被废弃的api-->
  <script src="js/jquery.migrate.1.2.1.js"></script>
  <script src="js/jquery.ui.custom.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/matrix.js"></script>
  <script src="js/shouyeAdsPicture.js"></script>
  <script src="js/zazaluMusic.js"></script>
  <script src="js/zazaluSearch.js"></script>
  <!--保证文件选择后显示选择图片名的js-->
  <script src="js/jquery.uniform.js"></script>
  <script src="js/matrix.form_common.js"></script>
  <!--实现颜色选择-->
  <script src="js/bootstrap-colorpicker.js"></script>
  <script src="js/select2.min.js"></script>
  <script src="js/addGoodsColorButtonJs.js"></script>
  <script src="js/addNewGood.js"></script>
</body>

</html>