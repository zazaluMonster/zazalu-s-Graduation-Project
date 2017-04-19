package com.zazalu.service.Impl;

import com.zazalu.dao.FavoriteDao;
import com.zazalu.entity.Favorite;
import com.zazalu.service.FavoriteService;

/**
 * Created by zazalu on 4/13/17.
 */
public class FavoriteServiceImpl implements FavoriteService {


    private FavoriteDao favoriteDao;
    public void setFavoriteDao(FavoriteDao favoriteDao) {
        this.favoriteDao = favoriteDao;
    }

    @Override
    public void addFavorite(Favorite favorite) {
        favoriteDao.save(favorite);
    }
}
