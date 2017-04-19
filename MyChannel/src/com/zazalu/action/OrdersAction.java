package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.Good;
import com.zazalu.entity.Orders;
import com.zazalu.entity.User;
import com.zazalu.service.OrdersService;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * Created by zazalu on 4/13/17.
 */
public class OrdersAction extends ActionSupport{
    //Spring注入
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    //	Spring注入Service
    private OrdersService ordersService;
    public void setOrdersService(OrdersService ordersService){
        this.ordersService = ordersService;
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
}
