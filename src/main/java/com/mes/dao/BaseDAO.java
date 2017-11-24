package com.mes.dao;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface BaseDAO<T> {

     List<T> doSelect(String sql,RowMapper<T> mapper) throws SQLException;

     List<Object[]> doSelectByJdbc(String sql)throws SQLException;

     List<T> doSelectByParam(String sql,Object[] args,int[] arg_type,RowMapper<T> mapper) throws SQLException;

     String getSingleValue(String sql) throws SQLException;

}
