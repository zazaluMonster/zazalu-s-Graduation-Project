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
    <link rel="stylesheet" href="css/goodsManage.css"/>
    <link rel="stylesheet" href="css/foot.css"/>
    <link rel="stylesheet" href="css/zazaluhead.css"/>
    <link rel="stylesheet" href="css/uniform.css">
    <link rel="stylesheet" href="css/select2.min.css" />
    <link rel="stylesheet" href="css/goodsMessageBrowse.css">
    <link rel="stylesheet" href="css/orderManageBrowser.css">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet"/>
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
<!--sidebar-menu-->
<div id="sidebar">
    <ul>
        <li><a href="${pageContext.request.contextPath}/JSP/GoodManage_AddGood.jsp"><i class="icon icon-plus"></i>
            <span>添加商品</span></a></li>
        <li><a href="${pageContext.request.contextPath}/JSP/GoodManage_ChangeGoodMessage_Browser.jsp"><i
                class="icon icon-wrench"></i> <span>商品信息修改</span></a></li>
        <li class="active"><a href="${pageContext.request.contextPath}/JSP/GoodManage_Order_Browser.jsp"><i
                class="icon icon-th"></i> <span>查看订单</span></a></li>

    </ul>
</div>

<!--添加商品的页面-->
<div id="content">
    <div id="content-header">
        <div id="breadcrumb"><a title="Go to Home" class="tip-bottom"><i class="icon-home"></i> 主页</a> <a
               >商铺管理</a>
            <a  class="current">订单查看</a>
        </div>
    </div>
    <div class="container-fluid">
        <!-- <hr> -->
        <div class="row-fluid">
            <div class="span12">
                <div class="widget-box">
                    <div class="widget-title"><span class="icon"> <i class="icon-plus"></i> </span>
                        <ul style="list-style: none;padding-top: 4px;">
                            <li style="width: 100px;float: left;">
                                <select id="searchType" class="searchType" style="width: 98px;" >
                                    <option value="userName">买方</option>
                                    <option value="buyTime">时间</option>
                                    <option value="orderId">订单号</option>
                                </select>
                            </li>
                            <li id="timeSearchYear" style="width: 100px;float: left;display: none">
                                <select id="year" class="searchType" style="width: 98px;">
                                    <option value="1940"  >1940</option>
                                    <option value="1941"  >1941</option>
                                    <option value="1942"  >1942</option>
                                    <option value="1943"  >1943</option>
                                    <option value="1944"  >1944</option>
                                    <option value="1945"  >1945</option>
                                    <option value="1946"  >1946</option>
                                    <option value="1947"  >1947</option>
                                    <option value="1948"  >1948</option>
                                    <option value="1949"  >1949</option>
                                    <option value="1950"  >1950</option>
                                    <option value="1951"  >1951</option>
                                    <option value="1952"  >1952</option>
                                    <option value="1953"  >1953</option>
                                    <option value="1954"  >1954</option>
                                    <option value="1955"  >1955</option>
                                    <option value="1956"  >1956</option>
                                    <option value="1957"  >1957</option>
                                    <option value="1958"  >1958</option>
                                    <option value="1959"  >1959</option>
                                    <option value="1960"  >1960</option>
                                    <option value="1961"  >1961</option>
                                    <option value="1962"  >1962</option>
                                    <option value="1963"  >1963</option>
                                    <option value="1964"  >1964</option>
                                    <option value="1965"  >1965</option>
                                    <option value="1966"  >1966</option>
                                    <option value="1967"  >1967</option>
                                    <option value="1968"  >1968</option>
                                    <option value="1969"  >1969</option>
                                    <option value="1970"  >1970</option>
                                    <option value="1971"  >1971</option>
                                    <option value="1972"  >1972</option>
                                    <option value="1973"  >1973</option>
                                    <option value="1974"  >1974</option>
                                    <option value="1975"  >1975</option>
                                    <option value="1976"  >1976</option>
                                    <option value="1977"  >1977</option>
                                    <option value="1978"  >1978</option>
                                    <option value="1979"  >1979</option>
                                    <option value="1980"  >1980</option>
                                    <option value="1981"  >1981</option>
                                    <option value="1982"  >1982</option>
                                    <option value="1983"  >1983</option>
                                    <option value="1984"  >1984</option>
                                    <option value="1985"  >1985</option>
                                    <option value="1986"  >1986</option>
                                    <option value="1987"  >1987</option>
                                    <option value="1988"  >1988</option>
                                    <option value="1989"  >1989</option>
                                    <option value="1990"  >1990</option>
                                    <option value="1991"  >1991</option>
                                    <option value="1992"  >1992</option>
                                    <option value="1993"  >1993</option>
                                    <option value="1994"  >1994</option>
                                    <option value="1995"  >1995</option>
                                    <option value="1996"  >1996</option>
                                    <option value="1997"  >1997</option>
                                    <option value="1998"  >1998</option>
                                    <option value="1999"  >1999</option>
                                    <option value="2000"  >2000</option>
                                    <option value="2001"  >2001</option>
                                    <option value="2002"  >2002</option>
                                    <option value="2003"  >2003</option>
                                    <option value="2004"  >2004</option>
                                    <option value="2005"  >2005</option>
                                    <option value="2006"  >2006</option>
                                    <option value="2007"  >2007</option>
                                    <option value="2008"  >2008</option>
                                    <option value="2009"  >2009</option>
                                    <option value="2010"  >2010</option>
                                    <option value="2011"  >2011</option>
                                    <option value="2012"  >2012</option>
                                    <option value="2013"  >2013</option>
                                    <option value="2014"  >2014</option>
                                    <option value="2015"  >2015</option>
                                    <option value="2016"  >2016</option>
                                    <option value="2017"  >2017</option>
                                </select>
                            </li>
                            <li id="timeSearchMonth" style="width: 100px;float: left;display: none">
                                <select id="month" class="searchType" style="width: 98px;">
                                    <option value="01"  >01</option>
                                    <option value="02"  >02</option>
                                    <option value="03"  >03</option>
                                    <option value="04"  >04</option>
                                    <option value="05"  >05</option>
                                    <option value="06"  >06</option>
                                    <option value="07"  >07</option>
                                    <option value="08"  >08</option>
                                    <option value="09"  >09</option>
                                    <option value="10"  >10</option>
                                    <option value="11"  >11</option>
                                    <option value="12"  >12</option>
                                </select>
                            </li>
                            <li id="timeSearchDay" style="width: 100px;float: left;display: none">
                                <select id="day" class="searchType" style="width: 98px;">
                                    <option value="01"  >01</option>
                                    <option value="02"  >02</option>
                                    <option value="03"  >03</option>
                                    <option value="04"  >04</option>
                                    <option value="05"  >05</option>
                                    <option value="06"  >06</option>
                                    <option value="07"  >07</option>
                                    <option value="08"  >08</option>
                                    <option value="09"  >09</option>
                                    <option value="10"  >10</option>
                                    <option value="11"  >11</option>
                                    <option value="12"  >12</option>
                                    <option value="13"  >13</option>
                                    <option value="14"  >14</option>
                                    <option value="15"  >15</option>
                                    <option value="16"  >16</option>
                                    <option value="17"  >17</option>
                                    <option value="18"  >18</option>
                                    <option value="19"  >19</option>
                                    <option value="20"  >20</option>
                                    <option value="21"  >21</option>
                                    <option value="22"  >22</option>
                                    <option value="23"  >23</option>
                                    <option value="24"  >24</option>
                                    <option value="25"  >25</option>
                                    <option value="26"  >26</option>
                                    <option value="27"  >27</option>
                                    <option value="28"  >28</option>
                                    <option value="29"  >29</option>
                                    <option value="30"  >30</option>
                                    <option value="31"  >31</option>
                                </select>
                            </li>
                            <li style="width: 260px;float: left;">
                                <div>
                                    <input type="text" placeholder="找不到？试试搜索" id="listSearch">
                                    <button type="button" class="tip-bottom" data-original-title="Search" style="margin-bottom: 10px;"><i class="icon-search icon-white"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="widget-content">
                        <div class="widget-content nopadding">
                            <table class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>订单简介</th>
                                    <th>状态</th>
                                    <th>条件</th>
                                </tr>
                                </thead>
                                <tbody id="allOrdersTbody">
                                <tr class="allOrdersTr">
                                    <td class="taskDesc"><i class="icon-info-sign"></i> 订单号 : 1 / 买方名 : zazalu / 订单时间 :
                                        2017.4.5 14:36:00
                                    </td>
                                    <td class="taskStatus"><span class="in-progress">支付中</span></td>
                                    <td class="taskOptions"><a class="tip-top" data-original-title="Update"><i
                                            class="icon-ok"></i></a> <a class="tip-top" data-original-title="Delete"><i
                                            class="icon-remove"></i></a></td>
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
<script src="js/jquery.min.js"></script>
<%--<script src="js/jquery.migrate.1.2.1.js"></script>--%>
<script src="js/jquery.ui.custom.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/matrix.js"></script>
<script src="js/shouyeAdsPicture.js"></script>
<script src="js/zazaluMusic.js"></script>
<script src="js/zazaluSearch.js"></script>
<script src="js/goodManageOrderBrowser.js"></script>
<script src="js/searchType.js"></script>
<%--<!--保证文件选择后显示选择图片名的js-->--%>
<%--<script src="js/jquery.uniform.js"></script>--%>
<%--<script src="js/matrix.form_common.js"></script>--%>
<%--下拉框--%>
<script src="js/select2.min.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $(".searchType").select2();
    });
</script>
</body>

</html>