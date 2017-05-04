package com.zazalu.service.Impl;

import com.zazalu.dao.EvaluateDao;
import com.zazalu.entity.Evaluate;
import com.zazalu.service.EvaluateService;

import java.util.List;

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

    @Override
    public List<Evaluate> getEvaluateByOrderId(Integer orderId, Boolean isFatherEvaluate) {
        return evaluateDao.getEvaluateByOrderId(orderId,isFatherEvaluate);
    }

    @Override
    public List<Evaluate> getEvaluateByFatherEvaluateId(Integer fatherEvaluateId) {
        return evaluateDao.getEvaluateByFatherEvaluateId(fatherEvaluateId);
    }

    @Override
    public Evaluate getEvaluateByEvaluateId(Integer evaluateId) {
        return evaluateDao.getEvaluateByEvaluateId(evaluateId);
    }

    @Override
    public Integer getEvaluateNumberByOrderId(Integer orderId) {
        return evaluateDao.getEvaluateNumberByOrderId(orderId);
    }
}
