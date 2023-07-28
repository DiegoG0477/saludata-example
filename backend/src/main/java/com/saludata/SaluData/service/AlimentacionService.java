package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlimentacionService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getAlimentacion(String idPaciente) {
        String sql = "SELECT * FROM alimentacion where id_paciente= ? ";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[2];
            fila[0] = rs.getObject("comidas_diarias");
            fila[1] = rs.getObject("ingesta_agua");
            return fila;
        },idPaciente);
    }
    public void insertAlimentacion(String idPaciente, int comidas,float ingesta) {
        String sql = "INSERT INTO alimentacion (id_paciente,comidas_diarias,ingesta_agua) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente, comidas,ingesta);
    }
    public void update(String idPaciente,int comidas,float ingesta){
        String sql = "UPDATE alimentacion SET comidas_diarias=?,ingesta_agua=? WHERE id_paciente=?";
        jdbcTemplate.update(sql, comidas,ingesta,idPaciente);
    }
}
