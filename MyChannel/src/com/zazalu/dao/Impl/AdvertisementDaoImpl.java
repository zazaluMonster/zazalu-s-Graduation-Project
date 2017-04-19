package com.zazalu.dao.Impl;

import com.zazalu.dao.AdvertisementDao;
import com.zazalu.entity.Advertisement;
import org.springframework.orm.hibernate4.HibernateTemplate;

/**
 * Created by zazalu on 4/14/17.
 */
public class AdvertisementDaoImpl implements AdvertisementDao{
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }
    @Override
    public void save(Advertisement advertisement) {
        hibernateTemplate.save(advertisement);
    }
}
