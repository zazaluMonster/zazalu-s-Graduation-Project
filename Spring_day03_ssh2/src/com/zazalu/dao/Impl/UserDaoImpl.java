package com.zazalu.dao.Impl;

import org.springframework.orm.hibernate4.support.HibernateDaoSupport;

import com.zazalu.dao.UserDao;
import com.zazalu.entity.User;

public class UserDaoImpl extends HibernateDaoSupport implements UserDao{
	

	@Override
	public void save(User user) {
		this.getHibernateTemplate().save(user);
	}

}
