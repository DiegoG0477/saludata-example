package com.saludata.SaluData.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name = "consulta")
public class Consulta{
    @EmbeddedId
    private ConsultaId id;

    private String sintomasIniciacion;
    private String motivoConsulta;
    private String laboratoriosPrevios;
    private String estudiosPrevios;
    private String terapiaEmpleada;

    public Consulta(String id_paciente,Date fecha, String sintomasIniciacion, String motivoConsulta, String laboratoriosPrevios, String estudiosPrevios, String terapiaEmpleada) {
        this.id = new ConsultaId(id_paciente, fecha);
        this.sintomasIniciacion = sintomasIniciacion;
        this.motivoConsulta = motivoConsulta;
        this.laboratoriosPrevios = laboratoriosPrevios;
        this.estudiosPrevios = estudiosPrevios;
        this.terapiaEmpleada = terapiaEmpleada;
    }

    @Override
    public String toString() {
        return "Consulta{" +
                "id=" + id +
                ", sintomasIniciacion='" + sintomasIniciacion + '\'' +
                ", motivoConsulta='" + motivoConsulta + '\'' +
                ", laboratoriosPrevios='" + laboratoriosPrevios + '\'' +
                ", estudiosPrevios='" + estudiosPrevios + '\'' +
                ", terapiaEmpleada='" + terapiaEmpleada + '\'' +
                '}';
    }

    public Consulta() {
    }

    public ConsultaId getId() {
        return id;
    }
}
