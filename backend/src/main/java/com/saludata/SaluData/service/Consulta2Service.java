package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class Consulta2Service {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getConsulta2(String idPaciente,String fecha) {
        String sql = "SELECT * FROM consulta_2 natural join paciente where id_paciente= ? && fecha=? ";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[16];
            fila[0] = rs.getObject("fecha");
            fila[1] = rs.getObject("peso");
            fila[2] = rs.getObject("peso_pregestional");
            fila[3] = rs.getObject("imc");
            fila[4] = rs.getObject("talla");
            fila[5] = rs.getObject("temperatura");
            fila[6] = rs.getObject("frecuencia_cardiaca");
            fila[7] = rs.getObject("frecuencia_respiratoria");
            fila[8] = rs.getObject("presion_arterial");
            fila[9] = rs.getObject("otro");
            fila[10] = rs.getObject("nombre");
            fila[11] = rs.getObject("apellido_pat");
            fila[12] = rs.getObject("apellido_mat");
            fila[13] = rs.getObject("fecha_nacimiento");
            fila[14] = rs.getObject("genero");
            fila[15] = rs.getObject("altura");
            return fila;
        },idPaciente,fecha);
    }
    public void insertConsulta2(String idPaciente,Date fecha,int peso, int peso_pregestional,float imc, int talla,float temperatura,int frecuenciaCar,int frecuenciaRes,String presion,String otro, int altura) {
        String sql = "INSERT INTO consulta_2 (id_paciente,fecha,peso,peso_pregestional,imc,talla,temperatura,frecuencia_cardiaca,frecuencia_respiratoria,presion_arterial,otro, altura) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente,fecha,peso,peso_pregestional,imc,talla,temperatura,frecuenciaCar,frecuenciaRes,presion,otro, altura);
    }
}
