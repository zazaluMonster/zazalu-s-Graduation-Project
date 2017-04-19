package com.zazalu.entity;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

public class User {
    private Integer UserId;
    private String UserName;
    private String UserTel;
    private String UserAddress;
    private String UserEmail;
    private String UserPassword;
    private String UserIdentity;
    private Date UserBirth;
    private Integer UserSex;
    private String UserHeadUrl164;
    private String UserHeadUrl60;
    private String UserHeadUrl30;
    private Integer isManager;
    private Integer Semaphore;

    private Set<Orders> ordersSet = new HashSet<>();

    private Set<Favorite> favoriteSet = new HashSet<>();

    private Set<Address> addressSet = new HashSet<>();

    public Set<Address> getAddressSet() {
        return addressSet;
    }

    public void setAddressSet(Set<Address> addressSet) {
        this.addressSet = addressSet;
    }

    public Set<Favorite> getFavoriteSet() {
        return favoriteSet;
    }

    public void setFavoriteSet(Set<Favorite> favoriteSet) {
        this.favoriteSet = favoriteSet;
    }

    public Set<Orders> getOrdersSet() {
        return ordersSet;
    }

    public void setOrdersSet(Set<Orders> ordersSet) {
        this.ordersSet = ordersSet;
    }

    public Integer getUserId() {
        return UserId;
    }

    public void setUserId(Integer userId) {
        UserId = userId;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public String getUserTel() {
        return UserTel;
    }

    public void setUserTel(String userTel) {
        UserTel = userTel;
    }

    public String getUserAddress() {
        return UserAddress;
    }

    public void setUserAddress(String userAddress) {
        UserAddress = userAddress;
    }

    public String getUserEmail() {
        return UserEmail;
    }

    public void setUserEmail(String userEmail) {
        UserEmail = userEmail;
    }

    public String getUserPassword() {
        return UserPassword;
    }

    public void setUserPassword(String userPassword) {
        UserPassword = userPassword;
    }

    public String getUserIdentity() {
        return UserIdentity;
    }

    public void setUserIdentity(String userIdentity) {
        UserIdentity = userIdentity;
    }

    public Date getUserBirth() {
        return UserBirth;
    }

    public void setUserBirth(Date userBirth) {
        UserBirth = userBirth;
    }

    public Integer getUserSex() {
        return UserSex;
    }

    public void setUserSex(Integer userSex) {
        UserSex = userSex;
    }

    public String getUserHeadUrl164() {
        return UserHeadUrl164;
    }

    public void setUserHeadUrl164(String userHeadUrl164) {
        UserHeadUrl164 = userHeadUrl164;
    }

    public String getUserHeadUrl60() {
        return UserHeadUrl60;
    }

    public void setUserHeadUrl60(String userHeadUrl60) {
        UserHeadUrl60 = userHeadUrl60;
    }

    public String getUserHeadUrl30() {
        return UserHeadUrl30;
    }

    public void setUserHeadUrl30(String userHeadUrl30) {
        UserHeadUrl30 = userHeadUrl30;
    }

    public Integer getIsManager() {
        return isManager;
    }

    public void setIsManager(Integer isManager) {
        this.isManager = isManager;
    }

    public Integer getSemaphore() {
        return Semaphore;
    }

    public void setSemaphore(Integer semaphore) {
        Semaphore = semaphore;
    }
}
