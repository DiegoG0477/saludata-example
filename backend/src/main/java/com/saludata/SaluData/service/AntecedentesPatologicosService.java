package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AntecedentesPatologicosService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getAntecentesPatologicos(String idPaciente) {
        String sql = "SELECT * FROM antecedentes_patologicos where id_paciente= ? ";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[5];
            fila[0] = rs.getObject("covid");
            fila[1] = rs.getObject("traumatismo");
            fila[2] = rs.getObject("hospitalizacion");
            fila[3] = rs.getObject("enfermedad_cronica");
            fila[4] = rs.getObject("cirugias");
            return fila;
        },idPaciente);
    }
    public void insertAntecentesPatologicos(String idPaciente, int covid,String traumatismo,int hospitalizacion,String enfermedad,int cirugias) {
        String sql = "INSERT INTO antecedentes_patologicos (id_paciente,covid,traumatismo,hospitalizacion,enfermedad_cronica,cirugias) VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente,covid,traumatismo,hospitalizacion,enfermedad,cirugias);
    }
    public void updateAntecentesPatologicos(String idPaciente, int covid,String traumatismo,int hospitalizacion,String enfermedad,int cirugias) {
        String sql = "UPDATE antecedentes_patologicos SET covid=?,traumatismo=?,hospitalizacion=?,enfermedad_cronica=?,cirugias=? WHERE id_paciente=?";
        jdbcTemplate.update(sql,covid,traumatismo,hospitalizacion,enfermedad,cirugias,idPaciente);
    }
}
