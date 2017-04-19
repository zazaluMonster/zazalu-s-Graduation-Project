package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.Favorite;
import com.zazalu.entity.Good;
import com.zazalu.entity.User;
import com.zazalu.service.FavoriteService;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by zazalu on 4/13/17.
 */
public class FavoriteAction extends ActionSupport{

    //Spring注入
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    //Spring注入FavoriteService
    private FavoriteService favoriteService;
    public void setFavoriteService(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    public String addFavorite(){
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        Integer userId = Integer.parseInt(httpServletRequest.getParameter("UserId"));
        Integer goodId = Integer.parseInt(httpServletRequest.getParameter("GoodId"));

        Favorite favorite = new Favorite();

        User user = hibernateTemplate.get(User.class,userId);
        Good good = hibernateTemplate.get(Good.class,goodId);
        favorite.setUserId(user);
        favorite.setGoodId(good);

        favoriteService.addFavorite(favorite);
        return "success";
    }
}
