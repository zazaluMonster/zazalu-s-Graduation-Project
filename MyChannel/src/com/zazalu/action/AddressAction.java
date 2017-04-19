package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.Address;
import com.zazalu.entity.User;
import com.zazalu.service.AddressService;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by zazalu on 4/14/17.
 */
public class AddressAction extends ActionSupport{
    //Spring注入
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }
    //Spring注入Service
    private AddressService addressService;
    public void setAddressService(AddressService addressService) {
        this.addressService = addressService;
    }

    //业务实现
    public String addAddress(){
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        String addressPlace = httpServletRequest.getParameter("AddressPlace");
        String addressDetail = httpServletRequest.getParameter("AddressDetail");
        String addressTel = httpServletRequest.getParameter("AddressTel");
        String rewardPeople = httpServletRequest.getParameter("RewardPeople");
        Integer isDefault = Integer.parseInt(httpServletRequest.getParameter("isDefault"));
        Integer userId = Integer.parseInt(httpServletRequest.getParameter("UserId"));

        User user = hibernateTemplate.get(User.class,userId);

        Address address = new Address();
        address.setAddressPlace(addressPlace);
        address.setAddressDetail(addressDetail);
        address.setAddressTel(addressTel);
        address.setRewardPeople(rewardPeople);
        address.setIsDefault(isDefault);
        address.setUserId(user);

        addressService.addAddress(address);
        return "success";
    }
}
