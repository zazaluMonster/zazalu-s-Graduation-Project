package com.zazalu.service;

import com.zazalu.entity.Address;

import java.util.List;

/**
 * Created by zazalu on 4/14/17.
 */
public interface AddressService {
    void addAddress(Address address);

    List<Address> getAddress(Integer userId);

    Boolean deleteAddressById(Integer addressId);

    Address getDefaultAddress(Integer userId);

    Address getAddressById(Integer addressId);

    void update(Address address);


}
