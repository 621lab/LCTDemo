package com.mes.model;

import org.springframework.stereotype.Component;

import java.util.List;

@Component("optimizedata")
public class optimizeData {
    private List<analysisData2> analysisDataList;
    private List<analysisData3> analysisData3List;
    private String cycle;
    private String avg;

    public List<analysisData2> getAnalysisDataList() {
        return analysisDataList;
    }

    public List<analysisData3> getAnalysisData3List() {
        return analysisData3List;
    }

    public void setAnalysisData3List(List<analysisData3> analysisData3List) {
        this.analysisData3List = analysisData3List;
    }

    public void setAnalysisDataList(List<analysisData2> analysisDataList) {
        this.analysisDataList = analysisDataList;
    }

    public String getCycle() {
        return cycle;
    }

    public void setCycle(String cycle) {
        this.cycle = cycle;
    }

    public String getAvg() {
        return avg;
    }

    public void setAvg(String avg) {
        this.avg = avg;
    }
}
