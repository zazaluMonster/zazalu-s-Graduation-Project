package com.zazalu.entity;

/**
 * Created by zazalu on 4/14/17.
 */
public class Advertisement {
    private Integer AdsId;
    private String AdsImgUrl;
    private Good GoodId;

    public Integer getAdsId() {
        return AdsId;
    }

    public void setAdsId(Integer adsId) {
        AdsId = adsId;
    }

    public String getAdsImgUrl() {
        return AdsImgUrl;
    }

    public void setAdsImgUrl(String adsImgUrl) {
        AdsImgUrl = adsImgUrl;
    }

    public Good getGoodId() {
        return GoodId;
    }

    public void setGoodId(Good goodId) {
        GoodId = goodId;
    }
}
