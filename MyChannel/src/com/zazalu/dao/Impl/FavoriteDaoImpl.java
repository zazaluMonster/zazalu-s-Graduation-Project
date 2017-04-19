package com.zazalu.dao.Impl;

import com.zazalu.dao.FavoriteDao;
import com.zazalu.entity.Favorite;
import org.springframework.orm.hibernate4.HibernateTemplate;

/**
 * Created by zazalu on 4/13/17.
 */
public class FavoriteDaoImpl implements FavoriteDao{


    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Override
    public void save(Favorite favorite) {
        hibernateTemplate.save(favorite);
    }
}
