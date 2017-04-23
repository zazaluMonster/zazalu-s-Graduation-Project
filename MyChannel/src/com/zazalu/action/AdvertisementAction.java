package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.Advertisement;
import com.zazalu.entity.Good;
import com.zazalu.service.AdvertisementService;
import com.zazalu.service.GoodService;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

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

    public String getAdsList() throws IOException {
        System.out.println("start to get All ads list");
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        //获取ads列表
        try {
            List<Advertisement> advertisementList = advertisementService.getAdsList();
            if (advertisementList == null) {
                httpServletResponse.getWriter().write("no ads");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"ads\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            Good good;
            for (Advertisement item : advertisementList) {
                //临时变量 储存了每个ads的Good
                good = item.getGoodId();
                String jsonObj = "        {\n" +
                        "            \"AdsId\": " + item.getAdsId() + ",\n" +
                        "            \"AdsImgUrl\": \"" + item.getAdsImgUrl() + "\",\n" +
                        "            \"GoodId\": \"" + good.getGoodId() + "\",\n" +
                        "            \"GoodName\": \"" + good.getGoodName() + "\",\n" +
                        "            \"GoodDescrible\": \"" + good.getGoodDescrible() + "\",\n" +
                        "            \"GoodStock\": \"" + good.getGoodStock() + "\",\n" +
                        "            \"GoodPoint\": \"" + good.getGoodPoint() + "\",\n" +
                        "            \"GoodDiscount\": \"" + good.getGoodDiscount() + "\",\n" +
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

    public String deleteAds() throws IOException {
        System.out.println("start to delete Ads");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        String adsId = httpServletRequest.getParameter("adsId");
        advertisementService.deleteAdsById(Integer.valueOf(adsId));
        System.out.println("delete Ads success!");
        httpServletResponse.getWriter().write("delete Ads success!");
        return null;
    }
}
