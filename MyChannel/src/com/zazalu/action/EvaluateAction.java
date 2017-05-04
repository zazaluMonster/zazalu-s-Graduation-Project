package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.Evaluate;
import com.zazalu.entity.Good;
import com.zazalu.entity.Orders;
import com.zazalu.entity.User;
import com.zazalu.service.EvaluateService;
import com.zazalu.service.OrdersService;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by zazalu on 4/14/17.
 */
public class EvaluateAction extends ActionSupport {
    //Spring注入
    private HibernateTemplate hibernateTemplate;

    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    //Spring注入EvaluateService
    private EvaluateService evaluateService;

    public void setEvaluateService(EvaluateService evaluateService) {
        this.evaluateService = evaluateService;
    }

    //Spring注入OrdersService
    private OrdersService ordersService;

    public void setOrdersService(OrdersService ordersService) {
        this.ordersService = ordersService;
    }

    public String addEvaluate() {
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        String evaluateMessage = httpServletRequest.getParameter("EvaluateMessage");
        Integer ordersId = Integer.parseInt(httpServletRequest.getParameter("OrdersId"));
        Integer evaluateStar = Integer.parseInt(httpServletRequest.getParameter("EvaluateStar"));
        String evaluateImgUrl = httpServletRequest.getParameter("EvaluateImgUrl");
        Integer fatherEvaluateId = Integer.parseInt(httpServletRequest.getParameter("FatherEvaluateId"));
        Integer semaphore = Integer.parseInt(httpServletRequest.getParameter("Semaphore"));

        Orders orders = hibernateTemplate.get(Orders.class, ordersId);

        Evaluate evaluate = new Evaluate();
        evaluate.setEvaluateMessage(evaluateMessage);
        evaluate.setOrdersId(orders);
        evaluate.setEvaluateTime(new Date());
        evaluate.setEvaluateStar(evaluateStar);
        evaluate.setEvaluateImgUrl(evaluateImgUrl);
        evaluate.setFatherEvaluateId(fatherEvaluateId);
        evaluate.setSemaphore(semaphore);


        evaluateService.addEvaluate(evaluate);
        return "success";
    }

    public String getFatherEvaluateListByGoodId() {
        System.out.println("start to get father evaluate list by good id");
        try {
            HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
            HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
            HttpSession httpSession = httpServletRequest.getSession();
            Good good = (Good) httpSession.getAttribute("good");
            Integer goodId = good.getGoodId();
            //获取evaluatelist
            //用goodId去搜索所有和此goodId有关的Order
            List<Orders> ordersList = ordersService.getOrdersListByGoodId(goodId);
            //然后使用这个ordersList中一个个orderId去查询evaluate表
            List<Evaluate> evaluateList = new ArrayList<>();
            for (Orders order :
                    ordersList) {
                List<Evaluate> evaluateList1 = evaluateService.getEvaluateByOrderId(order.getOrdersId(),true);
                evaluateList.addAll(evaluateList1);
            }
            if (evaluateList.size() == 0) {
                httpServletResponse.getWriter().write("no evaluate");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"evaluateListByGoodId\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            for (Evaluate item : evaluateList) {
                User user = item.getUserId();
                String jsonObj = "        {\n" +
                        "            \"EvaluateId\": \"" + item.getEvaluateId() + "\",\n" +
                        "            \"EvaluateMessage\": \"" + item.getEvaluateMessage() + "\",\n" +
                        "            \"OrdersId\": \"" + item.getOrdersId().getOrdersId() + "\",\n" +
                        "            \"UserHeadUrl60\": \"" + user.getUserHeadUrl60() + "\",\n" +
                        "            \"UserName\": \"" + user.getUserName() + "\",\n" +
                        "            \"EvaluateTime\": \"" + item.getEvaluateTime().toString() + "\",\n" +
                        "            \"EvaluateImgUrl\": \"" + item.getEvaluateImgUrl() + "\",\n" +
                        "            \"FatherEvaluateId\": \"" + item.getFatherEvaluateId() + "\",\n" +
                        "            \"Semaphore\": \"" + item.getSemaphore() + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getChildEvaluateListByFatherEvaluateId(){
        System.out.println("start to get child evaluate list by good id");
        try {
            HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
            HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
            HttpSession httpSession = httpServletRequest.getSession();
            Integer fatherEvaluateId = Integer.valueOf(httpServletRequest.getParameter("fatherEvaluateId"));
            List<Evaluate> evaluateList = evaluateService.getEvaluateByFatherEvaluateId(fatherEvaluateId);
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"childEvaluateList\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            for (Evaluate item : evaluateList) {
                User user = item.getUserId();
                String jsonObj = "        {\n" +
                        "            \"EvaluateId\": \"" + item.getEvaluateId() + "\",\n" +
                        "            \"EvaluateMessage\": \"" + item.getEvaluateMessage() + "\",\n" +
                        "            \"OrdersId\": \"" + item.getOrdersId().getOrdersId() + "\",\n" +
                        "            \"UserHeadUrl60\": \"" + user.getUserHeadUrl60() + "\",\n" +
                        "            \"UserName\": \"" + user.getUserName() + "\",\n" +
                        "            \"EvaluateTime\": \"" + item.getEvaluateTime().toString() + "\",\n" +
                        "            \"EvaluateImgUrl\": \"" + item.getEvaluateImgUrl() + "\",\n" +
                        "            \"FatherEvaluateId\": \"" + item.getFatherEvaluateId() + "\",\n" +
                        "            \"Semaphore\": \"" + item.getSemaphore() + "\",\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getEvaluateNumberByGoodId() throws IOException {
        System.out.println("start to get EvaluateNumberByGoodId");
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpSession httpSession = httpServletRequest.getSession();
        Integer goodId = Integer.valueOf(httpServletRequest.getParameter("goodId"));
        List<Orders> ordersList = ordersService.getOrdersListByGoodId(goodId);
        Integer evaluateSum = 0;
        for (Orders item :
                ordersList) {
            Integer evaluateNumber = evaluateService.getEvaluateNumberByOrderId(item.getOrdersId());
            evaluateSum = evaluateSum + evaluateNumber;
        }
        String ess = "" + evaluateSum;
        httpServletResponse.getWriter().write(ess);
        return null;
    }
}
