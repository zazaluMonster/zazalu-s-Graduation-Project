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
    private static HashMap<Integer,String> hashMapPicture = new HashMap<>();
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
            for (Object object : items) {
                FileItem fileItem = (FileItem) object;
                if (fileItem.isFormField()) {
                } else {

                    String picturename = fileItem.getFieldName() + ".png";
                    //可以用File.separator 兼容不同系统的文件系统分隔符
                    String path = "/Users/zazalu/Desktop/MyChannel/web/JSP/img/user/" + userName +
                            "/" + picturename;
                    String docPath = "/Users/zazalu/Desktop/MyChannel/web/JSP/img/user/" + userName;
                    File file = new File(docPath);
                    fileItem.write(new File(path));
                    String relativePath = "img/user/" + userName +
                            "/" + picturename;
                    Integer i = Integer.parseInt(String.valueOf(picturename.charAt(26)));
                    hashMapPicture.put(i,relativePath);
                    System.out.println("personal img save success!");
                }
            }
            //存图片路径
            if(hashMapPicture.size() == 3){
                System.out.println("只会执行一次");
                user = userService.verifyByName(userName);
                user.setUserHeadUrl164(hashMapPicture.get(1));
                user.setUserHeadUrl60(hashMapPicture.get(6));
                user.setUserHeadUrl30(hashMapPicture.get(3));
                userService.update(user);
            }
            //修改session 这样刷新后才能显示正确的修改过后的图片
        } catch (FileUploadException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        System.out.println("save Img success");

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }
}
