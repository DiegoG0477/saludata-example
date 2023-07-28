package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.Consulta2Service;
import com.saludata.SaluData.service.GinecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/consulta2")
@CrossOrigin("http://localhost:5173")
public class Consulta2Controller {
    @Autowired
    private Consulta2Service consulta2Service;

    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getConsulta2(@PathVariable("pacienteId") String pacienteId, @RequestParam("fecha") String fecha) {
        List<Object[]> datosConsulta2= consulta2Service.getConsulta2(pacienteId,fecha);
        return new ResponseEntity<>(datosConsulta2, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarConsulta2(@PathVariable("pacienteId") String pacienteId, @RequestParam("peso") int peso, @RequestParam("pregestional") int peso_pregestional, @RequestParam("imc")float imc, @RequestParam("talla")int talla, @RequestParam("temperatura")float temperatura, @RequestParam("frecuenciaCar")int frecuenciaCar, @RequestParam("frecuenciaRes") int frecuenciaRes,@RequestParam("presion") String presion,@RequestParam("otro")String otro, @RequestParam("altura") int altura) {
        Date fecha=new Date();
        consulta2Service.insertConsulta2(pacienteId,fecha,peso,peso_pregestional,imc,talla,temperatura,frecuenciaCar,frecuenciaRes,presion,otro, altura);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
