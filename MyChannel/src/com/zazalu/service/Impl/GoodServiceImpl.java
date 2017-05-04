package com.zazalu.service.Impl;

import com.zazalu.dao.GoodDao;
import com.zazalu.entity.Good;
import com.zazalu.service.GoodService;

import java.util.List;

/**
 * Created by zazalu on 4/13/17.
 */
public class GoodServiceImpl implements GoodService {

    private GoodDao goodDao;
    public void setGoodDao(GoodDao goodDao) {
        this.goodDao = goodDao;
    }

    @Override
    public void register(Good good) {
        goodDao.save(good);
    }

    @Override
    public Good getGoodByName(String goodName) {
        return goodDao.getGoodByName(goodName);
    }

    @Override
    public List<Good> getGoodList() {
        return goodDao.getGoodList();
    }

    @Override
    public List<Good> getGoodListByPageIndex(Integer pageIndex) {

        return goodDao.getGoodListByPageIndex(pageIndex);
    }

    @Override
    public void deleteGoodById(Integer goodId) {
        goodDao.deleteGoodById(goodId);
    }

    @Override
    public Good getGoodById(Integer goodId) {
        return goodDao.getGoodById(goodId);
    }

    @Override
    public Integer getGoodNumber() {
        return goodDao.getGoodNumber();
    }

    @Override
    public List<Good> getGoodListByGoodName(String goodName) {
        return goodDao.getGoodListByGoodName(goodName);
    }

    @Override
    public void updateGood(Good good) {
        goodDao.updateGood(good);
    }
}
