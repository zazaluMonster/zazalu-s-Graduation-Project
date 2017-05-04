package com.zazalu.dao;

import com.zazalu.entity.Orders;
import com.zazalu.entity.ShoppingCart;

import java.util.List;

/**
 * Created by zazalu on 4/13/17.
 */
public interface OrdersDao {
    void save(Orders orders);

    List<Orders> getUnPayOrdersList(Integer userId);

    List<Orders> getPayedOrdersList(Integer userId);

    Orders getOrderByOrderId(Integer orderId);

    void update(Orders order);

    void deleteOrderById(Integer orderId);

    void addNewShoppingCart(ShoppingCart shoppingCart);

    List<ShoppingCart> getShoppingCartList(Integer userId);

    void deleteShoppingCartById(Integer shoppingcartId);

    List<Orders> getAllOrders();

    void deleteShoppingCartByOrderId(Integer orderId);

    ShoppingCart getShoppingCart(Integer userId,Integer ordersId);

    List<Orders> getUnEvaluateOrdersList(Integer userId);

    List<Orders> getOrdersListByGoodId(Integer goodId);

    List<Orders> getOrdersListByYearMonth(String selectedYear,String month);
}
