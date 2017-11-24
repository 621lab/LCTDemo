package com.mes.service;

import com.mes.dao.BaseDAO;
import com.mes.model.analysisData;
import com.mes.model.analysisData2;
import com.mes.model.analysisData3;
import com.mes.model.selectorData;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.SQLException;
import java.util.List;

@Service("processCycleServ")
public class processCyclServ {

    @Resource(name = "baseDaoImpl")
    private BaseDAO<analysisData> analysisDataDao;

    @Resource(name = "baseDaoImpl")
    private BaseDAO<selectorData> selectorDataBaseDAO;

    @Resource(name = "baseDaoImpl")
    private BaseDAO<analysisData2> analysisData2Dao;

    @Resource(name = "baseDaoImpl")
    private BaseDAO<analysisData3> analysisData3Dao;

    @Resource(name = "selectorMapper")
    private RowMapper<selectorData> selectorDataRowMapper;

    @Resource(name = "analysisDataMapper")
    private RowMapper<analysisData> analysisDataRowMapper;

    @Resource(name = "analysisData2Mapper")
    private RowMapper<analysisData2> analysisData2RowMapper;

    @Resource(name = "analysisData3Mapper")
    private RowMapper<analysisData3> analysisData3RowMapper;

    public List<analysisData> getAnalysisDataByJdbc(String sql) {
        List<analysisData> analysisDataList = null;
        try {
            List<Object[]> objectList = analysisDataDao.doSelectByJdbc(sql);
            for(Object[] objects:objectList){
                analysisData a = new analysisData();
                a.setWbs(objects[0].toString());
                a.setExtend(objects[1].toString());
                analysisDataList.add(a);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return analysisDataList;
    }

    public List<analysisData> getAnalysisData(String sql) {
        try {
            return analysisDataDao.doSelect(sql, analysisDataRowMapper);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public List<analysisData2> getAnalysisData2(String sql) {
        try {
            return analysisData2Dao.doSelect(sql, analysisData2RowMapper);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<analysisData3> getAnalysisData3(String sql) {
        try {
            return analysisData3Dao.doSelect(sql, analysisData3RowMapper);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getSingleValue(String sql) throws SQLException {
        return analysisDataDao.getSingleValue(sql);
    }
}
