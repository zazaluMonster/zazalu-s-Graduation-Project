package com.zazalu.service;

import com.zazalu.entity.Evaluate;

import java.util.List;

/**
 * Created by zazalu on 4/14/17.
 */
public interface EvaluateService {
    void addEvaluate(Evaluate evaluate);

    List<Evaluate> getEvaluateByOrderId(Integer orderId, Boolean isFatherEvaluate);

    List<Evaluate> getEvaluateByFatherEvaluateId(Integer fatherEvaluateId);

    Evaluate getEvaluateByEvaluateId(Integer evaluateId);

    Integer getEvaluateNumberByOrderId(Integer orderId);

}
