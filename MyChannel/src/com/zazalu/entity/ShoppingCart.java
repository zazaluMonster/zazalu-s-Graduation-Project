package com.zazalu.entity;

/**
 * Created by zazalu on 4/13/17.
 */
public class ShoppingCart {
    private Integer ShoppingCartId;
    private User UserId;
    private Orders OrdersId;

    public Integer getShoppingCartId() {
        return ShoppingCartId;
    }

    public void setShoppingCartId(Integer shoppingCartId) {
        ShoppingCartId = shoppingCartId;
    }

    public User getUserId() {
        return UserId;
    }

    public void setUserId(User userId) {
        UserId = userId;
    }

    public Orders getOrdersId() {
        return OrdersId;
    }

    public void setOrdersId(Orders ordersId) {
        OrdersId = ordersId;
    }
}
