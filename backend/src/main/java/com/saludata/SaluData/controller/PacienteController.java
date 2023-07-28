package com.saludata.SaluData.controller;

import com.saludata.SaluData.entity.ConsultaId;
import com.saludata.SaluData.entity.Paciente;
import com.saludata.SaluData.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/pacientes")
@CrossOrigin("http://localhost:5173")
public class PacienteController {

    @Autowired
    private PacienteService pacienteService;

    @GetMapping
    public List<Paciente> getPacients(){
        return pacienteService.getPacientes();
    }

    @GetMapping("/buscar/{pacienteId}")
    public Optional<Paciente> getByPacienteId(@PathVariable("pacienteId") String pacienteId){
        return pacienteService.getPaciente(pacienteId);
    }


//    @PostMapping
//    public void saveUpdate(@RequestBody Paciente paciente){
//        pacienteService.saveOrUpdate(paciente);
//    }

    @PostMapping
    public void insert(@RequestBody Paciente paciente){
//        paciente.generarId(paciente.getNombre(), paciente.getApellidoMat(), paciente.getApellidoPat(), paciente.getFechaNacimiento());
        pacienteService.savePaciente(paciente);
    }

//    @PostMapping
//    public void insert(@RequestParam String nombre, @RequestParam String apellidoPat, @RequestParam String apellidoMat, @RequestParam String fechaNacimiento1, @RequestParam Long telefono, @RequestParam String genero, @RequestParam String heredosFamiliares){
//        System.out.println(nombre + apellidoPat);
//        Date fechaNacimiento = new Date(2023 - 1900, Calendar.JULY, 23);
//        Paciente paciente = new Paciente(nombre, apellidoMat, apellidoPat, fechaNacimiento, telefono, genero, heredosFamiliares);
//        paciente.generarId(nombre, apellidoMat, apellidoPat, fechaNacimiento);
//        pacienteService.savePaciente(paciente);
//    }

    @PostMapping("/bulk")
    public void saveAll(@RequestBody List<Paciente> pacientes){
        pacienteService.saveAll(pacientes);
    }

    @DeleteMapping("{pacienteId}")
    public void deletePacient(@PathVariable("pacienteId") String pacienteId){
        pacienteService.delete(pacienteId);
    }
}
