package com.zazalu.dao.Impl;

import com.zazalu.dao.EvaluateDao;
import com.zazalu.entity.Evaluate;
import org.springframework.orm.hibernate4.HibernateTemplate;

/**
 * Created by zazalu on 4/14/17.
 */
public class EvaluateDaoImpl implements EvaluateDao{

    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Override
    public void save(Evaluate evaluate) {
        hibernateTemplate.save(evaluate);
    }
}
