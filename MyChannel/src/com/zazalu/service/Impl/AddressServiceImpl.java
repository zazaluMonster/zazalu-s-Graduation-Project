package com.zazalu.service.Impl;

import com.zazalu.dao.AddressDao;
import com.zazalu.entity.Address;
import com.zazalu.service.AddressService;

/**
 * Created by zazalu on 4/14/17.
 */
public class AddressServiceImpl implements AddressService{

    private AddressDao addressDao;
    public void setAddressDao(AddressDao addressDao) {
        this.addressDao = addressDao;
    }

    @Override
    public void addAddress(Address address) {
        addressDao.save(address);
    }
}
