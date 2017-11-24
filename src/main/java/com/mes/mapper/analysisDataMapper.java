package com.mes.mapper;

import com.mes.model.analysisData;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;


@Component("analysisDataMapper")
public class analysisDataMapper implements RowMapper<analysisData> {

    @Override
    public analysisData mapRow(ResultSet resultSet, int i) throws SQLException {
        analysisData a = new analysisData();
        a.setWbs(resultSet.getString(1));
        a.setName(resultSet.getString(2));
        a.setExtend(resultSet.getString(3));
        return a;
    }
}
