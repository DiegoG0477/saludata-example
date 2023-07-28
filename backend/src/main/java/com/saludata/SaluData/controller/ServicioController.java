package com.saludata.SaluData.controller;

import com.saludata.SaluData.requests.ServiciosRequest;
import com.saludata.SaluData.service.AlergiasService;
import com.saludata.SaluData.service.ServicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "api/v1/servicios")
@CrossOrigin("http://localhost:5173")

public class ServicioController {
    @Autowired
    private ServicioService servicioService;

    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<String>> getServicio(@PathVariable("pacienteId") String pacienteId){
        List<String> serviciosUsuario = servicioService.getServicios(pacienteId);
        return new ResponseEntity<>(serviciosUsuario, HttpStatus.OK);
    }

//    @PostMapping("/{pacienteId}")
//    public ResponseEntity<Void> insertarServicio(@PathVariable("pacienteId") String pacienteId, @RequestBody String servicio) {
//        servicioService.insertServicios(pacienteId,servicio);
//        return new ResponseEntity<>(HttpStatus.CREATED);
//    }

//    @PostMapping("/{pacienteId}")
//    public ResponseEntity<Void> insertarServicio(@RequestBody Map<String, Object> data) {
//        String pacienteId = (String) data.get("pacienteId");
//        List<String> servicios = (List<String>) data.get("servicios");
//
//        for (String servicio : servicios) {
//            System.out.println(servicio);
//            System.out.println("prueba de servicio");
//            servicioService.insertServicios(pacienteId, servicio);
//        }
//
//        return new ResponseEntity<>(HttpStatus.CREATED);
//    }

    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarServicio(@PathVariable("pacienteId") String pacienteId, @RequestBody ServiciosRequest request) {
//        String pacienteId = request.getPacienteId();
        List<String> servicios = request.getServicios();

        System.out.println(servicios);

        for (String servicio : servicios) {
            System.out.println("prueba de servicio");
            System.out.println(servicio);
            servicioService.insertServicios(pacienteId, servicio);
        }

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
