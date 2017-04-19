package com.zazalu.dao.Impl;

import com.zazalu.dao.TagDao;
import com.zazalu.entity.Tag;
import org.springframework.orm.hibernate4.HibernateTemplate;

/**
 * Created by zazalu on 4/14/17.
 */
public class TagDaoImpl implements TagDao{

    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Override
    public void save(Tag tag) {
        hibernateTemplate.save(tag);
    }
}
