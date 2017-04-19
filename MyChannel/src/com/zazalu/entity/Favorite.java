package com.zazalu.entity;

/**
 * Created by zazalu on 4/13/17.
 */
public class Favorite {
    private Integer FavoriteId;
    private User UserId;
    private Good GoodId;

    public Integer getFavoriteId() {
        return FavoriteId;
    }

    public void setFavoriteId(Integer favoriteId) {
        FavoriteId = favoriteId;
    }

    public User getUserId() {
        return UserId;
    }

    public void setUserId(User userId) {
        UserId = userId;
    }

    public Good getGoodId() {
        return GoodId;
    }

    public void setGoodId(Good goodId) {
        GoodId = goodId;
    }
}
