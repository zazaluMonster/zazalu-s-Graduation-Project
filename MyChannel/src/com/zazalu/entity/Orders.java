package com.zazalu.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by zazalu on 4/13/17.
 */
public class Orders {
    private Integer OrdersId;
    private User UserId;
    private Good GoodId;
    private Integer GoodNumber;
    private String GoodNetWeight;
    private String GoodColor;
    private Integer isPay;
    private Integer isUnSubscribe;
    private Date OrderTime;

    private Set<Evaluate> evaluateSet = new HashSet<>();

    public Set<Evaluate> getEvaluateSet() {
        return evaluateSet;
    }

    public void setEvaluateSet(Set<Evaluate> evaluateSet) {
        this.evaluateSet = evaluateSet;
    }

    public Integer getOrdersId() {
        return OrdersId;
    }

    public void setOrdersId(Integer orderId) {
        OrdersId = orderId;
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

    public Integer getGoodNumber() {
        return GoodNumber;
    }

    public void setGoodNumber(Integer goodNumber) {
        GoodNumber = goodNumber;
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

    public Integer getIsPay() {
        return isPay;
    }

    public void setIsPay(Integer isPay) {
        this.isPay = isPay;
    }

    public Integer getIsUnSubscribe() {
        return isUnSubscribe;
    }

    public void setIsUnSubscribe(Integer isUnSubscribe) {
        this.isUnSubscribe = isUnSubscribe;
    }

    public Date getOrderTime() {
        return OrderTime;
    }

    public void setOrderTime(Date orderTime) {
        OrderTime = orderTime;
    }
}
