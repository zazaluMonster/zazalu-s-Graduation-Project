package com.zazalu.service;

import com.zazalu.entity.User;
import org.hibernate.Session;

public interface UserService {
	
	void register(User user);

	void update(User user);

	User verifyByName(String username);

	Boolean verifyUserLogin(String userName,String userPassword);

	void sendMail(String userEmail);

	void sendPasswordMail(String userEmail);




}
