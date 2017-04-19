package com.zazalu.entity;

/**
 * Created by zazalu on 4/14/17.
 */
public class Tag {
    private Integer TagId;
    private String TagName;
    private String TagDescrible;
    private Integer FatherTagId;

    public Integer getTagId() {
        return TagId;
    }

    public void setTagId(Integer tagId) {
        TagId = tagId;
    }

    public String getTagName() {
        return TagName;
    }

    public void setTagName(String tagName) {
        TagName = tagName;
    }

    public String getTagDescrible() {
        return TagDescrible;
    }

    public void setTagDescrible(String tagDescrible) {
        TagDescrible = tagDescrible;
    }

    public Integer getFatherTagId() {
        return FatherTagId;
    }

    public void setFatherTagId(Integer fatherTagId) {
        FatherTagId = fatherTagId;
    }
}
