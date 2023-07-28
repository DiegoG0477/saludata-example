package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.ViviendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/viviendas")
@CrossOrigin("http://localhost:5173")
public class ViviendaController {
    @Autowired
    private ViviendaService viviendaService;

//    @GetMapping("/admin")
//    public ResponseEntity<List<String>> getUsuario() {
//        List<String> datosUsuario = adminService.getUsuario();
//        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
//    }


    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getVivienda(@PathVariable("pacienteId") String pacienteId) {
        List<Object[]> datosVivienda = viviendaService.getVivienda(pacienteId);
        return new ResponseEntity<>(datosVivienda, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarVivienda(@PathVariable("pacienteId") String pacienteId, @RequestParam("habitan") String habitan,@RequestParam("habitantes") int habitantes,@RequestParam("cuartos") int cuartos, @RequestParam("tipo") String tipo) {
        viviendaService.insertVivenda(pacienteId,habitan,habitantes,cuartos,tipo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{pacienteId}")
    public ResponseEntity<Void> updateVivienda(@PathVariable("pacienteId") String pacienteId, @RequestParam("habitan") String habitan,@RequestParam("habitantes") int habitantes,@RequestParam("cuartos") int cuartos, @RequestParam("tipo") String tipo) {
        viviendaService.updateVivenda(pacienteId,habitan,habitantes,cuartos,tipo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
