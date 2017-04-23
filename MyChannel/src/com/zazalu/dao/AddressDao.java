package com.zazalu.dao;

import com.zazalu.entity.Address;

import java.util.List;

/**
 * Created by zazalu on 4/14/17.
 */
public interface AddressDao {
    void save(Address address);

    List<Address> getAddressByUserId(Integer userId);

    Boolean deleteAddressById(Integer addressId);

    Address getDefaultAddress(Integer userId);

    Address getAddressById(Integer addressId);

    void update(Address address);
}
