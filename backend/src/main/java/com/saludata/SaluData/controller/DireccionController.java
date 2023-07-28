package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.AlimentacionService;
import com.saludata.SaluData.service.DireccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/direccion")
@CrossOrigin("http://localhost:5173")
public class DireccionController {
    @Autowired
    private DireccionService direccionService;

//    @GetMapping("/admin")
//    public ResponseEntity<List<String>> getUsuario() {
//        List<String> datosUsuario = adminService.getUsuario();
//        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
//    }


    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getDireccion(@PathVariable("pacienteId") String pacienteId) {
        List<Object[]> datosDireccion= direccionService.getDireccion(pacienteId);
        return new ResponseEntity<>(datosDireccion, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarDireccion(@PathVariable("pacienteId") String pacienteId, @RequestParam("calle") String calle,@RequestParam("colonia") String colonia, @RequestParam("codigo")int codigo, @RequestParam("casa")int casa, @RequestParam("originario")String originario, @RequestParam("residencia") String residencia) {
        direccionService.insertDireccion(pacienteId,calle,colonia,codigo,casa,originario, residencia);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{pacienteId}")
    public ResponseEntity<Void> updateDireccion(@PathVariable("pacienteId") String pacienteId, @RequestParam("calle") String calle,@RequestParam("colonia") String colonia, @RequestParam("codigo")int codigo, @RequestParam("casa")int casa, @RequestParam("pais")String pais, @RequestParam("estado") String estado, @RequestParam("municipio") String municipio) {
        direccionService.updateDireccion(pacienteId,calle,colonia,codigo,casa,pais,estado,municipio);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
