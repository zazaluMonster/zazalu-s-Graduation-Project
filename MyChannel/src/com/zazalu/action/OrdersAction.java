package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.*;
import com.zazalu.service.FavoriteService;
import com.zazalu.service.GoodService;
import com.zazalu.service.OrdersService;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.*;

/**
 * Created by zazalu on 4/13/17.
 */
public class OrdersAction extends ActionSupport{
    //Spring注入
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    //Spring注入
    private GoodService goodService;
    public void setGoodService(GoodService goodService) {
        this.goodService = goodService;
    }

    //	Spring注入Service
    private OrdersService ordersService;
    public void setOrdersService(OrdersService ordersService){
        this.ordersService = ordersService;
    }

    //Spring注入
    private FavoriteService favoriteService;
    public void setFavoriteService(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    //  业务功能实现
    public String newOrder(){
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        Integer userId = Integer.parseInt(httpServletRequest.getParameter("UserId"));
        Integer goodId = Integer.parseInt(httpServletRequest.getParameter("GoodId"));
        Integer goodNumber = Integer.parseInt(httpServletRequest.getParameter("GoodNumber"));
        String goodNetWeight = httpServletRequest.getParameter("GoodNetWeight");
        String goodColor = httpServletRequest.getParameter("GoodColor");
        Integer isPay = Integer.parseInt(httpServletRequest.getParameter("isPay"));
        Integer isUnSubScribe = Integer.parseInt(httpServletRequest.getParameter("isUnSubscribe"));
        Date orderTime = new Date();

        User user = hibernateTemplate.get(User.class,userId);
        Good good = hibernateTemplate.get(Good.class,goodId);

        Orders orders = new Orders();
        orders.setGoodId(good);
        orders.setUserId(user);
        orders.setGoodNumber(goodNumber);
        orders.setGoodNetWeight(goodNetWeight);
        orders.setGoodColor(goodColor);
        orders.setIsPay(isPay);
        orders.setIsUnSubscribe(isUnSubScribe);
        orders.setOrderTime(orderTime);

        ordersService.newOrder(orders);
        return "success";
    }

    public String bornNewOrder() throws IOException {
        System.out.println("start to born new order");
        Orders orders =  new Orders();
        //获取订单信息
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        User user = (User) httpSession.getAttribute("user");
        Integer goodId = Integer.valueOf(httpServletRequest.getParameter("GoodId"));
        Good good = goodService.getGoodById(goodId);
        Integer goodNumber = Integer.valueOf(httpServletRequest.getParameter("GoodBuyQuantity"));
        //减少库存
        Integer goodOldStock = good.getGoodStock();
        if(goodOldStock > goodNumber){
            Integer goodNewStock = goodOldStock - goodNumber;
            good.setGoodStock(goodNewStock);
            goodService.updateGood(good);
        }else {
            //说明库存不足
            httpServletResponse.getWriter().write("goodStock is not enough");
            return null;
        }
        String goodNetWeight = httpServletRequest.getParameter("GoodNetWeight");
        String goodColor = httpServletRequest.getParameter("GoodColor");
        Integer isPay = 0;
        Integer isUnSubscribe = 0;
        Integer isFaHuo = 0;
        Integer isEvaluate = 0;
        Date orderTime = new Date();
        orders.setUserId(user);
        orders.setGoodId(good);
        orders.setGoodNumber(goodNumber);
        orders.setGoodNetWeight(goodNetWeight);
        orders.setGoodColor(goodColor);
        orders.setIsPay(isPay);
        orders.setIsUnSubscribe(isUnSubscribe);
        orders.setIsEvaluate(isEvaluate);
        orders.setIsFaHuo(isFaHuo);
        orders.setOrderTime(orderTime);
        ordersService.newOrder(orders);
        System.out.println("new unPayOrder success!");
        System.out.println(orders.getOrdersId());
        httpServletResponse.getWriter().write(String.valueOf(orders.getOrdersId()));
        return null;
    }

    public String payOrders(){
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        Integer ordersId = Integer.valueOf(httpServletRequest.getParameter("OrdersId"));
        Orders order = ordersService.getOrderByOrderId(ordersId);
        order.setIsPay(1);
        ordersService.updateOrder(order);
        System.out.println("pay success!");
        return "payOrderSuccess";
    }

    public String getUnPayOrdersList(){
        System.out.println("start to getUnPayOrders");
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = ServletActionContext.getRequest().getSession();
        User user = (User) httpSession.getAttribute("user");
        //获取Order列表
        try {
            List<Orders> ordersList = ordersService.getUnPayOrdersList(user.getUserId());
            if (ordersList == null) {
                httpServletResponse.getWriter().write("no order");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"unPayOrdersList\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            for (Orders item : ordersList) {
                Integer goodId =item.getGoodId().getGoodId();
                Favorite favorite = favoriteService.getFavorite(user.getUserId(),goodId);
                String isLike = "";
                if(favorite == null){
                    isLike = "0";
                }else {
                    isLike = "1";
                }
                ShoppingCart shoppingCart = ordersService.getShoppingCart(user.getUserId(),item.getOrdersId());
                Integer shoppingCartId;
                if(shoppingCart != null){
                    shoppingCartId = shoppingCart.getShoppingCartId();
                }else {
                    shoppingCartId = 0;
                }
                //临时变量 储存了每个ads的Good
                String jsonObj = "        {\n" +
                        "            \"OrdersId\": " + item.getOrdersId() + ",\n" +
                        "            \"UserId\": \"" + item.getUserId().getUserId() + "\",\n" +
                        "            \"GoodId\": \"" + item.getGoodId().getGoodId() + "\",\n" +
                        "            \"shoppingCartId\": \"" + shoppingCartId + "\",\n" +
                        "            \"GoodNumber\": \"" + item.getGoodNumber() + "\",\n" +
                        "            \"GoodNetWeight\": \"" + item.getGoodNetWeight() + "\",\n" +
                        "            \"GoodColor\": \"" + item.getGoodColor() + "\",\n" +
                        "            \"GoodImg164\": \"" + item.getGoodId().getGoodImgUrl164() + "\",\n" +
                        "            \"GoodPrice\": \"" + item.getGoodId().getGoodPrice() + "\",\n" +
                        "            \"GoodDiscount\": \"" + item.getGoodId().getGoodDiscount() + "\",\n" +
                        "            \"GoodDescrible\": \"" + item.getGoodId().getGoodDescrible() + "\",\n" +
                        "            \"GoodName\": \"" + item.getGoodId().getGoodName() + "\",\n" +
                        "            \"isPay\": \"" + item.getIsPay() + "\",\n" +
                        "            \"isUnSubscribe\": \"" + item.getIsUnSubscribe() + "\",\n" +
                        "            \"OrderTime\": \"" + item.getOrderTime().toString() + "\",\n" +
                        "            \"isLike\": \"" + isLike + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public String getPayedOrdersList(){
        System.out.println("start to getPayedOrders");
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = ServletActionContext.getRequest().getSession();
        User user = (User) httpSession.getAttribute("user");
        //获取PayOrders列表
        try {
            List<Orders> ordersList = ordersService.getPayedOrdersList(user.getUserId());
            if (ordersList == null) {
                httpServletResponse.getWriter().write("no Orders in this user");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"payedOrdersList\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            for (Orders item : ordersList) {
                Integer goodId =item.getGoodId().getGoodId();
                Favorite favorite = favoriteService.getFavorite(user.getUserId(),goodId);
                String isLike = "";
                if(favorite == null){
                    isLike = "0";
                }else {
                    isLike = "1";
                }
                String jsonObj = "        {\n" +
                        "            \"OrdersId\": " + item.getOrdersId() + ",\n" +
                        "            \"UserId\": \"" + item.getUserId().getUserId() + "\",\n" +
                        "            \"GoodId\": \"" + item.getGoodId().getGoodId() + "\",\n" +
                        "            \"GoodName\": \"" + item.getGoodId().getGoodName() + "\",\n" +
                        "            \"GoodImg164\": \"" + item.getGoodId().getGoodImgUrl164() + "\",\n" +
                        "            \"GoodPrice\": \"" + item.getGoodId().getGoodPrice() + "\",\n" +
                        "            \"GoodDescrible\": \"" + item.getGoodId().getGoodDescrible() + "\",\n" +
                        "            \"GoodNumber\": \"" + item.getGoodNumber() + "\",\n" +
                        "            \"GoodNetWeight\": \"" + item.getGoodNetWeight() + "\",\n" +
                        "            \"GoodColor\": \"" + item.getGoodColor() + "\",\n" +
                        "            \"isPay\": \"" + item.getIsPay() + "\",\n" +
                        "            \"isUnSubscribe\": \"" + item.getIsUnSubscribe() + "\",\n" +
                        "            \"isLike\": \"" + isLike + "\",\n" +
                        "            \"OrderTime\": \"" + item.getOrderTime() + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    //这里是用户付完款以后 点击删除才会进入的方法 所以不需要考虑先删除购物车
    public String deleteOrder() throws IOException {
        System.out.println("start to delete Order!");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        Integer orderId = Integer.valueOf(httpServletRequest.getParameter("OrderId"));
        //增加库存
        Orders order = ordersService.getOrderByOrderId(orderId);
        Good good = order.getGoodId();
        Integer buyNumber = order.getGoodNumber();
        Integer goodOldStock = good.getGoodStock();
        good.setGoodStock(goodOldStock + buyNumber);
        goodService.updateGood(good);

        ordersService.deleteOrderById(orderId);
        httpServletResponse.getWriter().write("delete order success");
        return null;
    }

    //这是在商铺管理中要删除的订单 所以需要考虑此订单的一些关联表中的数据 要先删除关联表中此id的订单 最后在把订单表中的此order删除
    public String cancleOrder() throws IOException {
        System.out.println("start to cancle orders");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        Integer orderId = Integer.valueOf(httpServletRequest.getParameter("orderId"));
        //增加库存
        Orders order = ordersService.getOrderByOrderId(orderId);
        Good good = order.getGoodId();
        Integer buyNumber = order.getGoodNumber();
        Integer goodOldStock = good.getGoodStock();
        good.setGoodStock(goodOldStock + buyNumber);
        goodService.updateGood(good);

        //删除购物车中和此orderId有关的订单
        ordersService.deleteShoppingCartByOrderId(orderId);
        //然后再删除订单表中的此订单
        ordersService.deleteOrderById(orderId);
        httpServletResponse.getWriter().write("cancle order success!");
        return null;
    }

    public String addShoppingCart() throws IOException {
        System.out.println("start to addShoppingCart");
        ShoppingCart shoppingCart = new ShoppingCart();
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        Integer orderId = Integer.valueOf(httpServletRequest.getParameter("OrderId"));
        User currentUser = (User) httpSession.getAttribute("user");
        shoppingCart.setOrdersId(ordersService.getOrderByOrderId(orderId));
        shoppingCart.setUserId(currentUser);
        ordersService.addNewShoppingCart(shoppingCart);
        httpServletResponse.getWriter().write("add new shopping cart success");
        return null;
    }


    public String getUserShoppingCartList(){
        System.out.println("start to get user ShoppingCartList");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        User user = (User) httpSession.getAttribute("user");
        //获取shoppingcart列表
        try {
            List<ShoppingCart> shoppingCartList = ordersService.getShoppingCartList(user.getUserId());
            if (shoppingCartList == null) {
                httpServletResponse.getWriter().write("no shoppingcart in this user");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"shoppingcartList\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            for (ShoppingCart item : shoppingCartList) {
                Integer goodId =item.getOrdersId().getGoodId().getGoodId();
                Orders orders = item.getOrdersId();
                Good good = orders.getGoodId();
                Favorite favorite = favoriteService.getFavorite(user.getUserId(),goodId);
                String isLike = "";
                if(favorite == null){
                    isLike = "0";
                }else {
                    isLike = "1";
                }
                String jsonObj = "        {\n" +
                        "            \"OrdersId\": " + orders.getOrdersId() + ",\n" +
                        "            \"shoppingcartId\": " + item.getShoppingCartId() + ",\n" +
                        "            \"UserId\": \"" + item.getUserId().getUserId() + "\",\n" +
                        "            \"GoodId\": \"" + good.getGoodId() + "\",\n" +
                        "            \"GoodName\": \"" + good.getGoodName() + "\",\n" +
                        "            \"GoodImg164\": \"" + good.getGoodImgUrl164() + "\",\n" +
                        "            \"GoodPrice\": \"" + good.getGoodPrice() + "\",\n" +
                        "            \"GoodDescrible\": \"" + good.getGoodDescrible() + "\",\n" +
                        "            \"GoodNumber\": \"" + orders.getGoodNumber() + "\",\n" +
                        "            \"GoodNetWeight\": \"" + orders.getGoodNetWeight() + "\",\n" +
                        "            \"GoodColor\": \"" + orders.getGoodColor() + "\",\n" +
                        "            \"GoodDiscount\": \"" + good.getGoodDiscount() + "\",\n" +
                        "            \"isPay\": \"" + orders.getIsPay() + "\",\n" +
                        "            \"isUnSubscribe\": \"" + orders.getIsUnSubscribe() + "\",\n" +
                        "            \"isLike\": \"" + isLike + "\",\n" +
                        "            \"OrderTime\": \"" + orders.getOrderTime().toString() + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public String deleteShoppingCart() throws IOException {
        System.out.println("start to delete shoppingcart");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        Integer shoppingcartId = Integer.valueOf(httpServletRequest.getParameter("ShoppingcartId"));
        String deleteOrderTo = httpServletRequest.getParameter("deleteOrderTo");
        ordersService.deleteShoppingCartById(shoppingcartId);
        if (deleteOrderTo.equals("yes")){
            Integer orderId = Integer.valueOf(httpServletRequest.getParameter("orderId"));
            ordersService.deleteOrderById(orderId);
        }
        httpServletResponse.getWriter().write("delete shoppingcart suceess");
        return null;
    }

    public String unSubscribeOrder() throws IOException {
        System.out.println("start to unSubscribeOrder");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        Integer orderId = Integer.valueOf(httpServletRequest.getParameter("orderId"));
        //增加库存
        Orders order = ordersService.getOrderByOrderId(orderId);
        Good good = order.getGoodId();
        Integer buyNumber = order.getGoodNumber();
        Integer goodOldStock = good.getGoodStock();
        good.setGoodStock(goodOldStock + buyNumber);
        goodService.updateGood(good);
        
        order.setIsUnSubscribe(1);
        ordersService.updateOrder(order);
        System.out.println("unSubscribe Order success!");
        httpServletResponse.getWriter().write("unSubscribe Order success!");
        return null;
    }

    public String getAllOrders(){
        System.out.println("start to get all Orders");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        //orderslist
        try {
            List<Orders> ordersList = ordersService.getAllOrders();
            if (ordersList == null) {
                httpServletResponse.getWriter().write("no orders in mychannel");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"allOrdersList\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            Good good;
            for (Orders item : ordersList) {
                good = item.getGoodId();
                String jsonObj = "        {\n" +
                        "            \"OrdersId\": " + item.getOrdersId() + ",\n" +
                        "            \"UserId\": " + item.getUserId().getUserId() + ",\n" +
                        "            \"GoodId\": \"" + good.getGoodId() + "\",\n" +
                        "            \"GoodName\": \"" + good.getGoodName() + "\",\n" +
                        "            \"UserName\": \"" + item.getUserId().getUserName() + "\",\n" +
                        "            \"GoodImg164\": \"" + good.getGoodImgUrl164() + "\",\n" +
                        "            \"GoodPrice\": \"" + good.getGoodPrice() + "\",\n" +
                        "            \"GoodDescrible\": \"" + good.getGoodDescrible() + "\",\n" +
                        "            \"GoodNumber\": \"" + item.getGoodNumber() + "\",\n" +
                        "            \"GoodNetWeight\": \"" + item.getGoodNetWeight() + "\",\n" +
                        "            \"GoodColor\": \"" + item.getGoodColor() + "\",\n" +
                        "            \"GoodDiscount\": \"" + good.getGoodDiscount() + "\",\n" +
                        "            \"isPay\": \"" + item.getIsPay() + "\",\n" +
                        "            \"isUnSubscribe\": \"" + item.getIsUnSubscribe() + "\",\n" +
                        "            \"isFaHuo\": \"" + item.getIsFaHuo() + "\",\n" +
                        "            \"isEvaluate\": \"" + item.getIsEvaluate() + "\",\n" +
                        "            \"OrderTime\": \"" + item.getOrderTime().toString() + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public String orderFaHuo() throws IOException {
        System.out.println("start to fahuo");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        Integer orderId = Integer.valueOf(httpServletRequest.getParameter("orderId"));
        Orders orders = ordersService.getOrderByOrderId(orderId);
        orders.setIsFaHuo(1);
        ordersService.updateOrder(orders);
        httpServletResponse.getWriter().write("fahuo success");
        return null;
    }

    public String toOrderPage() throws IOException {
        System.out.println("start to turn to order page");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        Integer orderId = Integer.valueOf(httpServletRequest.getParameter("orderId"));
        Orders orders = ordersService.getOrderByOrderId(orderId);
        httpSession.setAttribute("order",orders);
        httpServletResponse.getWriter().write("save order to session success");
        return null;
    }

    public String getUnEvaluateOrdersList(){
        System.out.println("start to get unEvaluate OrdersList");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        User user = (User) httpSession.getAttribute("user");
        Integer userId = user.getUserId();
        //orderslist
        try {
            List<Orders> unEvaluateOrdersList = ordersService.getUnEvaluateOrdersList(userId);
            if (unEvaluateOrdersList == null) {
                httpServletResponse.getWriter().write("no orders in mychannel");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"unEvaluateOrdersList\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            Good good;
            for (Orders item : unEvaluateOrdersList) {
                good = item.getGoodId();
                String jsonObj = "        {\n" +
                        "            \"OrdersId\": \"" + item.getOrdersId() + "\",\n" +
                        "            \"UserId\": \"" + item.getUserId().getUserId() + "\",\n" +
                        "            \"GoodId\": \"" + good.getGoodId() + "\",\n" +
                        "            \"GoodName\": \"" + good.getGoodName() + "\",\n" +
                        "            \"UserName\": \"" + item.getUserId().getUserName() + "\",\n" +
                        "            \"GoodImg164\": \"" + good.getGoodImgUrl164() + "\",\n" +
                        "            \"GoodPrice\": \"" + good.getGoodPrice() + "\",\n" +
                        "            \"GoodDescrible\": \"" + good.getGoodDescrible() + "\",\n" +
                        "            \"GoodNumber\": \"" + item.getGoodNumber() + "\",\n" +
                        "            \"GoodNetWeight\": \"" + item.getGoodNetWeight() + "\",\n" +
                        "            \"GoodColor\": \"" + item.getGoodColor() + "\",\n" +
                        "            \"GoodDiscount\": \"" + good.getGoodDiscount() + "\",\n" +
                        "            \"isPay\": \"" + item.getIsPay() + "\",\n" +
                        "            \"isUnSubscribe\": \"" + item.getIsUnSubscribe() + "\",\n" +
                        "            \"isFaHuo\": \"" + item.getIsFaHuo() + "\",\n" +
                        "            \"isEvaluate\": \"" + item.getIsEvaluate() + "\",\n" +
                        "            \"OrderTime\": \"" + item.getOrderTime().toString() + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public String getYearMoney(){
        System.out.println("start to get Year Money");
        try {
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        String selectedYear = httpServletRequest.getParameter("selectedYear");
        HashMap<String,String> hashMap = new LinkedHashMap<>();
            //获取被选中年份的所有订单
            for (int i = 1;i < 13; i++){
                String month;
                double sumPrice = 0;
                if(i < 10){
                    month = "0" + i;
                }else {
                    month = String.valueOf(i);
                }
                List<Orders> ordersListByYearMonth = ordersService.getOrdersListByYearMonth(selectedYear,month);
                if(ordersListByYearMonth.size() != 0){
                    for(Orders item:ordersListByYearMonth){
                        int buyNumber = item.getGoodNumber();
                        int goodPrice = item.getGoodId().getGoodPrice();
                        int goodDiscount = item.getGoodId().getGoodDiscount();
                        sumPrice = sumPrice + buyNumber*goodPrice*goodDiscount*0.1;
                    }
                    hashMap.put(month, String.valueOf(sumPrice));
                }else {
                    hashMap.put(month, "0");
                }
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"selectedYear\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            Iterator iter = hashMap.entrySet().iterator();
            while (iter.hasNext()) {
                Map.Entry entry = (Map.Entry) iter.next();
                Object key = entry.getKey();
                Object val = entry.getValue();
                String jsonObj = "        {\n" +
                        "            \"month\": \"" + key + "\",\n" +
                        "            \"money\": \"" + val + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

}
