package com.zazalu.service;

import com.zazalu.entity.User;

import java.util.List;

public interface UserService {
	
	void register(User user);

	void update(User user);

	User verifyByName(String username);

	Boolean verifyUserLogin(String userName,String userPassword);

	void sendMail(String userEmail);

	void sendPasswordMail(String userEmail);

	Integer getUserIdByName(String userName);

	List<User> getUserList();

	void deleteUserByName(String userName);


}
