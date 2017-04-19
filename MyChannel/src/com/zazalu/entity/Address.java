package com.zazalu.entity;

/**
 * Created by zazalu on 4/14/17.
 */
public class Address {
    private Integer AddressId;
    private String AddressPlace;
    private String AddressDetail;
    private String AddressTel;
    private String RewardPeople;
    private Integer isDefault;
    private User UserId;

    public Integer getAddressId() {
        return AddressId;
    }

    public void setAddressId(Integer addressId) {
        AddressId = addressId;
    }

    public String getAddressPlace() {
        return AddressPlace;
    }

    public void setAddressPlace(String addressPlace) {
        AddressPlace = addressPlace;
    }

    public String getAddressDetail() {
        return AddressDetail;
    }

    public void setAddressDetail(String addressDetail) {
        AddressDetail = addressDetail;
    }

    public String getAddressTel() {
        return AddressTel;
    }

    public void setAddressTel(String addressTel) {
        AddressTel = addressTel;
    }

    public String getRewardPeople() {
        return RewardPeople;
    }

    public void setRewardPeople(String rewardPeople) {
        RewardPeople = rewardPeople;
    }

    public Integer getIsDefault() {
        return isDefault;
    }

    public void setIsDefault(Integer isDefault) {
        this.isDefault = isDefault;
    }

    public User getUserId() {
        return UserId;
    }

    public void setUserId(User userId) {
        UserId = userId;
    }
}
