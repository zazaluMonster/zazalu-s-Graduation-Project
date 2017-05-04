package com.zazalu.dao.Impl;

import com.zazalu.dao.OrdersDao;
import com.zazalu.entity.Good;
import com.zazalu.entity.Orders;
import com.zazalu.entity.ShoppingCart;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.orm.hibernate4.HibernateTemplate;

import java.util.List;

/**
 * Created by zazalu on 4/13/17.
 */
public class OrdersDaoImpl implements OrdersDao {

    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Override
    public void save(Orders orders) {
        hibernateTemplate.save(orders);
    }

    @Override
    public List<Orders> getUnPayOrdersList(Integer userId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Orders WHERE UserId =  '" + userId + "' AND isPay = '0' AND isUnSubscribe = '0'");
        sqlQuery.addEntity(Orders.class);
        List<Orders> ordersList = sqlQuery.list();
        return ordersList;
    }

    @Override
    public List<Orders> getPayedOrdersList(Integer userId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Orders WHERE UserId =  '" + userId + "' AND isPay = '1' AND isUnSubscribe = '0' AND isFaHuo = '0'");
        sqlQuery.addEntity(Orders.class);
        List<Orders> ordersList = sqlQuery.list();
        return ordersList;
    }

    @Override
    public Orders getOrderByOrderId(Integer orderId) {
         return hibernateTemplate.get(Orders.class,orderId);
    }

    @Override
    public void update(Orders order) {
        hibernateTemplate.update(order);
    }

    @Override
    public void deleteOrderById(Integer orderId) {
        Orders order = hibernateTemplate.get(Orders.class,orderId);
        hibernateTemplate.delete(order);
    }

    @Override
    public void addNewShoppingCart(ShoppingCart shoppingCart) {
        hibernateTemplate.save(shoppingCart);
    }

    @Override
    public List<ShoppingCart> getShoppingCartList(Integer userId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM ShoppingCart WHERE UserId =  '" + userId + "'");
        sqlQuery.addEntity(ShoppingCart.class);
        List<ShoppingCart> shoppingCartList = sqlQuery.list();
        return shoppingCartList;
    }

    @Override
    public void deleteShoppingCartById(Integer shoppingcartId) {
        ShoppingCart shoppingCart = hibernateTemplate.get(ShoppingCart.class,shoppingcartId);
        hibernateTemplate.delete(shoppingCart);
    }

    @Override
    public List<Orders> getAllOrders() {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Orders");
        sqlQuery.addEntity(Orders.class);
        List<Orders> ordersList = sqlQuery.list();
        return ordersList;
    }

    @Override
    public void deleteShoppingCartByOrderId(Integer orderId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM ShoppingCart WHERE OrdersId =  '" + orderId + "'");
        sqlQuery.addEntity(ShoppingCart.class);
        List<ShoppingCart> shoppingCartList = sqlQuery.list();
        for (ShoppingCart sc :
                shoppingCartList) {
            hibernateTemplate.delete(sc);
        }
    }

    @Override
    public ShoppingCart getShoppingCart(Integer userId, Integer ordersId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM ShoppingCart WHERE UserId =  '" + userId + "' AND OrdersId = '" +ordersId+"'");
        sqlQuery.addEntity(ShoppingCart.class);
        ShoppingCart shoppingCart = (ShoppingCart) sqlQuery.uniqueResult();
        return  shoppingCart;
    }

    @Override
    public List<Orders> getUnEvaluateOrdersList(Integer userId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Orders WHERE UserId =  '" + userId + "' AND isPay = '1' AND isUnSubscribe = '0' AND isFaHuo = '1' AND isEvaluate = '0'");
        sqlQuery.addEntity(Orders.class);
        List<Orders> ordersList = sqlQuery.list();
        return ordersList;
    }

    @Override
    public List<Orders> getOrdersListByGoodId(Integer goodId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Orders WHERE GoodId =  '" + goodId + "' AND isPay = '1' AND isEvaluate = '1'");
        sqlQuery.addEntity(Orders.class);
        List<Orders> ordersList = sqlQuery.list();
        return ordersList;
    }

    @Override
    public List<Orders> getOrdersListByYearMonth(String selectedYear, String month) {
        String yearMonth = selectedYear+"-"+month;
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Orders WHERE OrderTime LIKE '"+yearMonth+"%'");
        sqlQuery.addEntity(Orders.class);
        List<Orders> ordersList = sqlQuery.list();
        return ordersList;
    }
}
