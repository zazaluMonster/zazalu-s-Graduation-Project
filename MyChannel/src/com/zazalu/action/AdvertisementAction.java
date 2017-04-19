package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.Advertisement;
import com.zazalu.entity.Good;
import com.zazalu.service.AdvertisementService;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by zazalu on 4/14/17.
 */
public class AdvertisementAction extends ActionSupport{
    //Spring注入
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }
    //Spring注入AdvertisementService
    private AdvertisementService advertisementService;
    public void setAdvertisementService(AdvertisementService advertisementService) {
        this.advertisementService = advertisementService;
    }

    //业务实现
    public String addAdvertisement(){
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        String adsImgUrl = httpServletRequest.getParameter("AdsImgUrl");
        Integer goodId = Integer.parseInt(httpServletRequest.getParameter("GoodId"));
        Good good = hibernateTemplate.get(Good.class,goodId);

        Advertisement advertisement = new Advertisement();
        advertisement.setAdsImgUrl(adsImgUrl);
        advertisement.setGoodId(good);

        advertisementService.addAdvertisement(advertisement);
        return "success";
    }
}
