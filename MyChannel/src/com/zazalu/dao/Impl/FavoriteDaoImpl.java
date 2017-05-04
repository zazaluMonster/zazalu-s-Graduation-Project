package com.zazalu.dao.Impl;

import com.zazalu.dao.FavoriteDao;
import com.zazalu.entity.Favorite;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.orm.hibernate4.HibernateTemplate;

import java.util.List;

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

    @Override
    public void deleteFavorite(Integer goodId, Integer userId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Favorite WHERE GoodId = '"+goodId+"' AND UserId = '"+userId+"'" );
        sqlQuery.addEntity(Favorite.class);
        Favorite favorite = (Favorite) sqlQuery.uniqueResult();
        hibernateTemplate.delete(favorite);
    }

    @Override
    public Favorite getFavorite(Integer userId, Integer goodId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Favorite WHERE GoodId = '"+goodId+"' AND UserId = '"+userId+"'" );
        sqlQuery.addEntity(Favorite.class);
        Favorite favorite = (Favorite) sqlQuery.uniqueResult();
        return favorite;
    }

    @Override
    public List<Favorite> getUserFavoriteList(Integer userId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Favorite WHERE UserId = '"+userId+"'" );
        sqlQuery.addEntity(Favorite.class);
        List<Favorite> favoriteList = sqlQuery.list();
        return favoriteList;
    }
}
