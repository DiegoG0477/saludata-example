package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.DireccionService;
import com.saludata.SaluData.service.GinecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/gineco")
@CrossOrigin("http://localhost:5173")
public class GinecoController {
    @Autowired
    private GinecoService ginecoService;

//    @GetMapping("/admin")
//    public ResponseEntity<List<String>> getUsuario() {
//        List<String> datosUsuario = adminService.getUsuario();
//        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
//    }


    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getGineco(@PathVariable("pacienteId") String pacienteId) {
        List<Object[]> datosGineco= ginecoService.getGineco(pacienteId);
        return new ResponseEntity<>(datosGineco, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarGineco(@PathVariable("pacienteId") String pacienteId, @RequestParam("menarca")int menarca, @RequestParam("ciclos") int ciclos, @RequestParam("papanicolau") int papanicolau, @RequestParam("mama") String mama,@RequestParam("ivsa") int ivsa, @RequestParam("mpf") String mpf,@RequestParam("antecedentes") String antecedentes,@RequestParam("anio") int anio, @RequestParam("mes") int mes, @RequestParam("dia") int dia) {
        Date fum=new Date(anio - 1900, mes, dia);
        ginecoService.insertGineco(pacienteId,menarca,ciclos,papanicolau,mama,ivsa,mpf,fum,antecedentes);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{pacienteId}")
    public ResponseEntity<Void> updateGineco(@PathVariable("pacienteId") String pacienteId, @RequestParam("menarca")int menarca, @RequestParam("ciclos") int ciclos, @RequestParam("papanicolau") int papanicolau, @RequestParam("mama") String mama,@RequestParam("ivsa") int ivsa, @RequestParam("mpf") String mpf,@RequestParam("antecedentes") String antecedentes,@RequestParam("anio") int anio,@RequestParam("mes") int mes,@RequestParam("dia") int dia) {
        Date fum=new Date(anio - 1900, mes, dia);
        ginecoService.updateGineco(pacienteId,menarca,ciclos,papanicolau,mama,ivsa,mpf,fum,antecedentes);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
