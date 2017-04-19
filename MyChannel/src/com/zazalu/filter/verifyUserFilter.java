package com.zazalu.filter;

import com.zazalu.entity.User;
import org.apache.struts2.ServletActionContext;
import org.springframework.orm.hibernate4.HibernateTemplate;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by zazalu on 4/14/17.
 */
public class verifyUserFilter implements Filter{



    //Spring注入HibernateTemplate
    private HibernateTemplate hibernateTemplate;
    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest servletRequest1 = (HttpServletRequest) servletRequest;
        HttpServletResponse servletResponse1 = (HttpServletResponse) servletResponse;
        String uri = servletRequest1.getRequestURI();
        System.out.println(uri);
        if(uri.equals("/MyChannel/JSP/login.jsp")){
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }
        HttpSession session = servletRequest1.getSession();
        String userId = (String) session.getAttribute("userId");
        if (userId == null){
            returnToLogin(servletResponse1);
            System.out.println("1");
            return;
        }
        User user = hibernateTemplate.get(User.class,userId);
        if(user == null){
            returnToLogin(servletResponse1);
            System.out.println("1");
            return;
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }

    public void returnToLogin(HttpServletResponse servletResponse1) throws IOException {
        servletResponse1.sendRedirect("/MyChannel/JSP/login.jsp");
    }
}
