package com.mes.service;

import com.mes.dao.BaseDAO;
import com.mes.model.jobSizeData;
import com.mes.model.selectorData;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.SQLException;
import java.util.List;

@Service
public class JobSizeServ {

    @Resource(name = "baseDaoImpl")
    private BaseDAO<jobSizeData> analysisDataDao;

    @Resource(name = "baseDaoImpl")
    private BaseDAO<selectorData> selectorDataDAO;

    @Resource(name = "jobSizeMapper")
    private RowMapper<jobSizeData> mapper;

    @Resource(name = "selectorMapper")
    private RowMapper<selectorData> selectorDataRowMapper;

    public List<jobSizeData> getAnalysisData(String sql) throws SQLException {
        return analysisDataDao.doSelect(sql, mapper);
    }

    public List<selectorData> getSingleValueList(String sql) throws SQLException {
        return selectorDataDAO.doSelect(sql, selectorDataRowMapper);
    }
}
