package com.mes.controller;

import com.mes.model.selectorData;
import com.mes.service.SelectorServ;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/selector")
public class SelectorController  {

    @Resource(name = "SelectorServ")
    SelectorServ selectorServ;

    @RequestMapping(value = "/trainType",method = RequestMethod.POST)
    public @ResponseBody List<selectorData> getTrainType(){
//        String sql = "select trainType from ross_process_info GROUP BY trainType";
        String sql = "SELECT TRAIN_NUMBER from ross_WORKING_HOURS WHERE TRAIN_NUMBER IS NOT NULL GROUP BY TRAIN_NUMBER";

        List<selectorData> list = null;
        try{
            list = selectorServ.getSelectorData(sql);
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }
    @RequestMapping(value = "/workShop",method = RequestMethod.POST)
    public @ResponseBody List<selectorData> getWorkShop(){
//        String sql = "select workshop from v_process_detail GROUP BY workshop;";
        String sql = "SELECT WORKSHOP_NAME FROM ross_PROCESS_TEAM_INFO WHERE WORKSHOP_NAME IS NOT NULL GROUP BY WORKSHOP_NAME";

        List<selectorData> list = null;
        try{
            list = selectorServ.getSelectorData(sql);
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    @RequestMapping(value = "/secondLevel",method = RequestMethod.POST)
    public @ResponseBody List<selectorData> getSecondLevel(@RequestParam("trainType")String trainType){
        String sql = "select wbs from ross_process_info  where trainType like '"+trainType+"' ";

        List<selectorData> list = null;
        try{
            list = selectorServ.getSelectorData(sql);
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    @RequestMapping(value = "/autoComplete",method = RequestMethod.POST)
    public @ResponseBody List<selectorData> getAutoComplete(){
//        String sql = "select wbs from ross_process_info GROUP BY wbs";
        String sql = "SELECT PROCESS_ID FROM ross_WORKING_HOURS WHERE PROCESS_ID IS NOT NULL GROUP BY PROCESS_ID ORDER BY PROCESS_ID";
        List<selectorData> list = null;
        try{
            list = selectorServ.getSelectorData(sql);
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

}
