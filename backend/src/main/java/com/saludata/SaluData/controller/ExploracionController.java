package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.Consulta2Service;
import com.saludata.SaluData.service.ExploracionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/exploracion")
@CrossOrigin("http://localhost:5173")
public class ExploracionController {
    @Autowired
    private ExploracionService exploracionService;

//    @GetMapping("/admin")
//    public ResponseEntity<List<String>> getUsuario() {
//        List<String> datosUsuario = adminService.getUsuario();
//        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
//    }


    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getExploracion(@PathVariable("pacienteId") String pacienteId,@RequestParam ("fecha") String fecha) {
        List<Object[]> datosExploracion= exploracionService.getExploracion(pacienteId,fecha);
        return new ResponseEntity<>(datosExploracion, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarExploracion(@PathVariable("pacienteId") String pacienteId, @RequestParam("inspeccion") String inspeccion, @RequestParam("cabeza")String cabeza, @RequestParam("torax")String torax, @RequestParam("abdomen")String abdomen, @RequestParam("genitales")String genitales, @RequestParam("pelvicas")String pelvicas,@RequestParam("toraxicas")String toraxicas,@RequestParam("diagnostico")String diagnostico, @RequestParam("plan")String plan) {
        Date fecha=new Date();
        exploracionService.insertExploracion(pacienteId,fecha,inspeccion,cabeza,torax,abdomen,genitales,pelvicas,toraxicas,diagnostico,plan);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
