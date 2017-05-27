package com.zazalu.servlet;

import com.zazalu.entity.Evaluate;
import com.zazalu.entity.Good;
import com.zazalu.entity.Orders;
import com.zazalu.entity.User;
import com.zazalu.service.EvaluateService;
import com.zazalu.service.GoodService;
import com.zazalu.service.OrdersService;
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
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by zazalu on 4/26/17.
 */
@WebServlet("/addEvaluateServlet")
public class addEvaluateServlet extends HttpServlet{
    private OrdersService ordersService;
    private EvaluateService evaluateService;
    private ApplicationContext springContext;
    public void setService() {
        String xmlPath = "applicationContext.xml";
        springContext = new ClassPathXmlApplicationContext(xmlPath);
        this.ordersService = (OrdersService) springContext.getBean("ordersService");
        this.evaluateService = (EvaluateService) springContext.getBean("evaluateService");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        setService();
        FileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        Evaluate evaluate = new Evaluate();
        ArrayList<String> evaluateImgUrlArr = new ArrayList<>();
        Integer fatherEvaluateId = null;
        Long currentTime = new Date().getTime();
        User user = (User) request.getSession().getAttribute("user");
        try {
            List<FileItem> items = upload.parseRequest(request);
            for (Object object : items) {
                FileItem fileItem = (FileItem) object;
                if (fileItem.isFormField()) {
                    System.out.println(fileItem.getFieldName() + ": " + fileItem.getString());
                    String fieldName = fileItem.getFieldName();
                    String fieldString = fileItem.getString();
                    if(fieldName.equals("goodsEvaluateReplyForm")){
                        //都会进入的if语句
                        evaluate.setEvaluateMessage(URLDecoder.decode(fieldString,"UTF-8"));
                    }else if(fieldName.equals("evaluateOrderId")){
                        //创建父亲评论才会进入的if语句
                        Orders order = ordersService.getOrderByOrderId(Integer.valueOf(fieldString));
                        evaluate.setOrdersId(order);
                        //判断是否是退订评论
                        if(order.getIsUnSubscribe() == 0){
                            //0代表 不是退订评价
                            evaluate.setSemaphore(0);
                        }
                        //修改订单的isEvaluate
                        order.setIsEvaluate(1);
                        ordersService.updateOrder(order);
                    }else if(fieldName.equals("hasFatherEvaluate")){
                        //创建父亲评论才会进入的if语句
                        fatherEvaluateId = Integer.valueOf(fieldString);
                    }else if(fieldName.equals("evaluateId")){
                        //创建子评论会进入的if语句
                        fatherEvaluateId = Integer.valueOf(fieldString);
                        //根据父亲id获取到父评论
                        Evaluate daddyEvaluate = evaluateService.getEvaluateByEvaluateId(fatherEvaluateId);
                        evaluate.setOrdersId(daddyEvaluate.getOrdersId());
                        evaluate.setSemaphore(daddyEvaluate.getSemaphore());
                    }
                } else {
                    System.out.println(fileItem.getFieldName() + ": " + fileItem.getName());
                    String picturename = fileItem.getName();
                    //可以用File.separator 兼容不同系统的文件系统分隔符
                    String path = "";
                    String separator = File.separator;
                    System.out.println(separator.equals("\\"));
                    if(separator.equals("/")){

                        path = separator+"Users"+separator+"zazalu"+separator+"Documents"+separator+"MyChannelImg"+separator+"img"+separator+"evaluateImg"+separator+currentTime+separator+picturename;
                        String docPath = separator+"Users"+separator+"zazalu"+separator+"Documents"+separator+"MyChannelImg"+separator+"img"+separator+"evaluateImg"+separator + currentTime;
                        File docFile = new File(docPath);
                        if(!docFile.exists()){
                            docFile.mkdirs();
                        }
                    }else if (separator.equals("\\")){
                        path = "D:"+ separator+"Users"+separator+"zazalu"+separator+"Documents"+separator+"MyChannelImg"+separator+"img"+separator+"evaluateImg"+separator+currentTime+separator+picturename;
                        String docPath = "D:"+ separator+"Users"+separator+"zazalu"+separator+"Documents"+separator+"MyChannelImg"+separator+"img"+separator+"evaluateImg"+separator + currentTime;
                        File docFile = new File(docPath);
                        if(!docFile.exists()){
                            docFile.mkdirs();
                        }
                    }
                    //存放在web项目外的一个文件夹中 所以用的是绝对路径 这个文件夹是一个tomcat虚拟目录
                    fileItem.write(new File(path));
                    //映射到虚拟目录的相对路径写法
                    String relativePath = "/zazaluImg/img/evaluateImg/" +currentTime+"/"+picturename;
                    System.out.println(relativePath);
                    evaluateImgUrlArr.add(relativePath + "&");
                }
            }
            StringBuffer evaluateImgUrlSb = new StringBuffer();
            for (String imgUrl :
                    evaluateImgUrlArr) {
                evaluateImgUrlSb.append(imgUrl);
            }
            String evaluateImgUrl = evaluateImgUrlSb.toString();
            if(!evaluateImgUrl.equals("")){
                evaluate.setEvaluateImgUrl(evaluateImgUrl);
            }
            evaluate.setFatherEvaluateId(fatherEvaluateId);
            evaluate.setEvaluateTime(new Date(currentTime));
            evaluate.setUserId(user);
            evaluateService.addEvaluate(evaluate);
            System.out.println("add evaluate success");
            response.getWriter().write("add evaluate success");
        } catch (FileUploadException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
