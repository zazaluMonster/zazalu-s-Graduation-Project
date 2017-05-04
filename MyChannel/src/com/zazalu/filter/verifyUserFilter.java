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
public class verifyUserFilter implements Filter {


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
        if (uri.equals("/MyChannel/JSP/login.jsp")) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }
        //放行资源
        int i = uri.lastIndexOf(".");
        if (i != -1) {
            String houzhui = uri.substring(i);
            if (houzhui.equals(".js") || houzhui.equals(".css") || houzhui.equals(".png") || houzhui.equals(".jpg")
                    || houzhui.equals(".mp3") || houzhui.equals(".json")) {
                System.out.println("d");
                filterChain.doFilter(servletRequest, servletResponse);
                return;
            }
        }

        if (uri.length() > 20) {
            String uriSub = uri.substring(0, 21);
            if (uriSub.equals("/MyChannel/userAction")) {
                filterChain.doFilter(servletRequest, servletResponse);
                return;
            }
            String uriLongSub = uri.substring(0, 25);
            if (uriLongSub.equals("/MyChannel/JSP/userAction")) {
                filterChain.doFilter(servletRequest, servletResponse);
                return;
            }
        }

        HttpSession session = servletRequest1.getSession();
        User user = (User) session.getAttribute("user");
        if (user == null) {
            returnToLogin(servletResponse1);
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
