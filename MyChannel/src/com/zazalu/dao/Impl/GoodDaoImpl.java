package com.zazalu.dao.Impl;

import com.zazalu.dao.GoodDao;
import com.zazalu.entity.Good;
import org.springframework.orm.hibernate4.HibernateTemplate;

/**
 * Created by zazalu on 4/13/17.
 */
public class GoodDaoImpl implements GoodDao{

    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Override
    public void save(Good good) {
        hibernateTemplate.save(good);
    }
}
