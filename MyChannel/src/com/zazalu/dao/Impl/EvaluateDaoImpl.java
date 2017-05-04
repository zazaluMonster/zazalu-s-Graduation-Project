package com.zazalu.dao.Impl;

import com.zazalu.dao.EvaluateDao;
import com.zazalu.entity.Evaluate;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.orm.hibernate4.HibernateTemplate;

import java.math.BigInteger;
import java.util.List;

/**
 * Created by zazalu on 4/14/17.
 */
public class EvaluateDaoImpl implements EvaluateDao {

    private HibernateTemplate hibernateTemplate;

    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Override
    public void save(Evaluate evaluate) {
        hibernateTemplate.save(evaluate);
    }

    @Override
    public List<Evaluate> getEvaluateByOrderId(Integer orderId, Boolean isFatherEvaluate) {
        Session session = hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery = null;
        if (isFatherEvaluate) {
            sqlQuery = session.createSQLQuery("SELECT * FROM Evaluate WHERE OrdersId =  '" + orderId + "' AND FatherEvaluateId = '" + 0 + "'  Order by EvaluateTime");
        } else {
            sqlQuery = session.createSQLQuery("SELECT * FROM Evaluate WHERE OrdersId =  '" + orderId + "' AND FatherEvaluateId <> '" + 0 + "'  Order by EvaluateTime");
        }
        sqlQuery.addEntity(Evaluate.class);
        List<Evaluate> evaluateList = sqlQuery.list();
        return evaluateList;
    }

    @Override
    public List<Evaluate> getEvaluateByFatherEvaluateId(Integer fatherEvaluateId) {
        Session session = hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery = sqlQuery = session.createSQLQuery("SELECT * FROM Evaluate WHERE FatherEvaluateId = '" + fatherEvaluateId + "' Order by EvaluateTime");
        sqlQuery.addEntity(Evaluate.class);
        List<Evaluate> evaluateList = sqlQuery.list();
        return evaluateList;
    }

    @Override
    public Evaluate getEvaluateByEvaluateId(Integer evaluateId) {
        return hibernateTemplate.get(Evaluate.class, evaluateId);
    }

    @Override
    public Integer getEvaluateNumberByOrderId(Integer orderId) {
        Session session = hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery = null;
        sqlQuery = session.createSQLQuery("SELECT count(*) FROM Evaluate WHERE OrdersId =  '" + orderId + "'");
        BigInteger evaluateNumber = (BigInteger) sqlQuery.uniqueResult();
        return evaluateNumber.intValue();
    }
}
