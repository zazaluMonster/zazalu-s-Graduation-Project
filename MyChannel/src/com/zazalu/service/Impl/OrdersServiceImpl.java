package com.zazalu.service.Impl;

import com.zazalu.dao.OrdersDao;
import com.zazalu.entity.Orders;
import com.zazalu.service.OrdersService;

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
}
