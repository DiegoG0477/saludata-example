package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ViviendaService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getVivienda(String idPaciente) {
        String sql = "SELECT * FROM vivienda where id_paciente= ? ";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[4];
            fila[0] = rs.getObject("habitan");
            fila[1] = rs.getObject("no_habitantes");
            fila[2] = rs.getObject("no_cuartos");
            fila[3] = rs.getObject("construida_tipo");
            return fila;
        },idPaciente);
    }
    public void insertVivenda(String idPaciente, String habitan,int habitantes,int cuartos,String tipo) {
        String sql = "INSERT INTO vivienda (id_paciente, habitan,no_habitantes,no_cuartos,construida_tipo) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente, habitan,habitantes,cuartos,tipo);
    }
    public void updateVivenda(String idPaciente, String habitan,int habitantes,int cuartos,String tipo) {
        String sql = "UPDATE vivienda SET habitan=?,no_habitantes=?,no_cuartos=?,construida_tipo=? WHERE id_paciente=?";
        jdbcTemplate.update(sql, habitan,habitantes,cuartos,tipo, idPaciente);
    }
}
