package com.saludata.SaluData.controller;

import com.saludata.SaluData.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/administrador")
public class AdminController {
    @Autowired
    private AdminService adminService;

//    @GetMapping("/admin")
//    public ResponseEntity<List<String>> getUsuario() {
//        List<String> datosUsuario = adminService.getUsuario();
//        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
//    }


    @GetMapping("/admin")
    public ResponseEntity<List<Object[]>> getUsuario() {
        List<Object[]> datosUsuario = adminService.getUsuario();
        return new ResponseEntity<>(datosUsuario, HttpStatus.OK);
    }

}
