package com.zazalu.service.Impl;

import com.zazalu.dao.TagDao;
import com.zazalu.entity.Tag;
import com.zazalu.service.TagService;

/**
 * Created by zazalu on 4/14/17.
 */
public class TagServiceImpl implements TagService{

    private TagDao tagDao;
    public void setTagDao(TagDao tagDao) {
        this.tagDao = tagDao;
    }

    @Override
    public void addTag(Tag tag) {
        tagDao.save(tag);
    }
}
