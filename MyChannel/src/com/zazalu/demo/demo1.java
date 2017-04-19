package com.zazalu.demo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.zazalu.entity.User;
import com.zazalu.service.UserService;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:applicationContext.xml")
public class demo1 {
	
	@Autowired
	private UserService userService;
	@Test
	public void demo01(){
		User user = new User();
		user.setUserName("zazalu");
		user.setUserPassword("he65177032");
		user.setUserTel("18829212801");
		userService.register(user);
	}
}
