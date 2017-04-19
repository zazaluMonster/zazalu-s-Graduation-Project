package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.Evaluate;
import com.zazalu.entity.Orders;
import com.zazalu.service.EvaluateService;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * Created by zazalu on 4/14/17.
 */
public class EvaluateAction extends ActionSupport{
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

    public String addEvaluate(){
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        String evaluateMessage = httpServletRequest.getParameter("EvaluateMessage");
        Integer ordersId = Integer.parseInt(httpServletRequest.getParameter("OrdersId"));
        Integer evaluateStar = Integer.parseInt(httpServletRequest.getParameter("EvaluateStar"));
        String evaluateImgUrl = httpServletRequest.getParameter("EvaluateImgUrl");
        Integer fatherEvaluateId = Integer.parseInt(httpServletRequest.getParameter("FatherEvaluateId"));
        Integer semaphore = Integer.parseInt(httpServletRequest.getParameter("Semaphore"));

        Orders orders = hibernateTemplate.get(Orders.class,ordersId);

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
}
