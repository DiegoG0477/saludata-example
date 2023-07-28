package com.saludata.SaluData.controller;

import com.saludata.SaluData.entity.Paciente;
import com.saludata.SaluData.service.IdTemporalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/temporales")
@CrossOrigin("http://localhost:5173")

public class IdTemporalController {
    @Autowired
    IdTemporalService idTemporalService;

    @PostMapping
    public ResponseEntity<Void> insertarServicio(@RequestParam("id") String id) {
        System.out.println(id);
        idTemporalService.insertIdTemporal(id);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public List<String> getTemporales(){
//        return idTemporalService.getTemporales();
        List<String> temporales = idTemporalService.getTemporales();
        return new ResponseEntity<>(temporales, HttpStatus.OK).getBody();
    }

    @DeleteMapping
    public void vaciarTemporales(){
        idTemporalService.deleteAll();
    }

}
