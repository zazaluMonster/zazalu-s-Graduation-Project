package com.zazalu.service.Impl;

import com.zazalu.dao.UserDao;
import com.zazalu.entity.User;
import com.zazalu.service.UserService;

public class UserServiceImpl implements UserService {
	
	private UserDao userDao;
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public void register(User user) {
		userDao.save(user);
	}

}
