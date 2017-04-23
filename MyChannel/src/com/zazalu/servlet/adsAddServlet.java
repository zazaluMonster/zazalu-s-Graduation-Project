package com.zazalu.servlet;

import com.zazalu.entity.Advertisement;
import com.zazalu.entity.Good;
import com.zazalu.service.AddressService;
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
import java.util.List;

/**
 * Created by zazalu on 4/22/17.
 */
@WebServlet("/adsAddServlet")
public class adsAddServlet extends HttpServlet {

    private AdvertisementService advertisementService;
    private GoodService goodService;
    private ApplicationContext springContext;
    public void setAddressService() {
        String xmlPath = "applicationContext.xml";
        springContext = new ClassPathXmlApplicationContext(xmlPath);
        this.advertisementService = (AdvertisementService) springContext.getBean("advertisementService");
    }
    public void setGoodService(){
        this.goodService = (GoodService) springContext.getBean("goodService");
    }



    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Advertisement advertisement = new Advertisement();
        setAddressService();
        setGoodService();
        FileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        try {
            List<FileItem> items = upload.parseRequest(request);
            for (Object object : items) {
                FileItem fileItem = (FileItem) object;
                if (fileItem.isFormField()) {
                    System.out.println(fileItem.getString());
                    //根据商品名获取该商品类
                    Good good = goodService.getGoodByName(fileItem.getString());
                    advertisement.setGoodId(good);
                } else {
                    System.out.println(fileItem.getName());
                    String picturename = fileItem.getName();
                    //可以用File.separator 兼容不同系统的文件系统分隔符
                    String path = "/Users/zazalu/Documents/MyChannelImg/img/Ads/"+picturename;
                    //存放在web项目外的一个文件夹中 所以用的是绝对路径 这个文件夹是一个tomcat虚拟目录
                    fileItem.write(new File(path));
                    //映射到虚拟目录的相对路径写法
                    String relativePath = "/zazaluImg/img/Ads/" + picturename;
                    advertisement.setAdsImgUrl(relativePath);
                }
            }
            advertisementService.addAdvertisement(advertisement);
            System.out.println("personal img save success!");
            response.setHeader("Content-type", "text/html;charset=UTF-8");
            response.setCharacterEncoding("UTF-8");
            response.sendRedirect("/MyChannel/JSP/BackEnd_AdsManage.jsp");
        } catch (FileUploadException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
