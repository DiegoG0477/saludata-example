package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.AlimentacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/alimentacion")
@CrossOrigin("http://localhost:5173")
public class AlimentacionController {
    @Autowired
    private AlimentacionService alimentacionService;

//    @GetMapping("/admin")
//    public ResponseEntity<List<String>> getUsuario() {
//        List<String> datosUsuario = adminService.getUsuario();
//        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
//    }


    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getAlimentacion(@PathVariable("pacienteId") String pacienteId) {
        List<Object[]> datosAlimentacion = alimentacionService.getAlimentacion(pacienteId);
        return new ResponseEntity<>(datosAlimentacion, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarAlimentacion(@PathVariable("pacienteId") String pacienteId, @RequestParam("comidas") int comidas, @RequestParam("agua") float agua) {
        alimentacionService.insertAlimentacion(pacienteId,comidas,agua);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{pacienteId}")
    public ResponseEntity<Void> updateAlimentacion(@PathVariable("pacienteId") String pacienteId, @RequestParam("comidas") int comidas, @RequestParam("agua") float agua) {
        alimentacionService.update(pacienteId,comidas,agua);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
