package com.mes.mapper;

import com.mes.model.analysisData2;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;


@Component("analysisData2Mapper")
public class analysisData2Mapper implements RowMapper<analysisData2> {

    @Override
    public analysisData2 mapRow(ResultSet resultSet, int i) throws SQLException {
        analysisData2 a = new analysisData2();
        a.setNum(resultSet.getString(1));
        a.setManu_Cycle(resultSet.getString(2));
        return a;
    }
}
