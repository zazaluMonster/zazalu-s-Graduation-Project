package com.zazalu.service;

import com.zazalu.entity.Advertisement;

import java.util.List;

/**
 * Created by zazalu on 4/14/17.
 */
public interface AdvertisementService {
    void addAdvertisement(Advertisement advertisement);

    List<Advertisement> getAdsList();

    void deleteAdsById(Integer adsId);
}
