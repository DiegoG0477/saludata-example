package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class GinecoService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getGineco(String idPaciente) {
        String sql = "SELECT * FROM gineco_obstetrico where id_paciente= ? ";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[8];
            fila[0] = rs.getObject("menarca");
            fila[1] = rs.getObject("ciclos_mestruales");
            fila[2] = rs.getObject("papanicolau");
            fila[3] = rs.getObject("ca_mama");
            fila[4] = rs.getObject("ivsa");
            fila[5] = rs.getObject("mpf");
            fila[6] = rs.getObject("fum");
            fila[7] = rs.getObject("antecedentes_perinatales");
            return fila;
        },idPaciente);
    }
    public void insertGineco(String idPaciente, int menarca, int ciclos, int papanicolau, String mama, int ivsa, String mpf, Date fum,String antecedentes) {
        String sql = "INSERT INTO gineco_obstetrico (id_paciente,menarca,ciclos_mestruales,papanicolau,ca_mama,ivsa,mpf,fum,antecedentes_perinatales) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente,menarca,ciclos,papanicolau,mama,ivsa,mpf,fum,antecedentes);
    }
    public void updateGineco(String idPaciente, int menarca, int ciclos, int papanicolau, String mama, int ivsa, String mpf, Date fum,String antecedentes) {
        String sql = "UPDATE gineco_obstetrico SET menarca=?,ciclos_mestruales=?,papanicolau=?,ca_mama=?,ivsa=?,mpf=?,fum=?,antecedentes_perinatales=? WHERE id_paciente=?";
        jdbcTemplate.update(sql,menarca,ciclos,papanicolau,mama,ivsa,mpf,fum,antecedentes, idPaciente);
    }
}
