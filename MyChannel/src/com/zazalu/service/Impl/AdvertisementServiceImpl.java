package com.zazalu.service.Impl;

import com.zazalu.dao.AdvertisementDao;
import com.zazalu.entity.Advertisement;
import com.zazalu.service.AdvertisementService;

import java.util.List;

/**
 * Created by zazalu on 4/14/17.
 */
public class AdvertisementServiceImpl implements AdvertisementService{

    private AdvertisementDao advertisementDao;
    public void setAdvertisementDao(AdvertisementDao advertisementDao) {
        this.advertisementDao = advertisementDao;
    }

    @Override
    public void addAdvertisement(Advertisement advertisement) {
        advertisementDao.save(advertisement);
    }

    @Override
    public List<Advertisement> getAdsList() {
        return advertisementDao.getAdsList();
    }

    @Override
    public void deleteAdsById(Integer adsId) {
        advertisementDao.deleteAdsById(adsId);
    }
}
