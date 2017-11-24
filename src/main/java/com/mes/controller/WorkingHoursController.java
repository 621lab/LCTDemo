package com.mes.controller;

import com.mes.model.analysisData;
import com.mes.service.processCyclServ;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping("/workingHours")
public class WorkingHoursController {
    private Logger logger = LoggerFactory.getLogger(WorkingHoursController.class);

    @Resource(name = "processCycleServ")
    private processCyclServ processCyclServ;

    @RequestMapping(value = "/analyze",method = RequestMethod.POST)
    public @ResponseBody Map<String,List<analysisData>> doAnalyze(@RequestParam(value="startTime",required = false,defaultValue = "")String start,@RequestParam(value = "endTime",required = false,defaultValue = "")String end,
                                                                  @RequestParam(value = "workshop",required = false,defaultValue = "")String workshop,@RequestParam(value = "trainType",required = false,defaultValue = "")String trainType) throws ParseException {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.ms", Locale.US);
        String startTime,endTime;
        String sql = null;
        if (!start.isEmpty() && !end.isEmpty()){

            startTime = simpleDateFormat.format(simpleDateFormat.parse(start+ " 00:00:00.00"));
            endTime = simpleDateFormat.format(simpleDateFormat.parse(end  + " 23:59:59.00"));

            if(!workshop.isEmpty() && trainType.isEmpty()){
                sql="SELECT detail.wbs,avg(detail.extend) from (select wbs,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail where  workshop = '"+workshop+"' and process_time between '"+startTime+"' and '"+endTime+"' group by process_time) as detail where detail.extend >0 GROUP BY detail.wbs";
            }
            if(!trainType.isEmpty() && workshop.isEmpty()){
                sql="SELECT detail.wbs,avg(detail.extend) from (select wbs,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail where  trainType = '"+trainType+"' and process_time between '"+startTime+"' and '"+endTime+"' group by process_time) as detail where detail.extend >0 GROUP BY detail.wbs";
            }
            if(!workshop.isEmpty() && !trainType.isEmpty()){
                sql="SELECT detail.wbs,avg(detail.extend) from (select wbs,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail where workshop = '"+workshop+"' and trainType like '"+trainType+"' and process_time between '"+startTime+"' and '"+endTime+"' group by process_time) as detail where detail.extend >0 GROUP BY detail.wbs";

            }
            if(workshop.isEmpty() && trainType.isEmpty()){
                sql="SELECT detail.wbs,avg(detail.extend) from (select wbs,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail where process_time between '"+startTime+"' and '"+endTime+"' group by process_time) as detail where detail.extend >0 GROUP BY detail.wbs";
            }

        }else{
            if(!workshop.isEmpty() && trainType.isEmpty()){
                sql="SELECT detail.wbs,avg(detail.extend) from (select wbs,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail where  workshop = '"+workshop+"' group by process_time) as detail where detail.extend >0 GROUP BY detail.wbs";
            }
            if(!trainType.isEmpty() && workshop.isEmpty()){
                sql="SELECT detail.wbs,avg(detail.extend) from (select wbs,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail where  trainType = '"+trainType+"' group by process_time) as detail where detail.extend >0 GROUP BY detail.wbs";
            }
            if(!workshop.isEmpty() && !trainType.isEmpty()){
                sql="SELECT detail.wbs,avg(detail.extend) from (select wbs,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail where workshop = '"+workshop+"' and trainType like '"+trainType+"' group by process_time) as detail where detail.extend >0 GROUP BY detail.wbs";
            }
            if(trainType.isEmpty() && workshop.isEmpty()){
                sql="SELECT detail.wbs,avg(detail.extend) from (select wbs,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail  group by process_time) as detail where detail.extend >0 GROUP BY detail.wbs";
            }
        }

        Map<String,List<analysisData>> map = new HashMap<>();
        List<analysisData> analysisDataList = null;
        analysisDataList = processCyclServ.getAnalysisData(sql);

        List<analysisData> resList1 = new ArrayList<>();
        List<analysisData> resList2 = new ArrayList<>();
        List<analysisData> resList3 = new ArrayList<>();
        List<analysisData> resList4 = new ArrayList<>();
        List<analysisData> resList5 = new ArrayList<>();
        List<analysisData> resList6 = new ArrayList<>();
        for(analysisData a :analysisDataList){
            double extend = Double.parseDouble(a.getExtend());
            if(extend <= 10.00){
                resList1.add(a);
            }else if (extend >10.00 && extend <20.00 ){
                resList2.add(a);
            }else if (extend >20.00 && extend <30.00 ){
                resList3.add(a);
            }else if (extend >30.00 && extend <40.00 ){
                resList4.add(a);
            }else if (extend >50.00 && extend <60.00 ){
                resList5.add(a);
            }else{
                resList6.add(a);
            }
        }
        if(!resList1.isEmpty()){
            map.put("10",resList1);
        }
        if(!resList2.isEmpty()){
            map.put("20",resList2);
        }
        if(!resList3.isEmpty()){
            map.put("30",resList3);
        }
        if(!resList4.isEmpty()){
            map.put("40",resList4);
        }
        if(!resList5.isEmpty()){
            map.put("50",resList5);
        }
        if(!resList6.isEmpty()){
            map.put("60",resList6);
        }
        return map;
    }

    @RequestMapping(value = "/optimize",method = RequestMethod.POST)
    public @ResponseBody List<analysisData> doOptimize(@RequestParam(value = "wbs",required = false,defaultValue = "GT-C021.P.001.01")String wbs,@RequestParam(value = "startTime",required = false,defaultValue = "")String start, @RequestParam(value = "endTime",required = false,defaultValue = "")String end) throws SQLException, ParseException {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.ms", Locale.US);
        String startTime,endTime;
        String sql;
        if (wbs.isEmpty()){
            wbs = "GT-C021.P.001.01";
        }
        if (!start.isEmpty() && !end.isEmpty()){
            startTime = simpleDateFormat.format(simpleDateFormat.parse(start+ " 00:00:00.00"));
            endTime = simpleDateFormat.format(simpleDateFormat.parse(end  + " 23:59:59.00"));
            sql = "select train_id,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail where wbs like '"+wbs+"' and process_time between '"+startTime+"' and '"+endTime+"' group by process_time order by process_time";
        }else{
            sql = "select train_id,round(((sum(live_hours) - time_rating)/time_rating)*100,2) as extend from v_process_detail where wbs like '"+wbs+"' group by process_time order by process_time";
        }
        List<analysisData> analysisDataList = null;
        analysisDataList = processCyclServ.getAnalysisData(sql);
        return analysisDataList;
    }
}
