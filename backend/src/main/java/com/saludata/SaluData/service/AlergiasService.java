package com.saludata.SaluData.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AlergiasService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<String> getAlergias(String idPaciente) {
        String sql = "SELECT alergia FROM alergias where id_paciente = ?";
        return jdbcTemplate.queryForList(sql, String.class, idPaciente);
    }

    public void insertAlergia(String idPaciente, String alergia) {
        String sql = "INSERT INTO alergias (id_paciente, alergia) VALUES (?, ?)";
        jdbcTemplate.update(sql, idPaciente, alergia);
    }
}
