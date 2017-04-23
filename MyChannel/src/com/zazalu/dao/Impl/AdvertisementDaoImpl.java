package com.zazalu.dao.Impl;

import com.zazalu.dao.AdvertisementDao;
import com.zazalu.entity.Advertisement;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.orm.hibernate4.HibernateTemplate;

import java.util.List;

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

    @Override
    public List<Advertisement> getAdsList() {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Advertisement");
        sqlQuery.addEntity(Advertisement.class);
        List<Advertisement> advertisementList = sqlQuery.list();
        return advertisementList;
    }

    @Override
    public void deleteAdsById(Integer adsId) {
        Advertisement advertisement = hibernateTemplate.get(Advertisement.class,adsId);
        hibernateTemplate.delete(advertisement);
    }
}
