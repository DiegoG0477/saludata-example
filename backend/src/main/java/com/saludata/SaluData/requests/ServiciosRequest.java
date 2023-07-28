package com.saludata.SaluData.requests;

import java.util.List;

public class ServiciosRequest {
    private String pacienteId;
    private List<String> servicios;

    public List<String> getServicios() {
        return servicios;
    }
}

