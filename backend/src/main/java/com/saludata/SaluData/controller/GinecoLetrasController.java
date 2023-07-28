package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.GinecoLetrasService;
import com.saludata.SaluData.service.GinecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/ginecoLetras")
@CrossOrigin("http://localhost:5173")
public class GinecoLetrasController {
    @Autowired
    private GinecoLetrasService ginecoLetrasService;

//    @GetMapping("/admin")
//    public ResponseEntity<List<String>> getUsuario() {
//        List<String> datosUsuario = adminService.getUsuario();
//        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
//    }


    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getGinecoLetras(@PathVariable("pacienteId") String pacienteId) {
        List<Object[]> datosGinecoLetras= ginecoLetrasService.getGinecoLetras(pacienteId);
        return new ResponseEntity<>(datosGinecoLetras, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarGinecoLetras(@PathVariable("pacienteId") String pacienteId, @RequestParam("g")int g,@RequestParam("p")int p,@RequestParam("a")int a,@RequestParam("c")int c) {
        ginecoLetrasService.insertGinecoLetras(pacienteId,g,p,a,c);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{pacienteId}")
    public ResponseEntity<Void> updateGinecoLetras(@PathVariable("pacienteId") String pacienteId, @RequestParam("g")int g,@RequestParam("p")int p,@RequestParam("a")int a,@RequestParam("c")int c) {
        ginecoLetrasService.updateGinecoLetras(pacienteId,g,p,a,c);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}

