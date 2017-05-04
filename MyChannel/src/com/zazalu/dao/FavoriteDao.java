package com.zazalu.dao;

import com.zazalu.entity.Favorite;

import java.util.List;

/**
 * Created by zazalu on 4/13/17.
 */
public interface FavoriteDao {
    void save(Favorite favorite);

    void deleteFavorite(Integer goodId,Integer userId);

    Favorite getFavorite(Integer userId,Integer goodId);

    List<Favorite> getUserFavoriteList(Integer userId);
}
