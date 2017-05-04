package com.zazalu.dao;

import com.zazalu.entity.Good;

import java.util.List;

/**
 * Created by zazalu on 4/13/17.
 */
public interface GoodDao {
    void save(Good good);

    Good getGoodByName(String goodName);

    List<Good> getGoodList();

    List<Good> getGoodListByPageIndex(Integer pageIndex);

    void deleteGoodById(Integer goodId);

    Good getGoodById(Integer goodId);

    Integer getGoodNumber();

    List<Good> getGoodListByGoodName(String goodName);

    void updateGood(Good good);
}
