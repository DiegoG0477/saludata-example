package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.AlergiasService;
import com.saludata.SaluData.service.ArchivosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/archivos")
@CrossOrigin("http://localhost:5173")
public class ArchivosController {
    @Autowired
    private ArchivosService archivosService;

    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getArchivo(@PathVariable("pacienteId") String pacienteId){
        List<Object[]> urlUsuario = archivosService.getArchivo(pacienteId);
        return new ResponseEntity<>(urlUsuario, HttpStatus.OK);
    }
    @GetMapping("/ver")
    public ResponseEntity<List<Object[]>> getArchivos(){
        List<Object[]> urlUsuario = archivosService.getArchivos();
        return new ResponseEntity<>(urlUsuario, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarArchivo(@PathVariable("pacienteId") String pacienteId, @RequestParam("url") String url,@RequestParam("nombre") String nombreArchivo) {
        archivosService.insertArchivo(pacienteId,url, nombreArchivo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}