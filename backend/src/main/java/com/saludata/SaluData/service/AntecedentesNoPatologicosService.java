package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AntecedentesNoPatologicosService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getAntecedentesNoPatologicos(String idPaciente) {
        String sql = "SELECT lengua_indigena,zoonosis,transfusion,ocupacion,religion,sangre,estado_civil,escolaridad FROM antecedentes_no_patologicos where id_paciente= ? ";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[8];
            fila[0] = rs.getObject("lengua_indigena");
            fila[1] = rs.getObject("zoonosis");
            fila[2] = rs.getObject("transfusion");
            fila[3] = rs.getObject("ocupacion");
            fila[4] = rs.getObject("religion");
            fila[5] = rs.getObject("sangre");
            fila[6] = rs.getObject("estado_civil");
            fila[7] = rs.getObject("escolaridad");
            return fila;
        },idPaciente);
    }
    public void insertAntecedentesNoPatologicos(String idPaciente, String lengua,String zoonosis,String transfusion,String ocupacion,String religion,String sangre,String estadoCivil,String escolaridad) {
        String sql = "INSERT INTO antecedentes_no_patologicos (id_paciente,lengua_indigena,zoonosis,transfusion,ocupacion,religion,sangre,estado_civil,escolaridad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente, lengua,zoonosis,transfusion,ocupacion,religion,sangre,estadoCivil,escolaridad);
    }
    public void updateAntecedentesNoPatologicos(String idPaciente, String lengua,String zoonosis,String transfusion,String ocupacion,String religion,String sangre,String estadoCivil,String escolaridad) {
        String sql = "UPDATE antecedentes_no_patologicos SET lengua_indigena=?,zoonosis=?,transfusion=?,ocupacion=?,religion=?,sangre=?,estado_civil=?,escolaridad=? WHERE id_paciente=?";
        jdbcTemplate.update(sql, lengua,zoonosis,transfusion,ocupacion,religion,sangre,estadoCivil,escolaridad,idPaciente);
    }
}
