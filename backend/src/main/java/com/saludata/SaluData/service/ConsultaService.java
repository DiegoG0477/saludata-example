package com.saludata.SaluData.service;

import com.saludata.SaluData.entity.Consulta;
import com.saludata.SaluData.entity.ConsultaId;
import com.saludata.SaluData.entity.Paciente;
import com.saludata.SaluData.repository.ConsultaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ConsultaService {
    @Autowired
    ConsultaRepository consultaRepository;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Consulta> getConsultas() {
        return consultaRepository.findAll();
    }

    public List<Paciente> getPacientes() {
        String sql = "SELECT id_paciente, nombre, apellido_pat, apellido_mat FROM paciente where id_paciente in(select id_paciente FROM paciente natural join consulta)";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Paciente paciente = new Paciente();
            paciente.setIdPaciente(rs.getString("id_paciente"));
            paciente.setNombre(rs.getString("nombre"));
            paciente.setApellidoPat(rs.getString("apellido_pat"));
            paciente.setApellidoMat(rs.getString("apellido_mat"));
            return paciente;
        });
    }
    public List<Object[]> getConsultaTabla() {
        String sql = "select nombre,apellido_mat,apellido_pat,id_paciente,fecha,diagnostico from paciente natural join consulta natural join exploracion_fisica";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[6];
            fila[0] = rs.getObject("nombre");
            fila[1] = rs.getObject("apellido_pat");
            fila[2] = rs.getObject("apellido_mat");
            fila[3] = rs.getObject("id_paciente");
            fila[4] = rs.getObject("fecha");
            fila[5] = rs.getObject("diagnostico");
            return fila;
        });
    }
    public List<Object[]> getConsultaEspe(String idpaciente,String fecha) {
        String sql = "select nombre,apellido_mat,apellido_pat,id_paciente,fecha,diagnostico from paciente natural join consulta natural join exploracion_fisica where id_paciente=? && fecha=?";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Object[] fila = new Object[6];
            fila[0] = rs.getObject("nombre");
            fila[1] = rs.getObject("apellido_pat");
            fila[2] = rs.getObject("apellido_mat");
            fila[3] = rs.getObject("id_paciente");
            fila[4] = rs.getObject("fecha");
            fila[5] = rs.getObject("diagnostico");
            return fila;
        },idpaciente,fecha);
    }


    public Optional<Consulta> getConsulta(String idPaciente, Date fecha) {
        ConsultaId consultaId = new ConsultaId(idPaciente, fecha);
        return consultaRepository.findById(consultaId);
//            return consultaRepository.findByIdPacienteAndFecha(idPaciente, fecha);
    }


    public List<Consulta> getConsultasPaciente(String idPaciente){
        return consultaRepository.findByIdIdPaciente(idPaciente);}


    public void save(Consulta consulta) {
        ConsultaId consultaId = new ConsultaId(consulta.getId().getIdPaciente(), consulta.getId().getFecha());
        Optional<Consulta> consultaExistente = consultaRepository.findById(consultaId);

        if (consultaExistente.isPresent()) {
            System.out.println("no se agrego, porque ya existe");
        } else {
            // Si la consulta no existe, guárdala como una nueva
            consultaRepository.save(consulta);
        }
    }
    public void update(Consulta consulta){
        ConsultaId consultaId = new ConsultaId(consulta.getId().getIdPaciente(), consulta.getId().getFecha());
        Optional<Consulta> consultaExistente = consultaRepository.findById(consultaId);
            Consulta consultaExistenteData = consultaExistente.get();
            consultaExistenteData.setSintomasIniciacion(consulta.getSintomasIniciacion());
            consultaExistenteData.setMotivoConsulta(consulta.getMotivoConsulta());
            consultaExistenteData.setLaboratoriosPrevios(consulta.getLaboratoriosPrevios());
            consultaExistenteData.setEstudiosPrevios(consulta.getEstudiosPrevios());
            consultaExistenteData.setTerapiaEmpleada(consulta.getTerapiaEmpleada());
            consultaRepository.save(consultaExistenteData);
    }

    public void delete(String idpaciente, Date fecha) {
        ConsultaId consultaId = new ConsultaId(idpaciente, fecha);
        consultaRepository.deleteById(consultaId);
    }
}

