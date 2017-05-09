package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.zazalu.entity.Good;
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
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
		HttpSession httpSession = ServletActionContext.getRequest().getSession();
		try {

		    user.setSemaphore(1);
		    //为刚注册的用户添加默认的头像
            addUserDefaultHeadImg(user);
			userService.register(user);
            httpSession.setAttribute("user",user);
            //为了实现男女选择框的点亮
            addUserSexToSession(user,httpSession);
            //为了实现用户年月份的点亮
            addUserBirthStringToSession(user,httpSession);httpSession.setAttribute("user",user);
            //为了实现男女选择框的点亮
            addUserSexToSession(user,httpSession);
            //为了实现用户年月份的点亮
            addUserBirthStringToSession(user,httpSession);
		} catch (Exception e) {
			System.out.println("save defeat");
		}
		System.out.println("save success!");
		return "registerSuccess";
	}
//  快速注册
    public String quickRegister(){
	    //邮箱注册我没有做验证是否重复！ 不要忘记了！
        System.out.println("start to save new user from quickRegister!");
        HttpSession httpSession = ServletActionContext.getRequest().getSession();
        try {
            //快速注册的用户没点击之前 账号都处于未激活状态 设置账号可用性为 不可用
            user.setSemaphore(0);
            //设置管理员
            user.setIsManager(0);
            //为此用户设置临时用户名
            user.setUserName(user.getUserEmail().substring(0,5));
            addUserDefaultHeadImg(user);
            userService.register(user);
            httpSession.setAttribute("user",user);
            //为了实现男女选择框的点亮
            addUserSexToSession(user,httpSession);
            //为了实现用户年月份的点亮
            addUserBirthStringToSession(user,httpSession);
            System.out.println("save success!");
            //发送验证邮件
            userService.sendMail(user.getUserEmail());

            System.out.println("mail send success");
        } catch (Exception e) {
            System.out.println("send defeat");
        }
        return "quickRegisterWait";
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
//  用户登录
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
            if (user.getSemaphore() == null || user.getSemaphore() == 0){
                //到这里说明 帐号被管理员封禁的帐号
                return "userDisabled";
            }
            //检测帐号完整性
            if(!testUserMessageComplete(user)){
                //到这里说明不完整 跳转到 买方个人信息页面 要求其进行填写
                return "messageIncomplete";
            }
            //检测是否是管理员巨巨
            if(user.getIsManager() == 1){
                //到这里说明 是管理员账户 跳转到管理员页面
                return "toManagePageSelect"; // /JSP/forwardPage/toManagePageSelect.jsp
            }
            //到这里就是正常用户的登录了
            System.out.println("login success!");

            return "success"; //  /JSP/shouye.jsp
        }
        //密码错误 登录失败 转回登录页面
        if(!b){
            System.out.println("password wrong!");
            return "passwordWrong";
        }
		return null;
	}
//  用户快速注册成功后跳转至个人信息
	public String quicksetupReceiveMail(){
	    //用户点击了激活邮件后转到此方法,这个任务的作用应该是跳转到买方个人信息填充页面
        HttpSession httpSession = ServletActionContext.getRequest().getSession();
        User user = (User) httpSession.getAttribute("user");
        user.setSemaphore(1);
        userService.update(user);
	    return "registerSuccess";
    }
//  找回密码
    public String lostPassword(){
        System.out.println("start to find password");
        try {
            //发送验证邮件
            HttpServletRequest request = ServletActionContext.getRequest();
            userService.sendPasswordMail((request.getParameter("lostPasswordEmail")));
            System.out.println("mail send success");
        } catch (Exception e) {
            System.out.println("send defeat");
            e.printStackTrace();
        }
        return "getPassword";
    }

    public String verifyUserPassword() throws IOException {
        System.out.println("verify user password");
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse response = ServletActionContext.getResponse();
        String userName = request.getParameter("userName").trim();
        String ordPassword = request.getParameter("ordPassword");
        System.out.println(ordPassword);
        User user = userService.verifyByName(userName);
        String passwordInDataBase = user.getUserPassword();
        System.out.println(passwordInDataBase + " / " + ordPassword);
        if (passwordInDataBase.equals(ordPassword)){
            //说明旧密码正确
            response.getWriter().write("ordPassword correct");
        }
        return null;
    }

    public String passwordChange(){
        System.out.println("start to change user password");
        HttpServletRequest request = ServletActionContext.getRequest();
        String newPassword = request.getParameter("newPassword");
        String userName = request.getParameter("userName");
        User user = userService.verifyByName(userName);
        user.setUserPassword(newPassword);
        userService.update(user);
        return "changePasswordSuccess"; // changePasswordSuccess.jsp
    }

    public String userLogOut(){
        System.out.println("start to logout");
        //清空httpsession中的user
        HttpSession httpSession = ServletActionContext.getRequest().getSession();
        httpSession.removeAttribute("user");
        return "successLogOut";  // successLogOut.jsp
    }

    public String getUserList(){
        System.out.println("start to get User List");
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        //获取good列表
        try {
            List<User> userList = userService.getUserList();
            if (userList == null) {
                httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
                httpServletResponse.setCharacterEncoding("UTF-8");
                httpServletResponse.getWriter().write("no user");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"user\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            for (User item : userList) {
                String jsonObj = "        {\n" +
                        "            \"UserId\": " + item.getUserId() + ",\n" +
                        "            \"UserName\": \"" + item.getUserName() + "\",\n" +
                        "            \"UserHeadUrl164\": \"" + item.getUserHeadUrl164() + "\",\n" +
                        "            \"UserSex\": \"" + item.getUserSex() + "\",\n" +
                        "            \"UserAddress\": \"" + item.getUserAddress() + "\",\n" +
                        "            \"UserSemaphore\": \"" + item.getSemaphore() + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public String getUserByName(){
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        String userName = request.getParameter("userName");
        try {
            User user = userService.getUserByName(userName);
            List<User> userList = new ArrayList<>();
            if(user != null){
                userList.add(user);
            }
            if (userList.size() == 0) {
                httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
                httpServletResponse.setCharacterEncoding("UTF-8");
                httpServletResponse.getWriter().write("no user");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"user\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            for (User item : userList) {
                String jsonObj = "        {\n" +
                        "            \"UserId\": " + item.getUserId() + ",\n" +
                        "            \"UserName\": \"" + item.getUserName() + "\",\n" +
                        "            \"UserHeadUrl164\": \"" + item.getUserHeadUrl164() + "\",\n" +
                        "            \"UserSex\": \"" + item.getUserSex() + "\",\n" +
                        "            \"UserAddress\": \"" + item.getUserAddress() + "\",\n" +
                        "            \"UserSemaphore\": \"" + item.getSemaphore() + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public String userManage() throws IOException {
        System.out.println("start to manage user ");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        String userName = httpServletRequest.getParameter("userName");
        User user = userService.verifyByName(userName);
        Integer userToggle = user.getSemaphore();
        if(userToggle == 1){
            user.setSemaphore(0);
        }else {
            user.setSemaphore(1);
        }
        userService.update(user);
        httpServletResponse.getWriter().write("success");
        return null;
    }

    public String deleteUser() throws IOException {
        System.out.println("start to delete user");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        String userName = httpServletRequest.getParameter("userName");
        userService.deleteUserByName(userName);
        httpServletResponse.getWriter().write("success");
        return null;
    }


    public static void addUserSexToSession(User user, HttpSession httpSession){
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

    public static void addUserBirthStringToSession(User user, HttpSession httpSession){
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

    public void addUserDefaultHeadImg(User user){
        //为刚注册的用户添加默认的头像
        user.setUserHeadUrl164("/zazaluImg/img/user/user1/personalImgHead164.png");
        user.setUserHeadUrl60("/zazaluImg/img/user/user1/personalImgHead60.png");
        user.setUserHeadUrl30("/zazaluImg/img/user/user1/personalImgHead30.png");
    }

    public static boolean testUserMessageComplete(User user){
        if (user.getUserEmail() == null || user.getUserAddress() == null || user.getUserBirth() == null ||
                user.getUserHeadUrl30() == null || user.getUserHeadUrl60() == null || user.getUserHeadUrl164() == null ||
                user.getUserIdentity() == null || user.getUserSex() == null || user.getUserTel() == null)  {
            return false;
        }
        return true;
    }
}
