package com.zazalu.service.Impl;

import com.zazalu.dao.OrdersDao;
import com.zazalu.entity.Orders;
import com.zazalu.entity.ShoppingCart;
import com.zazalu.service.OrdersService;

import java.util.List;

/**
 * Created by zazalu on 4/13/17.
 */
public class OrdersServiceImpl implements OrdersService {

    private OrdersDao ordersDao;
    public void setOrdersDao(OrdersDao ordersDao) {
        this.ordersDao = ordersDao;
    }

    @Override
    public void newOrder(Orders orders) {
        ordersDao.save(orders);
    }

    @Override
    public List<Orders> getUnPayOrdersList(Integer userId) {
        return ordersDao.getUnPayOrdersList(userId);
    }

    @Override
    public List<Orders> getPayedOrdersList(Integer userId) {
        return ordersDao.getPayedOrdersList(userId);
    }

    @Override
    public Orders getOrderByOrderId(Integer orderId) {
        return ordersDao.getOrderByOrderId(orderId);
    }

    @Override
    public void updateOrder(Orders order) {
        ordersDao.update(order);
    }

    @Override
    public void deleteOrderById(Integer orderId) {
        ordersDao.deleteOrderById(orderId);
    }

    @Override
    public void addNewShoppingCart(ShoppingCart shoppingCart) {
        ordersDao.addNewShoppingCart(shoppingCart);
    }

    @Override
    public List<ShoppingCart> getShoppingCartList(Integer userId) {
        return ordersDao.getShoppingCartList(userId);
    }

    @Override
    public void deleteShoppingCartById(Integer shoppingcartId) {
        ordersDao.deleteShoppingCartById(shoppingcartId);
    }

    @Override
    public List<Orders> getAllOrders() {
        return ordersDao.getAllOrders();
    }

    @Override
    public void deleteShoppingCartByOrderId(Integer orderId) {
        ordersDao.deleteShoppingCartByOrderId(orderId);
    }

    @Override
    public ShoppingCart getShoppingCart(Integer userId, Integer ordersId) {
        return  ordersDao.getShoppingCart(userId,ordersId);
    }

    @Override
    public List<Orders> getUnEvaluateOrdersList(Integer userId) {
        return ordersDao.getUnEvaluateOrdersList(userId);

    }

    @Override
    public List<Orders> getOrdersListByGoodId(Integer goodId) {
        return ordersDao.getOrdersListByGoodId(goodId);
    }

    @Override
    public List<Orders> getOrdersListByYearMonth(String selectedYaer, String month) {
        return ordersDao.getOrdersListByYearMonth(selectedYaer,month);
    }

    @Override
    public void deleteShoppingCartByUserId(Integer userId) {
        ordersDao.deleteShoppingCartByUserId(userId);
    }

    @Override
    public List<Orders> getOrdersListByTime(String time) {
        return ordersDao.getOrdersListByTime(time);
    }

    @Override
    public List<Orders> getOrdersListByUserId(Integer userId) {
        return ordersDao.getOrdersListByUserId(userId);
    }
}
