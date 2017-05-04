package com.zazalu.servlet;

import com.zazalu.entity.Advertisement;
import com.zazalu.entity.Good;
import com.zazalu.service.AdvertisementService;
import com.zazalu.service.GoodService;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

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
 * Created by zazalu on 4/22/17.
 */
@WebServlet("/addNewGoodServlet")
public class addNewGoodServlet extends HttpServlet{
    private GoodService goodService;
    private ApplicationContext springContext;
    public void setGoodService() {
        String xmlPath = "applicationContext.xml";
        springContext = new ClassPathXmlApplicationContext(xmlPath);
        this.goodService = (GoodService) springContext.getBean("goodService");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Good good = new Good();
        setGoodService();
        FileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        try {
            List<FileItem> items = upload.parseRequest(request);
            String goodColor = "";
            ArrayList<String> urlList = new ArrayList<>();
            for (Object object : items) {
                FileItem fileItem = (FileItem) object;
                if (fileItem.isFormField()) {
                    System.out.println(fileItem.getFieldName() + ": " + fileItem.getString());
                    String fieldName = fileItem.getFieldName();
                    String fieldString = fileItem.getString();
                    if (fieldName.equals("GoodName")) {
                        good.setGoodName(fieldString);
                    }else if(fieldName.equals("GoodDes")){
                        good.setGoodDescrible(fieldString);
                    }else if(fieldName.equals("GoodStock")){
                        good.setGoodStock(Integer.valueOf(fieldString));
                    }else if(fieldName.equals("GoodPrice")){
                        good.setGoodPrice(Integer.valueOf(fieldString));
                    }else if(fieldName.equals("GoodNetWeight")){
                        good.setGoodNetWeight(fieldString);
                    }else if(fieldName.equals("GoodColor")){
                        goodColor = goodColor + fieldString + "&";
                    }else if (fieldName.equals("GoodDiscount")){
                        good.setGoodDiscount(Integer.valueOf(fieldString));
                    }else if (fieldName.equals("GoodPoint")){
                        good.setGoodPoint(Integer.valueOf(fieldString));
                    }else if (fieldName.equals("GoodMessage")){
                        good.setGoodMessage(fieldString);
                    }
                } else {
                    System.out.println(fileItem.getFieldName() + ": " + fileItem.getName());
                    String picturename = fileItem.getName();
                    //可以用File.separator 兼容不同系统的文件系统分隔符
                    String path = "/Users/zazalu/Documents/MyChannelImg/img/goods/"+good.getGoodName()+"/"+picturename;
                    String docPath = "/Users/zazalu/Documents/MyChannelImg/img/goods/" + good.getGoodName();
                    File docFile = new File(docPath);
                    if(!docFile.exists()){
                        docFile.mkdir();
                    }
                    //存放在web项目外的一个文件夹中 所以用的是绝对路径 这个文件夹是一个tomcat虚拟目录
                    fileItem.write(new File(path));
                    //映射到虚拟目录的相对路径写法
                    String relativePath = "/zazaluImg/img/goods/" +good.getGoodName()+"/"+picturename;
                    urlList.add(relativePath);
                }
            }
            good.setGoodColor(goodColor);
            good.setGoodImgUrl30(urlList.get(0));
            good.setGoodImgUrl60(urlList.get(1));
            good.setGoodImgUrl164(urlList.get(2));
            good.setGoodImgUrl430(urlList.get(3));
            good.setSemaphore(1);
            goodService.register(good);
            System.out.println("personal img save success!");
            //转发
            response.setHeader("Content-type", "text/html;charset=UTF-8");
            response.setCharacterEncoding("UTF-8");
            response.sendRedirect("/MyChannel/JSP/forwardPage/addNewGoodSuccess.jsp");
        } catch (FileUploadException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
