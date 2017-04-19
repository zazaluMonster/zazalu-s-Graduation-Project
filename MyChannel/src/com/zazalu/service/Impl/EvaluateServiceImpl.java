package com.zazalu.service.Impl;

import com.zazalu.dao.EvaluateDao;
import com.zazalu.entity.Evaluate;
import com.zazalu.service.EvaluateService;

/**
 * Created by zazalu on 4/14/17.
 */
public class EvaluateServiceImpl implements EvaluateService{

    private EvaluateDao evaluateDao;
    public void setEvaluateDao(EvaluateDao evaluateDao) {
        this.evaluateDao = evaluateDao;
    }

    @Override
    public void addEvaluate(Evaluate evaluate) {
        evaluateDao.save(evaluate);
    }
}
