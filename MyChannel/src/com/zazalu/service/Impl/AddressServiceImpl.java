package com.zazalu.service.Impl;

import com.zazalu.dao.AddressDao;
import com.zazalu.entity.Address;
import com.zazalu.service.AddressService;

import java.util.List;

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

    @Override
    public List<Address> getAddress(Integer userId) {
        return addressDao.getAddressByUserId(userId);
    }

    @Override
    public Boolean deleteAddressById(Integer addressId) {
        return addressDao.deleteAddressById(addressId);
    }

    @Override
    public Address getDefaultAddress(Integer userId) {
        return addressDao.getDefaultAddress(userId);
    }

    @Override
    public Address getAddressById(Integer addressId) {
        return addressDao.getAddressById(addressId);
    }

    @Override
    public void update(Address address) {
        addressDao.update(address);
    }
}
