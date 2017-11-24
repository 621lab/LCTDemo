package com.mes.mapper;

import com.mes.model.selectorData;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component("selectorMapper")
public class selectorMapper implements RowMapper<selectorData> {
    @Override
    public selectorData mapRow(ResultSet resultSet, int i) throws SQLException {
        selectorData s = new selectorData();
        s.setName(resultSet.getObject(1).toString());
        return s;
    }
}
