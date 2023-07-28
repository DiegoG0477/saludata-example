package com.saludata.SaluData.controller;


import com.saludata.SaluData.entity.Paciente;
import com.saludata.SaluData.service.AlergiasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/alergias")
@CrossOrigin("http://localhost:5173")
public class AlergiasController {
    @Autowired
    private AlergiasService alergiasService;

    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<String>> getByPacienteId(@PathVariable("pacienteId") String pacienteId){
        List<String> alergiasUsuario = alergiasService.getAlergias(pacienteId);
        return new ResponseEntity<>(alergiasUsuario, HttpStatus.OK);
    }

    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarAlergia(@PathVariable("pacienteId") String pacienteId, @RequestBody String alergia) {
        alergiasService.insertAlergia(pacienteId, alergia);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
