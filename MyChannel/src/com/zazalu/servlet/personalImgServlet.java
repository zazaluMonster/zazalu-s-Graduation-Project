package com.zazalu.servlet;

import com.zazalu.action.UserActionNoModelDriven;
import com.zazalu.dao.Impl.UserDaoImpl;
import com.zazalu.entity.User;
import com.zazalu.service.Impl.UserServiceImpl;
import com.zazalu.service.UserService;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by zazalu on 4/19/17.
 */

@WebServlet("/personalImgServlet")
public class personalImgServlet extends HttpServlet {

    private UserService userService;
    public void setUserService() {
        String xmlPath = "applicationContext.xml";
        ApplicationContext springContext = new ClassPathXmlApplicationContext(xmlPath);
        this.userService = (UserService) springContext.getBean("userService");
    }

    //存储图片的Map
    private static HashMap<String,String> hashMapPicture = new HashMap<>();
    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub

        User user = null;
        setUserService();
        FileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        try {
            List<FileItem> items = upload.parseRequest(request);
            String userName = items.get(1).getString();
            String pixel = items.get(2).getString();
            for (Object object : items) {
                FileItem fileItem = (FileItem) object;
                if (fileItem.isFormField()) {
                    System.out.println(fileItem.getFieldName());
                } else {
                    System.out.println(fileItem.getFieldName());
                    String picturename = fileItem.getFieldName() + ".png";
                    //可以用File.separator 兼容不同系统的文件系统分隔符
                    String path = "";
                    String separator = File.separator;
                    if(separator.equals("/")){

                        path = separator+"Users"+separator+"zazalu"+separator+"Documents"+separator+"MyChannelImg"+separator+"img"+separator+"user" +separator+ userName + separator + picturename;
                        String docPath = separator+"Users"+separator+"zazalu"+separator+"Documents"+separator+"MyChannelImg"+separator+"img"+separator+"user" + separator +userName;
                        File docFile = new File(docPath);
                        if(!docFile.exists()){
                            docFile.mkdirs();
                        }
                    }else if (separator.equals("\\")){
                        path = "D:"+ separator+"Users"+separator+"zazalu"+separator+"Documents"+separator+"MyChannelImg"+separator+"img"+separator+"user" +separator+ userName + separator + picturename;
                        String docPath = "D:"+ separator+"Users"+separator+"zazalu"+separator+"Documents"+separator+"MyChannelImg"+separator+"img"+separator+"user"+ separator +userName;
                        File docFile = new File(docPath);
                        if(!docFile.exists()){
                            docFile.mkdirs();
                        }
                    }


                    //存放在web项目外的一个文件夹中 所以用的是绝对路径 这个文件夹是一个tomcat虚拟目录
                    fileItem.write(new File(path));
                    //映射到虚拟目录的相对路径写法
                    String relativePath = "/zazaluImg/img/user/" + userName +
                            "/" + picturename;
                    hashMapPicture.put(pixel,relativePath);
                    System.out.println("personal img save success!");
                }
            }
            //存图片路径
            if(hashMapPicture.size() == 3){
                System.out.println("do once!");
                user = userService.verifyByName(userName);
                user.setUserHeadUrl164(hashMapPicture.get("164"));
                user.setUserHeadUrl60(hashMapPicture.get("60"));
                user.setUserHeadUrl30(hashMapPicture.get("30"));
                userService.update(user);
                //修改session 这样刷新后才能显示正确的修改过后的图片
                user = userService.verifyByName(userName);
                //将用户id存入session中
                HttpSession httpSession =  request.getSession();
                httpSession.setAttribute("user",user);
                //修改成功 跳转到个人页面
                System.out.println("save Img success");
                response.getWriter().write("upload success");
            }

        } catch (FileUploadException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }
}
