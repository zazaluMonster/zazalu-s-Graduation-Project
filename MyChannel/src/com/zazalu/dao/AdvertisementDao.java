package com.zazalu.dao;

import com.zazalu.entity.Advertisement;

import java.util.List;

/**
 * Created by zazalu on 4/14/17.
 */
public interface AdvertisementDao {

    void save(Advertisement advertisement);

    List<Advertisement> getAdsList();

    void deleteAdsById(Integer adsId);
}
