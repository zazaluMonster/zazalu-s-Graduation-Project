package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.zazalu.entity.User;
import com.zazalu.service.UserService;
import org.apache.struts2.ServletActionContext;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class UserAction extends ActionSupport implements ModelDriven<User>{
	//	模型驱动
	private User user = new User();

	//Spring注入HibernateTemplate
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Override
	public User getModel() {
		return user;
	}
//	Spring注入Service
	private UserService userService;
	public void setUserService(UserService userService){
		this.userService = userService;
	}
//  业务功能实现
	public String register(){
		System.out.println("start to save new user!");
		try {
		    //刚注册的用户信息填补不完全 设置帐号可用性为 不可用
		    user.setSemaphore(0);
			userService.register(user);
		} catch (Exception e) {
			System.out.println("save defeat");
		}
		System.out.println("save success!");
		return "success";
	}
//  快速注册
    public String quickRegister(){

	    //邮箱注册我没有做验证是否重复！ 不要忘记了！
        System.out.println("start to save new user from quickRegister!");
        try {
            //快速注册的用户信息填补不完全 设置账号可用性为 不可用
            user.setSemaphore(0);
            //设置管理员
            user.setIsManager(0);
            //为此用户设置临时用户名
            user.setUserName(user.getUserEmail().substring(0,5));
            userService.register(user);
            System.out.println("save success!");
            //发送验证邮件
            userService.sendMail(user.getUserEmail());
            System.out.println("mail send success");
        } catch (Exception e) {
            System.out.println("send defeat");
        }
        return "success";
    }

//	验证是否有这个用户名  为了方便以后用 把这个方法抽象成从request里面接受两个String  一个表示要去查哪个表，一个表示要查的名字
	public String verifyByName() throws IOException {
		HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        String whattable = request.getParameter("whatTable");
        String name = request.getParameter("name");
        System.out.println(whattable + " / " + name);
        User user = userService.verifyByName(name);
        if (user == null){
            System.out.println("there is no people named " + name);
            response.getWriter().write("ok");
        }else {
            response.getWriter().write("already have this user");
        }
        return null;
	}

	public String userLogin(){
	    //取出前端发过来的用户名和密码
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        String userName = request.getParameter("UserName");
        String userPassword = request.getParameter("UserPassword");
        System.out.println(userName + " / " + userPassword);

        Boolean b = userService.verifyUserLogin(userName,userPassword);
        System.out.println(b);
        //密码正确 登录成功
        if(b){
            User user = userService.verifyByName(userName);
            //将用户id存入session中
            HttpSession httpSession =  request.getSession();
            httpSession.setAttribute("user",user);
            //为了实现男女选择框的点亮
            addUserSexToSession(user,httpSession);
            //为了实现用户年月份的点亮
            addUserBirthStringToSession(user,httpSession);
            //检测帐号完整性
            if(user.getUserEmail() == null || user.getUserAddress() == null || user.getUserBirth() == null ||
                    user.getUserHeadUrl30() == null || user.getUserHeadUrl60() == null || user.getUserHeadUrl164() == null ||
                    user.getUserIdentity() == null || user.getUserSex() == null || user.getUserTel() == null){
                //到这里说明不完整 跳转到 买方个人信息页面 要求其进行填写
                return "messageIncomplete";
            }
            if (user.getSemaphore() == 0){
                //到这里说明 信息填写完成 帐号被管理员封禁的帐号
                return "userDisabled";
            }
            //到这里就是正常用户的登录了
            System.out.println("login success!");

            return "success";
        }
        //密码错误 登录失败 转回登录页面
        if(!b){
            System.out.println("password wrong!");
            return "passwordWrong";
        }
		return null;
	}

	public String quicksetupReceiveMail(){
	    //用户点击了激活邮件后转到此方法,这个任务的作用应该是跳转到买方个人信息填充页面
	    return "success";
    }

    public String lostPassword(){
        System.out.println("start to find password");
        try {
            //发送验证邮件
            HttpServletRequest request = ServletActionContext.getRequest();
            userService.sendPasswordMail((request.getParameter("lostPasswordEmail")));
            System.out.println("mail send success");
        } catch (Exception e) {
            System.out.println("send defeat");
        }
        return "success";
    }

    public void addUserSexToSession(User user,HttpSession httpSession){
        if(user.getUserSex() != null){
            if(user.getUserSex() == 1){
                httpSession.setAttribute("UserSexMale","true");
                httpSession.setAttribute("UserSexFeMale","false");
            }else {
                httpSession.setAttribute("UserSexMale","false");
                httpSession.setAttribute("UserSexFeMale","true");
            }
        }
    }

    public void addUserBirthStringToSession(User user,HttpSession httpSession){
        if(user.getUserBirth() != null){
            String userBirth = user.getUserBirth().toString();
            String userBirthArray[] = userBirth.split("-");
            String userBirthYear = userBirthArray[0];
            String userBirthMonth = userBirthArray[1];
            String userBirthDay = userBirthArray[2];
            httpSession.setAttribute("userBirthYear",userBirthYear);
            httpSession.setAttribute("userBirthMonth",userBirthMonth);
            httpSession.setAttribute("userBirthDay",userBirthDay);
        }
    }
}
