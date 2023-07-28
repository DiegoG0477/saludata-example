package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class InterrogatorioService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getInterrogatorio(String idPaciente,String fecha) {
        String sql = "SELECT * FROM interrogatoriosistema where id_paciente= ? && fecha=?";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[10];
            fila[0] = rs.getObject("fecha");
            fila[1] = rs.getObject("a_digestivo");
            fila[2] = rs.getObject("a_respiratorio");
            fila[3] = rs.getObject("a_urinario");
            fila[4] = rs.getObject("genitales");
            fila[5] = rs.getObject("s_cardio_vascular");
            fila[6] = rs.getObject("s_nervioso");
            fila[7] = rs.getObject("s_endocrino");
            fila[8] = rs.getObject("s_locomotor");
            fila[9] = rs.getObject("sintomas_generales");
            return fila;
        },idPaciente,fecha);
    }
    public void insertInterrogatorio(String idPaciente, Date fecha, String digestivo, String respiratorio, String urinario, String genitales, String cardio, String nervioso, String endocrino, String locomotor, String generales) {
        String sql = "INSERT INTO interrogatoriosistema (id_paciente,fecha,a_digestivo,a_respiratorio,a_urinario,genitales,s_cardio_vascular,s_nervioso,s_endocrino,s_locomotor,sintomas_generales) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente,fecha,digestivo,respiratorio,urinario,genitales,cardio,nervioso,endocrino,locomotor,generales);
    }
}
