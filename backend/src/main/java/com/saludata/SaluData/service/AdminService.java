package com.saludata.SaluData.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getUsuario() {
        String sql = "SELECT * FROM administrador";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[2];
            fila[0] = rs.getObject("usuario");
            fila[1] = rs.getObject("password");
            return fila;
        });
    }
}
