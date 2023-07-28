package com.saludata.SaluData.controller;

import com.saludata.SaluData.entity.Consulta;
import com.saludata.SaluData.entity.ConsultaId;
import com.saludata.SaluData.entity.Paciente;
import com.saludata.SaluData.service.ConsultaService;
import jakarta.persistence.PostUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/consultas")
@CrossOrigin("http://localhost:5173")
public class ConsultaController {

    @Autowired
    private ConsultaService consultaService;

    @GetMapping("/todos")
    public List<Consulta> getAllConsultas(){
        return consultaService.getConsultas();
    }

    @GetMapping("/pacientes")
    public List<Paciente> getNombresConsultas(){
        return consultaService.getPacientes();
    }

//    @GetMapping("/paciente/{pacienteId}")
//    public List<Consulta> getConsultasByPacienteId(@PathVariable("pacienteId") String pacienteId) {
//        return consultaService.getConsultasByPacienteId(pacienteId);
//    }
    @GetMapping("/tabla")
    public ResponseEntity<List<Object[]>> getConsultasTabla() {
        List<Object[]> datosConsulta = consultaService.getConsultaTabla();
        return new ResponseEntity<>(datosConsulta, HttpStatus.OK);
    }
    @GetMapping("/buscarEspe/{consultaId}")
    public ResponseEntity<List<Object[]>> getConsultaEspe(@PathVariable("consultaId") String idPaciente,@RequestParam("fecha") String fecha) {
        List<Object[]> datosConsultaEspe = consultaService.getConsultaEspe(idPaciente,fecha);
        return new ResponseEntity<>(datosConsultaEspe, HttpStatus.OK);
    }

    @GetMapping("/buscar/{consultaId}")
    public Optional<Consulta> getByConsultaId(@PathVariable("consultaId") String idPaciente,@RequestParam("fecha") String fecha) throws ParseException {
        Date date=new Date(fecha);
        return consultaService.getConsulta(idPaciente,date);
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<Consulta> getConsultasPaciente(@PathVariable("pacienteId") String pacienteId) {
        return consultaService.getConsultasPaciente(pacienteId);
    }

//    @PostMapping
//    public void save(Consulta consulta){
//        consultaService.save(consulta);
//    }

    @PostMapping
    public void save(@RequestParam("idPaciente") String idPaciente, @RequestParam("sintomasIniciacion") String sintomasIniciacion,@RequestParam("motivoConsulta") String motivoConsulta, @RequestParam("laboratoriosPrevios") String laboratoriosPrevios, @RequestParam("estudiosPrevios") String estudiosPrevios, @RequestParam("terapiaEmpleada") String terapiaEmpleada  ){
        System.out.println(idPaciente);
        Date fechaConsulta = new Date();
        Consulta consulta = new Consulta(idPaciente, fechaConsulta, sintomasIniciacion, motivoConsulta, laboratoriosPrevios, estudiosPrevios, terapiaEmpleada);
        consultaService.save(consulta);
    }

    @PostUpdate
    public void update(Consulta consulta){
        consultaService.update(consulta);
    }

    @DeleteMapping("{consultaId}")
    public void deleteConsulta(@PathVariable("consultaId") ConsultaId consultaId){
        consultaService.delete(consultaId.getIdPaciente(),consultaId.getFecha());
    }
}
