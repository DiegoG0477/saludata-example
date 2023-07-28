package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ExploracionService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getExploracion(String idPaciente, String fecha) {
        String sql = "SELECT * FROM exploracion_fisica where id_paciente= ? && fecha=? ";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[10];
            fila[0] = rs.getObject("fecha");
            fila[1] = rs.getObject("inspeccion_general");
            fila[2] = rs.getObject("cabeza");
            fila[3] = rs.getObject("torax");
            fila[4] = rs.getObject("abdomen");
            fila[5] = rs.getObject("genitales");
            fila[6] = rs.getObject("extremidades_pelvicas");
            fila[7] = rs.getObject("extremidades_toraxicas");
            fila[8] = rs.getObject("diagnostico");
            fila[9] = rs.getObject("plan");
            return fila;
        },idPaciente,fecha);
    }
    public void insertExploracion(String idPaciente, Date fecha,String inspeccion,String cabeza,String torax,String abdomen,String genitales,String pelvicas,String toraxicas,String diagnostico,String plan) {
        String sql = "INSERT INTO exploracion_fisica (id_paciente,fecha,inspeccion_general,cabeza,torax,abdomen,genitales,extremidades_pelvicas,extremidades_toraxicas,diagnostico,plan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente,fecha,inspeccion,cabeza,torax,abdomen,genitales,pelvicas,toraxicas,diagnostico,plan);
    }
}
