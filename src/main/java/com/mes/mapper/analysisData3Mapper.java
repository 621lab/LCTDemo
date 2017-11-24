package com.mes.mapper;

import com.mes.model.analysisData3;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component("analysisData3Mapper")
public class analysisData3Mapper implements RowMapper<analysisData3>{
    @Override
    public analysisData3 mapRow(ResultSet rs, int i) throws SQLException {
        analysisData3 a = new analysisData3();
        a.setORDER_HEADER(rs.getString(1));
        a.setORDER_LINE(rs.getString(2));
        a.setPROCESS_ID(rs.getString(3));
        a.setPROCESS_NAME(rs.getString(4));
        a.setPROJECT_NAME(rs.getString(5));
        a.setWBS(rs.getString(6));
        a.setPRODUCT_NAME(rs.getString(7));
        a.setTRAIN_NUMBER(rs.getString(8));
        a.setCARRIAGE_NUMBER(rs.getString(9));
        a.setCARRIAGE_TYPE(rs.getString(10));
        a.setOP_START(rs.getString(11));
        a.setOP_END(rs.getString(12));
        a.setPROCESS_CYCLE(rs.getString(13));
        a.setMANU_CYCLE(rs.getString(14));
        a.setTEAM_ID(rs.getString(15));
        a.setWORKER_NUM(rs.getString(16));
        return a;
    }
}
