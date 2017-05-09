package com.zazalu.service.Impl;

import com.zazalu.dao.UserDao;
import com.zazalu.email.QQmailService;
import com.zazalu.entity.User;
import com.zazalu.service.UserService;
import org.hibernate.Session;

import java.util.List;

public class UserServiceImpl implements UserService {
	
	private UserDao userDao;
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}


	@Override
	public void register(User user) {
		userDao.save(user);
	}

    @Override
    public void update(User user) {
        userDao.update(user);
    }

    @Override
	public User verifyByName(String userName) {
		User user = userDao.getByName(userName);
		return user;
	}

	@Override
	public Boolean verifyUserLogin(String userName, String userPassword) {
		User user = userDao.getByName(userName);
		//验证密码是否正确
		return user.getUserPassword().equals(userPassword);
	}

    @Override
    public void sendMail(String userEmail) {
	    String strTitle = "MyChannel";
	    String userName = userEmail.substring(0,5);
	    String strUrl = "<a href='http://localhost:8080/MyChannel/userAction_quicksetupReceiveMail.action' target='_blank'/>" +
                "点击激活<a>";
        String strText = "欢迎来到MyChannel!<hr/>你好 " + userEmail +"先生.<hr/>您的账号名为 "+userName+"<hr/> 您的激活链接" + strUrl;
        System.out.println("mail-content is ready!");
        QQmailService.send_qqmail(userEmail,strTitle,strText);
    }

    @Override
    public void sendPasswordMail(String userEmail) {
        String strTitle = "MyChannel";
        User user = userDao.getByEmail(userEmail);
        if(user == null){
            String strText = "找回密码邮件<hr/>你好<hr/>" + userEmail +"<hr/>这个邮箱并没有在MyChannel中注册过,检查是否是您输错了自己邮箱名";
            System.out.println("no this email mail is ready");
            QQmailService.send_qqmail(userEmail, strTitle, strText);
        }else {
            String password = user.getUserPassword();
            String strText = "找回密码邮件<hr/>你好 " + userEmail + "先生.<hr/> 您的密码是" + password;
            System.out.println("get password mail is ready!");
            QQmailService.send_qqmail(userEmail, strTitle, strText);
        }
    }

    @Override
    public Integer getUserIdByName(String userName) {
	     return userDao.getUserIdByName(userName);
    }

    @Override
    public List<User> getUserList() {
	    return userDao.getUserList();
    }

    @Override
    public void deleteUserByName(String userName) {
        userDao.deleteUserByName(userName);
    }

    @Override
    public User getUserByName(String userName) {
        return userDao.getByName(userName);
    }

}
