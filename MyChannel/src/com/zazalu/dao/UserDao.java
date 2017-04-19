package com.zazalu.dao;

import com.zazalu.entity.User;

public interface UserDao {
	void save(User user);

	void update(User user);

	User getByName(String userName);

	User getByEmail(String emailName);
}
