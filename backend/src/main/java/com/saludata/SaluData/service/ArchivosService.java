package com.saludata.SaluData.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArchivosService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Object[]> getArchivo(String idPaciente) {
        String sql = "SELECT id_paciente,nombre,apellido_mat,apellido_pat,nombreArchivo,url FROM archivos NATURAL JOIN paciente where id_paciente=?";
        return jdbcTemplate.query(sql, (rs, rowNum) ->{
            Object[] fila = new Object[6];
            fila[0] = rs.getObject("id_paciente");
            fila[1] = rs.getObject("nombre");
            fila[2] = rs.getObject("apellido_mat");
            fila[3] = rs.getObject("apellido_pat");
            fila[4] = rs.getObject("nombreArchivo");
            fila[5] = rs.getObject("url");
            return fila;
        },idPaciente);
    }
    public List<Object[]> getArchivos() {
        String sql = "SELECT id_paciente,nombre,apellido_mat,apellido_pat,nombreArchivo,url FROM archivos NATURAL JOIN paciente";
        return jdbcTemplate.query(sql, (rs, rowNum) ->{
            Object[] fila = new Object[6];
            fila[0] = rs.getObject("id_paciente");
            fila[1] = rs.getObject("nombre");
            fila[2] = rs.getObject("apellido_mat");
            fila[3] = rs.getObject("apellido_pat");
            fila[4] = rs.getObject("nombreArchivo");
            fila[5] = rs.getObject("url");
            return fila;
        });
    }

    public void insertArchivo(String idPaciente, String archivo, String nombreArchivo) {
        String sql = "INSERT INTO archivos (id_paciente, url, nombreArchivo) VALUES (?, ?,?)";
        jdbcTemplate.update(sql, idPaciente, archivo, nombreArchivo);
    }
}
