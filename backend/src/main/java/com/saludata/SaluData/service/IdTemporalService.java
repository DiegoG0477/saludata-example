package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Service
public class IdTemporalService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void insertIdTemporal(String pacienteId) {
        String sql = "INSERT INTO temporales (id_paciente) VALUES (?)";
        jdbcTemplate.update(sql, pacienteId);
    }

    public List<String> getTemporales() {
        String sql = "SELECT id_paciente FROM temporales";
        return jdbcTemplate.queryForList(sql, String.class);
    }

    public void deleteAll() {
        String sql = "TRUNCATE temporales;";
        jdbcTemplate.execute(sql);
    }
}
