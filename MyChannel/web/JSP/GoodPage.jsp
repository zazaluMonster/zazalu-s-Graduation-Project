<%@ page import="com.zazalu.entity.Good" %>
<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">

<%
    Good good = (Good) session.getAttribute("good");
    String goodNetWeight = good.getGoodNetWeight();
    String[] goodNetWeightArr = goodNetWeight.split("&");
    session.setAttribute("goodNetWeightArr",goodNetWeightArr);

    String goodColor = good.getGoodColor();
    String[] goodColorArr = goodColor.split("&");
    session.setAttribute("goodColor",goodColorArr);
    String textDecoration;
    if (good.getGoodDiscount() <10){
        textDecoration = "text-decoration: line-through;";
    }else {
        textDecoration = "text-decoration: none;";
    }
    session.setAttribute("textDecoration",textDecoration);
%>

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
  <link rel="stylesheet" href="css/userPageCss.css" />
  <link rel="stylesheet" href="css/goodsPageCss.css" />
  <link rel="stylesheet" href="css/replydowndiv.css" />
  <link rel="stylesheet" href="css/goodbuydiv.css" />
  <link rel="stylesheet" href="css/select2.min.css" />
  <link rel="stylesheet" href="css/foot.css" />
  <link rel="stylesheet" href="css/zazaluhead.css" />
  <!--头像裁剪的依赖css-->
  <link href="css/cropper.css" rel="stylesheet">

  <link href="font-awesome/css/font-awesome.css" rel="stylesheet" />
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
    <input type="text" placeholder="Search here..." id="headSearch" />
    <button id="topSearchButton" type="submit" class="tip-bottom" title="Search"><i class="icon-search icon-white"></i></button>
  </div>
  <!--close-top-serch-->

  <!--商品展示页-->
  <div id="goodsInfomationDiv">
    <!--start leftDiv-->
    <div id="goodsInformationLeftDiv">
      <div id="goodsInformationImgDiv" style="cursor: pointer">
        <div id="goodsInformationImgBox">
          <img src="${sessionScope.good.goodImgUrl430}">
        </div>
      </div>
      <div class="goodsInformationImgSmallBox">
        <img src="${sessionScope.good.goodImgUrl430}">
      </div>
      <div class="goodsInformationImgSmallBox">
        <img src="${sessionScope.good.goodImgUrl430}">
      </div>
      <div class="goodsInformationImgSmallBox">
        <img src="${sessionScope.good.goodImgUrl430}">
      </div>
      <div class="goodsInformationImgSmallBox">
        <img src="${sessionScope.good.goodImgUrl430}">
      </div>

      <div id="goodsInfomationFavorites">
        <div class="heart"></div>
        <span>收藏商品</span>
      </div>
    </div>
    <!--end leftDIv-->
    <!--start middle Div-->
    <div id="goodsInformationMiddleDiv">
      <!--宝贝详情div-->
      <div id="goodsInfomationMiddleDiv-first">
        <div id="goodsInformationMiddleDiv-first-Head">宝贝详情</div>
      </div>
      <!--评论div-->
      <div id="goodsInfomationMiddleDiv-second">
        <div id="goodsInformationMiddleDiv-second-Head">累计评论
          <div id="leijipinglun1" class="goodsInformation-quantity">99+</div>
        </div>
      </div>
    </div>
    <!--end middle Div-->


    <!--start rightDiv-->
    <div id="goodsInformationRightDiv">

      <div id="goodsInformationRightDiv-first">
        <div class="goodsInformationTitle">
            ${sessionScope.good.goodName}
          <p class="goodsInformationSubTitle">${sessionScope.good.goodMessage}</p>
        </div>
      </div>

      <div id="goodsInformationRightDiv-second">
        <div class="goodsInformationPriceDiv">
          <div class="goodsInfomationPrice">
            价格: ¥<span class="goodsInfomationPriceSpan" style="${sessionScope.textDecoration}"> ${sessionScope.good.goodPrice}</span>
          </div>
            <c:if test="${sessionScope.good.goodDiscount < 10}">
            <div class="goodsInformationDiscount">
                促销价: ¥<span class="goodsInfomationDiscountSpan"> ${sessionScope.good.goodPrice * sessionScope.good.goodDiscount * 0.1}</span>
            </div>
            </c:if>
        </div>
      </div>

      <div id="goodsInformationRightDiv-third">
        <ul class="tm-ind-panel">
          <li class="tm-ind-item tm-ind-sellCount " data-label="月销量">
            <div class="tm-indcon"><span class="tm-label">库存</span><span class="tm-count">${sessionScope.good.goodStock}</span></div>
          </li>
          <li class="tm-ind-item tm-ind-reviewCount canClick tm-line3" id="J_ItemRates">
            <div class="tm-indcon"><span class="tm-label">累计评价</span><span id="leijipinglun2" class="tm-count">85466</span></div>
          </li>
          <li class="tm-ind-item tm-ind-emPointCount" data-spm="1000988">
            <div class="tm-indcon"><a href="//vip.tmall.com/vip/index.htm" target="_blank"><span class="tm-label">送Chanel积分</span><span class="tm-count">${sessionScope.good.goodPoint}</span></a></div>
          </li>
        </ul>
      </div>

      <div id="goodsInformationRightDiv-fourth">
        <div class="goodsInformationSelectStyleDiv">
          <div class="goodsInformationNetWeight" style="user-select: none;">
            <span style="font-size: 15px;margin-left: 15px;">净含量: </span>
            <ul style="list-style: none;margin-left: 52px;">
              <c:forEach items="${sessionScope.goodNetWeightArr}" var="gnw">
                  <li class="NetWeightLi">${gnw}</li>
              </c:forEach>
            </ul>
          </div>
          <div class="goodsInformationColor">
            <span style="font-size: 15px;margin-left: 15px;">颜色分类: </span>
            <ul style="list-style: none;margin-left: 52px;">
                <c:forEach items="${sessionScope.goodColor}" var="gc">
                    <li class="ColorLi" style="background-color: ${gc}"></li>
                </c:forEach>
            </ul>
          </div>
          <div class="goodsInformationBuyQuantityDiv">
            <span style="font-size: 15px;margin-left: 15px;">购买数量: </span>
            <div class="goodsInformationChangeQuantityDiv" style="margin-left: 60px;">
              <div class="goodsInformationBuyQuantity">1</div>
              <div class="goodsInformationBuyQuantityAdd">+</div>
              <div class="goodsInformationBuyQuantityReduce">-</div>
            </div>
          </div>
        </div>
      </div>

      <div class="goodsInformationRightDiv-fifth">
        <div>
          <ul class="quick-actions">
            <li id="addShoppingCartLi" class="bg_lo" style="margin-right: 61px;">
              <a id="addShoppingCartButton"> <i class="icon-shopping-cart"></i> <span id="addShoppingCartSpan">加 入 购 物 车</span></a>
            </li>
            <li class="bg_lo">
              <a id="buyNowButton"> <i class="icon-barcode"></i> 立 刻 购 买</a>
            </li>
          </ul>
        </div>
      </div>
      <!--隐藏的form表单-->
      <form id="goodBuyForm"  action="ordersAction_payOrders.action" method="post" >
        <input id="goodId" type="hidden" name="GoodId" value="${sessionScope.good.goodId}">
        <input id="goodName" type="hidden" name="GoodName" value="${sessionScope.good.goodName}">
        <input id="goodNetWeight" type="hidden" name="GoodNetWeight" value="">
        <input id="goodColor" type="hidden" name="GoodColor" value="">
        <input id="goodBuyQuantity" type="hidden" name="GoodBuyQuantity" value="">
          <input id="ordersId" type="hidden" name="OrdersId" value="">
      </form>
    </div>
    <!--end rightDiv-->


    <!--一开始隐藏的累计评论的RightDiv-->
    <div id="goodsEvaluateRightDiv" style="display: none">
      <ul class="goodsEvaluateUl" style="overflow: scroll;height: 534px;">
        <!--一个楼层的单例-->
        <li class="goodsEvaluateLi">
          <div class="goodsEvaluateliLeftDiv">
            <a>
              <img src="img/user/user1/personalInformationHeadImg60.png" style="float: left;margin: 12px;" />
            </a>
            <div class="goodsEvaluateUserName">zazalu</div>
            <div class="goodsEvaluateCreatedTime">2017.3.29 11:46:00</div>
            <div class="goodsEvaluateContent">這款是我去年的時候喜歡的 同事用過 一直很喜歡 這次買了果真沒失望 味道超級好聞 淡淡的清香 有三種味道的 剛噴出的味道比較濃 兩小時之後很好聞 超喜歡 物流也挺快的 剛好3.8到的算是送自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道
            </div>
            <div class="goodsEvaluateReplyButton">回复</div>
              <%--回复的图片显示div--%>
            <div class="goodsEvaluateContent">
              <ul class="goodsEvaluateImgUl">
                <li class="goodsEvaluateImgLi">
                  <img src="img/gallery/imgbox3.jpg" class="goodsEvaluateImg" />
                </li>
                <li class="goodsEvaluateImgLi">
                  <img src="img/gallery/imgbox4.jpg" class="goodsEvaluateImg" />
                </li>
                <li class="goodsEvaluateImgLi">
                  <img src="img/gallery/imgbox5.jpg" class="goodsEvaluateImg" />
                </li>
              </ul>
              <div class="goodsEvaluateImgViewDiv">
                <img style="width: 0%;padding-left: 12px;padding-bottom: 12px;display: none" />
              </div>
            </div>
            <!--回复楼层的ul -->
            <ul class="goodsEvaluateReplyUl">
              <li class="goodsEvaluateReplyLi">
                <div>
                  <a>
                    <img src="img/user/user1/personalInformationHeadImg60.png" style="float: left;margin: 12px;" />
                  </a>
                  <div class="goodsEvaluateUserName">zazalu</div>
                  <div class="goodsEvaluateCreatedTime">2017.3.29 11:46:00</div>
                  <div class="goodsEvaluateContent">這款是我去年的時候喜歡的 同事用過 一直很喜歡 這次買了果真沒失望 味道超級好聞 淡淡的清香 有三種味道的 剛噴出的味道比較濃 兩小時之後很好聞 超喜歡 物流也挺快的 剛好3.8到的算是送自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道
                  </div>
                  <%--回复楼层的回复图片--%>
                  <div class="goodsEvaluateContent">
                    <ul class="goodsEvaluateImgUl">
                      <li class="goodsEvaluateImgLi">
                        <img src="img/gallery/imgbox3.jpg" class="goodsEvaluateImg" />
                      </li>
                      <li class="goodsEvaluateImgLi">
                        <img src="img/gallery/imgbox4.jpg" class="goodsEvaluateImg" />
                      </li>
                      <li class="goodsEvaluateImgLi">
                        <img src="img/gallery/imgbox5.jpg" class="goodsEvaluateImg" />
                      </li>
                    </ul>
                    <div class="goodsEvaluateImgViewDiv">
                      <img style="width: 0%;padding-left: 12px;padding-bottom: 12px;display: none" />
                    </div>
                  </div>
                </div>
              </li>
              <li class="goodsEvaluateReplyLi">
                <div>
                  <a>
                    <img src="img/user/user1/personalInformationHeadImg60.png" style="float: left;margin: 12px;" />
                  </a>
                  <div class="goodsEvaluateUserName">zazalu</div>
                  <div class="goodsEvaluateCreatedTime">2017.3.29 11:46:00</div>
                  <div class="goodsEvaluateContent">這款是我去年的時候喜歡的 同事用過 一直很喜歡 這次買了果真沒失望 味道超級好聞 淡淡的清香 有三種味道的 剛噴出的味道比較濃 兩小時之後很好聞 超喜歡 物流也挺快的 剛好3.8到的算是送自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道
                  </div>
                  <div class="goodsEvaluateReplyButton">回复</div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <!--一个楼层结束-->
        <!--更多例子-->
        <li class="goodsEvaluateLi">
          <div class="goodsEvaluateliLeftDiv">
            <a>
              <img src="img/user/user1/personalInformationHeadImg60.png" style="float: left;margin: 12px;" />
            </a>
            <div class="goodsEvaluateUserName">zazalu</div>
            <div class="goodsEvaluateCreatedTime">2017.3.29 11:46:00</div>
            <div class="goodsEvaluateContent">這款是我去年的時候喜歡的 同事用過 一直很喜歡 這次買了果真沒失望 味道超級好聞 淡淡的清香 有三種味道的 剛噴出的味道比較濃 兩小時之後很好聞 超喜歡 物流也挺快的 剛好3.8到的算是送自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道自己的女王節禮物，下次用完了才看看別的味道
            </div>
            <div class="goodsEvaluateReplyButton">回复</div>
          </div>
        </li>
        <!--更多例子结束-->

      </ul>
    </div>
    <!--累积评论的RightDiv结束-->

  </div>


  <!--从下方弹出的回复Div-->
  <form id="goodsEvaluateReplyForm" method="POST" enctype="multipart/form-data">
    <div class="goodsEvaluateReplyDownDiv">
      <div class="goodsEvaluateReplyDownDiv-first"><span id="goodsEvaluateReplyDownDiv-first-span">回复: zazalu</span> <a id="goodsEvaluateReplyDownDiv-first-a2" href="javascript:">关闭</a>
        <a id="goodsEvaluateReplyDownDiv-first-a1" href="javascript:">发送</a>
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
    <div id="footer" class="span12"> 2013 &copy; Matrix Admin. Brought to you by <a href="http://themedesigner.in/">Themedesigner.in</a></div>
  </div>
  <!--end-Footer-part-->
  <script src="js/jquery.js"></script>
  <!--<script src="js/jquery.min.js"></script>-->
  <script src="js/jquery.ui.custom.js"></script>
  <script src="js/jquery.easing.1.3.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/matrix.js"></script>
  <script src="js/changeMinWidth.js"></script>
  <script src="js/zazaluMusic.js"></script>
  <script src="js/zazaluSearch.js"></script>
  <script src="js/goodsPageJs.js"></script>
  <script src="js/replydowndiv.js"></script>
  <script src="js/goodBuy.js"></script>
</body>

</html>