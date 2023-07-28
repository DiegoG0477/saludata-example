package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class GinecoLetrasService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getGinecoLetras(String idPaciente) {
        String sql = "SELECT * FROM gineco_obstetrico_letras where id_paciente= ? ";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[4];
            fila[0] = rs.getObject("g");
            fila[1] = rs.getObject("p");
            fila[2] = rs.getObject("a");
            fila[3] = rs.getObject("c");
            return fila;
        },idPaciente);
    }
    public void insertGinecoLetras(String idPaciente, int g, int p, int a,int c) {
        String sql = "INSERT INTO gineco_obstetrico_letras (id_paciente,g,p,a,c) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente,g,p,a,c);
    }
    public void updateGinecoLetras(String idPaciente, int g, int p, int a,int c) {
        String sql = "UPDATE gineco_obstetrico_letras SET g=?,p=?,a=?,c=? WHERE id_paciente=?";
        jdbcTemplate.update(sql,g,p,a,c, idPaciente);
    }
}
