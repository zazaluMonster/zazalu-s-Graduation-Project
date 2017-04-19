package com.zazalu.action;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.zazalu.entity.Tag;
import com.zazalu.service.TagService;

/**
 * Created by zazalu on 4/14/17.
 */
public class TagAction extends ActionSupport implements ModelDriven<Tag>{
    //模型驱动
    private Tag tag = new Tag();
    @Override
    public Tag getModel() {
        return tag;
    }

    //Spring注入TagService
    private TagService tagService;
    public void setTagService(TagService tagService) {
        this.tagService = tagService;
    }

    //业务功能实现
    public String addTag(){
        tagService.addTag(tag);
        return "success";
    }
}
