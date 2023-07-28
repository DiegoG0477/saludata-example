package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.AlimentacionService;
import com.saludata.SaluData.service.AntecedentesPatologicosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/antecedentesPatologicos")
@CrossOrigin("http://localhost:5173")
public class AntecedentesPatologicosController {
    @Autowired
    private AntecedentesPatologicosService antecedentesPatologicosService;

//    @GetMapping("/admin")
//    public ResponseEntity<List<String>> getUsuario() {
//        List<String> datosUsuario = adminService.getUsuario();
//        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
//    }


    @GetMapping("/buscar/{pacienteId}")
    public ResponseEntity<List<Object[]>> getAntecedentesPatolgicos(@PathVariable("pacienteId") String pacienteId) {
        List<Object[]> datosAntecedentesPatolgicos = antecedentesPatologicosService.getAntecentesPatologicos(pacienteId);
        return new ResponseEntity<>(datosAntecedentesPatolgicos, HttpStatus.OK);
    }
    @PostMapping("/{pacienteId}")
    public ResponseEntity<Void> insertarAntecedentesPatolgicos(@PathVariable("pacienteId") String pacienteId, @RequestParam("covid") int covid, @RequestParam("traumatismo") String traumatismo, @RequestParam("hospitalizacion") int hospitalizacion, @RequestParam("enfermedad") String enfermedad, @RequestParam("cirugias")int cirugias) {
        antecedentesPatologicosService.insertAntecentesPatologicos(pacienteId,covid,traumatismo,hospitalizacion,enfermedad,cirugias);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/{pacienteId}")
    public ResponseEntity<Void> updateAntecedentesPatolgicos(@PathVariable("pacienteId") String pacienteId, @RequestParam("covid") int covid, @RequestParam("traumatismo") String traumatismo, @RequestParam("hospitalizacion") int hospitalizacion, @RequestParam("enfermedad") String enfermedad, @RequestParam("cirugias")int cirugias) {
        antecedentesPatologicosService.updateAntecentesPatologicos(pacienteId,covid,traumatismo,hospitalizacion,enfermedad,cirugias);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
