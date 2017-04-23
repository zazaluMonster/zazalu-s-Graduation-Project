package com.zazalu.dao.Impl;

import com.zazalu.dao.AddressDao;
import com.zazalu.entity.Address;
import org.hibernate.FlushMode;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate4.HibernateTemplate;

import java.util.List;

/**
 * Created by zazalu on 4/14/17.
 */
public class AddressDaoImpl implements AddressDao{
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }
    @Override
    public void save(Address address) {
        hibernateTemplate.save(address);
    }

    @Override
    public List<Address> getAddressByUserId(Integer userId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Address WHERE UserId =  '" + userId + "'");
        sqlQuery.addEntity(Address.class);
        List<Address> addressList =  sqlQuery.list();
        return addressList;
    }

    @Override
    public Boolean deleteAddressById(Integer addressId) {
        Address address = hibernateTemplate.get(Address.class,addressId);
        try {
            hibernateTemplate.delete(address);
        } catch (DataAccessException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @Override
    public Address getDefaultAddress(Integer userId) {
        Session session =  hibernateTemplate.getSessionFactory().getCurrentSession();
        SQLQuery sqlQuery =  session.createSQLQuery("SELECT * FROM Address WHERE isDefault =  1 AND UserId = '" + userId +"'");
        sqlQuery.addEntity(Address.class);
        List<Address> addressList =  sqlQuery.list();
        return  addressList.get(0);
    }

    @Override
    public Address getAddressById(Integer addressId) {
        return hibernateTemplate.get(Address.class,addressId);
    }

    @Override
    public void update(Address address) {
        hibernateTemplate.update(address);
    }
}
