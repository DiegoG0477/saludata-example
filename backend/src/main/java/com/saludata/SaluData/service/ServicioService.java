package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<String> getServicios(String idPaciente) {
        String sql = "SELECT servicio FROM servicios where id_paciente = ?";
        return jdbcTemplate.queryForList(sql, String.class, idPaciente);
    }

    public void insertServicios(String idPaciente, String servicio) {
        String sql = "INSERT INTO servicios (id_paciente, servicio) VALUES (?, ?)";
        jdbcTemplate.update(sql, idPaciente, servicio);
    }
}
