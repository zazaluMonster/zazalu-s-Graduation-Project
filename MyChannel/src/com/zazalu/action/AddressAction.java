package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.zazalu.entity.Address;
import com.zazalu.entity.User;
import com.zazalu.service.AddressService;
import com.zazalu.service.UserService;
import org.apache.struts2.ServletActionContext;
import org.hibernate.FlushMode;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

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

    //Spring注入UserService
    private UserService userService;
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    //业务实现

    //根据用户id查询其收货地址Address的集合
    public String getUserAddress() throws IOException {
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        User user = (User) httpSession.getAttribute("user");
        if(user != null){
            Integer userId = user.getUserId();
            List<Address> addressList = addressService.getAddress(userId);
            //将地址集合写成一个json文件
            String jsonLeft = "{\n" +
                    "    \"address\": [\n";
            String jsonRight = "    ]\n" +
                    "}";
            String json = jsonLeft;
            for (Address item:addressList) {
                String jsonObj = "        {\n" +
                        "            \"AddressId\": "+item.getAddressId()+",\n" +
                        "            \"RewardPeople\": \"" + item.getRewardPeople() +"\",\n" +
                        "            \"AddressPlace\": \"" + item.getAddressPlace() +"\",\n" +
                        "            \"AddressDetail\": \"" + item.getAddressDetail() +"\",\n" +
                        "            \"isDefault\": "+item.getIsDefault()+",\n" +
                        "            \"AddressTel\": \""+item.getAddressTel()+"\"\n" +
                        "        },\n";
                json = json + jsonObj;
            }
            json = json + jsonRight;
            System.out.println(json);
            httpServletResponse.setHeader("Content-type", "text/html;charset=UTF-8");  //这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
            httpServletResponse.setCharacterEncoding("UTF-8");
            httpServletResponse.getWriter().write(json);
        }else {
            System.out.println("there's no user in httpsession");
        }
        return null;
    }

    //删除指定收货地址
    public String deleteAddressByAddressId() throws IOException {
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        Integer deletAddressId = Integer.valueOf(httpServletRequest.getParameter("addressId"));
        System.out.println(deletAddressId);
        Boolean ib = addressService.deleteAddressById(deletAddressId);
        if(ib){
            httpServletResponse.getWriter().write("delete success");
        }else {
            httpServletResponse.getWriter().write("delete defeat");
        }
        return null;
    }

    //设定默认地址
    public String setupToDefault() {
        System.out.println("start to setup dafault address");
        //先找到原来的默认地址的id 从而删除它的默认为0
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        User user = (User) httpSession.getAttribute("user");
        Address defaultAddress = addressService.getDefaultAddress(user.getUserId());
        defaultAddress.setIsDefault(0);
        addressService.update(defaultAddress);
        System.out.println(1);
        //将要设定的Address设为默认
        Integer addressId = Integer.valueOf(httpServletRequest.getParameter("addressId"));
        System.out.println(addressId);
        Address newDefaultAddress = addressService.getAddressById(addressId);
        System.out.println(newDefaultAddress.getAddressId());
        newDefaultAddress.setIsDefault(1);
        System.out.println(newDefaultAddress.getIsDefault());
        addressService.update(newDefaultAddress);
        System.out.println("default address change success");
        try {
            httpServletResponse.getWriter().write("default address change success");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }


    //新增默认地址
    public String addNewAddress(){
        System.out.println("start to add new Address");
        //从httpSession中获取UserId
        HttpServletRequest httpServletRequest = ServletActionContext.getRequest();
        HttpServletResponse httpServletResponse = ServletActionContext.getResponse();
        HttpSession httpSession = httpServletRequest.getSession();
        User user = (User) httpSession.getAttribute("user");
        Address address = new Address();
        address.setUserId(user);
        //获取新地址的各项数据，然后保存
        String addressProvince = httpServletRequest.getParameter("addressProvince");
        String addressCity = httpServletRequest.getParameter("addressCity");
        String addressArea = httpServletRequest.getParameter("addressArea");
        if(addressProvince != null && addressCity != null){
            String addressPlace = addressProvince+addressCity+addressArea;
            address.setAddressPlace(addressPlace);
        }
        String addressDetail = httpServletRequest.getParameter("AddressDetail");
        address.setAddressDetail(addressDetail);
        String addressTel = httpServletRequest.getParameter("AddressTel");
        address.setAddressTel(addressTel);
        String addressRewardPeople = httpServletRequest.getParameter("RewardPeople");
        address.setRewardPeople(addressRewardPeople);
        Integer isDefault = 0;
        address.setIsDefault(isDefault);
        addressService.addAddress(address);
        //返回成功

        return "addAddressSuccess"; // addAddressSuccess.jsp
    }
}
