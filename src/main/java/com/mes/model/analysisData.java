package com.mes.model;

import org.springframework.stereotype.Component;

@Component("analysisData")
public class analysisData {

    private String wbs;
    private String name;
    private String extend;


    public String getWbs() {
        return wbs;
    }

    public void setWbs(String wbs) {
        this.wbs = wbs;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExtend() {
        return extend;
    }

    public void setExtend(String extend) {
        this.extend = extend;
    }
}
