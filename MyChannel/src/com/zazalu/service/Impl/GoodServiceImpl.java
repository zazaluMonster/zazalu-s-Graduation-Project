package com.zazalu.service.Impl;

import com.zazalu.dao.GoodDao;
import com.zazalu.entity.Good;
import com.zazalu.service.GoodService;

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
}
