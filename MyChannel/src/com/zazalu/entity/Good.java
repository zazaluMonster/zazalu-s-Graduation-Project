package com.zazalu.entity;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by zazalu on 4/13/17.
 */
public class Good {
    private Integer GoodId;
    private String GoodName;
    private String GoodDescrible;
    private Integer GoodStock;
    private Integer GoodPrice;
    private String GoodNetWeight;
    private String GoodColor;
    private String GoodMessage;
    private String GoodImgUrl164;
    private String GoodImgUrl60;
    private String GoodImgUrl30;
    private String GoodImgUrl430;
    private Integer Semaphore;
    private Integer GoodPoint;
    private Integer GoodDiscount;

    private Advertisement AdsId;

    private Set<Orders> ordersSet = new HashSet<Orders>();

    public Advertisement getAdsId() {
        return AdsId;
    }

    public void setAdsId(Advertisement adsId) {
        AdsId = adsId;
    }

    public Set<Orders> getOrdersSet() {
        return ordersSet;
    }

    public void setOrdersSet(Set<Orders> ordersSet) {
        this.ordersSet = ordersSet;
    }

    public Integer getGoodId() {
        return GoodId;
    }

    public void setGoodId(Integer goodId) {
        GoodId = goodId;
    }

    public String getGoodName() {
        return GoodName;
    }

    public void setGoodName(String goodName) {
        GoodName = goodName;
    }

    public String getGoodDescrible() {
        return GoodDescrible;
    }

    public void setGoodDescrible(String goodDescrible) {
        GoodDescrible = goodDescrible;
    }

    public Integer getGoodStock() {
        return GoodStock;
    }

    public void setGoodStock(Integer goodStock) {
        GoodStock = goodStock;
    }

    public String getGoodNetWeight() {
        return GoodNetWeight;
    }

    public void setGoodNetWeight(String goodNetWeight) {
        GoodNetWeight = goodNetWeight;
    }

    public String getGoodColor() {
        return GoodColor;
    }

    public void setGoodColor(String goodColor) {
        GoodColor = goodColor;
    }

    public String getGoodMessage() {
        return GoodMessage;
    }

    public void setGoodMessage(String goodMessage) {
        GoodMessage = goodMessage;
    }

    public String getGoodImgUrl164() {
        return GoodImgUrl164;
    }

    public void setGoodImgUrl164(String goodImgUrl164) {
        GoodImgUrl164 = goodImgUrl164;
    }

    public String getGoodImgUrl60() {
        return GoodImgUrl60;
    }

    public void setGoodImgUrl60(String goodImgUrl60) {
        GoodImgUrl60 = goodImgUrl60;
    }

    public String getGoodImgUrl30() {
        return GoodImgUrl30;
    }

    public void setGoodImgUrl30(String goodImgUrl30) {
        GoodImgUrl30 = goodImgUrl30;
    }

    public String getGoodImgUrl430() {
        return GoodImgUrl430;
    }

    public void setGoodImgUrl430(String goodImgUrl430) {
        GoodImgUrl430 = goodImgUrl430;
    }

    public Integer getSemaphore() {
        return Semaphore;
    }

    public void setSemaphore(Integer semaphore) {
        Semaphore = semaphore;
    }

    public Integer getGoodPoint() {
        return GoodPoint;
    }

    public void setGoodPoint(Integer goodPoint) {
        GoodPoint = goodPoint;
    }

    public Integer getGoodDiscount() {
        return GoodDiscount;
    }

    public void setGoodDiscount(Integer goodDiscount) {
        GoodDiscount = goodDiscount;
    }

    public Integer getGoodPrice() {
        return GoodPrice;
    }

    public void setGoodPrice(Integer goodPrice) {
        GoodPrice = goodPrice;
    }
}
