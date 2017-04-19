package com.zazalu.dao.Impl;

import com.zazalu.dao.AddressDao;
import com.zazalu.entity.Address;
import org.springframework.orm.hibernate4.HibernateTemplate;

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
}
