package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.Advertisement;
import com.zazalu.entity.Favorite;
import com.zazalu.entity.Good;
import com.zazalu.entity.User;
import com.zazalu.service.FavoriteService;
import com.zazalu.service.GoodService;
import com.zazalu.service.UserService;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

/**
 * Created by zazalu on 4/13/17.
 */
public class FavoriteAction extends ActionSupport{
    //Spring注入
    private UserService userService;
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    //Spring注入
    private GoodService goodService;
    public void setGoodService(GoodService goodService) {
        this.goodService = goodService;
    }

    //Spring注入FavoriteService
    private FavoriteService favoriteService;
    public void setFavoriteService(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    public String addFavorite() throws IOException {
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        String userName = httpServletRequest.getParameter("userName");
        Integer goodId = Integer.parseInt(httpServletRequest.getParameter("goodId"));
        Favorite favorite = new Favorite();
        User user = userService.verifyByName(userName);
        Good good = goodService.getGoodById(goodId);
        favorite.setUserId(user);
        favorite.setGoodId(good);
        favoriteService.addFavorite(favorite);
        httpServletResponse.getWriter().write("addfavorite success");
        return null;
    }

    public String deleteFavorite() throws IOException {
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        String userName = httpServletRequest.getParameter("userName");
        Integer goodId = Integer.parseInt(httpServletRequest.getParameter("goodId"));
        User user = userService.verifyByName(userName);
        Integer userId = user.getUserId();
        favoriteService.deleteFavorite(goodId,userId);
        httpServletResponse.getWriter().write("deleteFavorite success");
        return null;
    }

    public String getUserFavorite(){
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        User user = (User) httpSession.getAttribute("user");
        Integer userId = user.getUserId();
        //获取favorite列表
        try {
            List<Favorite> userfavoritelist = favoriteService.getUserFavoriteList(userId);
            if (userfavoritelist == null) {
                httpServletResponse.getWriter().write("no favorite");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"favoriteList\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            Good good;
            for (Favorite item : userfavoritelist) {
                good = item.getGoodId();
                String jsonObj = "        {\n" +
                        "            \"GoodId\": " + good.getGoodId() + ",\n" +
                        "            \"GoodName\": \"" + good.getGoodName() + "\",\n" +
                        "            \"GoodDescrible\": \"" + good.getGoodDescrible() + "\",\n" +
                        "            \"GoodPrice\": \"" + good.getGoodPrice() + "\",\n" +
                        "            \"GoodStock\": \"" + good.getGoodStock() + "\",\n" +
                        "            \"GoodImgUrl164\": \"" + good.getGoodImgUrl164() + "\",\n" +
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


    public String verifyGoodIsFavorite() throws IOException {
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        Integer goodId = Integer.valueOf(httpServletRequest.getParameter("goodId"));
        User user = (User) httpSession.getAttribute("user");
        Favorite favorite = favoriteService.getFavorite(user.getUserId(),goodId);
        if(favorite == null){
            httpServletResponse.getWriter().write("noLike");
        }else {
            httpServletResponse.getWriter().write("isLike");
        }
        return null;
    }
}
