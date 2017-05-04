package com.zazalu.service.Impl;

import com.zazalu.dao.FavoriteDao;
import com.zazalu.entity.Favorite;
import com.zazalu.service.FavoriteService;

import java.util.List;

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

    @Override
    public void deleteFavorite(Integer goodId, Integer userId) {
        favoriteDao.deleteFavorite(goodId,userId);
    }

    @Override
    public Favorite getFavorite(Integer userId, Integer goodId) {
        return favoriteDao.getFavorite(userId,goodId);
    }

    @Override
    public List<Favorite> getUserFavoriteList(Integer userId) {
        return favoriteDao.getUserFavoriteList(userId);
    }
}
