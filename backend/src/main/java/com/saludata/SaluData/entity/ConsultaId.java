package com.saludata.SaluData.entity;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import lombok.Data;

@Data
@Embeddable
public class ConsultaId implements Serializable {

    private String idPaciente;
    private Date fecha;

    public ConsultaId() {
    }

    public ConsultaId(String idPaciente, Date fecha) {
        this.idPaciente = idPaciente;
        this.fecha = fecha;
    }

    // Getters, setters, equals, and hashCode methods.

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ConsultaId that = (ConsultaId) o;
        return Objects.equals(idPaciente, that.idPaciente) && Objects.equals(fecha, that.fecha);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idPaciente, fecha);
    }
}
