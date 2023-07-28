package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.AlimentacionService;
import com.saludata.SaluData.service.AntecedentesNoPatologicosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/ancedentesNoPatologicos")
@CrossOrigin("http://localhost:5173")
public class AntecedentesNoPatologicosController {
    @Autowired
    private AntecedentesNoPatologicosService antecedentesNoPatologicosService;

//    @GetMapping("/admin")
//    public ResponseEntity<List<String>> getUsuario() {
//        List<String> datosUsuario = adminService.getUsuario();
//        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
//    }


    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getAntecentendesNoPatologicos(@PathVariable("pacienteId") String pacienteId) {
        List<Object[]> datosAntecedentes = antecedentesNoPatologicosService.getAntecedentesNoPatologicos(pacienteId);
        return new ResponseEntity<>(datosAntecedentes, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarAntecedentesNoPatologicos(@PathVariable("pacienteId") String pacienteId, @RequestParam("lengua") String lengua, @RequestParam("zoonosis") String zoonosis, @RequestParam("transfusion") String transfusion, @RequestParam("ocupacion") String ocupacion, @RequestParam("religion") String religion, @RequestParam("sangre") String sangre, @RequestParam("estadoCivil") String estadoCivil, @RequestParam("escolaridad") String escolaridad) {
        antecedentesNoPatologicosService.insertAntecedentesNoPatologicos(pacienteId,lengua,zoonosis,transfusion,ocupacion,religion,sangre,estadoCivil,escolaridad);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{pacienteId}")
    public ResponseEntity<Void> updateAntecedentesNoPatologicos(@PathVariable("pacienteId") String pacienteId, @RequestParam("lengua") String lengua, @RequestParam("zoonosis") String zoonosis, @RequestParam("transfusion") String transfusion, @RequestParam("ocupacion") String ocupacion, @RequestParam("religion") String religion, @RequestParam("sangre") String sangre, @RequestParam("estadoCivil") String estadoCivil, @RequestParam("escolaridad") String escolaridad) {
        antecedentesNoPatologicosService.updateAntecedentesNoPatologicos(pacienteId,lengua,zoonosis,transfusion,ocupacion,religion,sangre,estadoCivil,escolaridad);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
