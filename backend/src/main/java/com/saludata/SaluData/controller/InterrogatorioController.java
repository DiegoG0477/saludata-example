package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.ExploracionService;
import com.saludata.SaluData.service.InterrogatorioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/interrogatorio")
@CrossOrigin("http://localhost:5173")
public class InterrogatorioController {
    @Autowired
    private InterrogatorioService interrogatorioService;

    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getInterrogatorio(@PathVariable("pacienteId") String pacienteId,@RequestParam ("fecha") String fecha) {
        List<Object[]> datosInterrogatorio= interrogatorioService.getInterrogatorio(pacienteId,fecha);
        return new ResponseEntity<>(datosInterrogatorio, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarInterrogatorio(@PathVariable("pacienteId") String pacienteId, @RequestParam("digestivo") String digestivo, @RequestParam("respiratorio")String respiratorio, @RequestParam("urinario")String urinario,@RequestParam("genitales") String genitales, @RequestParam("cardio")String cardio, @RequestParam("nervioso")String nervioso, @RequestParam("endocrino")String endocrino,@RequestParam("locomotor")String locomotor,@RequestParam("generales")String generales) {
        Date fecha=new Date();
        interrogatorioService.insertInterrogatorio(pacienteId,fecha,digestivo,respiratorio,urinario,genitales,cardio,nervioso,endocrino,locomotor,generales);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
