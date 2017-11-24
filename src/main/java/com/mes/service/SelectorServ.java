package com.mes.service;

import com.mes.dao.BaseDAO;
import com.mes.model.analysisData2;
import com.mes.model.selectorData;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.SQLException;
import java.util.List;

@Service("SelectorServ")
public class SelectorServ {
    @Resource(name = "baseDaoImpl")
    private BaseDAO<selectorData> selectorDataBaseDAO;

    @Resource(name = "baseDaoImpl")
    private BaseDAO<analysisData2> analysisData2Dao;

    @Resource(name = "analysisData2Mapper")
    private RowMapper<analysisData2> analysisData2RowMapper;

    @Resource(name = "selectorMapper")
    private RowMapper<selectorData> mapper;

    public List<selectorData> getSelectorData(String sql) throws SQLException {
        return selectorDataBaseDAO.doSelect(sql, mapper);
    }

    public List<analysisData2> getAnalysisData2(String sql) {
        try {
            return analysisData2Dao.doSelect(sql, analysisData2RowMapper);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}
