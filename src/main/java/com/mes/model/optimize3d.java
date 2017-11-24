package com.mes.model;

import java.util.List;

public class optimize3d {
    private List<analysisData> analysisDataList;
    private List<selectorData> xAliasList;
    private List<selectorData> yAliasList;

    public List<analysisData> getAnalysisDataList() {
        return analysisDataList;
    }

    public void setAnalysisDataList(List<analysisData> analysisDataList) {
        this.analysisDataList = analysisDataList;
    }

    public List<selectorData> getxAliasList() {
        return xAliasList;
    }

    public void setxAliasList(List<selectorData> xAliasList) {
        this.xAliasList = xAliasList;
    }

    public List<selectorData> getyAliasList() {
        return yAliasList;
    }

    public void setyAliasList(List<selectorData> yAliasList) {
        this.yAliasList = yAliasList;
    }
}
