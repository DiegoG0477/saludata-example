package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DireccionService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

//    @Transactional
//    public List<String> getUsuario() {
//        String sql = "SELECT * from administrador";
//        return jdbcTemplate.queryForList(sql, String.class);
////        jdbcTemplate.update(sql, usuario, password);
//    }

    public List<Object[]> getDireccion(String idPaciente) {
        String sql = "SELECT calle,colonia,codigo_postal,no_casa,originario,residencia FROM direccion where id_paciente= ? ";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[6];
            fila[0] = rs.getObject("calle");
            fila[1] = rs.getObject("colonia");
            fila[2] = rs.getObject("codigo_postal");
            fila[3] = rs.getObject("no_casa");
            fila[4] = rs.getObject("originario");
            fila[5] = rs.getObject("residencia");
            return fila;
        },idPaciente);
    }
    public void insertDireccion(String idPaciente, String calle, String colonia,int codigo,int casa,String originario, String residencia) {
        String sql = "INSERT INTO direccion (id_paciente,calle,colonia,codigo_postal,no_casa,originario,residencia) VALUES (?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, idPaciente,calle,colonia,codigo,casa,originario,residencia);
    }
    public void updateDireccion(String idPaciente, String calle, String colonia,int codigo,int casa,String pais, String estado, String municipio) {
        String sql = "UPDATE direccion SET calle=?,colonia=?,codigo_postal=?,no_casa=?,pais=?,estado=?,municipio=? WHERE id_paciente=?";
        jdbcTemplate.update(sql,calle,colonia,codigo,casa,pais,estado,municipio, idPaciente);
    }
}
