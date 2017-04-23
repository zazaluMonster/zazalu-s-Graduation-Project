package com.zazalu.dao.Impl;

import com.zazalu.dao.GoodDao;
import com.zazalu.entity.Address;
import com.zazalu.entity.Good;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.orm.hibernate4.HibernateTemplate;

import java.math.BigInteger;
import java.util.List;

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

    @Override
    public Good getGoodByName(String goodName) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        ///* 10:27:29 zazalu MyChannel */ SELECT * FROM `Good` WHERE `GoodName` = 'chan1' LIMIT 0,1000;
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Good WHERE GoodName =  '" + goodName + "'");
        sqlQuery.addEntity(Good.class);
        List<Good> goodList = sqlQuery.list();
        return goodList.get(0);
    }

    @Override
    public List<Good> getGoodList() {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Good ");
        sqlQuery.addEntity(Good.class);
        List<Good> goodList = sqlQuery.list();
        return goodList;
    }

    @Override
    public List<Good> getGoodListByPageIndex(Integer pageIndex) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        int begin = (pageIndex-1)*12;
        int end = pageIndex*12;
        SQLQuery sqlQuery =  session.createSQLQuery("select * from Good limit "+begin+","+end+";");
        sqlQuery.addEntity(Good.class);
        List<Good> goodList = sqlQuery.list();
        return goodList;
    }

    @Override
    public void deleteGoodById(Integer goodId) {
        Good good = hibernateTemplate.get(Good.class,goodId);
        hibernateTemplate.delete(good);
    }

    @Override
    public Good getGoodById(Integer goodId) {
        Good good = hibernateTemplate.get(Good.class,goodId);
        return good;
    }

    @Override
    public Integer getGoodNumber() {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("select count(*) from Good");
        BigInteger integer = (BigInteger) sqlQuery.uniqueResult();
        Integer integer1 = integer.intValue();
        System.out.println("dddd" + integer1);
        return integer1;
    }
}
