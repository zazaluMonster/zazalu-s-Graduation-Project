package com.zazalu.dao.Impl;

import com.zazalu.dao.OrdersDao;
import com.zazalu.entity.Orders;
import org.springframework.orm.hibernate4.HibernateTemplate;

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
}
