package com.mes.controller;


import com.mes.model.analysisData2;
import com.mes.model.optimize3d;
import com.mes.service.JobSizeServ;
import com.mes.service.processCyclServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Locale;

@Controller
@RequestMapping("/jobSize")
public class JobSizeController {

    @Autowired
    private JobSizeServ jobSizeServ;

    @Autowired
    private processCyclServ processCycleServ;

    @RequestMapping(value = "/analyze",method = RequestMethod.POST)
    public @ResponseBody List<analysisData2> doAnalyze(@RequestParam(value = "processId",required = false,defaultValue = "Z000008")String processId,@RequestParam(value = "startTime",required = false,defaultValue = "")String start, @RequestParam(value = "endTime",required = false,defaultValue = "")String end) throws ParseException {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss", Locale.US);
        String startTime,endTime,sql;
        if(processId.isEmpty()){
            processId = "Z000008";
        }
        if (!start.isEmpty() && !end.isEmpty()){
            startTime = simpleDateFormat.format(simpleDateFormat.parse(start+ " 00:00:00"));
            endTime = simpleDateFormat.format(simpleDateFormat.parse(end  + " 23:59:59"));
//            sql = "select wbs,count(*) as num,((manu_cycle - process_cycle)/process_cycle)*100 as extend from v_process_detail where wbs like '"+wbs+"' and process_time BETWEEN '"+startTime+"' AND '"+endTime+"' GROUP BY process_time,wbs ORDER BY wbs,num;";
            sql = "select WORKER_NUM,round(avg((MANU_CYCLE - PROCESS_CYCLE)/PROCESS_CYCLE*100),2) as extend  from ross_WORKING_HOURS where PROCESS_ID like '"+processId+"' and WORKER_NUM IS NOT NULL and " +
                    "to_date('"+startTime+"','yyyy/mm/dd hh24:mi:ss')<= to_date(OP_START,'yyyy/mm/dd hh24:mi:ss') AND " +
                    "to_date('"+endTime+"','yyyy/mm/dd hh24:mi:ss') >= to_date(OP_END,'yyyy/mm/dd hh24:mi:ss') GROUP BY WORKER_NUM ORDER BY WORKER_NUM";
        }else{
//            sql = "select wbs,count(*) as num,((manu_cycle - process_cycle)/process_cycle)*100 as extend from v_process_detail where wbs like '"+wbs+"' GROUP BY process_time,wbs ORDER BY wbs,num;";
            sql = "select WORKER_NUM,round(avg((MANU_CYCLE - PROCESS_CYCLE)/PROCESS_CYCLE*100),2) as extend  from ross_WORKING_HOURS where PROCESS_ID like '"+processId+"' and WORKER_NUM IS NOT NULL " +
                    "GROUP BY WORKER_NUM ORDER BY WORKER_NUM";
        }
//        String sql1 = "select process_time,speed,drive_bearing_temp_1 from Motor_temp where host_id like '11301561' and railway_lines like '3561' and process_time like '2017-03-15 %' GROUP BY process_time";
        List<analysisData2> analysisData2List = null;
        analysisData2List = processCycleServ.getAnalysisData2(sql);
        return analysisData2List;
    }
    @RequestMapping(value = "/optimize",method = RequestMethod.POST)
    public @ResponseBody optimize3d doOptimize(@RequestParam(value = "processId",required = false,defaultValue = "Z000008")String processId, @RequestParam(value = "startTime",required = false,defaultValue = "")String start, @RequestParam(value = "endTime",required = false,defaultValue = "")String end) throws ParseException, SQLException {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss", Locale.US);
        String startTime,endTime;
        String sql,sqlXAlias,sqlYAlias;
        if(processId.isEmpty()){
            processId = "Z000008";
        }
        if (!start.isEmpty() && !end.isEmpty()){
            startTime = simpleDateFormat.format(simpleDateFormat.parse(start+ " 00:00:00"));
            endTime = simpleDateFormat.format(simpleDateFormat.parse(end  + " 23:59:59"));
//            sql = "select wbs,count(*) as num,((manu_cycle - process_cycle)/process_cycle)*100 as extend from v_process_detail where wbs like '"+wbs+"' and process_time BETWEEN '"+startTime+"' AND '"+endTime+"' GROUP BY process_time,wbs ORDER BY wbs,num;";
            sql = "SELECT WORKER_NUM,to_char(output,'999999999990.99'),round(avg(extend),2) from (select WORKER_NUM,round(MANU_CYCLE/60/8/WORKER_NUM,2) as output,round(((MANU_CYCLE - PROCESS_CYCLE)/PROCESS_CYCLE*100),2) as extend from ROSS_WORKING_HOURS " +
                    "where PROCESS_ID like '"+processId+"'and WORKER_NUM IS NOT NULL and " +
                    "to_date('"+startTime+"','yyyy/mm/dd hh24:mi:ss')<= to_date(OP_START,'yyyy/mm/dd hh24:mi:ss') AND " +
                    "to_date('"+endTime+"','yyyy/mm/dd hh24:mi:ss') >= to_date(OP_END,'yyyy/mm/dd hh24:mi:ss') ) GROUP BY WORKER_NUM,output ORDER BY WORKER_NUM,output DESC";
            sqlXAlias = "select WORKER_NUM from ROSS_WORKING_HOURS where PROCESS_ID like '"+processId+"'and WORKER_NUM IS NOT NULL GROUP BY WORKER_NUM ORDER BY WORKER_NUM";
            sqlYAlias = "SELECT  to_char(output,'990.99') from (select round(MANU_CYCLE/60/8/WORKER_NUM,2) as output from ROSS_WORKING_HOURS " +
                    "where PROCESS_ID like '"+processId+"' ) GROUP BY output ORDER BY output";

        }else{
//            sql = "select wbs,count(*) as num,((manu_cycle - process_cycle)/process_cycle)*100 as extend from v_process_detail where wbs like '"+wbs+"' GROUP BY process_time,wbs ORDER BY wbs,num;";
            sql = "SELECT WORKER_NUM,to_char(output,'990.99'),round(avg(extend),2) from (select WORKER_NUM,round(MANU_CYCLE/60/8/WORKER_NUM,2) as output,round(((MANU_CYCLE - PROCESS_CYCLE)/PROCESS_CYCLE*100),2) as extend from ROSS_WORKING_HOURS " +
                    "where PROCESS_ID like '"+processId+"'and WORKER_NUM IS NOT NULL ) GROUP BY WORKER_NUM,output ORDER BY WORKER_NUM,output DESC";
            sqlXAlias = "select WORKER_NUM from ROSS_WORKING_HOURS where PROCESS_ID like '"+processId+"'and WORKER_NUM IS NOT NULL GROUP BY WORKER_NUM ORDER BY WORKER_NUM";
            sqlYAlias = "SELECT  to_char(output,'990.99') from (select round(MANU_CYCLE/60/8/WORKER_NUM,2) as output from ROSS_WORKING_HOURS " +
                    "where PROCESS_ID like '"+processId+"')  WHERE output is NOT NULL GROUP BY output ORDER BY output";
        }
//        String sql1 = "select process_time,speed,drive_bearing_temp_1 from Motor_temp where host_id like '11301561' and railway_lines like '3561' and process_time like '2017-03-15 %' GROUP BY process_time";
//        System.out.printf(sqlYAlias);
        optimize3d optimize3d = new optimize3d();
        optimize3d.setAnalysisDataList(processCycleServ.getAnalysisData(sql));
        optimize3d.setxAliasList(jobSizeServ.getSingleValueList(sqlXAlias));
        optimize3d.setyAliasList(jobSizeServ.getSingleValueList(sqlYAlias));
        System.out.println("123");
        return optimize3d;
    }
}
