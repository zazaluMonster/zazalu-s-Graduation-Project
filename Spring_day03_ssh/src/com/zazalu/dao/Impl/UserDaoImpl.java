package com.zazalu.dao.Impl;

import org.springframework.orm.hibernate4.HibernateTemplate;

import com.zazalu.dao.UserDao;
import com.zazalu.entity.User;

public class UserDaoImpl implements UserDao{
	
//	在Spring中我们要使用Hibernate的session去做CRUD操作的时候，我们要使用Spring的HibernateTemplate
//	HibernateTemplate帮我们封装了Hibernate的session 我们可以和使用session一样使用它 是类似的
//	我们使用Spring的配置文件来为此属性依赖注入，所以要提供set方法 不new
	private HibernateTemplate hibernateTemplate;
	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	@Override
	public void save(User user) {
		hibernateTemplate.save(user);
	}

}
