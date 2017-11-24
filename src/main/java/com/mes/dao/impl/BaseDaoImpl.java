package com.mes.dao.impl;

import com.mes.dao.BaseDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


@Repository("baseDaoImpl")
class BaseDaoImpl<T> implements BaseDAO<T> {
    private final static Logger logger = LoggerFactory.getLogger(BaseDaoImpl.class);

    @Resource(name = "jdbcTemplate")
    private JdbcTemplate jdbcTemplate;

    @Resource(name = "dataSource")
    private DataSource dataSource;

    @Override
    public List<T> doSelect(String sql, RowMapper<T> mapper){
        try {
            return jdbcTemplate.query(sql,mapper);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;

    }
    @Override
    public List<Object[]> doSelectByJdbc(String sql)throws SQLException{
            List<Object[]> dataList = new ArrayList<>();
            Connection connection = dataSource.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            ResultSet resultSet = preparedStatement.executeQuery();
            int len = resultSet.getMetaData().getColumnCount();
            while (resultSet.next()){
                Object[] objects = new Object[len];
                for(int i = 0;i<len;i++){
                    objects[i] = resultSet.getObject(i+1);
                }
                dataList.add(objects);
            }
            connection.close();
            return dataList;
    }

    @Override
    public List<T> doSelectByParam(String sql, Object[] args, int[] arg_type, RowMapper<T> mapper) throws SQLException {
        try {
            return jdbcTemplate.query(sql,args,arg_type, mapper);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public String getSingleValue(String sql)throws SQLException {
        return jdbcTemplate.queryForObject(sql,String.class);
    }
}
