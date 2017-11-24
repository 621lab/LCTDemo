package com.mes.mapper;

import com.mes.model.jobSizeData;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component("jobSizeMapper")
public class jobSizeMapper implements RowMapper<jobSizeData>{
    @Override
    public jobSizeData mapRow(ResultSet resultSet, int i) throws SQLException {
        jobSizeData j = new jobSizeData();
        j.setWbs(resultSet.getObject(1).toString());
        j.setNum(resultSet.getObject(2).toString());
        j.setExtend(resultSet.getObject(3).toString());
        return j;
    }
}
