package com.saludata.SaluData.repository;

import com.saludata.SaluData.entity.Consulta;
import com.saludata.SaluData.entity.ConsultaId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;


@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, ConsultaId> {
    List<Consulta> findByIdIdPaciente(String idPaciente);

//    List<Consulta> findByPacienteId(String pacienteId);
//    Optional<Consulta> findByIdPacienteAndFecha(String idPaciente, Date fecha);
}
