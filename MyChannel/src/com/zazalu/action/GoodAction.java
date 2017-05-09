package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.zazalu.entity.Advertisement;
import com.zazalu.entity.Good;
import com.zazalu.entity.User;
import com.zazalu.service.GoodService;
import com.zazalu.service.UserService;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

public class GoodAction extends ActionSupport implements ModelDriven<Good>{
/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	//	模型驱动
	private Good good = new Good();
	
	@Override
	public Good getModel() {
		return good;
	}
//	Spring注入Service
    private GoodService goodService;
    public void setGoodService(GoodService goodService) {
        this.goodService = goodService;
    }

    //  业务功能实现
	public String register(){
		goodService.register(good);
		return "success";
	}

	public String getGoodList() throws IOException {
		System.out.println("start to get All good list");
		HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
		//获取good列表
		try {
			List<Good> goodList = goodService.getGoodList();
			if (goodList == null) {
				httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
				httpServletResponse.setCharacterEncoding("UTF-8");
				httpServletResponse.getWriter().write("no good");
				return null;
			}
			//组装成json数据
			String jsonLeft = "{\n" +
					"    \"good\": [\n";
			String jsonRight = "    ]\n" +
					"}";
			String json = jsonLeft;
			Good good;
			for (Good item : goodList) {
				String jsonObj = "        {\n" +
						"            \"GoodId\": " + item.getGoodId() + ",\n" +
						"            \"GoodName\": \"" + item.getGoodName() + "\",\n" +
						"            \"GoodDescrible\": \"" + item.getGoodDescrible() + "\",\n" +
						"            \"GoodStock\": \"" + item.getGoodStock() + "\",\n" +
						"            \"GoodImgUrl430\": \"" + item.getGoodImgUrl430() + "\",\n" +
						"            \"GoodPoint\": \"" + item.getGoodPoint() + "\",\n" +
						"            \"GoodDiscount\": \"" + item.getGoodDiscount() + "\",\n" +
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

    public String getGoodListByPageIndex() throws IOException {
        System.out.println("start to get good list by pageIndex");
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        Integer pageIndex = Integer.valueOf(httpServletRequest.getParameter("pageIndex"));
        //获取good列表
        try {
            List<Good> goodList = goodService.getGoodListByPageIndex(pageIndex);
            if (goodList == null) {
                httpServletResponse.getWriter().write("no good");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"good\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            Good good;
            for (Good item : goodList) {
                String jsonObj = "        {\n" +
                        "            \"GoodId\": " + item.getGoodId() + ",\n" +
                        "            \"GoodName\": \"" + item.getGoodName() + "\",\n" +
                        "            \"GoodDescrible\": \"" + item.getGoodDescrible() + "\",\n" +
                        "            \"GoodStock\": \"" + item.getGoodStock() + "\",\n" +
                        "            \"GoodImgUrl430\": \"" + item.getGoodImgUrl430() + "\",\n" +
                        "            \"GoodDiscount\": \"" + item.getGoodDiscount() + "\",\n" +
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

    public String deleteGood() throws IOException {
        System.out.println("start to delete Good");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        String goodId = httpServletRequest.getParameter("goodId");
        goodService.deleteGoodById(Integer.valueOf(goodId));
        System.out.println("delete Good success!");
        httpServletResponse.getWriter().write("delete Good success!");
        return null;
    }

    public String saveGoodToHttpSession() throws IOException {
        System.out.println("Start to save Good to HttpSession");
        try{
            HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
            HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
            HttpSession httpSession = httpServletRequest.getSession();
            Integer goodId = Integer.valueOf(httpServletRequest.getParameter("goodId"));
            Good good = goodService.getGoodById(goodId);
            httpSession.setAttribute("good",good);
            //session存储完毕 转发至商品详细信息页面
            httpServletResponse.getWriter().write("save to session ok");
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public String toGoodPage(){
        System.out.println("start to redirect to good page by goodid");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpSession httpSession = httpServletRequest.getSession();
        Integer goodId = Integer.valueOf(httpServletRequest.getParameter("goodId"));
        Good good = goodService.getGoodById(goodId);
        //刷新session中的Good信息
        httpSession.setAttribute("good",good);
        System.out.println("ready to redirect to goodPage!");
        //重定向至商品详细页面
        return "toGoodPage";   // /MyChannel/JSP/GoodPage.jsp
    }


    public String getGoodNumber() throws IOException {
		System.out.println("Start to get Good Number");
		Integer goodNumber = goodService.getGoodNumber();
		HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
		httpServletResponse.getWriter().write(""+goodNumber);
		return null;
	}

	public String getGoodListByGoodName(){
        System.out.println("start to get GoodList by good name");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse =ServletActionContext.getResponse();
        String goodName = httpServletRequest.getParameter("goodName");
        //获取good列表
        try {
            List<Good> goodList = goodService.getGoodListByGoodName(goodName);
            if (goodList == null) {
                httpServletResponse.getWriter().write("no this good");
                return null;
            }
            //组装成json数据
            String jsonLeft = "{\n" +
                    "    \"good\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            Good good;
            for (Good item : goodList) {
                String jsonObj = "        {\n" +
                        "            \"GoodId\": " + item.getGoodId() + ",\n" +
                        "            \"GoodName\": \"" + item.getGoodName() + "\",\n" +
                        "            \"GoodDescrible\": \"" + item.getGoodDescrible() + "\",\n" +
                        "            \"GoodStock\": \"" + item.getGoodStock() + "\",\n" +
                        "            \"GoodImgUrl164\": \"" + item.getGoodImgUrl164() + "\",\n" +
                        "            \"GoodDiscount\": \"" + item.getGoodDiscount() + "\",\n" +
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


    public String verifyGoodName() throws IOException {
        System.out.println("start to verify goodName");
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        String goodName = httpServletRequest.getParameter("goodName");
        Good good = goodService.getGoodByName(goodName);
        System.out.println("wdwd");
        if(good!= null){
            System.out.println("already have this good");
            httpServletResponse.getWriter().write("already have this good");
        }else {
            System.out.println("no this good");
            httpServletResponse.getWriter().write("no this good");
        }
        return null;
    }
}
