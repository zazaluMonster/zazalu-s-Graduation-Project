package com.zazalu.entity;

import java.util.Date;

/**
 * Created by zazalu on 4/14/17.
 */
public class Evaluate {
    private Integer EvaluateId;
    private String EvaluateMessage;
    private Orders OrdersId;
    private Date EvaluateTime;
    private Integer EvaluateStar;
    private String EvaluateImgUrl;
    private Integer FatherEvaluateId;
    private Integer Semaphore;

    public Integer getEvaluateId() {
        return EvaluateId;
    }

    public void setEvaluateId(Integer evaluateId) {
        EvaluateId = evaluateId;
    }

    public String getEvaluateMessage() {
        return EvaluateMessage;
    }

    public void setEvaluateMessage(String evaluateMessage) {
        EvaluateMessage = evaluateMessage;
    }

    public Orders getOrdersId() {
        return OrdersId;
    }

    public void setOrdersId(Orders ordersId) {
        OrdersId = ordersId;
    }

    public Date getEvaluateTime() {
        return EvaluateTime;
    }

    public void setEvaluateTime(Date evaluateTime) {
        EvaluateTime = evaluateTime;
    }

    public Integer getEvaluateStar() {
        return EvaluateStar;
    }

    public void setEvaluateStar(Integer evaluateStar) {
        EvaluateStar = evaluateStar;
    }

    public String getEvaluateImgUrl() {
        return EvaluateImgUrl;
    }

    public void setEvaluateImgUrl(String evaluateImgUrl) {
        EvaluateImgUrl = evaluateImgUrl;
    }

    public Integer getFatherEvaluateId() {
        return FatherEvaluateId;
    }

    public void setFatherEvaluateId(Integer fatherEvaluateId) {
        FatherEvaluateId = fatherEvaluateId;
    }

    public Integer getSemaphore() {
        return Semaphore;
    }

    public void setSemaphore(Integer semaphore) {
        Semaphore = semaphore;
    }
}
