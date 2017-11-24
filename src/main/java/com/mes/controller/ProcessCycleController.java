package com.mes.controller;

import com.mes.model.analysisData;
import com.mes.model.optimizeData;
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
import java.util.List;
import java.util.Locale;

@Controller
@RequestMapping("/processCycle")
public class ProcessCycleController {
    private Logger logger = LoggerFactory.getLogger(ProcessCycleController.class);

    @Resource(name = "processCycleServ")
    private processCyclServ processCyclServ;

    @RequestMapping(value = "/analyze",method = RequestMethod.POST)
    public @ResponseBody List<analysisData> doAnalyze(@RequestParam(value="startTime",required = false,defaultValue = "")String start,@RequestParam(value = "endTime",required = false,defaultValue = "")String end,
                                                      @RequestParam(value = "workshop",required = false,defaultValue = "")String workshop,@RequestParam(value = "trainType",required = false,defaultValue = "")String trainType,@RequestParam(value = "flag",required = false,defaultValue = "0")int flag) throws ParseException {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss.ms", Locale.US);
        String startTime,endTime;
        String sql = null;
        String condition = null;
        String condition1 = "";
        String condition2 = " AND ((MANU_CYCLE- PROCESS_CYCLE)/PROCESS_CYCLE) *100<100 AND ((MANU_CYCLE- PROCESS_CYCLE)/PROCESS_CYCLE) *100>-90";
        condition = (flag==0)?condition1:condition2;
        if (!start.isEmpty() && !end.isEmpty()){

            startTime = simpleDateFormat.format(simpleDateFormat.parse(start+ " 00:00:00.00"));
            endTime = simpleDateFormat.format(simpleDateFormat.parse(end  + " 23:59:59.00"));

            if(!workshop.isEmpty() && trainType.isEmpty()){
//                sql = "SELECT detail.wbs,round(avg(detail.extend),2) as extend from(select wbs,workshop,trainType,((manu_cycle - process_cycle)/process_cycle)*100 as extend,process_time as process_time from v_process_detail GROUP BY wbs,process_time) as detail where detail.workshop = '"+workshop+"' and  detail.process_time BETWEEN '"+startTime+"' AND '"+endTime+"' GROUP BY wbs ORDER BY avg(detail.extend) desc";
                  sql = "select PROCESS_ID,min(PROCESS_NAME),round(avg(((manu_cycle - process_cycle)/process_cycle)*100),2) as extend from ross_WORKING_HOURS w,ross_PROCESS_TEAM_INFO t WHERE " +
                        "to_date('"+startTime+"','yyyy/mm/dd hh24:mi:ss')<= to_date(OP_START,'yyyy/mm/dd hh24:mi:ss') AND " +
                        "to_date('"+endTime+"','yyyy/mm/dd hh24:mi:ss') >= to_date(OP_END,'yyyy/mm/dd hh24:mi:ss') AND w.TEAM_ID = t.TEAM_ID " +
                        "AND t.WORKSHOP_NAME = '"+workshop+"' and MANU_CYCLE != 0 and PROCESS_CYCLE != 0 and OP_START IS NOT NULL and OP_END IS NOT NULL" +
                        " GROUP BY PROCESS_ID ORDER BY extend DESC";
            }
            if(!trainType.isEmpty() && workshop.isEmpty()){
//                sql = "SELECT detail.wbs,round(avg(detail.extend),2) as extend from(select wbs,workshop,trainType,((manu_cycle - process_cycle)/process_cycle)*100 as extend,process_time as process_time from v_process_detail GROUP BY wbs,process_time) as detail where detail.trainType = '"+trainType+"' and detail.process_time BETWEEN '"+startTime+"' AND '"+endTime+"' GROUP BY wbs ORDER BY avg(detail.extend) desc";
                  sql = "select PROCESS_ID,min(PROCESS_NAME),min(PROCESS_NAME),round(avg(((manu_cycle - process_cycle)/process_cycle)*100),2) as extend from ross_WORKING_HOURS WHERE " +
                        "to_date('"+startTime+"','yyyy/mm/dd hh24:mi:ss')<= to_date(OP_START,'yyyy/mm/dd hh24:mi:ss') AND " +
                        "to_date('"+endTime+"','yyyy/mm/dd hh24:mi:ss') >= to_date(OP_END,'yyyy/mm/dd hh24:mi:ss') AND " +
                        "TRAIN_NUMBER = '"+trainType+"' and MANU_CYCLE != 0 and PROCESS_CYCLE != 0 and OP_START IS NOT NULL and OP_END IS NOT NULL GROUP BY PROCESS_ID ORDER BY  extend DESC";
            }
            if(!workshop.isEmpty() && !trainType.isEmpty()){
//                sql = "SELECT detail.wbs,round(avg(detail.extend),2) as extend from(select wbs,workshop,trainType,((manu_cycle - process_cycle)/process_cycle)*100 as extend,process_time as process_time from v_process_detail GROUP BY wbs,process_time) as detail where detail.workshop = '"+workshop+"' and detail.trainType = '"+trainType+"' and detail.process_time BETWEEN '"+startTime+"' AND '"+endTime+"' GROUP BY wbs ORDER BY avg(detail.extend) desc";
                sql = "select PROCESS_ID,min(PROCESS_NAME),round(avg(((manu_cycle - process_cycle)/process_cycle)*100),2) as extend from ross_WORKING_HOURS w,ross_PROCESS_TEAM_INFO t WHERE " +
                        "to_date('"+startTime+"','yyyy/mm/dd hh24:mi:ss')<= to_date(OP_START,'yyyy/mm/dd hh24:mi:ss') AND " +
                        "to_date('"+endTime+"','yyyy/mm/dd hh24:mi:ss') >= to_date(OP_END,'yyyy/mm/dd hh24:mi:ss') AND w.TEAM_ID = t.TEAM_ID " +
                        "AND t.WORKSHOP_NAME = '"+workshop+"'" +
                        "AND TRAIN_NUMBER = '"+trainType+"' and MANU_CYCLE != 0 and PROCESS_CYCLE != 0 and OP_START IS NOT NULL and OP_END IS NOT NULL GROUP BY PROCESS_ID ORDER BY  extend DESC";
            }
            if(workshop.isEmpty() && trainType.isEmpty()){
//                sql = "SELECT detail.wbs,round(avg(detail.extend),2) as extend from(select wbs,workshop,trainType,((manu_cycle - process_cycle)/process_cycle)*100 as extend,process_time as process_time from v_process_detail GROUP BY wbs,process_time) as detail where detail.process_time BETWEEN '"+startTime+"' AND '"+endTime+"' GROUP BY wbs ORDER BY avg(detail.extend) desc";
                sql = "select PROCESS_ID,min(PROCESS_NAME),round(avg(((manu_cycle - process_cycle)/process_cycle)*100),2) as extend from ross_WORKING_HOURS WHERE " +
                        "to_date('"+startTime+"','yyyy/mm/dd hh24:mi:ss')<= to_date(OP_START,'yyyy/mm/dd hh24:mi:ss') AND " +
                        "to_date('"+endTime+"','yyyy/mm/dd hh24:mi:ss') >= to_date(OP_END,'yyyy/mm/dd hh24:mi:ss') and MANU_CYCLE != 0 and PROCESS_CYCLE != 0 and OP_START IS NOT NULL and OP_END IS NOT NULL" +
                        " GROUP BY PROCESS_ID ORDER BY extend DESC";
            }

        }else{
            if(!workshop.isEmpty() && trainType.isEmpty()){
//                sql = "SELECT detail.wbs,round(avg(detail.extend),2) as extend from(select wbs,workshop,trainType,((manu_cycle - process_cycle)/process_cycle)*100 as extend,process_time as process_time from v_process_detail GROUP BY wbs,process_time) as detail where detail.workshop = '"+workshop+"' GROUP BY wbs ORDER BY avg(detail.extend) desc";
                sql = "select PROCESS_ID,min(PROCESS_NAME),round(avg(((manu_cycle - process_cycle)/process_cycle)*100),2) as extend from ross_WORKING_HOURS w,ross_PROCESS_TEAM_INFO t WHERE t.TEAM_ID = w.TEAM_ID and t.WORKSHOP_NAME = '"+workshop+"' and MANU_CYCLE != 0 and PROCESS_CYCLE != 0 and OP_START IS NOT NULL and OP_END IS NOT NULL" + condition + " GROUP BY PROCESS_ID ORDER BY  extend DESC";
            }
            if(!trainType.isEmpty() && workshop.isEmpty()){
//                sql = "SELECT detail.wbs,round(avg(detail.extend),2) as extend from(select wbs,workshop,trainType,((manu_cycle - process_cycle)/process_cycle)*100 as extend,process_time as process_time from v_process_detail GROUP BY wbs,process_time) as detail where detail.trainType = '"+trainType+"' GROUP BY wbs ORDER BY avg(detail.extend) desc";
                sql = "select PROCESS_ID,min(PROCESS_NAME),round(avg(((manu_cycle - process_cycle)/process_cycle)*100),2) as extend from ross_WORKING_HOURS WHERE TRAIN_NUMBER = '"+trainType+"' and MANU_CYCLE != 0 and PROCESS_CYCLE != 0 and OP_START IS NOT NULL and OP_END IS NOT NULL " + condition + " GROUP BY PROCESS_ID ORDER BY extend DESC";

            }
            if(!workshop.isEmpty() && !trainType.isEmpty()){
//                sql = "SELECT detail.wbs,round(avg(detail.extend),2) as extend from(select wbs,workshop,trainType,((manu_cycle - process_cycle)/process_cycle)*100 as extend,process_time as process_time from v_process_detail GROUP BY wbs,process_time) as detail where detail.workshop = '"+workshop+"' and detail.trainType like '"+trainType+"' GROUP BY wbs ORDER BY avg(detail.extend) desc";
                sql = "select PROCESS_ID,min(PROCESS_NAME),round(avg(((manu_cycle - process_cycle)/process_cycle)*100),2) as extend from ross_WORKING_HOURS w,ross_PROCESS_TEAM_INFO t WHERE t.TEAM_ID = w.TEAM_ID and t.WORKSHOP_NAME = '"+workshop+"' AND TRAIN_NUMBER = '"+trainType+"' and MANU_CYCLE != 0 and PROCESS_CYCLE != 0 " +
                        " and OP_START IS NOT NULL and OP_END IS NOT NULL GROUP BY PROCESS_ID ORDER BY  extend DESC;";

            }
            if(trainType.isEmpty() && workshop.isEmpty()){
//                sql = "SELECT detail.wbs,round(avg(detail.extend),2) as extend from(select wbs,workshop,trainType,((manu_cycle - process_cycle)/process_cycle)*100 as extend from v_process_detail GROUP BY wbs,process_time) as detail  GROUP BY wbs ORDER BY avg(detail.extend) desc";
                sql = "select PROCESS_ID,min(PROCESS_NAME),round(avg(((manu_cycle - process_cycle)/process_cycle)*100),2) as extend from ross_WORKING_HOURS where " +
                        "MANU_CYCLE != 0 and PROCESS_CYCLE != 0 and OP_START IS NOT NULL and OP_END IS NOT NULL" + condition + "  GROUP BY PROCESS_ID ORDER BY  extend DESC";
            }
        }
        List<analysisData> analysisDataList = null;
        analysisDataList = processCyclServ.getAnalysisData(sql);

        return analysisDataList;
    }

    @RequestMapping(value = "/test",method = RequestMethod.POST)
    public @ResponseBody List<analysisData> doSelect(@RequestParam("id")String id){
        List<analysisData> analysisDataList = null;
        String sql = "select wbs from ross_process_info where trainType like \""+id+"\"";
        analysisDataList = processCyclServ.getAnalysisData(sql);

        return analysisDataList;
    }

    @RequestMapping(value = "/optimize",method = RequestMethod.POST)
    public @ResponseBody optimizeData doOptimize(@RequestParam("processId") String processId,@RequestParam(value = "startTime",required = false,defaultValue = "")String start,@RequestParam(value = "endTime",required = false,defaultValue = "")String end ) throws SQLException, ParseException {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss.ms", Locale.US);
        String startTime,endTime;
        String sql1,sql2,sql3,sql4;
        optimizeData optimizeData = new optimizeData();
        if (!start.isEmpty() && !end.isEmpty()){
            startTime = simpleDateFormat.format(simpleDateFormat.parse(start+ " 00:00:00.00"));
            endTime = simpleDateFormat.format(simpleDateFormat.parse(end  + " 23:59:59.00"));
//            sql1 = "select count(*) as num,detail.manu from (select wbs,process_time as p_time,`manu_cycle` as manu from `v_process_detail` where wbs like '"+wbs+"' and process_time BETWEEN '"+startTime+"' AND '"+endTime+"' group by wbs,process_time order by manu_cycle) as detail group by detail.manu;";
//            sql2 = "select process_cycle from `v_process_detail` where wbs like '"+wbs+"' and process_time BETWEEN '"+startTime+"' AND '"+endTime+"' group by wbs;  ";
//            sql3 = "select round(avg(detail.manu),2) as avg  from (select manu_cycle as manu from `v_process_detail` where wbs like '"+wbs+"' and process_time BETWEEN '"+startTime+"' AND '"+endTime+"' group by wbs,process_time) as detail";
              sql1= "select count(*) as num,MANU_CYCLE from ross_WORKING_HOURS where ross_WORKING_HOURS.PROCESS_ID like '"+processId+"' and MANU_CYCLE > 0 and"+
                      "to_date('"+startTime+"','yyyy/mm/dd hh24:mi:ss')<= to_date(OP_START,'yyyy/mm/dd hh24:mi:ss') AND" +
                      "to_date('"+endTime+"','yyyy/mm/dd hh24:mi:ss') >= to_date(OP_END,'yyyy/mm/dd hh24:mi:ss') and OP_START IS NOT NULL and OP_END IS NOT NULL group by MANU_CYCLE ORDER BY MANU_CYCLE";
              sql2 = "select PROCESS_CYCLE from ross_PROCESS_INFO where PROCESS_ID like '"+processId+"' and " +
                      "to_date('"+startTime+"','yyyy/mm/dd hh24:mi:ss')<= to_date(OP_START,'yyyy/mm/dd hh24:mi:ss') AND" +
                      "to_date('"+endTime+"','yyyy/mm/dd hh24:mi:ss') >= to_date(OP_END,'yyyy/mm/dd hh24:mi:ss') and OP_START IS NOT NULL and OP_END IS NOT NULL GROUP BY PROCESS_CYCLE";
              sql3 = "select round(avg(manu_cycle),2)as avg from ross_WORKING_HOURS where PROCESS_ID like '"+processId+"' and " +
                      "to_date('"+startTime+"','yyyy/mm/dd hh24:mi:ss')<= to_date(OP_START,'yyyy/mm/dd hh24:mi:ss') AND" +
                      "to_date('"+endTime+"','yyyy/mm/dd hh24:mi:ss') >= to_date(OP_END,'yyyy/mm/dd hh24:mi:ss') and OP_START IS NOT NULL and OP_END IS NOT NULL ";
              sql4 =  "select * FROM ROSS_WORKING_HOURS WHERE PROCESS_ID like '"+processId+"' ((MANU_CYCLE- PROCESS_CYCLE)/PROCESS_CYCLE) *100>100";

        }else{
//            sql1 = "select count(*) as num,detail.manu from (select wbs,process_time as p_time,`manu_cycle` as manu from `v_process_detail` where wbs like '"+wbs+"' group by wbs,process_time order by manu_cycle) as detail group by detail.manu;";
//            sql2 = "select process_cycle from `v_process_detail` where wbs like '"+wbs+"' group by wbs;  ";
//            sql3 = "select round(avg(detail.manu),2) as avg  from (select manu_cycle as manu from `v_process_detail` where wbs like '"+wbs+"' group by wbs,process_time) as detail";
            sql1= "select  count(*) as num,MANU_CYCLE from ross_WORKING_HOURS where ross_WORKING_HOURS.PROCESS_ID like '"+processId+"'  and MANU_CYCLE > 0 group by MANU_CYCLE ORDER BY MANU_CYCLE";
            sql2 = "select * from (select PROCESS_CYCLE from ross_WORKING_HOURS where PROCESS_ID like '"+processId+"' GROUP BY PROCESS_CYCLE order by PROCESS_CYCLE desc) WHERE ROWNUM <2";
            sql3 = "select round(avg(manu_cycle),2)as avg from ross_WORKING_HOURS where PROCESS_ID like '"+processId+"'";
            sql4 =  "select * FROM ROSS_WORKING_HOURS WHERE PROCESS_ID like '"+processId+"' AND ((MANU_CYCLE- PROCESS_CYCLE)/PROCESS_CYCLE) *100>100";
        }
        optimizeData.setAnalysisDataList(processCyclServ.getAnalysisData2(sql1));
        optimizeData.setAnalysisData3List(processCyclServ.getAnalysisData3(sql4));
        optimizeData.setCycle(processCyclServ.getSingleValue(sql2));
        optimizeData.setAvg(processCyclServ.getSingleValue(sql3));
        return optimizeData;
    }
}
