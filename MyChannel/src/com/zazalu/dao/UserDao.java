package com.zazalu.dao;

import com.zazalu.entity.User;

import java.util.List;

public interface UserDao {
	void save(User user);

	void update(User user);

	User getByName(String userName);

	User getByEmail(String emailName);

	Integer getUserIdByName(String userName);

	List<User> getUserList();

	void deleteUserByName(String userName);

}
