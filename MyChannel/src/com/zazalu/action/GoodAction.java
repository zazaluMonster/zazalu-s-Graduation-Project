package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.zazalu.entity.Good;
import com.zazalu.entity.User;
import com.zazalu.service.GoodService;
import com.zazalu.service.UserService;

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
}
