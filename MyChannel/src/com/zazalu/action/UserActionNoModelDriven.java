package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.User;
import com.zazalu.service.UserService;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.sql.Date;
import java.util.List;

/**
 * Created by zazalu on 4/19/17.
 */
public class UserActionNoModelDriven extends ActionSupport{

    //Spring注入
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    //	Spring注入Service
    private UserService userService;
    public void setUserService(UserService userService){
        this.userService = userService;
    }

    //业务方法

    //买方个人信息编辑页面处理(不包含头像的存储)
    public String personalInformationSave(){
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        User user = composeUser(httpServletRequest,userService);
        System.out.println("personal message save success!");
        //个人信息已经改变 所以session中的原来的user已经失效 需要刷新
        HttpSession httpSession =  httpServletRequest.getSession();
        httpSession.setAttribute("user",user);
        System.out.println("personal message flash in session success!");
        //检测个人信息是否填写完整
        if(UserAction.testUserMessageComplete(user)){
            //到这里说明填写完毕
            System.out.println("user message complete! trun the Semphore to 1");
            user.setSemaphore(1);
        }
        userService.update(user);
        //为了实现男女选择框的点亮
        UserAction.addUserSexToSession(user,httpSession);
        //为了实现用户年月份的点亮
        UserAction.addUserBirthStringToSession(user,httpSession);
        return "success"; //  to /messageFlashSuccess.jsp
    }

//    public String personalImgSave(){
//        HttpServletRequest request = ServletActionContext.getRequest();
//        FileItemFactory factory = new DiskFileItemFactory();
//        ServletFileUpload upload = new ServletFileUpload(factory);
//        try {
//            List<FileItem> items = upload.parseRequest(request);
//            String userName = request.getParameter("userName");
//            System.out.println(userName);
//            System.out.println(items.get(0).toString());
//            for (Object object : items) {
//                FileItem fileItem = (FileItem) object;
//                System.out.println("2:=========" + fileItem.toString());
//                System.out.println("3：fileItem.getFieldName():==" + fileItem.getFieldName());
//                if (fileItem.isFormField()) {
//                } else {
//
//                    String picturename = fileItem.getFieldName() + ".png";
//                    //可以用File.separator 兼容不同系统的文件系统分隔符
//                    String path = "/Users/zazalu/Desktop/MyChannel/web/JSP/img/user/" + userName +
//                            "/" + picturename;
//                    fileItem.write(new File(path));
//                }
//            }
//        } catch (FileUploadException e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        } catch (Exception e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        }
//
//        System.out.println("save Img success");
//        return null;
//    }


    //组装User的id
    public static User composeUser(HttpServletRequest htr,UserService userService){
        String userName = htr.getParameter("UserName");
        User user = userService.verifyByName(userName);
        String userSex = htr.getParameter("UserSex");
        if (userSex != null){
            user.setUserSex(Integer.parseInt(userSex));
        }
        String userTel = htr.getParameter("UserTel");
        if(userTel != null){
            user.setUserTel(userTel);
        }
        String userEmail = htr.getParameter("UserEmail");
        if(userEmail != null){
            user.setUserEmail(userEmail);
        }
        String userProvince = htr.getParameter("UserProvince");
        String userCity = htr.getParameter("UserCity");
        String userArea = htr.getParameter("UserArea");
        if(userProvince != null && userCity != null){
            String userAddress = userProvince+userCity+userArea;
            user.setUserAddress(userAddress);
        }
        String userBirthYear = htr.getParameter("UserBirthYear");
        String userBirthMonth = htr.getParameter("UserBirthMonth");
        String userBirthDay = htr.getParameter("UserBirthDay");
        String userBirthString = userBirthYear + "-" + userBirthMonth + "-" + userBirthDay;
        if(userBirthString.length() >= 8){
            Date date = Date.valueOf(userBirthString);
            user.setUserBirth(date);
        }
        String userIdentity = htr.getParameter("UserIdentity");
        if(userIdentity != null){
            user.setUserIdentity(userIdentity);
        }
        return user;
    }
}
